/* Original 24 × 24 pixel symbols, drawn for the 2026-09-16 family presentation. */
(() => {
'use strict';
const data = FAMILY_DATA;
const teamNames={pognaru:'포근나루',astra:'Astra',deeper:'디퍼 살롱'};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function art(id){
 const g=Array.from({length:24},()=>Array(24).fill(null));
 const dot=(x,y,c)=>{if(x>=0&&x<24&&y>=0&&y<24)g[y][x]=c;};
 const box=(x,y,w,h,c)=>{for(let j=y;j<y+h;j++)for(let i=x;i<x+w;i++)dot(i,j,c);};
 const disk=(x,y,r,c)=>{for(let j=0;j<24;j++)for(let i=0;i<24;i++)if((i-x)**2+(j-y)**2<=r*r)dot(i,j,c);};
 const line=(x,y,a,b,c,w=1)=>{let n=Math.max(Math.abs(a-x),Math.abs(b-y));for(let k=0;k<=n;k++)box(Math.round(x+(a-x)*k/n),Math.round(y+(b-y)*k/n),w,w,c);};
 const star=(x,y,r,c)=>{for(let j=-r;j<=r;j++)for(let i=-r;i<=r;i++)if(Math.abs(i)+Math.abs(j)<=r && (Math.abs(i)<2||Math.abs(j)<2))dot(x+i,y+j,c);};
 const blue='#307FA8',light='#A8DFEE',navy='#234A6A',green='#428464',leaf='#83BA70',gold='#E9A33A',yellow='#F4CD65',ink='#3C394E',purple='#7774B9',orange='#DC8652';
 switch(id){
 case 'bada': for(let x=2;x<22;x++){let t=Math.round(11+3*Math.sin(x/3));box(x,t,1,21-t,blue);box(x,t,1,2,light);} disk(14,10,6,blue);disk(16,9,4,'#fff');box(12,5,4,2,light);box(2,18,20,2,navy);box(3,21,18,1,light);break;
 case 'deungdae':line(8,12,18,5,navy,4);line(8,11,17,4,blue,3);box(17,3,3,6,light);box(5,11,4,4,gold);line(12,14,7,21,ink);line(12,14,18,21,ink);line(12,13,12,21,ink);break;
 case 'hosu': for(let y=3;y<19;y++){let w=y<11?Math.floor((y-2)/2):Math.round(Math.sqrt(Math.max(0,36-(y-14)**2)));box(12-w,y,2*w+1,1,blue);}box(8,12,2,5,light);box(10,10,2,2,light);box(10,20,5,1,navy);break;
 case 'jeongwon':line(6,21,17,5,green,2);for(const [x,y]of[[6,13],[12,8],[13,15],[18,6]]){disk(x,y,3,leaf);box(x-2,y,4,1,green);}break;
 case 'saebyeok':box(3,4,18,17,'#DCECF2');disk(12,13,6,yellow);box(3,14,18,7,blue);box(3,14,18,2,light);box(8,18,8,1,yellow);box(10,20,5,1,yellow);line(12,3,12,5,gold);line(4,7,6,8,gold);line(18,8,20,7,gold);break;
 case 'nachimban':disk(12,12,10,gold);disk(12,12,8,'#FFFAE9');for(const[x,y]of[[12,4],[12,19],[4,12],[19,12]])box(x,y,1,2,navy);line(8,17,15,7,blue,2);line(12,12,15,7,'#C35D51',2);disk(12,12,1,ink);break;
 case 'hangyeol': for(let y=3;y<22;y++)for(let x=3;x<=y;x++)if(x<7||y>17||y-x<4)dot(x,y,gold);for(let y=6;y<18;y+=3)box(3,y,2,1,ink);box(8,20,1,2,ink);box(12,20,1,2,ink);box(16,20,1,2,ink);break;
 case 'yunseul':star(13,11,8,gold);star(4,5,3,yellow);star(5,20,3,gold);star(21,20,2,yellow);box(12,9,2,4,'#FFF4C9');break;
 case 'bri':box(3,9,18,12,ink);box(3,8,18,3,'#555469');for(let x=3;x<21;x+=5){box(x,5,3,3,'#E5EBEE');box(x+3,5,2,3,ink);}for(let x=10;x<15;x++)for(let y=11;y<19;y++)if(Math.abs(y-15)<15-x)dot(x,y,yellow);break;
 case 'namu':box(10,14,4,8,'#896144');disk(8,11,5,green);disk(15,11,6,green);disk(12,6,5,leaf);box(10,8,3,6,leaf);box(7,22,11,1,'#C6D9B6');break;
 case 'gimli':line(7,20,16,8,'#9D6D48',3);line(8,20,17,8,orange);line(7,5,17,13,ink,4);line(8,4,18,12,'#8BAAB8',3);box(5,4,3,4,navy);break;
 case 'milan':disk(12,12,10,blue);for(const[x,y,w,h]of[[6,4,6,3],[4,7,6,4],[7,10,5,3],[10,13,5,4],[11,17,3,4],[17,6,3,4]])box(x,y,w,h,leaf);box(4,11,2,4,light);box(7,19,2,1,light);break;
 case 'sapir':for(let y=3;y<18;y++){let x=21-y,w=y<8?Math.floor(y/2):y<14?5:3;box(x-w,y,w*2,1,y%3===0?'#AA9DBD':'#D2C9DC');}line(4,22,17,5,purple);line(9,13,13,13,purple);line(12,10,16,10,purple);break;
 case 'dante':disk(12,13,7,gold);disk(11,12,6,yellow);box(4,14,2,3,gold);box(18,9,2,3,gold);box(7,9,2,3,'#FFF0A0');line(15,6,18,3,green,2);box(18,3,4,3,leaf);break;
 case 'sol':disk(12,12,6,gold);disk(11,11,4,yellow);for(const[x,y,a,b]of[[12,1,12,3],[12,21,12,23],[1,12,3,12],[21,12,23,12],[3,3,5,5],[19,19,21,21],[3,21,5,19],[19,5,21,3]])line(x,y,a,b,gold);break;
 case 'luna':disk(11,12,9,purple);disk(15,8,8,null);box(5,12,2,5,'#AEA9DB');star(19,17,3,yellow);star(20,5,2,yellow);break;
 case 'aura':star(12,11,7,gold);star(12,11,3,'#FFF4C9');line(3,15,7,20,purple,2);line(7,20,16,21,purple,2);line(16,21,21,16,purple,2);star(4,5,2,yellow);star(20,6,2,yellow);break;
 case 'vera':disk(12,4,2,gold);box(11,5,2,15,navy);box(6,20,12,2,navy);box(3,7,18,2,gold);line(5,9,5,13,ink);line(18,9,18,13,ink);box(2,14,7,2,gold);box(3,16,5,1,gold);box(15,14,7,2,gold);box(16,16,5,1,gold);break;
 case 'geumjeonsu':box(8,17,8,5,'#9D6D48');box(7,16,10,2,orange);box(11,8,2,9,'#896144');line(11,13,7,10,'#896144');line(13,12,17,9,'#896144');for(const[x,y]of[[12,5],[6,9],[18,8],[8,13],[16,12]]){disk(x,y,3,gold);disk(x,y,2,yellow);box(x,y-1,1,3,gold);}box(9,19,2,1,'#C68B5E');break;
 case 'desertfox':for(let y=3;y<11;y++){box(4,y,Math.min(6,y-2),1,orange);box(20-Math.min(6,y-2),y,Math.min(6,y-2),1,orange);}box(5,5,2,4,ink);box(17,5,2,4,ink);for(let y=9;y<21;y++){let w=y<14?9:Math.max(2,21-y);box(12-w,y,2*w,1,orange);}box(6,14,4,3,'#FFF2D9');box(14,14,4,3,'#FFF2D9');box(9,17,6,3,'#FFF2D9');box(7,12,2,2,ink);box(15,12,2,2,ink);box(11,18,2,2,ink);break;
 }
 if(!g.some(r=>r.some(Boolean))){const p=data.find(x=>x.id===id);return `<span class="pixel-art pixel-fallback" aria-hidden="true">${p?p.symbol:''}</span>`;}
 return `<svg class="pixel-art" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" shape-rendering="crispEdges">${g.map((row,y)=>row.map((c,x)=>c?`<rect x="${x}" y="${y}" width="1" height="1" fill="${c}"/>`:'').join('')).join('')}</svg>`;
}
function small(p,extra=''){return `<article class="person ${extra}" data-person="${p.id}"><div class="mini-art">${art(p.id)}</div><div><h3>${esc(p.name)}</h3><p>${esc(p.role)}</p></div></article>`;}
if(document.body.dataset.page==='gallery'){
 const grid=document.querySelector('#family-grid');
 grid.innerHTML=data.map((p,i)=>`<button class="family-card ${p.team}" data-team="${p.team}" data-person="${p.id}" aria-pressed="false" aria-label="${esc(p.name)} · ${esc(p.role)} · 인사 보기"><span class="card-turn"><span class="card-face card-front" aria-hidden="false"><span class="card-meta"><span>${teamNames[p.team]}</span><span>${String(i+1).padStart(2,'0')}</span></span><span class="art-stage">${art(p.id)}</span><span class="card-name">${esc(p.name)}</span><span class="card-role">${esc(p.role)}</span><span class="card-bottom"><span>${esc(p.group)}</span><span aria-hidden="true">↗</span></span></span><span class="card-face card-back" aria-hidden="true"><span class="back-label">${esc(p.name)}의 한마디</span><span class="message">${esc(p.message)}</span><span class="back-foot">${p.source==='기존 식구 갤러리'?'기존 식구의 인사':'역할에서 새로 쓴 인사'}<span aria-hidden="true">↶</span></span></span></span></button>`).join('');
 const cards=[...grid.children];
 const setFlip=(c,v)=>{c.classList.toggle('flipped',v);c.setAttribute('aria-pressed',String(v));c.querySelector('.card-front').setAttribute('aria-hidden',String(v));c.querySelector('.card-back').setAttribute('aria-hidden',String(!v));const p=data.find(x=>x.id===c.dataset.person);c.setAttribute('aria-label',v?`${p.name}의 한마디: ${p.message} · 앞면 보기`:`${p.name} · ${p.role} · 인사 보기`);};
 cards.forEach(c=>c.addEventListener('click',()=>setFlip(c,!c.classList.contains('flipped'))));
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));cards.forEach(c=>c.hidden=b.dataset.filter!=='all'&&c.dataset.team!==b.dataset.filter);document.querySelector('#visible-count').textContent=`${cards.filter(c=>!c.hidden).length}명의 식구`; }));
 document.querySelector('#reset-cards').addEventListener('click',()=>cards.forEach(c=>setFlip(c,false)));
}else{
 const get=id=>data.find(x=>x.id===id);
 document.querySelector('#bada').innerHTML=small(get('bada'),'leader');
 for(const group of ['생각과 글','만들고 전하기','제작과 시스템','어학실']){
  const el=document.createElement('section');el.className='role-group'+(group==='어학실'?' language-group':'');
  el.innerHTML=`<h3 class="group-title">${group}</h3>${group==='어학실'?'<p class="group-note">햇살의 배움</p>':''}<div class="group-people">${data.filter(p=>p.group===group).map(p=>small(p)).join('')}</div>`;document.querySelector('#pognaru-groups').append(el);
 }
 document.querySelector('#astra-people').innerHTML=small(get('sol'),'leader')+'<div class="vertical-stem" aria-hidden="true"></div>'+small(get('luna'));
 document.querySelector('#deeper-people').innerHTML=small(get('desertfox'),'leader');
}
document.querySelector('#presentation').addEventListener('click',()=>{const on=document.body.classList.toggle('presenting');const b=document.querySelector('#presentation');b.setAttribute('aria-pressed',String(on));b.textContent=on?'발표 종료':'발표 모드';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.body.classList.remove('presenting');const b=document.querySelector('#presentation');b.setAttribute('aria-pressed','false');b.textContent='발표 모드';}});
})();
