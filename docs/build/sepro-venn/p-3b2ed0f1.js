const e={allRenderFn:!0,cmpDidLoad:!1,cmpDidUnload:!1,cmpDidUpdate:!1,cmpDidRender:!1,cmpWillLoad:!0,cmpWillUpdate:!1,cmpWillRender:!1,connectedCallback:!1,disconnectedCallback:!1,element:!1,event:!1,hasRenderFn:!0,lifecycle:!0,hostListener:!1,hostListenerTargetWindow:!1,hostListenerTargetDocument:!1,hostListenerTargetBody:!1,hostListenerTargetParent:!1,hostListenerTarget:!1,member:!0,method:!1,mode:!1,noVdomRender:!1,observeAttribute:!0,prop:!0,propBoolean:!1,propNumber:!0,propString:!0,propMutable:!1,reflect:!1,scoped:!1,shadowDom:!0,slot:!1,slotRelocation:!1,state:!1,style:!0,svg:!0,updatable:!0,vdomAttribute:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,lazyLoad:!0,hydrateServerSide:!1,cssVarShim:!0,hydrateClientSide:!1,isDebug:!1,isDev:!1,lifecycleDOMEvents:!1,profile:!1,hotModuleReplacement:!1,constructableCSS:!0,initializeNextTick:!0,cssAnnotations:!0},t=window,n=document,o={t:0,o:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},s=!!n.documentElement.attachShadow,r=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),l=new WeakMap,i=e=>l.get(e),c=(e,t)=>l.set(t.s=e,t),a=(e,t)=>t in e,f=e=>console.error(e),d=new Map,p=new Map,u=t.__stencil_cssshim;let m=0,h=!1;const $=[],v=[],y=[],w=(e,t)=>n=>{e.push(n),h||(h=!0,t&&4&o.t?_(b):o.raf(b))},g=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){f(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},b=()=>{m++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){f(e)}e.length=0})($);const e=2==(6&o.t)?performance.now()+10*Math.ceil(m*(1/22)):1/0;g(v,e),g(y,e),v.length>0&&(y.push(...v),v.length=0),(h=$.length+v.length+y.length>0)?o.raf(b):m=0},_=e=>Promise.resolve().then(e),S=w(v,!0),j={},k=e=>null!=e,L=e=>e.toLowerCase(),R=e=>["object","function"].includes(typeof e),M=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_sepro_venn("./p-3ea8955c.js"),O=async()=>{const e=new RegExp("/sepro-venn(.esm)?.js$"),o=Array.from(n.querySelectorAll("script")).find(t=>e.test(t.src)||"sepro-venn"===t.getAttribute("data-namespace")),s=o["data-opts"];{const e=new URL(".",new URL(o.getAttribute("data-resources-url")||o.src,t.location.href));return U(e.href),window.customElements||await __sc_import_sepro_venn("./p-860d8016.js"),Object.assign({},s,{resourcesUrl:e.href})}},U=e=>{const o=(()=>`__sc_import_${"sepro-venn".replace(/\s|-/g,"_")}`)();try{t[o]=new Function("w","return import(w);")}catch(s){const r=new Map;t[o]=s=>{const l=new URL(s,e).href;let i=r.get(l);if(!i){const e=n.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${l}'; window.${o}.m = m;`],{type:"application/javascript"})),i=new Promise(n=>{e.onload=()=>{n(t[o].m),e.remove()}}),r.set(l,i),n.head.appendChild(e)}return i}}},x="http://www.w3.org/1999/xlink",C=new WeakMap,T=e=>"sc-"+e,D=(e,t,...n)=>{let o,s=null,r=!1,l=!1,i=[];const c=t=>{for(let n=0;n<t.length;n++)s=t[n],Array.isArray(s)?c(s):null!=s&&"boolean"!=typeof s&&((r="function"!=typeof e&&!R(s))&&(s=String(s)),r&&l?i[i.length-1].l+=s:i.push(r?{t:0,l:s}:s),l=r)};if(c(n),t){o=t.key||void 0;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,i,A);const a={t:0,i:e,p:i.length>0?i:null,u:void 0,h:t};return a.$=o,a},W={},A={forEach:(e,t)=>e.map(F).forEach(t),map:(e,t)=>e.map(F).map(t).map(E)},F=e=>({vattrs:e.h,vchildren:e.p,vkey:e.$,vname:e.v,vtag:e.i,vtext:e.l}),E=e=>({t:0,h:e.vattrs,p:e.vchildren,$:e.vkey,v:e.vname,i:e.vtag,l:e.vtext}),P=(e,t,n,s,r,l)=>{if(n!==s)if("class"===t){const t=e.classList;B(n).forEach(e=>t.remove(e)),B(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!a(e,t))t=a(e,L(t))?L(t.substring(2)):L(t[2])+t.substring(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1);else{const n=a(e,t),o=R(s),i=e.tagName.includes("-");if((n||o&&null!==s)&&!r)try{i?e[t]=s:e[t]!==s&&(e[t]=s||"")}catch(e){}const c=!(!r||t===(t=t.replace(/^xlink\:?/,"")));null==s||!1===s?c?e.removeAttributeNS(x,L(t)):e.removeAttribute(t):(!n||4&l||r)&&!o&&(s=!0===s?"":s.toString(),c?e.setAttributeNS(x,L(t),s):e.setAttribute(t,s))}},B=e=>e?e.split(/\s+/).filter(e=>e):[],N=(e,t,n,o)=>{const s=11===t.u.nodeType&&t.u.host?t.u.host:t.u,r=e&&e.h||j,l=t.h||j;for(o in r)o in l||P(s,o,r[o],void 0,n,t.t);for(o in l)P(s,o,r[o],l[o],n,t.t)};let V,z,q=!1;const H=(e,t,o)=>{let s,r,l=t.p[o],i=0;if(k(l.l))l.u=n.createTextNode(l.l);else{if(s=l.u=q||"svg"===l.i?n.createElementNS("http://www.w3.org/2000/svg",l.i):n.createElement(l.i),N(null,l,q="svg"===l.i||"foreignObject"!==l.i&&q),k(V)&&s["s-si"]!==V&&s.classList.add(s["s-si"]=V),l.p)for(i=0;i<l.p.length;++i)(r=H(e,l,i))&&s.appendChild(r);"svg"===l.i?q=!1:"foreignObject"===l.u.tagName&&(q=!0)}return l.u},K=(e,t,n,o,s,r)=>{let l,i=e;for(i.shadowRoot&&L(i.tagName)===z&&(i=i.shadowRoot);s<=r;++s)o[s]&&(l=H(null,n,s))&&(o[s].u=l,i.insertBefore(l,t))},Q=(e,t,n,o)=>{for(;t<=n;++t)k(e[t])&&(o=e[t].u,J(e[t],!0),o.remove())},G=(e,t)=>e.i===t.i&&e.$===t.$,I=(e,t)=>{const n=t.u=e.u,o=e.p,s=t.p;q=n&&k(n.parentNode)&&void 0!==n.ownerSVGElement,q="svg"===t.i||"foreignObject"!==t.i&&q,k(t.l)?e.l!==t.l&&(n.textContent=t.l):(N(e,t,q),k(o)&&k(s)?((e,t,n,o)=>{let s,r,l=0,i=0,c=0,a=0,f=t.length-1,d=t[0],p=t[f],u=o.length-1,m=o[0],h=o[u];for(;l<=f&&i<=u;)if(null==d)d=t[++l];else if(null==p)p=t[--f];else if(null==m)m=o[++i];else if(null==h)h=o[--u];else if(G(d,m))I(d,m),d=t[++l],m=o[++i];else if(G(p,h))I(p,h),p=t[--f],h=o[--u];else if(G(d,h))I(d,h),e.insertBefore(d.u,p.u.nextSibling),d=t[++l],h=o[--u];else if(G(p,m))I(p,m),e.insertBefore(p.u,d.u),p=t[--f],m=o[++i];else{for(c=-1,a=l;a<=f;++a)if(t[a]&&k(t[a].$)&&t[a].$===m.$){c=a;break}c>=0?((r=t[c]).i!==m.i?s=H(t&&t[i],n,c):(I(r,m),t[c]=void 0,s=r.u),m=o[++i]):(s=H(t&&t[i],n,i),m=o[++i]),s&&d.u.parentNode.insertBefore(s,d.u)}l>f?K(e,null==o[u+1]?null:o[u+1].u,n,o,i,u):i>u&&Q(t,l,f)})(n,o,t,s):k(s)?(k(e.l)&&(n.textContent=""),K(n,null,t,s,0,s.length-1)):k(o)&&Q(o,0,o.length-1)),q&&"svg"===t.i&&(q=!1)},J=(e,t)=>{e&&(e.h&&e.h.ref&&e.h.ref(t?null:e.u),e.p&&e.p.forEach(e=>{J(e,t)}))},X=(e,t,n,o)=>{t.t|=16;const s=t.s;let r;o&&(r=te(s,"componentWillLoad"));const l=()=>Y(e,t,n,s,o);return ne(r,()=>S(l))},Y=(e,t,o,r,l)=>{t.t&=-17,e["s-lr"]=!1,l&&((e,t)=>{const o=((e,t,o,s)=>{let r=T(t.g),l=p.get(r);if(e=11===e.nodeType?e:n,l)if("string"==typeof l){let o,i=C.get(e=e.head||e);if(i||C.set(e,i=new Set),!i.has(r)){if(u){const e=(o=u.createHostStyle(s,r,l,!!(10&t.t)))["s-sc"];e&&(r=e,i=null)}else(o=n.createElement("style")).innerHTML=l;e.insertBefore(o,e.querySelector("link")),i&&i.add(r)}}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return r})(s&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,0,e);10&t.t&&(e["s-sc"]=o,e.classList.add(o+"-h"))})(e,o),t.t|=4;try{((e,t,n,o)=>{z=L(e.tagName);const s=t._||{t:0},r=(e=>e&&e.i===W)(o)?o:D(null,null,o);r.i=null,r.t|=4,t._=r,r.u=s.u=e.shadowRoot||e,V=e["s-sc"],I(s,r)})(e,t,0,r.render())}catch(e){f(e)}t.t&=-5,u&&u.updateHost(e),e["s-lr"]=!0,t.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),Z(e,t)},Z=(e,t,n)=>{if(!e["s-al"]){const o=t.S;64&t.t||(t.t|=64,e.classList.add("hydrated"),t.j(e),o||ee()),o&&((n=o["s-al"])&&(n.delete(e),0===n.size&&(o["s-al"]=void 0,o["s-init"]())),t.S=void 0)}},ee=()=>{n.documentElement.classList.add("hydrated"),o.t|=2},te=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){f(e)}},ne=(e,t)=>e&&e.then?e.then(t):t(),oe=(e,t,n)=>{if(t.k){e.watchers&&(t.L=e.watchers);const s=Object.entries(t.k),r=e.prototype;if(s.forEach(([e,[o]])=>{(31&o||2&n&&32&o)&&Object.defineProperty(r,e,{get(){return((e,t)=>i(e).R.get(t))(this,e)},set(n){((e,t,n,o)=>{const s=i(this),r=s.M,l=s.R.get(t),c=s.t;if(!((n=((e,t)=>null==e||R(e)?e:2&t?parseFloat(e):1&t?String(e):e)(n,o.k[t][0]))===l||8&c&&void 0!==l)&&(s.R.set(t,n),s.s)){if(o.L&&128&c){const e=o.L[t];e&&e.forEach(e=>{try{s.s[e].call(s.s,n,l,t)}catch(e){f(e)}})}2==(22&c)&&X(r,s,o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;r.attributeChangedCallback=function(e,n,s){o.jmp(()=>{const n=t.get(e);this[n]=(null!==s||"boolean"!=typeof this[n])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,n])=>{const o=n[1]||e;return t.set(o,e),o})}}return e},se=(c,a={})=>{const m=[],h=a.exclude||[],$=n.head,v=t.customElements,y=$.querySelector("meta[charset]"),w=n.createElement("style");let g;Object.assign(o,a),o.o=new URL(a.resourcesUrl||"./",n.baseURI).href,a.syncQueue&&(o.t|=4),c.forEach(t=>t[1].forEach(n=>{const c={t:n[0],g:n[1],k:n[2],O:n[3],L:{}};!s&&1&c.t&&(c.t|=8);const a=c.g;c.U=t[0],h.includes(a)||v.get(a)||(m.push(a),v.define(a,oe(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,M:e,R:new Map};t.C=new Promise(e=>t.j=e),l.set(e,t)}})(e),1&c.t&&(s?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){g&&(clearTimeout(g),g=null),o.jmp(()=>((t,n)=>{if(0==(1&o.t)){const o=i(t);if(!(1&o.t)){o.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!1===e["s-lr"]){o.S=e,(e["s-al"]=e["s-al"]||new Set).add(t);break}}n.k&&Object.entries(n.k).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),_(()=>(async(t,n,o,s,l)=>{if(0==(32&n.t)){n.t|=32,(l=(e=>{const t=e.g.replace(/-/g,"_"),n=e.U,o=d.get(n);return o?o[t]:__sc_import_sepro_venn(`./${n}.entry.js`).then(e=>(d.set(n,e),e[t]),f)})(o)).then&&(l=await l),l.isProxied||(o.L=l.watchers,oe(l,o,2),l.isProxied=!0),n.t|=8;try{new l(n)}catch(e){f(e)}if(n.t&=-9,n.t|=128,!l.T&&l.style){let t=l.style,n=T(o.g);const s=e.runtimeScopeCss;(8&o.t||s)&&(t=await __sc_import_sepro_venn("./p-05cd1ccb.js").then(e=>e.scopeCss(t,n,!1))),((e,t,n)=>{let o=p.get(e);r&&n?(o=o||new CSSStyleSheet).replace(t):o=t,p.set(e,o)})(n,t,!!(1&o.t)),l.T=!0}}const i=n.S,c=()=>X(t,n,o,!0);i&&!1===i["s-lr"]&&i["s-rc"]?i["s-rc"].push(c):c()})(t,o,n))}}})(this,c))}disconnectedCallback(){o.jmp(()=>(()=>{0==(1&o.t)&&u&&u.removeHost(this)})())}"s-init"(){const e=i(this);e.s&&Z(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=i(e);2&n.t&&X(e,n,t,!1)}})(this,c)}componentOnReady(){return i(this).C}},c,1)))})),w.innerHTML=m+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),$.insertBefore(w,y?y.nextSibling:$.firstChild),o.jmp(()=>g=setTimeout(ee,30))};export{M as a,se as b,D as h,O as p,c as r};