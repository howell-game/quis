const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Policies-CS0OcMeO.js","./Policies-B07RryjC.css","./QuestionCarousel-BnvgvnWq.js","./dynamic-import-helper-BheWnx7M.js","./QuestionCarousel-Bn-re-XR.css","./Competition-DU5k_p67.js","./Competition-pw4poU3C.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Be={},Ds=[],Rn=()=>{},UE=()=>!1,rc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Mu=t=>t.startsWith("onUpdate:"),ut=Object.assign,Lu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$E=Object.prototype.hasOwnProperty,Oe=(t,e)=>$E.call(t,e),ae=Array.isArray,Vs=t=>wo(t)==="[object Map]",sc=t=>wo(t)==="[object Set]",Jf=t=>wo(t)==="[object Date]",me=t=>typeof t=="function",tt=t=>typeof t=="string",Vn=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",qm=t=>(qe(t)||me(t))&&me(t.then)&&me(t.catch),jm=Object.prototype.toString,wo=t=>jm.call(t),BE=t=>wo(t).slice(8,-1),Hm=t=>wo(t)==="[object Object]",Fu=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xi=xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ic=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qE=/-(\w)/g,on=ic(t=>t.replace(qE,(e,n)=>n?n.toUpperCase():"")),jE=/\B([A-Z])/g,xr=ic(t=>t.replace(jE,"-$1").toLowerCase()),oc=ic(t=>t.charAt(0).toUpperCase()+t.slice(1)),hl=ic(t=>t?`on${oc(t)}`:""),wr=(t,e)=>!Object.is(t,e),ha=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},zl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Sa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},HE=t=>{const e=tt(t)?Number(t):NaN;return isNaN(e)?t:e};let Xf;const ac=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=tt(r)?GE(r):cc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(tt(t)||qe(t))return t}const zE=/;(?![^(]*\))/g,WE=/:([^]+)/,KE=/\/\*[^]*?\*\//g;function GE(t){const e={};return t.replace(KE,"").split(zE).forEach(n=>{if(n){const r=n.split(WE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tr(t){let e="";if(tt(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Tr(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const QE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",YE=xu(QE);function zm(t){return!!t||t===""}function JE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=lc(t[r],e[r]);return n}function lc(t,e){if(t===e)return!0;let n=Jf(t),r=Jf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Vn(t),r=Vn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?JE(t,e):!1;if(n=qe(t),r=qe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!lc(t[o],e[o]))return!1}}return String(t)===String(e)}function XE(t,e){return t.findIndex(n=>lc(n,e))}const Wm=t=>!!(t&&t.__v_isRef===!0),Ze=t=>tt(t)?t:t==null?"":ae(t)||qe(t)&&(t.toString===jm||!me(t.toString))?Wm(t)?Ze(t.value):JSON.stringify(t,Km,2):String(t),Km=(t,e)=>Wm(e)?Km(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[fl(r,i)+" =>"]=s,n),{})}:sc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fl(n))}:Vn(e)?fl(e):qe(e)&&!ae(e)&&!Hm(e)?String(e):e,fl=(t,e="")=>{var n;return Vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class ZE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){++this._on===1&&(this.prevScope=Mt,Mt=this)}off(){this._on>0&&--this._on===0&&(Mt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ew(){return Mt}let je;const dl=new WeakSet;class Gm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&Mt.active&&Mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dl.has(this)&&(dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ym(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zf(this),Jm(this);const e=je,n=fn;je=this,fn=!0;try{return this.fn()}finally{Xm(this),je=e,fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bu(e);this.deps=this.depsTail=void 0,Zf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wl(this)&&this.run()}get dirty(){return Wl(this)}}let Qm=0,Mi,Li;function Ym(t,e=!1){if(t.flags|=8,e){t.next=Li,Li=t;return}t.next=Mi,Mi=t}function Uu(){Qm++}function $u(){if(--Qm>0)return;if(Li){let e=Li;for(Li=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Mi;){let e=Mi;for(Mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Jm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bu(r),tw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Wl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===eo)||(t.globalVersion=eo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Wl(t))))return;t.flags|=2;const e=t.dep,n=je,r=fn;je=t,fn=!0;try{Jm(t);const s=t.fn(t._value);(e.version===0||wr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{je=n,fn=r,Xm(t),t.flags&=-3}}function Bu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function tw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let fn=!0;const eg=[];function Yn(){eg.push(fn),fn=!1}function Jn(){const t=eg.pop();fn=t===void 0?!0:t}function Zf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=je;je=void 0;try{e()}finally{je=n}}}let eo=0;class nw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!je||!fn||je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==je)n=this.activeLink=new nw(je,this),je.deps?(n.prevDep=je.depsTail,je.depsTail.nextDep=n,je.depsTail=n):je.deps=je.depsTail=n,tg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=je.depsTail,n.nextDep=void 0,je.depsTail.nextDep=n,je.depsTail=n,je.deps===n&&(je.deps=r)}return n}trigger(e){this.version++,eo++,this.notify(e)}notify(e){Uu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$u()}}}function tg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)tg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Kl=new WeakMap,rs=Symbol(""),Gl=Symbol(""),to=Symbol("");function bt(t,e,n){if(fn&&je){let r=Kl.get(t);r||Kl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new qu),s.map=r,s.key=n),s.track()}}function jn(t,e,n,r,s,i){const o=Kl.get(t);if(!o){eo++;return}const c=l=>{l&&l.trigger()};if(Uu(),e==="clear")o.forEach(c);else{const l=ae(t),u=l&&Fu(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===to||!Vn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(to)),e){case"add":l?u&&c(o.get("length")):(c(o.get(rs)),Vs(t)&&c(o.get(Gl)));break;case"delete":l||(c(o.get(rs)),Vs(t)&&c(o.get(Gl)));break;case"set":Vs(t)&&c(o.get(rs));break}}$u()}function As(t){const e=De(t);return e===t?e:(bt(e,"iterate",to),rn(t)?e:e.map(gt))}function uc(t){return bt(t=De(t),"iterate",to),t}const rw={__proto__:null,[Symbol.iterator](){return pl(this,Symbol.iterator,gt)},concat(...t){return As(this).concat(...t.map(e=>ae(e)?As(e):e))},entries(){return pl(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,e){return Un(this,"every",t,e,void 0,arguments)},filter(t,e){return Un(this,"filter",t,e,n=>n.map(gt),arguments)},find(t,e){return Un(this,"find",t,e,gt,arguments)},findIndex(t,e){return Un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Un(this,"findLast",t,e,gt,arguments)},findLastIndex(t,e){return Un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Un(this,"forEach",t,e,void 0,arguments)},includes(...t){return ml(this,"includes",t)},indexOf(...t){return ml(this,"indexOf",t)},join(t){return As(this).join(t)},lastIndexOf(...t){return ml(this,"lastIndexOf",t)},map(t,e){return Un(this,"map",t,e,void 0,arguments)},pop(){return Ai(this,"pop")},push(...t){return Ai(this,"push",t)},reduce(t,...e){return ed(this,"reduce",t,e)},reduceRight(t,...e){return ed(this,"reduceRight",t,e)},shift(){return Ai(this,"shift")},some(t,e){return Un(this,"some",t,e,void 0,arguments)},splice(...t){return Ai(this,"splice",t)},toReversed(){return As(this).toReversed()},toSorted(t){return As(this).toSorted(t)},toSpliced(...t){return As(this).toSpliced(...t)},unshift(...t){return Ai(this,"unshift",t)},values(){return pl(this,"values",gt)}};function pl(t,e,n){const r=uc(t),s=r[e]();return r!==t&&!rn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const sw=Array.prototype;function Un(t,e,n,r,s,i){const o=uc(t),c=o!==t&&!rn(t),l=o[e];if(l!==sw[e]){const p=l.apply(t,i);return c?gt(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,gt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function ed(t,e,n,r){const s=uc(t);let i=n;return s!==t&&(rn(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,gt(c),l,t)}),s[e](i,...r)}function ml(t,e,n){const r=De(t);bt(r,"iterate",to);const s=r[e](...n);return(s===-1||s===!1)&&zu(n[0])?(n[0]=De(n[0]),r[e](...n)):s}function Ai(t,e,n=[]){Yn(),Uu();const r=De(t)[e].apply(t,n);return $u(),Jn(),r}const iw=xu("__proto__,__v_isRef,__isVue"),ng=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vn));function ow(t){Vn(t)||(t=String(t));const e=De(this);return bt(e,"has",t),e.hasOwnProperty(t)}class rg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?gw:ag:i?og:ig).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let l;if(o&&(l=rw[n]))return l;if(n==="hasOwnProperty")return ow}const c=Reflect.get(e,n,Ct(e)?e:r);return(Vn(n)?ng.has(n):iw(n))||(s||bt(e,"get",n),i)?c:Ct(c)?o&&Fu(n)?c:c.value:qe(c)?s?lg(c):hc(c):c}}class sg extends rg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Sr(i);if(!rn(r)&&!Sr(r)&&(i=De(i),r=De(r)),!ae(e)&&Ct(i)&&!Ct(r))return l?!1:(i.value=r,!0)}const o=ae(e)&&Fu(n)?Number(n)<e.length:Oe(e,n),c=Reflect.set(e,n,r,Ct(e)?e:s);return e===De(s)&&(o?wr(r,i)&&jn(e,"set",n,r):jn(e,"add",n,r)),c}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&jn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Vn(n)||!ng.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",ae(e)?"length":rs),Reflect.ownKeys(e)}}class aw extends rg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cw=new sg,lw=new aw,uw=new sg(!0);const Ql=t=>t,ea=t=>Reflect.getPrototypeOf(t);function hw(t,e,n){return function(...r){const s=this.__v_raw,i=De(s),o=Vs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Ql:e?Ca:gt;return!e&&bt(i,"iterate",l?Gl:rs),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function ta(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fw(t,e){const n={get(s){const i=this.__v_raw,o=De(i),c=De(s);t||(wr(s,c)&&bt(o,"get",s),bt(o,"get",c));const{has:l}=ea(o),u=e?Ql:t?Ca:gt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&bt(De(s),"iterate",rs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=De(i),c=De(s);return t||(wr(s,c)&&bt(o,"has",s),bt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=De(c),u=e?Ql:t?Ca:gt;return!t&&bt(l,"iterate",rs),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return ut(n,t?{add:ta("add"),set:ta("set"),delete:ta("delete"),clear:ta("clear")}:{add(s){!e&&!rn(s)&&!Sr(s)&&(s=De(s));const i=De(this);return ea(i).has.call(i,s)||(i.add(s),jn(i,"add",s,s)),this},set(s,i){!e&&!rn(i)&&!Sr(i)&&(i=De(i));const o=De(this),{has:c,get:l}=ea(o);let u=c.call(o,s);u||(s=De(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?wr(i,f)&&jn(o,"set",s,i):jn(o,"add",s,i),this},delete(s){const i=De(this),{has:o,get:c}=ea(i);let l=o.call(i,s);l||(s=De(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&jn(i,"delete",s,void 0),u},clear(){const s=De(this),i=s.size!==0,o=s.clear();return i&&jn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=hw(s,t,e)}),n}function ju(t,e){const n=fw(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const dw={get:ju(!1,!1)},pw={get:ju(!1,!0)},mw={get:ju(!0,!1)};const ig=new WeakMap,og=new WeakMap,ag=new WeakMap,gw=new WeakMap;function _w(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yw(t){return t.__v_skip||!Object.isExtensible(t)?0:_w(BE(t))}function hc(t){return Sr(t)?t:Hu(t,!1,cw,dw,ig)}function cg(t){return Hu(t,!1,uw,pw,og)}function lg(t){return Hu(t,!0,lw,mw,ag)}function Hu(t,e,n,r,s){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=yw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Os(t){return Sr(t)?Os(t.__v_raw):!!(t&&t.__v_isReactive)}function Sr(t){return!!(t&&t.__v_isReadonly)}function rn(t){return!!(t&&t.__v_isShallow)}function zu(t){return t?!!t.__v_raw:!1}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function vw(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&zl(t,"__v_skip",!0),t}const gt=t=>qe(t)?hc(t):t,Ca=t=>qe(t)?lg(t):t;function Ct(t){return t?t.__v_isRef===!0:!1}function we(t){return ug(t,!1)}function Ew(t){return ug(t,!0)}function ug(t,e){return Ct(t)?t:new ww(t,e)}class ww{constructor(e,n){this.dep=new qu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:De(e),this._value=n?e:gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||rn(e)||Sr(e);e=r?e:De(e),wr(e,n)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function Kn(t){return Ct(t)?t.value:t}const Tw={get:(t,e,n)=>e==="__v_raw"?t:Kn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ct(s)&&!Ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function hg(t){return Os(t)?t:new Proxy(t,Tw)}class Iw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new qu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return Ym(this,!0),!0}get value(){const e=this.dep.track();return Zm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Aw(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new Iw(r,s,n)}const na={},Pa=new WeakMap;let Qr;function bw(t,e=!1,n=Qr){if(n){let r=Pa.get(n);r||Pa.set(n,r=[]),r.push(t)}}function Rw(t,e,n=Be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=D=>s?D:rn(D)||s===!1||s===0?Hn(D,1):Hn(D);let f,p,m,_,S=!1,k=!1;if(Ct(t)?(p=()=>t.value,S=rn(t)):Os(t)?(p=()=>u(t),S=!0):ae(t)?(k=!0,S=t.some(D=>Os(D)||rn(D)),p=()=>t.map(D=>{if(Ct(D))return D.value;if(Os(D))return u(D);if(me(D))return l?l(D,2):D()})):me(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Yn();try{m()}finally{Jn()}}const D=Qr;Qr=f;try{return l?l(t,3,[_]):t(_)}finally{Qr=D}}:p=Rn,e&&s){const D=p,z=s===!0?1/0:s;p=()=>Hn(D(),z)}const V=ew(),j=()=>{f.stop(),V&&V.active&&Lu(V.effects,f)};if(i&&e){const D=e;e=(...z)=>{D(...z),j()}}let q=k?new Array(t.length).fill(na):na;const x=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(e){const z=f.run();if(s||S||(k?z.some((te,b)=>wr(te,q[b])):wr(z,q))){m&&m();const te=Qr;Qr=f;try{const b=[z,q===na?void 0:k&&q[0]===na?[]:q,_];q=z,l?l(e,3,b):e(...b)}finally{Qr=te}}}else f.run()};return c&&c(x),f=new Gm(p),f.scheduler=o?()=>o(x,!1):x,_=D=>bw(D,!1,f),m=f.onStop=()=>{const D=Pa.get(f);if(D){if(l)l(D,4);else for(const z of D)z();Pa.delete(f)}},e?r?x(!0):q=f.run():o?o(x.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function Hn(t,e=1/0,n){if(e<=0||!qe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ct(t))Hn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)Hn(t[r],e,n);else if(sc(t)||Vs(t))t.forEach(r=>{Hn(r,e,n)});else if(Hm(t)){for(const r in t)Hn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Hn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function To(t,e,n,r){try{return r?t(...r):t()}catch(s){fc(s,e,n)}}function mn(t,e,n,r){if(me(t)){const s=To(t,e,n,r);return s&&qm(s)&&s.catch(i=>{fc(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(mn(t[i],e,n,r));return s}}function fc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Be;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Yn(),To(i,null,10,[t,l,u]),Jn();return}}Sw(t,n,s,r,o)}function Sw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Vt=[];let wn=-1;const xs=[];let dr=null,bs=0;const fg=Promise.resolve();let ka=null;function dc(t){const e=ka||fg;return t?e.then(this?t.bind(this):t):e}function Cw(t){let e=wn+1,n=Vt.length;for(;e<n;){const r=e+n>>>1,s=Vt[r],i=no(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Wu(t){if(!(t.flags&1)){const e=no(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=no(n)?Vt.push(t):Vt.splice(Cw(e),0,t),t.flags|=1,dg()}}function dg(){ka||(ka=fg.then(mg))}function Pw(t){ae(t)?xs.push(...t):dr&&t.id===-1?dr.splice(bs+1,0,t):t.flags&1||(xs.push(t),t.flags|=1),dg()}function td(t,e,n=wn+1){for(;n<Vt.length;n++){const r=Vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pg(t){if(xs.length){const e=[...new Set(xs)].sort((n,r)=>no(n)-no(r));if(xs.length=0,dr){dr.push(...e);return}for(dr=e,bs=0;bs<dr.length;bs++){const n=dr[bs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dr=null,bs=0}}const no=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mg(t){try{for(wn=0;wn<Vt.length;wn++){const e=Vt[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),To(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<Vt.length;wn++){const e=Vt[wn];e&&(e.flags&=-2)}wn=-1,Vt.length=0,pg(),ka=null,(Vt.length||xs.length)&&mg()}}let Kt=null,gg=null;function Na(t){const e=Kt;return Kt=t,gg=t&&t.type.__scopeId||null,e}function en(t,e=Kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&md(-1);const i=Na(e);let o;try{o=t(...s)}finally{Na(i),r._d&&md(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ln(t,e){if(Kt===null)return t;const n=vc(Kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Be]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Hn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function zr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Yn(),mn(l,n,8,[t.el,c,t,e]),Jn())}}const _g=Symbol("_vte"),yg=t=>t.__isTeleport,Fi=t=>t&&(t.disabled||t.disabled===""),nd=t=>t&&(t.defer||t.defer===""),rd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,sd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Yl=(t,e)=>{const n=t&&t.to;return tt(n)?e?e(n):null:n},vg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:f,pc:p,pbc:m,o:{insert:_,querySelector:S,createText:k,createComment:V}}=u,j=Fi(e.props);let{shapeFlag:q,children:x,dynamicChildren:D}=e;if(t==null){const z=e.el=k(""),te=e.anchor=k("");_(z,n,r),_(te,n,r);const b=(y,I)=>{q&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),f(x,y,I,s,i,o,c,l))},E=()=>{const y=e.target=Yl(e.props,S),I=wg(y,e,k,_);y&&(o!=="svg"&&rd(y)?o="svg":o!=="mathml"&&sd(y)&&(o="mathml"),j||(b(y,I),fa(e,!1)))};j&&(b(n,te),fa(e,!0)),nd(e.props)?(e.el.__isMounted=!1,Dt(()=>{E(),delete e.el.__isMounted},i)):E()}else{if(nd(e.props)&&t.el.__isMounted===!1){Dt(()=>{vg.process(t,e,n,r,s,i,o,c,l,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const z=e.anchor=t.anchor,te=e.target=t.target,b=e.targetAnchor=t.targetAnchor,E=Fi(t.props),y=E?n:te,I=E?z:b;if(o==="svg"||rd(te)?o="svg":(o==="mathml"||sd(te))&&(o="mathml"),D?(m(t.dynamicChildren,D,y,s,i,o,c),Qu(t,e,!0)):l||p(t,e,y,I,s,i,o,c,!1),j)E?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ra(e,n,z,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=Yl(e.props,S);R&&ra(e,R,null,u,0)}else E&&ra(e,te,b,u,1);fa(e,j)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:f,target:p,props:m}=t;if(p&&(s(u),s(f)),i&&s(l),o&16){const _=i||!Fi(m);for(let S=0;S<c.length;S++){const k=c[S];r(k,e,n,_,!!k.dynamicChildren)}}},move:ra,hydrate:kw};function ra(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),(!p||Fi(f))&&l&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);p&&r(c,e,n)}function kw(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:f}},p){const m=e.target=Yl(e.props,l);if(m){const _=Fi(e.props),S=m._lpa||m.firstChild;if(e.shapeFlag&16)if(_)e.anchor=p(o(t),e,c(t),n,r,s,i),e.targetStart=S,e.targetAnchor=S&&o(S);else{e.anchor=o(t);let k=S;for(;k;){if(k&&k.nodeType===8){if(k.data==="teleport start anchor")e.targetStart=k;else if(k.data==="teleport anchor"){e.targetAnchor=k,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}k=o(k)}e.targetAnchor||wg(m,e,f,u),p(S&&o(S),e,m,n,r,s,i)}fa(e,_)}return e.anchor&&o(e.anchor)}const Eg=vg;function fa(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function wg(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[_g]=i,t&&(r(s,t),r(i,t)),i}const pr=Symbol("_leaveCb"),sa=Symbol("_enterCb");function Nw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return In(()=>{t.isMounted=!0}),kg(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],Tg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},Ig=t=>{const e=t.subTree;return e.component?Ig(e.component):e},Dw={name:"BaseTransition",props:Tg,setup(t,{slots:e}){const n=Qg(),r=Nw();return()=>{const s=e.default&&Rg(e.default(),!0);if(!s||!s.length)return;const i=Ag(s),o=De(t),{mode:c}=o;if(r.isLeaving)return gl(i);const l=id(i);if(!l)return gl(i);let u=Jl(l,o,r,n,p=>u=p);l.type!==Ot&&ro(l,u);let f=n.subTree&&id(n.subTree);if(f&&f.type!==Ot&&!Jr(l,f)&&Ig(n).type!==Ot){let p=Jl(f,o,r,n);if(ro(f,p),c==="out-in"&&l.type!==Ot)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},gl(i);c==="in-out"&&l.type!==Ot?p.delayLeave=(m,_,S)=>{const k=bg(r,f);k[String(f.key)]=f,m[pr]=()=>{_(),m[pr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Ag(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ot){e=n;break}}return e}const Vw=Dw;function bg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Jl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:S,onLeaveCancelled:k,onBeforeAppear:V,onAppear:j,onAfterAppear:q,onAppearCancelled:x}=e,D=String(t.key),z=bg(n,t),te=(y,I)=>{y&&mn(y,r,9,I)},b=(y,I)=>{const R=I[1];te(y,I),ae(y)?y.every(A=>A.length<=1)&&R():y.length<=1&&R()},E={mode:o,persisted:c,beforeEnter(y){let I=l;if(!n.isMounted)if(i)I=V||l;else return;y[pr]&&y[pr](!0);const R=z[D];R&&Jr(t,R)&&R.el[pr]&&R.el[pr](),te(I,[y])},enter(y){let I=u,R=f,A=p;if(!n.isMounted)if(i)I=j||u,R=q||f,A=x||p;else return;let v=!1;const se=y[sa]=ve=>{v||(v=!0,ve?te(A,[y]):te(R,[y]),E.delayedLeave&&E.delayedLeave(),y[sa]=void 0)};I?b(I,[y,se]):se()},leave(y,I){const R=String(t.key);if(y[sa]&&y[sa](!0),n.isUnmounting)return I();te(m,[y]);let A=!1;const v=y[pr]=se=>{A||(A=!0,I(),se?te(k,[y]):te(S,[y]),y[pr]=void 0,z[R]===t&&delete z[R])};z[R]=t,_?b(_,[y,v]):v()},clone(y){const I=Jl(y,e,n,r,s);return s&&s(I),I}};return E}function gl(t){if(pc(t))return t=Cr(t),t.children=null,t}function id(t){if(!pc(t))return yg(t.type)&&t.children?Ag(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&me(n.default))return n.default()}}function ro(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ro(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===lt?(o.patchFlag&128&&s++,r=r.concat(Rg(o.children,e,c))):(e||o.type!==Ot)&&r.push(c!=null?Cr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Sg(t,e){return me(t)?ut({name:t.name},e,{setup:t}):t}function Cg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ui(t,e,n,r,s=!1){if(ae(t)){t.forEach((S,k)=>Ui(S,e&&(ae(e)?e[k]:e),n,r,s));return}if($i(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ui(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?vc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Be?c.refs={}:c.refs,p=c.setupState,m=De(p),_=p===Be?()=>!1:S=>Oe(m,S);if(u!=null&&u!==l&&(tt(u)?(f[u]=null,_(u)&&(p[u]=null)):Ct(u)&&(u.value=null)),me(l))To(l,c,12,[o,f]);else{const S=tt(l),k=Ct(l);if(S||k){const V=()=>{if(t.f){const j=S?_(l)?p[l]:f[l]:l.value;s?ae(j)&&Lu(j,i):ae(j)?j.includes(i)||j.push(i):S?(f[l]=[i],_(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else S?(f[l]=o,_(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};o?(V.id=-1,Dt(V,n)):V()}}}ac().requestIdleCallback;ac().cancelIdleCallback;const $i=t=>!!t.type.__asyncLoader,pc=t=>t.type.__isKeepAlive;function Ow(t,e){Pg(t,"a",e)}function xw(t,e){Pg(t,"da",e)}function Pg(t,e,n=St){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(mc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pc(s.parent.vnode)&&Mw(r,e,n,s),s=s.parent}}function Mw(t,e,n,r){const s=mc(e,t,r,!0);Ms(()=>{Lu(r[e],s)},n)}function mc(t,e,n=St,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Yn();const c=Io(n),l=mn(e,n,t,o);return c(),Jn(),l});return r?s.unshift(i):s.push(i),i}}const sr=t=>(e,n=St)=>{(!io||t==="sp")&&mc(t,(...r)=>e(...r),n)},Lw=sr("bm"),In=sr("m"),Fw=sr("bu"),Uw=sr("u"),kg=sr("bum"),Ms=sr("um"),$w=sr("sp"),Bw=sr("rtg"),qw=sr("rtc");function jw(t,e=St){mc("ec",t,e)}const Hw="components";function cs(t,e){return Ww(Hw,t,!0,e)||t}const zw=Symbol.for("v-ndc");function Ww(t,e,n=!0,r=!1){const s=Kt||St;if(s){const i=s.type;{const c=DT(i,!1);if(c&&(c===e||c===on(e)||c===oc(on(e))))return i}const o=od(s[t]||i[t],e)||od(s.appContext[t],e);return!o&&r?i:o}}function od(t,e){return t&&(t[e]||t[on(e)]||t[oc(on(e))])}function gc(t,e,n,r){let s;const i=n,o=ae(t);if(o||tt(t)){const c=o&&Os(t);let l=!1,u=!1;c&&(l=!rn(t),u=Sr(t),t=uc(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Ca(gt(t[f])):gt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(qe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Xl=t=>t?Yg(t)?vc(t):Xl(t.parent):null,Bi=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xl(t.parent),$root:t=>Xl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Dg(t),$forceUpdate:t=>t.f||(t.f=()=>{Wu(t.update)}),$nextTick:t=>t.n||(t.n=dc.bind(t.proxy)),$watch:t=>dT.bind(t)}),_l=(t,e)=>t!==Be&&!t.__isScriptSetup&&Oe(t,e),Kw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_l(r,e))return o[e]=1,r[e];if(s!==Be&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Be&&Oe(n,e))return o[e]=4,n[e];Zl&&(o[e]=0)}}const f=Bi[e];let p,m;if(f)return e==="$attrs"&&bt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Be&&Oe(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _l(s,e)?(s[e]=n,!0):r!==Be&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Be&&Oe(t,o)||_l(e,o)||(c=i[0])&&Oe(c,o)||Oe(r,o)||Oe(Bi,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ad(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zl=!0;function Gw(t){const e=Dg(t),n=t.proxy,r=t.ctx;Zl=!1,e.beforeCreate&&cd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:k,deactivated:V,beforeDestroy:j,beforeUnmount:q,destroyed:x,unmounted:D,render:z,renderTracked:te,renderTriggered:b,errorCaptured:E,serverPrefetch:y,expose:I,inheritAttrs:R,components:A,directives:v,filters:se}=e;if(u&&Qw(u,r,null),o)for(const Ee in o){const fe=o[Ee];me(fe)&&(r[Ee]=fe.bind(n))}if(s){const Ee=s.call(n,n);qe(Ee)&&(t.data=hc(Ee))}if(Zl=!0,i)for(const Ee in i){const fe=i[Ee],Ge=me(fe)?fe.bind(n,n):me(fe.get)?fe.get.bind(n,n):Rn,Fe=!me(fe)&&me(fe.set)?fe.set.bind(n):Rn,Ue=Ft({get:Ge,set:Fe});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Me=>Ue.value=Me})}if(c)for(const Ee in c)Ng(c[Ee],r,n,Ee);if(l){const Ee=me(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(fe=>{da(fe,Ee[fe])})}f&&cd(f,t,"c");function Te(Ee,fe){ae(fe)?fe.forEach(Ge=>Ee(Ge.bind(n))):fe&&Ee(fe.bind(n))}if(Te(Lw,p),Te(In,m),Te(Fw,_),Te(Uw,S),Te(Ow,k),Te(xw,V),Te(jw,E),Te(qw,te),Te(Bw,b),Te(kg,q),Te(Ms,D),Te($w,y),ae(I))if(I.length){const Ee=t.exposed||(t.exposed={});I.forEach(fe=>{Object.defineProperty(Ee,fe,{get:()=>n[fe],set:Ge=>n[fe]=Ge,enumerable:!0})})}else t.exposed||(t.exposed={});z&&t.render===Rn&&(t.render=z),R!=null&&(t.inheritAttrs=R),A&&(t.components=A),v&&(t.directives=v),y&&Cg(t)}function Qw(t,e,n=Rn){ae(t)&&(t=eu(t));for(const r in t){const s=t[r];let i;qe(s)?"default"in s?i=dn(s.from||r,s.default,!0):i=dn(s.from||r):i=dn(s),Ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function cd(t,e,n){mn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ng(t,e,n,r){let s=r.includes(".")?Hg(n,r):()=>n[r];if(tt(t)){const i=e[t];me(i)&&qi(s,i)}else if(me(t))qi(s,t.bind(n));else if(qe(t))if(ae(t))t.forEach(i=>Ng(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&qi(s,i,t)}}function Dg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Da(l,u,o,!0)),Da(l,e,o)),qe(e)&&i.set(e,l),l}function Da(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Da(t,i,n,!0),s&&s.forEach(o=>Da(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Yw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Yw={data:ld,props:ud,emits:ud,methods:Si,computed:Si,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Si,directives:Si,watch:Xw,provide:ld,inject:Jw};function ld(t,e){return e?t?function(){return ut(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function Jw(t,e){return Si(eu(t),eu(e))}function eu(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Si(t,e){return t?ut(Object.create(null),t,e):e}function ud(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:ut(Object.create(null),ad(t),ad(e??{})):e}function Xw(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=Nt(t[r],e[r]);return n}function Vg(){return{app:null,config:{isNativeTag:UE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zw=0;function eT(t,e){return function(r,s=null){me(r)||(r=ut({},r)),s!=null&&!qe(s)&&(s=null);const i=Vg(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Zw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:OT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&me(f.install)?(o.add(f),f.install(u,...p)):me(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||Ke(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,vc(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(mn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Ls;Ls=u;try{return f()}finally{Ls=p}}};return u}}let Ls=null;function da(t,e){if(St){let n=St.provides;const r=St.parent&&St.parent.provides;r===n&&(n=St.provides=Object.create(r)),n[t]=e}}function dn(t,e,n=!1){const r=Qg();if(r||Ls){let s=Ls?Ls._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}const Og={},xg=()=>Object.create(Og),Mg=t=>Object.getPrototypeOf(t)===Og;function tT(t,e,n,r=!1){const s={},i=xg();t.propsDefaults=Object.create(null),Lg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=De(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(_c(t.emitsOptions,m))continue;const _=e[m];if(l)if(Oe(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=on(m);s[S]=tu(l,c,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Lg(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Oe(e,p)&&((f=xr(p))===p||!Oe(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=tu(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&jn(t.attrs,"set","")}function Lg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(xi(l))continue;const u=e[l];let f;s&&Oe(s,f=on(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:_c(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=De(n),u=c||Be;for(let f=0;f<i.length;f++){const p=i[f];n[p]=tu(s,l,p,u[p],t,!Oe(u,p))}}return o}function tu(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Oe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&me(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Io(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===xr(n))&&(r=!0))}return r}const rT=new WeakMap;function Fg(t,e,n=!1){const r=n?rT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!me(t)){const f=p=>{l=!0;const[m,_]=Fg(p,e,!0);ut(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return qe(t)&&r.set(t,Ds),Ds;if(ae(i))for(let f=0;f<i.length;f++){const p=on(i[f]);hd(p)&&(o[p]=Be)}else if(i)for(const f in i){const p=on(f);if(hd(p)){const m=i[f],_=o[p]=ae(m)||me(m)?{type:m}:ut({},m),S=_.type;let k=!1,V=!0;if(ae(S))for(let j=0;j<S.length;++j){const q=S[j],x=me(q)&&q.name;if(x==="Boolean"){k=!0;break}else x==="String"&&(V=!1)}else k=me(S)&&S.name==="Boolean";_[0]=k,_[1]=V,(k||Oe(_,"default"))&&c.push(p)}}const u=[o,c];return qe(t)&&r.set(t,u),u}function hd(t){return t[0]!=="$"&&!xi(t)}const Ku=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Gu=t=>ae(t)?t.map(An):[An(t)],sT=(t,e,n)=>{if(e._n)return e;const r=en((...s)=>Gu(e(...s)),n);return r._c=!1,r},Ug=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ku(s))continue;const i=t[s];if(me(i))e[s]=sT(s,i,r);else if(i!=null){const o=Gu(i);e[s]=()=>o}}},$g=(t,e)=>{const n=Gu(e);t.slots.default=()=>n},Bg=(t,e,n)=>{for(const r in e)(n||!Ku(r))&&(t[r]=e[r])},iT=(t,e,n)=>{const r=t.slots=xg();if(t.vnode.shapeFlag&32){const s=e.__;s&&zl(r,"__",s,!0);const i=e._;i?(Bg(r,e,n),n&&zl(r,"_",i,!0)):Ug(e,r)}else e&&$g(t,e)},oT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Be;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Bg(s,e,n):(i=!e.$stable,Ug(e,s)),o=e}else e&&($g(t,e),o={default:1});if(i)for(const c in s)!Ku(c)&&o[c]==null&&delete s[c]},Dt=ET;function aT(t){return cT(t)}function cT(t,e){const n=ac();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=Rn,insertStaticContent:S}=t,k=(w,T,C,F=null,B=null,U=null,Y=void 0,K=null,W=!!T.dynamicChildren)=>{if(w===T)return;w&&!Jr(w,T)&&(F=L(w),Me(w,B,U,!0),w=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:H,ref:ie,shapeFlag:Q}=T;switch(H){case yc:V(w,T,C,F);break;case Ot:j(w,T,C,F);break;case pa:w==null&&q(T,C,F,Y);break;case lt:A(w,T,C,F,B,U,Y,K,W);break;default:Q&1?z(w,T,C,F,B,U,Y,K,W):Q&6?v(w,T,C,F,B,U,Y,K,W):(Q&64||Q&128)&&H.process(w,T,C,F,B,U,Y,K,W,ne)}ie!=null&&B?Ui(ie,w&&w.ref,U,T||w,!T):ie==null&&w&&w.ref!=null&&Ui(w.ref,null,U,w,!0)},V=(w,T,C,F)=>{if(w==null)r(T.el=c(T.children),C,F);else{const B=T.el=w.el;T.children!==w.children&&u(B,T.children)}},j=(w,T,C,F)=>{w==null?r(T.el=l(T.children||""),C,F):T.el=w.el},q=(w,T,C,F)=>{[w.el,w.anchor]=S(w.children,T,C,F,w.el,w.anchor)},x=({el:w,anchor:T},C,F)=>{let B;for(;w&&w!==T;)B=m(w),r(w,C,F),w=B;r(T,C,F)},D=({el:w,anchor:T})=>{let C;for(;w&&w!==T;)C=m(w),s(w),w=C;s(T)},z=(w,T,C,F,B,U,Y,K,W)=>{T.type==="svg"?Y="svg":T.type==="math"&&(Y="mathml"),w==null?te(T,C,F,B,U,Y,K,W):y(w,T,B,U,Y,K,W)},te=(w,T,C,F,B,U,Y,K)=>{let W,H;const{props:ie,shapeFlag:Q,transition:re,dirs:he}=w;if(W=w.el=o(w.type,U,ie&&ie.is,ie),Q&8?f(W,w.children):Q&16&&E(w.children,W,null,F,B,yl(w,U),Y,K),he&&zr(w,null,F,"created"),b(W,w,w.scopeId,Y,F),ie){for(const ye in ie)ye!=="value"&&!xi(ye)&&i(W,ye,null,ie[ye],U,F);"value"in ie&&i(W,"value",null,ie.value,U),(H=ie.onVnodeBeforeMount)&&En(H,F,w)}he&&zr(w,null,F,"beforeMount");const ce=lT(B,re);ce&&re.beforeEnter(W),r(W,T,C),((H=ie&&ie.onVnodeMounted)||ce||he)&&Dt(()=>{H&&En(H,F,w),ce&&re.enter(W),he&&zr(w,null,F,"mounted")},B)},b=(w,T,C,F,B)=>{if(C&&_(w,C),F)for(let U=0;U<F.length;U++)_(w,F[U]);if(B){let U=B.subTree;if(T===U||Wg(U.type)&&(U.ssContent===T||U.ssFallback===T)){const Y=B.vnode;b(w,Y,Y.scopeId,Y.slotScopeIds,B.parent)}}},E=(w,T,C,F,B,U,Y,K,W=0)=>{for(let H=W;H<w.length;H++){const ie=w[H]=K?mr(w[H]):An(w[H]);k(null,ie,T,C,F,B,U,Y,K)}},y=(w,T,C,F,B,U,Y)=>{const K=T.el=w.el;let{patchFlag:W,dynamicChildren:H,dirs:ie}=T;W|=w.patchFlag&16;const Q=w.props||Be,re=T.props||Be;let he;if(C&&Wr(C,!1),(he=re.onVnodeBeforeUpdate)&&En(he,C,T,w),ie&&zr(T,w,C,"beforeUpdate"),C&&Wr(C,!0),(Q.innerHTML&&re.innerHTML==null||Q.textContent&&re.textContent==null)&&f(K,""),H?I(w.dynamicChildren,H,K,C,F,yl(T,B),U):Y||fe(w,T,K,null,C,F,yl(T,B),U,!1),W>0){if(W&16)R(K,Q,re,C,B);else if(W&2&&Q.class!==re.class&&i(K,"class",null,re.class,B),W&4&&i(K,"style",Q.style,re.style,B),W&8){const ce=T.dynamicProps;for(let ye=0;ye<ce.length;ye++){const Ce=ce[ye],ht=Q[Ce],ft=re[Ce];(ft!==ht||Ce==="value")&&i(K,Ce,ht,ft,B,C)}}W&1&&w.children!==T.children&&f(K,T.children)}else!Y&&H==null&&R(K,Q,re,C,B);((he=re.onVnodeUpdated)||ie)&&Dt(()=>{he&&En(he,C,T,w),ie&&zr(T,w,C,"updated")},F)},I=(w,T,C,F,B,U,Y)=>{for(let K=0;K<T.length;K++){const W=w[K],H=T[K],ie=W.el&&(W.type===lt||!Jr(W,H)||W.shapeFlag&198)?p(W.el):C;k(W,H,ie,null,F,B,U,Y,!0)}},R=(w,T,C,F,B)=>{if(T!==C){if(T!==Be)for(const U in T)!xi(U)&&!(U in C)&&i(w,U,T[U],null,B,F);for(const U in C){if(xi(U))continue;const Y=C[U],K=T[U];Y!==K&&U!=="value"&&i(w,U,K,Y,B,F)}"value"in C&&i(w,"value",T.value,C.value,B)}},A=(w,T,C,F,B,U,Y,K,W)=>{const H=T.el=w?w.el:c(""),ie=T.anchor=w?w.anchor:c("");let{patchFlag:Q,dynamicChildren:re,slotScopeIds:he}=T;he&&(K=K?K.concat(he):he),w==null?(r(H,C,F),r(ie,C,F),E(T.children||[],C,ie,B,U,Y,K,W)):Q>0&&Q&64&&re&&w.dynamicChildren?(I(w.dynamicChildren,re,C,B,U,Y,K),(T.key!=null||B&&T===B.subTree)&&Qu(w,T,!0)):fe(w,T,C,ie,B,U,Y,K,W)},v=(w,T,C,F,B,U,Y,K,W)=>{T.slotScopeIds=K,w==null?T.shapeFlag&512?B.ctx.activate(T,C,F,Y,W):se(T,C,F,B,U,Y,W):ve(w,T,W)},se=(w,T,C,F,B,U,Y)=>{const K=w.component=ST(w,F,B);if(pc(w)&&(K.ctx.renderer=ne),CT(K,!1,Y),K.asyncDep){if(B&&B.registerDep(K,Te,Y),!w.el){const W=K.subTree=Ke(Ot);j(null,W,T,C),w.placeholder=W.el}}else Te(K,w,T,C,B,U,Y)},ve=(w,T,C)=>{const F=T.component=w.component;if(yT(w,T,C))if(F.asyncDep&&!F.asyncResolved){Ee(F,T,C);return}else F.next=T,F.update();else T.el=w.el,F.vnode=T},Te=(w,T,C,F,B,U,Y)=>{const K=()=>{if(w.isMounted){let{next:Q,bu:re,u:he,parent:ce,vnode:ye}=w;{const Et=qg(w);if(Et){Q&&(Q.el=ye.el,Ee(w,Q,Y)),Et.asyncDep.then(()=>{w.isUnmounted||K()});return}}let Ce=Q,ht;Wr(w,!1),Q?(Q.el=ye.el,Ee(w,Q,Y)):Q=ye,re&&ha(re),(ht=Q.props&&Q.props.onVnodeBeforeUpdate)&&En(ht,ce,Q,ye),Wr(w,!0);const ft=dd(w),Jt=w.subTree;w.subTree=ft,k(Jt,ft,p(Jt.el),L(Jt),w,B,U),Q.el=ft.el,Ce===null&&vT(w,ft.el),he&&Dt(he,B),(ht=Q.props&&Q.props.onVnodeUpdated)&&Dt(()=>En(ht,ce,Q,ye),B)}else{let Q;const{el:re,props:he}=T,{bm:ce,m:ye,parent:Ce,root:ht,type:ft}=w,Jt=$i(T);Wr(w,!1),ce&&ha(ce),!Jt&&(Q=he&&he.onVnodeBeforeMount)&&En(Q,Ce,T),Wr(w,!0);{ht.ce&&ht.ce._def.shadowRoot!==!1&&ht.ce._injectChildStyle(ft);const Et=w.subTree=dd(w);k(null,Et,C,F,w,B,U),T.el=Et.el}if(ye&&Dt(ye,B),!Jt&&(Q=he&&he.onVnodeMounted)){const Et=T;Dt(()=>En(Q,Ce,Et),B)}(T.shapeFlag&256||Ce&&$i(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&w.a&&Dt(w.a,B),w.isMounted=!0,T=C=F=null}};w.scope.on();const W=w.effect=new Gm(K);w.scope.off();const H=w.update=W.run.bind(W),ie=w.job=W.runIfDirty.bind(W);ie.i=w,ie.id=w.uid,W.scheduler=()=>Wu(ie),Wr(w,!0),H()},Ee=(w,T,C)=>{T.component=w;const F=w.vnode.props;w.vnode=T,w.next=null,nT(w,T.props,F,C),oT(w,T.children,C),Yn(),td(w),Jn()},fe=(w,T,C,F,B,U,Y,K,W=!1)=>{const H=w&&w.children,ie=w?w.shapeFlag:0,Q=T.children,{patchFlag:re,shapeFlag:he}=T;if(re>0){if(re&128){Fe(H,Q,C,F,B,U,Y,K,W);return}else if(re&256){Ge(H,Q,C,F,B,U,Y,K,W);return}}he&8?(ie&16&&vt(H,B,U),Q!==H&&f(C,Q)):ie&16?he&16?Fe(H,Q,C,F,B,U,Y,K,W):vt(H,B,U,!0):(ie&8&&f(C,""),he&16&&E(Q,C,F,B,U,Y,K,W))},Ge=(w,T,C,F,B,U,Y,K,W)=>{w=w||Ds,T=T||Ds;const H=w.length,ie=T.length,Q=Math.min(H,ie);let re;for(re=0;re<Q;re++){const he=T[re]=W?mr(T[re]):An(T[re]);k(w[re],he,C,null,B,U,Y,K,W)}H>ie?vt(w,B,U,!0,!1,Q):E(T,C,F,B,U,Y,K,W,Q)},Fe=(w,T,C,F,B,U,Y,K,W)=>{let H=0;const ie=T.length;let Q=w.length-1,re=ie-1;for(;H<=Q&&H<=re;){const he=w[H],ce=T[H]=W?mr(T[H]):An(T[H]);if(Jr(he,ce))k(he,ce,C,null,B,U,Y,K,W);else break;H++}for(;H<=Q&&H<=re;){const he=w[Q],ce=T[re]=W?mr(T[re]):An(T[re]);if(Jr(he,ce))k(he,ce,C,null,B,U,Y,K,W);else break;Q--,re--}if(H>Q){if(H<=re){const he=re+1,ce=he<ie?T[he].el:F;for(;H<=re;)k(null,T[H]=W?mr(T[H]):An(T[H]),C,ce,B,U,Y,K,W),H++}}else if(H>re)for(;H<=Q;)Me(w[H],B,U,!0),H++;else{const he=H,ce=H,ye=new Map;for(H=ce;H<=re;H++){const dt=T[H]=W?mr(T[H]):An(T[H]);dt.key!=null&&ye.set(dt.key,H)}let Ce,ht=0;const ft=re-ce+1;let Jt=!1,Et=0;const or=new Array(ft);for(H=0;H<ft;H++)or[H]=0;for(H=he;H<=Q;H++){const dt=w[H];if(ht>=ft){Me(dt,B,U,!0);continue}let Xt;if(dt.key!=null)Xt=ye.get(dt.key);else for(Ce=ce;Ce<=re;Ce++)if(or[Ce-ce]===0&&Jr(dt,T[Ce])){Xt=Ce;break}Xt===void 0?Me(dt,B,U,!0):(or[Xt-ce]=H+1,Xt>=Et?Et=Xt:Jt=!0,k(dt,T[Xt],C,null,B,U,Y,K,W),ht++)}const hi=Jt?uT(or):Ds;for(Ce=hi.length-1,H=ft-1;H>=0;H--){const dt=ce+H,Xt=T[dt],Fo=T[dt+1],vs=dt+1<ie?Fo.el||Fo.placeholder:F;or[H]===0?k(null,Xt,C,vs,B,U,Y,K,W):Jt&&(Ce<0||H!==hi[Ce]?Ue(Xt,C,vs,2):Ce--)}}},Ue=(w,T,C,F,B=null)=>{const{el:U,type:Y,transition:K,children:W,shapeFlag:H}=w;if(H&6){Ue(w.component.subTree,T,C,F);return}if(H&128){w.suspense.move(T,C,F);return}if(H&64){Y.move(w,T,C,ne);return}if(Y===lt){r(U,T,C);for(let Q=0;Q<W.length;Q++)Ue(W[Q],T,C,F);r(w.anchor,T,C);return}if(Y===pa){x(w,T,C);return}if(F!==2&&H&1&&K)if(F===0)K.beforeEnter(U),r(U,T,C),Dt(()=>K.enter(U),B);else{const{leave:Q,delayLeave:re,afterLeave:he}=K,ce=()=>{w.ctx.isUnmounted?s(U):r(U,T,C)},ye=()=>{Q(U,()=>{ce(),he&&he()})};re?re(U,ce,ye):ye()}else r(U,T,C)},Me=(w,T,C,F=!1,B=!1)=>{const{type:U,props:Y,ref:K,children:W,dynamicChildren:H,shapeFlag:ie,patchFlag:Q,dirs:re,cacheIndex:he}=w;if(Q===-2&&(B=!1),K!=null&&(Yn(),Ui(K,null,C,w,!0),Jn()),he!=null&&(T.renderCache[he]=void 0),ie&256){T.ctx.deactivate(w);return}const ce=ie&1&&re,ye=!$i(w);let Ce;if(ye&&(Ce=Y&&Y.onVnodeBeforeUnmount)&&En(Ce,T,w),ie&6)xt(w.component,C,F);else{if(ie&128){w.suspense.unmount(C,F);return}ce&&zr(w,null,T,"beforeUnmount"),ie&64?w.type.remove(w,T,C,ne,F):H&&!H.hasOnce&&(U!==lt||Q>0&&Q&64)?vt(H,T,C,!1,!0):(U===lt&&Q&384||!B&&ie&16)&&vt(W,T,C),F&&Le(w)}(ye&&(Ce=Y&&Y.onVnodeUnmounted)||ce)&&Dt(()=>{Ce&&En(Ce,T,w),ce&&zr(w,null,T,"unmounted")},C)},Le=w=>{const{type:T,el:C,anchor:F,transition:B}=w;if(T===lt){zt(C,F);return}if(T===pa){D(w);return}const U=()=>{s(C),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(w.shapeFlag&1&&B&&!B.persisted){const{leave:Y,delayLeave:K}=B,W=()=>Y(C,U);K?K(w.el,U,W):W()}else U()},zt=(w,T)=>{let C;for(;w!==T;)C=m(w),s(w),w=C;s(T)},xt=(w,T,C)=>{const{bum:F,scope:B,job:U,subTree:Y,um:K,m:W,a:H,parent:ie,slots:{__:Q}}=w;fd(W),fd(H),F&&ha(F),ie&&ae(Q)&&Q.forEach(re=>{ie.renderCache[re]=void 0}),B.stop(),U&&(U.flags|=8,Me(Y,w,T,C)),K&&Dt(K,T),Dt(()=>{w.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},vt=(w,T,C,F=!1,B=!1,U=0)=>{for(let Y=U;Y<w.length;Y++)Me(w[Y],T,C,F,B)},L=w=>{if(w.shapeFlag&6)return L(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const T=m(w.anchor||w.el),C=T&&T[_g];return C?m(C):T};let Z=!1;const X=(w,T,C)=>{w==null?T._vnode&&Me(T._vnode,null,null,!0):k(T._vnode||null,w,T,null,null,null,C),T._vnode=w,Z||(Z=!0,td(),pg(),Z=!1)},ne={p:k,um:Me,m:Ue,r:Le,mt:se,mc:E,pc:fe,pbc:I,n:L,o:t};return{render:X,hydrate:void 0,createApp:eT(X)}}function yl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qu(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=mr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Qu(o,c)),c.type===yc&&(c.el=o.el),c.type===Ot&&!c.el&&(c.el=o.el)}}function uT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function qg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qg(e)}function fd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hT=Symbol.for("v-scx"),fT=()=>dn(hT);function qi(t,e,n){return jg(t,e,n)}function jg(t,e,n=Be){const{immediate:r,deep:s,flush:i,once:o}=n,c=ut({},n),l=e&&r||!e&&i!=="post";let u;if(io){if(i==="sync"){const _=fT();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Rn,_.resume=Rn,_.pause=Rn,_}}const f=St;c.call=(_,S,k)=>mn(_,f,S,k);let p=!1;i==="post"?c.scheduler=_=>{Dt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():Wu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=Rw(t,e,c);return io&&(u?u.push(m):l&&m()),m}function dT(t,e,n){const r=this.proxy,s=tt(t)?t.includes(".")?Hg(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=Io(this),c=jg(s,i.bind(r),n);return o(),c}function Hg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const pT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${on(e)}Modifiers`]||t[`${xr(e)}Modifiers`];function mT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),o=i&&pT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>tt(f)?f.trim():f)),o.number&&(s=n.map(Sa)));let c,l=r[c=hl(e)]||r[c=hl(on(e))];!l&&i&&(l=r[c=hl(xr(e))]),l&&mn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,mn(u,t,6,s)}}function zg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!me(t)){const l=u=>{const f=zg(u,e,!0);f&&(c=!0,ut(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(qe(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):ut(o,i),qe(t)&&r.set(t,o),o)}function _c(t,e){return!t||!rc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,xr(e))||Oe(t,e))}function dd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:S,inheritAttrs:k}=t,V=Na(t);let j,q;try{if(n.shapeFlag&4){const D=s||r,z=D;j=An(u.call(z,D,f,p,_,m,S)),q=c}else{const D=e;j=An(D.length>1?D(p,{attrs:c,slots:o,emit:l}):D(p,null)),q=e.props?c:gT(c)}}catch(D){ji.length=0,fc(D,t,1),j=Ke(Ot)}let x=j;if(q&&k!==!1){const D=Object.keys(q),{shapeFlag:z}=x;D.length&&z&7&&(i&&D.some(Mu)&&(q=_T(q,i)),x=Cr(x,q,!1,!0))}return n.dirs&&(x=Cr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&ro(x,n.transition),j=x,Na(V),j}const gT=t=>{let e;for(const n in t)(n==="class"||n==="style"||rc(n))&&((e||(e={}))[n]=t[n]);return e},_T=(t,e)=>{const n={};for(const r in t)(!Mu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?pd(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!_c(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?pd(r,o,u):!0:!!o;return!1}function pd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_c(n,i))return!0}return!1}function vT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wg=t=>t.__isSuspense;function ET(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):Pw(t)}const lt=Symbol.for("v-fgt"),yc=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),ji=[];let Gt=null;function pe(t=!1){ji.push(Gt=t?null:[])}function wT(){ji.pop(),Gt=ji[ji.length-1]||null}let so=1;function md(t,e=!1){so+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function Kg(t){return t.dynamicChildren=so>0?Gt||Ds:null,wT(),so>0&&Gt&&Gt.push(t),t}function Ie(t,e,n,r,s,i){return Kg(N(t,e,n,r,s,i,!0))}function ss(t,e,n,r,s){return Kg(Ke(t,e,n,r,s,!0))}function Va(t){return t?t.__v_isVNode===!0:!1}function Jr(t,e){return t.type===e.type&&t.key===e.key}const Gg=({key:t})=>t??null,ma=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||Ct(t)||me(t)?{i:Kt,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gg(e),ref:e&&ma(e),scopeId:gg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Kt};return c?(Yu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),so>0&&!o&&Gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Gt.push(l),l}const Ke=TT;function TT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zw)&&(t=Ot),Va(t)){const c=Cr(t,e,!0);return n&&Yu(c,n),so>0&&!i&&Gt&&(c.shapeFlag&6?Gt[Gt.indexOf(t)]=c:Gt.push(c)),c.patchFlag=-2,c}if(VT(t)&&(t=t.__vccOpts),e){e=IT(e);let{class:c,style:l}=e;c&&!tt(c)&&(e.class=Tr(c)),qe(l)&&(zu(l)&&!ae(l)&&(l=ut({},l)),e.style=cc(l))}const o=tt(t)?1:Wg(t)?128:yg(t)?64:qe(t)?4:me(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function IT(t){return t?zu(t)||Mg(t)?ut({},t):t:null}function Cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?AT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Gg(u),ref:e&&e.ref?n&&i?ae(i)?i.concat(ma(e)):[i,ma(e)]:ma(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cr(t.ssContent),ssFallback:t.ssFallback&&Cr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ro(f,l.clone(f)),f}function _e(t=" ",e=0){return Ke(yc,null,t,e)}function _D(t,e){const n=Ke(pa,null,t);return n.staticCount=e,n}function Bt(t="",e=!1){return e?(pe(),ss(Ot,null,t)):Ke(Ot,null,t)}function An(t){return t==null||typeof t=="boolean"?Ke(Ot):ae(t)?Ke(lt,null,t.slice()):Va(t)?mr(t):Ke(yc,null,String(t))}function mr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cr(t)}function Yu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Mg(e)?e._ctx=Kt:s===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Kt},n=32):(e=String(e),r&64?(n=16,e=[_e(e)]):n=8);t.children=e,t.shapeFlag|=n}function AT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tr([e.class,r.class]));else if(s==="style")e.style=cc([e.style,r.style]);else if(rc(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function En(t,e,n,r=null){mn(t,e,7,[n,r])}const bT=Vg();let RT=0;function ST(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||bT,i={uid:RT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ZE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fg(r,s),emitsOptions:zg(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=mT.bind(null,i),t.ce&&t.ce(i),i}let St=null;const Qg=()=>St||Kt;let Oa,nu;{const t=ac(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oa=e("__VUE_INSTANCE_SETTERS__",n=>St=n),nu=e("__VUE_SSR_SETTERS__",n=>io=n)}const Io=t=>{const e=St;return Oa(t),t.scope.on(),()=>{t.scope.off(),Oa(e)}},gd=()=>{St&&St.scope.off(),Oa(null)};function Yg(t){return t.vnode.shapeFlag&4}let io=!1;function CT(t,e=!1,n=!1){e&&nu(e);const{props:r,children:s}=t.vnode,i=Yg(t);tT(t,r,i,e),iT(t,s,n||e);const o=i?PT(t,e):void 0;return e&&nu(!1),o}function PT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Kw);const{setup:r}=n;if(r){Yn();const s=t.setupContext=r.length>1?NT(t):null,i=Io(t),o=To(r,t,0,[t.props,s]),c=qm(o);if(Jn(),i(),(c||t.sp)&&!$i(t)&&Cg(t),c){if(o.then(gd,gd),e)return o.then(l=>{_d(t,l)}).catch(l=>{fc(l,t,0)});t.asyncDep=o}else _d(t,o)}else Jg(t)}function _d(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=hg(e)),Jg(t)}function Jg(t,e,n){const r=t.type;t.render||(t.render=r.render||Rn);{const s=Io(t);Yn();try{Gw(t)}finally{Jn(),s()}}}const kT={get(t,e){return bt(t,"get",""),t[e]}};function NT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kT),slots:t.slots,emit:t.emit,expose:e}}function vc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hg(vw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bi)return Bi[n](t)},has(e,n){return n in e||n in Bi}})):t.proxy}function DT(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function VT(t){return me(t)&&"__vccOpts"in t}const Ft=(t,e)=>Aw(t,e,io);function Ju(t,e,n){const r=arguments.length;return r===2?qe(e)&&!ae(e)?Va(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Va(n)&&(n=[n]),Ke(t,e,n))}const OT="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ru;const yd=typeof window<"u"&&window.trustedTypes;if(yd)try{ru=yd.createPolicy("vue",{createHTML:t=>t})}catch{}const Xg=ru?t=>ru.createHTML(t):t=>t,xT="http://www.w3.org/2000/svg",MT="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,vd=qn&&qn.createElement("template"),LT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?qn.createElementNS(xT,t):e==="mathml"?qn.createElementNS(MT,t):n?qn.createElement(t,{is:n}):qn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vd.innerHTML=Xg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=vd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ur="transition",bi="animation",oo=Symbol("_vtc"),Zg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},FT=ut({},Tg,Zg),UT=t=>(t.displayName="Transition",t.props=FT,t),yD=UT((t,{slots:e})=>Ju(Vw,$T(t),e)),Kr=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ed=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function $T(t){const e={};for(const A in t)A in Zg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,S=BT(s),k=S&&S[0],V=S&&S[1],{onBeforeEnter:j,onEnter:q,onEnterCancelled:x,onLeave:D,onLeaveCancelled:z,onBeforeAppear:te=j,onAppear:b=q,onAppearCancelled:E=x}=e,y=(A,v,se,ve)=>{A._enterCancelled=ve,Gr(A,v?f:c),Gr(A,v?u:o),se&&se()},I=(A,v)=>{A._isLeaving=!1,Gr(A,p),Gr(A,_),Gr(A,m),v&&v()},R=A=>(v,se)=>{const ve=A?b:q,Te=()=>y(v,A,se);Kr(ve,[v,Te]),wd(()=>{Gr(v,A?l:i),$n(v,A?f:c),Ed(ve)||Td(v,r,k,Te)})};return ut(e,{onBeforeEnter(A){Kr(j,[A]),$n(A,i),$n(A,o)},onBeforeAppear(A){Kr(te,[A]),$n(A,l),$n(A,u)},onEnter:R(!1),onAppear:R(!0),onLeave(A,v){A._isLeaving=!0;const se=()=>I(A,v);$n(A,p),A._enterCancelled?($n(A,m),bd()):(bd(),$n(A,m)),wd(()=>{A._isLeaving&&(Gr(A,p),$n(A,_),Ed(D)||Td(A,r,V,se))}),Kr(D,[A,se])},onEnterCancelled(A){y(A,!1,void 0,!0),Kr(x,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),Kr(E,[A])},onLeaveCancelled(A){I(A),Kr(z,[A])}})}function BT(t){if(t==null)return null;if(qe(t))return[vl(t.enter),vl(t.leave)];{const e=vl(t);return[e,e]}}function vl(t){return HE(t)}function $n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[oo]||(t[oo]=new Set)).add(e)}function Gr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[oo];n&&(n.delete(e),n.size||(t[oo]=void 0))}function wd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qT=0;function Td(t,e,n,r){const s=t._endId=++qT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=jT(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function jT(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${ur}Delay`),i=r(`${ur}Duration`),o=Id(s,i),c=r(`${bi}Delay`),l=r(`${bi}Duration`),u=Id(c,l);let f=null,p=0,m=0;e===ur?o>0&&(f=ur,p=o,m=i.length):e===bi?u>0&&(f=bi,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?ur:bi:null,m=f?f===ur?i.length:l.length:0);const _=f===ur&&/\b(transform|all)(,|$)/.test(r(`${ur}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:_}}function Id(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ad(n)+Ad(t[r])))}function Ad(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function bd(){return document.body.offsetHeight}function HT(t,e,n){const r=t[oo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Rd=Symbol("_vod"),zT=Symbol("_vsh"),WT=Symbol(""),KT=/(^|;)\s*display\s*:/;function GT(t,e,n){const r=t.style,s=tt(n);let i=!1;if(n&&!s){if(e)if(tt(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ga(r,c,"")}else for(const o in e)n[o]==null&&ga(r,o,"");for(const o in n)o==="display"&&(i=!0),ga(r,o,n[o])}else if(s){if(e!==n){const o=r[WT];o&&(n+=";"+o),r.cssText=n,i=KT.test(n)}}else e&&t.removeAttribute("style");Rd in t&&(t[Rd]=i?r.display:"",t[zT]&&(r.display="none"))}const Sd=/\s*!important$/;function ga(t,e,n){if(ae(n))n.forEach(r=>ga(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=QT(t,e);Sd.test(n)?t.setProperty(xr(r),n.replace(Sd,""),"important"):t[r]=n}}const Cd=["Webkit","Moz","ms"],El={};function QT(t,e){const n=El[e];if(n)return n;let r=on(e);if(r!=="filter"&&r in t)return El[e]=r;r=oc(r);for(let s=0;s<Cd.length;s++){const i=Cd[s]+r;if(i in t)return El[e]=i}return e}const Pd="http://www.w3.org/1999/xlink";function kd(t,e,n,r,s,i=YE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Pd,e.slice(6,e.length)):t.setAttributeNS(Pd,e,n):n==null||i&&!zm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Vn(n)?String(n):n)}function Nd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=zm(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Xr(t,e,n,r){t.addEventListener(e,n,r)}function YT(t,e,n,r){t.removeEventListener(e,n,r)}const Dd=Symbol("_vei");function JT(t,e,n,r,s=null){const i=t[Dd]||(t[Dd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=XT(e);if(r){const u=i[e]=tI(r,s);Xr(t,c,u,l)}else o&&(YT(t,c,o,l),i[e]=void 0)}}const Vd=/(?:Once|Passive|Capture)$/;function XT(t){let e;if(Vd.test(t)){e={};let r;for(;r=t.match(Vd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xr(t.slice(2)),e]}let wl=0;const ZT=Promise.resolve(),eI=()=>wl||(ZT.then(()=>wl=0),wl=Date.now());function tI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;mn(nI(r,n.value),e,5,[r])};return n.value=t,n.attached=eI(),n}function nI(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Od=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?HT(t,r,o):e==="style"?GT(t,n,r):rc(e)?Mu(e)||JT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sI(t,e,r,o))?(Nd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!tt(r))?Nd(t,on(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kd(t,e,r,o))};function sI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Od(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Od(e)&&tt(n)?!1:e in t}const xa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>ha(e,n):e};function iI(t){t.target.composing=!0}function xd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fs=Symbol("_assign"),un={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Fs]=xa(s);const i=r||s.props&&s.props.type==="number";Xr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Sa(c)),t[Fs](c)}),n&&Xr(t,"change",()=>{t.value=t.value.trim()}),e||(Xr(t,"compositionstart",iI),Xr(t,"compositionend",xd),Xr(t,"change",xd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Fs]=xa(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Sa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},vD={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=sc(e);Xr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Sa(Ma(o)):Ma(o));t[Fs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,dc(()=>{t._assigning=!1})}),t[Fs]=xa(r)},mounted(t,{value:e}){Md(t,e)},beforeUpdate(t,e,n){t[Fs]=xa(n)},updated(t,{value:e}){t._assigning||Md(t,e)}};function Md(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!sc(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Ma(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=XE(e,c)>-1}else o.selected=e.has(c);else if(lc(Ma(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ma(t){return"_value"in t?t._value:t.value}const oI=["ctrl","shift","alt","meta"],aI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>oI.some(n=>t[`${n}Key`]&&!e.includes(n))},Ec=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=aI[e[o]];if(c&&c(s,e))return}return t(s,...i)})},cI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lI=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=xr(s.key);if(e.some(o=>o===i||cI[o]===i))return t(s)})},uI=ut({patchProp:rI},LT);let Ld;function hI(){return Ld||(Ld=aT(uI))}const fI=(...t)=>{const e=hI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=pI(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,dI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function dI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function pI(t){return tt(t)?document.querySelector(t):t}const mI=()=>{};var Fd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},t_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new _I;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yI=function(t){const e=e_(t);return t_.encodeByteArray(e,!0)},La=function(t){return yI(t).replace(/\./g,"")},n_=function(t){try{return t_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=()=>vI().__FIREBASE_DEFAULTS__,wI=()=>{if(typeof process>"u"||typeof Fd>"u")return;const t=Fd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&n_(t[1]);return e&&JSON.parse(e)},wc=()=>{try{return mI()||EI()||wI()||TI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r_=t=>wc()?.emulatorHosts?.[t],II=t=>{const e=r_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},s_=()=>wc()?.config,i_=t=>wc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function o_(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[La(JSON.stringify(n)),La(JSON.stringify(o)),""].join(".")}const Hi={};function RI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Hi))Hi[e]?t.emulator.push(e):t.prod.push(e);return t}function SI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ud=!1;function a_(t,e){if(typeof window>"u"||typeof document>"u"||!ei(window.location.host)||Hi[t]===e||Hi[t]||Ud)return;Hi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=RI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ud=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=SI(r),_=n("text"),S=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),V=document.getElementById(k)||document.createElement("a"),j=n("preprendIcon"),q=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const x=m.element;c(x),f(V,k);const D=u();l(q,j),x.append(q,S,V,D),document.body.appendChild(x)}i?(S.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function PI(){const t=wc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function c_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DI(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VI(){return!PI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function l_(){try{return typeof indexedDB=="object"}catch{return!1}}function u_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function OI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xI,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?MI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vn(s,c,r)}}function MI(t,e){return t.replace(LI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LI=/\{\$([^}]+)}/g;function FI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if($d(i)&&$d(o)){if(!Xn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $d(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UI(t,e){const n=new $I(t,e);return n.subscribe.bind(n)}class $I{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tl),s.error===void 0&&(s.error=Tl),s.complete===void 0&&(s.complete=Tl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1e3,jI=2,HI=14400*1e3,zI=.5;function Bd(t,e=qI,n=jI){const r=e*Math.pow(n,t),s=Math.round(zI*r*(Math.random()-.5)*2);return Math.min(HI,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GI(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===Yr?void 0:t}function GI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const YI={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},JI=be.INFO,XI={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},ZI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=XI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tc{constructor(e){this.name=e,this._logLevel=JI,this._logHandler=ZI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const eA=(t,e)=>e.some(n=>t instanceof n);let qd,jd;function tA(){return qd||(qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nA(){return jd||(jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h_=new WeakMap,su=new WeakMap,f_=new WeakMap,Il=new WeakMap,Xu=new WeakMap;function rA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ir(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&h_.set(n,t)}).catch(()=>{}),Xu.set(e,t),e}function sA(t){if(su.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});su.set(t,e)}let iu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||f_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iA(t){iu=t(iu)}function oA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Al(this),e,...n);return f_.set(r,e.sort?e.sort():[e]),Ir(r)}:nA().includes(t)?function(...e){return t.apply(Al(this),e),Ir(h_.get(this))}:function(...e){return Ir(t.apply(Al(this),e))}}function aA(t){return typeof t=="function"?oA(t):(t instanceof IDBTransaction&&sA(t),eA(t,tA())?new Proxy(t,iu):t)}function Ir(t){if(t instanceof IDBRequest)return rA(t);if(Il.has(t))return Il.get(t);const e=aA(t);return e!==t&&(Il.set(t,e),Xu.set(e,t)),e}const Al=t=>Xu.get(t);function d_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const cA=["get","getKey","getAll","getAllKeys","count"],lA=["put","add","delete","clear"],bl=new Map;function Hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bl.get(e))return bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=lA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return bl.set(e,i),i}iA(t=>({...t,get:(e,n,r)=>Hd(e,n)||t.get(e,n,r),has:(e,n)=>!!Hd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hA(t){return t.getComponent()?.type==="VERSION"}const ou="@firebase/app",zd="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Tc("@firebase/app"),fA="@firebase/app-compat",dA="@firebase/analytics-compat",pA="@firebase/analytics",mA="@firebase/app-check-compat",gA="@firebase/app-check",_A="@firebase/auth",yA="@firebase/auth-compat",vA="@firebase/database",EA="@firebase/data-connect",wA="@firebase/database-compat",TA="@firebase/functions",IA="@firebase/functions-compat",AA="@firebase/installations",bA="@firebase/installations-compat",RA="@firebase/messaging",SA="@firebase/messaging-compat",CA="@firebase/performance",PA="@firebase/performance-compat",kA="@firebase/remote-config",NA="@firebase/remote-config-compat",DA="@firebase/storage",VA="@firebase/storage-compat",OA="@firebase/firestore",xA="@firebase/ai",MA="@firebase/firestore-compat",LA="firebase",FA="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="[DEFAULT]",UA={[ou]:"fire-core",[fA]:"fire-core-compat",[pA]:"fire-analytics",[dA]:"fire-analytics-compat",[gA]:"fire-app-check",[mA]:"fire-app-check-compat",[_A]:"fire-auth",[yA]:"fire-auth-compat",[vA]:"fire-rtdb",[EA]:"fire-data-connect",[wA]:"fire-rtdb-compat",[TA]:"fire-fn",[IA]:"fire-fn-compat",[AA]:"fire-iid",[bA]:"fire-iid-compat",[RA]:"fire-fcm",[SA]:"fire-fcm-compat",[CA]:"fire-perf",[PA]:"fire-perf-compat",[kA]:"fire-rc",[NA]:"fire-rc-compat",[DA]:"fire-gcs",[VA]:"fire-gcs-compat",[OA]:"fire-fst",[MA]:"fire-fst-compat",[xA]:"fire-vertex","fire-js":"fire-js",[LA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map,$A=new Map,cu=new Map;function Wd(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(cu.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;cu.set(e,t);for(const n of Fa.values())Wd(n,t);for(const n of $A.values())Wd(n,t);return!0}function gs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ar=new ms("app","Firebase",BA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=FA;function p_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:au,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ar.create("bad-app-name",{appName:String(s)});if(n||(n=s_()),!n)throw Ar.create("no-options");const i=Fa.get(s);if(i){if(Xn(n,i.options)&&Xn(r,i.config))return i;throw Ar.create("duplicate-app",{appName:s})}const o=new QI(s);for(const l of cu.values())o.addComponent(l);const c=new qA(n,r,o);return Fa.set(s,c),c}function Zu(t=au){const e=Fa.get(t);if(!e&&t===au&&s_())return p_();if(!e)throw Ar.create("no-app",{appName:t});return e}function sn(t,e,n){let r=UA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(o.join(" "));return}On(new gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="firebase-heartbeat-database",HA=1,ao="firebase-heartbeat-store";let Rl=null;function m_(){return Rl||(Rl=d_(jA,HA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ar.create("idb-open",{originalErrorMessage:t.message})})),Rl}async function zA(t){try{const n=(await m_()).transaction(ao),r=await n.objectStore(ao).get(g_(t));return await n.done,r}catch(e){if(e instanceof vn)Zn.warn(e.message);else{const n=Ar.create("idb-get",{originalErrorMessage:e?.message});Zn.warn(n.message)}}}async function Kd(t,e){try{const r=(await m_()).transaction(ao,"readwrite");await r.objectStore(ao).put(e,g_(t)),await r.done}catch(n){if(n instanceof vn)Zn.warn(n.message);else{const r=Ar.create("idb-set",{originalErrorMessage:n?.message});Zn.warn(r.message)}}}function g_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=1024,KA=30;class GA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>KA){const s=JA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Zn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gd(),{heartbeatsToSend:n,unsentEntries:r}=QA(this._heartbeatsCache.heartbeats),s=La(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Zn.warn(e),""}}}function Gd(){return new Date().toISOString().substring(0,10)}function QA(t,e=WA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l_()?u_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Kd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Kd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qd(t){return La(JSON.stringify({version:2,heartbeats:t})).length}function JA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t){On(new gn("platform-logger",e=>new uA(e),"PRIVATE")),On(new gn("heartbeat",e=>new GA(e),"PRIVATE")),sn(ou,zd,t),sn(ou,zd,"esm2020"),sn("fire-js","")}XA("");var Yd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var br,__;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function y(){}y.prototype=E.prototype,b.D=E.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(I,R,A){for(var v=Array(arguments.length-2),se=2;se<arguments.length;se++)v[se-2]=arguments[se];return E.prototype[R].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,y){y||(y=0);var I=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)I[R]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(R=0;16>R;++R)I[R]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=b.g[0],y=b.g[1],R=b.g[2];var A=b.g[3],v=E+(A^y&(R^A))+I[0]+3614090360&4294967295;E=y+(v<<7&4294967295|v>>>25),v=A+(R^E&(y^R))+I[1]+3905402710&4294967295,A=E+(v<<12&4294967295|v>>>20),v=R+(y^A&(E^y))+I[2]+606105819&4294967295,R=A+(v<<17&4294967295|v>>>15),v=y+(E^R&(A^E))+I[3]+3250441966&4294967295,y=R+(v<<22&4294967295|v>>>10),v=E+(A^y&(R^A))+I[4]+4118548399&4294967295,E=y+(v<<7&4294967295|v>>>25),v=A+(R^E&(y^R))+I[5]+1200080426&4294967295,A=E+(v<<12&4294967295|v>>>20),v=R+(y^A&(E^y))+I[6]+2821735955&4294967295,R=A+(v<<17&4294967295|v>>>15),v=y+(E^R&(A^E))+I[7]+4249261313&4294967295,y=R+(v<<22&4294967295|v>>>10),v=E+(A^y&(R^A))+I[8]+1770035416&4294967295,E=y+(v<<7&4294967295|v>>>25),v=A+(R^E&(y^R))+I[9]+2336552879&4294967295,A=E+(v<<12&4294967295|v>>>20),v=R+(y^A&(E^y))+I[10]+4294925233&4294967295,R=A+(v<<17&4294967295|v>>>15),v=y+(E^R&(A^E))+I[11]+2304563134&4294967295,y=R+(v<<22&4294967295|v>>>10),v=E+(A^y&(R^A))+I[12]+1804603682&4294967295,E=y+(v<<7&4294967295|v>>>25),v=A+(R^E&(y^R))+I[13]+4254626195&4294967295,A=E+(v<<12&4294967295|v>>>20),v=R+(y^A&(E^y))+I[14]+2792965006&4294967295,R=A+(v<<17&4294967295|v>>>15),v=y+(E^R&(A^E))+I[15]+1236535329&4294967295,y=R+(v<<22&4294967295|v>>>10),v=E+(R^A&(y^R))+I[1]+4129170786&4294967295,E=y+(v<<5&4294967295|v>>>27),v=A+(y^R&(E^y))+I[6]+3225465664&4294967295,A=E+(v<<9&4294967295|v>>>23),v=R+(E^y&(A^E))+I[11]+643717713&4294967295,R=A+(v<<14&4294967295|v>>>18),v=y+(A^E&(R^A))+I[0]+3921069994&4294967295,y=R+(v<<20&4294967295|v>>>12),v=E+(R^A&(y^R))+I[5]+3593408605&4294967295,E=y+(v<<5&4294967295|v>>>27),v=A+(y^R&(E^y))+I[10]+38016083&4294967295,A=E+(v<<9&4294967295|v>>>23),v=R+(E^y&(A^E))+I[15]+3634488961&4294967295,R=A+(v<<14&4294967295|v>>>18),v=y+(A^E&(R^A))+I[4]+3889429448&4294967295,y=R+(v<<20&4294967295|v>>>12),v=E+(R^A&(y^R))+I[9]+568446438&4294967295,E=y+(v<<5&4294967295|v>>>27),v=A+(y^R&(E^y))+I[14]+3275163606&4294967295,A=E+(v<<9&4294967295|v>>>23),v=R+(E^y&(A^E))+I[3]+4107603335&4294967295,R=A+(v<<14&4294967295|v>>>18),v=y+(A^E&(R^A))+I[8]+1163531501&4294967295,y=R+(v<<20&4294967295|v>>>12),v=E+(R^A&(y^R))+I[13]+2850285829&4294967295,E=y+(v<<5&4294967295|v>>>27),v=A+(y^R&(E^y))+I[2]+4243563512&4294967295,A=E+(v<<9&4294967295|v>>>23),v=R+(E^y&(A^E))+I[7]+1735328473&4294967295,R=A+(v<<14&4294967295|v>>>18),v=y+(A^E&(R^A))+I[12]+2368359562&4294967295,y=R+(v<<20&4294967295|v>>>12),v=E+(y^R^A)+I[5]+4294588738&4294967295,E=y+(v<<4&4294967295|v>>>28),v=A+(E^y^R)+I[8]+2272392833&4294967295,A=E+(v<<11&4294967295|v>>>21),v=R+(A^E^y)+I[11]+1839030562&4294967295,R=A+(v<<16&4294967295|v>>>16),v=y+(R^A^E)+I[14]+4259657740&4294967295,y=R+(v<<23&4294967295|v>>>9),v=E+(y^R^A)+I[1]+2763975236&4294967295,E=y+(v<<4&4294967295|v>>>28),v=A+(E^y^R)+I[4]+1272893353&4294967295,A=E+(v<<11&4294967295|v>>>21),v=R+(A^E^y)+I[7]+4139469664&4294967295,R=A+(v<<16&4294967295|v>>>16),v=y+(R^A^E)+I[10]+3200236656&4294967295,y=R+(v<<23&4294967295|v>>>9),v=E+(y^R^A)+I[13]+681279174&4294967295,E=y+(v<<4&4294967295|v>>>28),v=A+(E^y^R)+I[0]+3936430074&4294967295,A=E+(v<<11&4294967295|v>>>21),v=R+(A^E^y)+I[3]+3572445317&4294967295,R=A+(v<<16&4294967295|v>>>16),v=y+(R^A^E)+I[6]+76029189&4294967295,y=R+(v<<23&4294967295|v>>>9),v=E+(y^R^A)+I[9]+3654602809&4294967295,E=y+(v<<4&4294967295|v>>>28),v=A+(E^y^R)+I[12]+3873151461&4294967295,A=E+(v<<11&4294967295|v>>>21),v=R+(A^E^y)+I[15]+530742520&4294967295,R=A+(v<<16&4294967295|v>>>16),v=y+(R^A^E)+I[2]+3299628645&4294967295,y=R+(v<<23&4294967295|v>>>9),v=E+(R^(y|~A))+I[0]+4096336452&4294967295,E=y+(v<<6&4294967295|v>>>26),v=A+(y^(E|~R))+I[7]+1126891415&4294967295,A=E+(v<<10&4294967295|v>>>22),v=R+(E^(A|~y))+I[14]+2878612391&4294967295,R=A+(v<<15&4294967295|v>>>17),v=y+(A^(R|~E))+I[5]+4237533241&4294967295,y=R+(v<<21&4294967295|v>>>11),v=E+(R^(y|~A))+I[12]+1700485571&4294967295,E=y+(v<<6&4294967295|v>>>26),v=A+(y^(E|~R))+I[3]+2399980690&4294967295,A=E+(v<<10&4294967295|v>>>22),v=R+(E^(A|~y))+I[10]+4293915773&4294967295,R=A+(v<<15&4294967295|v>>>17),v=y+(A^(R|~E))+I[1]+2240044497&4294967295,y=R+(v<<21&4294967295|v>>>11),v=E+(R^(y|~A))+I[8]+1873313359&4294967295,E=y+(v<<6&4294967295|v>>>26),v=A+(y^(E|~R))+I[15]+4264355552&4294967295,A=E+(v<<10&4294967295|v>>>22),v=R+(E^(A|~y))+I[6]+2734768916&4294967295,R=A+(v<<15&4294967295|v>>>17),v=y+(A^(R|~E))+I[13]+1309151649&4294967295,y=R+(v<<21&4294967295|v>>>11),v=E+(R^(y|~A))+I[4]+4149444226&4294967295,E=y+(v<<6&4294967295|v>>>26),v=A+(y^(E|~R))+I[11]+3174756917&4294967295,A=E+(v<<10&4294967295|v>>>22),v=R+(E^(A|~y))+I[2]+718787259&4294967295,R=A+(v<<15&4294967295|v>>>17),v=y+(A^(R|~E))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var y=E-this.blockSize,I=this.B,R=this.h,A=0;A<E;){if(R==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<E;)if(I[R++]=b.charCodeAt(A++),R==this.blockSize){s(this,I),R=0;break}}else for(;A<E;)if(I[R++]=b[A++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var y=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=y&255,y/=256;for(this.u(b),b=Array(16),E=y=0;4>E;++E)for(var I=0;32>I;I+=8)b[y++]=this.g[E]>>>I&255;return b};function i(b,E){var y=c;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=E(b)}function o(b,E){this.h=E;for(var y=[],I=!0,R=b.length-1;0<=R;R--){var A=b[R]|0;I&&A==E||(y[R]=A,I=!1)}this.g=y}var c={};function l(b){return-128<=b&&128>b?i(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return V(u(-b));for(var E=[],y=1,I=0;b>=y;I++)E[I]=b/y|0,y*=4294967296;return new o(E,0)}function f(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return V(f(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(E,8)),I=p,R=0;R<b.length;R+=8){var A=Math.min(8,b.length-R),v=parseInt(b.substring(R,R+A),E);8>A?(A=u(Math.pow(E,A)),I=I.j(A).add(u(v))):(I=I.j(y),I=I.add(u(v)))}return I}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-V(this).m();for(var b=0,E=1,y=0;y<this.g.length;y++){var I=this.i(y);b+=(0<=I?I:4294967296+I)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(k(this))return"-"+V(this).toString(b);for(var E=u(Math.pow(b,6)),y=this,I="";;){var R=D(y,E).g;y=j(y,R.j(E));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=R,S(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=j(this,b),k(b)?-1:S(b)?0:1};function V(b){for(var E=b.g.length,y=[],I=0;I<E;I++)y[I]=~b.g[I];return new o(y,~b.h).add(m)}t.abs=function(){return k(this)?V(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),y=[],I=0,R=0;R<=E;R++){var A=I+(this.i(R)&65535)+(b.i(R)&65535),v=(A>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);I=v>>>16,A&=65535,v&=65535,y[R]=v<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function j(b,E){return b.add(V(E))}t.j=function(b){if(S(this)||S(b))return p;if(k(this))return k(b)?V(this).j(V(b)):V(V(this).j(b));if(k(b))return V(this.j(V(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var E=this.g.length+b.g.length,y=[],I=0;I<2*E;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<b.g.length;R++){var A=this.i(I)>>>16,v=this.i(I)&65535,se=b.i(R)>>>16,ve=b.i(R)&65535;y[2*I+2*R]+=v*ve,q(y,2*I+2*R),y[2*I+2*R+1]+=A*ve,q(y,2*I+2*R+1),y[2*I+2*R+1]+=v*se,q(y,2*I+2*R+1),y[2*I+2*R+2]+=A*se,q(y,2*I+2*R+2)}for(I=0;I<E;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=E;I<2*E;I++)y[I]=0;return new o(y,0)};function q(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function x(b,E){this.g=b,this.h=E}function D(b,E){if(S(E))throw Error("division by zero");if(S(b))return new x(p,p);if(k(b))return E=D(V(b),E),new x(V(E.g),V(E.h));if(k(E))return E=D(b,V(E)),new x(V(E.g),E.h);if(30<b.g.length){if(k(b)||k(E))throw Error("slowDivide_ only works with positive integers.");for(var y=m,I=E;0>=I.l(b);)y=z(y),I=z(I);var R=te(y,1),A=te(I,1);for(I=te(I,2),y=te(y,2);!S(I);){var v=A.add(I);0>=v.l(b)&&(R=R.add(y),A=v),I=te(I,1),y=te(y,1)}return E=j(b,R.j(E)),new x(R,E)}for(R=p;0<=b.l(E);){for(y=Math.max(1,Math.floor(b.m()/E.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(y),v=A.j(E);k(v)||0<v.l(b);)y-=I,A=u(y),v=A.j(E);S(A)&&(A=m),R=R.add(A),b=j(b,v)}return new x(R,b)}t.A=function(b){return D(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),y=[],I=0;I<E;I++)y[I]=this.i(I)&b.i(I);return new o(y,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),y=[],I=0;I<E;I++)y[I]=this.i(I)|b.i(I);return new o(y,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),y=[],I=0;I<E;I++)y[I]=this.i(I)^b.i(I);return new o(y,this.h^b.h)};function z(b){for(var E=b.g.length+1,y=[],I=0;I<E;I++)y[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(y,b.h)}function te(b,E){var y=E>>5;E%=32;for(var I=b.g.length-y,R=[],A=0;A<I;A++)R[A]=0<E?b.i(A+y)>>>E|b.i(A+y+1)<<32-E:b.i(A+y);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,__=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,br=o}).apply(typeof Yd<"u"?Yd:typeof self<"u"?self:typeof window<"u"?window:{});var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var y_,ki,v_,_a,lu,E_,w_,T_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ia=="object"&&ia];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var O=d++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,O){for(var G=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)G[$e-2]=arguments[$e];return h.prototype[P].apply(g,G)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function V(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const P=a.length||0,O=g.length||0;a.length=P+O;for(let G=0;G<O;G++)a[P+G]=g[G]}else a.push(g)}}class j{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function q(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var z=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function te(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function b(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let O=0;O<y.length;O++)d=y[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function v(){var a=Ge;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class se{constructor(){this.h=this.g=null}add(h,d){const g=ve.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var ve=new j(()=>new Te,a=>a.reset());class Te{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,fe=!1,Ge=new se,Fe=()=>{const a=c.Promise.resolve(void 0);Ee=()=>{a.then(Ue)}};var Ue=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){A(d)}var h=ve;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}fe=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var zt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function xt(a,h){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(z){e:{try{D(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&xt.aa.h.call(this)}}S(xt,Le);var vt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++Z,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ke(a){this.src=a,this.g={},this.h=0}ke.prototype.add=function(a,h,d,g,P){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var G=T(a,h,g,P);return-1<G?(h=a[G],d||(h.fa=!1)):(h=new X(h,this.src,O,!!g,P),h.fa=d,a.push(h)),h};function w(a,h){var d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=P)&&Array.prototype.splice.call(g,P,1),O&&(ne(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,h,d,g){for(var P=0;P<a.length;++P){var O=a[P];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==g)return P}return-1}var C="closure_lm_"+(1e6*Math.random()|0),F={};function B(a,h,d,g,P){if(Array.isArray(h)){for(var O=0;O<h.length;O++)B(a,h[O],d,g,P);return null}return d=he(d),a&&a[L]?a.K(h,d,u(g)?!!g.capture:!1,P):U(a,h,d,!1,g,P)}function U(a,h,d,g,P,O){if(!h)throw Error("Invalid event type");var G=u(P)?!!P.capture:!!P,$e=Q(a);if($e||(a[C]=$e=new ke(a)),d=$e.add(h,d,g,G,O),d.proxy)return d;if(g=Y(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)zt||(P=G),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(H(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Y(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function K(a,h,d,g,P){if(Array.isArray(h))for(var O=0;O<h.length;O++)K(a,h[O],d,g,P);else g=u(g)?!!g.capture:!!g,d=he(d),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],d=T(O,d,g,P),-1<d&&(ne(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,d,g,P)),(d=-1<a?h[a]:null)&&W(d))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])w(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(H(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Q(h))?(w(d,a),d.h==0&&(d.src=null,h[C]=null)):ne(a)}}}function H(a){return a in F?F[a]:F[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new xt(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&W(a),a=d.call(g,h)}return a}function Q(a){return a=a[C],a instanceof ke?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function ce(){Me.call(this),this.i=new ke(this),this.M=this,this.F=null}S(ce,Me),ce.prototype[L]=!0,ce.prototype.removeEventListener=function(a,h,d,g){K(this,a,h,d,g)};function ye(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Le(h,a);else if(h instanceof Le)h.target=h.target||a;else{var P=h;h=new Le(g,a),I(h,P)}if(P=!0,d)for(var O=d.length-1;0<=O;O--){var G=h.g=d[O];P=Ce(G,g,!0,h)&&P}if(G=h.g=a,P=Ce(G,g,!0,h)&&P,P=Ce(G,g,!1,h)&&P,d)for(O=0;O<d.length;O++)G=h.g=d[O],P=Ce(G,g,!1,h)&&P}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ne(d[g]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ce.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ce(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,O=0;O<h.length;++O){var G=h[O];if(G&&!G.da&&G.capture==d){var $e=G.listener,pt=G.ha||G.src;G.fa&&w(a.i,G),P=$e.call(pt,g)!==!1&&P}}return P&&!g.defaultPrevented}function ht(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function ft(a){a.g=ht(()=>{a.g=null,a.i&&(a.i=!1,ft(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Jt extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ft(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(a){Me.call(this),this.h=a,this.g={}}S(Et,Me);var or=[];function hi(a){te(a.g,function(h,d){this.g.hasOwnProperty(d)&&W(h)},a),a.g={}}Et.prototype.N=function(){Et.aa.N.call(this),hi(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dt=c.JSON.stringify,Xt=c.JSON.parse,Fo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function vs(){}vs.prototype.h=null;function of(a){return a.h||(a.h=a.i())}function af(){}var fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jc(){Le.call(this,"d")}S(Jc,Le);function Xc(){Le.call(this,"c")}S(Xc,Le);var Br={},cf=null;function Uo(){return cf=cf||new ce}Br.La="serverreachability";function lf(a){Le.call(this,Br.La,a)}S(lf,Le);function di(a){const h=Uo();ye(h,new lf(h))}Br.STAT_EVENT="statevent";function uf(a,h){Le.call(this,Br.STAT_EVENT,a),this.stat=h}S(uf,Le);function kt(a){const h=Uo();ye(h,new uf(h,a))}Br.Ma="timingevent";function hf(a,h){Le.call(this,Br.Ma,a),this.size=h}S(hf,Le);function pi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function mi(){this.g=!0}mi.prototype.xa=function(){this.g=!1};function gE(a,h,d,g,P,O){a.info(function(){if(a.g)if(O)for(var G="",$e=O.split("&"),pt=0;pt<$e.length;pt++){var Ne=$e[pt].split("=");if(1<Ne.length){var wt=Ne[0];Ne=Ne[1];var Tt=wt.split("_");G=2<=Tt.length&&Tt[1]=="type"?G+(wt+"="+Ne+"&"):G+(wt+"=redacted&")}}else G=null;else G=O;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+G})}function _E(a,h,d,g,P,O,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+O+" "+G})}function Es(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+vE(a,d)+(g?" "+g:"")})}function yE(a,h){a.info(function(){return"TIMEOUT: "+h})}mi.prototype.info=function(){};function vE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return dt(d)}catch{return h}}var $o={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ff={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zc;function Bo(){}S(Bo,vs),Bo.prototype.g=function(){return new XMLHttpRequest},Bo.prototype.i=function(){return{}},Zc=new Bo;function ar(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var pf={},el={};function tl(a,h,d){a.L=1,a.v=zo(Ln(h)),a.m=d,a.P=!0,mf(a,null)}function mf(a,h){a.F=Date.now(),qo(a),a.A=Ln(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Pf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new df,a.g=Kf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Jt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(or[0]=P.toString()),P=or);for(var O=0;O<P.length;O++){var G=B(d,P[O],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),di(),gE(a.i,a.u,a.A,a.l,a.R,a.m)}ar.prototype.ca=function(a){a=a.target;const h=this.M;h&&Fn(a)==3?h.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=Fn(this.g);var h=this.g.Ba();const Is=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Mf(this.g)))){this.J||Tt!=4||h==7||(h==8||0>=Is?di(3):di(2)),nl(this);var d=this.g.Z();this.X=d;t:if(gf(this)){var g=Mf(this.g);a="";var P=g.length,O=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),gi(this);var G="";break t}this.h.i=new c.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,_E(this.i,this.u,this.A,this.l,this.R,Tt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,pt=this.g;if(($e=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q($e)){var Ne=$e;break t}}Ne=null}if(d=Ne)Es(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rl(this,d);else{this.o=!1,this.s=3,kt(12),qr(this),gi(this);break e}}if(this.P){d=!0;let cn;for(;!this.J&&this.C<G.length;)if(cn=EE(this,G),cn==el){Tt==4&&(this.s=4,kt(14),d=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==pf){this.s=4,kt(15),Es(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else Es(this.i,this.l,cn,null),rl(this,cn);if(gf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||G.length!=0||this.h.h||(this.s=1,kt(16),d=!1),this.o=this.o&&d,!d)Es(this.i,this.l,G,"[Invalid Chunked Response]"),qr(this),gi(this);else if(0<G.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),ll(wt),wt.M=!0,kt(11))}}else Es(this.i,this.l,G,null),rl(this,G);Tt==4&&qr(this),this.o&&!this.J&&(Tt==4?jf(this.j,this):(this.o=!1,qo(this)))}else LE(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),qr(this),gi(this)}}}catch{}finally{}};function gf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function EE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?el:(d=Number(h.substring(d,g)),isNaN(d)?pf:(g+=1,g+d>h.length?el:(h=h.slice(g,g+d),a.C=g+d,h)))}ar.prototype.cancel=function(){this.J=!0,qr(this)};function qo(a){a.S=Date.now()+a.I,_f(a,a.I)}function _f(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=pi(m(a.ba,a),h)}function nl(a){a.B&&(c.clearTimeout(a.B),a.B=null)}ar.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(yE(this.i,this.A),this.L!=2&&(di(),kt(17)),qr(this),this.s=2,gi(this)):_f(this,this.S-a)};function gi(a){a.j.G==0||a.J||jf(a.j,a)}function qr(a){nl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,hi(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function rl(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||sl(d.h,a))){if(!a.K&&sl(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Jo(d),Qo(d);else break e;cl(d),kt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=pi(m(d.Za,d),6e3));if(1>=Ef(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Hr(d,11)}else if((a.K||d.g==a)&&Jo(d),!q(h))for(P=d.Da.g.parse(h),h=0;h<P.length;h++){let Ne=P[h];if(d.T=Ne[0],Ne=Ne[1],d.G==2)if(Ne[0]=="c"){d.K=Ne[1],d.ia=Ne[2];const wt=Ne[3];wt!=null&&(d.la=wt,d.j.info("VER="+d.la));const Tt=Ne[4];Tt!=null&&(d.Aa=Tt,d.j.info("SVER="+d.Aa));const Is=Ne[5];Is!=null&&typeof Is=="number"&&0<Is&&(g=1.5*Is,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const cn=a.g;if(cn){const Zo=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zo){var O=g.h;O.g||Zo.indexOf("spdy")==-1&&Zo.indexOf("quic")==-1&&Zo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(il(O,O.h),O.h=null))}if(g.D){const ul=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(g.ya=ul,Qe(g.I,g.D,ul))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var G=a;if(g.qa=Wf(g,g.J?g.ia:null,g.W),G.K){wf(g.h,G);var $e=G,pt=g.L;pt&&($e.I=pt),$e.B&&(nl($e),qo($e)),g.g=G}else Bf(g);0<d.i.length&&Yo(d)}else Ne[0]!="stop"&&Ne[0]!="close"||Hr(d,7);else d.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Hr(d,7):al(d):Ne[0]!="noop"&&d.l&&d.l.ta(Ne),d.v=0)}}di(4)}catch{}}var wE=class{constructor(a,h){this.g=a,this.map=h}};function yf(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ef(a){return a.h?1:a.g?a.g.size:0}function sl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function il(a,h){a.g?a.g.add(h):a.h=h}function wf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}yf.prototype.cancel=function(){if(this.i=Tf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function TE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function IE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function If(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=IE(a),g=TE(a),P=g.length,O=0;O<P;O++)h.call(void 0,g[O],d&&d[O],a)}var Af=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var O=a[d].substring(0,g);P=a[d].substring(g+1)}else O=a[d];h(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof jr){this.h=a.h,jo(this,a.j),this.o=a.o,this.g=a.g,Ho(this,a.s),this.l=a.l;var h=a.i,d=new vi;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),bf(this,d),this.m=a.m}else a&&(h=String(a).match(Af))?(this.h=!1,jo(this,h[1]||"",!0),this.o=_i(h[2]||""),this.g=_i(h[3]||"",!0),Ho(this,h[4]),this.l=_i(h[5]||"",!0),bf(this,h[6]||"",!0),this.m=_i(h[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}jr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(yi(h,Rf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(yi(h,Rf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(yi(d,d.charAt(0)=="/"?SE:RE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",yi(d,PE)),a.join("")};function Ln(a){return new jr(a)}function jo(a,h,d){a.j=d?_i(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ho(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function bf(a,h,d){h instanceof vi?(a.i=h,kE(a.i,a.h)):(d||(h=yi(h,CE)),a.i=new vi(h,a.h))}function Qe(a,h,d){a.i.set(h,d)}function zo(a){return Qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function _i(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,bE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function bE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Rf=/[#\/\?@]/g,RE=/[#\?:]/g,SE=/[#\?]/g,CE=/[#\?@]/g,PE=/#/g;function vi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function cr(a){a.g||(a.g=new Map,a.h=0,a.i&&AE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=vi.prototype,t.add=function(a,h){cr(this),this.i=null,a=ws(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Sf(a,h){cr(a),h=ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Cf(a,h){return cr(a),h=ws(a,h),a.g.has(h)}t.forEach=function(a,h){cr(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)},t.na=function(){cr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const P=a[g];for(let O=0;O<P.length;O++)d.push(h[g])}return d},t.V=function(a){cr(this);let h=[];if(typeof a=="string")Cf(this,a)&&(h=h.concat(this.g.get(ws(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return cr(this),this.i=null,a=ws(this,a),Cf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Pf(a,h,d){Sf(a,h),0<d.length&&(a.i=null,a.g.set(ws(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const O=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var P=O;G[g]!==""&&(P+="="+encodeURIComponent(String(G[g]))),a.push(P)}}return this.i=a.join("&")};function ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function kE(a,h){h&&!a.j&&(cr(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Sf(this,g),Pf(this,P,d))},a)),a.j=h}function NE(a,h){const d=new mi;if(c.Image){const g=new Image;g.onload=_(lr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(lr,d,"TestLoadImage: error",!1,h,g),g.onabort=_(lr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(lr,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function DE(a,h){const d=new mi,g=new AbortController,P=setTimeout(()=>{g.abort(),lr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(P),O.ok?lr(d,"TestPingServer: ok",!0,h):lr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),lr(d,"TestPingServer: error",!1,h)})}function lr(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function VE(){this.g=new Fo}function OE(a,h,d){const g=d||"";try{If(a,function(P,O){let G=P;u(P)&&(G=dt(P)),h.push(g+O+"="+encodeURIComponent(G))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function Wo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Wo,vs),Wo.prototype.g=function(){return new Ko(this.l,this.j)},Wo.prototype.i=function(a){return function(){return a}}({});function Ko(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ko,ce),t=Ko.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,wi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function kf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ei(this):wi(this),this.readyState==3&&kf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ei(this))},t.Qa=function(a){this.g&&(this.response=a,Ei(this))},t.ga=function(){this.g&&Ei(this)};function Ei(a){a.readyState=4,a.l=null,a.j=null,a.v=null,wi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function wi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Nf(a){let h="";return te(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function ol(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Nf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Qe(a,h,d))}function Xe(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Xe,ce);var xE=/^https?$/i,ME=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zc.g(),this.v=this.o?of(this.o):of(Zc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Df(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ME,h,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,G]of d)this.g.setRequestHeader(O,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xf(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Df(this,O)}};function Df(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Vf(a),Go(a)}function Vf(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),Go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Go(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Of(this):this.bb())},t.bb=function(){Of(this)};function Of(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Fn(a)!=4||a.Z()!=2)){if(a.u&&Fn(a)==4)ht(a.Ea,0,a);else if(ye(a,"readystatechange"),Fn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=G===0){var P=String(a.D).match(Af)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!xE.test(P?P.toLowerCase():"")}d=g}if(d)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var O=2<Fn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Vf(a)}}finally{Go(a)}}}}function Go(a,h){if(a.g){xf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ye(a,"ready");try{d.onreadystatechange=g}catch{}}}function xf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Xt(h)}};function Mf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function LE(a){const h={};a=(a.g&&2<=Fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(q(a[g]))continue;var d=R(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[P]||[];h[P]=O,O.push(d)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ti(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Lf(a){this.Aa=0,this.i=[],this.j=new mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ti("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ti("baseRetryDelayMs",5e3,a),this.cb=Ti("retryDelaySeedMs",1e4,a),this.Wa=Ti("forwardChannelMaxRetries",2,a),this.wa=Ti("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yf(a&&a.concurrentRequestLimit),this.Da=new VE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Lf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){kt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Wf(this,null,this.W),Yo(this)};function al(a){if(Ff(a),a.G==3){var h=a.U++,d=Ln(a.I);if(Qe(d,"SID",a.K),Qe(d,"RID",h),Qe(d,"TYPE","terminate"),Ii(a,d),h=new ar(a,a.j,h),h.L=2,h.v=zo(Ln(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=Kf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),qo(h)}zf(a)}function Qo(a){a.g&&(ll(a),a.g.cancel(),a.g=null)}function Ff(a){Qo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Jo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Yo(a){if(!vf(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ee||Fe(),fe||(Ee(),fe=!0),Ge.add(h,a),a.B=0}}function FE(a,h){return Ef(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=pi(m(a.Ga,a,h),Hf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new ar(this,this.j,a);let O=this.o;if(this.S&&(O?(O=E(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=$f(this,P,h),d=Ln(this.I),Qe(d,"RID",a),Qe(d,"CVER",22),this.D&&Qe(d,"X-HTTP-Session-Id",this.D),Ii(this,d),O&&(this.O?h="headers="+encodeURIComponent(String(Nf(O)))+"&"+h:this.m&&ol(d,this.m,O)),il(this.h,P),this.Ua&&Qe(d,"TYPE","init"),this.P?(Qe(d,"$req",h),Qe(d,"SID","null"),P.T=!0,tl(P,d,null)):tl(P,d,h),this.G=2}}else this.G==3&&(a?Uf(this,a):this.i.length==0||vf(this.h)||Uf(this))};function Uf(a,h){var d;h?d=h.l:d=a.U++;const g=Ln(a.I);Qe(g,"SID",a.K),Qe(g,"RID",d),Qe(g,"AID",a.T),Ii(a,g),a.m&&a.o&&ol(g,a.m,a.o),d=new ar(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=$f(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),il(a.h,d),tl(d,g,h)}function Ii(a,h){a.H&&te(a.H,function(d,g){Qe(h,g,d)}),a.l&&If({},function(d,g){Qe(h,g,d)})}function $f(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let O=-1;for(;;){const G=["count="+d];O==-1?0<d?(O=P[0].g,G.push("ofs="+O)):O=0:G.push("ofs="+O);let $e=!0;for(let pt=0;pt<d;pt++){let Ne=P[pt].g;const wt=P[pt].map;if(Ne-=O,0>Ne)O=Math.max(0,P[pt].g-100),$e=!1;else try{OE(wt,G,"req"+Ne+"_")}catch{g&&g(wt)}}if($e){g=G.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Bf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ee||Fe(),fe||(Ee(),fe=!0),Ge.add(h,a),a.v=0}}function cl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=pi(m(a.Fa,a),Hf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,qf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=pi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Qo(this),qf(this))};function ll(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function qf(a){a.g=new ar(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Ln(a.qa);Qe(h,"RID","rpc"),Qe(h,"SID",a.K),Qe(h,"AID",a.T),Qe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Qe(h,"TO",a.ja),Qe(h,"TYPE","xmlhttp"),Ii(a,h),a.m&&a.o&&ol(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=zo(Ln(h)),d.m=null,d.P=!0,mf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Qo(this),cl(this),kt(19))};function Jo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function jf(a,h){var d=null;if(a.g==h){Jo(a),ll(a),a.g=null;var g=2}else if(sl(a.h,h))d=h.D,wf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=Uo(),ye(g,new hf(g,d)),Yo(a)}else Bf(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&FE(a,h)||g==2&&cl(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function Hf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Hr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new jr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||jo(g,"https"),zo(g),P?NE(g.toString(),d):DE(g.toString(),d)}else kt(2);a.G=0,a.l&&a.l.sa(h),zf(a),Ff(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function zf(a){if(a.G=0,a.ka=[],a.l){const h=Tf(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Wf(a,h,d){var g=d instanceof jr?Ln(d):new jr(d);if(g.g!="")h&&(g.g=h+"."+g.g),Ho(g,g.s);else{var P=c.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var O=new jr(null);g&&jo(O,g),h&&(O.g=h),P&&Ho(O,P),d&&(O.l=d),g=O}return d=a.D,h=a.ya,d&&h&&Qe(g,d,h),Qe(g,"VER",a.la),Ii(a,g),g}function Kf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Xe(new Wo({eb:d})):new Xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gf(){}t=Gf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xo(){}Xo.prototype.g=function(a,h){return new Wt(a,h)};function Wt(a,h){ce.call(this),this.g=new Lf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!q(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!q(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ts(this)}S(Wt,ce),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){al(this.g)},Wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=dt(a),a=d);h.i.push(new wE(h.Ya++,a)),h.G==3&&Yo(h)},Wt.prototype.N=function(){this.g.l=null,delete this.j,al(this.g),delete this.g,Wt.aa.N.call(this)};function Qf(a){Jc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Qf,Jc);function Yf(){Xc.call(this),this.status=1}S(Yf,Xc);function Ts(a){this.g=a}S(Ts,Gf),Ts.prototype.ua=function(){ye(this.g,"a")},Ts.prototype.ta=function(a){ye(this.g,new Qf(a))},Ts.prototype.sa=function(a){ye(this.g,new Yf)},Ts.prototype.ra=function(){ye(this.g,"b")},Xo.prototype.createWebChannel=Xo.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,T_=function(){return new Xo},w_=function(){return Uo()},E_=Br,lu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$o.NO_ERROR=0,$o.TIMEOUT=8,$o.HTTP_ERROR=6,_a=$o,ff.COMPLETE="complete",v_=ff,af.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",ce.prototype.listen=ce.prototype.K,ki=af,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,y_=Xe}).apply(typeof ia<"u"?ia:typeof self<"u"?self:typeof window<"u"?window:{});const Jd="@firebase/firestore",Xd="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Tc("@firebase/firestore");function Rs(){return ls.logLevel}function ee(t,...e){if(ls.logLevel<=be.DEBUG){const n=e.map(eh);ls.debug(`Firestore (${ni}): ${t}`,...n)}}function er(t,...e){if(ls.logLevel<=be.ERROR){const n=e.map(eh);ls.error(`Firestore (${ni}): ${t}`,...n)}}function Hs(t,...e){if(ls.logLevel<=be.WARN){const n=e.map(eh);ls.warn(`Firestore (${ni}): ${t}`,...n)}}function eh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,I_(t,r,n)}function I_(t,e,n){let r=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw er(r),new Error(r)}function xe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||I_(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class eb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tb{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string",31837,{l:r}),new A_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string",2055,{h:e}),new At(e)}}class nb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new nb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){xe(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Zd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Zd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ib(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function uu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Sl(s)===Sl(i)?Re(s,i):Sl(s)?1:-1}return Re(t.length,e.length)}const ob=55296,ab=57343;function Sl(t){const e=t.charCodeAt(0);return e>=ob&&e<=ab}function zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="__name__";class Tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Tn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Re(e.length,n.length)}static compareSegments(e,n){const r=Tn.isNumericId(e),s=Tn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Tn.extractNumericId(e).compare(Tn.extractNumericId(n)):uu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return br.fromString(e.substring(4,e.length-2))}}class ze extends Tn{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Tn{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return cb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ep}static keyField(){return new _t([ep])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(ze.fromString(e))}static fromName(e){return new oe(ze.fromString(e).popFirst(5))}static empty(){return new oe(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new ze(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t,e,n){if(!n)throw new J(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lb(t,e,n,r){if(e===!0&&r===!0)throw new J(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tp(t){if(!oe.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function np(t){if(oe.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function R_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ic(t);throw new J(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function bo(t,e){if(!R_(t))throw new J(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new J(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=-62135596800,sp=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*sp);return new We(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<rp)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sp}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bo(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-rp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:it("string",We._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new We(0,0))}static max(){return new de(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=-1;function ub(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new Pr(s,oe.empty(),e)}function hb(t){return new Pr(t.readTime,t.key,co)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(de.min(),oe.empty(),co)}static max(){return new Pr(de.max(),oe.empty(),co)}}function fb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==db)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function mb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function si(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ac.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=-1;function bc(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function gb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="";function _b(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ip(e)),e=yb(t.get(n),e);return ip(e)}function yb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case S_:n+="";break;default:n+=i}}return n}function ip(t){return t+S_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function C_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}}class oa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=i??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new mt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ap(this.data.getIterator())}getIteratorFrom(e){return new ap(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class ap{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new at(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new P_("Invalid base64 string: "+i):i}}(e);return new yt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const vb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(xe(!!t,39018),typeof t=="string"){let e=0;const n=vb.exec(t);if(xe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="server_timestamp",N_="__type__",D_="__previous_value__",V_="__local_write_time__";function rh(t){return(t?.mapValue?.fields||{})[N_]?.stringValue===k_}function Rc(t){const e=t.mapValue.fields[D_];return rh(e)?Rc(e):e}function lo(t){const e=kr(t.mapValue.fields[V_].timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const $a="(default)";class uo{constructor(e,n){this.projectId=e,this.database=n||$a}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database===$a}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="__type__",wb="__max__",aa={mapValue:{}},x_="__vector__",Ba="value";function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rh(t)?4:Ib(t)?9007199254740991:Tb(t)?10:11:ue(28295,{value:t})}function xn(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lo(t).isEqual(lo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kr(s.timestampValue),c=kr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Nr(s.bytesValue).isEqual(Nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),c=nt(i.doubleValue);return o===c?Ua(o)===Ua(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(op(o)!==op(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!xn(o[l],c[l])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function ho(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return cp(t.timestampValue,e.timestampValue);case 4:return cp(lo(t),lo(e));case 5:return uu(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Nr(i),l=Nr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Re(c[u],l[u]);if(f!==0)return f}return Re(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Re(nt(i.latitude),nt(o.latitude));return c!==0?c:Re(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lp(t.arrayValue,e.arrayValue);case 10:return function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Ba]?.arrayValue,f=l[Ba]?.arrayValue,p=Re(u?.values?.length||0,f?.values?.length||0);return p!==0?p:lp(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===aa.mapValue&&o===aa.mapValue)return 0;if(i===aa.mapValue)return 1;if(o===aa.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=uu(l[p],f[p]);if(m!==0)return m;const _=Ws(c[l[p]],u[f[p]]);if(_!==0)return _}return Re(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{he:n})}}function cp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=kr(t),r=kr(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function lp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ws(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function Ks(t){return hu(t)}function hu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hu(n.fields[o])}`;return s+"}"}(t.mapValue):ue(61005,{value:t})}function ya(t){switch(Dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Rc(t);return e?16+ya(e):16;case 5:return 2*t.stringValue.length;case 6:return Nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ya(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Mr(r.fields,(i,o)=>{s+=i.length+ya(o)}),s}(t.mapValue);default:throw ue(13486,{value:t})}}function up(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fu(t){return!!t&&"integerValue"in t}function sh(t){return!!t&&"arrayValue"in t}function hp(t){return!!t&&"nullValue"in t}function fp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function va(t){return!!t&&"mapValue"in t}function Tb(t){return(t?.mapValue?.fields||{})[O_]?.stringValue===x_}function zi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zi(t.arrayValue.values[n]);return e}return{...t}}function Ib(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===wb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zi(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=zi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];va(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new $t(zi(this.value))}}function M_(t){const e=[];return Mr(t.fields,(n,r)=>{const s=new _t([n]);if(va(r)){const i=M_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Rt(e,0,de.min(),de.min(),de.min(),$t.empty(),0)}static newFoundDocument(e,n,r,s){return new Rt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new Rt(e,2,n,de.min(),de.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,de.min(),de.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n){this.position=e,this.inclusive=n}}function dp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ab(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{}class st extends L_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Rb(e,n,r):n==="array-contains"?new Pb(e,r):n==="in"?new kb(e,r):n==="not-in"?new Nb(e,r):n==="array-contains-any"?new Db(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Sb(e,r):new Cb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ws(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends L_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new _n(e,n)}matches(e){return F_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function F_(t){return t.op==="and"}function U_(t){return bb(t)&&F_(t)}function bb(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function du(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+Ks(t.value);if(U_(t))return t.filters.map(e=>du(e)).join(",");{const e=t.filters.map(n=>du(n)).join(",");return`${t.op}(${e})`}}function $_(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)}(t,e):t instanceof _n?function(r,s){return s instanceof _n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&$_(o,s.filters[c]),!0):!1}(t,e):void ue(19439)}function B_(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${Ks(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(B_).join(" ,")+"}"}(t):"Filter"}class Rb extends st{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class Sb extends st{constructor(e,n){super(e,"in",n),this.keys=q_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Cb extends st{constructor(e,n){super(e,"not-in",n),this.keys=q_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function q_(t,e){return(e.arrayValue?.values||[]).map(n=>oe.fromName(n.referenceValue))}class Pb extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sh(n)&&ho(n.arrayValue,this.value)}}class kb extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class Nb extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ho(this.value.arrayValue,n)}}class Db extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function mp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Vb(t,e,n,r,s,i,o)}function ih(t){const e=ge(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>du(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ks(r)).join(",")),e.Te=n}return e.Te}function oh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ab(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pp(t.startAt,e.startAt)&&pp(t.endAt,e.endAt)}function pu(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ob(t,e,n,r,s,i,o,c){return new ii(t,e,n,r,s,i,o,c)}function Sc(t){return new ii(t)}function gp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function j_(t){return t.collectionGroup!==null}function Wi(t){const e=ge(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new at(_t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new fo(i,r))}),n.has(_t.keyField().canonicalString())||e.Ie.push(new fo(_t.keyField(),r))}return e.Ie}function Sn(t){const e=ge(t);return e.Ee||(e.Ee=xb(e,Wi(t))),e.Ee}function xb(t,e){if(t.limitType==="F")return mp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fo(s.field,i)});const n=t.endAt?new qa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qa(t.startAt.position,t.startAt.inclusive):null;return mp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mu(t,e){const n=t.filters.concat([e]);return new ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gu(t,e,n){return new ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cc(t,e){return oh(Sn(t),Sn(e))&&t.limitType===e.limitType}function H_(t){return`${ih(Sn(t))}|lt:${t.limitType}`}function Ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>B_(s)).join(", ")}]`),bc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ks(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ks(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=dp(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Wi(r),s)||r.endAt&&!function(o,c,l){const u=dp(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Wi(r),s))}(t,e)}function Mb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function z_(t){return(e,n)=>{let r=!1;for(const s of Wi(t)){const i=Lb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Lb(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ws(l,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return C_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=new Je(oe.comparator);function tr(){return Fb}const W_=new Je(oe.comparator);function Ni(...t){let e=W_;for(const n of t)e=e.insert(n.key,n);return e}function K_(t){let e=W_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return Ki()}function G_(){return Ki()}function Ki(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ub=new Je(oe.comparator),$b=new at(oe.comparator);function Se(...t){let e=$b;for(const n of t)e=e.add(n);return e}const Bb=new at(Re);function qb(){return Bb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function Q_(t){return{integerValue:""+t}}function Y_(t,e){return gb(e)?Q_(e):ah(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function jb(t,e,n){return t instanceof po?function(s,i){const o={fields:{[N_]:{stringValue:k_},[V_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rh(i)&&(i=Rc(i)),i&&(o.fields[D_]=i),{mapValue:o}}(n,e):t instanceof Gs?X_(t,e):t instanceof mo?Z_(t,e):function(s,i){const o=J_(s,i),c=_p(o)+_p(s.Ae);return fu(o)&&fu(s.Ae)?Q_(c):ah(s.serializer,c)}(t,e)}function Hb(t,e,n){return t instanceof Gs?X_(t,e):t instanceof mo?Z_(t,e):n}function J_(t,e){return t instanceof go?function(r){return fu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class po extends kc{}class Gs extends kc{constructor(e){super(),this.elements=e}}function X_(t,e){const n=ey(e);for(const r of t.elements)n.some(s=>xn(s,r))||n.push(r);return{arrayValue:{values:n}}}class mo extends kc{constructor(e){super(),this.elements=e}}function Z_(t,e){let n=ey(e);for(const r of t.elements)n=n.filter(s=>!xn(s,r));return{arrayValue:{values:n}}}class go extends kc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function _p(t){return nt(t.integerValue||t.doubleValue)}function ey(t){return sh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){this.field=e,this.transform=n}}function zb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Gs&&s instanceof Gs||r instanceof mo&&s instanceof mo?zs(r.elements,s.elements,xn):r instanceof go&&s instanceof go?xn(r.Ae,s.Ae):r instanceof po&&s instanceof po}(t.transform,e.transform)}class Wb{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ea(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nc{}function ty(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lh(t.key,jt.none()):new Ro(t.key,t.data,jt.none());{const n=t.data,r=$t.empty();let s=new at(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new Qt(s.toArray()),jt.none())}}function Kb(t,e,n){t instanceof Ro?function(s,i,o){const c=s.value.clone(),l=vp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(s,i,o){if(!Ea(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=vp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ny(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Gi(t,e,n,r){return t instanceof Ro?function(i,o,c,l){if(!Ea(i.precondition,o))return c;const u=i.value.clone(),f=Ep(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(i,o,c,l){if(!Ea(i.precondition,o))return c;const u=Ep(i.fieldTransforms,l,o),f=o.data;return f.setAll(ny(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Ea(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Gb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=J_(r.transform,s||null);i!=null&&(n===null&&(n=$t.empty()),n.set(r.field,i))}return n||null}function yp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zs(r,s,(i,o)=>zb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends Nc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends Nc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ny(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vp(t,e,n){const r=new Map;xe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Hb(o,c,n[s]))}return r}function Ep(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jb(i,o,e))}return r}class lh extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qb extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Kb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=G_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=ty(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,r)=>yp(n,r))&&zs(this.baseMutations,e.baseMutations,(n,r)=>yp(n,r))}}class uh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Ub}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new uh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,Pe;function Zb(t){switch(t){case M.OK:return ue(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function ry(t){if(t===void 0)return er("GRPC error has no .code"),M.UNKNOWN;switch(t){case rt.OK:return M.OK;case rt.CANCELLED:return M.CANCELLED;case rt.UNKNOWN:return M.UNKNOWN;case rt.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case rt.INTERNAL:return M.INTERNAL;case rt.UNAVAILABLE:return M.UNAVAILABLE;case rt.UNAUTHENTICATED:return M.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case rt.NOT_FOUND:return M.NOT_FOUND;case rt.ALREADY_EXISTS:return M.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return M.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case rt.ABORTED:return M.ABORTED;case rt.OUT_OF_RANGE:return M.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return M.UNIMPLEMENTED;case rt.DATA_LOSS:return M.DATA_LOSS;default:return ue(39323,{code:t})}}(Pe=rt||(rt={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new br([4294967295,4294967295],0);function wp(t){const e=eR().encode(t),n=new __;return n.update(e),new Uint8Array(n.digest())}function Tp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new br([n,r],0),new br([s,i],0)]}class hh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Di(`Invalid padding: ${n}`);if(r<0)throw new Di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Di(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Di(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=br.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(br.fromNumber(r)));return s.compare(tR)===1&&(s=new br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=wp(e),[r,s]=Tp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=wp(e),[r,s]=Tp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dc(de.min(),s,new Je(Re),tr(),Se())}}class So{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new So(r,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class sy{constructor(e,n){this.targetId=e,this.Ce=n}}class iy{constructor(e,n,r=yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ip{constructor(){this.ve=0,this.Fe=Ap(),this.Me=yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Se(),n=Se(),r=Se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}}),new So(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Ap()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,xe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nR{constructor(e){this.Ge=e,this.ze=new Map,this.je=tr(),this.Je=ca(),this.He=ca(),this.Ye=new Je(Re)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(pu(i))if(r===0){const o=new oe(i.path);this.et(n,o,Rt.newNoDocument(o,de.min()))}else xe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Nr(r).toUint8Array()}catch(l){if(l instanceof P_)return Hs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new hh(o,s,i)}catch(l){return Hs(l instanceof Di?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&pu(c.target)){const l=new oe(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Rt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Se();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Dc(e,n,this.Ye,this.je,r);return this.je=tr(),this.Je=ca(),this.He=ca(),this.Ye=new Je(Re),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ip,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new at(Re),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new at(Re),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ip),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ca(){return new Je(oe.comparator)}function Ap(){return new Je(oe.comparator)}const rR={asc:"ASCENDING",desc:"DESCENDING"},sR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iR={and:"AND",or:"OR"};class oR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _u(t,e){return t.useProto3Json||bc(e)?e:{value:e}}function ja(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aR(t,e){return ja(t,e.toTimestamp())}function Cn(t){return xe(!!t,49232),de.fromTimestamp(function(n){const r=kr(n);return new We(r.seconds,r.nanos)}(t))}function fh(t,e){return yu(t,e).canonicalString()}function yu(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ay(t){const e=ze.fromString(t);return xe(fy(e),10190,{key:e.toString()}),e}function vu(t,e){return fh(t.databaseId,e.path)}function Cl(t,e){const n=ay(e);if(n.get(1)!==t.databaseId.projectId)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(ly(n))}function cy(t,e){return fh(t.databaseId,e)}function cR(t){const e=ay(t);return e.length===4?ze.emptyPath():ly(e)}function Eu(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ly(t){return xe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function bp(t,e,n){return{name:vu(t,e),fields:n.value.mapValue.fields}}function lR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(xe(f===void 0||typeof f=="string",58123),yt.fromBase64String(f||"")):(xe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),yt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?M.UNKNOWN:ry(u.code);return new J(f,u.message||"")}(o);n=new iy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cl(t,r.document.name),i=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):de.min(),c=new $t({mapValue:{fields:r.document.fields}}),l=Rt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new wa(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cl(t,r.document),i=r.readTime?Cn(r.readTime):de.min(),o=Rt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new wa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cl(t,r.document),i=r.removedTargetIds||[];n=new wa([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Xb(s,i),c=r.targetId;n=new sy(c,o)}}return n}function uR(t,e){let n;if(e instanceof Ro)n={update:bp(t,e.key,e.value)};else if(e instanceof lh)n={delete:vu(t,e.key)};else if(e instanceof Lr)n={update:bp(t,e.key,e.data),updateMask:vR(e.fieldMask)};else{if(!(e instanceof Qb))return ue(16599,{Vt:e.type});n={verify:vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Gs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof go)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:aR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function hR(t,e){return t&&t.length>0?(xe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Cn(s.updateTime):Cn(i);return o.isEqual(de.min())&&(o=Cn(i)),new Wb(o,s.transformResults||[])}(n,e))):[]}function fR(t,e){return{documents:[cy(t,e.path)]}}function dR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cy(t,s);const i=function(u){if(u.length!==0)return hy(_n.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Cs(m.field),direction:gR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=_u(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function pR(t){let e=cR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=uy(p);return m instanceof _n&&U_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new fo(Ps(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,bc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new qa(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new qa(_,m)}(n.endAt)),Ob(e,s,o,i,c,"F",l,u)}function mR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function uy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ps(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ps(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ps(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return st.create(Ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>uy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function gR(t){return rR[t]}function _R(t){return sR[t]}function yR(t){return iR[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function Ps(t){return _t.fromServerFormat(t.fieldPath)}function hy(t){return t instanceof st?function(n){if(n.op==="=="){if(fp(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NAN"}};if(hp(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fp(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NAN"}};if(hp(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(n.field),op:_R(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(s=>hy(s));return r.length===1?r[0]:{compositeFilter:{op:yR(n.op),filters:r}}}(t):ue(54877,{filter:t})}function vR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,r,s,i=de.min(),o=de.min(),c=yt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.yt=e}}function wR(t){const e=pR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.Cn=new IR}addToCollectionParentIndex(e,n){return this.Cn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Pr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class IR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dy=41943040;class Lt{static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(dy,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Qs(0)}static cr(){return new Qs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="LruGarbageCollector",AR=1048576;function Cp([t,e],[n,r]){const s=Re(t,n);return s===0?Re(e,r):s}class bR{constructor(e){this.Ir=e,this.buffer=new at(Cp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Cp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(Sp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){si(n)?ee(Sp,"Ignoring IndexedDB error during garbage collection: ",n):await ri(n)}await this.Vr(3e5)})}}class SR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Ac.ce);const r=new bR(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Rp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rp):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Rs()<=be.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function CR(t,e){return new SR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Gi(r.mutation,s,Qt.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const s=Zr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ni();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=tr();const o=Ki(),c=function(){return Ki()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Lr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Gi(f.mutation,u,f.mutation.getFieldMask(),We.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>c.set(u,new kR(f,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Ki();let s=new Je((o,c)=>o-c),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Qt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Se()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=G_();f.forEach(m=>{if(!i.has(m)){const _=ty(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):j_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Zr());let c=co,l=i;return o.next(u=>$.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Se())).next(f=>({batchId:c,changes:K_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=Ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ni();return this.indexManager.getCollectionParents(e,i).next(c=>$.forEach(c,l=>{const u=function(p,m){return new ii(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Rt.newInvalidDocument(f)))});let c=Ni();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Gi(f.mutation,u,Qt.empty(),We.now()),Pc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Cn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:wR(s.bundledQuery),readTime:Cn(s.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.overlays=new Je(oe.comparator),this.qr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Zr(),i=n.length+1,o=new oe(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Je((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Zr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Zr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return $.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jb(n,r));let i=this.qr.get(n);i===void 0&&(i=Se(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.Qr=new at(ct.$r),this.Ur=new at(ct.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ct(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new oe(new ze([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new oe(new ze([])),r=new ct(n,e),s=new ct(n,e+1);let i=Se();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return oe.comparator(e.key,n.key)||Re(e.Yr,n.Yr)}static Kr(e,n){return Re(e.Yr,n.Yr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new at(ct.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new ct(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?nh:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Re);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),$.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new ct(new oe(i),0);let c=new at(Re);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)},o),$.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return $.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ct(n,0),s=this.Zr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.ri=e,this.docs=function(){return new Je(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Rt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tr();const o=n.path,c=new oe(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||fb(hb(f),r)<=0||(s.has(f.key)||Pc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}ii(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LR(this)}getSize(e){return $.resolve(this.size)}}class LR extends PR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.persistence=e,this.si=new _s(n=>ih(n),oh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new dh,this.targetCount=0,this.ai=Qs.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),$.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Pr(n),$.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ac(0),this.li=!1,this.li=!0,this.hi=new OR,this.referenceDelegate=e(this),this.Pi=new FR(this),this.indexManager=new TR,this.remoteDocumentCache=function(s){return new MR(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new ER(n),this.Ii=new DR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new xR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new UR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return $.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class UR extends pb{constructor(e){super(),this.currentSequenceNumber=e}}class ph{constructor(e){this.persistence=e,this.Ri=new dh,this.Vi=null}static mi(e){return new ph(e)}get fi(){if(this.Vi)return this.Vi;throw ue(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,r=>{const s=oe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ha{constructor(e,n){this.persistence=e,this.pi=new _s(r=>_b(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=CR(this,n)}static mi(e,n){return new Ha(e,n)}Ei(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return $.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ya(e.data.value)),n}br(e,n,r){return $.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return VI()?8:mb(Pt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $R;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Rs()<=be.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(Rs()<=be.DEBUG&&ee("QueryEngine","Query:",Ss(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Rs()<=be.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):$.resolve())}ys(e,n){if(gp(n))return $.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=gu(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Se(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,gu(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,s){return gp(n)||s.isEqual(de.min())?$.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?$.resolve(null):(Rs()<=be.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ss(n)),this.vs(e,o,n,ub(s,co)).next(c=>c))})}Ds(e,n){let r=new at(z_(e));return n.forEach((s,i)=>{Pc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Rs()<=be.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ss(n)),this.ps.getDocumentsMatchingQuery(e,n,Pr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="LocalStore",qR=3e8;class jR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Je(Re),this.xs=new _s(i=>ih(i),oh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function HR(t,e,n,r){return new jR(t,e,n,r)}async function my(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Se();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function zR(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let _=$.resolve();return m.forEach(S=>{_=_.next(()=>f.getEntry(l,S)).next(k=>{const V=u.docVersions.get(S);xe(V!==null,48541),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Se();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function gy(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function WR(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(yt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(k,V,j){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=qR?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))});let l=tr(),u=Se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(KR(i,o,e.documentUpdates).next(f=>{l=f.ks,u=f.qs})),!r.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return $.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ms=s,i))}function KR(t,e,n){let r=Se(),s=Se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=tr();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(gh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function GR(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=nh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QR(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function wu(t,e,n){const r=ge(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!si(o))throw o;ee(gh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Pp(t,e,n){const r=ge(t);let s=de.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=ge(l),m=p.xs.get(f);return m!==void 0?$.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)}(r,o,Sn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Se())).next(c=>(YR(r,Mb(e),c),{documents:c,Qs:i})))}function YR(t,e,n){let r=t.Os.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class kp{constructor(){this.activeTargetIds=qb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JR{constructor(){this.Mo=new kp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new kp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="ConnectivityMonitor";class Dp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(Np,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(Np,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la=null;function Tu(){return la===null?la=function(){return 268435456+Math.round(2147483648*Math.random())}():la++,"0x"+la.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="RestConnection",ZR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===$a?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Tu(),c=this.zo(e,n.toUriEncodedString());ee(Pl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=ei(u);return this.Jo(e,c,l,r,f).then(p=>(ee(Pl,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Hs(Pl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ni}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=ZR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class nS extends eS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Tu();return new Promise((c,l)=>{const u=new y_;u.setWithCredentials(!0),u.listenOnce(v_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _a.NO_ERROR:const p=u.getResponseJson();ee(It,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case _a.TIMEOUT:ee(It,`RPC '${e}' ${o} timed out`),l(new J(M.DEADLINE_EXCEEDED,"Request time out"));break;case _a.HTTP_ERROR:const m=u.getStatus();if(ee(It,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_?.error;if(S&&S.status&&S.message){const k=function(j){const q=j.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(q)>=0?q:M.UNKNOWN}(S.status);l(new J(k,S.message))}else l(new J(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new J(M.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(It,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);ee(It,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Tu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=T_(),c=w_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");ee(It,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const S=new tS({Yo:V=>{_?ee(It,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(ee(It,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(It,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Zo:()=>p.close()}),k=(V,j,q)=>{V.listen(j,x=>{try{q(x)}catch(D){setTimeout(()=>{throw D},0)}})};return k(p,ki.EventType.OPEN,()=>{_||(ee(It,`RPC '${e}' stream ${s} transport opened.`),S.o_())}),k(p,ki.EventType.CLOSE,()=>{_||(_=!0,ee(It,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(p))}),k(p,ki.EventType.ERROR,V=>{_||(_=!0,Hs(It,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),S.a_(new J(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,ki.EventType.MESSAGE,V=>{if(!_){const j=V.data[0];xe(!!j,16349);const q=j,x=q?.error||q[0]?.error;if(x){ee(It,`RPC '${e}' stream ${s} received error:`,x);const D=x.status;let z=function(E){const y=rt[E];if(y!==void 0)return ry(y)}(D),te=x.message;z===void 0&&(z=M.INTERNAL,te="Unknown error status: "+D+" with message "+x.message),_=!0,S.a_(new J(z,te)),p.close()}else ee(It,`RPC '${e}' stream ${s} received:`,j),S.u_(j)}}),k(c,E_.STAT_EVENT,V=>{V.stat===lu.PROXY?ee(It,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===lu.NOPROXY&&ee(It,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.__()},0),S}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function kl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t){return new oR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="PersistentStream";class yy{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _y(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new J(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ee(Vp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ee(Vp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rS extends yy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=lR(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Cn(o.readTime):de.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Eu(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=pu(l)?{documents:fR(i,l)}:{query:dR(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=oy(i,o.resumeToken);const u=_u(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){c.readTime=ja(i,o.snapshotVersion.toTimestamp());const u=_u(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=mR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Eu(this.serializer),n.removeTarget=e,this.q_(n)}}class sS extends yy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=hR(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Eu(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uR(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{}class oS extends iS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,yu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(M.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,yu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class aS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(er(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="RemoteStore";class cS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ys(this)&&(ee(us,"Restarting streams for network reachability change."),await async function(l){const u=ge(l);u.Ea.add(4),await Co(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Oc(u)}(this))})}),this.Ra=new aS(r,s)}}async function Oc(t){if(ys(t))for(const e of t.da)await e(!0)}async function Co(t){for(const e of t.da)await e(!1)}function vy(t,e){const n=ge(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Eh(n)?vh(n):oi(n).O_()&&yh(n,e))}function _h(t,e){const n=ge(t),r=oi(n);n.Ia.delete(e),r.O_()&&Ey(n,e),n.Ia.size===0&&(r.O_()?r.L_():ys(n)&&n.Ra.set("Unknown"))}function yh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oi(t).Y_(e)}function Ey(t,e){t.Va.Ue(e),oi(t).Z_(e)}function vh(t){t.Va=new nR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),oi(t).start(),t.Ra.ua()}function Eh(t){return ys(t)&&!oi(t).x_()&&t.Ia.size>0}function ys(t){return ge(t).Ea.size===0}function wy(t){t.Va=void 0}async function lS(t){t.Ra.set("Online")}async function uS(t){t.Ia.forEach((e,n)=>{yh(t,e)})}async function hS(t,e){wy(t),Eh(t)?(t.Ra.ha(e),vh(t)):t.Ra.set("Unknown")}async function fS(t,e,n){if(t.Ra.set("Online"),e instanceof iy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){ee(us,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await za(t,r)}else if(e instanceof wa?t.Va.Ze(e):e instanceof sy?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const r=await gy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(yt.EMPTY_BYTE_STRING,f.snapshotVersion)),Ey(i,l);const p=new Er(f.target,l,u,f.sequenceNumber);yh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee(us,"Failed to raise snapshot:",r),await za(t,r)}}async function za(t,e,n){if(!si(e))throw e;t.Ea.add(1),await Co(t),t.Ra.set("Offline"),n||(n=()=>gy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(us,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Oc(t)})}function Ty(t,e){return e().catch(n=>za(t,n,e))}async function xc(t){const e=ge(t),n=Vr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:nh;for(;dS(e);)try{const s=await GR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,pS(e,s)}catch(s){await za(e,s)}Iy(e)&&Ay(e)}function dS(t){return ys(t)&&t.Ta.length<10}function pS(t,e){t.Ta.push(e);const n=Vr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Iy(t){return ys(t)&&!Vr(t).x_()&&t.Ta.length>0}function Ay(t){Vr(t).start()}async function mS(t){Vr(t).ra()}async function gS(t){const e=Vr(t);for(const n of t.Ta)e.ea(n.mutations)}async function _S(t,e,n){const r=t.Ta.shift(),s=uh.from(r,e,n);await Ty(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xc(t)}async function yS(t,e){e&&Vr(t).X_&&await async function(r,s){if(function(o){return Zb(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();Vr(r).B_(),await Ty(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xc(r)}}(t,e),Iy(t)&&Ay(t)}async function Op(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ee(us,"RemoteStore received new credentials");const r=ys(n);n.Ea.add(3),await Co(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Oc(n)}async function vS(t,e){const n=ge(t);e?(n.Ea.delete(2),await Oc(n)):e||(n.Ea.add(2),await Co(n),n.Ra.set("Unknown"))}function oi(t){return t.ma||(t.ma=function(n,r,s){const i=ge(n);return i.sa(),new rS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:lS.bind(null,t),t_:uS.bind(null,t),r_:hS.bind(null,t),H_:fS.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Eh(t)?vh(t):t.Ra.set("Unknown")):(await t.ma.stop(),wy(t))})),t.ma}function Vr(t){return t.fa||(t.fa=function(n,r,s){const i=ge(n);return i.sa(),new sS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:mS.bind(null,t),r_:yS.bind(null,t),ta:gS.bind(null,t),na:_S.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await xc(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(us,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new wh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Th(t,e){if(er("AsyncQueue",`${e}: ${t}`),si(t))return new J(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{static emptySet(e){return new Us(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=Ni(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.ga=new Je(oe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ue(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ys(e,n,Us.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class wS{constructor(){this.queries=Mp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Mp(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new J(M.ABORTED,"Firestore shutting down"))}}function Mp(){return new _s(t=>H_(t),Cc)}async function Ih(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new ES,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Th(o,`Initialization of query '${Ss(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&bh(n)}async function Ah(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function TS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&bh(n)}function IS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function bh(t){t.Ca.forEach(e=>{e.next()})}var Iu,Lp;(Lp=Iu||(Iu={})).Ma="default",Lp.Cache="cache";class Rh{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Iu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.key=e}}class Ry{constructor(e){this.key=e}}class AS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Se(),this.mutatedKeys=Se(),this.eu=z_(e),this.tu=new Us(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new xp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=Pc(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let V=!1;m&&_?m.data.isEqual(_.data)?S!==k&&(r.track({type:3,doc:_}),V=!0):this.su(m,_)||(r.track({type:2,doc:_}),V=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),V=!0):m&&!_&&(r.track({type:1,doc:m}),V=!0,(l||u)&&(c=!0)),V&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(_,S){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Rt:V})}};return k(_)-k(S)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ys(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Ry(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new by(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ys.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Sh="SyncEngine";class bS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RS{constructor(e){this.key=e,this.hu=!1}}class SS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new _s(c=>H_(c),Cc),this.Iu=new Map,this.Eu=new Set,this.du=new Je(oe.comparator),this.Au=new Map,this.Ru=new dh,this.Vu={},this.mu=new Map,this.fu=Qs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function CS(t,e,n=!0){const r=Dy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Sy(r,e,n,!0),s}async function PS(t,e){const n=Dy(t);await Sy(n,e,!0,!1)}async function Sy(t,e,n,r){const s=await QR(t.localStore,Sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await kS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&vy(t.remoteStore,s),c}async function kS(t,e,n,r,s){t.pu=(p,m,_)=>async function(k,V,j,q){let x=V.view.ru(j);x.Cs&&(x=await Pp(k.localStore,V.query,!1).then(({documents:b})=>V.view.ru(b,x)));const D=q&&q.targetChanges.get(V.targetId),z=q&&q.targetMismatches.get(V.targetId)!=null,te=V.view.applyChanges(x,k.isPrimaryClient,D,z);return Up(k,V.targetId,te.au),te.snapshot}(t,p,m,_);const i=await Pp(t.localStore,e,!0),o=new AS(e,i.Qs),c=o.ru(i.documents),l=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Up(t,n,u.au);const f=new bS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function NS(t,e,n){const r=ge(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Cc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&_h(r.remoteStore,s.targetId),Au(r,s.targetId)}).catch(ri)):(Au(r,s.targetId),await wu(r.localStore,s.targetId,!0))}async function DS(t,e){const n=ge(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_h(n.remoteStore,r.targetId))}async function VS(t,e,n){const r=$S(t);try{const s=await function(o,c){const l=ge(o),u=We.now(),f=c.reduce((_,S)=>_.add(S.key),Se());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=tr(),k=Se();return l.Ns.getEntries(_,f).next(V=>{S=V,S.forEach((j,q)=>{q.isValidDocument()||(k=k.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(V=>{p=V;const j=[];for(const q of c){const x=Gb(q,p.get(q.key).overlayedDocument);x!=null&&j.push(new Lr(q.key,x,M_(x.value.mapValue),jt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,j,c)}).next(V=>{m=V;const j=V.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,V.batchId,j)})}).then(()=>({batchId:m.batchId,changes:K_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Je(Re)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Po(r,s.changes),await xc(r.remoteStore)}catch(s){const i=Th(s,"Failed to persist write");n.reject(i)}}async function Cy(t,e){const n=ge(t);try{const r=await WR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?xe(o.hu,14607):s.removedDocuments.size>0&&(xe(o.hu,42227),o.hu=!1))}),await Po(n,r,e)}catch(r){await ri(r)}}function Fp(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ge(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)}),u&&bh(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OS(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Je(oe.comparator);o=o.insert(i,Rt.newNoDocument(i,de.min()));const c=Se().add(i),l=new Dc(de.min(),new Map,new Je(Re),o,c);await Cy(r,l),r.du=r.du.remove(i),r.Au.delete(e),Ch(r)}else await wu(r.localStore,e,!1).then(()=>Au(r,e,n)).catch(ri)}async function xS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await zR(n.localStore,e);ky(n,r,null),Py(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Po(n,s)}catch(s){await ri(s)}}async function MS(t,e,n){const r=ge(t);try{const s=await function(o,c){const l=ge(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(xe(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);ky(r,e,n),Py(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Po(r,s)}catch(s){await ri(s)}}function Py(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function ky(t,e,n){const r=ge(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Ny(t,r)})}function Ny(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(_h(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Ch(t))}function Up(t,e,n){for(const r of n)r instanceof by?(t.Ru.addReference(r.key,e),LS(t,r)):r instanceof Ry?(ee(Sh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Ny(t,r.key)):ue(19791,{wu:r})}function LS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(Sh,"New document in limbo: "+n),t.Eu.add(r),Ch(t))}function Ch(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new oe(ze.fromString(e)),r=t.fu.next();t.Au.set(r,new RS(n)),t.du=t.du.insert(n,r),vy(t.remoteStore,new Er(Sn(Sc(n.path)),r,"TargetPurposeLimboResolution",Ac.ce))}}async function Po(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=mh.As(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const f=ge(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,m=>$.forEach(m.Es,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>$.forEach(m.ds,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!si(p))throw p;ee(gh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(m,k)}}}(r.localStore,i))}async function FS(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ee(Sh,"User change. New user:",e.toKey());const r=await my(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new J(M.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Po(n,r.Ls)}}function US(t,e){const n=ge(t),r=n.Au.get(e);if(r&&r.hu)return Se().add(r.key);{let s=Se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Dy(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=US.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OS.bind(null,e),e.Pu.H_=TS.bind(null,e.eventManager),e.Pu.yu=IS.bind(null,e.eventManager),e}function $S(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MS.bind(null,e),e}class Wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return HR(this.persistence,new BR,e.initialUser,this.serializer)}Cu(e){return new py(ph.mi,this.serializer)}Du(e){return new JR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wa.provider={build:()=>new Wa};class BS extends Wa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){xe(this.persistence.referenceDelegate instanceof Ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new RR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new py(r=>Ha.mi(r,n),this.serializer)}}class bu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FS.bind(null,this.syncEngine),await vS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wS}()}createDatastore(e){const n=Vc(e.databaseInfo.databaseId),r=function(i){return new nS(i)}(e.databaseInfo);return function(i,o,c,l){return new oS(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new cS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Fp(this.syncEngine,n,0),function(){return Dp.v()?new Dp:new XR}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new SS(s,i,o,c,l,u);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=ge(n);ee(us,"RemoteStore shutting down."),r.Ea.add(5),await Co(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}bu.provider={build:()=>new bu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="FirestoreClient";class qS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=th.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Th(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nl(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await my(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $p(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jS(t);ee(Or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Op(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Op(e.remoteStore,s)),t._onlineComponents=e}async function jS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Or,"Using user provided OfflineComponentProvider");try{await Nl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hs("Error using user provided cache. Falling back to memory cache: "+n),await Nl(t,new Wa)}}else ee(Or,"Using default OfflineComponentProvider"),await Nl(t,new BS(void 0));return t._offlineComponents}async function Vy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Or,"Using user provided OnlineComponentProvider"),await $p(t,t._uninitializedComponentsProvider._online)):(ee(Or,"Using default OnlineComponentProvider"),await $p(t,new bu))),t._onlineComponents}function HS(t){return Vy(t).then(e=>e.syncEngine)}async function Ka(t){const e=await Vy(t),n=e.eventManager;return n.onListen=CS.bind(null,e.syncEngine),n.onUnlisten=NS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DS.bind(null,e.syncEngine),n}function zS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Ph({next:m=>{f.Nu(),o.enqueueAndForget(()=>Ah(i,p));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new J(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new J(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Rh(Sc(c.path),f,{includeMetadataChanges:!0,qa:!0});return Ih(i,p)}(await Ka(t),t.asyncQueue,e,n,r)),r.promise}function WS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Ph({next:m=>{f.Nu(),o.enqueueAndForget(()=>Ah(i,p)),m.fromCache&&l.source==="server"?u.reject(new J(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Rh(c,f,{includeMetadataChanges:!0,qa:!0});return Ih(i,p)}(await Ka(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="firestore.googleapis.com",qp=!0;class jp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xy,this.ssl=qp}else this.host=e.host,this.ssl=e.ssl??qp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<AR)throw new J(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oy(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ZA;switch(r.type){case"firstParty":return new rb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bp.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Bp.delete(n),r.terminate())}(this),Promise.resolve()}}function KS(t,e,n,r={}){t=qt(t,Mc);const s=ei(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(o_(`https://${c}`),a_("Firestore",!0)),i.host!==xy&&i.host!==c&&Hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Xn(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=At.MOCK_USER;else{u=bI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new At(p)}t._authCredentials=new eb(new A_(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(bo(n,et._jsonSchema))return new et(e,r||null,new oe(ze.fromString(n.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:it("string",et._jsonSchemaVersion),referencePath:it("string")};class Rr extends Fr{constructor(e,n,r){super(e,n,Sc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new oe(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function bn(t,e,...n){if(t=Ye(t),b_("collection","path",e),t instanceof Mc){const r=ze.fromString(e,...n);return np(r),new Rr(t,null,r)}{if(!(t instanceof et||t instanceof Rr))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return np(r),new Rr(t.firestore,null,r)}}function He(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=th.newId()),b_("doc","path",e),t instanceof Mc){const r=ze.fromString(e,...n);return tp(r),new et(t,null,new oe(r))}{if(!(t instanceof et||t instanceof Rr))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return tp(r),new et(t.firestore,t instanceof Rr?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="AsyncQueue";class zp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _y(this,"async_queue_retry"),this._c=()=>{const r=kl();r&&ee(Hp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=kl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Gn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!si(e))throw e;ee(Hp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",Wp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=wh.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ue(47125,{Pc:Wp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Wp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class nr extends Mc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new zp,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zp(e),this._firestoreClient=void 0,await e}}}function GS(t,e){const n=typeof t=="object"?t:Zu(),r=typeof t=="string"?t:$a,s=gs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=II("firestore");i&&KS(s,...i)}return s}function ko(t){if(t._terminated)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||QS(t),t._firestoreClient}function QS(t){const e=t._freezeSettings(),n=function(s,i,o,c){return new Eb(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Oy(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new qS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(yt.fromBase64String(e))}catch(n){throw new J(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bo(e,tn._jsonSchema))return tn.fromBase64String(e.bytes)}}tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:it("string",tn._jsonSchemaVersion),bytes:it("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pn._jsonSchemaVersion}}static fromJSON(e){if(bo(e,Pn._jsonSchema))return new Pn(e.latitude,e.longitude)}}Pn._jsonSchemaVersion="firestore/geoPoint/1.0",Pn._jsonSchema={type:it("string",Pn._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bo(e,kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new kn(e.vectorValues);throw new J(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kn._jsonSchemaVersion="firestore/vectorValue/1.0",kn._jsonSchema={type:it("string",kn._jsonSchemaVersion),vectorValues:it("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=/^__.*__$/;class JS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}class My{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ly(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{Ac:t})}}class Lc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Lc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ga(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ly(this.Ac)&&YS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class XS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vc(e)}Cc(e,n,r,s=!1){return new Lc({Ac:e,methodName:n,Dc:r,path:_t.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Do(t){const e=t._freezeSettings(),n=Vc(t._databaseId);return new XS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kh(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Oh("Data must be an object, but it was:",o,r);const c=$y(r,o);let l,u;if(i.merge)l=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Ru(e,p,n);if(!o.contains(m))throw new J(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);qy(f,m)||f.push(m)}l=new Qt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new JS(new $t(c),l,u)}class Vo extends ai{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vo}}function ZS(t,e,n){return new Lc({Ac:3,Dc:e.settings.Dc,methodName:t._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Nh extends ai{_toFieldTransform(e){return new ch(e.path,new po)}isEqual(e){return e instanceof Nh}}class Dh extends ai{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=ZS(this,e,!0),r=this.vc.map(i=>ci(i,n)),s=new Gs(r);return new ch(e.path,s)}isEqual(e){return e instanceof Dh&&Xn(this.vc,e.vc)}}class Vh extends ai{constructor(e,n){super(e),this.Fc=n}_toFieldTransform(e){const n=new go(e.serializer,Y_(e.serializer,this.Fc));return new ch(e.path,n)}isEqual(e){return e instanceof Vh&&this.Fc===e.Fc}}function Fy(t,e,n,r){const s=t.Cc(1,e,n);Oh("Data must be an object, but it was:",s,r);const i=[],o=$t.empty();Mr(r,(l,u)=>{const f=xh(e,l,n);u=Ye(u);const p=s.yc(f);if(u instanceof Vo)i.push(f);else{const m=ci(u,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new Qt(i);return new My(o,c,s.fieldTransforms)}function Uy(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[Ru(e,r,n)],l=[s];if(i.length%2!=0)throw new J(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Ru(e,i[m])),l.push(i[m+1]);const u=[],f=$t.empty();for(let m=c.length-1;m>=0;--m)if(!qy(u,c[m])){const _=c[m];let S=l[m];S=Ye(S);const k=o.yc(_);if(S instanceof Vo)u.push(_);else{const V=ci(S,k);V!=null&&(u.push(_),f.set(_,V))}}const p=new Qt(u);return new My(f,p,o.fieldTransforms)}function eC(t,e,n,r=!1){return ci(n,t.Cc(r?4:3,e))}function ci(t,e){if(By(t=Ye(t)))return Oh("Unsupported field value:",e,t),$y(t,e);if(t instanceof ai)return function(r,s){if(!Ly(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ci(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Y_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:ja(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ja(s.serializer,i)}}if(r instanceof Pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:oy(s.serializer,r._byteString)};if(r instanceof et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof kn)return function(o,c){return{mapValue:{fields:{[O_]:{stringValue:x_},[Ba]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return ah(c.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ic(r)}`)}(t,e)}function $y(t,e){const n={};return C_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,s)=>{const i=ci(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function By(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Pn||t instanceof tn||t instanceof et||t instanceof ai||t instanceof kn)}function Oh(t,e,n){if(!By(n)||!R_(n)){const r=Ic(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Ru(t,e,n){if((e=Ye(e))instanceof No)return e._internalPath;if(typeof e=="string")return xh(t,e);throw Ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const tC=new RegExp("[~\\*/\\[\\]]");function xh(t,e,n){if(e.search(tC)>=0)throw Ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new No(...e.split("."))._internalPath}catch{throw Ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ga(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(M.INVALID_ARGUMENT,c+t+l)}function qy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nC extends jy{data(){return super.data()}}function Fc(t,e){return typeof e=="string"?xh(t,e):e instanceof No?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mh{}class zy extends Mh{}function es(t,e,...n){let r=[];e instanceof Mh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Lh).length,c=i.filter(l=>l instanceof Uc).length;if(o>1||o>0&&c>0)throw new J(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Uc extends zy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uc(e,n,r)}_apply(e){const n=this._parse(e);return Wy(e._query,n),new Fr(e.firestore,e.converter,mu(e._query,n))}_parse(e){const n=Do(e.firestore);return function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Qp(p,f);const S=[];for(const k of p)S.push(Gp(l,i,k));m={arrayValue:{values:S}}}else m=Gp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Qp(p,f),m=eC(c,o,p,f==="in"||f==="not-in");return st.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $s(t,e,n){const r=e,s=Fc("where",t);return Uc._create(s,r,n)}class Lh extends Mh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Wy(o,l),o=mu(o,l)}(e._query,n),new Fr(e.firestore,e.converter,mu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fh extends zy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Fh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new J(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fo(i,o)}(e._query,this._field,this._direction);return new Fr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ii(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function rC(t,e="asc"){const n=e,r=Fc("orderBy",t);return Fh._create(r,n)}function Gp(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new J(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!j_(e)&&n.indexOf("/")!==-1)throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ze.fromString(n));if(!oe.isDocumentKey(r))throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return up(t,new oe(r))}if(n instanceof et)return up(t,n._key);throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ic(n)}.`)}function Qp(t,e){if(!Array.isArray(t)||t.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sC{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[Ba].arrayValue?.values?.map(r=>nt(r.doubleValue));return new kn(n)}convertGeoPoint(e){return new Pn(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(lo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);xe(fy(r),9688,{name:e});const s=new uo(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends jy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=is._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:it("string",is._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class Ta extends is{data(e={}){return super.data(e)}}class os{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new Vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ta(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ta(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:iC(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=th.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function iC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){t=qt(t,et);const e=qt(t.firestore,nr);return zS(ko(e),t._key).then(n=>Ky(e,t,n))}os._jsonSchemaVersion="firestore/querySnapshot/1.0",os._jsonSchema={type:it("string",os._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class $h extends sC{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function Qi(t){t=qt(t,Fr);const e=qt(t.firestore,nr),n=ko(e),r=new $h(e);return Hy(t._query),WS(n,t._query).then(s=>new os(e,r,t,s))}function as(t,e,n){t=qt(t,et);const r=qt(t.firestore,nr),s=Uh(t.converter,e,n);return $c(r,[kh(Do(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jt.none())])}function Oi(t,e,n,...r){t=qt(t,et);const s=qt(t.firestore,nr),i=Do(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof No?Uy(i,"updateDoc",t._key,e,n,r):Fy(i,"updateDoc",t._key,e),$c(s,[o.toMutation(t._key,jt.exists(!0))])}function Dl(t,e){const n=qt(t.firestore,nr),r=He(t),s=Uh(t.converter,e);return $c(n,[kh(Do(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function _o(t,...e){t=Ye(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Kp(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Kp(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,c;if(t instanceof et)o=qt(t.firestore,nr),c=Sc(t._key.path),i={next:l=>{e[r]&&e[r](Ky(o,t,l))},error:e[r+1],complete:e[r+2]};else{const l=qt(t,Fr);o=qt(l.firestore,nr),c=l._query;const u=new $h(o);i={next:f=>{e[r]&&e[r](new os(o,u,l,f))},error:e[r+1],complete:e[r+2]},Hy(t._query)}return function(u,f,p,m){const _=new Ph(m),S=new Rh(f,_,p);return u.asyncQueue.enqueueAndForget(async()=>Ih(await Ka(u),S)),()=>{_.Nu(),u.asyncQueue.enqueueAndForget(async()=>Ah(await Ka(u),S))}}(ko(o),c,s,i)}function $c(t,e){return function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget(async()=>VS(await HS(r),s,i)),i.promise}(ko(t),e)}function Ky(t,e,n){const r=n.docs.get(e._key),s=new $h(t);return new is(t,s,e._key,r,new Vi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Do(e)}set(e,n,r){this._verifyNotCommitted();const s=Vl(e,this._firestore),i=Uh(s.converter,n,r),o=kh(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,jt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Vl(e,this._firestore);let o;return o=typeof(n=Ye(n))=="string"||n instanceof No?Uy(this._dataReader,"WriteBatch.update",i._key,n,r,s):Fy(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,jt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Vl(e,this._firestore);return this._mutations=this._mutations.concat(new lh(n._key,jt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new J(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vl(t,e){if((t=Ye(t)).firestore!==e)throw new J(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(){return new Vo("deleteField")}function Ns(){return new Nh("serverTimestamp")}function wD(...t){return new Dh("arrayUnion",t)}function cC(t){return new Vh("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t){return ko(t=qt(t,nr)),new oC(t,e=>$c(t,e))}(function(e,n=!0){(function(s){ni=s})(ti),On(new gn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new nr(new tb(r.getProvider("auth-internal")),new sb(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),sn(Jd,Xd,e),sn(Jd,Xd,"esm2020")})();function Gy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lC=Gy,Qy=new ms("auth","Firebase",Gy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Tc("@firebase/auth");function uC(t,...e){Qa.logLevel<=be.WARN&&Qa.warn(`Auth (${ti}): ${t}`,...e)}function Ia(t,...e){Qa.logLevel<=be.ERROR&&Qa.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw qh(t,...e)}function pn(t,...e){return qh(t,...e)}function Bh(t,e,n){const r={...lC(),[e]:n};return new ms("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return Bh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yy(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&an(t,"argument-error"),Bh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qy.create(t,...e)}function le(t,e,...n){if(!t)throw qh(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function rr(t,e){t||zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(){return typeof self<"u"&&self.location?.href||""}function hC(){return Jp()==="http:"||Jp()==="https:"}function Jp(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hC()||c_()||"connection"in navigator)?navigator.onLine:!0}function dC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=CI()||NI()}get(){return fC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gC=new Oo(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ir(t,e,n,r,s={}){return Xy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ao({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return kI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ei(t.emulatorConfig.host)&&(u.credentials="include"),Jy.fetch()(await Zy(t,t.config.apiHost,n,c),u)})}async function Xy(t,e,n){t._canInitEmulator=!1;const r={...pC,...e};try{const s=new yC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ua(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ua(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ua(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bh(t,f,u);an(t,f)}}catch(s){if(s instanceof vn)throw s;an(t,"network-request-failed",{message:String(s)})}}async function xo(t,e,n,r,s={}){const i=await ir(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Zy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?jh(t.config,s):`${t.config.apiScheme}://${s}`;return mC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function _C(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),gC.get())})}}function ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pn(t,e,r);return s.customData._tokenResponse=n,s}function Xp(t){return t!==void 0&&t.enterprise!==void 0}class vC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _C(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function EC(t,e){return ir(t,"GET","/v2/recaptchaConfig",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function Ya(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TC(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Hh(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Yi(Ol(s.auth_time)),issuedAtTime:Yi(Ol(s.iat)),expirationTime:Yi(Ol(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ol(t){return Number(t)*1e3}function Hh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const s=n_(n);return s?JSON.parse(s):(Ia("Failed to decode base64 JWT payload"),null)}catch(s){return Ia("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Zp(t){const e=Hh(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&IC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(t){const e=t.auth,n=await t.getIdToken(),r=await Js(t,Ya(e,{idToken:n}));le(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?ev(s.providerUserInfo):[],o=RC(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Cu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function bC(t){const e=Ye(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ev(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(t,e){const n=await Xy(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Zy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&ei(t.emulatorConfig.host)&&(l.credentials="include"),Jy.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CC(t,e){return ir(t,"POST","/v2/accounts:revokeToken",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Zp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await SC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bs;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new AC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TC(this,e)}reload(){return bC(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await Js(this,wC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:S,stsTokenManager:k}=n;le(p&&k,e,"internal-error");const V=Bs.fromJSON(this.name,k);le(typeof p=="string",e,"internal-error"),hr(r,e.name),hr(s,e.name),le(typeof m=="boolean",e,"internal-error"),le(typeof _=="boolean",e,"internal-error"),hr(i,e.name),hr(o,e.name),hr(c,e.name),hr(l,e.name),hr(u,e.name),hr(f,e.name);const j=new hn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:u,lastLoginAt:f});return S&&Array.isArray(S)&&(j.providerData=S.map(q=>({...q}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bs;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ja(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ev(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Bs;c.updateFromIdToken(r);const l=new hn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Cu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new Map;function Wn(t){rr(t instanceof Function,"Expected a class definition");let e=em.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,em.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tv.type="NONE";const tm=tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Aa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Aa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ya(this.auth,{idToken:e}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(Wn(tm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Wn(tm);const o=Aa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Ya(e,{idToken:f}).catch(()=>{});if(!m)break;p=await hn._fromGetAccountInfoResponse(e,m,f)}else p=hn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new qs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(av(e))return"Blackberry";if(cv(e))return"Webos";if(rv(e))return"Safari";if((e.includes("chrome/")||sv(e))&&!e.includes("edge/"))return"Chrome";if(ov(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function nv(t=Pt()){return/firefox\//i.test(t)}function rv(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sv(t=Pt()){return/crios\//i.test(t)}function iv(t=Pt()){return/iemobile/i.test(t)}function ov(t=Pt()){return/android/i.test(t)}function av(t=Pt()){return/blackberry/i.test(t)}function cv(t=Pt()){return/webos/i.test(t)}function zh(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PC(t=Pt()){return zh(t)&&!!window.navigator?.standalone}function kC(){return DI()&&document.documentMode===10}function lv(t=Pt()){return zh(t)||ov(t)||cv(t)||av(t)||/windows phone/i.test(t)||iv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t,e=[]){let n;switch(t){case"Browser":n=nm(Pt());break;case"Worker":n=`${nm(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e={}){return ir(t,"GET","/v2/passwordPolicy",Ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=6;class OC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??VC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rm(this),this.idTokenSubscription=new rm(this),this.beforeStateQueue=new NC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ya(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ut(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(Nn(this));const n=e?Ye(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DC(this),n=new OC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CC(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&uC(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Mn(t){return Ye(t)}class rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=UI(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MC(t){Bc=t}function hv(t){return Bc.loadJS(t)}function LC(){return Bc.recaptchaEnterpriseScript}function FC(){return Bc.gapiScript}function UC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $C{constructor(){this.enterprise=new BC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class BC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qC="recaptcha-enterprise",fv="NO_RECAPTCHA";class jC{constructor(e){this.type=qC,this.auth=Mn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{EC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new vC(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Xp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(fv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $C().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Xp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=LC();l.length!==0&&(l+=c),hv(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function sm(t,e,n,r=!1,s=!1){const i=new jC(t);let o;if(s)o=fv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Pu(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await sm(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){const n=gs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xn(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function zC(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Wn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function WC(t,e,n){const r=Mn(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=dv(e),{host:o,port:c}=KC(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Xn(u,r.config.emulator)&&Xn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ei(o)?(o_(`${i}//${o}${l}`),a_("Auth",!0)):GC()}function dv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KC(t){const e=dv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:im(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:im(o)}}}function im(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function QC(t,e){return ir(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e){return xo(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t,e){return xo(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function XC(t,e){return xo(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Wh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pu(e,n,"signInWithPassword",YC);case"emailLink":return JC(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pu(e,r,"signUpPassword",QC);case"emailLink":return XC(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return xo(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="http://localhost";class hs extends Wh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:ZC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t0(t){const e=Ci(Pi(t)).link,n=e?Ci(Pi(e)).deep_link_id:null,r=Ci(Pi(t)).deep_link_id;return(r?Ci(Pi(r)).link:null)||r||n||e||t}class Kh{constructor(e){const n=Ci(Pi(e)),r=n.apiKey??null,s=n.oobCode??null,i=e0(n.mode??null);le(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=t0(e);try{return new Kh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.providerId=li.PROVIDER_ID}static credential(e,n){return yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kh.parseLink(n);return le(r,"argument-error"),yo._fromEmailAndCode(e,r.code,r.tenantId)}}li.PROVIDER_ID="password";li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Mo{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Mo{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.GITHUB_SIGN_IN_METHOD="github.com";yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Mo{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e){return xo(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),o=om(r);return new fs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=om(r);return new fs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends vn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xa(e,n,r,s)}}function pv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xa._fromErrorAndOperation(t,i,e,r):i})}async function r0(t,e,n=!1){const r=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(Nn(r));const s="reauthenticate";try{const i=await Js(t,pv(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=Hh(i.idToken);le(o,r,"internal-error");const{sub:c}=o;return le(t.uid===c,r,"user-mismatch"),fs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e,n=!1){if(Ut(t.app))return Promise.reject(Nn(t));const r="signIn",s=await pv(t,r,e),i=await fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function i0(t,e){return mv(Mn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(t){const e=Mn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function o0(t,e,n){if(Ut(t.app))return Promise.reject(Nn(t));const r=Mn(t),o=await Pu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",n0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gv(t),l}),c=await fs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function a0(t,e,n){return Ut(t.app)?Promise.reject(Nn(t)):i0(Ye(t),li.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gv(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t,e){return ir(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Js(r,c0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function u0(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function h0(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function ui(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function f0(t){return Ye(t).signOut()}const Za="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Za,"1"),this.storage.removeItem(Za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=1e3,p0=10;class yv extends _v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,p0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},d0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yv.type="LOCAL";const m0=yv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv extends _v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vv.type="SESSION";const Ev=vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await g0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Gh("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}function y0(t){Dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function v0(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E0(){return navigator?.serviceWorker?.controller||null}function w0(){return wv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="firebaseLocalStorageDb",T0=1,ec="firebaseLocalStorage",Iv="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([ec],e?"readwrite":"readonly").objectStore(ec)}function I0(){const t=indexedDB.deleteDatabase(Tv);return new Lo(t).toPromise()}function ku(){const t=indexedDB.open(Tv,T0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ec,{keyPath:Iv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ec)?e(r):(r.close(),await I0(),e(await ku()))})})}async function am(t,e,n){const r=Hc(t,!0).put({[Iv]:e,value:n});return new Lo(r).toPromise()}async function A0(t,e){const n=Hc(t,!1).get(e),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function cm(t,e){const n=Hc(t,!0).delete(e);return new Lo(n).toPromise()}const b0=800,R0=3;class Av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ku(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>R0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(w0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await v0(),!this.activeServiceWorker)return;this.sender=new _0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ku();return await am(e,Za,"1"),await cm(e,Za),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>am(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>A0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hc(s,!1).getAll();return new Lo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Av.type="LOCAL";const S0=Av;new Oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t,e){return e?Wn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends Wh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function C0(t){return mv(t.auth,new Yh(t),t.bypassAuthState)}function P0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),s0(n,new Yh(t),t.bypassAuthState)}async function k0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),r0(n,new Yh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return C0;case"linkViaPopup":case"linkViaRedirect":return k0;case"reauthViaPopup":case"reauthViaRedirect":return P0;default:an(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=new Oo(2e3,1e4);async function Rv(t,e,n){if(Ut(t.app))return Promise.reject(pn(t,"operation-not-supported-in-this-environment"));const r=Mn(t);Yy(t,e,qc);const s=Qh(r,n);return new ts(r,"signInViaPopup",e,s).executeNotNull()}class ts extends bv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N0.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="pendingRedirect",ba=new Map;class V0 extends bv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ba.get(this.auth._key());if(!e){try{const r=await O0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ba.set(this.auth._key(),e)}return this.bypassAuthState||ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O0(t,e){const n=Cv(e),r=Sv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function x0(t,e){return Sv(t)._set(Cv(e),"true")}function M0(t,e){ba.set(t._key(),e)}function Sv(t){return Wn(t._redirectPersistence)}function Cv(t){return Aa(D0,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t,e,n){return L0(t,e,n)}async function L0(t,e,n){if(Ut(t.app))return Promise.reject(Nn(t));const r=Mn(t);Yy(t,e,qc),await r._initializationPromise;const s=Qh(r,n);return await x0(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function kv(t,e){return await Mn(t)._initializationPromise,Nv(t,e,!1)}async function Nv(t,e,n=!1){if(Ut(t.app))return Promise.reject(Nn(t));const r=Mn(t),s=Qh(r,e),o=await new V0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=600*1e3;class U0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Dv(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(pn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F0&&this.cachedEventUids.clear(),this.cachedEventUids.has(lm(e))}saveEventToCache(e){this.cachedEventUids.add(lm(e)),this.lastProcessedEventTime=Date.now()}}function lm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function $0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j0=/^https?/;async function H0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B0(t);for(const n of e)try{if(z0(n))return}catch{}an(t,"unauthorized-domain")}function z0(t){const e=Su(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!j0.test(n))return!1;if(q0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new Oo(3e4,6e4);function um(){const t=Dn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function K0(t){return new Promise((e,n)=>{function r(){um(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{um(),n(pn(t,"network-request-failed"))},timeout:W0.get()})}if(Dn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Dn().gapi?.load)r();else{const s=UC("iframefcb");return Dn()[s]=()=>{gapi.load?r():n(pn(t,"network-request-failed"))},hv(`${FC()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Ra=null,e})}let Ra=null;function G0(t){return Ra=Ra||K0(t),Ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=new Oo(5e3,15e3),Y0="__/auth/iframe",J0="emulator/auth/iframe",X0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eP(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jh(e,J0):`https://${t.config.authDomain}/${Y0}`,r={apiKey:e.apiKey,appName:t.name,v:ti},s=Z0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ao(r).slice(1)}`}async function tP(t){const e=await G0(t),n=Dn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:eP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),c=Dn().setTimeout(()=>{i(o)},Q0.get());function l(){Dn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rP=500,sP=600,iP="_blank",oP="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aP(t,e,n,r=rP,s=sP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...nP,width:r.toString(),height:s.toString(),top:i,left:o},u=Pt().toLowerCase();n&&(c=sv(u)?iP:n),nv(u)&&(e=e||oP,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(PC(u)&&c!=="_self")return cP(e||"",c),new hm(null);const p=window.open(e||"",c,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new hm(p)}function cP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP="__/auth/handler",uP="emulator/auth/handler",hP=encodeURIComponent("fac");async function fm(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:s};if(e instanceof qc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Mo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${hP}=${encodeURIComponent(l)}`:"";return`${fP(t)}?${Ao(c).slice(1)}${u}`}function fP({config:t}){return t.emulator?jh(t,uP):`https://${t.authDomain}/${lP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="webStorageSupport";class dP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ev,this._completeRedirectFn=Nv,this._overrideRedirectResult=M0}async _openPopup(e,n,r,s){rr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await fm(e,n,r,Su(),s);return aP(e,i,Gh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fm(e,n,r,Su(),s);return y0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tP(e),r=new U0(e);return n.register("authEvent",s=>(le(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xl,{type:xl},s=>{const i=s?.[0]?.[xl];i!==void 0&&n(!!i),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lv()||rv()||zh()}}const pP=dP;var dm="@firebase/auth",pm="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _P(t){On(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uv(t)},u=new xC(r,s,i,l);return zC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new gn("auth-internal",e=>{const n=Mn(e.getProvider("auth").getImmediate());return(r=>new mP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(dm,pm,gP(t)),sn(dm,pm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=300,vP=i_("authIdTokenMaxAge")||yP;let mm=null;const EP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vP)return;const s=n?.token;mm!==s&&(mm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wP(t=Zu()){const e=gs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HC(t,{popupRedirectResolver:pP,persistence:[S0,m0,Ev]}),r=i_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=EP(i.toString());h0(n,o,()=>o(n.currentUser)),u0(n,c=>o(c))}}const s=r_("auth");return s&&WC(n,`http://${s}`),n}function TP(){return document.getElementsByTagName("head")?.[0]??document}MC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",TP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_P("Browser");var IP="firebase",AP="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(IP,AP,"app");const Vv="@firebase/installations",Jh="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=1e4,xv=`w:${Jh}`,Mv="FIS_v2",bP="https://firebaseinstallations.googleapis.com/v1",RP=3600*1e3,SP="installations",CP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ds=new ms(SP,CP,PP);function Lv(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv({projectId:t}){return`${bP}/projects/${t}/installations`}function Uv(t){return{token:t.token,requestStatus:2,expiresIn:NP(t.expiresIn),creationTime:Date.now()}}async function $v(t,e){const r=(await e.json()).error;return ds.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Bv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kP(t,{refreshToken:e}){const n=Bv(t);return n.append("Authorization",DP(e)),n}async function qv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NP(t){return Number(t.replace("s","000"))}function DP(t){return`${Mv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Fv(t),s=Bv(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:Mv,appId:t.appId,sdkVersion:xv},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await qv(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Uv(u.authToken)}}else throw await $v("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/^[cdef][\w-]{21}$/,Nu="";function MP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=LP(t);return xP.test(n)?n:Nu}catch{return Nu}}function LP(t){return OP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Map;function zv(t,e){const n=zc(t);Wv(n,e),FP(n,e)}function Wv(t,e){const n=Hv.get(t);if(n)for(const r of n)r(e)}function FP(t,e){const n=UP();n&&n.postMessage({key:t,fid:e}),$P()}let ns=null;function UP(){return!ns&&"BroadcastChannel"in self&&(ns=new BroadcastChannel("[Firebase] FID Change"),ns.onmessage=t=>{Wv(t.data.key,t.data.fid)}),ns}function $P(){Hv.size===0&&ns&&(ns.close(),ns=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="firebase-installations-database",qP=1,ps="firebase-installations-store";let Ml=null;function Xh(){return Ml||(Ml=d_(BP,qP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ps)}}})),Ml}async function tc(t,e){const n=zc(t),s=(await Xh()).transaction(ps,"readwrite"),i=s.objectStore(ps),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&zv(t,e.fid),e}async function Kv(t){const e=zc(t),r=(await Xh()).transaction(ps,"readwrite");await r.objectStore(ps).delete(e),await r.done}async function Wc(t,e){const n=zc(t),s=(await Xh()).transaction(ps,"readwrite"),i=s.objectStore(ps),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&zv(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(t){let e;const n=await Wc(t.appConfig,r=>{const s=jP(r),i=HP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Nu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function jP(t){const e=t||{fid:MP(),registrationStatus:0};return Gv(e)}function HP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ds.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=zP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WP(t)}:{installationEntry:e}}async function zP(t,e){try{const n=await VP(t,e);return tc(t.appConfig,n)}catch(n){throw Lv(n)&&n.customData.serverCode===409?await Kv(t.appConfig):await tc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function WP(t){let e=await gm(t.appConfig);for(;e.registrationStatus===1;)await jv(100),e=await gm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Zh(t);return r||n}return e}function gm(t){return Wc(t,e=>{if(!e)throw ds.create("installation-not-found");return Gv(e)})}function Gv(t){return KP(t)?{fid:t.fid,registrationStatus:0}:t}function KP(t){return t.registrationStatus===1&&t.registrationTime+Ov<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP({appConfig:t,heartbeatServiceProvider:e},n){const r=QP(t,n),s=kP(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:xv,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await qv(()=>fetch(r,c));if(l.ok){const u=await l.json();return Uv(u)}else throw await $v("Generate Auth Token",l)}function QP(t,{fid:e}){return`${Fv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(t,e=!1){let n;const r=await Wc(t.appConfig,i=>{if(!Qv(i))throw ds.create("not-registered");const o=i.authToken;if(!e&&XP(o))return i;if(o.requestStatus===1)return n=YP(t,e),i;{if(!navigator.onLine)throw ds.create("app-offline");const c=e1(i);return n=JP(t,c),c}});return n?await n:r.authToken}async function YP(t,e){let n=await _m(t.appConfig);for(;n.authToken.requestStatus===1;)await jv(100),n=await _m(t.appConfig);const r=n.authToken;return r.requestStatus===0?ef(t,e):r}function _m(t){return Wc(t,e=>{if(!Qv(e))throw ds.create("not-registered");const n=e.authToken;return t1(n)?{...e,authToken:{requestStatus:0}}:e})}async function JP(t,e){try{const n=await GP(t,e),r={...e,authToken:n};return await tc(t.appConfig,r),n}catch(n){if(Lv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Kv(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await tc(t.appConfig,r)}throw n}}function Qv(t){return t!==void 0&&t.registrationStatus===2}function XP(t){return t.requestStatus===2&&!ZP(t)}function ZP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RP}function e1(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function t1(t){return t.requestStatus===1&&t.requestTime+Ov<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(t){const e=t,{installationEntry:n,registrationPromise:r}=await Zh(e);return r?r.catch(console.error):ef(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e=!1){const n=t;return await s1(n),(await ef(n,e)).token}async function s1(t){const{registrationPromise:e}=await Zh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t){if(!t||!t.options)throw Ll("App Configuration");if(!t.name)throw Ll("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ll(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ll(t){return ds.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="installations",o1="installations-internal",a1=t=>{const e=t.getProvider("app").getImmediate(),n=i1(e),r=gs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},c1=t=>{const e=t.getProvider("app").getImmediate(),n=gs(e,Yv).getImmediate();return{getId:()=>n1(n),getToken:s=>r1(n,s)}};function l1(){On(new gn(Yv,a1,"PUBLIC")),On(new gn(o1,c1,"PRIVATE"))}l1();sn(Vv,Jh);sn(Vv,Jh,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="analytics",u1="firebase_id",h1="origin",f1=60*1e3,d1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",tf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Tc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Yt=new ms("analytics","Analytics",p1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){if(!t.startsWith(tf)){const e=Yt.create("invalid-gtag-resource",{gtagURL:t});return Ht.warn(e.message),""}return t}function Jv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function g1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _1(t,e){const n=g1("firebase-js-sdk-policy",{createScriptURL:m1}),r=document.createElement("script"),s=`${tf}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function y1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function v1(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Jv(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Ht.error(c)}t("config",s,i)}async function E1(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await Jv(n);for(const l of o){const u=c.find(p=>p.measurementId===l),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ht.error(i)}}function w1(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await E1(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await v1(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Ht.error(c)}}return s}function T1(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=w1(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function I1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(tf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=30,b1=1e3;class R1{constructor(e={},n=b1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Xv=new R1;function S1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function C1(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:S1(n)},s=d1.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();c.error?.message&&(o=c.error.message)}catch{}throw Yt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function P1(t,e=Xv,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Yt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Yt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new D1;return setTimeout(async()=>{c.abort()},f1),Zv({appId:r,apiKey:s,measurementId:i},o,c,e)}async function Zv(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Xv){const{appId:i,measurementId:o}=t;try{await k1(r,e)}catch(c){if(o)return Ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw c}try{const c=await C1(t);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!N1(l)){if(s.deleteThrottleMetadata(i),o)return Ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw c}const u=Number(l?.customData?.httpStatus)===503?Bd(n,s.intervalMillis,A1):Bd(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,f),Ht.debug(`Calling attemptFetch again in ${u} millis`),Zv(t,f,r,s)}}function k1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function N1(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class D1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function V1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(){if(l_())try{await u_()}catch(t){return Ht.warn(Yt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ht.warn(Yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function x1(t,e,n,r,s,i,o){const c=P1(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ht.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ht.error(m)),e.push(c);const l=O1().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);I1(i)||_1(i,u.measurementId),s("js",new Date);const p=o?.config??{};return p[h1]="firebase",p.update=!0,f!=null&&(p[u1]=f),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.app=e}_delete(){return delete Ji[this.app.options.appId],Promise.resolve()}}let Ji={},ym=[];const vm={};let Fl="dataLayer",L1="gtag",Em,eE,wm=!1;function F1(){const t=[];if(c_()&&t.push("This is a browser extension environment."),OI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Yt.create("invalid-analytics-context",{errorInfo:e});Ht.warn(n.message)}}function U1(t,e,n){F1();const r=t.options.appId;if(!r)throw Yt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Yt.create("no-api-key");if(Ji[r]!=null)throw Yt.create("already-exists",{id:r});if(!wm){y1(Fl);const{wrappedGtag:i,gtagCore:o}=T1(Ji,ym,vm,Fl,L1);eE=i,Em=o,wm=!0}return Ji[r]=x1(t,ym,vm,e,Em,Fl,n),new M1(t)}function $1(t=Zu()){t=Ye(t);const e=gs(t,nc);return e.isInitialized()?e.getImmediate():B1(t)}function B1(t,e={}){const n=gs(t,nc);if(n.isInitialized()){const s=n.getImmediate();if(Xn(e,n.getOptions()))return s;throw Yt.create("already-initialized")}return n.initialize({options:e})}function q1(t,e,n,r){t=Ye(t),V1(eE,Ji[t.app.options.appId],e,n,r).catch(s=>Ht.error(s))}const Tm="@firebase/analytics",Im="0.10.18";function j1(){On(new gn(nc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return U1(r,s,n)},"PUBLIC")),On(new gn("analytics-internal",t,"PRIVATE")),sn(Tm,Im),sn(Tm,Im,"esm2020");function t(e){try{const n=e.getProvider(nc).getImmediate();return{logEvent:(r,s,i)=>q1(n,r,s,i)}}catch(n){throw Yt.create("interop-component-reg-failed",{reason:n})}}}j1();const H1={apiKey:"AIzaSyB9_6M0plpGAegqzVp1uOouqAVUbry9sqM",authDomain:"howwell-game.firebaseapp.com",projectId:"howwell-game",storageBucket:"howwell-game.firebasestorage.app",messagingSenderId:"26663870324",appId:"1:26663870324:web:d2655b10ba2d62f9701621",measurementId:"G-1VNBQ93JGN"},nf=p_(H1),ot=wP(nf),Ae=GS(nf);new nn;typeof window<"u"&&$1(nf);const tE=we(null),z1=ui(ot,t=>{tE.value=t});Ms(()=>z1());function W1(){return{user:tE}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ks=typeof document<"u";function nE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function K1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&nE(t.default)}const Ve=Object.assign;function Ul(t,e){const n={};for(const r in e){const s=e[r];n[r]=yn(s)?s.map(t):t(s)}return n}const Xi=()=>{},yn=Array.isArray,rE=/#/g,G1=/&/g,Q1=/\//g,Y1=/=/g,J1=/\?/g,sE=/\+/g,X1=/%5B/g,Z1=/%5D/g,iE=/%5E/g,ek=/%60/g,oE=/%7B/g,tk=/%7C/g,aE=/%7D/g,nk=/%20/g;function rf(t){return encodeURI(""+t).replace(tk,"|").replace(X1,"[").replace(Z1,"]")}function rk(t){return rf(t).replace(oE,"{").replace(aE,"}").replace(iE,"^")}function Du(t){return rf(t).replace(sE,"%2B").replace(nk,"+").replace(rE,"%23").replace(G1,"%26").replace(ek,"`").replace(oE,"{").replace(aE,"}").replace(iE,"^")}function sk(t){return Du(t).replace(Y1,"%3D")}function ik(t){return rf(t).replace(rE,"%23").replace(J1,"%3F")}function ok(t){return t==null?"":ik(t).replace(Q1,"%2F")}function vo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ak=/\/$/,ck=t=>t.replace(ak,"");function $l(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=fk(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:vo(o)}}function lk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Am(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xs(e.matched[r],n.matched[s])&&cE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hk(t[n],e[n]))return!1;return!0}function hk(t,e){return yn(t)?bm(t,e):yn(e)?bm(e,t):t===e}function bm(t,e){return yn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Eo;(function(t){t.pop="pop",t.push="push"})(Eo||(Eo={}));var Zi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zi||(Zi={}));function dk(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ck(t)}const pk=/^[^#]+#/;function mk(t,e){return t.replace(pk,"#")+e}function gk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Kc=()=>({left:window.scrollX,top:window.scrollY});function _k(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gk(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Rm(t,e){return(history.state?history.state.position-e:-1)+t}const Vu=new Map;function yk(t,e){Vu.set(t,e)}function vk(t){const e=Vu.get(t);return Vu.delete(t),e}let Ek=()=>location.protocol+"//"+location.host;function lE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Am(l,"")}return Am(n,t)+r+s}function wk(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=lE(t,location),S=n.value,k=e.value;let V=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}V=k?m.position-k.position:0}else r(_);s.forEach(j=>{j(n.value,S,{delta:V,type:Eo.pop,direction:V?V>0?Zi.forward:Zi.back:Zi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Ve({},m.state,{scroll:Kc()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Sm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Kc():null}}function Tk(t){const{history:e,location:n}=window,r={value:lE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:Ek()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=Ve({},e.state,Sm(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Ve({},s.value,e.state,{forward:l,scroll:Kc()});i(f.current,f,!0);const p=Ve({},Sm(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function Ik(t){t=dk(t);const e=Tk(t),n=wk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ve({location:"",base:t,go:r,createHref:mk.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ak(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Ik(t)}function bk(t){return typeof t=="string"||t&&typeof t=="object"}function uE(t){return typeof t=="string"||typeof t=="symbol"}const hE=Symbol("");var Cm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Cm||(Cm={}));function Zs(t,e){return Ve(new Error,{type:t,[hE]:!0},e)}function Bn(t,e){return t instanceof Error&&hE in t&&(e==null||!!(t.type&e))}const Pm="[^/]+?",Rk={sensitive:!1,strict:!1,start:!0,end:!0},Sk=/[.+*?^${}()[\]/\\]/g;function Ck(t,e){const n=Ve({},Rk,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(Sk,"\\$&"),_+=40;else if(m.type===1){const{value:S,repeatable:k,optional:V,regexp:j}=m;i.push({name:S,repeatable:k,optional:V});const q=j||Pm;if(q!==Pm){_+=10;try{new RegExp(`(${q})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${S}" (${q}): `+D.message)}}let x=k?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;p||(x=V&&u.length<2?`(?:/${x})`:"/"+x),V&&(x+="?"),s+=x,_+=20,V&&(_+=-8),k&&(_+=-20),q===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:k,optional:V}=_,j=S in u?u[S]:"";if(yn(j)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const q=yn(j)?j.join("/"):j;if(!q)if(V)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=q}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Pk(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Pk(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(km(r))return 1;if(km(s))return-1}return s.length-r.length}function km(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kk={type:0,value:""},Nk=/[a-zA-Z0-9_]/;function Dk(t){if(!t)return[[]];if(t==="/")return[[kk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:Nk.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Vk(t,e,n){const r=Ck(Dk(t.path),n),s=Ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ok(t,e){const n=[],r=new Map;e=Om({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const S=!_,k=Dm(p);k.aliasOf=_&&_.record;const V=Om(e,p),j=[k];if("alias"in p){const D=typeof p.alias=="string"?[p.alias]:p.alias;for(const z of D)j.push(Dm(Ve({},k,{components:_?_.record.components:k.components,path:z,aliasOf:_?_.record:k})))}let q,x;for(const D of j){const{path:z}=D;if(m&&z[0]!=="/"){const te=m.record.path,b=te[te.length-1]==="/"?"":"/";D.path=m.record.path+(z&&b+z)}if(q=Vk(D,m,V),_?_.alias.push(q):(x=x||q,x!==q&&x.alias.push(q),S&&p.name&&!Vm(q)&&o(p.name)),dE(q)&&l(q),k.children){const te=k.children;for(let b=0;b<te.length;b++)i(te[b],q,_&&_.children[b])}_=_||q}return x?()=>{o(x)}:Xi}function o(p){if(uE(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=Lk(p,n);n.splice(m,0,p),p.record.name&&!Vm(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},k,V;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Zs(1,{location:p});V=_.record.name,S=Ve(Nm(m.params,_.keys.filter(x=>!x.optional).concat(_.parent?_.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),p.params&&Nm(p.params,_.keys.map(x=>x.name))),k=_.stringify(S)}else if(p.path!=null)k=p.path,_=n.find(x=>x.re.test(k)),_&&(S=_.parse(k),V=_.record.name);else{if(_=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!_)throw Zs(1,{location:p,currentLocation:m});V=_.record.name,S=Ve({},m.params,p.params),k=_.stringify(S)}const j=[];let q=_;for(;q;)j.unshift(q.record),q=q.parent;return{name:V,path:k,params:S,matched:j,meta:Mk(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Nm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Dm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Mk(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function Om(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Lk(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;fE(t,e[i])<0?r=i:n=i+1}const s=Fk(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Fk(t){let e=t;for(;e=e.parent;)if(dE(e)&&fE(t,e)===0)return e}function dE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Uk(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(sE," "),o=i.indexOf("="),c=vo(o<0?i:i.slice(0,o)),l=o<0?null:vo(i.slice(o+1));if(c in e){let u=e[c];yn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function xm(t){let e="";for(let n in t){const r=t[n];if(n=sk(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(r)?r.map(i=>i&&Du(i)):[r&&Du(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $k(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=yn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Bk=Symbol(""),Mm=Symbol(""),Gc=Symbol(""),sf=Symbol(""),Ou=Symbol("");function Ri(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Zs(4,{from:n,to:e})):m instanceof Error?l(m):bk(m)?l(Zs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Bl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(nE(l)){const f=(l.__vccOpts||l)[e];f&&i.push(gr(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=K1(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&gr(_,n,r,o,c,s)()}))}}return i}function Lm(t){const e=dn(Gc),n=dn(sf),r=Ft(()=>{const l=Kn(t.to);return e.resolve(l)}),s=Ft(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Xs.bind(null,f));if(m>-1)return m;const _=Fm(l[u-2]);return u>1&&Fm(f)===_&&p[p.length-1].path!==_?p.findIndex(Xs.bind(null,l[u-2])):m}),i=Ft(()=>s.value>-1&&Wk(n.params,r.value.params)),o=Ft(()=>s.value>-1&&s.value===n.matched.length-1&&cE(n.params,r.value.params));function c(l={}){if(zk(l)){const u=e[Kn(t.replace)?"replace":"push"](Kn(t.to)).catch(Xi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ft(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function qk(t){return t.length===1?t[0]:t}const jk=Sg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Lm,setup(t,{slots:e}){const n=hc(Lm(t)),{options:r}=dn(Gc),s=Ft(()=>({[Um(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Um(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&qk(e.default(n));return t.custom?i:Ju("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Hk=jk;function zk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wk(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!yn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Fm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Um=(t,e,n)=>t??e??n,Kk=Sg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=dn(Ou),s=Ft(()=>t.route||r.value),i=dn(Mm,0),o=Ft(()=>{let u=Kn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Ft(()=>s.value.matched[o.value]);da(Mm,Ft(()=>o.value+1)),da(Bk,c),da(Ou,s);const l=we();return qi(()=>[l.value,c.value,t.name],([u,f,p],[m,_,S])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Xs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return $m(n.default,{Component:m,route:u});const _=p.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,V=Ju(m,Ve({},S,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return $m(n.default,{Component:V,route:u})||V}}});function $m(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gk=Kk;function Qk(t){const e=Ok(t.routes,t),n=t.parseQuery||Uk,r=t.stringifyQuery||xm,s=t.history,i=Ri(),o=Ri(),c=Ri(),l=Ew(fr);let u=fr;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ul.bind(null,L=>""+L),p=Ul.bind(null,ok),m=Ul.bind(null,vo);function _(L,Z){let X,ne;return uE(L)?(X=e.getRecordMatcher(L),ne=Z):ne=L,e.addRoute(ne,X)}function S(L){const Z=e.getRecordMatcher(L);Z&&e.removeRoute(Z)}function k(){return e.getRoutes().map(L=>L.record)}function V(L){return!!e.getRecordMatcher(L)}function j(L,Z){if(Z=Ve({},Z||l.value),typeof L=="string"){const C=$l(n,L,Z.path),F=e.resolve({path:C.path},Z),B=s.createHref(C.fullPath);return Ve(C,F,{params:m(F.params),hash:vo(C.hash),redirectedFrom:void 0,href:B})}let X;if(L.path!=null)X=Ve({},L,{path:$l(n,L.path,Z.path).path});else{const C=Ve({},L.params);for(const F in C)C[F]==null&&delete C[F];X=Ve({},L,{params:p(C)}),Z.params=p(Z.params)}const ne=e.resolve(X,Z),ke=L.hash||"";ne.params=f(m(ne.params));const w=lk(r,Ve({},L,{hash:rk(ke),path:ne.path})),T=s.createHref(w);return Ve({fullPath:w,hash:ke,query:r===xm?$k(L.query):L.query||{}},ne,{redirectedFrom:void 0,href:T})}function q(L){return typeof L=="string"?$l(n,L,l.value.path):Ve({},L)}function x(L,Z){if(u!==L)return Zs(8,{from:Z,to:L})}function D(L){return b(L)}function z(L){return D(Ve(q(L),{replace:!0}))}function te(L){const Z=L.matched[L.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let ne=typeof X=="function"?X(L):X;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=q(ne):{path:ne},ne.params={}),Ve({query:L.query,hash:L.hash,params:ne.path!=null?{}:L.params},ne)}}function b(L,Z){const X=u=j(L),ne=l.value,ke=L.state,w=L.force,T=L.replace===!0,C=te(X);if(C)return b(Ve(q(C),{state:typeof C=="object"?Ve({},ke,C.state):ke,force:w,replace:T}),Z||X);const F=X;F.redirectedFrom=Z;let B;return!w&&uk(r,ne,X)&&(B=Zs(16,{to:F,from:ne}),Ue(ne,ne,!0,!1)),(B?Promise.resolve(B):I(F,ne)).catch(U=>Bn(U)?Bn(U,2)?U:Fe(U):fe(U,F,ne)).then(U=>{if(U){if(Bn(U,2))return b(Ve({replace:T},q(U.to),{state:typeof U.to=="object"?Ve({},ke,U.to.state):ke,force:w}),Z||F)}else U=A(F,ne,!0,T,ke);return R(F,ne,U),U})}function E(L,Z){const X=x(L,Z);return X?Promise.reject(X):Promise.resolve()}function y(L){const Z=zt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(L):L()}function I(L,Z){let X;const[ne,ke,w]=Yk(L,Z);X=Bl(ne.reverse(),"beforeRouteLeave",L,Z);for(const C of ne)C.leaveGuards.forEach(F=>{X.push(gr(F,L,Z))});const T=E.bind(null,L,Z);return X.push(T),vt(X).then(()=>{X=[];for(const C of i.list())X.push(gr(C,L,Z));return X.push(T),vt(X)}).then(()=>{X=Bl(ke,"beforeRouteUpdate",L,Z);for(const C of ke)C.updateGuards.forEach(F=>{X.push(gr(F,L,Z))});return X.push(T),vt(X)}).then(()=>{X=[];for(const C of w)if(C.beforeEnter)if(yn(C.beforeEnter))for(const F of C.beforeEnter)X.push(gr(F,L,Z));else X.push(gr(C.beforeEnter,L,Z));return X.push(T),vt(X)}).then(()=>(L.matched.forEach(C=>C.enterCallbacks={}),X=Bl(w,"beforeRouteEnter",L,Z,y),X.push(T),vt(X))).then(()=>{X=[];for(const C of o.list())X.push(gr(C,L,Z));return X.push(T),vt(X)}).catch(C=>Bn(C,8)?C:Promise.reject(C))}function R(L,Z,X){c.list().forEach(ne=>y(()=>ne(L,Z,X)))}function A(L,Z,X,ne,ke){const w=x(L,Z);if(w)return w;const T=Z===fr,C=ks?history.state:{};X&&(ne||T?s.replace(L.fullPath,Ve({scroll:T&&C&&C.scroll},ke)):s.push(L.fullPath,ke)),l.value=L,Ue(L,Z,X,T),Fe()}let v;function se(){v||(v=s.listen((L,Z,X)=>{if(!xt.listening)return;const ne=j(L),ke=te(ne);if(ke){b(Ve(ke,{replace:!0,force:!0}),ne).catch(Xi);return}u=ne;const w=l.value;ks&&yk(Rm(w.fullPath,X.delta),Kc()),I(ne,w).catch(T=>Bn(T,12)?T:Bn(T,2)?(b(Ve(q(T.to),{force:!0}),ne).then(C=>{Bn(C,20)&&!X.delta&&X.type===Eo.pop&&s.go(-1,!1)}).catch(Xi),Promise.reject()):(X.delta&&s.go(-X.delta,!1),fe(T,ne,w))).then(T=>{T=T||A(ne,w,!1),T&&(X.delta&&!Bn(T,8)?s.go(-X.delta,!1):X.type===Eo.pop&&Bn(T,20)&&s.go(-1,!1)),R(ne,w,T)}).catch(Xi)}))}let ve=Ri(),Te=Ri(),Ee;function fe(L,Z,X){Fe(L);const ne=Te.list();return ne.length?ne.forEach(ke=>ke(L,Z,X)):console.error(L),Promise.reject(L)}function Ge(){return Ee&&l.value!==fr?Promise.resolve():new Promise((L,Z)=>{ve.add([L,Z])})}function Fe(L){return Ee||(Ee=!L,se(),ve.list().forEach(([Z,X])=>L?X(L):Z()),ve.reset()),L}function Ue(L,Z,X,ne){const{scrollBehavior:ke}=t;if(!ks||!ke)return Promise.resolve();const w=!X&&vk(Rm(L.fullPath,0))||(ne||!X)&&history.state&&history.state.scroll||null;return dc().then(()=>ke(L,Z,w)).then(T=>T&&_k(T)).catch(T=>fe(T,L,Z))}const Me=L=>s.go(L);let Le;const zt=new Set,xt={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:k,resolve:j,options:t,push:D,replace:z,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Te.add,isReady:Ge,install(L){const Z=this;L.component("RouterLink",Hk),L.component("RouterView",Gk),L.config.globalProperties.$router=Z,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Kn(l)}),ks&&!Le&&l.value===fr&&(Le=!0,D(s.location).catch(ke=>{}));const X={};for(const ke in fr)Object.defineProperty(X,ke,{get:()=>l.value[ke],enumerable:!0});L.provide(Gc,Z),L.provide(sf,cg(X)),L.provide(Ou,l);const ne=L.unmount;zt.add(L),L.unmount=function(){zt.delete(L),zt.size<1&&(u=fr,v&&v(),v=null,l.value=fr,Le=!1,Ee=!1),ne()}}};function vt(L){return L.reduce((Z,X)=>Z.then(()=>y(X)),Promise.resolve())}return xt}function Yk(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Xs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Xs(u,l))||s.push(l))}return[n,r,s]}function Qc(){return dn(Gc)}function TD(t){return dn(sf)}const ql=we(!1),$r=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Jk={class:"navbar"},Xk={class:"navbar-container"},Zk={key:0,class:"dropdown-content"},eN={key:0,class:"highlight"},tN=["disabled"],nN={key:0,class:"reward-dropdown"},rN={__name:"Navbar",setup(t){const{user:e}=W1(),n=Qc(),r=we(!1),s=we(null),i=we(!1),o=we(!1),c=we(null),l=we(null);we(!1);const u=we(null),f=we(null),p=()=>{i.value=!i.value},m=()=>{i.value=!1};In(async()=>{if(e.value){const v=await Qn(He(Ae,"users",e.value.uid));v.exists()&&(l.value=v.data().role)}});const _=()=>{o.value=!o.value},S=async()=>{await f0(ot),m(),n.push("/")},k=we([]),V=we(null),j=we(null);In(()=>{const v=bn(Ae,"users");_o(v,async se=>{const ve=se.docs.map(Fe=>{const Ue=Fe.data(),Me=Ue.correct*10-Ue.timeSpent/60,Le=Math.round(Me),zt=Math.floor((Ue.timeSpent||0)/60),xt=(Ue.timeSpent||0)%60,vt=`${zt}:${xt.toString().padStart(2,"0")}`;return{id:Fe.id,name:Ue.name||"Unknown",score:Le,correct:Ue.correct||0,timeSpent:vt}});ve.sort((Fe,Ue)=>Ue.score-Fe.score||Ue.correct-Fe.correct||Fe.timeSpent.localeCompare(Ue.timeSpent));const Te=ve.slice(0,10);k.value=Te;const Ee=new Set(Te.map(Fe=>Fe.id)),fe=Yp(Ae);se.docs.forEach(Fe=>{const Ue=Fe.id,Me=Fe.data(),Le=He(Ae,"users",Ue);if(Ee.has(Ue)){const zt=Te.findIndex(xt=>xt.id===Ue)+1;Me.rank!==zt&&fe.update(Le,{rank:zt})}else Me.rank!==void 0&&fe.update(Le,{rank:aC()})}),await fe.commit();const Ge=ve.find(Fe=>Fe.id===e.value?.uid);Ge?(j.value=ve.findIndex(Fe=>Fe.id===Ge.id)+1,V.value={...Ge,score:Math.round(Ge.score),timeSpent:Ge.timeSpent}):(j.value=null,V.value=null)})});const q=v=>{c.value&&!c.value.contains(v.target)&&(o.value=!1)};In(()=>{document.addEventListener("click",q)}),Ms(()=>{document.removeEventListener("click",q)});const x=we(!1),D=we(null),z=async()=>{const v=await Qn(He(Ae,"settings","resetMeta"));if(v.exists()){D.value=v.data().lastReset;const se=Date.now(),ve=D.value instanceof We?D.value.toMillis():D.value,Te=10080*60*1e3;x.value=se-ve<Te}};In(()=>{z()});const te=async()=>{if(!x.value)try{const v=bn(Ae,"users"),se=await Qi(v),ve=Yp(Ae);se.forEach(fe=>{const Ge=He(Ae,"users",fe.id);ve.update(Ge,{balance:0})});const Te=es(v,$s("rank","==",1));(await Qi(Te)).forEach(fe=>{const Ge=He(Ae,"users",fe.id);ve.update(Ge,{balance:20})}),se.forEach(fe=>{const Ge=He(Ae,"users",fe.id);ve.update(Ge,{correct:0,question:0,timeSpent:0,questionNo:[]})}),await ve.commit(),await as(He(Ae,"settings","resetMeta"),{lastReset:Ns()}),x.value=!0,alert("Reset complete! All balances cleared, winner credited, and stats reset.")}catch(v){console.error("Error during reset:",v),alert("Error occurred during reset. Check console.")}},b=Ft(()=>x.value?"reset-btn-blue":"reset-btn-red");qi(e,async v=>{if(v){const se=await Qn(He(Ae,"users",v.uid));se.exists()&&(l.value=se.data().role)}else l.value=null},{immediate:!0});let E=null;const y=v=>{const se=He(Ae,"users",v);E=_o(se,ve=>{ve.exists()?u.value=ve.data().balance||0:u.value=0})};In(()=>{ui(ot,v=>{v&&(f.value=v.uid,y(v.uid))})}),Ms(()=>{E&&E()});const I=()=>{r.value=!r.value},R=()=>{r.value=!1},A=v=>{s.value&&!s.value.contains(v.target)&&R()};return In(()=>{document.addEventListener("click",A)}),Ms(()=>{document.removeEventListener("click",A)}),(v,se)=>{const ve=cs("router-link");return pe(),Ie("nav",Jk,[N("div",Xk,[Ke(ve,{to:"/",class:"logo"},{default:en(()=>se[0]||(se[0]=[_e("QuizGames",-1)])),_:1,__:[0]}),N("button",{class:"menu-toggle",onClick:p},"☰"),N("div",{class:Tr(["nav-links",{open:i.value}])},[Ke(ve,{to:"/",onClick:m,class:"nav-link"},{default:en(()=>se[1]||(se[1]=[_e("Home",-1)])),_:1,__:[1]}),N("div",{class:"dropdown nav-item",ref_key:"dropdownRef",ref:c},[N("button",{onClick:_,class:"nav-link dropdown-btn"}," Leaderboard ⏷ "),o.value?(pe(),Ie("div",Zk,[N("table",null,[se[2]||(se[2]=N("thead",null,[N("tr",null,[N("th",null,"Rank"),N("th",null,"Name"),N("th",null,"Score"),N("th",null,"Correct"),N("th",null,"Time")])],-1)),N("tbody",null,[(pe(!0),Ie(lt,null,gc(k.value,(Te,Ee)=>(pe(),Ie("tr",{key:Te.id,class:Tr({highlight:Te.id===Kn(e)?.uid})},[N("td",null,Ze(Ee+1),1),N("td",null,Ze(Te.name),1),N("td",null,Ze(Te.score),1),N("td",null,Ze(Te.correct),1),N("td",null,Ze(Te.timeSpent),1)],2))),128)),j.value>10?(pe(),Ie("tr",eN,[N("td",null,Ze(j.value),1),N("td",null,Ze(V.value?.name),1),N("td",null,Ze(V.value?.score),1),N("td",null,Ze(V.value?.correct),1),N("td",null,Ze(V.value?.timeSpent),1)])):Bt("",!0)])])])):Bt("",!0)],512),Kn(e)?(pe(),Ie(lt,{key:1},[l.value==="admin"?(pe(),Ie("button",{key:0,disabled:x.value,class:Tr(b.value),onClick:te}," Reset ",10,tN)):Bt("",!0),N("div",{class:"reward-container",ref_key:"rewardRef",ref:s},[N("button",{class:"reward-btn",onClick:I}," Reward ⏷ "),r.value?(pe(),Ie("div",nN,[N("p",null,[se[5]||(se[5]=N("strong",null,"Wins:",-1)),_e(" "+Ze(u.value??"Loading...")+" coins",1)])])):Bt("",!0)],512),Ke(ve,{to:"/topics",onClick:m,class:"nav-link"},{default:en(()=>se[6]||(se[6]=[_e("Topics",-1)])),_:1,__:[6]}),N("button",{class:"nav-link logout-btn",onClick:S},"Logout")],64)):(pe(),Ie(lt,{key:0},[Ke(ve,{to:"/login",onClick:m,class:"nav-link"},{default:en(()=>se[3]||(se[3]=[_e("Login",-1)])),_:1,__:[3]}),Ke(ve,{to:"/signup",onClick:m,class:"nav-link"},{default:en(()=>se[4]||(se[4]=[_e("Sign Up",-1)])),_:1,__:[4]})],64))],2)])])}}},sN=$r(rN,[["__scopeId","data-v-a7fed612"]]),iN={class:"min-h-screen bg-base text-dark font-sans flex flex-col"},oN={class:"container mx-auto p-4 flex-grow"},aN={class:"footer-bar"},cN={__name:"App",setup(t){const e=Qc(),n=typeof FBInstant<"u";return ui(ot,async r=>{if(r)e.push("/");else if(n){const s=new nn;await Pv(ot,s)}else console.log("Web user, no auto-login")}),kv(ot).then(async r=>{if(r?.user){const s=r.user;await as(He(Ae,"users",s.uid),{uid:s.uid,name:s.displayName||"",email:s.email,photoURL:s.photoURL||"",lastLogin:new Date},{merge:!0}),e.push("/")}}).catch(r=>console.error("FB Redirect Login Error:",r)),(r,s)=>{const i=cs("router-view"),o=cs("router-link");return pe(),Ie("div",iN,[Ke(sN),N("div",oN,[Ke(i)]),N("footer",aN,[N("p",null,"© "+Ze(new Date().getFullYear())+" Howell. All rights reserved.",1),Ke(o,{to:"/policies",class:"footer-link"},{default:en(()=>s[0]||(s[0]=[_e("Policies",-1)])),_:1,__:[0]})])])}}},lN="modulepreload",uN=function(t,e){return new URL(t,e).href},Bm={},jl=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");s=u(n.map(f=>{if(f=uN(f,r),f in Bm)return;Bm[f]=!0;const p=f.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let k=o.length-1;k>=0;k--){const V=o[k];if(V.href===f&&(!p||V.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${m}`))return;const S=document.createElement("link");if(S.rel=p?"stylesheet":lN,p||(S.as="script"),S.crossOrigin="",S.href=f,l&&S.setAttribute("nonce",l),document.head.appendChild(S),p)return new Promise((k,V)=>{S.addEventListener("load",k),S.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},pE=""+new URL("bg-BIo0N03c.mp4",import.meta.url).href,hN={class:"modal-content"},fN={__name:"RulesModal",props:{open:Boolean},setup(t){return(e,n)=>(pe(),ss(Eg,{to:"body"},[t.open?(pe(),Ie("div",{key:0,class:"modal-overlay",onClick:n[1]||(n[1]=Ec(r=>e.$emit("close"),["self"]))},[N("div",hN,[n[2]||(n[2]=N("h2",null,"Howell – Rules, Policies & Information",-1)),n[3]||(n[3]=N("h3",null,"How to Play",-1)),n[4]||(n[4]=N("p",null,[_e(" To play Howell, users must "),N("strong",null,"sign up and log in"),_e(". Once logged in, click on "),N("strong",null,"“Topics”"),_e(" in the navigation bar. You may choose from different quiz topics, including weekly competitions. ")],-1)),n[5]||(n[5]=N("p",null,[_e(" At the end of every quiz, your "),N("strong",null,"score and performance"),_e(" are displayed. ")],-1)),n[6]||(n[6]=N("h3",null,"Rules of Competition",-1)),n[7]||(n[7]=N("p",null,[_e(" Participation in Howell competitions is free. No entry fee is required. Winners are determined based on skill — quiz performance is calculated using: "),N("strong",null,"time spent, correct answers, and number of questions completed"),_e(". ")],-1)),n[8]||(n[8]=N("ul",null,[N("li",null,"Each weekly competition features around 50 questions on a trending athlete."),N("li",null,"The leaderboard ranks players based on accuracy and speed."),N("li",null,[_e("The top leaderboard player of the week wins "),N("strong",null,"20 coins"),_e(".")]),N("li",null,[_e("Coins are withdrawable after accumulating "),N("strong",null,"100+ coins"),_e(".")]),N("li",null,"Rewards must be claimed manually via in-game chat. Howell admins will verify standings before awarding prizes.")],-1)),n[9]||(n[9]=N("h3",null,"Reward Structure",-1)),n[10]||(n[10]=N("ul",null,[N("li",null,[_e("Weekly competition winner: "),N("strong",null,"20 coins"),_e(".")]),N("li",null,[_e("Regular quizzes: earn "),N("strong",null,"2–5 coins"),_e(" per quiz, depending on frequency.")]),N("li",null,"Coins have a withdrawable value determined by app growth, set by the admin."),N("li",null,"Withdrawal methods: chat-arranged (bank transfer, PayPal, or other agreed method).")],-1)),n[11]||(n[11]=N("h3",null,"Privacy Policy",-1)),n[12]||(n[12]=N("p",null,[_e(" Howell respects your privacy. We only collect "),N("strong",null,"basic user data"),_e(" such as your name, email, or phone number. This data is used solely for: ")],-1)),n[13]||(n[13]=N("ul",null,[N("li",null,"Tracking quiz progress and scores."),N("li",null,"Managing leaderboards and competitions."),N("li",null,"Enabling communication about rewards through in-game chat.")],-1)),n[14]||(n[14]=N("p",null," We do not sell, rent, or share your personal data with third-party advertisers or external services. ",-1)),n[15]||(n[15]=N("h3",null,"User Data Handling",-1)),n[16]||(n[16]=N("p",null,[_e(" Your data is stored securely using "),N("strong",null,"Firebase Authentication and Firestore"),_e(". Only Howell administrators have access to reward verification data. Users may request data removal or account deletion at any time by contacting the developer. ")],-1)),n[17]||(n[17]=N("h3",null,"Disclaimer",-1)),n[18]||(n[18]=N("p",null,[_e(" Howell is a "),N("strong",null,"skill-based educational and entertainment quiz game"),_e(". It does not involve gambling, betting, or random draws of any kind. Rewards are provided only to verified winners and are not guaranteed for every participant. ")],-1)),n[19]||(n[19]=N("p",null," Howell reserves the right to adjust competition details, rules, and rewards at its discretion. ",-1)),n[20]||(n[20]=N("h3",null,"Contact Information",-1)),n[21]||(n[21]=N("p",null,[_e(" For support, questions, or data requests, please contact: "),N("br"),N("strong",null,"Developer:"),_e(" Ebuka Jullian "),N("br"),N("strong",null,"Email:"),_e(),N("a",{href:"mailto:ebukaolisaemeka@yahoo.com"},"ebukaolisaemeka@yahoo.com")],-1)),N("button",{class:"close-btn",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"Close")])])):Bt("",!0)]))}},dN=$r(fN,[["__scopeId","data-v-ab2411c0"]]),pN={class:"admin-chat-list"},mN={key:0},gN=["onClick"],_N={class:"user-name"},yN={key:0,class:"unread-badge"},vN={key:1},EN={__name:"AdminChatList",emits:["chat-selected"],setup(t,{emit:e}){const n=e,r=we([]);In(()=>{const i=ot.currentUser.uid,o=es(bn(Ae,"chats"),$s("participants","array-contains",i));_o(o,async c=>{const l=[];for(const u of c.docs){const f=u.data(),p=f.participants.find(m=>m!==i);if(p){const m=await Qn(He(Ae,"users",p)),_=m.exists()?m.data():{};l.push({id:p,chatId:u.id,..._,unreadCount:f.unread?.[i]||0})}}r.value=l})});async function s(i,o){const c=ot.currentUser.uid;o&&(await Oi(He(Ae,"chats",o),{[`unread.${c}`]:0}),n("chat-selected",o))}return(i,o)=>(pe(),Ie("div",pN,[o[0]||(o[0]=N("h2",null,"All Chats",-1)),r.value.length?(pe(),Ie("ul",mN,[(pe(!0),Ie(lt,null,gc(r.value,c=>(pe(),Ie("li",{key:c.id,onClick:l=>s(c.id,c.chatId)},[N("span",_N,Ze(c.name||"Unknown User"),1),c.unreadCount>0?(pe(),Ie("span",yN,Ze(c.unreadCount),1)):Bt("",!0)],8,gN))),128))])):(pe(),Ie("p",vN,"No chats found"))]))}},wN=$r(EN,[["__scopeId","data-v-26cbb575"]]),TN={class:"modal-content"},IN={class:"modal-header"},AN={key:0},bN={key:1},RN={key:0,class:"withdraw-form"},SN={class:"withdraw-actions"},CN=["disabled"],PN={class:"input-area"},kN={__name:"ChatModal",props:{isAdmin:Boolean},setup(t){const e=t,n=we(""),r=we([]),s=we(""),i=we(null),o=we(null),c=we([]),l=we(null),u=we(!1),f=we({country:"",currency:"",bank:"",accountNumber:"",amount:0});function p(){dc(()=>{l.value&&(l.value.scrollTop=l.value.scrollHeight)})}const m=Ft(()=>{const x=f.value;return x.country.trim()&&x.currency.trim()&&x.bank.trim()&&x.accountNumber.trim()&&Number(x.amount)>0});async function _(x){s.value=x,o.value=x;const D=await Qn(He(Ae,"chats",x));D.exists()&&(c.value=D.data().participants||[]);const z=ot.currentUser?.uid;z&&await Oi(He(Ae,"chats",x),{[`unread.${z}`]:0}).catch(()=>{}),k()}async function S(){if(!i.value||e.isAdmin)return;const x=i.value.uid,D=es(bn(Ae,"users"),$s("role","==","admin")),z=await Qi(D);if(z.empty)return;const te=z.docs[0].id,b=bn(Ae,"chats"),E=es(b,$s("participants","array-contains",x)),y=await Qi(E);if(y.empty){const I=await Dl(b,{participants:[x,te],updatedAt:Ns(),unread:{[te]:0,[x]:0}});s.value=I.id,c.value=[x,te]}else{const I=y.docs[0];s.value=I.id,c.value=I.data().participants||[x,te],c.value.includes(te)||(c.value.push(te),await Oi(He(Ae,"chats",s.value),{participants:c.value,[`unread.${te}`]:0}))}k()}function k(){if(!s.value)return;const x=es(bn(Ae,"chats",s.value,"messages"),rC("timestamp","asc"));_o(x,D=>{r.value=D.docs.map(z=>({id:z.id,...z.data()})),p()})}async function V(){if(!n.value.trim()||!s.value||!i.value)return;const x=i.value.uid;if(!c.value?.length){const b=await Qn(He(Ae,"chats",s.value));b.exists()&&(c.value=b.data().participants||[])}if(c.value.length===1&&!e.isAdmin){const b=es(bn(Ae,"users"),$s("role","==","admin")),E=await Qi(b);if(!E.empty){const y=E.docs[0].id;c.value.push(y),await Oi(He(Ae,"chats",s.value),{participants:c.value,[`unread.${y}`]:0})}}const D=c.value.filter(b=>b!==x);await Dl(bn(Ae,"chats",s.value,"messages"),{senderId:x,senderName:i.value.displayName||i.value.email,text:n.value.trim(),timestamp:Ns(),readBy:[x]});const z=He(Ae,"chats",s.value),te={lastSenderId:x,updatedAt:Ns(),[`unread.${x}`]:0};D.forEach(b=>{te[`unread.${b}`]=cC(1)}),await Oi(z,te),n.value="",p()}function j(){u.value=!u.value}async function q(){if(!s.value||!i.value)return;const x=i.value.uid,D=`
    Country: ${f.value.country}
    Currency: ${f.value.currency}
    Bank: ${f.value.bank}
    Account: ${f.value.accountNumber}
    Amount: ${f.value.amount}
  `.trim();await Dl(bn(Ae,"chats",s.value,"messages"),{senderId:x,senderName:i.value.displayName||i.value.email,text:D,type:"withdraw",timestamp:Ns(),readBy:[x]}),u.value=!1}return ui(ot,async x=>{if(i.value=x,x&&!e.isAdmin){const D=await Qn(He(Ae,"users",x.uid));D.exists()&&(f.value.amount=D.data().balance||0),S()}}),(x,D)=>(pe(),ss(Eg,{to:"body"},[N("div",{class:"modal-overlay",onClick:D[8]||(D[8]=Ec(z=>x.$emit("close"),["self"]))},[N("div",TN,[N("div",IN,[N("h2",null,Ze(t.isAdmin?"Admin Chat":"Chat with Admin"),1),N("button",{class:"close-btn",onClick:D[0]||(D[0]=z=>x.$emit("close"))},"✖")]),t.isAdmin&&!o.value?(pe(),Ie("div",AN,[Ke(wN,{onChatSelected:_})])):o.value||s.value?(pe(),Ie("div",bN,[N("div",{class:"chat-box",ref_key:"chatBox",ref:l},[(pe(!0),Ie(lt,null,gc(r.value,z=>(pe(),Ie("div",{key:z.id,class:Tr(["message",{"my-message":z.senderId===i.value?.uid,"other-message":z.senderId!==i.value?.uid,"withdraw-message":z.type==="withdraw"}])},[z.type==="withdraw"?(pe(),Ie(lt,{key:0},[D[9]||(D[9]=_e(" 🏦 ",-1)),D[10]||(D[10]=N("strong",null,"Reward Request",-1)),D[11]||(D[11]=N("br",null,null,-1)),_e(" "+Ze(z.text),1)],64)):(pe(),Ie(lt,{key:1},[N("strong",null,Ze(z.senderName)+":",1),_e(" "+Ze(z.text),1)],64))],2))),128)),u.value?(pe(),Ie("div",RN,[D[12]||(D[12]=N("label",null,"Country:",-1)),ln(N("input",{"onUpdate:modelValue":D[1]||(D[1]=z=>f.value.country=z),placeholder:"Enter country"},null,512),[[un,f.value.country]]),D[13]||(D[13]=N("label",null,"Currency:",-1)),ln(N("input",{"onUpdate:modelValue":D[2]||(D[2]=z=>f.value.currency=z),placeholder:"Enter currency"},null,512),[[un,f.value.currency]]),D[14]||(D[14]=N("label",null,"Bank:",-1)),ln(N("input",{"onUpdate:modelValue":D[3]||(D[3]=z=>f.value.bank=z),placeholder:"Enter bank"},null,512),[[un,f.value.bank]]),D[15]||(D[15]=N("label",null,"Account Number:",-1)),ln(N("input",{"onUpdate:modelValue":D[4]||(D[4]=z=>f.value.accountNumber=z),placeholder:"Enter account number"},null,512),[[un,f.value.accountNumber]]),D[16]||(D[16]=N("label",null,"Amount:",-1)),ln(N("input",{"onUpdate:modelValue":D[5]||(D[5]=z=>f.value.amount=z),type:"number",readonly:""},null,512),[[un,f.value.amount]]),N("div",SN,[N("button",{onClick:q,disabled:!m.value,class:Tr({disabled:!m.value})}," Submit Request ",10,CN),N("button",{onClick:D[6]||(D[6]=z=>u.value=!1)},"Cancel")])])):Bt("",!0)],512),N("div",PN,[ln(N("input",{"onUpdate:modelValue":D[7]||(D[7]=z=>n.value=z),placeholder:"Type your message...",onKeyup:lI(V,["enter"])},null,544),[[un,n.value]]),N("button",{onClick:V},"Send"),N("button",{onClick:j},"Claim Reward")])])):Bt("",!0)])])]))}},NN=$r(kN,[["__scopeId","data-v-e1c02fab"]]),DN={class:"homepage"},VN={key:0,class:"unread-dot"},ON={class:"welcome-box"},xN={key:0,class:"user-greeting"},MN={key:1,class:"user-greeting"},LN={class:"button-group"},FN={__name:"HomePage",setup(t){const e=we(!1),n=we(!1),r=we(null),s=we(null);ui(ot,async o=>{if(r.value=o,o){const c=await Qn(He(Ae,"users",o.uid));s.value=c.data()?.role||"user",i(o.uid)}});function i(o){const c=es(bn(Ae,"chats"),$s("participants","array-contains",o));_o(c,l=>{let u=!1;l.forEach(f=>{(f.data().unread?.[o]||0)>0&&(u=!0)}),n.value=u})}return(o,c)=>{const l=cs("router-link");return pe(),Ie("div",DN,[c[9]||(c[9]=N("video",{autoplay:"",muted:"",loop:"",playsinline:"",class:"background-video"},[N("source",{src:pE,type:"video/mp4"}),_e(" Your browser does not support the video tag. ")],-1)),r.value?(pe(),Ie("div",{key:0,class:"chat-icon-container",onClick:c[0]||(c[0]=u=>ql.value=!0)},[c[4]||(c[4]=N("i",{class:"fas fa-comments"},null,-1)),n.value?(pe(),Ie("span",VN)):Bt("",!0)])):Bt("",!0),Kn(ql)?(pe(),ss(NN,{key:1,isAdmin:s.value==="admin",onClose:c[1]||(c[1]=u=>ql.value=!1)},null,8,["isAdmin"])):Bt("",!0),N("div",ON,[c[7]||(c[7]=N("h1",{class:"main-title"},"Welcome to the Howell",-1)),r.value?(pe(),Ie("p",xN,"Hello, "+Ze(r.value.displayName||r.value.email),1)):(pe(),Ie("p",MN,"Please log in")),c[8]||(c[8]=N("p",{class:"description"},[_e(" Test your knowledge across subjects, people, and world events."),N("br"),_e(" Learn while having fun! ")],-1)),N("div",LN,[r.value?(pe(),ss(l,{key:0,to:"/topics"},{default:en(()=>c[5]||(c[5]=[N("button",{class:"btn green"},"Explore Topics",-1)])),_:1,__:[5]})):(pe(),ss(l,{key:1,to:"/topics"},{default:en(()=>c[6]||(c[6]=[N("button",{class:"btn blue"},"Get Started",-1)])),_:1,__:[6]})),N("button",{class:"btn orange",onClick:c[2]||(c[2]=u=>e.value=!0)},"Privacy & Rules")])]),Ke(dN,{open:e.value,onClose:c[3]||(c[3]=u=>e.value=!1)},null,8,["open"])])}}},UN=$r(FN,[["__scopeId","data-v-87b9a3c6"]]),$N={class:"login-container"},BN={class:"login-box"},qN={key:0,class:"consent-overlay"},jN={class:"consent-box"},HN={class:"signup-link"},zN={__name:"LoginPage",setup(t){const e=Qc(),n=we(""),r=we(""),s=we(!1),i=async()=>{try{await a0(ot,n.value,r.value),e.push("/")}catch(c){alert(c.message)}},o=async()=>{s.value=!1;const c=new nn;c.addScope("email");try{const u=(await Rv(ot,c)).user;await as(He(Ae,"users",u.uid),{uid:u.uid,name:u.displayName||"",email:u.email||"",photoURL:u.photoURL||"",lastLogin:new Date},{merge:!0}),e.push("/")}catch(l){console.error("Facebook login failed:",l),alert("Facebook sign-in failed. Please try again.")}};return(c,l)=>{const u=cs("router-link");return pe(),Ie("div",$N,[N("div",BN,[l[10]||(l[10]=N("h2",null,"Login",-1)),N("form",{onSubmit:Ec(i,["prevent"])},[l[4]||(l[4]=N("label",null,"Email",-1)),ln(N("input",{type:"email","onUpdate:modelValue":l[0]||(l[0]=f=>n.value=f),required:""},null,512),[[un,n.value]]),l[5]||(l[5]=N("label",null,"Password",-1)),ln(N("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=f=>r.value=f),required:""},null,512),[[un,r.value]]),l[6]||(l[6]=N("button",{type:"submit",class:"primary-btn"},"Login",-1))],32),N("button",{class:"facebook-btn",onClick:l[2]||(l[2]=f=>s.value=!0)}," Continue with Facebook "),s.value?(pe(),Ie("div",qN,[N("div",jN,[l[7]||(l[7]=N("p",null,"We’ll open a small Facebook window so you can continue your login securely.",-1)),N("button",{class:"primary-btn",onClick:o},"Continue"),N("button",{class:"cancel-btn",onClick:l[3]||(l[3]=f=>s.value=!1)},"Cancel")])])):Bt("",!0),N("p",HN,[l[9]||(l[9]=_e(" Don’t have an account? ",-1)),Ke(u,{to:"/signup"},{default:en(()=>l[8]||(l[8]=[_e("Sign up",-1)])),_:1,__:[8]})])])])}}},WN=$r(zN,[["__scopeId","data-v-c6e73517"]]),KN={class:"signup-container"},GN={class:"signup-box"},QN={class:"login-link"},YN={__name:"SignupPage",setup(t){const e=Qc(),n=we(""),r=we(""),s=we(""),i=async()=>{try{const c=await o0(ot,r.value,s.value);await l0(c.user,{displayName:n.value}),await as(He(Ae,"users",c.user.uid),{uid:c.user.uid,name:n.value,email:r.value,photoURL:"",correct:0,question:0,timeSpent:0,balance:0,rank:0,questionNo:[],score:0,createdAt:new Date}),e.push("/")}catch(c){alert(c.message)}},o=async()=>{const c=new nn;c.addScope("email");try{const u=(await Rv(ot,c)).user;await as(He(Ae,"users",u.uid),{uid:u.uid,name:u.displayName||"",email:u.email||"",phone:"",photoURL:u.photoURL||"",correct:0,question:0,timeSpent:0,balance:0,rank:0,questionNo:[],score:0,createdAt:new Date},{merge:!0}),e.push("/")}catch(l){const u=l?.code||"";if(u==="auth/popup-blocked"||u==="auth/popup-closed-by-user"||u==="auth/web-storage-unsupported")try{await Pv(ot,c)}catch(f){console.error("Redirect sign-in failed:",f),alert("Facebook sign-in failed. Please try again.")}else console.error("Facebook signup failed:",l),alert("Facebook sign-in failed. Please try again.")}};return In(async()=>{try{const c=await kv(ot);if(c&&c.user){const l=c.user;await as(He(Ae,"users",l.uid),{uid:l.uid,name:l.displayName||"",email:l.email||"",phone:"",photoURL:l.photoURL||"",correct:0,question:0,timeSpent:0,balance:0,rank:0,questionNo:[],score:0,createdAt:new Date},{merge:!0}),e.push("/")}}catch(c){console.debug("No redirect result or redirect sign-in failed:",c?.code||c)}}),(c,l)=>{const u=cs("router-link");return pe(),Ie("div",KN,[N("div",GN,[l[9]||(l[9]=N("h2",null,"Sign Up",-1)),N("form",{onSubmit:Ec(i,["prevent"])},[l[3]||(l[3]=N("label",null,"Name",-1)),ln(N("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=f=>n.value=f),required:""},null,512),[[un,n.value]]),l[4]||(l[4]=N("label",null,"Email",-1)),ln(N("input",{type:"email","onUpdate:modelValue":l[1]||(l[1]=f=>r.value=f),required:""},null,512),[[un,r.value]]),l[5]||(l[5]=N("label",null,"Password",-1)),ln(N("input",{type:"password","onUpdate:modelValue":l[2]||(l[2]=f=>s.value=f),required:""},null,512),[[un,s.value]]),l[6]||(l[6]=N("button",{type:"submit",class:"primary-btn"},"Sign Up",-1))],32),N("button",{class:"facebook-btn",onClick:o},"Continue with Facebook"),N("p",QN,[l[8]||(l[8]=_e(" Already have an account? ",-1)),Ke(u,{to:"/login"},{default:en(()=>l[7]||(l[7]=[_e("Log in",-1)])),_:1,__:[7]})])])])}}},JN=$r(YN,[["__scopeId","data-v-6cc1e260"]]),XN={class:"page-container"},ZN={key:0,class:"login-notice"},eD={class:"topic-grid"},tD={class:"topic-header"},nD={class:"topic-title"},rD={key:0,class:"competition-badge"},sD={class:"topic-description"},iD={key:1,class:"play-button disabled",disabled:"",title:"Login to participate"},oD={__name:"TopicSelectionPage",setup(t){const e=we(null);ui(ot,o=>{e.value=o});const n=[{id:"messi",title:"Lionel Messi",description:"How well do you know Li@nel M6ssi?",isCompetition:!0},{id:"cristiano",title:"CR7",description:"How well do you know Cristiano Ronaldo?",isCompetition:!0},{id:"lamine",title:"Lamine Yamal",description:"How well do you know the wonder kid?"},{id:"biology",title:"Biology",description:"Test your knowledge of life, cells, plants, and more."},{id:"history",title:"History",description:"Learn from the past to win the present!"},{id:"english",title:"English",description:"Master vocabulary, grammar, and comprehension."},{id:"chemistry",title:"Chemistry",description:"How well do you know chemistry."},{id:"economics",title:"Economics",description:"Supply, demand, money & the markets!"}],r=o=>o.isCompetition?`/competition/${o.id}`:`/play/${o.id}`,s=Ft(()=>[...n].sort((o,c)=>o.isCompetition&&!c.isCompetition?-1:!o.isCompetition&&c.isCompetition?1:0)),i=o=>({messi:"#007BFF",cristiano:"#ff9900ff",lamine:"#044112ff",biology:"#28A745",maths:"#73ae50ff",history:"#343A40",english:"#6C757D",economics:"#17A2B8",chemistry:"#0a3238ff"})[o]||"#007BFF";return(o,c)=>{const l=cs("router-link");return pe(),Ie("div",XN,[c[2]||(c[2]=N("video",{autoplay:"",muted:"",loop:"",playsinline:"",class:"background-video"},[N("source",{src:pE,type:"video/mp4"}),_e(" Your browser does not support the video tag. ")],-1)),c[3]||(c[3]=N("h2",{class:"page-title"},"Select a Topic",-1)),e.value?Bt("",!0):(pe(),Ie("div",ZN,c[0]||(c[0]=[N("p",null,"Login to participate in competition",-1)]))),N("div",eD,[(pe(!0),Ie(lt,null,gc(s.value,u=>(pe(),Ie("div",{key:u.id,class:"topic-card",style:cc({backgroundColor:i(u.id)})},[N("div",tD,[N("h3",nD,Ze(u.title),1),u.isCompetition?(pe(),Ie("span",rD,"Competition")):Bt("",!0)]),N("p",sD,Ze(u.description),1),!u.isCompetition||e.value?(pe(),ss(l,{key:0,to:r(u)},{default:en(()=>c[1]||(c[1]=[N("button",{class:"play-button"},"Play Now",-1)])),_:2,__:[1]},1032,["to"])):(pe(),Ie("button",iD," Play Now "))],4))),128))])])}}},aD=$r(oD,[["__scopeId","data-v-b89be9e4"]]),cD=[{path:"/",component:UN},{path:"/login",component:WN},{path:"/signup",component:JN},{path:"/policies",name:"Policies",component:()=>jl(()=>import("./Policies-CS0OcMeO.js"),__vite__mapDeps([0,1]),import.meta.url)},{path:"/topics",component:aD,meta:{requiresAuth:!1}},{path:"/play/:topicId",name:"PlayTopic",component:()=>jl(()=>import("./QuestionCarousel-BnvgvnWq.js"),__vite__mapDeps([2,3,4]),import.meta.url),props:!0,meta:{requiresAuth:!1}},{path:"/competition/:topicId",name:"Competition",component:()=>jl(()=>import("./Competition-DU5k_p67.js"),__vite__mapDeps([5,3,6]),import.meta.url),props:!0,meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",redirect:"/"}],mE=Qk({history:Ak(),routes:cD});mE.beforeEach((t,e,n)=>{const r=ot.currentUser;t.matched.some(i=>i.meta.requiresAuth)&&!r?n("/login"):n()});const lD=""+new URL("quiz-bg-DZ1DfWHF.png",import.meta.url).href,uD=""+new URL("quiz-result-CizZnYdT.png",import.meta.url).href,hD=[lD,uD];we(0);const Yc=document.createElement("div");Yc.id="loading-screen";Yc.style=`
  position: fixed;
  inset: 0;
  background: #1e1e1e;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  z-index: 9999;
  flex-direction: column;
`;Yc.innerHTML=`
  <div>Loading... <span id="loading-percent">0%</span></div>
  <div style="margin-top: 1rem;">
    <div style="width: 200px; height: 10px; border: 1px solid #fff; border-radius: 5px;">
      <div id="loading-bar" style="width: 0%; height: 100%; background: #00ff7f; border-radius: 5px;"></div>
    </div>
  </div>
`;document.body.appendChild(Yc);function fD(t){const e=document.getElementById("loading-percent"),n=document.getElementById("loading-bar");e&&(e.textContent=`${t}%`),n&&(n.style.width=`${t}%`)}async function dD(t){let e=0;for(const n of t)await new Promise((r,s)=>{const i=new Image;i.src=n,i.onload=()=>{e++;const o=Math.round(e/t.length*100);fD(o),r()},i.onerror=s})}async function pD(t){let e=null,n=null,r=null;try{e=t.player.getID(),n=t.player.getName()||"Unknown",r=t.player.getPhoto()||""}catch(s){console.error("Error fetching FBInstant player data:",s)}return{playerID:e,playerName:n,playerPhoto:r}}async function mD({uid:t,name:e,photoURL:n}){try{const r=He(Ae,"users",t);(await Qn(r)).exists()?console.log("Returning user — no overwrite ✅"):(await as(r,{uid:t,name:e,photoURL:n,correct:0,question:0,timeSpent:0,balance:0,rank:0,questionNo:[],score:0,createdAt:Ns()}),console.log("New Firebase user created ✅"))}catch(r){console.error("Error creating/logging in Firebase user:",r)}}function Hl(t=null){const e=fI(cN);e.use(mE),e.config.globalProperties.$fb=t,e.mount("#app");const n=document.getElementById("loading-screen");n&&n.remove()}async function gD(){try{await dD(hD)}catch(e){console.warn("Failed to preload some images:",e)}const t=typeof window<"u"?window.FBInstant:null;if(t&&typeof t.initializeAsync=="function"){console.log("Detected FBInstant environment ✅");try{await t.initializeAsync(),console.log("FB Instant Game initialized 🎮");const{playerID:e,playerName:n,playerPhoto:r}=await pD(t);e&&await mD({uid:e,name:n,photoURL:r}),await t.startGameAsync(),console.log("FB Instant Game started ✅"),Hl(t)}catch(e){console.error("FBInstant error:",e),Hl(null)}}else console.warn("FBInstant not available — running in web mode 🌐"),Hl(null)}gD();export{ot as A,kg as B,Oi as C,uD as D,wD as E,lt as F,cC as G,yD as T,$r as _,_D as a,In as b,Ie as c,Ft as d,Ms as e,N as f,Bt as g,_e as h,pE as i,ln as j,gc as k,Ke as l,cc as m,Tr as n,pe as o,en as p,jl as q,we as r,ui as s,Ze as t,TD as u,vD as v,qi as w,He as x,Ae as y,Qn as z};
