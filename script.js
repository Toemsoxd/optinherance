const menuButtons=document.querySelectorAll('.menu-button[data-open]');
const panels=document.querySelectorAll('.legacy-panel');
const portButtons=document.querySelectorAll('.port-entry');
const portViews=document.querySelectorAll('.port-view');

function showPanel(id){
  panels.forEach(p=>p.classList.toggle('visible',p.id===id));
  document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
}
menuButtons.forEach(b=>b.addEventListener('click',()=>showPanel(b.dataset.open)));

portButtons.forEach(button=>{
  button.addEventListener('click',()=>{
    const id=button.dataset.port;
    portButtons.forEach(x=>x.classList.toggle('active',x===button));
    portViews.forEach(x=>x.classList.toggle('active',x.id==='view-'+id));
  });
});

document.querySelector('.back-home')?.addEventListener('click',()=>{
  document.getElementById('about').classList.remove('visible');
  window.scrollTo({top:0,behavior:'smooth'});
});