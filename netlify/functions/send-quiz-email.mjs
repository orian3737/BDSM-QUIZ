import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function formatPayload(payload) {
  const title = payload?.title || 'Pop Quiz response';
  const json = JSON.stringify(payload, null, 2);
  return `
    <h2>${title}</h2>
    <pre style="white-space: pre-wrap; font-family: monospace;">${json}</pre>
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
    const body = JSON.parse(event.body || '{}');
    const payload = body.payload || {};
    const result = await resend.emails.send({
      from: sender,
      to: [recipient],
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
