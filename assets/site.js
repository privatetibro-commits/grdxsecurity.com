document.documentElement.classList.add('js');
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;

const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);e.target.querySelectorAll('[data-n]').forEach(count)}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
function watch(){document.querySelectorAll('.rv:not(.in),.sg:not(.in),.clip:not(.in),.join .rv:not(.in)').forEach(e=>io.observe(e))}
function count(el){const n=+el.dataset.n;if(RM)return;const from=n>1000?n-30:0,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1400,1),e=1-Math.pow(1-p,3);el.textContent=p<1?Math.round(from+(n-from)*e):n;if(p<1)requestAnimationFrame(f)})(t0)}

const nav=document.getElementById('nav'),prog=document.getElementById('prog');
function onScroll(){const y=scrollY;nav.classList.toggle('sm',y>30);prog.style.width=(y/Math.max(1,document.body.scrollHeight-innerHeight)*100)+'%';
 if(RM)return;document.querySelectorAll('.par').forEach(el=>{const r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const s=+el.dataset.speed||.1;el.style.transform=`translate3d(0,${(r.top+r.height/2-innerHeight/2)*-s}px,0) scale(${1+s*1.6})`})}
addEventListener('scroll',onScroll,{passive:true});
watch();onScroll();
function heroIn(){if(RM||!window.gsap||!document.querySelector('.hero'))return;const tl=gsap.timeline({defaults:{ease:'power4.out'}});
 tl.from('.hero h1 .ln>span',{yPercent:110,duration:1,stagger:.1})
   .from('.hero .kick,.hero .lede,.hero .ctas',{y:20,opacity:0,duration:.8,stagger:.1},'-=.6')
   .from('#car',{x:()=>innerWidth*.6,skewX:-8,opacity:0,duration:1.6,ease:'expo.out'},.2)
   .from('.hud',{y:-16,opacity:0,duration:.7},'-=.6')
   .from('.bar .w>div',{y:24,opacity:0,duration:.6,stagger:.08},'-=.9')}
let sec=22*3600+14*60+7,stops=11;setInterval(()=>{sec=(sec+1)%86400;const h=String(Math.floor(sec/3600)).padStart(2,'0'),m=String(Math.floor(sec/60)%60).padStart(2,'0'),s=String(sec%60).padStart(2,'0');const ck=document.getElementById('ck');if(ck)ck.textContent=`${h}:${m}:${s}`;if(sec%37===0){stops++;(document.getElementById('st')||{}).textContent=stops}},1000);
document.getElementById('tabs')&&document.getElementById('tabs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('#tabs button').forEach(x=>x.classList.toggle('on',x===b));document.querySelectorAll('#sect a').forEach(a=>a.classList.toggle('hide',b.dataset.f!=='all'&&a.dataset.c!==b.dataset.f))});
document.querySelectorAll('.sect a').forEach(a=>a.addEventListener('pointermove',e=>{const r=a.getBoundingClientRect();a.style.setProperty('--x',e.clientX-r.left+'px');a.style.setProperty('--y',e.clientY-r.top+'px')}));
const steps=[...document.querySelectorAll('#steps>div')],figs=[...document.querySelectorAll('#stick figure')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const i=steps.indexOf(e.target);steps.forEach((s,j)=>s.classList.toggle('on',j===i));figs.forEach((f,j)=>f.classList.toggle('on',j===i))}),{rootMargin:'-45% 0px -45% 0px'});
steps.forEach(s=>so.observe(s));
const to=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;document.querySelectorAll('.toc a[data-t]').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-30% 0px -60% 0px'});
document.querySelectorAll('.pr>section[id]').forEach(s=>to.observe(s));
if(!RM&&matchMedia('(pointer:fine)').matches)document.querySelectorAll('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.1}px,${(e.clientY-r.top-r.height/2)*.18}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
function sent(f){[...f.children].forEach(c=>{if(!c.classList.contains('ok'))c.style.display='none'});f.querySelector('.ok').style.display='block';return false}
