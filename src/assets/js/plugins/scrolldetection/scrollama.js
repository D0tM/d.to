!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.scrollama=t()}(this,function(){"use strict";function e(e){for(var t=e.length,n=[],r=0;r<t;r+=1)n.push(e[r]);return n}function t(e){return"scrollama__debug-offset--"+e.id}function n(e){!function(e){var n=e.id,r=e.offsetVal,o=e.stepClass,i=document.createElement("div");i.setAttribute("id",t({id:n})),i.setAttribute("class","scrollama__debug-offset"),i.style.position="fixed",i.style.left="0",i.style.width="100%",i.style.height="0px",i.style.borderTop="2px dashed black",i.style.zIndex="9999";var s=document.createElement("p");s.innerText='".'+o+'" trigger: '+r,s.style.fontSize="12px",s.style.fontFamily="monospace",s.style.color="black",s.style.margin="0",s.style.padding="6px",i.appendChild(s),document.body.appendChild(i)}({id:e.id,offsetVal:e.offsetVal,stepClass:e.stepEl[0].getAttribute("class")})}function r(e){var n=e.id,r=(e.stepOffsetHeight,e.offsetMargin);e.offsetVal;!function(e){var n=e.id,r=e.offsetMargin,o=(e.offsetVal,t({id:n}));document.querySelector("#"+o).style.top=r+"px"}({id:n,offsetMargin:r})}function o(e){var t=e.id,n=e.index,r=e.state,o=function(e){return"scrollama__debug-step--"+e.id+"-"+e.i}({id:t,i:n}),i=document.querySelector("#"+o+"_above"),s=document.querySelector("#"+o+"_below"),a="enter"===r?"block":"none";i&&(i.style.display=a),s&&(s.style.display=a)}return function(){var t=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"],i={stepEnter:function(){},stepExit:function(){},stepProgress:function(){}},s={},a=null,c=[],l=[],f=[],u=[],d=0,p=0,v=0,g=0,m=0,b=0,w=!1,h=!1,x=!1,y=!1,E=!1,M=!1,O="down",S=[];function A(e){return e.getBoundingClientRect().top+window.pageYOffset-(document.body.clientTop||0)}function I(e){return+e.getAttribute("data-scrollama-index")}function C(){window.pageYOffset>m?O="down":window.pageYOffset<m&&(O="up"),m=window.pageYOffset}function H(e){s[e]&&s[e].forEach(function(e){return e.disconnect()})}function k(){var e,t;v=window.innerHeight,e=document.body,t=document.documentElement,g=Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight),p=d*v,w&&(l=c.map(function(e){return e.getBoundingClientRect().height}),f=c.map(A),h&&z()),x&&r({id:a,stepOffsetHeight:l,offsetMargin:p,offsetVal:d})}function q(e){if(e&&!h){if(!w)return console.error("scrollama error: enable() called before scroller was ready"),void(h=!1);z()}!e&&h&&t.forEach(H),h=e}function _(e,t){var n=I(e);void 0!==t&&(u[n].progress=t);var r={element:e,index:n,progress:u[n].progress};"enter"===u[n].state&&i.stepProgress(r)}function N(e,t){if("above"===t)for(var n=0;n<e;n+=1){var r=u[n];"enter"!==r.state&&"down"!==r.direction?(P(c[n],"down",!1),R(c[n],"down")):"enter"===r.state&&R(c[n],"down")}else if("below"===t)for(var o=u.length-1;o>e;o-=1){var i=u[o];"enter"===i.state&&R(c[o],"up"),"down"===i.direction&&(P(c[o],"up",!1),R(c[o],"up"))}}function P(e,t,n){void 0===n&&(n=!0);var r=I(e),s={element:e,index:r,direction:t};u[r].direction=t,u[r].state="enter",E&&n&&"down"===t&&N(r,"above"),E&&n&&"up"===t&&N(r,"below"),i.stepEnter&&!S[r]&&(i.stepEnter(s,u),x&&o({id:a,index:r,state:"enter"}),M&&(S[r]=!0)),y&&_(e)}function R(e,t){var n=I(e),r={element:e,index:n,direction:t};y&&("down"===t&&u[n].progress<1?_(e,1):"up"===t&&u[n].progress>0&&_(e,0)),u[n].direction=t,u[n].state="exit",i.stepExit(r,u),x&&o({id:a,index:n,state:"exit"})}function V(e){var t=e[0];C();var n=t.isIntersecting,r=t.boundingClientRect,o=t.target,i=r.top,s=r.bottom,a=i-p,c=s-p,l=I(o),f=u[l];n&&a<=0&&c>=0&&"down"===O&&"enter"!==f.state&&P(o,O),!n&&a>0&&"up"===O&&"enter"===f.state&&R(o,O)}function B(e){var t=e[0];C();var n=t.isIntersecting,r=t.boundingClientRect,o=t.target,i=r.top,s=r.bottom,a=i-p,c=s-p,l=I(o),f=u[l];n&&a<=0&&c>=0&&"up"===O&&"enter"!==f.state&&P(o,O),!n&&c<0&&"down"===O&&"enter"===f.state&&R(o,O)}function T(e){var t=e[0];C();var n=t.isIntersecting,r=t.target,o=I(r),i=u[o];n&&"down"===O&&"down"!==i.direction&&"enter"!==i.state&&(P(r,"down"),R(r,"down"))}function Y(e){var t=e[0];C();var n=t.isIntersecting,r=t.target,o=I(r),i=u[o];n&&"up"===O&&"down"===i.direction&&"enter"!==i.state&&(P(r,"up"),R(r,"up"))}function j(e){var t=e[0];C();var n=t.isIntersecting,r=t.intersectionRatio,o=t.boundingClientRect,i=t.target,s=o.bottom;n&&s-p>=0&&_(i,+r.toFixed(3))}function F(){s.stepProgress=c.map(function(e,t){var n=l[t]-p+"px 0px "+(-v+p)+"px 0px",r=function(e){for(var t=Math.ceil(e/b),n=[],r=1/t,o=0;o<t;o+=1)n.push(o*r);return n}(l[t]),o=new IntersectionObserver(j,{rootMargin:n,threshold:r});return o.observe(e),o})}function z(){t.forEach(H),s.viewportAbove=c.map(function(e,t){var n=g-f[t],r=p-v-l[t],o=new IntersectionObserver(T,{rootMargin:n+"px 0px "+r+"px 0px"});return o.observe(e),o}),s.viewportBelow=c.map(function(e,t){var n=-p-l[t],r=p-v+l[t]+g,o=new IntersectionObserver(Y,{rootMargin:n+"px 0px "+r+"px 0px"});return o.observe(e),o}),s.stepAbove=c.map(function(e,t){var n=-p+l[t],r=new IntersectionObserver(V,{rootMargin:n+"px 0px "+(p-v)+"px 0px"});return r.observe(e),r}),s.stepBelow=c.map(function(e,t){var n=-p,r=p-v+l[t],o=new IntersectionObserver(B,{rootMargin:n+"px 0px "+r+"px 0px"});return o.observe(e),o}),y&&F()}function D(e){return!(!e||1!==e.nodeType)&&(function(e){var t=window.getComputedStyle(e);return("scroll"===t.overflowY||"auto"===t.overflowY)&&e.scrollHeight>e.clientHeight}(e)?e:D(e.parentNode))}var L={};return L.setup=function(t){var r=t.step,o=t.offset;void 0===o&&(o=.5);var i=t.progress;void 0===i&&(i=!1);var s=t.threshold;void 0===s&&(s=4);var l=t.debug;void 0===l&&(l=!1);var f=t.order;void 0===f&&(f=!0);var p,v,g,m,h,O=t.once;if(void 0===O&&(O=!1),v=(p="abcdefghijklmnopqrstuv").length,g=Date.now(),a=""+[0,0,0].map(function(e){return p[Math.floor(Math.random()*v)]}).join("")+g,m=r,void 0===h&&(h=document),!(c="string"==typeof m?e(h.querySelectorAll(m)):m instanceof Element?e([m]):m instanceof NodeList?e(m):m instanceof Array?m:[]).length)return console.error("scrollama error: no step elements"),L;var S=c.reduce(function(e,t){return e||D(t.parentNode)},!1);return S&&console.error("scrollama error: step elements cannot be children of a scrollable element. Remove any css on the parent element with overflow: scroll; or overflow: auto; on elements with fixed height.",S),x=l,y=i,E=f,M=O,L.offsetTrigger(o),b=Math.max(1,+s),w=!0,x&&n({id:a,stepEl:c,offsetVal:d}),c.forEach(function(e,t){return e.setAttribute("data-scrollama-index",t)}),u=c.map(function(){return{direction:null,state:null,progress:0}}),k(),L.enable(),L},L.resize=function(){return k(),L},L.enable=function(){return q(!0),L},L.disable=function(){return q(!1),L},L.destroy=function(){q(!1),Object.keys(i).forEach(function(e){i[e]=null}),Object.keys(s).forEach(function(e){s[e]=null})},L.offsetTrigger=function(e){return e&&!isNaN(e)?(e>1&&console.error("scrollama error: offset value is greater than 1. Fallbacks to 1."),e<0&&console.error("scrollama error: offset value is lower than 0. Fallbacks to 0."),d=Math.min(Math.max(0,e),1),L):(isNaN(e)&&console.error("scrollama error: offset value is not a number. Fallbacks to 0."),d)},L.onStepEnter=function(e){return"function"==typeof e?i.stepEnter=e:console.error("scrollama error: onStepEnter requires a function"),L},L.onStepExit=function(e){return"function"==typeof e?i.stepExit=e:console.error("scrollama error: onStepExit requires a function"),L},L.onStepProgress=function(e){return"function"==typeof e?i.stepProgress=e:console.error("scrollama error: onStepProgress requires a function"),L},L}});