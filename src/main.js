import './style.css';
import introImage from '../assets/ChatGPT Image Nov 12, 2026, 02_30_49 PM.png';
import quizData from './data/quiz.json';

const STORAGE_KEY = 'pop-quiz-state-v1';

const state = {
  screen: 'intro',
  consent: false,
  sectionIndex: 0,
  questionIndex: 0,
  devMode: false,
  answers: {
    sectionA: {},
    sectionB: {},
    sectionC: {},
    sectionD: {}
  },
  contract: {
    dos: [],
    donts: [],
    safeword: '',
    overwhelmed: '',
    notes: ''
  }
};

const scaleLabels = ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'];
const limitLabels = ['Yes', 'Curious', 'Maybe', 'No', 'Hard Limit'];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const contractOptions = {
  dos: ['Impact play', 'Rope & restraint', 'Praise / good girl', 'Rules & rituals', 'Aftercare', 'Scene texting', 'Public play'],
  donts: ['Needles', 'Knife play', 'Public humiliation', 'Being ignored during aftercare', 'Breath play', 'Pain without consent', 'Late-night ghosting']
};

function resetQuizState() {
  state.screen = 'intro';
  state.consent = false;
  state.sectionIndex = 0;
  state.questionIndex = 0;
  state.answers = { sectionA: {}, sectionB: {}, sectionC: {}, sectionD: {} };
  state.contract = {
    dos: [],
    donts: [],
    safeword: '',
    overwhelmed: '',
    notes: ''
  };
  localStorage.removeItem(STORAGE_KEY);
  render();
  bindEvents();
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      screen: state.screen,
      consent: state.consent,
      sectionIndex: state.sectionIndex,
      questionIndex: state.questionIndex,
      devMode: state.devMode,
      answers: state.answers,
      contract: state.contract
    }));
  } catch (error) {
    console.warn('Unable to save quiz progress locally.', error);
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!saved) return;
    state.screen = saved.screen || 'intro';
    state.consent = Boolean(saved.consent);
    state.sectionIndex = Number(saved.sectionIndex) || 0;
    state.questionIndex = Number(saved.questionIndex) || 0;
    state.devMode = Boolean(saved.devMode);
    state.answers = { ...state.answers, ...(saved.answers || {}) };
    state.contract = { ...state.contract, ...(saved.contract || {}) };
  } catch (error) {
    console.warn('Unable to restore quiz progress locally.', error);
  }
}

function hasSavedProgress() {
  try {
    return Boolean(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    return false;
  }
}

function currentSection() {
  return quizData.sections[state.sectionIndex];
}

function currentQuestion() {
  const section = currentSection();
  if (!section || !Array.isArray(section.questions)) return null;
  return section.questions[state.questionIndex] ?? null;
}

function nextSection() {
  if (state.sectionIndex < quizData.sections.length - 1) {
    state.sectionIndex += 1;
    state.questionIndex = 0;
    state.screen = 'section';
    saveProgress();
    render();
    bindEvents();
  } else {
    state.screen = 'results';
    saveProgress();
    render();
    bindEvents();
  }
}

function previousSection() {
  if (state.screen !== 'section') return;

  if (currentSection() && currentSection().id === 'A') {
    if (state.questionIndex > 0) {
      state.questionIndex -= 1;
      saveProgress();
      render();
      bindEvents();
      return;
    }
  }

  if (state.sectionIndex > 0) {
    state.sectionIndex -= 1;
    state.questionIndex = 0;
    saveProgress();
    render();
    bindEvents();
  }
}

function getSectionTitle(sectionId) {
  const section = quizData.sections.find((entry) => entry.id === sectionId);
  return section ? section.title : '';
}

function calculateArchetypeScores() {
  const totals = Object.fromEntries(quizData.archetypes.map((item) => [item.code, 0]));
  const weightedScores = Object.fromEntries(quizData.archetypes.map((item) => [item.code, 0]));

  const sectionA = quizData.sections.find((section) => section.id === 'A');
  sectionA.questions.forEach((item) => {
    const answer = state.answers.sectionA[item.id];
    if (answer == null) return;
    const norm = (answer - 1) / 4;
    Object.entries(item.weights || {}).forEach(([code, weight]) => {
      weightedScores[code] += weight * norm;
      totals[code] += weight;
    });
  });

  const results = quizData.archetypes.map((archetype) => {
    const total = totals[archetype.code] || 0;
    const score = total ? Math.round((weightedScores[archetype.code] / total) * 100) : 0;
    return {
      ...archetype,
      score,
      answered: total ? Object.values(state.answers.sectionA).filter((value) => value !== undefined).length : 0
    };
  });

  return results.sort((a, b) => {
    if ((b.score ?? 0) !== (a.score ?? 0)) return (b.score ?? 0) - (a.score ?? 0);
    const aCount = a.answered || 0;
    const bCount = b.answered || 0;
    return bCount - aCount;
  });
}

function getResultsTitle() {
  const ranked = calculateArchetypeScores().slice(0, 3);
  if (!ranked.length) return 'Collar Kitten with a Hunter streak';
  const first = ranked[0];
  const second = ranked[1] || ranked[0];
  return `${first.shortName} with a ${second.shortName} streak`;
}

function scaleLabel(value) {
  const index = Number(value);
  if (!Number.isFinite(index) || index < 1 || index > 5) return 'Unanswered';
  return scaleLabels[index - 1];
}

function formatAnswerList(list) {
  if (!Array.isArray(list) || list.length === 0) return 'No answer selected.';
  return list.join(', ');
}

function formatSectionAAnswers() {
  const section = quizData.sections.find((entry) => entry.id === 'A');
  return section.questions.map((question) => {
    const answer = state.answers.sectionA[question.id];
    return `Q: ${question.question}\nA: ${answer == null ? 'No answer selected.' : scaleLabel(answer)}`;
  });
}

function formatSectionBAnswers() {
  const section = quizData.sections.find((entry) => entry.id === 'B');
  return section.groups.flatMap((group) =>
    group.items.map((item) => {
      const key = `${group.title}::${item}`;
      const choice = state.answers.sectionB[key];
      const selected = typeof choice === 'object' && choice ? choice.answer : choice;
      const note = typeof choice === 'object' && choice ? choice.note : '';
      return `Q: ${item}\nA: ${selected || 'No answer selected.'}${note ? `\nNote: ${note}` : ''}`;
    })
  );
}

function formatSectionCAnswers() {
  const section = quizData.sections.find((entry) => entry.id === 'C');
  return section.questions.map((question) => {
    const answer = state.answers.sectionC[question.id];
    const custom = state.answers.sectionC[`${question.id}Custom`];

    if (question.type === 'open') {
      return `Q: ${question.question}\nA: ${answer || 'No answer entered.'}`;
    }

    const selection = Array.isArray(answer) ? answer : answer ? [answer] : [];
    const base = selection.length ? formatAnswerList(selection) : 'No answer selected.';
    const extra = custom ? `\nCustom: ${custom}` : '';
    return `Q: ${question.question}\nA: ${base}${extra}`;
  });
}

function formatSectionDAnswers() {
  const section = quizData.sections.find((entry) => entry.id === 'D');
  const ratings = section.ratings.map((question) => {
    const answer = state.answers.sectionD[question];
    return `Q: ${question}\nA: ${answer == null ? 'No answer selected.' : `${answer} / 5 — ${scaleLabel(answer)}`}`;
  });

  const opens = section.open.map((question) => {
    const answer = state.answers.sectionD[question];
    return `Q: ${question}\nA: ${answer || 'No answer entered.'}`;
  });

  return [...ratings, ...opens];
}

function buildAnswerSections() {
  return [
      { title: 'Section A — Know Thyself', answers: formatSectionAAnswers() },
      { title: 'Section B — The Limits Worksheet', answers: formatSectionBAnswers() },
      { title: 'Section C — Classroom Rules', answers: formatSectionCAnswers() },
      { title: 'Section D — Grade the Instructor', answers: formatSectionDAnswers() },
      { title: 'Comfort Contract / Notes', answers: [
        `Safeword / signal: ${state.contract.safeword || 'No answer entered.'}`,
        `How I want to be handled when overwhelmed: ${state.contract.overwhelmed || 'No answer entered.'}`,
        `Anything else to add: ${state.contract.notes || 'No answer entered.'}`
      ]}
  ];
}

function buildSubmissionPayload() {
  const sections = buildAnswerSections();
  return {
    submittedAt: new Date().toISOString(),
    title: getResultsTitle(),
    archetypeScores: Object.fromEntries(calculateArchetypeScores().map((item) => [item.code, item.score])),
    sections,
    readableReview: formatAnswerReview(sections),
    developerMode: state.devMode
  };
}

function formatAnswerReview(sections = buildAnswerSections()) {
  return sections
    .map((section) => `${section.title}\n${section.answers.map((entry) => `- ${entry}`).join('\n')}`)
    .join('\n\n');
}

function randomChoice(options) {
  return options[Math.floor(Math.random() * options.length)];
}

function getPercentTone(percent) {
  const value = Math.max(0, Math.min(100, Number(percent) || 0));

  if (value < 25) {
    return {
      text: '#c8102e',
      fill: 'linear-gradient(90deg, #c8102e, #9c0e24)'
    };
  }

  if (value <= 40) {
    return {
      text: '#b78a00',
      fill: 'linear-gradient(90deg, #e8bf2c, #c39200)'
    };
  }

  return {
    text: '#1c8b48',
    fill: 'linear-gradient(90deg, #46c67f, #19864f)'
  };
}

function applyDeveloperFill() {
  const sectionA = quizData.sections.find((section) => section.id === 'A');
  sectionA.questions.forEach((question) => {
    state.answers.sectionA[question.id] = Math.floor(Math.random() * 5) + 1;
  });

  const sectionB = quizData.sections.find((section) => section.id === 'B');
  sectionB.groups.forEach((group) => {
    group.items.forEach((item) => {
      const key = `${group.title}::${item}`;
      state.answers.sectionB[key] = { answer: randomChoice(limitLabels), note: '' };
    });
  });

  const sectionC = quizData.sections.find((section) => section.id === 'C');
  sectionC.questions.forEach((question) => {
    if (question.type === 'open') {
      state.answers.sectionC[question.id] = 'Developer test entry';
      return;
    }

    const selected = question.options.filter(() => Math.random() > 0.45);
    state.answers.sectionC[question.id] = selected.length ? selected : [question.options[0]];
    if (question.writeIn) {
      state.answers.sectionC[`${question.id}Custom`] = 'Developer fill';
    }
  });

  const sectionD = quizData.sections.find((section) => section.id === 'D');
  sectionD.ratings.forEach((question) => {
    state.answers.sectionD[question] = Math.floor(Math.random() * 5) + 1;
  });
  sectionD.open.forEach((question) => {
    state.answers.sectionD[question] = 'Developer test response';
  });

  state.contract = {
    dos: ['Impact play', 'Praise / good girl', 'Aftercare'],
    donts: ['Needles', 'Knife play', 'Late-night ghosting'],
    safeword: 'Red',
    overwhelmed: 'I need space and a check-in before we continue.',
    notes: 'Developer smoke test.'
  };

  state.consent = true;
  state.screen = 'results';
  saveProgress();
  render();
  bindEvents();
}

function renderResetButton(label = 'Start Over') {
  return `<button type="button" class="reset-quiz-button" data-reset-quiz="true">${label}</button>`;
}

function toggleDeveloperMode(forceValue) {
  state.devMode = typeof forceValue === 'boolean' ? forceValue : !state.devMode;
  saveProgress();
  render();
  bindEvents();
}

function renderIntro() {
  const savedNote = hasSavedProgress() ? '<div class="resume-note">Progress saved on this device. You can continue later.</div>' : '';

  return `
    <main class="intro-shell">
      <div class="intro-header-actions">
        <button type="button" class="dev-toggle ${state.devMode ? 'active' : ''}" id="developerModeToggle">
          ${state.devMode ? 'Developer mode on' : 'Developer mode'}
        </button>
        ${renderResetButton('Restart Quiz')}
      </div>
      <div class="intro-visual">
        <img src="${introImage}" alt="Moody classroom with a leather paddle on a desk" />
        <div class="chalk-title-wrap">
          <div class="chalk-title">POP QUIZ</div>
          <div class="chalk-name">Danielle</div>
          <p class="chalk-copy">No peeking. No cheating.<br>Consequences apply.</p>
        </div>
        <button type="button" class="paddle-trigger" aria-label="Whack the paddle to begin the quiz">
          <span>Whack</span>
        </button>
        <div class="dev-panel ${state.devMode ? 'visible' : ''}">
          <button type="button" class="dev-button" id="devRandomize">Developer: randomize all answers</button>
          <button type="button" class="dev-button dev-reset" id="devReset">Developer: reset state</button>
        </div>
        ${savedNote}
      </div>
    </main>
  `;
}

function renderConsent() {
  return `
    <main class="consent-shell">
      <div class="consent-card">
        <div class="screen-top-actions">${renderResetButton('Restart Quiz')}</div>
        <h2>Before you begin:</h2>
        <label class="check-row">
          <input type="checkbox" id="adultCheck" ${state.consent ? 'checked' : ''} />
          <span>I confirm I'm 18 or older.</span>
        </label>
        <p>Your answers go to Ryan <strong>only</strong> if you press “Turn In My Paper” at the end. You’ll see your results first and can decide then.</p>
        <p>Skip anything you don’t want to answer. Skipping is never penalized.</p>
        <p>Safeword for this quiz: you can close the tab at any time. Nothing is saved until you turn it in.</p>
        <button id="beginExam" class="primary-button" ${state.consent ? '' : 'disabled'}>Begin Exam.</button>
      </div>
    </main>
  `;
}

function renderSectionA() {
  const question = currentQuestion();
  if (!question) return '';
  const selectedValue = state.answers.sectionA[question.id];

  return `
    <div class="quiz-card">
      <div class="screen-top-actions">${renderResetButton('Restart Quiz')}</div>
      <div class="section-label">Section ${state.sectionIndex + 1} of ${quizData.sections.length} · ${currentSection().title}</div>
      <h3>${question.question}</h3>
      <div class="answer-stack">
        ${scaleLabels.map((label, index) => {
          const value = index + 1;
          const selected = selectedValue === value ? 'selected' : '';
          return `
            <button class="answer-option ${selected}" type="button" data-key="${question.id}" data-value="${value}">
              ${label}
            </button>
          `;
        }).join('')}
      </div>
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section" ${state.questionIndex === 0 && state.sectionIndex === 0 ? 'disabled' : ''}>Back</button>
      </div>
      <div class="signature">Instructor: ${quizData.instructor}</div>
    </div>
  `;
}

function renderSectionB() {
  const section = currentSection();
  return `
    <div class="worksheet-card">
      <div class="screen-top-actions">${renderResetButton('Restart Quiz')}</div>
      <div class="section-label">Section ${state.sectionIndex + 1} of ${quizData.sections.length} · ${section.title}</div>
      <h3>${section.header}</h3>
      ${section.groups.map((group) => `
        <div class="limits-group">
          <h4>${group.title}</h4>
          <div class="limit-list">
            ${group.items.map((item) => {
              const key = `${group.title}::${item}`;
              const safeKey = escapeHtml(key);
              const savedValue = state.answers.sectionB[key];
              const selection = typeof savedValue === 'object' && savedValue ? savedValue.answer : savedValue;
              const note = typeof savedValue === 'object' && savedValue ? savedValue.note || '' : '';
              return `
                <div class="limit-row">
                  <span class="item-label">${escapeHtml(item)}</span>
                  <div class="limit-options">
                    ${limitLabels.map((label) => `
                      <button type="button" class="limit-option ${selection === label ? 'selected' : ''}" data-group="sectionB" data-key="${safeKey}" data-value="${escapeHtml(label)}">${label}</button>
                    `).join('')}
                  </div>
                  <textarea class="limit-note" data-group="sectionB" data-key="${safeKey}" data-note="true" placeholder="Optional note">${escapeHtml(note)}</textarea>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section">Back</button>
        <button type="button" id="nextSection" class="primary-button">Next Section</button>
      </div>
    </div>
  `;
}

function renderSectionC() {
  const section = currentSection();
  return `
    <div class="survey-card">
      <div class="screen-top-actions">${renderResetButton('Restart Quiz')}</div>
      <div class="section-label">Section ${state.sectionIndex + 1} of ${quizData.sections.length} · ${section.title}</div>
      ${section.questions.map((question) => {
        const answer = state.answers.sectionC[question.id] ?? [];
        const selectedValues = Array.isArray(answer) ? answer : (answer ? [answer] : []);
        const customValue = state.answers.sectionC[`${question.id}Custom`] ?? '';
        const showCustomInput = question.writeIn || question.options?.includes('Something else') || question.options?.includes('something else');

        if (question.type === 'open') {
          return `
            <div class="question-block open-block">
              <label>${question.question}</label>
              <textarea data-group="sectionC" data-key="${question.id}">${state.answers.sectionC[question.id] ?? ''}</textarea>
            </div>
          `;
        }

        return `
          <div class="question-block">
            <label>${question.question}</label>
            <div class="toggle-grid">
              ${question.options.map((option) => {
                const selected = selectedValues.includes(option);
                return `<button type="button" class="toggle-chip ${selected ? 'selected' : ''}" data-group="sectionC" data-key="${question.id}" data-value="${escapeHtml(option)}">${option}</button>`;
              }).join('')}
            </div>
            ${showCustomInput ? `
              <input
                type="text"
                class="write-in-field"
                value="${escapeHtml(customValue)}"
                data-group="sectionC"
                data-key="${question.id}Custom"
                placeholder="Tell us more..."
              />
            ` : ''}
          </div>
        `;
      }).join('')}
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section">Back</button>
        <button type="button" id="nextSection" class="primary-button">Next Section</button>
      </div>
    </div>
  `;
}

function renderSectionD() {
  const section = currentSection();
  return `
    <div class="survey-card">
      <div class="screen-top-actions">${renderResetButton('Restart Quiz')}</div>
      <div class="section-label">Section ${state.sectionIndex + 1} of ${quizData.sections.length} · ${section.title}</div>
      <h3>${section.header}</h3>
      ${section.ratings.map((question) => `
        <div class="rating-row">
          <span>${question}</span>
          <div class="rating-scale">
            ${[1, 2, 3, 4, 5].map((value) => `
              <button type="button" class="rating-pill ${state.answers.sectionD[question] === value ? 'selected' : ''}" data-group="sectionD" data-key="${question}" data-value="${value}">${value}</button>
            `).join('')}
          </div>
        </div>
      `).join('')}
      ${section.open.map((question) => `
        <div class="question-block open-block">
          <label>${question}</label>
          <textarea data-group="sectionD" data-key="${question}">${state.answers.sectionD[question] || ''}</textarea>
        </div>
      `).join('')}
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section">Back</button>
        <button type="button" id="nextSection" class="primary-button">See Results</button>
      </div>
    </div>
  `;
}

function renderCurrentSection() {
  const section = currentSection();
  if (!section) return '';
  if (section.id === 'A') return renderSectionA();
  if (section.id === 'B') return renderSectionB();
  if (section.id === 'C') return renderSectionC();
  return renderSectionD();
}

function renderResults() {
  const archetypes = calculateArchetypeScores();
  const topThree = archetypes.slice(0, 3);
  const summaryText = topThree.length
    ? `Your profile reads as a ${topThree.map((item) => item.shortName.toLowerCase()).join(', ') } blend.`
    : 'Your profile is still taking shape.';

  const personalMarginNote = `Tiny note in the margin: a little ${quizData.profile.anime[0]} energy, because some stories leave a mark.`;

  return `
    <main class="results-shell">
      <div class="results-paper">
        <div class="screen-top-actions results-top-actions">${renderResetButton('Restart Quiz')}</div>
        <div class="grade-badge">A+</div>
        <div class="title-line">${getResultsTitle()}</div>
        <div class="results-summary">${summaryText}</div>
        <div class="bars-wrap">
          ${archetypes.map((item) => {
            const percent = Math.max(0, Math.min(100, Number(item.score) || 0));
            const tone = getPercentTone(percent);
            return `
              <div class="result-row">
                <span>${item.shortName}</span>
                <div class="bar"><i style="width: ${percent}%; background: ${tone.fill};"></i></div>
                <em style="color: ${tone.text};">${percent}%</em>
              </div>
            `;
          }).join('')}
        </div>
        <div class="result-writeups">
          ${topThree.map((item) => `
            <div class="writeup-box">
              <h4>${item.name}</h4>
              <p>${item.writeup}</p>
            </div>
          `).join('')}
        </div>
        <div class="margin-note">${quizData.notes[topThree[0]?.code] || personalMarginNote}</div>

        <div class="contract-panel">
          <div class="contract-open">
            <label for="safeWordInput">Safeword / signal</label>
            <textarea id="safeWordInput" data-contract-field="safeword">${state.contract.safeword || ''}</textarea>
          </div>
          <div class="contract-open">
            <label for="overwhelmedInput">How I want to be handled when overwhelmed</label>
            <textarea id="overwhelmedInput" data-contract-field="overwhelmed">${state.contract.overwhelmed || ''}</textarea>
          </div>
          <div class="contract-open">
            <label for="notesInput">Anything else to add</label>
            <textarea id="notesInput" data-contract-field="notes">${state.contract.notes || ''}</textarea>
          </div>
        </div>

        <div class="answer-review-panel">
          <h4>Answer review</h4>
          <pre>${escapeHtml(formatAnswerReview())}</pre>
        </div>

        <div class="results-actions">
          <button type="button" id="turnInPaper" class="primary-button purple-button">Turn In My Paper</button>
          <button type="button" id="keepPrivate" class="secondary-button">Keep It To Myself</button>
        </div>
      </div>
    </main>
  `;
}

function render() {
  const app = document.querySelector('#app');
  if (!app) return;

  if (state.screen === 'intro') {
    app.innerHTML = renderIntro();
    return;
  }

  if (state.screen === 'consent') {
    app.innerHTML = renderConsent();
    return;
  }

  if (state.screen === 'section') {
    app.innerHTML = `<main class="quiz-shell">${renderCurrentSection()}</main>`;
    return;
  }

  if (state.screen === 'results') {
    app.innerHTML = renderResults();
  }
}

function toggleMultiValue(group, key, value) {
  const existing = state.answers[group][key] || [];
  const next = existing.includes(value)
    ? existing.filter((item) => item !== value)
    : [...existing, value];
  state.answers[group][key] = next;
}

function onSelectAnswer(button) {
  const { group, key, value } = button.dataset;
  const section = currentSection();
  if (section.id === 'A') {
    const question = currentQuestion();
    if (!question) return;
    state.answers.sectionA[question.id] = Number(value);
    state.questionIndex += 1;
    saveProgress();
    if (state.questionIndex >= section.questions.length) {
      nextSection();
    } else {
      render();
      bindEvents();
    }
    return;
  }

  if (section.id === 'B') {
    const existing = state.answers.sectionB[key];
    const next = typeof existing === 'object' && existing ? { ...existing, answer: value } : { answer: value, note: '' };
    state.answers.sectionB[key] = next;
    saveProgress();
    render();
    bindEvents();
    return;
  }

  if (section.id === 'C') {
    if (button.classList.contains('toggle-chip')) {
      toggleMultiValue('sectionC', key, value);
      saveProgress();
      render();
      bindEvents();
    }
    return;
  }

  if (section.id === 'D') {
    state.answers.sectionD[key] = Number(value);
    saveProgress();
    render();
    bindEvents();
    return;
  }

}

function questionTypeForKey(key) {
  const section = currentSection();
  const question = section.questions.find((item) => item.id === key);
  return question ? question.type : 'single';
}

function bindEvents() {
  const paddle = document.querySelector('.paddle-trigger');
  if (paddle) {
    paddle.addEventListener('click', () => {
      state.screen = 'consent';
      saveProgress();
      render();
      bindEvents();
    });
  }

  const adultCheck = document.querySelector('#adultCheck');
  const beginExam = document.querySelector('#beginExam');
  if (adultCheck && beginExam) {
    adultCheck.addEventListener('change', (event) => {
      state.consent = event.target.checked;
      beginExam.disabled = !state.consent;
      saveProgress();
    });

    beginExam.addEventListener('click', () => {
      if (!state.consent) return;
      state.sectionIndex = 0;
      state.questionIndex = 0;
      state.screen = 'section';
      saveProgress();
      render();
      bindEvents();
    });
  }

  const developerToggle = document.querySelector('#developerModeToggle');
  if (developerToggle) {
    developerToggle.addEventListener('click', () => toggleDeveloperMode());
  }

  document.querySelectorAll('.answer-option').forEach((button) => {
    button.addEventListener('click', () => onSelectAnswer(button));
  });

  document.querySelectorAll('.limit-option').forEach((button) => {
    button.addEventListener('click', () => onSelectAnswer(button));
  });

  document.querySelectorAll('.toggle-chip').forEach((button) => {
    button.addEventListener('click', () => onSelectAnswer(button));
  });

  document.querySelectorAll('.rating-pill').forEach((button) => {
    button.addEventListener('click', () => onSelectAnswer(button));
  });

  const devRandomizeButton = document.querySelector('#devRandomize');
  if (devRandomizeButton) {
    devRandomizeButton.addEventListener('click', () => {
      state.devMode = true;
      applyDeveloperFill();
    });
  }

  const devResetButton = document.querySelector('#devReset');
  if (devResetButton) {
    devResetButton.addEventListener('click', () => {
      resetQuizState();
    });
  }

  const resetButtons = document.querySelectorAll('[data-reset-quiz="true"]');
  resetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const shouldReset = window.confirm('Start over? This will clear your saved answers and progress.');
      if (shouldReset) resetQuizState();
    });
  });

  document.querySelectorAll('textarea[data-group]').forEach((field) => {
    field.addEventListener('input', (event) => {
      const target = event.target;
      const { group, key, note } = target.dataset;

      if (group === 'sectionB' && note === 'true') {
        const current = state.answers[group][key];
        const next = typeof current === 'object' && current ? { ...current, note: target.value } : { answer: '', note: target.value };
        state.answers[group][key] = next;
        saveProgress();
        return;
      }

      state.answers[group][key] = target.value;
      saveProgress();
    });
  });

  document.querySelectorAll('input[data-group]').forEach((field) => {
    field.addEventListener('input', (event) => {
      const target = event.target;
      const { group, key } = target.dataset;
      state.answers[group][key] = target.value;
      saveProgress();
    });
  });

  document.querySelectorAll('[data-contract-field]').forEach((field) => {
    field.addEventListener('input', (event) => {
      const target = event.target;
      const { contractField } = target.dataset;
      if (target.type === 'checkbox') {
        const current = state.contract[contractField] || [];
        const next = target.checked
          ? [...current, target.value]
          : current.filter((item) => item !== target.value);
        state.contract[contractField] = next;
      } else {
        state.contract[contractField] = target.value;
      }
      saveProgress();
    });
  });

  const nextButton = document.querySelector('#nextSection');
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (state.sectionIndex < quizData.sections.length - 1) {
        nextSection();
      } else {
        state.screen = 'results';
        saveProgress();
        render();
        bindEvents();
      }
    });
  }

  document.querySelectorAll('.prev-section').forEach((button) => {
    button.addEventListener('click', () => {
      previousSection();
    });
  });

  const turnIn = document.querySelector('#turnInPaper');
  if (turnIn) {
    turnIn.addEventListener('click', async () => {
      const payload = buildSubmissionPayload();

      try {
        const response = await fetch('/.netlify/functions/send-quiz-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ payload })
        });

        let responseBody = {};
        try {
          responseBody = await response.json();
        } catch {
          // Ignore non-JSON responses; the server error will still be surfaced below.
        }

        if (!response.ok) {
          throw new Error(responseBody?.error || `Email API returned ${response.status}`);
        }

        window.alert('Paper received. The instructor will review your work.');
        state.screen = 'intro';
        state.consent = false;
        state.sectionIndex = 0;
        state.questionIndex = 0;
        state.answers = { sectionA: {}, sectionB: {}, sectionC: {}, sectionD: {} };
        state.contract = {
          dos: [],
          donts: [],
          safeword: '',
          overwhelmed: '',
          notes: ''
        };
        localStorage.removeItem(STORAGE_KEY);
        render();
        bindEvents();
        return;
      } catch (error) {
        console.error('Unable to send quiz email.', error);
        window.alert(
          'The email service is not responding correctly. Please make sure the Netlify Resend environment variables are set and the site has been redeployed.'
        );
      }
    });
  }

  const keepPrivate = document.querySelector('#keepPrivate');
  if (keepPrivate) {
    keepPrivate.addEventListener('click', () => {
      state.screen = 'intro';
      state.consent = false;
      state.sectionIndex = 0;
      state.questionIndex = 0;
      state.answers = { sectionA: {}, sectionB: {}, sectionC: {}, sectionD: {} };
      state.contract = {
        dos: [],
        donts: [],
        safeword: '',
        overwhelmed: '',
        notes: ''
      };
      localStorage.removeItem(STORAGE_KEY);
      render();
      bindEvents();
    });
  }
}

function handleSectionAdvance() {
  const section = currentSection();
  if (section.id === 'A') {
    if (state.questionIndex >= section.questions.length - 1) {
      nextSection();
      return;
    }
    state.questionIndex += 1;
    render();
    bindEvents();
    return;
  }

  if (section.id === 'B') {
    nextSection();
    return;
  }

  if (section.id === 'C') {
    nextSection();
    return;
  }

  if (section.id === 'D') {
    nextSection();
    return;
  }

}

function attachAdvanceLogic() {
  const section = currentSection();
  if (!section) return;
  if (section.id === 'A') {
    const allAnswered = section.questions.every((item) => state.answers.sectionA[item.id] !== undefined);
    if (allAnswered) {
      nextSection();
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  render();
  bindEvents();
});

loadProgress();
render();
bindEvents();
