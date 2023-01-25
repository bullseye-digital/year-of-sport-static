"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}document.addEventListener("DOMContentLoaded",async function(){var e="https://bullseye-digital.github.io/year-of-sport-static/json/",t=document.getElementById("state-select"),n=document.getElementById("post-code"),a=document.getElementById("search-form"),r=document.getElementById("search-result-wrapper"),o=document.getElementById("club-list"),i=document.getElementsByName("sport-type"),l=document.getElementById("sport-type-filter"),c=document.getElementById("sport-type-chips"),s=document.getElementById("sport-type-select"),d=document.getElementById("pagination-number"),u=document.getElementById("next-page"),f=document.getElementById("previous-page"),p=document.getElementById("view-all-sport-types"),h=new URL(window.location.href),g=null,v={},m=[],y={},b=[],$=[],_="",L=[],E=0,C=1,x=0,k=0,I=[],S=h.searchParams.get("state")||"",A=h.searchParams.get("sport-type")||"",T=h.searchParams.get("postcode")||"",P=h.searchParams.get("page")||"";async function w(t){return await fetch("".concat(e,"yos-").concat(t,".json"),{headers:{Accept:"application/json"}}).then(function(e){return e.ok&&e.json()||[]}).catch(function(e){return console.error("Error fetching club"),[]})}function H(){var e=n.value,t=y[_],a="",r="",o=l.firstElementChild.cloneNode(!0),c=s.firstElementChild.cloneNode(!0);if(""!==e&&(t=y[e]&&y[e].length>1?y[e]:y[_]),l.innerHTML="",l.appendChild(o),s.innerHTML="",s.appendChild(c),t&&t.length>0){for(var d=0;d<t.length;d++)a+=F(t[d]),r+='<option value="'.concat(t[d],'">').concat(t[d],"</option>");l.innerHTML+=a,s.innerHTML+=r}if(t&&t.length>13?p.style.display="block":p.style.display="none",function e(){for(var t=0;t<i.length;t++)i[t].addEventListener("change",function(){var e=this;if(!e.value||!v[_]||v[_]&&v[_].length<1||e.nextElementSibling.innerHTML===i[0].nextElementSibling.innerHTML){O(),D(),j();return}if(e.checked){L.push(e.value),U(e.value);var t=b.filter(function(t){for(var n=!1,a=0;a<$.length;a++)if($[a]["Item ID"]===t["Item ID"]){n=!0;break}return!n&&t["Club Category"].indexOf(e.value)>-1});$=[].concat(_toConsumableArray($),_toConsumableArray(t))}else{var n=L.indexOf(e.value);if(n>-1&&L.splice(n,1),0===L.length){O(),D(),j();return}document.getElementsByClassName("sport-type-chip")[n].remove();var t=$.filter(function(t){var n=t["Club Category"].indexOf("; ")>-1,a=!1;if(!n)return t["Club Category"]!==e.value;for(var r=0;r<L.length&&!(a=t["Club Category"].indexOf(L[r])>-1);r++);return a});$=_toConsumableArray(t)}h.searchParams.set("sport-type",L.toString()),history.replaceState(null,"",h.toString()),i[0].checked=!1,C=1,E=0,D(),j()})}(),A)for(var u=A.split(","),d=0;d<u.length;d++)for(var f=0;f<t.length;f++)u[d]===t[f]&&i[f+1].click();else i[0].click()}function B(e){return e*(Math.PI/180)}function M(e,t){if(e===t)return 0;var n,a,r,o,i,l,c,s={},d={};if(m.filter(function(n){n.postcode===e&&(d={lat:parseFloat(n.lat).toFixed(3),lng:parseFloat(n.lng).toFixed(3)}),n.postcode===t&&(s={lat:parseFloat(n.lat).toFixed(3),lng:parseFloat(n.lng).toFixed(3)})}),void 0!==d.lat&&void 0!==s.lat){if(I.includes(e))return 1;if(n=s.lat,a=s.lng,r=d.lat,o=d.lng,i=B(r-n),l=B(o-a),6371*(2*Math.atan2(Math.sqrt(c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(B(n))*Math.cos(B(r))*Math.sin(l/2)*Math.sin(l/2)),Math.sqrt(1-c)))<=50)return I.push(e),1}return -1}function O(){L=[],$=[],C=1,E=0,c.innerHTML="",h.searchParams.delete("sport-type"),history.replaceState(null,"",h.toString());for(var e=0;e<i.length;e++)i[e].checked=0===e}function j(){var e=i[0].checked?b:$;if(o.innerHTML="",!(e.length<1)){for(var t="",n=x;n<k;n++)e[n]&&(t+=W(e[n]));o.innerHTML+=t}}function D(){var e=i[0].checked?b:$,t=1,n=5;if(d.innerHTML="",P&&(C=parseInt(P),P=""),e.length<1){N();return}E=Math.ceil(e.length/8),x=8*(C-1),k=8*C,C<=3?(t=1,n=E>5?5:E):C>=E-2?(t=E-4,n=E):(t=C-2,n=C+2);for(var a="",r=t;r<=n;r++)r>0&&(a+=q(r,r===C));d.innerHTML+=a,g=document.getElementsByName("pagination-item"),function e(){for(var t=0;t<g.length;t++)g[t].addEventListener("click",function(){x=8*((C=parseInt(this.innerHTML))-1),k=8*C,D(),j()})}(),N(),1===C?h.searchParams.delete("page"):h.searchParams.set("page",C),history.replaceState(null,"",h.toString())}function N(){1===E?(f.classList.add("d-none"),u.classList.add("d-none")):C>1&&C<E?(f.classList.remove("d-none"),u.classList.remove("d-none")):C<=1&&E>0?(f.classList.add("d-none"),u.classList.remove("d-none")):C===E?(f.classList.remove("d-none"),u.classList.add("d-none")):(f.classList.add("d-none"),u.classList.add("d-none"))}function F(e){return'\n      <label class="w-checkbox">\n        <input type="checkbox" name="sport-type" data-name="sport-type" class="w-checkbox-input checkbox" value="'.concat(e,'">\n        <span class="checkbox-label w-form-label" for="sport-type">\n          ').concat(e,"\n        </span>\n      </label>\n    ")}function U(e){var t=document.createElement("div"),a=document.createElement("p"),r=document.createElement("img"),o=n.value;a.innerHTML=e,a.classList.add("sport-type-text"),r.src="https://uploads-ssl.webflow.com/638eeb7281a8e687aa9f924a/63bf4d2406557f62a99510ce_icon-close.svg",r.alt="",r.addEventListener("click",function(){var e=this.nextSibling.innerHTML,t=y[_].indexOf(e);o&&(t=y[o].indexOf(e)),t>-1&&i[t+1].click(),this.parentElement.remove()}),t.classList.add("sport-type-chip"),t.appendChild(r),t.appendChild(a),c.appendChild(t)}function W(e){var t="";return e["Upload Club Logo"]&&(t='\n        <div class="club-item-left">\n          <img\n            src="'.concat(e["Upload Club Logo"],'"\n            loading="lazy"\n            alt="Club Logo"\n            class="club-item-logo">\n        </div>\n      ')),'\n      <div role="listitem" class="collection-item w-dyn-item w-col w-col-6">\n        <div class="club-item">\n          '.concat(t,'\n          <div class="club-item-right">\n            <a href="/clubs/').concat(e.Slug,'" class="link-club-name w-inline-block">\n              <div class="club-name">\n                ').concat(e["Club Name"],'\n              </div>\n              <div class="club-location w-clearfix">\n                <div class="state">\n                  ').concat(e.State,'\n                </div>\n                <div class="postcode">\n                  ').concat(e.Postcode,'\n                </div>\n              </div>\n            </a>\n            <div class="line"></div>\n            <a href="/clubs/').concat(e.Slug,'" class="help-button w-button">\n              HOW CAN I HELP?\n            </a>\n          </div>\n        </div>\n      </div>\n      ')}function q(e,t){var n="";return t&&(n=" active"),'\n      <a href="#" class="pagination-item'.concat(n,'" name="pagination-item">').concat(e,"</a>\n    ")}await fetch("".concat(e,"postcode.json"),{headers:{Accept:"application/json"}}).then(function(e){return e.ok&&e.json()||[]}).then(function(e){m=e}).catch(function(e){console.error("Error fetching postcode")}),t.addEventListener("change",async function(){if(_=t.value,O(),n.value="",!_){b=[],D(),H(),r.style.display="none",h.searchParams.delete("state"),history.replaceState(null,"",h.toString());return}(!v[_]||v[_]&&v[_].length<1)&&await w(_).then(async function(e){if(v[_]=e,e&&e.length<1)for(var n=0;n<t.length;n++){var a=t[n].value;a&&await w(a).then(function(e){v[_]=[].concat(_toConsumableArray(v[_]),_toConsumableArray(e))})}v[_]&&v[_].length>0&&v[_].sort(function(e,t){return e.Postcode<t.Postcode?-1:e.Postcode>t.Postcode?1:0});for(var r=0;r<v[_].length;r++){var o=v[_][r]["Club Category"];if(""!==o&&(y[_]||(y[_]=[]),0>y[_].indexOf(o))){if(0>o.indexOf("; ")){y[_].push(o);continue}o=o.split("; ");for(var n=0;n<o.length;n++)y[_].indexOf(o[n])>-1||y[_].push(o[n])}}y[_]&&(y[_]=y[_].sort())}),h.searchParams.set("state",_),history.replaceState(null,"",h.toString()),b=_toConsumableArray(v[_]),r.style.display="block",T?(n.value=T,document.getElementById("search-button").click()):(H(),D(),h.searchParams.delete("postcode"),history.replaceState(null,"",h.toString()))}),a.addEventListener("submit",function(e){e.preventDefault();var t=n.value;if(I=[],!v[_])return b=[];if(t){b=[],h.searchParams.set("postcode",t),history.replaceState(null,"",h.toString());for(var a=0;a<v[_].length;a++){var r=v[_][a],o=M(v[_][a].Postcode,t);if(o>=0){r.indexDistance=o,b.push(r);var i=r["Club Category"];if(""===i)continue;if(y[t]||(y[t]=[]),0>y[t].indexOf(i)){if(0>i.indexOf("; ")){y[t].push(i);continue}i=i.split("; ");for(var l=0;l<i.length;l++)y[t].indexOf(i[l])>-1||y[t].push(i[l])}}}b.length>0?(y[t]&&(y[t]=y[t].sort()),b.sort(function(e,t){return e.indexDistance<t.indexDistance?-1:e.indexDistance>t.indexDistance?1:0})):b=_toConsumableArray(v[_])}else b=_toConsumableArray(v[_]),h.searchParams.delete("postcode"),history.replaceState(null,"",h.toString());H(),A?(S="",T="",A=""):(D(),O())}),s.addEventListener("change",function(){0>L.indexOf(this.value)&&i[this.selectedIndex].click(),this.selectedIndex=0}),u.addEventListener("click",function(){C>=E||(x=8*(++C-1),k=8*C,j(),D())}),f.addEventListener("click",function(){C<=1||(x=8*(--C-1),k=8*C,j(),D())}),S&&(t.value=S,t.dispatchEvent(new Event("change")))},!1);