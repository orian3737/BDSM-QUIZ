(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const j="/assets/ChatGPT%20Image%20Nov%2012_%202026_%2002_30_49%20PM-3O3TZdn8.png",H="Kitten_Napper",z=[{code:"KIT",name:"Collar Kitten",shortName:"Kitten",writeup:"Affectionate on your own terms. You want to belong to someone, to be cared for, played with, and claimed, but you keep the curiosity and independence that make a kitten a kitten. The collar means something to you."},{code:"HUN",name:"Hunter",shortName:"Hunter",writeup:"You do the choosing. You watch, you test, and you let someone in slowly, and only the ones who earn it stay. A Dom who wants you has to prove he's worth the trust."},{code:"BRT",name:"Brat",shortName:"Brat",writeup:"You push to see if he'll push back. Attitude is part of the fun, and you want a Dom who can keep up and win, with a grin."},{code:"SRV",name:"Service Sub",shortName:"Service",writeup:"You show devotion by doing. Tasks, projects, and taking care of your Dom's needs feel like closeness to you, and being noticed for it matters."},{code:"MAS",name:"Masochist",shortName:"Masochist",writeup:"For you, the sting is the point. Intensity from someone you trust takes you somewhere good, and the marks are a souvenir."},{code:"PRS",name:"Praise Seeker",shortName:"Good Girl",writeup:"Praise is your fuel. You want to be seen, told you did well, and know your Dom is proud of you."},{code:"DEG",name:"Degradee",shortName:"Bad Girl",writeup:"You like being put in your place. Being made to feel naughty, dirty, or humiliated, safely and by someone you trust, flips a switch."},{code:"ROP",name:"Rope Bunny",shortName:"Rope Bunny",writeup:"Restraint sets you free. Rope, cuffs, and blindfolds take away the choices and let you drop into the moment."},{code:"PRY",name:"Primal Prey",shortName:"Prey",writeup:"You want the chase. The struggle, being caught, and being pinned is the thrill. It's raw and physical."},{code:"EXH",name:"Exhibitionist",shortName:"Exhibitionist",writeup:"You like to be seen. Being watched or shown off while you submit turns the volume up."},{code:"PRO",name:"Protocol Sub",shortName:"Protocol",writeup:"Structure makes you feel held. Rules, rituals, titles, and consequences give the dynamic shape, and you like living inside it."}],Y={anime:["Attack on Titan","Death Note","Future Diary","Black Butler"]},K={KIT:"Good kitty. Noted: collar fitting to be scheduled.",HUN:"You're grading me too, aren't you. Fair.",BRT:"Talking back in class? See me after.",SRV:"Excellent work ethic. Assignments incoming.",MAS:"Impact homework approved.",PRS:"Good girl. Exceptional work.",DEG:"Detention. You know what you did.",ROP:"Rope practice moved to the top of the syllabus.",PRY:"Head start: five seconds. Run.",EXH:"Show and tell will be graded.",PRO:"Class rules to be distributed. Memorize them."},Q=[{id:"A",title:"Know Thyself",questions:[{id:5,question:"I'm the one who decides who gets close to me.",weights:{HUN:1}},{id:1,question:"I'd happily wear a collar that shows who I belong to.",weights:{KIT:1,PRO:.5}},{id:9,question:"Sometimes I disobey just to see what happens.",weights:{BRT:1}},{id:13,question:"Doing small tasks for my Dom makes me feel close to him.",weights:{SRV:1}},{id:16,question:"I enjoy the sting of impact and want more of it.",weights:{MAS:1}},{id:19,question:'Hearing "good girl" does something to me.',weights:{PRS:1}},{id:25,question:"Being tied up helps me let go.",weights:{ROP:1}},{id:28,question:"I'd enjoy being chased, caught, and pinned down.",weights:{PRY:1}},{id:31,question:"Being watched while I submit excites me.",weights:{EXH:1}},{id:34,question:"I like clear rules, even outside the bedroom.",weights:{PRO:1}},{id:22,question:"Being called degrading names in the moment turns me on.",weights:{DEG:1}},{id:2,question:"Being called a good kitty and getting my head scratched sounds perfect.",weights:{KIT:1,PRS:.5}},{id:6,question:"I'd rather choose my Dom than be chosen.",weights:{HUN:1}},{id:10,question:"A little attitude makes the game more fun.",weights:{BRT:1,DEG:.3}},{id:14,question:"I like having assignments and projects to complete.",weights:{SRV:1,PRO:.5}},{id:17,question:"Pain feels good when it comes from someone I trust.",weights:{MAS:1}},{id:20,question:"I want detailed praise when I do well.",weights:{PRS:1,SRV:.3}},{id:26,question:"I love not being able to move or see.",weights:{ROP:1}},{id:29,question:"I like play that feels wild and physical, not scripted.",weights:{PRY:1,BRT:.3}},{id:32,question:"I'd enjoy being shown off at a play party.",weights:{EXH:1}},{id:35,question:"Rituals like good-morning messages, positions, and titles make me feel held.",weights:{PRO:1,KIT:.3}},{id:23,question:"I like being made to feel a little naughty or humiliated.",weights:{DEG:1,EXH:.3}},{id:3,question:"I'm playful, curious, and a little aloof until I decide to curl up with someone.",weights:{KIT:1,HUN:.5}},{id:7,question:"I test a Dom slowly before I let him in.",weights:{HUN:1,BRT:.3}},{id:11,question:"I want a Dom who can win when I push back.",weights:{BRT:1,PRY:.5}},{id:15,question:"Taking care of my Dom's needs is satisfying in itself.",weights:{SRV:1}},{id:18,question:"I'm proud of my marks the next day.",weights:{MAS:1,EXH:.3}},{id:21,question:"Knowing my Dom is proud of me matters more than the play itself.",weights:{PRS:1}},{id:27,question:"Blindfolds make everything more intense for me.",weights:{ROP:.7,MAS:.3}},{id:30,question:"Struggling against someone stronger is exciting.",weights:{PRY:1,ROP:.3}},{id:33,question:"Being photographed during play appeals to me.",weights:{EXH:1}},{id:36,question:"Facing consequences when I break a rule feels right, not unfair.",weights:{PRO:.7,BRT:.3}},{id:24,question:"Sometimes I'd rather be put in my place than praised.",weights:{DEG:1}},{id:4,question:"Ears, a tail, or a bell during play sound fun to me.",weights:{KIT:1}},{id:8,question:"A Dom has to earn my submission over time.",weights:{HUN:1,PRO:.3}},{id:12,question:"I'd rather be caught than simply obey.",weights:{BRT:.5,PRY:1}}]},{id:"B",title:"The Limits Worksheet",header:"A Yes here isn't permission. It just means we'll talk about it. A Maybe means 'go slow and ask me.' Hard limits are never up for negotiation.",groups:[{title:"Impact",items:["spanking (hand)","paddle","flogger","crop","belt","leaving marks","visible marks (above clothing)"]},{title:"Sensation",items:["nipple clamps","wax play","ice and temperature play","tickling","teasing her shiver spots (lower back, back of neck)","biting","hair pulling","scratching"]},{title:"Restraint and senses",items:["rope bondage","cuffs","blindfold","gag","being left restrained for a while"]},{title:"Power and words",items:['praise and "good girl"',"degrading names","verbal humiliation","titles (Daddy / Sir)","orgasm control or denial","edging","breeding talk and fantasy","tasks and assignments","rules and punishments"]},{title:"Real-world safety",items:["actual pregnancy risk","barrier protection with a new partner","sharing recent STI test results before play"]},{title:"Kitten and primal",items:["collar","leash","ears and tail","being petted and fed by hand","primal chase and wrestling"]},{title:"Being seen",items:["being watched by others","play at a party or dungeon","being photographed","being filmed"]},{title:"Group play",items:["playing with others present"]},{title:"Edge play",items:['fear play, knife play, or CNC (marked "discuss in person only; not something to start with")']}]},{id:"C",title:"Classroom Rules",questions:[{id:"domTitle",type:"multi",question:"What do you want to call your Dom?",options:["Daddy","Sir","Master","his name","something else"],writeIn:!0},{id:"subTitle",type:"multi",question:"What do you want to be called?",options:["Kitten","good girl","pet name chosen together","your name","something else"],writeIn:!0},{id:"dynamicOn",type:"multi",question:"When should the dynamic be 'on'?",options:["Only during scenes","Scenes plus flirty texting","Light rules day to day","Mostly always on, by agreement","24/7 (24 hours a day, 7 days a week)"]},{id:"ruleBreaking",type:"multi",question:"How should rule-breaking be handled?",options:["Real punishments","Funishments","A mix","No punishments, just redirection"]},{id:"safewords",type:"multi",question:"Safewords:",options:["Traffic lights (green / yellow / red)","My own word","A nonverbal signal too","Something else"],writeIn:!0},{id:"checkins",type:"multi",question:"How often do you want check-ins?",options:["Daily good-morning or good-night","A few times a week","During and after scenes only","24/7","Something else"],writeIn:!0},{id:"aftercare",type:"multi",question:"Aftercare you like:",options:["Cuddling","Blanket","Water and snacks","Praise and reassurance","Quiet time","Talking it through","Check-in the next day","Space to myself","Something else"],writeIn:!0},{id:"subDrop",type:"open",question:"Have you dealt with sub drop, and what helps?"},{id:"overwhelmed",type:"open",question:"How will I know you're overwhelmed even if you don't safeword?"},{id:"tellMe",type:"multi",question:"Best way for you to tell me what you want:",options:["In person","Text","Written list","In a quiz like this one","Something else"],writeIn:!0}]},{id:"D",title:"Grade the Instructor",header:"You're the hunter. Now you grade me.",ratings:["Consistency: he shows up and doesn't disappear","Follow-through: he does what he says","Communication and check-ins","Patience: lets things build slowly","Aftercare","Respect for my other relationships","Creativity and planning scenes","Intensity","Sense of humor","Nerd compatibility (anime, games, Magic)"],open:["What would earn the instructor extra credit?","One thing you want me to never forget about you:"]}],d={instructor:H,archetypes:z,profile:Y,notes:K,sections:Q},$="pop-quiz-state-v1",e={screen:"intro",consent:!1,sectionIndex:0,questionIndex:0,devMode:!1,answers:{sectionA:{},sectionB:{},sectionC:{},sectionD:{}},contract:{dos:[],donts:[],safeword:"",overwhelmed:"",notes:""}},E=["Strongly disagree","Disagree","Neutral","Agree","Strongly agree"],N=["Yes","Curious","Maybe","No","Hard Limit"];function b(o){return String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function R(){e.screen="intro",e.consent=!1,e.sectionIndex=0,e.questionIndex=0,e.answers={sectionA:{},sectionB:{},sectionC:{},sectionD:{}},e.contract={dos:[],donts:[],safeword:"",overwhelmed:"",notes:""},localStorage.removeItem($),h(),p()}function u(){try{localStorage.setItem($,JSON.stringify({screen:e.screen,consent:e.consent,sectionIndex:e.sectionIndex,questionIndex:e.questionIndex,devMode:e.devMode,answers:e.answers,contract:e.contract}))}catch(o){console.warn("Unable to save quiz progress locally.",o)}}function B(){try{const o=localStorage.getItem($);if(!o)return;const n=JSON.parse(o);if(!n)return;e.screen=n.screen||"intro",e.consent=!!n.consent,e.sectionIndex=Number(n.sectionIndex)||0,e.questionIndex=Number(n.questionIndex)||0,e.devMode=!!n.devMode,e.answers={...e.answers,...n.answers||{}},e.contract={...e.contract,...n.contract||{}}}catch(o){console.warn("Unable to restore quiz progress locally.",o)}}function G(){try{return!!localStorage.getItem($)}catch{return!1}}function y(){return d.sections[e.sectionIndex]}function D(){const o=y();return!o||!Array.isArray(o.questions)?null:o.questions[e.questionIndex]??null}function P(){e.sectionIndex<d.sections.length-1?(e.sectionIndex+=1,e.questionIndex=0,e.screen="section",u(),h(),p()):(e.screen="results",u(),h(),p())}function U(){if(e.screen==="section"){if(y()&&y().id==="A"&&e.questionIndex>0){e.questionIndex-=1,u(),h(),p();return}e.sectionIndex>0&&(e.sectionIndex-=1,e.questionIndex=0,u(),h(),p())}}function A(){const o=Object.fromEntries(d.archetypes.map(t=>[t.code,0])),n=Object.fromEntries(d.archetypes.map(t=>[t.code,0]));return d.sections.find(t=>t.id==="A").questions.forEach(t=>{const s=e.answers.sectionA[t.id];if(s==null)return;const a=(s-1)/4;Object.entries(t.weights||{}).forEach(([m,g])=>{n[m]+=g*a,o[m]+=g})}),d.archetypes.map(t=>{const s=o[t.code]||0,a=s?Math.round(n[t.code]/s*100):0;return{...t,score:a,answered:s?Object.values(e.answers.sectionA).filter(m=>m!==void 0).length:0}}).sort((t,s)=>{if((s.score??0)!==(t.score??0))return(s.score??0)-(t.score??0);const a=t.answered||0;return(s.answered||0)-a})}function C(){const o=A().slice(0,3);if(!o.length)return"Collar Kitten with a Hunter streak";const n=o[0],i=o[1]||o[0];return`${n.shortName} with a ${i.shortName} streak`}function M(o){const n=Number(o);return!Number.isFinite(n)||n<1||n>5?"Unanswered":E[n-1]}function V(o){return!Array.isArray(o)||o.length===0?"No answer selected.":o.join(", ")}function W(){return d.sections.find(n=>n.id==="A").questions.map(n=>{const i=e.answers.sectionA[n.id];return`Q: ${n.question}
A: ${i==null?"No answer selected.":M(i)}`})}function F(){return d.sections.find(n=>n.id==="B").groups.flatMap(n=>n.items.map(i=>{const r=`${n.title}::${i}`,t=e.answers.sectionB[r],s=typeof t=="object"&&t?t.answer:t,a=typeof t=="object"&&t?t.note:"";return`Q: ${i}
A: ${s||"No answer selected."}${a?`
Note: ${a}`:""}`}))}function X(){return d.sections.find(n=>n.id==="C").questions.map(n=>{const i=e.answers.sectionC[n.id],r=e.answers.sectionC[`${n.id}Custom`];if(n.type==="open")return`Q: ${n.question}
A: ${i||"No answer entered."}`;const t=Array.isArray(i)?i:i?[i]:[],s=t.length?V(t):"No answer selected.",a=r?`
Custom: ${r}`:"";return`Q: ${n.question}
A: ${s}${a}`})}function _(){const o=d.sections.find(r=>r.id==="D"),n=o.ratings.map(r=>{const t=e.answers.sectionD[r];return`Q: ${r}
A: ${t==null?"No answer selected.":`${t} / 5 — ${M(t)}`}`}),i=o.open.map(r=>{const t=e.answers.sectionD[r];return`Q: ${r}
A: ${t||"No answer entered."}`});return[...n,...i]}function T(){return{submittedAt:new Date().toISOString(),title:C(),archetypeScores:Object.fromEntries(A().map(n=>[n.code,n.score])),sections:[{title:"Section A — Know Thyself",answers:W()},{title:"Section B — The Limits Worksheet",answers:F()},{title:"Section C — Classroom Rules",answers:X()},{title:"Section D — Grade the Instructor",answers:_()},{title:"Comfort Contract / Notes",answers:[`Safeword / signal: ${e.contract.safeword||"No answer entered."}`,`How I want to be handled when overwhelmed: ${e.contract.overwhelmed||"No answer entered."}`,`Anything else to add: ${e.contract.notes||"No answer entered."}`]}],readableReview:L(),developerMode:e.devMode}}function L(){return T().sections.map(n=>`${n.title}
${n.answers.map(i=>`- ${i}`).join(`
`)}`).join(`

`)}function J(o){return o[Math.floor(Math.random()*o.length)]}function Z(o){const n=Math.max(0,Math.min(100,Number(o)||0));return n<25?{text:"#c8102e",fill:"linear-gradient(90deg, #c8102e, #9c0e24)"}:n<=40?{text:"#b78a00",fill:"linear-gradient(90deg, #e8bf2c, #c39200)"}:{text:"#1c8b48",fill:"linear-gradient(90deg, #46c67f, #19864f)"}}function ee(){d.sections.find(t=>t.id==="A").questions.forEach(t=>{e.answers.sectionA[t.id]=Math.floor(Math.random()*5)+1}),d.sections.find(t=>t.id==="B").groups.forEach(t=>{t.items.forEach(s=>{const a=`${t.title}::${s}`;e.answers.sectionB[a]={answer:J(N),note:""}})}),d.sections.find(t=>t.id==="C").questions.forEach(t=>{if(t.type==="open"){e.answers.sectionC[t.id]="Developer test entry";return}const s=t.options.filter(()=>Math.random()>.45);e.answers.sectionC[t.id]=s.length?s:[t.options[0]],t.writeIn&&(e.answers.sectionC[`${t.id}Custom`]="Developer fill")});const r=d.sections.find(t=>t.id==="D");r.ratings.forEach(t=>{e.answers.sectionD[t]=Math.floor(Math.random()*5)+1}),r.open.forEach(t=>{e.answers.sectionD[t]="Developer test response"}),e.contract={dos:["Impact play","Praise / good girl","Aftercare"],donts:["Needles","Knife play","Late-night ghosting"],safeword:"Red",overwhelmed:"I need space and a check-in before we continue.",notes:"Developer smoke test."},e.consent=!0,e.screen="results",u(),h(),p()}function k(o="Start Over"){return`<button type="button" class="reset-quiz-button" data-reset-quiz="true">${o}</button>`}function te(o){e.devMode=!e.devMode,u(),h(),p()}function ne(){const o=G()?'<div class="resume-note">Progress saved on this device. You can continue later.</div>':"";return`
    <main class="intro-shell">
      <div class="intro-header-actions">
        <button type="button" class="dev-toggle ${e.devMode?"active":""}" id="developerModeToggle">
          ${e.devMode?"Developer mode on":"Developer mode"}
        </button>
        ${k("Restart Quiz")}
      </div>
      <div class="intro-visual">
        <img src="${j}" alt="Moody classroom with a leather paddle on a desk" />
        <div class="chalk-title-wrap">
          <div class="chalk-title">POP QUIZ</div>
          <div class="chalk-name">Danielle</div>
          <p class="chalk-copy">No peeking. No cheating.<br>Consequences apply.</p>
        </div>
        <button type="button" class="paddle-trigger" aria-label="Whack the paddle to begin the quiz">
          <span>Whack</span>
        </button>
        <div class="dev-panel ${e.devMode?"visible":""}">
          <button type="button" class="dev-button" id="devRandomize">Developer: randomize all answers</button>
          <button type="button" class="dev-button dev-reset" id="devReset">Developer: reset state</button>
        </div>
        ${o}
      </div>
    </main>
  `}function oe(){return`
    <main class="consent-shell">
      <div class="consent-card">
        <div class="screen-top-actions">${k("Restart Quiz")}</div>
        <h2>Before you begin:</h2>
        <label class="check-row">
          <input type="checkbox" id="adultCheck" ${e.consent?"checked":""} />
          <span>I confirm I'm 18 or older.</span>
        </label>
        <p>Your answers go to Ryan <strong>only</strong> if you press “Turn In My Paper” at the end. You’ll see your results first and can decide then.</p>
        <p>Skip anything you don’t want to answer. Skipping is never penalized.</p>
        <p>Safeword for this quiz: you can close the tab at any time. Nothing is saved until you turn it in.</p>
        <button id="beginExam" class="primary-button" ${e.consent?"":"disabled"}>Begin Exam.</button>
      </div>
    </main>
  `}function se(){const o=D();if(!o)return"";const n=e.answers.sectionA[o.id];return`
    <div class="quiz-card">
      <div class="screen-top-actions">${k("Restart Quiz")}</div>
      <div class="section-label">Section ${e.sectionIndex+1} of ${d.sections.length} · ${y().title}</div>
      <h3>${o.question}</h3>
      <div class="answer-stack">
        ${E.map((i,r)=>{const t=r+1;return`
            <button class="answer-option ${n===t?"selected":""}" type="button" data-key="${o.id}" data-value="${t}">
              ${i}
            </button>
          `}).join("")}
      </div>
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section" ${e.questionIndex===0&&e.sectionIndex===0?"disabled":""}>Back</button>
      </div>
      <div class="signature">Instructor: ${d.instructor}</div>
    </div>
  `}function ie(){const o=y();return`
    <div class="worksheet-card">
      <div class="screen-top-actions">${k("Restart Quiz")}</div>
      <div class="section-label">Section ${e.sectionIndex+1} of ${d.sections.length} · ${o.title}</div>
      <h3>${o.header}</h3>
      ${o.groups.map(n=>`
        <div class="limits-group">
          <h4>${n.title}</h4>
          <div class="limit-list">
            ${n.items.map(i=>{const r=`${n.title}::${i}`,t=b(r),s=e.answers.sectionB[r],a=typeof s=="object"&&s?s.answer:s,m=typeof s=="object"&&s&&s.note||"";return`
                <div class="limit-row">
                  <span class="item-label">${b(i)}</span>
                  <div class="limit-options">
                    ${N.map(g=>`
                      <button type="button" class="limit-option ${a===g?"selected":""}" data-group="sectionB" data-key="${t}" data-value="${b(g)}">${g}</button>
                    `).join("")}
                  </div>
                  <textarea class="limit-note" data-group="sectionB" data-key="${t}" data-note="true" placeholder="Optional note">${b(m)}</textarea>
                </div>
              `}).join("")}
          </div>
        </div>
      `).join("")}
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section">Back</button>
        <button type="button" id="nextSection" class="primary-button">Next Section</button>
      </div>
    </div>
  `}function re(){const o=y();return`
    <div class="survey-card">
      <div class="screen-top-actions">${k("Restart Quiz")}</div>
      <div class="section-label">Section ${e.sectionIndex+1} of ${d.sections.length} · ${o.title}</div>
      ${o.questions.map(n=>{var a,m;const i=e.answers.sectionC[n.id]??[],r=Array.isArray(i)?i:i?[i]:[],t=e.answers.sectionC[`${n.id}Custom`]??"",s=n.writeIn||((a=n.options)==null?void 0:a.includes("Something else"))||((m=n.options)==null?void 0:m.includes("something else"));return n.type==="open"?`
            <div class="question-block open-block">
              <label>${n.question}</label>
              <textarea data-group="sectionC" data-key="${n.id}">${e.answers.sectionC[n.id]??""}</textarea>
            </div>
          `:`
          <div class="question-block">
            <label>${n.question}</label>
            <div class="toggle-grid">
              ${n.options.map(g=>`<button type="button" class="toggle-chip ${r.includes(g)?"selected":""}" data-group="sectionC" data-key="${n.id}" data-value="${b(g)}">${g}</button>`).join("")}
            </div>
            ${s?`
              <input
                type="text"
                class="write-in-field"
                value="${b(t)}"
                data-group="sectionC"
                data-key="${n.id}Custom"
                placeholder="Tell us more..."
              />
            `:""}
          </div>
        `}).join("")}
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section">Back</button>
        <button type="button" id="nextSection" class="primary-button">Next Section</button>
      </div>
    </div>
  `}function ae(){const o=y();return`
    <div class="survey-card">
      <div class="screen-top-actions">${k("Restart Quiz")}</div>
      <div class="section-label">Section ${e.sectionIndex+1} of ${d.sections.length} · ${o.title}</div>
      <h3>${o.header}</h3>
      ${o.ratings.map(n=>`
        <div class="rating-row">
          <span>${n}</span>
          <div class="rating-scale">
            ${[1,2,3,4,5].map(i=>`
              <button type="button" class="rating-pill ${e.answers.sectionD[n]===i?"selected":""}" data-group="sectionD" data-key="${n}" data-value="${i}">${i}</button>
            `).join("")}
          </div>
        </div>
      `).join("")}
      ${o.open.map(n=>`
        <div class="question-block open-block">
          <label>${n}</label>
          <textarea data-group="sectionD" data-key="${n}">${e.answers.sectionD[n]||""}</textarea>
        </div>
      `).join("")}
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section">Back</button>
        <button type="button" id="nextSection" class="primary-button">See Results</button>
      </div>
    </div>
  `}function ce(){const o=y();return o?o.id==="A"?se():o.id==="B"?ie():o.id==="C"?re():ae():""}function de(){var t;const o=A(),n=o.slice(0,3),i=n.length?`Your profile reads as a ${n.map(s=>s.shortName.toLowerCase()).join(", ")} blend.`:"Your profile is still taking shape.",r=`Tiny note in the margin: a little ${d.profile.anime[0]} energy, because some stories leave a mark.`;return`
    <main class="results-shell">
      <div class="results-paper">
        <div class="screen-top-actions results-top-actions">${k("Restart Quiz")}</div>
        <div class="grade-badge">A+</div>
        <div class="title-line">${C()}</div>
        <div class="results-summary">${i}</div>
        <div class="bars-wrap">
          ${o.map(s=>{const a=Math.max(0,Math.min(100,Number(s.score)||0)),m=Z(a);return`
              <div class="result-row">
                <span>${s.shortName}</span>
                <div class="bar"><i style="width: ${a}%; background: ${m.fill};"></i></div>
                <em style="color: ${m.text};">${a}%</em>
              </div>
            `}).join("")}
        </div>
        <div class="result-writeups">
          ${n.map(s=>`
            <div class="writeup-box">
              <h4>${s.name}</h4>
              <p>${s.writeup}</p>
            </div>
          `).join("")}
        </div>
        <div class="margin-note">${d.notes[(t=n[0])==null?void 0:t.code]||r}</div>

        <div class="contract-panel">
          <div class="contract-open">
            <label for="safeWordInput">Safeword / signal</label>
            <textarea id="safeWordInput" data-contract-field="safeword">${e.contract.safeword||""}</textarea>
          </div>
          <div class="contract-open">
            <label for="overwhelmedInput">How I want to be handled when overwhelmed</label>
            <textarea id="overwhelmedInput" data-contract-field="overwhelmed">${e.contract.overwhelmed||""}</textarea>
          </div>
          <div class="contract-open">
            <label for="notesInput">Anything else to add</label>
            <textarea id="notesInput" data-contract-field="notes">${e.contract.notes||""}</textarea>
          </div>
        </div>

        <div class="answer-review-panel">
          <h4>Answer review</h4>
          <pre>${b(L())}</pre>
        </div>

        <div class="results-actions">
          <button type="button" id="turnInPaper" class="primary-button purple-button">Turn In My Paper</button>
          <button type="button" id="keepPrivate" class="secondary-button">Keep It To Myself</button>
        </div>
      </div>
    </main>
  `}function h(){const o=document.querySelector("#app");if(o){if(e.screen==="intro"){o.innerHTML=ne();return}if(e.screen==="consent"){o.innerHTML=oe();return}if(e.screen==="section"){o.innerHTML=`<main class="quiz-shell">${ce()}</main>`;return}e.screen==="results"&&(o.innerHTML=de())}}function le(o,n,i){const r=e.answers[o][n]||[],t=r.includes(i)?r.filter(s=>s!==i):[...r,i];e.answers[o][n]=t}function S(o){const{group:n,key:i,value:r}=o.dataset,t=y();if(t.id==="A"){const s=D();if(!s)return;e.answers.sectionA[s.id]=Number(r),e.questionIndex+=1,u(),e.questionIndex>=t.questions.length?P():(h(),p());return}if(t.id==="B"){const s=e.answers.sectionB[i],a=typeof s=="object"&&s?{...s,answer:r}:{answer:r,note:""};e.answers.sectionB[i]=a,u(),h(),p();return}if(t.id==="C"){o.classList.contains("toggle-chip")&&(le("sectionC",i,r),u(),h(),p());return}if(t.id==="D"){e.answers.sectionD[i]=Number(r),u(),h(),p();return}}function p(){const o=document.querySelector(".paddle-trigger");o&&o.addEventListener("click",()=>{e.screen="consent",u(),h(),p()});const n=document.querySelector("#adultCheck"),i=document.querySelector("#beginExam");n&&i&&(n.addEventListener("change",c=>{e.consent=c.target.checked,i.disabled=!e.consent,u()}),i.addEventListener("click",()=>{e.consent&&(e.sectionIndex=0,e.questionIndex=0,e.screen="section",u(),h(),p())}));const r=document.querySelector("#developerModeToggle");r&&r.addEventListener("click",()=>te()),document.querySelectorAll(".answer-option").forEach(c=>{c.addEventListener("click",()=>S(c))}),document.querySelectorAll(".limit-option").forEach(c=>{c.addEventListener("click",()=>S(c))}),document.querySelectorAll(".toggle-chip").forEach(c=>{c.addEventListener("click",()=>S(c))}),document.querySelectorAll(".rating-pill").forEach(c=>{c.addEventListener("click",()=>S(c))});const t=document.querySelector("#devRandomize");t&&t.addEventListener("click",()=>{e.devMode=!0,ee()});const s=document.querySelector("#devReset");s&&s.addEventListener("click",()=>{R()}),document.querySelectorAll('[data-reset-quiz="true"]').forEach(c=>{c.addEventListener("click",()=>{window.confirm("Start over? This will clear your saved answers and progress.")&&R()})}),document.querySelectorAll("textarea[data-group]").forEach(c=>{c.addEventListener("input",w=>{const l=w.target,{group:f,key:v,note:q}=l.dataset;if(f==="sectionB"&&q==="true"){const I=e.answers[f][v],O=typeof I=="object"&&I?{...I,note:l.value}:{answer:"",note:l.value};e.answers[f][v]=O,u();return}e.answers[f][v]=l.value,u()})}),document.querySelectorAll("input[data-group]").forEach(c=>{c.addEventListener("input",w=>{const l=w.target,{group:f,key:v}=l.dataset;e.answers[f][v]=l.value,u()})}),document.querySelectorAll("[data-contract-field]").forEach(c=>{c.addEventListener("input",w=>{const l=w.target,{contractField:f}=l.dataset;if(l.type==="checkbox"){const v=e.contract[f]||[],q=l.checked?[...v,l.value]:v.filter(I=>I!==l.value);e.contract[f]=q}else e.contract[f]=l.value;u()})});const m=document.querySelector("#nextSection");m&&m.addEventListener("click",()=>{e.sectionIndex<d.sections.length-1?P():(e.screen="results",u(),h(),p())}),document.querySelectorAll(".prev-section").forEach(c=>{c.addEventListener("click",()=>{U()})});const g=document.querySelector("#turnInPaper");g&&g.addEventListener("click",async()=>{const c=T();try{const w=await fetch("/.netlify/functions/send-quiz-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({payload:c,emailTo:"ryan@example.com"})});let l={};try{l=await w.json()}catch{}if(!w.ok)throw new Error((l==null?void 0:l.error)||`Email API returned ${w.status}`);window.alert("Paper received. The instructor will review your work."),e.screen="intro",e.consent=!1,e.sectionIndex=0,e.questionIndex=0,e.answers={sectionA:{},sectionB:{},sectionC:{},sectionD:{}},e.contract={dos:[],donts:[],safeword:"",overwhelmed:"",notes:""},localStorage.removeItem($),h(),p();return}catch(w){console.error("Unable to send quiz email.",w),window.alert("The email service is not responding correctly. Please make sure the Netlify Resend environment variables are set and the site has been redeployed.")}});const x=document.querySelector("#keepPrivate");x&&x.addEventListener("click",()=>{e.screen="intro",e.consent=!1,e.sectionIndex=0,e.questionIndex=0,e.answers={sectionA:{},sectionB:{},sectionC:{},sectionD:{}},e.contract={dos:[],donts:[],safeword:"",overwhelmed:"",notes:""},localStorage.removeItem($),h(),p()})}window.addEventListener("DOMContentLoaded",()=>{B(),h(),p()});B();h();p();
