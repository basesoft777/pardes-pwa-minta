(function(){
var r=document.documentElement,k='pardes-tema';
try{var t=localStorage.getItem(k);if(t)r.dataset.tema=t}catch(e){}
document.getElementById('tema').onclick=function(){
 var dark=r.dataset.tema?r.dataset.tema==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
 r.dataset.tema=dark?'light':'dark';try{localStorage.setItem(k,r.dataset.tema)}catch(e){}};
var m=matchMedia('(display-mode: fullscreen)').matches?'fullscreen':matchMedia('(display-mode: standalone)').matches?'standalone':(navigator.standalone?'standalone (iOS)':'böngészőlap');
var a=document.getElementById('allapot');
a.textContent='Futási mód: '+m+' · '+(navigator.onLine?'online':'offline');
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').then(function(){a.textContent+=' · offline gyorsítótár kész'}).catch(function(){a.textContent+=' · service worker nem elérhető'})}
})();
