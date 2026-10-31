const menu=document.querySelector('.hamb'),nav=document.querySelector('#nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
