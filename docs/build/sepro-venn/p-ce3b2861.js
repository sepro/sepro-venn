let e,t,n=!1,l=0,o=!1;const s="undefined"!=typeof window?window:{},r=s.CSS,c=s.document||{head:{}},i={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},a=(()=>(c.head.attachShadow+"").indexOf("[native")>-1)(),u=e=>Promise.resolve(e),f=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p=new WeakMap,m=e=>"sc-"+e.o,w={},h=e=>"object"==(e=typeof e)||"function"===e,d=(e,t,...n)=>{let l=null,o=!1,s=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!h(l))&&(l+=""),o&&s?r[r.length-1].s+=l:r.push(o?$(null,l):l),s=o)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}const i=$(e,null);return i.u=t,r.length>0&&(i.p=r),i},$=(e,t)=>({t:0,h:e,s:t,$:null,p:null,u:null}),y={},b=(e,t,n,l,o,s)=>{if(n!==l){let c=z(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,o=v(n),s=v(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else{const i=h(l);if((c||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(r){}null==l||!1===l?e.removeAttribute(t):(!c||4&s||o)&&!i&&e.setAttribute(t,l=!0===l?"":l)}}},_=/\s/,v=e=>e?e.split(_):[],g=(e,t,n,l)=>{const o=11===t.$.nodeType&&t.$.host?t.$.host:t.$,s=e&&e.u||w,r=t.u||w;for(l in s)l in r||b(o,l,s[l],void 0,n,t.t);for(l in r)b(o,l,s[l],r[l],n,t.t)},j=(t,l,o)=>{let s,r,i=l.p[o],a=0;if(null!==i.s)s=i.$=c.createTextNode(i.s);else{if(n||(n="svg"===i.h),s=i.$=c.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.h),n&&"foreignObject"===i.h&&(n=!1),g(null,i,n),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),i.p)for(a=0;a<i.p.length;++a)r=j(t,i,a),r&&s.appendChild(r);"svg"===i.h?n=!1:"foreignObject"===s.tagName&&(n=!0)}return s},M=(e,n,l,o,s,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=j(null,l,s),c&&(o[s].$=c,i.insertBefore(c,n)))},O=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.$.remove()},S=(e,t)=>e.h===t.h,L=(e,t)=>{const l=t.$=e.$,o=e.p,s=t.p,r=t.h,c=t.s;null===c?(n="svg"===r||"foreignObject"!==r&&n,g(e,t,n),null!==o&&null!==s?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],p=l[u];for(;s<=c&&r<=u;)null==i?i=t[++s]:null==a?a=t[--c]:null==f?f=l[++r]:null==p?p=l[--u]:S(i,f)?(L(i,f),i=t[++s],f=l[++r]):S(a,p)?(L(a,p),a=t[--c],p=l[--u]):S(i,p)?(L(i,p),e.insertBefore(i.$,a.$.nextSibling),i=t[++s],p=l[--u]):S(a,f)?(L(a,f),e.insertBefore(a.$,i.$),a=t[--c],f=l[++r]):(o=j(t&&t[r],n,r),f=l[++r],o&&i.$.parentNode.insertBefore(o,i.$));s>c?M(e,null==l[u+1]?null:l[u+1].$,n,l,r,u):r>u&&O(t,s,c)})(l,o,t,s):null!==s?(null!==e.s&&(l.textContent=""),M(l,null,t,s,0,s.length-1)):null!==o&&O(o,0,o.length-1),n&&"svg"===r&&(n=!1)):e.s!==c&&(l.data=c)},R=(e,t)=>{t&&!e._&&t["s-p"]&&t["s-p"].push(new Promise(t=>e._=t))},U=(e,t)=>{if(e.t|=16,!(4&e.t))return R(e,e.v),ne(()=>k(e,t));e.t|=512},k=(e,t)=>{const n=e.g;let l;return t&&(l=E(n,"componentWillLoad")),F(l,()=>C(e,n,t))},C=(n,l,o)=>{const s=n.j,r=s["s-rc"];o&&(e=>{const t=e.M,n=e.j,l=t.t,o=((e,t)=>{let n=m(t),l=J.get(n);if(e=11===e.nodeType?e:c,l)if("string"==typeof l){let t,o=p.get(e=e.head||e);o||p.set(e,o=new Set),o.has(n)||(t=c.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(a&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(n),((n,l)=>{const o=n.j,s=n.O||$(null,null),r=(e=>e&&e.h===y)(l)?l:d(null,null,l);t=o.tagName,r.h=null,r.t|=4,n.O=r,r.$=s.$=o.shadowRoot||o,e=o["s-sc"],L(s,r)})(n,P(n,l)),r&&(r.map(e=>e()),s["s-rc"]=void 0);{const e=s["s-p"],t=()=>x(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},P=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){D(n)}return t},x=e=>{const t=e.j,n=e.v;64&e.t||(e.t|=64,T(t),e.S(t),n||A()),e._&&(e._(),e._=void 0),512&e.t&&te(()=>U(e,!1)),e.t&=-517},A=()=>{T(c.documentElement),i.t|=2,te(()=>(e=>{const t=new CustomEvent("appload",{detail:{namespace:"sepro-venn"}});return e.dispatchEvent(t),t})(s))},E=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){D(l)}},F=(e,t)=>e&&e.then?e.then(t):t(),T=e=>e.classList.add("hydrated"),W=(e,t,n)=>{if(t.L){e.watchers&&(t.R=e.watchers);const l=Object.entries(t.L),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>H(this).U.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=H(this),s=o.U.get(t),r=o.t,c=o.g;if(n=((e,t)=>null==e||h(e)?e:2&t?parseFloat(e):1&t?e+"":e)(n,l.L[t][0]),!(8&r&&void 0!==s||n===s)&&(o.U.set(t,n),c)){if(l.R&&128&r){const e=l.R[t];e&&e.map(e=>{try{c[e](n,s,t)}catch(l){D(l)}})}2==(18&r)&&U(o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){i.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},q=(e,t={})=>{const n=[],l=t.exclude||[],o=s.customElements,r=c.head,u=r.querySelector("meta[charset]"),p=c.createElement("style"),w=[];let h,d=!0;Object.assign(i,t),i.l=new URL(t.resourcesUrl||"./",c.baseURI).href,t.syncQueue&&(i.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],o:t[1],L:t[2],k:t[3]};s.L=t[2],s.R={},!a&&1&s.t&&(s.t|=8);const r=s.o,c=class extends HTMLElement{constructor(e){super(e),V(e=this,s),1&s.t&&(a?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){h&&(clearTimeout(h),h=null),d?w.push(this):i.jmp(()=>(e=>{if(0==(1&i.t)){const t=H(e),n=t.M,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){R(t,t.v=n);break}}n.L&&Object.entries(n.L).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),te(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=I(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.R=o.watchers,W(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(c){D(c)}t.t&=-9,t.t|=128,e()}const e=m(n);if(!J.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_sepro_venn("./p-8a8f7b57.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=J.get(e);f&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,J.set(e,l)})(e,l,!!(1&n.t)),t()}}const s=t.v,r=()=>U(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n))}l()}})(this))}disconnectedCallback(){i.jmp(()=>{})}forceUpdate(){(()=>{{const e=H(this);e.j.isConnected&&2==(18&e.t)&&U(e,!1)}})()}componentOnReady(){return H(this).C}};s.P=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,W(c,s,1)))})),p.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",p.setAttribute("data-styles",""),r.insertBefore(p,u?u.nextSibling:r.firstChild),d=!1,w.length?w.map(e=>e.connectedCallback()):i.jmp(()=>h=setTimeout(A,30))},B=new WeakMap,H=e=>B.get(e),N=(e,t)=>B.set(t.g=e,t),V=(e,t)=>{const n={t:0,j:e,M:t,U:new Map};return n.C=new Promise(e=>n.S=e),e["s-p"]=[],e["s-rc"]=[],B.set(e,n)},z=(e,t)=>t in e,D=e=>console.error(e),G=new Map,I=e=>{const t=e.o.replace(/-/g,"_"),n=e.P,l=G.get(n);return l?l[t]:__sc_import_sepro_venn(`./${n}.entry.js`).then(e=>(G.set(n,e),e[t]),D)},J=new Map,K=[],Q=[],X=[],Y=(e,t)=>n=>{e.push(n),o||(o=!0,t&&4&i.t?te(ee):i.raf(ee))},Z=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){D(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},ee=()=>{l++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){D(t)}e.length=0})(K);{const e=2==(6&i.t)?performance.now()+14*Math.ceil(.1*l):1/0;Z(Q,e),Z(X,e),Q.length>0&&(X.push(...Q),Q.length=0),(o=K.length+Q.length+X.length>0)?i.raf(ee):l=0}},te=e=>u().then(e),ne=Y(Q,!0),le=()=>r&&r.supports&&r.supports("color","var(--c)")?u():__sc_import_sepro_venn("./p-1b2d9a2e.js").then(()=>(i.A=s.__cssshim)?(!1).i():0),oe=()=>{i.A=s.__cssshim;const e=Array.from(c.querySelectorAll("script")).find(e=>/\/sepro-venn(\.esm)?\.js($|\?|#)/.test(e.src)||"sepro-venn"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,s.location.href)).href,se(t.resourcesUrl,e),s.customElements?u(t):__sc_import_sepro_venn("./p-2e1bb10c.js").then(()=>t))},se=(e,t)=>{try{s.__sc_import_sepro_venn=Function("w","return import(w);//"+Math.random())}catch(n){const l=new Map;s.__sc_import_sepro_venn=n=>{const o=new URL(n,e).href;let r=l.get(o);if(!r){const e=c.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_sepro_venn.m = m;`],{type:"application/javascript"})),r=new Promise(t=>{e.onload=()=>{t(s.__sc_import_sepro_venn.m),e.remove()}}),l.set(o,r),c.head.appendChild(e)}return r}}};export{le as a,q as b,d as h,oe as p,N as r}