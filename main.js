const storageKey='rashi-sweet16-opened-v2';
function getOpened(){try{return JSON.parse(localStorage.getItem(storageKey)||'[]').filter(n=>Number.isInteger(n)&&n>=0&&n<16)}catch{return []}}
function markOpened(i){const opened=new Set(getOpened());opened.add(i);try{localStorage.setItem(storageKey,JSON.stringify([...opened]))}catch{}}
const grid=document.getElementById('grid');
if(grid){
 const opened=new Set(getOpened());
 letters.forEach((letter,i)=>{
  const a=document.createElement('a');a.href=`letter.html?id=${i+1}`;a.className='envelope-card'+(opened.has(i)?' seen':'');
  a.innerHTML=`<span class="num">LETTER ${String(i+1).padStart(2,'0')}</span><div class="envelope"><div class="flap"></div><div class="seal">♥</div></div><strong class="sender"></strong><span class="hint">${opened.has(i)?'read with love ♡':'tap to open ♡'}</span>`;
  a.querySelector('.sender').textContent=letter.from;grid.appendChild(a);
 });
 document.getElementById('count').textContent=`${opened.size} of 16 letters opened`;
 document.getElementById('fill').style.width=`${opened.size/16*100}%`;
 if(opened.size===16)document.getElementById('finale').hidden=false;
 document.getElementById('celebrate').addEventListener('click',()=>{
  const emojis=['💜','✨','🦋','💖','🎉'];for(let i=0;i<45;i++){const el=document.createElement('span');el.className='confetti';el.textContent=emojis[i%emojis.length];el.style.left=Math.random()*100+'vw';el.style.animationDelay=Math.random()*1.2+'s';document.body.appendChild(el);setTimeout(()=>el.remove(),4000)}
 });
}
const body=document.getElementById('letter-message');
if(body){
 const raw=Number(new URLSearchParams(location.search).get('id'));
 const i=Number.isInteger(raw)&&raw>=1&&raw<=16?raw-1:0;
 const letter=letters[i];markOpened(i);
 document.title=`Letter ${i+1} from ${letter.from} 💌`;
 document.getElementById('letter-number').textContent=`LETTER ${String(i+1).padStart(2,'0')} OF 16 · FROM ${letter.from}`;
 body.textContent=letter.message.replace(/^Dear Rashi,\s*/i,'');
 document.getElementById('signature').textContent=`With love, ${letter.from} ♡`;
 const prev=document.getElementById('previous'),next=document.getElementById('next');
 if(i>0)prev.href=`letter.html?id=${i}`;else prev.style.visibility='hidden';
 if(i<15)next.href=`letter.html?id=${i+2}`;else next.style.visibility='hidden';
}
