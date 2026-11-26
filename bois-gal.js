/* Clim-Box : remplace partout les 4 anciennes captures du cache tableau bois (avril 2026) par les rendus 3000px du 26/11/2026.
   Les galeries des pages produit ont ces URLs en dur ; ce script les reecrit (src + srcset), y compris quand la galerie est reconstruite au changement de couleur. */
(function(){
  if(window.__cbxBoisGal)return;window.__cbxBoisGal=1;
  var M={'54.42':['ouvert-34','1795684271'],'55.12':['ouvert-face','1795684265'],'56.26':['entrouvert','1795684267'],'56.04':['34-gauche','1795684269']};
  var RE=/Capture_d_ecran_2026-04-14_a_11\.(\d\d\.\d\d)\.png(\?v=\d+)?/g, KEY='Capture_d_ecran_2026-04-14';
  function conv(s){return s.replace(RE,function(a,k){var n=M[k];return n?'cache-tableau-bois-'+n[0]+'-3000x3000.png?v='+n[1]:a})}
  function fix(i){
    if(!i||i.tagName!=='IMG')return;
    ['srcset','src','data-src','data-srcset'].forEach(function(at){var v=i.getAttribute(at);if(v&&v.indexOf(KEY)>-1){var w=conv(v);if(w!==v)i.setAttribute(at,w)}});
  }
  function scan(r){
    if(!r||r.nodeType!==1)return;
    if(r.tagName==='IMG')fix(r);
    if(r.querySelectorAll){var l=r.querySelectorAll('img');for(var k=0;k<l.length;k++)fix(l[k])}
  }
  scan(document.documentElement);
  try{new MutationObserver(function(ms){for(var a=0;a<ms.length;a++){var m=ms[a];if(m.type==='attributes')fix(m.target);else for(var b=0;b<m.addedNodes.length;b++)scan(m.addedNodes[b])}}).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['src','srcset']})}catch(e){}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){scan(document.documentElement)});
})();
