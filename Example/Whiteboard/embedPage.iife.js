var x=Object.defineProperty;var ee=(g,p,k)=>p in g?x(g,p,{enumerable:!0,configurable:!0,writable:!0,value:k}):g[p]=k;var _=(g,p,k)=>(ee(g,typeof p!="symbol"?p+"":p,k),k);var NetlessAppEmbeddedPage=function(g){"use strict";var p=`.netless-app-embedded-page{width:100%;height:100%;position:relative}.netless-app-embedded-page iframe{width:100%;height:100%;border:none;display:block}.netless-app-embedded-page-wb-view{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}
`;const k="!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",J=k.length,H=Array(20),L=()=>{for(let i=0;i<20;i++)H[i]=k.charAt(Math.random()*J);return H.join("")};class V{constructor(){this.disposers=new Map}add(d,s=L()){return this.flush(s),this.disposers.set(s,d()),s}addDisposer(d,s=L()){return this.flush(s),this.disposers.set(s,d),s}addEventListener(d,s,l,c,b=L()){return this.add(()=>(d.addEventListener(s,l,c),()=>d.removeEventListener(s,l,c)),b),b}setTimeout(d,s,l=L()){return this.add(()=>{const c=window.setTimeout(()=>{this.remove(l),d()},s);return()=>window.clearTimeout(c)},l)}setInterval(d,s,l=L()){return this.add(()=>{const c=window.setInterval(d,s);return()=>window.clearInterval(c)},l)}remove(d){const s=this.disposers.get(d);return this.disposers.delete(d),s}flush(d){const s=this.remove(d);if(s)try{s()}catch(l){console.error(l)}}flushAll(){this.disposers.forEach(d=>{try{d()}catch(s){console.error(s)}}),this.disposers.clear()}}function G(i){return i!=null&&typeof i=="object"&&!Array.isArray(i)}function K(i,d){let s=i.getAttributes();if(s||(i.setAttributes(d),s=i.getAttributes()),!s)throw new Error("[NetlessAppMonaco] No attributes");return G(d)&&Object.keys(d).forEach(l=>{Object.prototype.hasOwnProperty.call(s,l)||i.updateAttributes([l],d[l])}),s}var X=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$={exports:{}};(function(i,d){(function(s,l){{var c=l();i&&i.exports&&(d=i.exports=c),d.randomColor=c}})(X,function(){var s=null,l={};F();var c=[],b=function(r){if(r=r||{},r.seed!==void 0&&r.seed!==null&&r.seed===parseInt(r.seed,10))s=r.seed;else if(typeof r.seed=="string")s=B(r.seed);else{if(r.seed!==void 0&&r.seed!==null)throw new TypeError("The seed value must be an integer or string");s=null}var n,e,t;if(r.count!==null&&r.count!==void 0){for(var a=r.count,o=[],u=0;u<r.count;u++)c.push(!1);for(r.count=null;a>o.length;){var M=b(r);s!==null&&(r.seed=s),o.push(M)}return r.count=a,o}return n=U(r),e=O(n,r),t=h(n,e,r),m([n,e,t],r)};function U(r){if(c.length>0){var n=N(r.hue),e=w(n),t=(n[1]-n[0])/c.length,a=parseInt((e-n[0])/t);c[a]===!0?a=(a+2)%c.length:c[a]=!0;var o=(n[0]+a*t)%359,u=(n[0]+(a+1)*t)%359;return n=[o,u],e=w(n),e<0&&(e=360+e),e}else{var n=A(r.hue);return e=w(n),e<0&&(e=360+e),e}}function O(r,n){if(n.hue==="monochrome")return 0;if(n.luminosity==="random")return w([0,100]);var e=C(r),t=e[0],a=e[1];switch(n.luminosity){case"bright":t=55;break;case"dark":t=a-10;break;case"light":a=55;break}return w([t,a])}function h(r,n,e){var t=v(r,n),a=100;switch(e.luminosity){case"dark":a=t+20;break;case"light":t=(a+t)/2;break;case"random":t=0,a=100;break}return w([t,a])}function m(r,n){switch(n.format){case"hsvArray":return r;case"hslArray":return j(r);case"hsl":var e=j(r);return"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)";case"hsla":var t=j(r),u=n.alpha||Math.random();return"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+u+")";case"rgbArray":return T(r);case"rgb":var a=T(r);return"rgb("+a.join(", ")+")";case"rgba":var o=T(r),u=n.alpha||Math.random();return"rgba("+o.join(", ")+", "+u+")";default:return W(r)}}function v(r,n){for(var e=y(r).lowerBounds,t=0;t<e.length-1;t++){var a=e[t][0],o=e[t][1],u=e[t+1][0],M=e[t+1][1];if(n>=a&&n<=u){var P=(M-o)/(u-a),S=o-P*a;return P*n+S}}return 0}function A(r){if(typeof parseInt(r)=="number"){var n=parseInt(r);if(n<360&&n>0)return[n,n]}if(typeof r=="string"){if(l[r]){var e=l[r];if(e.hueRange)return e.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var t=D(r)[0];return[t,t]}}return[0,360]}function C(r){return y(r).saturationRange}function y(r){r>=334&&r<=360&&(r-=360);for(var n in l){var e=l[n];if(e.hueRange&&r>=e.hueRange[0]&&r<=e.hueRange[1])return l[n]}return"Color not found"}function w(r){if(s===null){var n=.618033988749895,e=Math.random();return e+=n,e%=1,Math.floor(r[0]+e*(r[1]+1-r[0]))}else{var t=r[1]||1,a=r[0]||0;s=(s*9301+49297)%233280;var o=s/233280;return Math.floor(a+o*(t-a))}}function W(r){var n=T(r);function e(a){var o=a.toString(16);return o.length==1?"0"+o:o}var t="#"+e(n[0])+e(n[1])+e(n[2]);return t}function f(r,n,e){var t=e[0][0],a=e[e.length-1][0],o=e[e.length-1][1],u=e[0][1];l[r]={hueRange:n,lowerBounds:e,saturationRange:[t,a],brightnessRange:[o,u]}}function F(){f("monochrome",null,[[0,0],[100,0]]),f("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),f("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),f("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),f("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),f("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),f("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),f("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function T(r){var n=r[0];n===0&&(n=1),n===360&&(n=359),n=n/360;var e=r[1]/100,t=r[2]/100,a=Math.floor(n*6),o=n*6-a,u=t*(1-e),M=t*(1-o*e),P=t*(1-(1-o)*e),S=256,I=256,R=256;switch(a){case 0:S=t,I=P,R=u;break;case 1:S=M,I=t,R=u;break;case 2:S=u,I=t,R=P;break;case 3:S=u,I=M,R=t;break;case 4:S=P,I=u,R=t;break;case 5:S=t,I=u,R=M;break}var Z=[Math.floor(S*255),Math.floor(I*255),Math.floor(R*255)];return Z}function D(r){r=r.replace(/^#/,""),r=r.length===3?r.replace(/(.)/g,"$1$1"):r;var n=parseInt(r.substr(0,2),16)/255,e=parseInt(r.substr(2,2),16)/255,t=parseInt(r.substr(4,2),16)/255,a=Math.max(n,e,t),o=a-Math.min(n,e,t),u=a?o/a:0;switch(a){case n:return[60*((e-t)/o%6)||0,u,a];case e:return[60*((t-n)/o+2)||0,u,a];case t:return[60*((n-e)/o+4)||0,u,a]}}function j(r){var n=r[0],e=r[1]/100,t=r[2]/100,a=(2-e)*t;return[n,Math.round(e*t/(a<1?a:2-a)*1e4)/100,a/2*100]}function B(r){for(var n=0,e=0;e!==r.length&&!(n>=Number.MAX_SAFE_INTEGER);e++)n+=r.charCodeAt(e);return n}function N(r){if(isNaN(r)){if(typeof r=="string"){if(l[r]){var e=l[r];if(e.hueRange)return e.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var t=D(r)[0];return y(t).hueRange}}}else{var n=parseInt(r);if(n<360&&n>0)return y(r).hueRange}return[0,360]}return b})})($,$.exports);var q=$.exports;class Y{constructor(d="NetlessApp",s="error"){_(this,"kind");_(this,"debug");_(this,"color",q({luminosity:"dark"}));this.kind=d,this.debug=s}log(...d){if(this.debug===!0||this.debug==="log")return this._log("log",d)}warn(...d){if(this.debug&&this.debug!=="error")return this._log("warn",d)}error(...d){if(this.debug)return this._log("error",d)}_log(d,s){console[d](`%c[${this.kind}]:`,`color: ${this.color}; font-weight: bold;`,...s)}}function E(i){return typeof i=="object"&&i!==null}const z=new Set(["clicker","selector"]),Q={kind:"EmbeddedPage",setup(i){const d=i.getAppOptions()||{},s=i.getDisplayer(),l=i.getRoom(),c=i.getBox(),b=i.getView(),U=d.debug,O="state",h=K(i,{src:"https://example.org",store:{[O]:{}},page:""}),m=new V,v=new Y("EmbeddedPage",U),A=e=>{try{return E(e)?JSON.parse(JSON.stringify(e)):e}catch(t){throw v.error("Cannot parse to JSON object",e),t}},C=document.createElement("div");C.dataset.appKind="EmbeddedPage",C.classList.add("netless-app-embedded-page");const y=document.createElement("iframe");C.appendChild(y),c.mountStyles(p),c.mountContent(C);const w=e=>e.map(({memberId:t,payload:a})=>({sessionUID:t,uid:(a==null?void 0:a.uid)||"",userPayload:A(a)})),W=(e,t)=>{let a=null;const o=i.mobxUtils.reaction(e,()=>{a&&(a(),a=null);const u=e();E(u)&&(a=()=>i.objectUtils.unlistenUpdated(u,t),i.objectUtils.listenUpdated(u,t))},{fireImmediately:!0});return()=>{a==null||a(),o()}},f=d.postMessage||(e=>{var t;v.log("Message to SDK",e),(t=y.contentWindow)==null||t.postMessage(e,"*")}),F=d.addMessageListener||((e,t)=>{const a=({data:o,source:u})=>{u!==y.contentWindow||!E(o)||!o.NEAType||(v.log("Message from SDK",o),e(o))};return window.addEventListener("message",a,t),()=>{window.removeEventListener("message",a,t)}});if(b){const e=document.createElement("div");if(e.classList.add("netless-app-embedded-page-wb-view"),C.appendChild(e),i.mountView(e),l){const t=a=>{e.style.pointerEvents=!a||z.has(a)?"none":"auto"};t(l.state.memberState.currentApplianceName),m.add(()=>{const a=o=>{o.memberState&&t(o.memberState.currentApplianceName)};return s.callbacks.on("onRoomStateChanged",a),()=>s.callbacks.off("onRoomStateChanged",a)})}}const T=e=>{b&&E(e)&&b.moveCamera({centerX:e.x,centerY:e.y,scale:e.scale,animationMode:"immediately"})},D=e=>{E(e)&&Object.keys(e).forEach(t=>{if(t!==O){const a=e[t];i.updateAttributes(["store",t],a)}})},j=e=>{if(E(e)&&e.storeId&&E(e.state)){const{storeId:t,state:a}=e;if(!i.getIsWritable()){v.error(`Cannot setState on store ${t} without writable access`,a);return}Object.keys(a).forEach(o=>{i.updateAttributes(["store",t,o],a[o])})}};m.add(()=>{const e=new V,t=o=>{e.add(()=>W(()=>h.store[o],u=>{f({NEAType:"StateChanged",payload:{storeId:o,actions:A(u)}})}),o)};Object.keys(h.store).forEach(t);const a=W(()=>h.store,o=>{f({NEAType:"StoreChanged",payload:A(o)}),h.store&&o.forEach(({key:u,kind:M})=>{switch(M){case 2:{e.flush(u);break}default:{t(u);break}}})});return()=>{e.flushAll(),a()}}),m.add(()=>{const e=t=>{(t==null?void 0:t.roomMembers)&&f({NEAType:"RoomMembersChanged",payload:w(t.roomMembers)})};return s.callbacks.on("onRoomStateChanged",e),()=>s.callbacks.off("onRoomStateChanged",e)});const B=e=>{if(!b)v.warn("SetPage: page api is only available with 'scenePath' options enabled.");else{const t=i.getInitScenePath();if(typeof e=="string"&&i.getIsWritable()&&t&&l){const a=[t,e].join("/");l.scenePathType(a)==="none"&&l.putScenes(t,[{name:e}]),i.setScenePath(a),i.updateAttributes(["page"],e)}}};m.add(()=>{const e=(t,a)=>{f({NEAType:"PageChanged",payload:{oldValue:a,newValue:t}})};return i.mobxUtils.reaction(()=>h.page,e)}),m.add(()=>{const e=()=>{const t=i.getIsWritable();f({NEAType:"WritableChanged",payload:t}),v.log(`WritableChange changed to ${t}`)};return i.emitter.on("writableChange",e),()=>i.emitter.off("writableChange",e)});const N=`channel-${i.appId}`,r=e=>{i.getIsWritable()&&l&&l.dispatchMagixEvent(N,e)};m.add(()=>{const e=t=>{t.event===N&&t.authorId!==s.observerId&&f({NEAType:"ReceiveMagixMessage",payload:t.payload})};return s.addMagixEventListener(N,e),()=>s.removeMagixEventListener(N,e)});const n=()=>{var a;const e=s.observerId,t=(a=s.state.roomMembers.find(o=>o.memberId===e))==null?void 0:a.payload;f({NEAType:"Init",payload:{appId:i.appId,page:h.page,writable:i.getIsWritable(),roomMembers:w(s.state.roomMembers),debug:U,store:A(h.store),mainStoreId:O,meta:{sessionUID:e,uid:(l==null?void 0:l.uid)||(t==null?void 0:t.uid)||"",roomUUID:l==null?void 0:l.uuid,userPayload:A(t)}}})};m.add(()=>F(e=>{switch(e.NEAType){case"Init":{n();break}case"SetState":{j(e.payload);break}case"SetStore":{D(e.payload);break}case"SetPage":{B(e.payload);break}case"SendMagixMessage":{r(e.payload);break}case"MoveCamera":{T(e.payload);break}}})),i.emitter.on("destroy",()=>{v.log("destroy"),m.flushAll()}),y.src=h.src}};return g.default=Q,Object.defineProperty(g,"__esModule",{value:!0}),g[Symbol.toStringTag]="Module",g}({});
//# sourceMappingURL=main.iife.js.map
