import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function parseRequestBody(rawBody) {
  if (!rawBody) return {};
  if (typeof rawBody === 'object') return rawBody;

  const text = String(rawBody).trim();
  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch (error) {
    // Netlify form submissions arrive as URL-encoded form data, not JSON.
    try {
      const params = new URLSearchParams(text);
      const parsed = Object.fromEntries(params.entries());
      if (parsed.payload) {
        try {
          parsed.payload = JSON.parse(parsed.payload);
        } catch {
          // Keep the string if it is not valid JSON; some form submissions keep raw text.
        }
      }
      return parsed;
    } catch {
      return {};
    }
  }
}

function normalizeReadableReview(payload) {
  if (typeof payload?.readableReview === 'string' && payload.readableReview.trim()) {
    return payload.readableReview.trim();
  }

  if (Array.isArray(payload?.sections)) {
    return payload.sections
      .map((section) => {
        const title = section?.title || 'Untitled section';
        const answers = Array.isArray(section?.answers) ? section.answers : [String(section?.answers ?? 'No answer provided.')];
        return `${title}\n${answers.map((entry) => `- ${String(entry)}`).join('\n')}`;
      })
      .join('\n\n');
  }

  const lines = [];
  const addKeyValue = (key, value) => {
    if (value === undefined || value === null || value === '') return;
    lines.push(`${key}: ${typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}`);
  };

  if (payload?.title) addKeyValue('Title', payload.title);
  if (payload?.submittedAt) addKeyValue('Submitted at', payload.submittedAt);
  if (payload?.archetypeScores) addKeyValue('Archetype scores', payload.archetypeScores);
  if (payload?.contract) addKeyValue('Contract', payload.contract);
  if (payload?.sectionA) addKeyValue('Section A', payload.sectionA);
  if (payload?.sectionB) addKeyValue('Section B', payload.sectionB);
  if (payload?.sectionC) addKeyValue('Section C', payload.sectionC);
  if (payload?.sectionD) addKeyValue('Section D', payload.sectionD);

  return lines.join('\n');
}

function formatPayload(payload) {
  const title = payload?.title || 'Pop Quiz response';
  const readableText = normalizeReadableReview(payload);
  return `
    <h2>${title}</h2>
    <pre style="white-space: pre-wrap; font-family: monospace;">${readableText}</pre>
  `;
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !sender || !recipient) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Missing RESEND_API_KEY, RESEND_FROM_EMAIL, or RESEND_TO_EMAIL environment variables.'
      })
    };
  }

  try {
    const body = parseRequestBody(event.body);
    const payload = body.payload && typeof body.payload === 'object' ? body.payload : {};
    const emailTarget = Array.isArray(body.emailTo)
      ? body.emailTo
      : body.emailTo
        ? [body.emailTo]
        : [recipient];

    const result = await resend.emails.send({
      from: sender,
      to: emailTarget,
      subject: payload.title ? `Pop Quiz: ${payload.title}` : 'New Pop Quiz response',
      html: formatPayload(payload)
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, id: result?.id || null })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error while sending email.'
      })
    };
  }
}
