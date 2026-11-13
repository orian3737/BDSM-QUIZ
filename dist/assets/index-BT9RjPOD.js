(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const T="/assets/ChatGPT%20Image%20Nov%2012_%202026_%2002_30_49%20PM-3O3TZdn8.png",C="Kitten_Napper",O=[{code:"KIT",name:"Collar Kitten",shortName:"Kitten",writeup:"Affectionate on your own terms. You want to belong to someone, to be cared for, played with, and claimed, but you keep the curiosity and independence that make a kitten a kitten. The collar means something to you."},{code:"HUN",name:"Hunter",shortName:"Hunter",writeup:"You do the choosing. You watch, you test, and you let someone in slowly, and only the ones who earn it stay. A Dom who wants you has to prove he's worth the trust."},{code:"BRT",name:"Brat",shortName:"Brat",writeup:"You push to see if he'll push back. Attitude is part of the fun, and you want a Dom who can keep up and win, with a grin."},{code:"SRV",name:"Service Sub",shortName:"Service",writeup:"You show devotion by doing. Tasks, projects, and taking care of your Dom's needs feel like closeness to you, and being noticed for it matters."},{code:"MAS",name:"Masochist",shortName:"Masochist",writeup:"For you, the sting is the point. Intensity from someone you trust takes you somewhere good, and the marks are a souvenir."},{code:"PRS",name:"Praise Seeker",shortName:"Good Girl",writeup:"Praise is your fuel. You want to be seen, told you did well, and know your Dom is proud of you."},{code:"DEG",name:"Degradee",shortName:"Bad Girl",writeup:"You like being put in your place. Being made to feel naughty, dirty, or humiliated, safely and by someone you trust, flips a switch."},{code:"ROP",name:"Rope Bunny",shortName:"Rope Bunny",writeup:"Restraint sets you free. Rope, cuffs, and blindfolds take away the choices and let you drop into the moment."},{code:"PRY",name:"Primal Prey",shortName:"Prey",writeup:"You want the chase. The struggle, being caught, and being pinned is the thrill. It's raw and physical."},{code:"EXH",name:"Exhibitionist",shortName:"Exhibitionist",writeup:"You like to be seen. Being watched or shown off while you submit turns the volume up."},{code:"PRO",name:"Protocol Sub",shortName:"Protocol",writeup:"Structure makes you feel held. Rules, rituals, titles, and consequences give the dynamic shape, and you like living inside it."}],L={anime:["Attack on Titan","Death Note","Future Diary","Black Butler"]},H={KIT:"Good kitty. Noted: collar fitting to be scheduled.",HUN:"You're grading me too, aren't you. Fair.",BRT:"Talking back in class? See me after.",SRV:"Excellent work ethic. Assignments incoming.",MAS:"Impact homework approved.",PRS:"Good girl. Exceptional work.",DEG:"Detention. You know what you did.",ROP:"Rope practice moved to the top of the syllabus.",PRY:"Head start: five seconds. Run.",EXH:"Show and tell will be graded.",PRO:"Class rules to be distributed. Memorize them."},j=[{id:"A",title:"Know Thyself",questions:[{id:5,question:"I'm the one who decides who gets close to me.",weights:{HUN:1}},{id:1,question:"I'd happily wear a collar that shows who I belong to.",weights:{KIT:1,PRO:.5}},{id:9,question:"Sometimes I disobey just to see what happens.",weights:{BRT:1}},{id:13,question:"Doing small tasks for my Dom makes me feel close to him.",weights:{SRV:1}},{id:16,question:"I enjoy the sting of impact and want more of it.",weights:{MAS:1}},{id:19,question:'Hearing "good girl" does something to me.',weights:{PRS:1}},{id:25,question:"Being tied up helps me let go.",weights:{ROP:1}},{id:28,question:"I'd enjoy being chased, caught, and pinned down.",weights:{PRY:1}},{id:31,question:"Being watched while I submit excites me.",weights:{EXH:1}},{id:34,question:"I like clear rules, even outside the bedroom.",weights:{PRO:1}},{id:22,question:"Being called degrading names in the moment turns me on.",weights:{DEG:1}},{id:2,question:"Being called a good kitty and getting my head scratched sounds perfect.",weights:{KIT:1,PRS:.5}},{id:6,question:"I'd rather choose my Dom than be chosen.",weights:{HUN:1}},{id:10,question:"A little attitude makes the game more fun.",weights:{BRT:1,DEG:.3}},{id:14,question:"I like having assignments and projects to complete.",weights:{SRV:1,PRO:.5}},{id:17,question:"Pain feels good when it comes from someone I trust.",weights:{MAS:1}},{id:20,question:"I want detailed praise when I do well.",weights:{PRS:1,SRV:.3}},{id:26,question:"I love not being able to move or see.",weights:{ROP:1}},{id:29,question:"I like play that feels wild and physical, not scripted.",weights:{PRY:1,BRT:.3}},{id:32,question:"I'd enjoy being shown off at a play party.",weights:{EXH:1}},{id:35,question:"Rituals like good-morning messages, positions, and titles make me feel held.",weights:{PRO:1,KIT:.3}},{id:23,question:"I like being made to feel a little naughty or humiliated.",weights:{DEG:1,EXH:.3}},{id:3,question:"I'm playful, curious, and a little aloof until I decide to curl up with someone.",weights:{KIT:1,HUN:.5}},{id:7,question:"I test a Dom slowly before I let him in.",weights:{HUN:1,BRT:.3}},{id:11,question:"I want a Dom who can win when I push back.",weights:{BRT:1,PRY:.5}},{id:15,question:"Taking care of my Dom's needs is satisfying in itself.",weights:{SRV:1}},{id:18,question:"I'm proud of my marks the next day.",weights:{MAS:1,EXH:.3}},{id:21,question:"Knowing my Dom is proud of me matters more than the play itself.",weights:{PRS:1}},{id:27,question:"Blindfolds make everything more intense for me.",weights:{ROP:.7,MAS:.3}},{id:30,question:"Struggling against someone stronger is exciting.",weights:{PRY:1,ROP:.3}},{id:33,question:"Being photographed during play appeals to me.",weights:{EXH:1}},{id:36,question:"Facing consequences when I break a rule feels right, not unfair.",weights:{PRO:.7,BRT:.3}},{id:24,question:"Sometimes I'd rather be put in my place than praised.",weights:{DEG:1}},{id:4,question:"Ears, a tail, or a bell during play sound fun to me.",weights:{KIT:1}},{id:8,question:"A Dom has to earn my submission over time.",weights:{HUN:1,PRO:.3}},{id:12,question:"I'd rather be caught than simply obey.",weights:{BRT:.5,PRY:1}}]},{id:"B",title:"The Limits Worksheet",header:"A Yes here isn't permission. It just means we'll talk about it. A Maybe means 'go slow and ask me.' Hard limits are never up for negotiation.",groups:[{title:"Impact",items:["spanking (hand)","paddle","flogger","crop","belt","leaving marks","visible marks (above clothing)"]},{title:"Sensation",items:["nipple clamps","wax play","ice and temperature play","tickling","teasing her shiver spots (lower back, back of neck)","biting","hair pulling","scratching"]},{title:"Restraint and senses",items:["rope bondage","cuffs","blindfold","gag","being left restrained for a while"]},{title:"Power and words",items:['praise and "good girl"',"degrading names","verbal humiliation","titles (Daddy / Sir)","orgasm control or denial","edging","breeding talk and fantasy","tasks and assignments","rules and punishments"]},{title:"Real-world safety",items:["actual pregnancy risk","barrier protection with a new partner","sharing recent STI test results before play"]},{title:"Kitten and primal",items:["collar","leash","ears and tail","being petted and fed by hand","primal chase and wrestling"]},{title:"Being seen",items:["being watched by others","play at a party or dungeon","being photographed","being filmed"]},{title:"Group play",items:["playing with others present"]},{title:"Edge play",items:['fear play, knife play, or CNC (marked "discuss in person only; not something to start with")']}]},{id:"C",title:"Classroom Rules",questions:[{id:"domTitle",type:"multi",question:"What do you want to call your Dom?",options:["Daddy","Sir","Master","his name","something else"],writeIn:!0},{id:"subTitle",type:"multi",question:"What do you want to be called?",options:["Kitten","good girl","pet name chosen together","your name","something else"],writeIn:!0},{id:"dynamicOn",type:"multi",question:"When should the dynamic be 'on'?",options:["Only during scenes","Scenes plus flirty texting","Light rules day to day","Mostly always on, by agreement","24/7 (24 hours a day, 7 days a week)"]},{id:"ruleBreaking",type:"multi",question:"How should rule-breaking be handled?",options:["Real punishments","Funishments","A mix","No punishments, just redirection"]},{id:"safewords",type:"multi",question:"Safewords:",options:["Traffic lights (green / yellow / red)","My own word","A nonverbal signal too","Something else"],writeIn:!0},{id:"checkins",type:"multi",question:"How often do you want check-ins?",options:["Daily good-morning or good-night","A few times a week","During and after scenes only","24/7","Something else"],writeIn:!0},{id:"aftercare",type:"multi",question:"Aftercare you like:",options:["Cuddling","Blanket","Water and snacks","Praise and reassurance","Quiet time","Talking it through","Check-in the next day","Space to myself","Something else"],writeIn:!0},{id:"subDrop",type:"open",question:"Have you dealt with sub drop, and what helps?"},{id:"overwhelmed",type:"open",question:"How will I know you're overwhelmed even if you don't safeword?"},{id:"tellMe",type:"multi",question:"Best way for you to tell me what you want:",options:["In person","Text","Written list","In a quiz like this one","Something else"],writeIn:!0}]},{id:"D",title:"Grade the Instructor",header:"You're the hunter. Now you grade me.",ratings:["Consistency: he shows up and doesn't disappear","Follow-through: he does what he says","Communication and check-ins","Patience: lets things build slowly","Aftercare","Respect for my other relationships","Creativity and planning scenes","Intensity","Sense of humor","Nerd compatibility (anime, games, Magic)"],open:["What would earn the instructor extra credit?","One thing you want me to never forget about you:"]}],p={instructor:C,archetypes:O,profile:L,notes:H,sections:j},I="pop-quiz-state-v1",e={screen:"intro",consent:!1,sectionIndex:0,questionIndex:0,devMode:!1,answers:{sectionA:{},sectionB:{},sectionC:{},sectionD:{}},contract:{dos:[],donts:[],safeword:"",overwhelmed:"",notes:""}},z=["Strongly disagree","Disagree","Neutral","Agree","Strongly agree"],A=["Yes","Curious","Maybe","No","Hard Limit"];function b(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function E(){e.screen="intro",e.consent=!1,e.sectionIndex=0,e.questionIndex=0,e.answers={sectionA:{},sectionB:{},sectionC:{},sectionD:{}},e.contract={dos:[],donts:[],safeword:"",overwhelmed:"",notes:""},localStorage.removeItem(I),u(),h()}function l(){try{localStorage.setItem(I,JSON.stringify({screen:e.screen,consent:e.consent,sectionIndex:e.sectionIndex,questionIndex:e.questionIndex,devMode:e.devMode,answers:e.answers,contract:e.contract}))}catch(n){console.warn("Unable to save quiz progress locally.",n)}}function B(){try{const n=localStorage.getItem(I);if(!n)return;const o=JSON.parse(n);if(!o)return;e.screen=o.screen||"intro",e.consent=!!o.consent,e.sectionIndex=Number(o.sectionIndex)||0,e.questionIndex=Number(o.questionIndex)||0,e.devMode=!!o.devMode,e.answers={...e.answers,...o.answers||{}},e.contract={...e.contract,...o.contract||{}}}catch(n){console.warn("Unable to restore quiz progress locally.",n)}}function Y(){try{return!!localStorage.getItem(I)}catch{return!1}}function w(){return p.sections[e.sectionIndex]}function K(){const n=w();return!n||!Array.isArray(n.questions)?null:n.questions[e.questionIndex]??null}function P(){e.sectionIndex<p.sections.length-1?(e.sectionIndex+=1,e.questionIndex=0,e.screen="section",l(),u(),h()):(e.screen="results",l(),u(),h())}function G(){if(e.screen==="section"){if(w()&&w().id==="A"&&e.questionIndex>0){e.questionIndex-=1,l(),u(),h();return}e.sectionIndex>0&&(e.sectionIndex-=1,e.questionIndex=0,l(),u(),h())}}function R(){const n=Object.fromEntries(p.archetypes.map(t=>[t.code,0])),o=Object.fromEntries(p.archetypes.map(t=>[t.code,0]));return p.sections.find(t=>t.id==="A").questions.forEach(t=>{const s=e.answers.sectionA[t.id];if(s==null)return;const c=(s-1)/4;Object.entries(t.weights||{}).forEach(([m,g])=>{o[m]+=g*c,n[m]+=g})}),p.archetypes.map(t=>{const s=n[t.code]||0,c=s?Math.round(o[t.code]/s*100):0;return{...t,score:c,answered:s?Object.values(e.answers.sectionA).filter(m=>m!==void 0).length:0}}).sort((t,s)=>{if((s.score??0)!==(t.score??0))return(s.score??0)-(t.score??0);const c=t.answered||0;return(s.answered||0)-c})}function D(){const n=R().slice(0,3);if(!n.length)return"Collar Kitten with a Hunter streak";const o=n[0],i=n[1]||n[0];return`${o.shortName} with a ${i.shortName} streak`}function M(){return{submittedAt:new Date().toISOString(),title:D(),archetypeScores:Object.fromEntries(R().map(n=>[n.code,n.score])),sectionA:e.answers.sectionA,sectionB:e.answers.sectionB,sectionC:e.answers.sectionC,sectionD:e.answers.sectionD,contract:e.contract,developerMode:e.devMode}}function V(){return b(JSON.stringify(M(),null,2))}function Q(n){return n[Math.floor(Math.random()*n.length)]}function U(n){const o=Math.max(0,Math.min(100,Number(n)||0));return o<25?{text:"#c8102e",fill:"linear-gradient(90deg, #c8102e, #9c0e24)"}:o<=40?{text:"#b78a00",fill:"linear-gradient(90deg, #e8bf2c, #c39200)"}:{text:"#1c8b48",fill:"linear-gradient(90deg, #46c67f, #19864f)"}}function W(){p.sections.find(t=>t.id==="A").questions.forEach(t=>{e.answers.sectionA[t.id]=Math.floor(Math.random()*5)+1}),p.sections.find(t=>t.id==="B").groups.forEach(t=>{t.items.forEach(s=>{const c=`${t.title}::${s}`;e.answers.sectionB[c]={answer:Q(A),note:""}})}),p.sections.find(t=>t.id==="C").questions.forEach(t=>{if(t.type==="open"){e.answers.sectionC[t.id]="Developer test entry";return}const s=t.options.filter(()=>Math.random()>.45);e.answers.sectionC[t.id]=s.length?s:[t.options[0]],t.writeIn&&(e.answers.sectionC[`${t.id}Custom`]="Developer fill")});const r=p.sections.find(t=>t.id==="D");r.ratings.forEach(t=>{e.answers.sectionD[t]=Math.floor(Math.random()*5)+1}),r.open.forEach(t=>{e.answers.sectionD[t]="Developer test response"}),e.contract={dos:["Impact play","Praise / good girl","Aftercare"],donts:["Needles","Knife play","Late-night ghosting"],safeword:"Red",overwhelmed:"I need space and a check-in before we continue.",notes:"Developer smoke test."},e.consent=!0,e.screen="results",l(),u(),h()}function k(n="Start Over"){return`<button type="button" class="reset-quiz-button" data-reset-quiz="true">${n}</button>`}function F(n){e.devMode=!e.devMode,l(),u(),h()}function X(){const n=Y()?'<div class="resume-note">Progress saved on this device. You can continue later.</div>':"";return`
    <main class="intro-shell">
      <div class="intro-header-actions">
        <button type="button" class="dev-toggle ${e.devMode?"active":""}" id="developerModeToggle">
          ${e.devMode?"Developer mode on":"Developer mode"}
        </button>
        ${k("Restart Quiz")}
      </div>
      <div class="intro-visual">
        <img src="${T}" alt="Moody classroom with a leather paddle on a desk" />
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
        ${n}
      </div>
    </main>
  `}function _(){return`
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
  `}function J(){const n=K();if(!n)return"";const o=e.answers.sectionA[n.id];return`
    <div class="quiz-card">
      <div class="screen-top-actions">${k("Restart Quiz")}</div>
      <div class="section-label">Section ${e.sectionIndex+1} of ${p.sections.length} · ${w().title}</div>
      <h3>${n.question}</h3>
      <div class="answer-stack">
        ${z.map((i,r)=>{const t=r+1;return`
            <button class="answer-option ${o===t?"selected":""}" type="button" data-value="${t}">
              ${i}
            </button>
          `}).join("")}
      </div>
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section" ${e.questionIndex===0&&e.sectionIndex===0?"disabled":""}>Back</button>
      </div>
      <div class="signature">Instructor: ${p.instructor}</div>
    </div>
  `}function Z(){const n=w();return`
    <div class="worksheet-card">
      <div class="screen-top-actions">${k("Restart Quiz")}</div>
      <div class="section-label">Section ${e.sectionIndex+1} of ${p.sections.length} · ${n.title}</div>
      <h3>${n.header}</h3>
      ${n.groups.map(o=>`
        <div class="limits-group">
          <h4>${o.title}</h4>
          <div class="limit-list">
            ${o.items.map(i=>{const r=`${o.title}::${i}`,t=b(r),s=e.answers.sectionB[r],c=typeof s=="object"&&s?s.answer:s,m=typeof s=="object"&&s&&s.note||"";return`
                <div class="limit-row">
                  <span class="item-label">${b(i)}</span>
                  <div class="limit-options">
                    ${A.map(g=>`
                      <button type="button" class="limit-option ${c===g?"selected":""}" data-group="sectionB" data-key="${t}" data-value="${b(g)}">${g}</button>
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
  `}function ee(){const n=w();return`
    <div class="survey-card">
      <div class="screen-top-actions">${k("Restart Quiz")}</div>
      <div class="section-label">Section ${e.sectionIndex+1} of ${p.sections.length} · ${n.title}</div>
      ${n.questions.map(o=>{var c,m;const i=e.answers.sectionC[o.id]??[],r=Array.isArray(i)?i:i?[i]:[],t=e.answers.sectionC[`${o.id}Custom`]??"",s=o.writeIn||((c=o.options)==null?void 0:c.includes("Something else"))||((m=o.options)==null?void 0:m.includes("something else"));return o.type==="open"?`
            <div class="question-block open-block">
              <label>${o.question}</label>
              <textarea data-group="sectionC" data-key="${o.id}">${e.answers.sectionC[o.id]??""}</textarea>
            </div>
          `:`
          <div class="question-block">
            <label>${o.question}</label>
            <div class="toggle-grid">
              ${o.options.map(g=>`<button type="button" class="toggle-chip ${r.includes(g)?"selected":""}" data-group="sectionC" data-key="${o.id}" data-value="${b(g)}">${g}</button>`).join("")}
            </div>
            ${s?`
              <input
                type="text"
                class="write-in-field"
                value="${b(t)}"
                data-group="sectionC"
                data-key="${o.id}Custom"
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
  `}function te(){const n=w();return`
    <div class="survey-card">
      <div class="screen-top-actions">${k("Restart Quiz")}</div>
      <div class="section-label">Section ${e.sectionIndex+1} of ${p.sections.length} · ${n.title}</div>
      <h3>${n.header}</h3>
      ${n.ratings.map(o=>`
        <div class="rating-row">
          <span>${o}</span>
          <div class="rating-scale">
            ${[1,2,3,4,5].map(i=>`
              <button type="button" class="rating-pill ${e.answers.sectionD[o]===i?"selected":""}" data-group="sectionD" data-key="${o}" data-value="${i}">${i}</button>
            `).join("")}
          </div>
        </div>
      `).join("")}
      ${n.open.map(o=>`
        <div class="question-block open-block">
          <label>${o}</label>
          <textarea data-group="sectionD" data-key="${o}">${e.answers.sectionD[o]||""}</textarea>
        </div>
      `).join("")}
      <div class="section-nav">
        <button type="button" class="secondary-button prev-section">Back</button>
        <button type="button" id="nextSection" class="primary-button">See Results</button>
      </div>
    </div>
  `}function ne(){const n=w();return n?n.id==="A"?J():n.id==="B"?Z():n.id==="C"?ee():te():""}function oe(){var t;const n=R(),o=n.slice(0,3),i=o.length?`Your profile reads as a ${o.map(s=>s.shortName.toLowerCase()).join(", ")} blend.`:"Your profile is still taking shape.",r=`Tiny note in the margin: a little ${p.profile.anime[0]} energy, because some stories leave a mark.`;return`
    <main class="results-shell">
      <div class="results-paper">
        <div class="screen-top-actions results-top-actions">${k("Restart Quiz")}</div>
        <div class="grade-badge">A+</div>
        <div class="title-line">${D()}</div>
        <div class="results-summary">${i}</div>
        <div class="bars-wrap">
          ${n.map(s=>{const c=Math.max(0,Math.min(100,Number(s.score)||0)),m=U(c);return`
              <div class="result-row">
                <span>${s.shortName}</span>
                <div class="bar"><i style="width: ${c}%; background: ${m.fill};"></i></div>
                <em style="color: ${m.text};">${c}%</em>
              </div>
            `}).join("")}
        </div>
        <div class="result-writeups">
          ${o.map(s=>`
            <div class="writeup-box">
              <h4>${s.name}</h4>
              <p>${s.writeup}</p>
            </div>
          `).join("")}
        </div>
        <div class="margin-note">${p.notes[(t=o[0])==null?void 0:t.code]||r}</div>

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
          <pre>${V()}</pre>
        </div>

        <div class="results-actions">
          <button type="button" id="turnInPaper" class="primary-button purple-button">Turn In My Paper</button>
          <button type="button" id="keepPrivate" class="secondary-button">Keep It To Myself</button>
        </div>
      </div>
    </main>
  `}function u(){const n=document.querySelector("#app");if(n){if(e.screen==="intro"){n.innerHTML=X();return}if(e.screen==="consent"){n.innerHTML=_();return}if(e.screen==="section"){n.innerHTML=`<main class="quiz-shell">${ne()}</main>`;return}e.screen==="results"&&(n.innerHTML=oe())}}function se(n,o,i){const r=e.answers[n][o]||[],t=r.includes(i)?r.filter(s=>s!==i):[...r,i];e.answers[n][o]=t}function $(n){const{group:o,key:i,value:r}=n.dataset,t=w();if(t.id==="A"){e.answers.sectionA[Number(i)]=Number(r),e.questionIndex+=1,l(),e.questionIndex>=t.questions.length?P():(u(),h());return}if(t.id==="B"){const s=e.answers.sectionB[i],c=typeof s=="object"&&s?{...s,answer:r}:{answer:r,note:""};e.answers.sectionB[i]=c,l(),u(),h();return}if(t.id==="C"){n.classList.contains("toggle-chip")&&(se("sectionC",i,r),l(),u(),h());return}if(t.id==="D"){e.answers.sectionD[i]=Number(r),l(),u(),h();return}}function h(){const n=document.querySelector(".paddle-trigger");n&&n.addEventListener("click",()=>{e.screen="consent",l(),u(),h()});const o=document.querySelector("#adultCheck"),i=document.querySelector("#beginExam");o&&i&&(o.addEventListener("change",a=>{e.consent=a.target.checked,i.disabled=!e.consent,l()}),i.addEventListener("click",()=>{e.consent&&(e.sectionIndex=0,e.questionIndex=0,e.screen="section",l(),u(),h())}));const r=document.querySelector("#developerModeToggle");r&&r.addEventListener("click",()=>F()),document.querySelectorAll(".answer-option").forEach(a=>{a.addEventListener("click",()=>$(a))}),document.querySelectorAll(".limit-option").forEach(a=>{a.addEventListener("click",()=>$(a))}),document.querySelectorAll(".toggle-chip").forEach(a=>{a.addEventListener("click",()=>$(a))}),document.querySelectorAll(".rating-pill").forEach(a=>{a.addEventListener("click",()=>$(a))});const t=document.querySelector("#devRandomize");t&&t.addEventListener("click",()=>{e.devMode=!0,W()});const s=document.querySelector("#devReset");s&&s.addEventListener("click",()=>{E()}),document.querySelectorAll('[data-reset-quiz="true"]').forEach(a=>{a.addEventListener("click",()=>{window.confirm("Start over? This will clear your saved answers and progress.")&&E()})}),document.querySelectorAll("textarea[data-group]").forEach(a=>{a.addEventListener("input",f=>{const d=f.target,{group:y,key:v,note:x}=d.dataset;if(y==="sectionB"&&x==="true"){const S=e.answers[y][v],N=typeof S=="object"&&S?{...S,note:d.value}:{answer:"",note:d.value};e.answers[y][v]=N,l();return}e.answers[y][v]=d.value,l()})}),document.querySelectorAll("input[data-group]").forEach(a=>{a.addEventListener("input",f=>{const d=f.target,{group:y,key:v}=d.dataset;e.answers[y][v]=d.value,l()})}),document.querySelectorAll("[data-contract-field]").forEach(a=>{a.addEventListener("input",f=>{const d=f.target,{contractField:y}=d.dataset;if(d.type==="checkbox"){const v=e.contract[y]||[],x=d.checked?[...v,d.value]:v.filter(S=>S!==d.value);e.contract[y]=x}else e.contract[y]=d.value;l()})});const m=document.querySelector("#nextSection");m&&m.addEventListener("click",()=>{e.sectionIndex<p.sections.length-1?P():(e.screen="results",l(),u(),h())}),document.querySelectorAll(".prev-section").forEach(a=>{a.addEventListener("click",()=>{G()})});const g=document.querySelector("#turnInPaper");g&&g.addEventListener("click",async()=>{const a=M(),f=document.forms["pop-quiz"];f&&(f.querySelector('[name="payload"]').value=JSON.stringify(a));try{const d=await fetch("/.netlify/functions/send-quiz-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({payload:a,emailTo:"ryan@example.com"})});if(!d.ok)throw new Error(`Email API returned ${d.status}`)}catch(d){console.warn("Unable to send email immediately; falling back to form submission.",d),f&&f.requestSubmit()}window.alert("Paper received. The instructor will review your work."),e.screen="intro",e.consent=!1,e.sectionIndex=0,e.questionIndex=0,e.answers={sectionA:{},sectionB:{},sectionC:{},sectionD:{}},e.contract={dos:[],donts:[],safeword:"",overwhelmed:"",notes:""},localStorage.removeItem(I),u(),h()});const q=document.querySelector("#keepPrivate");q&&q.addEventListener("click",()=>{e.screen="intro",e.consent=!1,e.sectionIndex=0,e.questionIndex=0,e.answers={sectionA:{},sectionB:{},sectionC:{},sectionD:{}},e.contract={dos:[],donts:[],safeword:"",overwhelmed:"",notes:""},localStorage.removeItem(I),u(),h()})}window.addEventListener("DOMContentLoaded",()=>{B(),u(),h()});B();u();h();
