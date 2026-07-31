(()=>{
'use strict';
const LETTER_ORDER=['meem','baa','laam','daal','noon','raa'];
const STAGES=[
 {id:'intro',label:'المقدمة',icon:'👋'},
 {id:'story',label:'القصة',icon:'📖'},
 {id:'activity',label:'النشاط',icon:'🎯'},
 {id:'game',label:'اللعبة',icon:'🎮'},
 {id:'book',label:'الصفحات',icon:'📘'},
 {id:'assessment',label:'التقويم',icon:'✅'},
 {id:'success',label:'الوسام',icon:'🏅'}
];
const lessons=window.LESSON_DATA||{};
let currentLetter='meem', currentStage=0;
let progress=loadJSON('saad.v3.progress',{});
let edited=loadJSON('saad.v3.edits',{});
let selectedRecording=null, recorder=null, chunks=[], stream=null, audioCtx=null, analyser=null, animId=null, recordedBlob=null;

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function loadJSON(k,d){try{return JSON.parse(localStorage.getItem(k))||d}catch{return d}}
function saveJSON(k,v){localStorage.setItem(k,JSON.stringify(v))}
function lesson(id){return {...lessons[id],...(edited[id]||{})}}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function showView(id){$$('.view').forEach(v=>v.classList.toggle('active',v.id===id));$$('.navbtn').forEach(b=>b.classList.toggle('active',b.dataset.view===id));scrollTo({top:document.querySelector('.brand').offsetHeight,behavior:'smooth'});if(id==='achievements')renderAchievements();if(id==='stories')renderStories();if(id==='teacher')renderTeacher();if(id==='studio')renderStudio();}
function stateFor(id){return progress[id]||{stage:0,done:[],completed:false}}
function setState(id,s){progress[id]=s;saveJSON('saad.v3.progress',progress);renderStats()}
function completeStage(id,stage){const s=stateFor(id);if(!s.done.includes(stage))s.done.push(stage);s.stage=Math.max(s.stage,stage);if(stage===6)s.completed=true;setState(id,s)}
function letterCard(id){const l=lesson(id),s=stateFor(id);return `<button class="letter-card ${s.completed?'done':''}" data-letter="${id}" style="border-top:6px solid ${colorFor(id)}"><span class="glyph">${l.letter}</span><strong>${l.name}</strong><div class="stars">${s.completed?'★★★':'☆☆☆'}</div><small>${s.completed?'مكتمل':'ابدأ الرحلة'}</small></button>`}
function colorFor(id){return {meem:'#6d5ce8',baa:'#1787d4',laam:'#15a46d',daal:'#e69a24',noon:'#e45e78',raa:'#8a61c9'}[id]}
function renderLetterCards(){const html=LETTER_ORDER.map(letterCard).join('');$('#homeLetters').innerHTML=html;$('#allLetters').innerHTML=html;$$('[data-letter]').forEach(b=>b.onclick=()=>openLesson(b.dataset.letter));}
function renderStats(){const done=LETTER_ORDER.filter(id=>stateFor(id).completed).length;$('#doneCount').textContent=done;$('#starCount').textContent=done*3;$('#remainCount').textContent=6-done;$('#percent').textContent=Math.round(done/6*100)+'%';renderLetterCards()}
function openLesson(id,stage=null){currentLetter=id;const s=stateFor(id);currentStage=stage==null?Math.min(s.stage,6):stage;renderLesson();showView('lesson')}
function renderLesson(){const l=lesson(currentLetter),s=stateFor(currentLetter);$('#lessonTitle').textContent=`حرف ${l.name} (${l.letter})`;$('#lessonSubtitle').textContent='رحلة تعليمية من سبع مراحل؛ أكملها بالترتيب واحصل على الوسام.';$('#lessonProgress').style.width=((s.done.length/7)*100)+'%';
 $('#lessonSteps').innerHTML=STAGES.map((st,i)=>`<button class="step ${i===currentStage?'active':''} ${s.done.includes(i)?'done':''}" data-stage="${i}"><span>${s.done.includes(i)?'✓':st.icon}</span>${st.label}</button>`).join('');
 $('#panels').innerHTML=buildPanels(l);$$('[data-stage]').forEach(b=>b.onclick=()=>{currentStage=+b.dataset.stage;renderLesson()});$$('.panel').forEach((p,i)=>p.classList.toggle('active',i===currentStage));
 $('#prevStage').disabled=currentStage===0;$('#nextStage').textContent=currentStage===6?'العودة للرئيسية':'التالي';bindPanelEvents(l);
}
function buildPanels(l){return `
<section class="card panel"><h3>مقدمة حرف ${l.name}</h3><p>${l.intro}</p><div class="listen"><button class="cta primary" data-audio="intro">🔊 استمع للمقدمة</button><button class="cta secondary" data-mark="0">تمت القراءة</button></div><div class="audio-status" id="audioMsgIntro">التسجيل يعمل عند وجود الملف: ${l.audio.intro}</div></section>
<section class="card panel"><h3>قصة حرف ${l.name}</h3><p>${l.story}</p><div class="listen"><button class="cta primary" data-audio="story">🔊 استمع للقصة</button><button class="cta secondary" data-mark="1">أنهيت القصة</button></div><div class="audio-status">مسار القصة: ${l.audio.story}</div></section>
<section class="card panel"><h3>نشاط: اختر كلمات الحرف</h3><p>اضغط جميع الكلمات التي تبدأ بحرف ${l.letter}.</p><div class="choices">${l.words.map((w,i)=>`<button class="choice" data-choice="${i}"><em>${w[1]}</em>${w[0]}</button>`).join('')}</div></section>
<section class="card panel"><h3>لعبة الذاكرة</h3><p>اجمع كل زوج: الحرف والكلمة التي تبدأ به.</p><div class="memory">${shuffle(l.game.map((v,i)=>({v,i}))).map(x=>`<button class="mem" data-memory="${x.v}" data-key="${x.i}">${x.v}</button>`).join('')}</div></section>
<section class="card panel"><h3>صفحات التدريب</h3><div class="book"><div class="bookbox"><div class="big">${l.letter}</div><div class="harakat">${l.book.map(x=>`<b>${x}</b>`).join('')}</div></div><div class="bookbox"><h3>أتتبع الحرف</h3><p style="font-size:60px;letter-spacing:22px;color:#b8c2bd">${l.letter} ${l.letter} ${l.letter}</p><button class="cta primary" data-mark="4">أنهيت التدريب</button></div></div></section>
<section class="card panel assessment"><h3>التقويم</h3><p>${l.assessment.question}</p>${l.assessment.options.map((o,i)=>`<button class="choice" data-answer="${i}">${o}</button>`).join('')}</section>
<section class="card panel"><h3>وسام الإنجاز</h3><div class="badge">${l.letter}</div><p style="text-align:center">${l.success}</p><div class="listen" style="justify-content:center"><button class="cta primary" data-audio="success">🔊 استمع للتهنئة</button><button class="cta gold" data-finish>اعتماد الوسام</button></div></section>`}
function bindPanelEvents(l){
 $$('[data-mark]').forEach(b=>b.onclick=()=>{completeStage(currentLetter,+b.dataset.mark);toast('أحسنت! اكتملت المرحلة');renderLesson()});
 $$('[data-audio]').forEach(b=>b.onclick=()=>playAudio(l.audio[b.dataset.audio],()=>{const idx={intro:0,story:1,success:6}[b.dataset.audio];completeStage(currentLetter,idx);renderLesson()}));
 let selected=new Set();$$('[data-choice]').forEach(b=>b.onclick=()=>{const i=+b.dataset.choice;if(l.correct.includes(i)){b.classList.add('ok');selected.add(i);if(selected.size===l.correct.length){completeStage(currentLetter,2);toast('رائع! اخترت جميع الكلمات الصحيحة');renderLesson()}}else{b.classList.add('bad');setTimeout(()=>b.classList.remove('bad'),700);toast('حاول مرة أخرى')}});
 bindMemory();$$('[data-answer]').forEach(b=>b.onclick=()=>{const ok=+b.dataset.answer===l.assessment.answer;b.classList.add(ok?'ok':'bad');if(ok){completeStage(currentLetter,5);toast('إجابة صحيحة!');setTimeout(()=>{currentStage=6;renderLesson()},500)}else toast('حاول مرة أخرى')});
 const f=$('[data-finish]');if(f)f.onclick=()=>{completeStage(currentLetter,6);toast('مبارك! حصلت على الوسام');renderLesson()};}
function shuffle(a){return a.sort(()=>Math.random()-.5)}
function bindMemory(){let open=[];let matched=0;$$('.mem').forEach(b=>b.onclick=()=>{if(b.classList.contains('open')||b.classList.contains('matched')||open.length===2)return;b.classList.add('open');open.push(b);if(open.length===2){const [a,c]=open;const ok=a.dataset.memory===c.dataset.memory&&a.dataset.key!==c.dataset.key;setTimeout(()=>{if(ok){a.classList.add('matched');c.classList.add('matched');matched+=2;if(matched===6){completeStage(currentLetter,3);toast('أكملت لعبة الذاكرة!');renderLesson()}}else{a.classList.remove('open');c.classList.remove('open')}open=[]},550)}})}
function playAudio(path,onEnded){const a=new Audio(path);a.onended=onEnded;a.onerror=()=>toast('ملف الصوت غير موجود بعد: '+path);a.play().catch(()=>toast('تعذر تشغيل الصوت؛ تأكد من الملف والمسار'))}
function renderStories(){$('#storyList').innerHTML=LETTER_ORDER.map(id=>{const l=lesson(id);return `<article class="card dash-card"><h2>${l.letter} — ${l.name}</h2><p>${l.story}</p><button class="cta primary" data-story="${id}">استمع</button></article>`}).join('');$$('[data-story]').forEach(b=>b.onclick=()=>playAudio(lesson(b.dataset.story).audio.story))}
function renderAchievements(){$('#achievementGrid').innerHTML=LETTER_ORDER.map(id=>{const l=lesson(id),s=stateFor(id);return `<div class="letter-card ${s.completed?'done':''}"><span class="glyph">${l.letter}</span><strong>${l.name}</strong><div class="stars">${s.completed?'★★★':'☆☆☆'}</div><small>${s.completed?'وسام مكتسب':'لم يكتمل بعد'}</small></div>`}).join('')}
function renderTeacher(){const sel=$('#teacherLetter');sel.innerHTML=LETTER_ORDER.map(id=>`<option value="${id}">${lesson(id).letter} — ${lesson(id).name}</option>`).join('');sel.value=currentLetter;fillTeacher();sel.onchange=()=>{currentLetter=sel.value;fillTeacher()};renderAudioStatus()}
function fillTeacher(){const l=lesson(currentLetter);$('#editIntro').value=l.intro;$('#editStory').value=l.story;$('#editSuccess').value=l.success}
function renderAudioStatus(){$('#audioStatusList').innerHTML=LETTER_ORDER.map(id=>{const l=lesson(id);return `<div class="audio-status"><b>${l.letter} ${l.name}</b><br>${Object.values(l.audio).join('<br>')}</div>`}).join('')}
function renderStudio(){const items=[];LETTER_ORDER.forEach(id=>{const l=lesson(id);['intro','story','success'].forEach(type=>items.push({id,type,title:`${l.letter} — ${{intro:'المقدمة',story:'القصة',success:'الإنجاز'}[type]}`,path:l.audio[type],script:l[type]}))});$('#recordList').innerHTML='<h2>التسجيلات المطلوبة</h2>'+items.map((x,i)=>`<button class="navbtn" data-rec="${i}">${x.title}</button>`).join('');$$('[data-rec]').forEach(b=>b.onclick=()=>{selectedRecording=items[+b.dataset.rec];$('#recTitle').textContent=selectedRecording.title;$('#recPath').textContent=selectedRecording.path;$('#recScript').value=selectedRecording.script;recordedBlob=null;$('#downloadRec').disabled=true;$('#recMessage').textContent='جاهز للتسجيل'})}
async function startRecording(){if(!selectedRecording)return toast('اختر التسجيل أولًا');try{stream=await navigator.mediaDevices.getUserMedia({audio:true});chunks=[];recorder=new MediaRecorder(stream);recorder.ondataavailable=e=>e.data.size&&chunks.push(e.data);recorder.onstop=()=>{recordedBlob=new Blob(chunks,{type:recorder.mimeType||'audio/webm'});$('#previewAudio').src=URL.createObjectURL(recordedBlob);$('#downloadRec').disabled=false;$('#recMessage').textContent='تم التسجيل؛ استمع ثم نزّل الملف.';stopMeter()};recorder.start();$('#startRec').disabled=true;$('#stopRec').disabled=false;$('#recMessage').textContent='جارٍ التسجيل...';startMeter(stream)}catch(e){toast('تعذر الوصول إلى الميكروفون: '+e.message)}}
function stopRecording(){if(recorder&&recorder.state!=='inactive')recorder.stop();stream?.getTracks().forEach(t=>t.stop());$('#startRec').disabled=false;$('#stopRec').disabled=true}
function startMeter(s){audioCtx=new (window.AudioContext||window.webkitAudioContext)();analyser=audioCtx.createAnalyser();audioCtx.createMediaStreamSource(s).connect(analyser);const arr=new Uint8Array(analyser.frequencyBinCount);const canvas=$('#wave'),ctx=canvas.getContext('2d');function draw(){analyser.getByteTimeDomainData(arr);let max=0;for(const v of arr)max=Math.max(max,Math.abs(v-128));$('#micMeter').style.width=Math.min(100,max*2)+'%';canvas.width=canvas.clientWidth*devicePixelRatio;canvas.height=canvas.clientHeight*devicePixelRatio;ctx.scale(devicePixelRatio,devicePixelRatio);ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);ctx.beginPath();ctx.lineWidth=2;ctx.strokeStyle='#15845c';arr.forEach((v,i)=>{const x=i/(arr.length-1)*canvas.clientWidth,y=v/255*canvas.clientHeight;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();animId=requestAnimationFrame(draw)}draw()}
function stopMeter(){cancelAnimationFrame(animId);audioCtx?.close();$('#micMeter').style.width='0%'}
function downloadRecording(){if(!recordedBlob||!selectedRecording)return;const a=document.createElement('a');a.href=URL.createObjectURL(recordedBlob);a.download=selectedRecording.path.split('/').pop();a.click();URL.revokeObjectURL(a.href)}
function downloadJSON(obj,name){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}));a.download=name;a.click();URL.revokeObjectURL(a.href)}

$$('.navbtn[data-view]').forEach(b=>b.onclick=()=>showView(b.dataset.view));$('#continueBtn').onclick=()=>{const last=localStorage.getItem('saad.v3.last')||'meem';openLesson(last)};$('#backHome').onclick=()=>showView('letters');$('#prevStage').onclick=()=>{if(currentStage>0){currentStage--;renderLesson()}};$('#nextStage').onclick=()=>{completeStage(currentLetter,currentStage);if(currentStage<6){currentStage++;const s=stateFor(currentLetter);s.stage=currentStage;setState(currentLetter,s);localStorage.setItem('saad.v3.last',currentLetter);renderLesson()}else showView('home')};
$('#startRec').onclick=startRecording;$('#stopRec').onclick=stopRecording;$('#downloadRec').onclick=downloadRecording;
$('#saveLocal').onclick=()=>{edited[currentLetter]={intro:$('#editIntro').value.trim(),story:$('#editStory').value.trim(),success:$('#editSuccess').value.trim()};saveJSON('saad.v3.edits',edited);toast('تم حفظ النصوص محليًا');renderLetterCards()};$('#exportJson').onclick=()=>downloadJSON({...lessons,...edited},'lessons-v3-edited.json');$('#resetProgress').onclick=()=>{if(confirm('هل تريد إعادة ضبط تقدم الطالب؟')){progress={};saveJSON('saad.v3.progress',progress);renderStats();toast('تمت إعادة الضبط')}};
renderStats();renderStories();renderStudio();
const initialHash=location.hash.replace('#','');if(['home','letters','stories','achievements','studio','teacher'].includes(initialHash))showView(initialHash);
addEventListener('hashchange',()=>{const h=location.hash.replace('#','');if(['home','letters','stories','achievements','studio','teacher'].includes(h))showView(h)});
})();
