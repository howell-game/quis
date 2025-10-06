const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Policies-CbNsHjRh.js","./Policies-B07RryjC.css","./QuestionCarousel-BubrMoM9.js","./dynamic-import-helper-BheWnx7M.js","./QuestionCarousel-CDcrAmBS.css","./Competition-CHfMhG2Z.js","./Competition-BPkfrz2H.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function iu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const qe={},gs=[],yn=()=>{},uv=()=>!1,Ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ou=t=>t.startsWith("onUpdate:"),Ct=Object.assign,au=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hv=Object.prototype.hasOwnProperty,Oe=(t,e)=>hv.call(t,e),le=Array.isArray,_s=t=>ro(t)==="[object Map]",$a=t=>ro(t)==="[object Set]",yf=t=>ro(t)==="[object Date]",ge=t=>typeof t=="function",rt=t=>typeof t=="string",bn=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",Kp=t=>(Ke(t)||ge(t))&&ge(t.then)&&ge(t.catch),Gp=Object.prototype.toString,ro=t=>Gp.call(t),fv=t=>ro(t).slice(8,-1),Qp=t=>ro(t)==="[object Object]",cu=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wi=iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dv=/-(\w)/g,en=qa(t=>t.replace(dv,(e,n)=>n?n.toUpperCase():"")),pv=/\B([A-Z])/g,Pr=qa(t=>t.replace(pv,"-$1").toLowerCase()),ja=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),qc=qa(t=>t?`on${ja(t)}`:""),hr=(t,e)=>!Object.is(t,e),Yo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_l=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vf;const Ha=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function so(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=rt(r)?yv(r):so(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(rt(t)||Ke(t))return t}const mv=/;(?![^(]*\))/g,gv=/:([^]+)/,_v=/\/\*[^]*?\*\//g;function yv(t){const e={};return t.replace(_v,"").split(mv).forEach(n=>{if(n){const r=n.split(gv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fr(t){let e="";if(rt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=fr(t[n]);r&&(e+=r+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ev=iu(vv);function Yp(t){return!!t||t===""}function wv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=za(t[r],e[r]);return n}function za(t,e){if(t===e)return!0;let n=yf(t),r=yf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=bn(t),r=bn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?wv(t,e):!1;if(n=Ke(t),r=Ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!za(t[o],e[o]))return!1}}return String(t)===String(e)}function Tv(t,e){return t.findIndex(n=>za(n,e))}const Jp=t=>!!(t&&t.__v_isRef===!0),Ye=t=>rt(t)?t:t==null?"":le(t)||Ke(t)&&(t.toString===Gp||!ge(t.toString))?Jp(t)?Ye(t.value):JSON.stringify(t,Xp,2):String(t),Xp=(t,e)=>Jp(e)?Xp(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[jc(r,i)+" =>"]=s,n),{})}:$a(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jc(n))}:bn(e)?jc(e):Ke(e)&&!le(e)&&!Qp(e)?String(e):e,jc=(t,e="")=>{var n;return bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class Iv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){++this._on===1&&(this.prevScope=Mt,Mt=this)}off(){this._on>0&&--this._on===0&&(Mt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Av(){return Mt}let He;const Hc=new WeakSet;class Zp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&Mt.active&&Mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hc.has(this)&&(Hc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ef(this),nm(this);const e=He,n=an;He=this,an=!0;try{return this.fn()}finally{rm(this),He=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hu(e);this.deps=this.depsTail=void 0,Ef(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yl(this)&&this.run()}get dirty(){return yl(this)}}let em=0,Ti,Ii;function tm(t,e=!1){if(t.flags|=8,e){t.next=Ii,Ii=t;return}t.next=Ti,Ti=t}function lu(){em++}function uu(){if(--em>0)return;if(Ii){let e=Ii;for(Ii=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ti;){let e=Ti;for(Ti=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function nm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),hu(r),bv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function yl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function sm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ui)||(t.globalVersion=Ui,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!yl(t))))return;t.flags|=2;const e=t.dep,n=He,r=an;He=t,an=!0;try{nm(t);const s=t.fn(t._value);(e.version===0||hr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{He=n,an=r,rm(t),t.flags&=-3}}function hu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const im=[];function $n(){im.push(an),an=!1}function qn(){const t=im.pop();an=t===void 0?!0:t}function Ef(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let Ui=0;class Rv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!He||!an||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new Rv(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,om(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=r)}return n}trigger(e){this.version++,Ui++,this.notify(e)}notify(e){lu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{uu()}}}function om(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)om(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vl=new WeakMap,Wr=Symbol(""),El=Symbol(""),Bi=Symbol("");function At(t,e,n){if(an&&He){let r=vl.get(t);r||vl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new fu),s.map=r,s.key=n),s.track()}}function On(t,e,n,r,s,i){const o=vl.get(t);if(!o){Ui++;return}const c=l=>{l&&l.trigger()};if(lu(),e==="clear")o.forEach(c);else{const l=le(t),u=l&&cu(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Bi||!bn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Bi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Wr)),_s(t)&&c(o.get(El)));break;case"delete":l||(c(o.get(Wr)),_s(t)&&c(o.get(El)));break;case"set":_s(t)&&c(o.get(Wr));break}}uu()}function cs(t){const e=De(t);return e===t?e:(At(e,"iterate",Bi),Zt(t)?e:e.map(mt))}function Wa(t){return At(t=De(t),"iterate",Bi),t}const Sv={__proto__:null,[Symbol.iterator](){return zc(this,Symbol.iterator,mt)},concat(...t){return cs(this).concat(...t.map(e=>le(e)?cs(e):e))},entries(){return zc(this,"entries",t=>(t[1]=mt(t[1]),t))},every(t,e){return Vn(this,"every",t,e,void 0,arguments)},filter(t,e){return Vn(this,"filter",t,e,n=>n.map(mt),arguments)},find(t,e){return Vn(this,"find",t,e,mt,arguments)},findIndex(t,e){return Vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Vn(this,"findLast",t,e,mt,arguments)},findLastIndex(t,e){return Vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wc(this,"includes",t)},indexOf(...t){return Wc(this,"indexOf",t)},join(t){return cs(this).join(t)},lastIndexOf(...t){return Wc(this,"lastIndexOf",t)},map(t,e){return Vn(this,"map",t,e,void 0,arguments)},pop(){return ui(this,"pop")},push(...t){return ui(this,"push",t)},reduce(t,...e){return wf(this,"reduce",t,e)},reduceRight(t,...e){return wf(this,"reduceRight",t,e)},shift(){return ui(this,"shift")},some(t,e){return Vn(this,"some",t,e,void 0,arguments)},splice(...t){return ui(this,"splice",t)},toReversed(){return cs(this).toReversed()},toSorted(t){return cs(this).toSorted(t)},toSpliced(...t){return cs(this).toSpliced(...t)},unshift(...t){return ui(this,"unshift",t)},values(){return zc(this,"values",mt)}};function zc(t,e,n){const r=Wa(t),s=r[e]();return r!==t&&!Zt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Cv=Array.prototype;function Vn(t,e,n,r,s,i){const o=Wa(t),c=o!==t&&!Zt(t),l=o[e];if(l!==Cv[e]){const p=l.apply(t,i);return c?mt(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,mt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function wf(t,e,n,r){const s=Wa(t);let i=n;return s!==t&&(Zt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,mt(c),l,t)}),s[e](i,...r)}function Wc(t,e,n){const r=De(t);At(r,"iterate",Bi);const s=r[e](...n);return(s===-1||s===!1)&&mu(n[0])?(n[0]=De(n[0]),r[e](...n)):s}function ui(t,e,n=[]){$n(),lu();const r=De(t)[e].apply(t,n);return uu(),qn(),r}const Pv=iu("__proto__,__v_isRef,__isVue"),am=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bn));function kv(t){bn(t)||(t=String(t));const e=De(this);return At(e,"has",t),e.hasOwnProperty(t)}class cm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Bv:fm:i?hm:um).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=Sv[n]))return l;if(n==="hasOwnProperty")return kv}const c=Reflect.get(e,n,St(e)?e:r);return(bn(n)?am.has(n):Pv(n))||(s||At(e,"get",n),i)?c:St(c)?o&&cu(n)?c:c.value:Ke(c)?s?pm(c):Ka(c):c}}class lm extends cm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=vr(i);if(!Zt(r)&&!vr(r)&&(i=De(i),r=De(r)),!le(e)&&St(i)&&!St(r))return l?!1:(i.value=r,!0)}const o=le(e)&&cu(n)?Number(n)<e.length:Oe(e,n),c=Reflect.set(e,n,r,St(e)?e:s);return e===De(s)&&(o?hr(r,i)&&On(e,"set",n,r):On(e,"add",n,r)),c}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&On(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!bn(n)||!am.has(n))&&At(e,"has",n),r}ownKeys(e){return At(e,"iterate",le(e)?"length":Wr),Reflect.ownKeys(e)}}class Vv extends cm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nv=new lm,Dv=new Vv,Ov=new lm(!0);const wl=t=>t,Bo=t=>Reflect.getPrototypeOf(t);function xv(t,e,n){return function(...r){const s=this.__v_raw,i=De(s),o=_s(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?wl:e?da:mt;return!e&&At(i,"iterate",l?El:Wr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function $o(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mv(t,e){const n={get(s){const i=this.__v_raw,o=De(i),c=De(s);t||(hr(s,c)&&At(o,"get",s),At(o,"get",c));const{has:l}=Bo(o),u=e?wl:t?da:mt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&At(De(s),"iterate",Wr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=De(i),c=De(s);return t||(hr(s,c)&&At(o,"has",s),At(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=De(c),u=e?wl:t?da:mt;return!t&&At(l,"iterate",Wr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Ct(n,t?{add:$o("add"),set:$o("set"),delete:$o("delete"),clear:$o("clear")}:{add(s){!e&&!Zt(s)&&!vr(s)&&(s=De(s));const i=De(this);return Bo(i).has.call(i,s)||(i.add(s),On(i,"add",s,s)),this},set(s,i){!e&&!Zt(i)&&!vr(i)&&(i=De(i));const o=De(this),{has:c,get:l}=Bo(o);let u=c.call(o,s);u||(s=De(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?hr(i,f)&&On(o,"set",s,i):On(o,"add",s,i),this},delete(s){const i=De(this),{has:o,get:c}=Bo(i);let l=o.call(i,s);l||(s=De(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&On(i,"delete",s,void 0),u},clear(){const s=De(this),i=s.size!==0,o=s.clear();return i&&On(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xv(s,t,e)}),n}function du(t,e){const n=Mv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const Lv={get:du(!1,!1)},Fv={get:du(!1,!0)},Uv={get:du(!0,!1)};const um=new WeakMap,hm=new WeakMap,fm=new WeakMap,Bv=new WeakMap;function $v(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qv(t){return t.__v_skip||!Object.isExtensible(t)?0:$v(fv(t))}function Ka(t){return vr(t)?t:pu(t,!1,Nv,Lv,um)}function dm(t){return pu(t,!1,Ov,Fv,hm)}function pm(t){return pu(t,!0,Dv,Uv,fm)}function pu(t,e,n,r,s){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=qv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ys(t){return vr(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function vr(t){return!!(t&&t.__v_isReadonly)}function Zt(t){return!!(t&&t.__v_isShallow)}function mu(t){return t?!!t.__v_raw:!1}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function jv(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&_l(t,"__v_skip",!0),t}const mt=t=>Ke(t)?Ka(t):t,da=t=>Ke(t)?pm(t):t;function St(t){return t?t.__v_isRef===!0:!1}function we(t){return mm(t,!1)}function Hv(t){return mm(t,!0)}function mm(t,e){return St(t)?t:new zv(t,e)}class zv{constructor(e,n){this.dep=new fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:De(e),this._value=n?e:mt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Zt(e)||vr(e);e=r?e:De(e),hr(e,n)&&(this._rawValue=e,this._value=r?e:mt(e),this.dep.trigger())}}function Fn(t){return St(t)?t.value:t}const Wv={get:(t,e,n)=>e==="__v_raw"?t:Fn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return St(s)&&!St(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gm(t){return ys(t)?t:new Proxy(t,Wv)}class Kv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return tm(this,!0),!0}get value(){const e=this.dep.track();return sm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gv(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new Kv(r,s,n)}const qo={},pa=new WeakMap;let Br;function Qv(t,e=!1,n=Br){if(n){let r=pa.get(n);r||pa.set(n,r=[]),r.push(t)}}function Yv(t,e,n=qe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=O=>s?O:Zt(O)||s===!1||s===0?xn(O,1):xn(O);let f,p,m,_,R=!1,V=!1;if(St(t)?(p=()=>t.value,R=Zt(t)):ys(t)?(p=()=>u(t),R=!0):le(t)?(V=!0,R=t.some(O=>ys(O)||Zt(O)),p=()=>t.map(O=>{if(St(O))return O.value;if(ys(O))return u(O);if(ge(O))return l?l(O,2):O()})):ge(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){$n();try{m()}finally{qn()}}const O=Br;Br=f;try{return l?l(t,3,[_]):t(_)}finally{Br=O}}:p=yn,e&&s){const O=p,G=s===!0?1/0:s;p=()=>xn(O(),G)}const D=Av(),j=()=>{f.stop(),D&&D.active&&au(D.effects,f)};if(i&&e){const O=e;e=(...G)=>{O(...G),j()}}let q=V?new Array(t.length).fill(qo):qo;const x=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const G=f.run();if(s||R||(V?G.some((re,I)=>hr(re,q[I])):hr(G,q))){m&&m();const re=Br;Br=f;try{const I=[G,q===qo?void 0:V&&q[0]===qo?[]:q,_];q=G,l?l(e,3,I):e(...I)}finally{Br=re}}}else f.run()};return c&&c(x),f=new Zp(p),f.scheduler=o?()=>o(x,!1):x,_=O=>Qv(O,!1,f),m=f.onStop=()=>{const O=pa.get(f);if(O){if(l)l(O,4);else for(const G of O)G();pa.delete(f)}},e?r?x(!0):q=f.run():o?o(x.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function xn(t,e=1/0,n){if(e<=0||!Ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,St(t))xn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)xn(t[r],e,n);else if($a(t)||_s(t))t.forEach(r=>{xn(r,e,n)});else if(Qp(t)){for(const r in t)xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,r){try{return r?t(...r):t()}catch(s){Ga(s,e,n)}}function Rn(t,e,n,r){if(ge(t)){const s=io(t,e,n,r);return s&&Kp(s)&&s.catch(i=>{Ga(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Rn(t[i],e,n,r));return s}}function Ga(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||qe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){$n(),io(i,null,10,[t,l,u]),qn();return}}Jv(t,n,s,r,o)}function Jv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Dt=[];let dn=-1;const vs=[];let sr=null,ls=0;const _m=Promise.resolve();let ma=null;function Qa(t){const e=ma||_m;return t?e.then(this?t.bind(this):t):e}function Xv(t){let e=dn+1,n=Dt.length;for(;e<n;){const r=e+n>>>1,s=Dt[r],i=$i(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function gu(t){if(!(t.flags&1)){const e=$i(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=$i(n)?Dt.push(t):Dt.splice(Xv(e),0,t),t.flags|=1,ym()}}function ym(){ma||(ma=_m.then(Em))}function Zv(t){le(t)?vs.push(...t):sr&&t.id===-1?sr.splice(ls+1,0,t):t.flags&1||(vs.push(t),t.flags|=1),ym()}function Tf(t,e,n=dn+1){for(;n<Dt.length;n++){const r=Dt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Dt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vm(t){if(vs.length){const e=[...new Set(vs)].sort((n,r)=>$i(n)-$i(r));if(vs.length=0,sr){sr.push(...e);return}for(sr=e,ls=0;ls<sr.length;ls++){const n=sr[ls];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}sr=null,ls=0}}const $i=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Em(t){try{for(dn=0;dn<Dt.length;dn++){const e=Dt[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Dt.length;dn++){const e=Dt[dn];e&&(e.flags&=-2)}dn=-1,Dt.length=0,vm(),ma=null,(Dt.length||vs.length)&&Em()}}let Wt=null,wm=null;function ga(t){const e=Wt;return Wt=t,wm=t&&t.type.__scopeId||null,e}function zt(t,e=Wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xf(-1);const i=ga(e);let o;try{o=t(...s)}finally{ga(i),r._d&&xf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function rn(t,e){if(Wt===null)return t;const n=Za(Wt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=qe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Fr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&($n(),Rn(l,n,8,[t.el,c,t,e]),qn())}}const Tm=Symbol("_vte"),eE=t=>t.__isTeleport,Ai=t=>t&&(t.disabled||t.disabled===""),If=t=>t&&(t.defer||t.defer===""),Af=t=>typeof SVGElement<"u"&&t instanceof SVGElement,bf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Tl=(t,e)=>{const n=t&&t.to;return rt(n)?e?e(n):null:n},Im={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:f,pc:p,pbc:m,o:{insert:_,querySelector:R,createText:V,createComment:D}}=u,j=Ai(e.props);let{shapeFlag:q,children:x,dynamicChildren:O}=e;if(t==null){const G=e.el=V(""),re=e.anchor=V("");_(G,n,r),_(re,n,r);const I=(w,A)=>{q&16&&(s&&s.isCE&&(s.ce._teleportTarget=w),f(x,w,A,s,i,o,c,l))},y=()=>{const w=e.target=Tl(e.props,R),A=bm(w,e,V,_);w&&(o!=="svg"&&Af(w)?o="svg":o!=="mathml"&&bf(w)&&(o="mathml"),j||(I(w,A),Jo(e,!1)))};j&&(I(n,re),Jo(e,!0)),If(e.props)?(e.el.__isMounted=!1,Nt(()=>{y(),delete e.el.__isMounted},i)):y()}else{if(If(e.props)&&t.el.__isMounted===!1){Nt(()=>{Im.process(t,e,n,r,s,i,o,c,l,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const G=e.anchor=t.anchor,re=e.target=t.target,I=e.targetAnchor=t.targetAnchor,y=Ai(t.props),w=y?n:re,A=y?G:I;if(o==="svg"||Af(re)?o="svg":(o==="mathml"||bf(re))&&(o="mathml"),O?(m(t.dynamicChildren,O,w,s,i,o,c),Eu(t,e,!0)):l||p(t,e,w,A,s,i,o,c,!1),j)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):jo(e,n,G,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const b=e.target=Tl(e.props,R);b&&jo(e,b,null,u,0)}else y&&jo(e,re,I,u,1);Jo(e,j)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:f,target:p,props:m}=t;if(p&&(s(u),s(f)),i&&s(l),o&16){const _=i||!Ai(m);for(let R=0;R<c.length;R++){const V=c[R];r(V,e,n,_,!!V.dynamicChildren)}}},move:jo,hydrate:tE};function jo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),(!p||Ai(f))&&l&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);p&&r(c,e,n)}function tE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:f}},p){const m=e.target=Tl(e.props,l);if(m){const _=Ai(e.props),R=m._lpa||m.firstChild;if(e.shapeFlag&16)if(_)e.anchor=p(o(t),e,c(t),n,r,s,i),e.targetStart=R,e.targetAnchor=R&&o(R);else{e.anchor=o(t);let V=R;for(;V;){if(V&&V.nodeType===8){if(V.data==="teleport start anchor")e.targetStart=V;else if(V.data==="teleport anchor"){e.targetAnchor=V,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}V=o(V)}e.targetAnchor||bm(m,e,f,u),p(R&&o(R),e,m,n,r,s,i)}Jo(e,_)}return e.anchor&&o(e.anchor)}const Am=Im;function Jo(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function bm(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Tm]=i,t&&(r(s,t),r(i,t)),i}function _u(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_u(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rm(t,e){return ge(t)?Ct({name:t.name},e,{setup:t}):t}function Sm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function bi(t,e,n,r,s=!1){if(le(t)){t.forEach((R,V)=>bi(R,e&&(le(e)?e[V]:e),n,r,s));return}if(Ri(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&bi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Za(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===qe?c.refs={}:c.refs,p=c.setupState,m=De(p),_=p===qe?()=>!1:R=>Oe(m,R);if(u!=null&&u!==l&&(rt(u)?(f[u]=null,_(u)&&(p[u]=null)):St(u)&&(u.value=null)),ge(l))io(l,c,12,[o,f]);else{const R=rt(l),V=St(l);if(R||V){const D=()=>{if(t.f){const j=R?_(l)?p[l]:f[l]:l.value;s?le(j)&&au(j,i):le(j)?j.includes(i)||j.push(i):R?(f[l]=[i],_(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else R?(f[l]=o,_(l)&&(p[l]=o)):V&&(l.value=o,t.k&&(f[t.k]=o))};o?(D.id=-1,Nt(D,n)):D()}}}Ha().requestIdleCallback;Ha().cancelIdleCallback;const Ri=t=>!!t.type.__asyncLoader,Cm=t=>t.type.__isKeepAlive;function nE(t,e){Pm(t,"a",e)}function rE(t,e){Pm(t,"da",e)}function Pm(t,e,n=Rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ya(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Cm(s.parent.vnode)&&sE(r,e,n,s),s=s.parent}}function sE(t,e,n,r){const s=Ya(e,t,r,!0);Es(()=>{au(r[e],s)},n)}function Ya(t,e,n=Rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{$n();const c=ao(n),l=Rn(e,n,t,o);return c(),qn(),l});return r?s.unshift(i):s.push(i),i}}const Gn=t=>(e,n=Rt)=>{(!ji||t==="sp")&&Ya(t,(...r)=>e(...r),n)},iE=Gn("bm"),mn=Gn("m"),oE=Gn("bu"),aE=Gn("u"),cE=Gn("bum"),Es=Gn("um"),lE=Gn("sp"),uE=Gn("rtg"),hE=Gn("rtc");function fE(t,e=Rt){Ya("ec",t,e)}const dE="components";function Er(t,e){return mE(dE,t,!0,e)||t}const pE=Symbol.for("v-ndc");function mE(t,e,n=!0,r=!1){const s=Wt||Rt;if(s){const i=s.type;{const c=nw(i,!1);if(c&&(c===e||c===en(e)||c===ja(en(e))))return i}const o=Rf(s[t]||i[t],e)||Rf(s.appContext[t],e);return!o&&r?i:o}}function Rf(t,e){return t&&(t[e]||t[en(e)]||t[ja(en(e))])}function oo(t,e,n,r){let s;const i=n,o=le(t);if(o||rt(t)){const c=o&&ys(t);let l=!1,u=!1;c&&(l=!Zt(t),u=vr(t),t=Wa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?da(mt(t[f])):mt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ke(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Il=t=>t?Gm(t)?Za(t):Il(t.parent):null,Si=Ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Il(t.parent),$root:t=>Il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vm(t),$forceUpdate:t=>t.f||(t.f=()=>{gu(t.update)}),$nextTick:t=>t.n||(t.n=Qa.bind(t.proxy)),$watch:t=>ME.bind(t)}),Kc=(t,e)=>t!==qe&&!t.__isScriptSetup&&Oe(t,e),gE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Kc(r,e))return o[e]=1,r[e];if(s!==qe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==qe&&Oe(n,e))return o[e]=4,n[e];Al&&(o[e]=0)}}const f=Si[e];let p,m;if(f)return e==="$attrs"&&At(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==qe&&Oe(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Kc(s,e)?(s[e]=n,!0):r!==qe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==qe&&Oe(t,o)||Kc(e,o)||(c=i[0])&&Oe(c,o)||Oe(r,o)||Oe(Si,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Al=!0;function _E(t){const e=Vm(t),n=t.proxy,r=t.ctx;Al=!1,e.beforeCreate&&Cf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:R,activated:V,deactivated:D,beforeDestroy:j,beforeUnmount:q,destroyed:x,unmounted:O,render:G,renderTracked:re,renderTriggered:I,errorCaptured:y,serverPrefetch:w,expose:A,inheritAttrs:b,components:C,directives:v,filters:me}=e;if(u&&yE(u,r,null),o)for(const Ee in o){const fe=o[Ee];ge(fe)&&(r[Ee]=fe.bind(n))}if(s){const Ee=s.call(n,n);Ke(Ee)&&(t.data=Ka(Ee))}if(Al=!0,i)for(const Ee in i){const fe=i[Ee],Ge=ge(fe)?fe.bind(n,n):ge(fe.get)?fe.get.bind(n,n):yn,Fe=!ge(fe)&&ge(fe.set)?fe.set.bind(n):yn,Ue=Ot({get:Ge,set:Fe});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Me=>Ue.value=Me})}if(c)for(const Ee in c)km(c[Ee],r,n,Ee);if(l){const Ee=ge(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(fe=>{Xo(fe,Ee[fe])})}f&&Cf(f,t,"c");function Re(Ee,fe){le(fe)?fe.forEach(Ge=>Ee(Ge.bind(n))):fe&&Ee(fe.bind(n))}if(Re(iE,p),Re(mn,m),Re(oE,_),Re(aE,R),Re(nE,V),Re(rE,D),Re(fE,y),Re(hE,re),Re(uE,I),Re(cE,q),Re(Es,O),Re(lE,w),le(A))if(A.length){const Ee=t.exposed||(t.exposed={});A.forEach(fe=>{Object.defineProperty(Ee,fe,{get:()=>n[fe],set:Ge=>n[fe]=Ge,enumerable:!0})})}else t.exposed||(t.exposed={});G&&t.render===yn&&(t.render=G),b!=null&&(t.inheritAttrs=b),C&&(t.components=C),v&&(t.directives=v),w&&Sm(t)}function yE(t,e,n=yn){le(t)&&(t=bl(t));for(const r in t){const s=t[r];let i;Ke(s)?"default"in s?i=cn(s.from||r,s.default,!0):i=cn(s.from||r):i=cn(s),St(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Cf(t,e,n){Rn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function km(t,e,n,r){let s=r.includes(".")?jm(n,r):()=>n[r];if(rt(t)){const i=e[t];ge(i)&&Ci(s,i)}else if(ge(t))Ci(s,t.bind(n));else if(Ke(t))if(le(t))t.forEach(i=>km(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Ci(s,i,t)}}function Vm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>_a(l,u,o,!0)),_a(l,e,o)),Ke(e)&&i.set(e,l),l}function _a(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_a(t,i,n,!0),s&&s.forEach(o=>_a(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=vE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const vE={data:Pf,props:kf,emits:kf,methods:di,computed:di,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:di,directives:di,watch:wE,provide:Pf,inject:EE};function Pf(t,e){return e?t?function(){return Ct(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function EE(t,e){return di(bl(t),bl(e))}function bl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?Ct(Object.create(null),t,e):e}function kf(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:Ct(Object.create(null),Sf(t),Sf(e??{})):e}function wE(t,e){if(!t)return e;if(!e)return t;const n=Ct(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function Nm(){return{app:null,config:{isNativeTag:uv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let TE=0;function IE(t,e){return function(r,s=null){ge(r)||(r=Ct({},r)),s!=null&&!Ke(s)&&(s=null);const i=Nm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:TE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sw,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ge(f.install)?(o.add(f),f.install(u,...p)):ge(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||je(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,Za(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Rn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ws;ws=u;try{return f()}finally{ws=p}}};return u}}let ws=null;function Xo(t,e){if(Rt){let n=Rt.provides;const r=Rt.parent&&Rt.parent.provides;r===n&&(n=Rt.provides=Object.create(r)),n[t]=e}}function cn(t,e,n=!1){const r=JE();if(r||ws){let s=ws?ws._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const Dm={},Om=()=>Object.create(Dm),xm=t=>Object.getPrototypeOf(t)===Dm;function AE(t,e,n,r=!1){const s={},i=Om();t.propsDefaults=Object.create(null),Mm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:dm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function bE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=De(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ja(t.emitsOptions,m))continue;const _=e[m];if(l)if(Oe(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const R=en(m);s[R]=Rl(l,c,R,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Mm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Oe(e,p)&&((f=Pr(p))===p||!Oe(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Rl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&On(t.attrs,"set","")}function Mm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(wi(l))continue;const u=e[l];let f;s&&Oe(s,f=en(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ja(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=De(n),u=c||qe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Rl(s,l,p,u[p],t,!Oe(u,p))}}return o}function Rl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Oe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ge(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=ao(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Pr(n))&&(r=!0))}return r}const RE=new WeakMap;function Lm(t,e,n=!1){const r=n?RE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ge(t)){const f=p=>{l=!0;const[m,_]=Lm(p,e,!0);Ct(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ke(t)&&r.set(t,gs),gs;if(le(i))for(let f=0;f<i.length;f++){const p=en(i[f]);Vf(p)&&(o[p]=qe)}else if(i)for(const f in i){const p=en(f);if(Vf(p)){const m=i[f],_=o[p]=le(m)||ge(m)?{type:m}:Ct({},m),R=_.type;let V=!1,D=!0;if(le(R))for(let j=0;j<R.length;++j){const q=R[j],x=ge(q)&&q.name;if(x==="Boolean"){V=!0;break}else x==="String"&&(D=!1)}else V=ge(R)&&R.name==="Boolean";_[0]=V,_[1]=D,(V||Oe(_,"default"))&&c.push(p)}}const u=[o,c];return Ke(t)&&r.set(t,u),u}function Vf(t){return t[0]!=="$"&&!wi(t)}const yu=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",vu=t=>le(t)?t.map(gn):[gn(t)],SE=(t,e,n)=>{if(e._n)return e;const r=zt((...s)=>vu(e(...s)),n);return r._c=!1,r},Fm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yu(s))continue;const i=t[s];if(ge(i))e[s]=SE(s,i,r);else if(i!=null){const o=vu(i);e[s]=()=>o}}},Um=(t,e)=>{const n=vu(e);t.slots.default=()=>n},Bm=(t,e,n)=>{for(const r in e)(n||!yu(r))&&(t[r]=e[r])},CE=(t,e,n)=>{const r=t.slots=Om();if(t.vnode.shapeFlag&32){const s=e.__;s&&_l(r,"__",s,!0);const i=e._;i?(Bm(r,e,n),n&&_l(r,"_",i,!0)):Fm(e,r)}else e&&Um(t,e)},PE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=qe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Bm(s,e,n):(i=!e.$stable,Fm(e,s)),o=e}else e&&(Um(t,e),o={default:1});if(i)for(const c in s)!yu(c)&&o[c]==null&&delete s[c]},Nt=jE;function kE(t){return VE(t)}function VE(t,e){const n=Ha();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=yn,insertStaticContent:R}=t,V=(E,T,S,F=null,$=null,U=null,Y=void 0,W=null,z=!!T.dynamicChildren)=>{if(E===T)return;E&&!hi(E,T)&&(F=L(E),Me(E,$,U,!0),E=null),T.patchFlag===-2&&(z=!1,T.dynamicChildren=null);const{type:H,ref:se,shapeFlag:Q}=T;switch(H){case Xa:D(E,T,S,F);break;case wr:j(E,T,S,F);break;case Zo:E==null&&q(T,S,F,Y);break;case lt:C(E,T,S,F,$,U,Y,W,z);break;default:Q&1?G(E,T,S,F,$,U,Y,W,z):Q&6?v(E,T,S,F,$,U,Y,W,z):(Q&64||Q&128)&&H.process(E,T,S,F,$,U,Y,W,z,te)}se!=null&&$?bi(se,E&&E.ref,U,T||E,!T):se==null&&E&&E.ref!=null&&bi(E.ref,null,U,E,!0)},D=(E,T,S,F)=>{if(E==null)r(T.el=c(T.children),S,F);else{const $=T.el=E.el;T.children!==E.children&&u($,T.children)}},j=(E,T,S,F)=>{E==null?r(T.el=l(T.children||""),S,F):T.el=E.el},q=(E,T,S,F)=>{[E.el,E.anchor]=R(E.children,T,S,F,E.el,E.anchor)},x=({el:E,anchor:T},S,F)=>{let $;for(;E&&E!==T;)$=m(E),r(E,S,F),E=$;r(T,S,F)},O=({el:E,anchor:T})=>{let S;for(;E&&E!==T;)S=m(E),s(E),E=S;s(T)},G=(E,T,S,F,$,U,Y,W,z)=>{T.type==="svg"?Y="svg":T.type==="math"&&(Y="mathml"),E==null?re(T,S,F,$,U,Y,W,z):w(E,T,$,U,Y,W,z)},re=(E,T,S,F,$,U,Y,W)=>{let z,H;const{props:se,shapeFlag:Q,transition:ne,dirs:ue}=E;if(z=E.el=o(E.type,U,se&&se.is,se),Q&8?f(z,E.children):Q&16&&y(E.children,z,null,F,$,Gc(E,U),Y,W),ue&&Fr(E,null,F,"created"),I(z,E,E.scopeId,Y,F),se){for(const _e in se)_e!=="value"&&!wi(_e)&&i(z,_e,null,se[_e],U,F);"value"in se&&i(z,"value",null,se.value,U),(H=se.onVnodeBeforeMount)&&fn(H,F,E)}ue&&Fr(E,null,F,"beforeMount");const oe=NE($,ne);oe&&ne.beforeEnter(z),r(z,T,S),((H=se&&se.onVnodeMounted)||oe||ue)&&Nt(()=>{H&&fn(H,F,E),oe&&ne.enter(z),ue&&Fr(E,null,F,"mounted")},$)},I=(E,T,S,F,$)=>{if(S&&_(E,S),F)for(let U=0;U<F.length;U++)_(E,F[U]);if($){let U=$.subTree;if(T===U||zm(U.type)&&(U.ssContent===T||U.ssFallback===T)){const Y=$.vnode;I(E,Y,Y.scopeId,Y.slotScopeIds,$.parent)}}},y=(E,T,S,F,$,U,Y,W,z=0)=>{for(let H=z;H<E.length;H++){const se=E[H]=W?ir(E[H]):gn(E[H]);V(null,se,T,S,F,$,U,Y,W)}},w=(E,T,S,F,$,U,Y)=>{const W=T.el=E.el;let{patchFlag:z,dynamicChildren:H,dirs:se}=T;z|=E.patchFlag&16;const Q=E.props||qe,ne=T.props||qe;let ue;if(S&&Ur(S,!1),(ue=ne.onVnodeBeforeUpdate)&&fn(ue,S,T,E),se&&Fr(T,E,S,"beforeUpdate"),S&&Ur(S,!0),(Q.innerHTML&&ne.innerHTML==null||Q.textContent&&ne.textContent==null)&&f(W,""),H?A(E.dynamicChildren,H,W,S,F,Gc(T,$),U):Y||fe(E,T,W,null,S,F,Gc(T,$),U,!1),z>0){if(z&16)b(W,Q,ne,S,$);else if(z&2&&Q.class!==ne.class&&i(W,"class",null,ne.class,$),z&4&&i(W,"style",Q.style,ne.style,$),z&8){const oe=T.dynamicProps;for(let _e=0;_e<oe.length;_e++){const Se=oe[_e],ut=Q[Se],ht=ne[Se];(ht!==ut||Se==="value")&&i(W,Se,ut,ht,$,S)}}z&1&&E.children!==T.children&&f(W,T.children)}else!Y&&H==null&&b(W,Q,ne,S,$);((ue=ne.onVnodeUpdated)||se)&&Nt(()=>{ue&&fn(ue,S,T,E),se&&Fr(T,E,S,"updated")},F)},A=(E,T,S,F,$,U,Y)=>{for(let W=0;W<T.length;W++){const z=E[W],H=T[W],se=z.el&&(z.type===lt||!hi(z,H)||z.shapeFlag&198)?p(z.el):S;V(z,H,se,null,F,$,U,Y,!0)}},b=(E,T,S,F,$)=>{if(T!==S){if(T!==qe)for(const U in T)!wi(U)&&!(U in S)&&i(E,U,T[U],null,$,F);for(const U in S){if(wi(U))continue;const Y=S[U],W=T[U];Y!==W&&U!=="value"&&i(E,U,W,Y,$,F)}"value"in S&&i(E,"value",T.value,S.value,$)}},C=(E,T,S,F,$,U,Y,W,z)=>{const H=T.el=E?E.el:c(""),se=T.anchor=E?E.anchor:c("");let{patchFlag:Q,dynamicChildren:ne,slotScopeIds:ue}=T;ue&&(W=W?W.concat(ue):ue),E==null?(r(H,S,F),r(se,S,F),y(T.children||[],S,se,$,U,Y,W,z)):Q>0&&Q&64&&ne&&E.dynamicChildren?(A(E.dynamicChildren,ne,S,$,U,Y,W),(T.key!=null||$&&T===$.subTree)&&Eu(E,T,!0)):fe(E,T,S,se,$,U,Y,W,z)},v=(E,T,S,F,$,U,Y,W,z)=>{T.slotScopeIds=W,E==null?T.shapeFlag&512?$.ctx.activate(T,S,F,Y,z):me(T,S,F,$,U,Y,z):Pe(E,T,z)},me=(E,T,S,F,$,U,Y)=>{const W=E.component=YE(E,F,$);if(Cm(E)&&(W.ctx.renderer=te),XE(W,!1,Y),W.asyncDep){if($&&$.registerDep(W,Re,Y),!E.el){const z=W.subTree=je(wr);j(null,z,T,S),E.placeholder=z.el}}else Re(W,E,T,S,$,U,Y)},Pe=(E,T,S)=>{const F=T.component=E.component;if($E(E,T,S))if(F.asyncDep&&!F.asyncResolved){Ee(F,T,S);return}else F.next=T,F.update();else T.el=E.el,F.vnode=T},Re=(E,T,S,F,$,U,Y)=>{const W=()=>{if(E.isMounted){let{next:Q,bu:ne,u:ue,parent:oe,vnode:_e}=E;{const vt=$m(E);if(vt){Q&&(Q.el=_e.el,Ee(E,Q,Y)),vt.asyncDep.then(()=>{E.isUnmounted||W()});return}}let Se=Q,ut;Ur(E,!1),Q?(Q.el=_e.el,Ee(E,Q,Y)):Q=_e,ne&&Yo(ne),(ut=Q.props&&Q.props.onVnodeBeforeUpdate)&&fn(ut,oe,Q,_e),Ur(E,!0);const ht=Df(E),Qt=E.subTree;E.subTree=ht,V(Qt,ht,p(Qt.el),L(Qt),E,$,U),Q.el=ht.el,Se===null&&qE(E,ht.el),ue&&Nt(ue,$),(ut=Q.props&&Q.props.onVnodeUpdated)&&Nt(()=>fn(ut,oe,Q,_e),$)}else{let Q;const{el:ne,props:ue}=T,{bm:oe,m:_e,parent:Se,root:ut,type:ht}=E,Qt=Ri(T);Ur(E,!1),oe&&Yo(oe),!Qt&&(Q=ue&&ue.onVnodeBeforeMount)&&fn(Q,Se,T),Ur(E,!0);{ut.ce&&ut.ce._def.shadowRoot!==!1&&ut.ce._injectChildStyle(ht);const vt=E.subTree=Df(E);V(null,vt,S,F,E,$,U),T.el=vt.el}if(_e&&Nt(_e,$),!Qt&&(Q=ue&&ue.onVnodeMounted)){const vt=T;Nt(()=>fn(Q,Se,vt),$)}(T.shapeFlag&256||Se&&Ri(Se.vnode)&&Se.vnode.shapeFlag&256)&&E.a&&Nt(E.a,$),E.isMounted=!0,T=S=F=null}};E.scope.on();const z=E.effect=new Zp(W);E.scope.off();const H=E.update=z.run.bind(z),se=E.job=z.runIfDirty.bind(z);se.i=E,se.id=E.uid,z.scheduler=()=>gu(se),Ur(E,!0),H()},Ee=(E,T,S)=>{T.component=E;const F=E.vnode.props;E.vnode=T,E.next=null,bE(E,T.props,F,S),PE(E,T.children,S),$n(),Tf(E),qn()},fe=(E,T,S,F,$,U,Y,W,z=!1)=>{const H=E&&E.children,se=E?E.shapeFlag:0,Q=T.children,{patchFlag:ne,shapeFlag:ue}=T;if(ne>0){if(ne&128){Fe(H,Q,S,F,$,U,Y,W,z);return}else if(ne&256){Ge(H,Q,S,F,$,U,Y,W,z);return}}ue&8?(se&16&&yt(H,$,U),Q!==H&&f(S,Q)):se&16?ue&16?Fe(H,Q,S,F,$,U,Y,W,z):yt(H,$,U,!0):(se&8&&f(S,""),ue&16&&y(Q,S,F,$,U,Y,W,z))},Ge=(E,T,S,F,$,U,Y,W,z)=>{E=E||gs,T=T||gs;const H=E.length,se=T.length,Q=Math.min(H,se);let ne;for(ne=0;ne<Q;ne++){const ue=T[ne]=z?ir(T[ne]):gn(T[ne]);V(E[ne],ue,S,null,$,U,Y,W,z)}H>se?yt(E,$,U,!0,!1,Q):y(T,S,F,$,U,Y,W,z,Q)},Fe=(E,T,S,F,$,U,Y,W,z)=>{let H=0;const se=T.length;let Q=E.length-1,ne=se-1;for(;H<=Q&&H<=ne;){const ue=E[H],oe=T[H]=z?ir(T[H]):gn(T[H]);if(hi(ue,oe))V(ue,oe,S,null,$,U,Y,W,z);else break;H++}for(;H<=Q&&H<=ne;){const ue=E[Q],oe=T[ne]=z?ir(T[ne]):gn(T[ne]);if(hi(ue,oe))V(ue,oe,S,null,$,U,Y,W,z);else break;Q--,ne--}if(H>Q){if(H<=ne){const ue=ne+1,oe=ue<se?T[ue].el:F;for(;H<=ne;)V(null,T[H]=z?ir(T[H]):gn(T[H]),S,oe,$,U,Y,W,z),H++}}else if(H>ne)for(;H<=Q;)Me(E[H],$,U,!0),H++;else{const ue=H,oe=H,_e=new Map;for(H=oe;H<=ne;H++){const ft=T[H]=z?ir(T[H]):gn(T[H]);ft.key!=null&&_e.set(ft.key,H)}let Se,ut=0;const ht=ne-oe+1;let Qt=!1,vt=0;const Xn=new Array(ht);for(H=0;H<ht;H++)Xn[H]=0;for(H=ue;H<=Q;H++){const ft=E[H];if(ut>=ht){Me(ft,$,U,!0);continue}let Yt;if(ft.key!=null)Yt=_e.get(ft.key);else for(Se=oe;Se<=ne;Se++)if(Xn[Se-oe]===0&&hi(ft,T[Se])){Yt=Se;break}Yt===void 0?Me(ft,$,U,!0):(Xn[Yt-oe]=H+1,Yt>=vt?vt=Yt:Qt=!0,V(ft,T[Yt],S,null,$,U,Y,W,z),ut++)}const Js=Qt?DE(Xn):gs;for(Se=Js.length-1,H=ht-1;H>=0;H--){const ft=oe+H,Yt=T[ft],Ao=T[ft+1],rs=ft+1<se?Ao.el||Ao.placeholder:F;Xn[H]===0?V(null,Yt,S,rs,$,U,Y,W,z):Qt&&(Se<0||H!==Js[Se]?Ue(Yt,S,rs,2):Se--)}}},Ue=(E,T,S,F,$=null)=>{const{el:U,type:Y,transition:W,children:z,shapeFlag:H}=E;if(H&6){Ue(E.component.subTree,T,S,F);return}if(H&128){E.suspense.move(T,S,F);return}if(H&64){Y.move(E,T,S,te);return}if(Y===lt){r(U,T,S);for(let Q=0;Q<z.length;Q++)Ue(z[Q],T,S,F);r(E.anchor,T,S);return}if(Y===Zo){x(E,T,S);return}if(F!==2&&H&1&&W)if(F===0)W.beforeEnter(U),r(U,T,S),Nt(()=>W.enter(U),$);else{const{leave:Q,delayLeave:ne,afterLeave:ue}=W,oe=()=>{E.ctx.isUnmounted?s(U):r(U,T,S)},_e=()=>{Q(U,()=>{oe(),ue&&ue()})};ne?ne(U,oe,_e):_e()}else r(U,T,S)},Me=(E,T,S,F=!1,$=!1)=>{const{type:U,props:Y,ref:W,children:z,dynamicChildren:H,shapeFlag:se,patchFlag:Q,dirs:ne,cacheIndex:ue}=E;if(Q===-2&&($=!1),W!=null&&($n(),bi(W,null,S,E,!0),qn()),ue!=null&&(T.renderCache[ue]=void 0),se&256){T.ctx.deactivate(E);return}const oe=se&1&&ne,_e=!Ri(E);let Se;if(_e&&(Se=Y&&Y.onVnodeBeforeUnmount)&&fn(Se,T,E),se&6)xt(E.component,S,F);else{if(se&128){E.suspense.unmount(S,F);return}oe&&Fr(E,null,T,"beforeUnmount"),se&64?E.type.remove(E,T,S,te,F):H&&!H.hasOnce&&(U!==lt||Q>0&&Q&64)?yt(H,T,S,!1,!0):(U===lt&&Q&384||!$&&se&16)&&yt(z,T,S),F&&Le(E)}(_e&&(Se=Y&&Y.onVnodeUnmounted)||oe)&&Nt(()=>{Se&&fn(Se,T,E),oe&&Fr(E,null,T,"unmounted")},S)},Le=E=>{const{type:T,el:S,anchor:F,transition:$}=E;if(T===lt){jt(S,F);return}if(T===Zo){O(E);return}const U=()=>{s(S),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:Y,delayLeave:W}=$,z=()=>Y(S,U);W?W(E.el,U,z):z()}else U()},jt=(E,T)=>{let S;for(;E!==T;)S=m(E),s(E),E=S;s(T)},xt=(E,T,S)=>{const{bum:F,scope:$,job:U,subTree:Y,um:W,m:z,a:H,parent:se,slots:{__:Q}}=E;Nf(z),Nf(H),F&&Yo(F),se&&le(Q)&&Q.forEach(ne=>{se.renderCache[ne]=void 0}),$.stop(),U&&(U.flags|=8,Me(Y,E,T,S)),W&&Nt(W,T),Nt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},yt=(E,T,S,F=!1,$=!1,U=0)=>{for(let Y=U;Y<E.length;Y++)Me(E[Y],T,S,F,$)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=m(E.anchor||E.el),S=T&&T[Tm];return S?m(S):T};let Z=!1;const X=(E,T,S)=>{E==null?T._vnode&&Me(T._vnode,null,null,!0):V(T._vnode||null,E,T,null,null,null,S),T._vnode=E,Z||(Z=!0,Tf(),vm(),Z=!1)},te={p:V,um:Me,m:Ue,r:Le,mt:me,mc:y,pc:fe,pbc:A,n:L,o:t};return{render:X,hydrate:void 0,createApp:IE(X)}}function Gc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function NE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Eu(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ir(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Eu(o,c)),c.type===Xa&&(c.el=o.el),c.type===wr&&!c.el&&(c.el=o.el)}}function DE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $m(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$m(e)}function Nf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const OE=Symbol.for("v-scx"),xE=()=>cn(OE);function Ci(t,e,n){return qm(t,e,n)}function qm(t,e,n=qe){const{immediate:r,deep:s,flush:i,once:o}=n,c=Ct({},n),l=e&&r||!e&&i!=="post";let u;if(ji){if(i==="sync"){const _=xE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=yn,_.resume=yn,_.pause=yn,_}}const f=Rt;c.call=(_,R,V)=>Rn(_,f,R,V);let p=!1;i==="post"?c.scheduler=_=>{Nt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,R)=>{R?_():gu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=Yv(t,e,c);return ji&&(u?u.push(m):l&&m()),m}function ME(t,e,n){const r=this.proxy,s=rt(t)?t.includes(".")?jm(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=ao(this),c=qm(s,i.bind(r),n);return o(),c}function jm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const LE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${en(e)}Modifiers`]||t[`${Pr(e)}Modifiers`];function FE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||qe;let s=n;const i=e.startsWith("update:"),o=i&&LE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>rt(f)?f.trim():f)),o.number&&(s=n.map(fa)));let c,l=r[c=qc(e)]||r[c=qc(en(e))];!l&&i&&(l=r[c=qc(Pr(e))]),l&&Rn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Rn(u,t,6,s)}}function Hm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ge(t)){const l=u=>{const f=Hm(u,e,!0);f&&(c=!0,Ct(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ke(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):Ct(o,i),Ke(t)&&r.set(t,o),o)}function Ja(t,e){return!t||!Ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Pr(e))||Oe(t,e))}function Df(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:R,inheritAttrs:V}=t,D=ga(t);let j,q;try{if(n.shapeFlag&4){const O=s||r,G=O;j=gn(u.call(G,O,f,p,_,m,R)),q=c}else{const O=e;j=gn(O.length>1?O(p,{attrs:c,slots:o,emit:l}):O(p,null)),q=e.props?c:UE(c)}}catch(O){Pi.length=0,Ga(O,t,1),j=je(wr)}let x=j;if(q&&V!==!1){const O=Object.keys(q),{shapeFlag:G}=x;O.length&&G&7&&(i&&O.some(ou)&&(q=BE(q,i)),x=Cs(x,q,!1,!0))}return n.dirs&&(x=Cs(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&_u(x,n.transition),j=x,ga(D),j}const UE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ba(n))&&((e||(e={}))[n]=t[n]);return e},BE=(t,e)=>{const n={};for(const r in t)(!ou(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $E(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Of(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ja(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Of(r,o,u):!0:!!o;return!1}function Of(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ja(n,i))return!0}return!1}function qE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const zm=t=>t.__isSuspense;function jE(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Zv(t)}const lt=Symbol.for("v-fgt"),Xa=Symbol.for("v-txt"),wr=Symbol.for("v-cmt"),Zo=Symbol.for("v-stc"),Pi=[];let Kt=null;function he(t=!1){Pi.push(Kt=t?null:[])}function HE(){Pi.pop(),Kt=Pi[Pi.length-1]||null}let qi=1;function xf(t,e=!1){qi+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function Wm(t){return t.dynamicChildren=qi>0?Kt||gs:null,HE(),qi>0&&Kt&&Kt.push(t),t}function ve(t,e,n,r,s,i){return Wm(k(t,e,n,r,s,i,!0))}function Kr(t,e,n,r,s){return Wm(je(t,e,n,r,s,!0))}function ya(t){return t?t.__v_isVNode===!0:!1}function hi(t,e){return t.type===e.type&&t.key===e.key}const Km=({key:t})=>t??null,ea=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||St(t)||ge(t)?{i:Wt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Km(e),ref:e&&ea(e),scopeId:wm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Wt};return c?(wu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=rt(n)?8:16),qi>0&&!o&&Kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Kt.push(l),l}const je=zE;function zE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===pE)&&(t=wr),ya(t)){const c=Cs(t,e,!0);return n&&wu(c,n),qi>0&&!i&&Kt&&(c.shapeFlag&6?Kt[Kt.indexOf(t)]=c:Kt.push(c)),c.patchFlag=-2,c}if(rw(t)&&(t=t.__vccOpts),e){e=WE(e);let{class:c,style:l}=e;c&&!rt(c)&&(e.class=fr(c)),Ke(l)&&(mu(l)&&!le(l)&&(l=Ct({},l)),e.style=so(l))}const o=rt(t)?1:zm(t)?128:eE(t)?64:Ke(t)?4:ge(t)?2:0;return k(t,e,n,r,s,o,i,!0)}function WE(t){return t?mu(t)||xm(t)?Ct({},t):t:null}function Cs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?KE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Km(u),ref:e&&e.ref?n&&i?le(i)?i.concat(ea(e)):[i,ea(e)]:ea(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cs(t.ssContent),ssFallback:t.ssFallback&&Cs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&_u(f,l.clone(f)),f}function ye(t=" ",e=0){return je(Xa,null,t,e)}function T1(t,e){const n=je(Zo,null,t);return n.staticCount=e,n}function Bt(t="",e=!1){return e?(he(),Kr(wr,null,t)):je(wr,null,t)}function gn(t){return t==null||typeof t=="boolean"?je(wr):le(t)?je(lt,null,t.slice()):ya(t)?ir(t):je(Xa,null,String(t))}function ir(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cs(t)}function wu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xm(e)?e._ctx=Wt:s===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Wt},n=32):(e=String(e),r&64?(n=16,e=[ye(e)]):n=8);t.children=e,t.shapeFlag|=n}function KE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=fr([e.class,r.class]));else if(s==="style")e.style=so([e.style,r.style]);else if(Ba(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function fn(t,e,n,r=null){Rn(t,e,7,[n,r])}const GE=Nm();let QE=0;function YE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||GE,i={uid:QE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Iv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lm(r,s),emitsOptions:Hm(r,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:r.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=FE.bind(null,i),t.ce&&t.ce(i),i}let Rt=null;const JE=()=>Rt||Wt;let va,Sl;{const t=Ha(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};va=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),Sl=e("__VUE_SSR_SETTERS__",n=>ji=n)}const ao=t=>{const e=Rt;return va(t),t.scope.on(),()=>{t.scope.off(),va(e)}},Mf=()=>{Rt&&Rt.scope.off(),va(null)};function Gm(t){return t.vnode.shapeFlag&4}let ji=!1;function XE(t,e=!1,n=!1){e&&Sl(e);const{props:r,children:s}=t.vnode,i=Gm(t);AE(t,r,i,e),CE(t,s,n||e);const o=i?ZE(t,e):void 0;return e&&Sl(!1),o}function ZE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gE);const{setup:r}=n;if(r){$n();const s=t.setupContext=r.length>1?tw(t):null,i=ao(t),o=io(r,t,0,[t.props,s]),c=Kp(o);if(qn(),i(),(c||t.sp)&&!Ri(t)&&Sm(t),c){if(o.then(Mf,Mf),e)return o.then(l=>{Lf(t,l)}).catch(l=>{Ga(l,t,0)});t.asyncDep=o}else Lf(t,o)}else Qm(t)}function Lf(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=gm(e)),Qm(t)}function Qm(t,e,n){const r=t.type;t.render||(t.render=r.render||yn);{const s=ao(t);$n();try{_E(t)}finally{qn(),s()}}}const ew={get(t,e){return At(t,"get",""),t[e]}};function tw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ew),slots:t.slots,emit:t.emit,expose:e}}function Za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gm(jv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Si)return Si[n](t)},has(e,n){return n in e||n in Si}})):t.proxy}function nw(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function rw(t){return ge(t)&&"__vccOpts"in t}const Ot=(t,e)=>Gv(t,e,ji);function Ym(t,e,n){const r=arguments.length;return r===2?Ke(e)&&!le(e)?ya(e)?je(t,null,[e]):je(t,e):je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ya(n)&&(n=[n]),je(t,e,n))}const sw="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const Ff=typeof window<"u"&&window.trustedTypes;if(Ff)try{Cl=Ff.createPolicy("vue",{createHTML:t=>t})}catch{}const Jm=Cl?t=>Cl.createHTML(t):t=>t,iw="http://www.w3.org/2000/svg",ow="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,Uf=Dn&&Dn.createElement("template"),aw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Dn.createElementNS(iw,t):e==="mathml"?Dn.createElementNS(ow,t):n?Dn.createElement(t,{is:n}):Dn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Uf.innerHTML=Jm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Uf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cw=Symbol("_vtc");function lw(t,e,n){const r=t[cw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bf=Symbol("_vod"),uw=Symbol("_vsh"),hw=Symbol(""),fw=/(^|;)\s*display\s*:/;function dw(t,e,n){const r=t.style,s=rt(n);let i=!1;if(n&&!s){if(e)if(rt(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ta(r,c,"")}else for(const o in e)n[o]==null&&ta(r,o,"");for(const o in n)o==="display"&&(i=!0),ta(r,o,n[o])}else if(s){if(e!==n){const o=r[hw];o&&(n+=";"+o),r.cssText=n,i=fw.test(n)}}else e&&t.removeAttribute("style");Bf in t&&(t[Bf]=i?r.display:"",t[uw]&&(r.display="none"))}const $f=/\s*!important$/;function ta(t,e,n){if(le(n))n.forEach(r=>ta(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pw(t,e);$f.test(n)?t.setProperty(Pr(r),n.replace($f,""),"important"):t[r]=n}}const qf=["Webkit","Moz","ms"],Qc={};function pw(t,e){const n=Qc[e];if(n)return n;let r=en(e);if(r!=="filter"&&r in t)return Qc[e]=r;r=ja(r);for(let s=0;s<qf.length;s++){const i=qf[s]+r;if(i in t)return Qc[e]=i}return e}const jf="http://www.w3.org/1999/xlink";function Hf(t,e,n,r,s,i=Ev(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(jf,e.slice(6,e.length)):t.setAttributeNS(jf,e,n):n==null||i&&!Yp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":bn(n)?String(n):n)}function zf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function qr(t,e,n,r){t.addEventListener(e,n,r)}function mw(t,e,n,r){t.removeEventListener(e,n,r)}const Wf=Symbol("_vei");function gw(t,e,n,r,s=null){const i=t[Wf]||(t[Wf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=_w(e);if(r){const u=i[e]=Ew(r,s);qr(t,c,u,l)}else o&&(mw(t,c,o,l),i[e]=void 0)}}const Kf=/(?:Once|Passive|Capture)$/;function _w(t){let e;if(Kf.test(t)){e={};let r;for(;r=t.match(Kf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pr(t.slice(2)),e]}let Yc=0;const yw=Promise.resolve(),vw=()=>Yc||(yw.then(()=>Yc=0),Yc=Date.now());function Ew(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Rn(ww(r,n.value),e,5,[r])};return n.value=t,n.attached=vw(),n}function ww(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Tw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?lw(t,r,o):e==="style"?dw(t,n,r):Ba(e)?ou(e)||gw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iw(t,e,r,o))?(zf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(r))?zf(t,en(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hf(t,e,r,o))};function Iw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gf(e)&&rt(n)?!1:e in t}const Ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Yo(e,n):e};function Aw(t){t.target.composing=!0}function Qf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ts=Symbol("_assign"),sn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ts]=Ea(s);const i=r||s.props&&s.props.type==="number";qr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=fa(c)),t[Ts](c)}),n&&qr(t,"change",()=>{t.value=t.value.trim()}),e||(qr(t,"compositionstart",Aw),qr(t,"compositionend",Qf),qr(t,"change",Qf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ts]=Ea(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?fa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},I1={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=$a(e);qr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?fa(wa(o)):wa(o));t[Ts](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Qa(()=>{t._assigning=!1})}),t[Ts]=Ea(r)},mounted(t,{value:e}){Yf(t,e)},beforeUpdate(t,e,n){t[Ts]=Ea(n)},updated(t,{value:e}){t._assigning||Yf(t,e)}};function Yf(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!$a(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=wa(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Tv(e,c)>-1}else o.selected=e.has(c);else if(za(wa(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function wa(t){return"_value"in t?t._value:t.value}const bw=["ctrl","shift","alt","meta"],Rw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bw.some(n=>t[`${n}Key`]&&!e.includes(n))},ec=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Rw[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Sw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Pr(s.key);if(e.some(o=>o===i||Sw[o]===i))return t(s)})},Pw=Ct({patchProp:Tw},aw);let Jf;function kw(){return Jf||(Jf=kE(Pw))}const Vw=(...t)=>{const e=kw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Dw(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Nw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Nw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dw(t){return rt(t)?document.querySelector(t):t}const Ow=()=>{};var Xf={};/**
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
 */const Xm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Mw;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lw=function(t){const e=Xm(t);return Zm.encodeByteArray(e,!0)},Ta=function(t){return Lw(t).replace(/\./g,"")},eg=function(t){try{return Zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uw=()=>Fw().__FIREBASE_DEFAULTS__,Bw=()=>{if(typeof process>"u"||typeof Xf>"u")return;const t=Xf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$w=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eg(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return Ow()||Uw()||Bw()||$w()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tg=t=>tc()?.emulatorHosts?.[t],qw=t=>{const e=tg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ng=()=>tc()?.config,rg=t=>tc()?.[`_${t}`];/**
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
 */class jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Bs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Hw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),""].join(".")}const ki={};function zw(){const t={prod:[],emulator:[]};for(const e of Object.keys(ki))ki[e]?t.emulator.push(e):t.prod.push(e);return t}function Ww(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Zf=!1;function ig(t,e){if(typeof window>"u"||typeof document>"u"||!Bs(window.location.host)||ki[t]===e||ki[t]||Zf)return;ki[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=zw().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Zf=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Ww(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),V=n("learnmore"),D=document.getElementById(V)||document.createElement("a"),j=n("preprendIcon"),q=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const x=m.element;c(x),f(D,V);const O=u();l(q,j),x.append(q,R,D,O),document.body.appendChild(x)}i?(R.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function Gw(){const t=tc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xw(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zw(){return!Gw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eT(){try{return typeof indexedDB=="object"}catch{return!1}}function tT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const nT="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nT,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Qn(s,c,r)}}function rT(t,e){return t.replace(sT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sT=/\{\$([^}]+)}/g;function iT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ed(i)&&ed(o)){if(!Tr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ed(t){return t!==null&&typeof t=="object"}/**
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
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oT(t,e){const n=new aT(t,e);return n.subscribe.bind(n)}class aT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jc),s.error===void 0&&(s.error=Jc),s.complete===void 0&&(s.complete=Jc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jc(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class Yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $r="[DEFAULT]";/**
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
 */class lT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hT(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uT(t){return t===$r?void 0:t}function hT(t){return t.instantiationMode==="EAGER"}/**
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
 */class fT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const dT={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},pT=Ie.INFO,mT={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},gT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tu{constructor(e){this.name=e,this._logLevel=pT,this._logHandler=gT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const _T=(t,e)=>e.some(n=>t instanceof n);let td,nd;function yT(){return td||(td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vT(){return nd||(nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const og=new WeakMap,Pl=new WeakMap,ag=new WeakMap,Xc=new WeakMap,Iu=new WeakMap;function ET(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&og.set(n,t)}).catch(()=>{}),Iu.set(e,t),e}function wT(t){if(Pl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pl.set(t,e)}let kl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ag.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TT(t){kl=t(kl)}function IT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zc(this),e,...n);return ag.set(r,e.sort?e.sort():[e]),dr(r)}:vT().includes(t)?function(...e){return t.apply(Zc(this),e),dr(og.get(this))}:function(...e){return dr(t.apply(Zc(this),e))}}function AT(t){return typeof t=="function"?IT(t):(t instanceof IDBTransaction&&wT(t),_T(t,yT())?new Proxy(t,kl):t)}function dr(t){if(t instanceof IDBRequest)return ET(t);if(Xc.has(t))return Xc.get(t);const e=AT(t);return e!==t&&(Xc.set(t,e),Iu.set(e,t)),e}const Zc=t=>Iu.get(t);function bT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const RT=["get","getKey","getAll","getAllKeys","count"],ST=["put","add","delete","clear"],el=new Map;function rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(el.get(e))return el.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ST.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return el.set(e,i),i}TT(t=>({...t,get:(e,n,r)=>rd(e,n)||t.get(e,n,r),has:(e,n)=>!!rd(e,n)||t.has(e,n)}));/**
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
 */class CT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PT(t){return t.getComponent()?.type==="VERSION"}const Vl="@firebase/app",sd="0.14.0";/**
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
 */const jn=new Tu("@firebase/app"),kT="@firebase/app-compat",VT="@firebase/analytics-compat",NT="@firebase/analytics",DT="@firebase/app-check-compat",OT="@firebase/app-check",xT="@firebase/auth",MT="@firebase/auth-compat",LT="@firebase/database",FT="@firebase/data-connect",UT="@firebase/database-compat",BT="@firebase/functions",$T="@firebase/functions-compat",qT="@firebase/installations",jT="@firebase/installations-compat",HT="@firebase/messaging",zT="@firebase/messaging-compat",WT="@firebase/performance",KT="@firebase/performance-compat",GT="@firebase/remote-config",QT="@firebase/remote-config-compat",YT="@firebase/storage",JT="@firebase/storage-compat",XT="@firebase/firestore",ZT="@firebase/ai",eI="@firebase/firestore-compat",tI="firebase",nI="12.0.0";/**
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
 */const Nl="[DEFAULT]",rI={[Vl]:"fire-core",[kT]:"fire-core-compat",[NT]:"fire-analytics",[VT]:"fire-analytics-compat",[OT]:"fire-app-check",[DT]:"fire-app-check-compat",[xT]:"fire-auth",[MT]:"fire-auth-compat",[LT]:"fire-rtdb",[FT]:"fire-data-connect",[UT]:"fire-rtdb-compat",[BT]:"fire-fn",[$T]:"fire-fn-compat",[qT]:"fire-iid",[jT]:"fire-iid-compat",[HT]:"fire-fcm",[zT]:"fire-fcm-compat",[WT]:"fire-perf",[KT]:"fire-perf-compat",[GT]:"fire-rc",[QT]:"fire-rc-compat",[YT]:"fire-gcs",[JT]:"fire-gcs-compat",[XT]:"fire-fst",[eI]:"fire-fst-compat",[ZT]:"fire-vertex","fire-js":"fire-js",[tI]:"fire-js-all"};/**
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
 */const Ia=new Map,sI=new Map,Dl=new Map;function id(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(Dl.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;Dl.set(e,t);for(const n of Ia.values())id(n,t);for(const n of sI.values())id(n,t);return!0}function Au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
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
 */const iI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new co("app","Firebase",iI);/**
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
 */class oI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=nI;function cg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Nl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=ng()),!n)throw pr.create("no-options");const i=Ia.get(s);if(i){if(Tr(n,i.options)&&Tr(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new fT(s);for(const l of Dl.values())o.addComponent(l);const c=new oI(n,r,o);return Ia.set(s,c),c}function lg(t=Nl){const e=Ia.get(t);if(!e&&t===Nl&&ng())return cg();if(!e)throw pr.create("no-app",{appName:t});return e}function mr(t,e,n){let r=rI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(o.join(" "));return}Ps(new Yr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const aI="firebase-heartbeat-database",cI=1,Hi="firebase-heartbeat-store";let tl=null;function ug(){return tl||(tl=bT(aI,cI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),tl}async function lI(t){try{const n=(await ug()).transaction(Hi),r=await n.objectStore(Hi).get(hg(t));return await n.done,r}catch(e){if(e instanceof Qn)jn.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e?.message});jn.warn(n.message)}}}async function od(t,e){try{const r=(await ug()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,hg(t)),await r.done}catch(n){if(n instanceof Qn)jn.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n?.message});jn.warn(r.message)}}}function hg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uI=1024,hI=30;class fI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ad();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>hI){const s=mI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){jn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ad(),{heartbeatsToSend:n,unsentEntries:r}=dI(this._heartbeatsCache.heartbeats),s=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return jn.warn(e),""}}}function ad(){return new Date().toISOString().substring(0,10)}function dI(t,e=uI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eT()?tT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return od(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return od(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cd(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}function mI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function gI(t){Ps(new Yr("platform-logger",e=>new CT(e),"PRIVATE")),Ps(new Yr("heartbeat",e=>new fI(e),"PRIVATE")),mr(Vl,sd,t),mr(Vl,sd,"esm2020"),mr("fire-js","")}gI("");var ld=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gr,fg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.D=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,b,C){for(var v=Array(arguments.length-2),me=2;me<arguments.length;me++)v[me-2]=arguments[me];return y.prototype[b].apply(A,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,w){w||(w=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],b=I.g[2];var C=I.g[3],v=y+(C^w&(b^C))+A[0]+3614090360&4294967295;y=w+(v<<7&4294967295|v>>>25),v=C+(b^y&(w^b))+A[1]+3905402710&4294967295,C=y+(v<<12&4294967295|v>>>20),v=b+(w^C&(y^w))+A[2]+606105819&4294967295,b=C+(v<<17&4294967295|v>>>15),v=w+(y^b&(C^y))+A[3]+3250441966&4294967295,w=b+(v<<22&4294967295|v>>>10),v=y+(C^w&(b^C))+A[4]+4118548399&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(b^y&(w^b))+A[5]+1200080426&4294967295,C=y+(v<<12&4294967295|v>>>20),v=b+(w^C&(y^w))+A[6]+2821735955&4294967295,b=C+(v<<17&4294967295|v>>>15),v=w+(y^b&(C^y))+A[7]+4249261313&4294967295,w=b+(v<<22&4294967295|v>>>10),v=y+(C^w&(b^C))+A[8]+1770035416&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(b^y&(w^b))+A[9]+2336552879&4294967295,C=y+(v<<12&4294967295|v>>>20),v=b+(w^C&(y^w))+A[10]+4294925233&4294967295,b=C+(v<<17&4294967295|v>>>15),v=w+(y^b&(C^y))+A[11]+2304563134&4294967295,w=b+(v<<22&4294967295|v>>>10),v=y+(C^w&(b^C))+A[12]+1804603682&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(b^y&(w^b))+A[13]+4254626195&4294967295,C=y+(v<<12&4294967295|v>>>20),v=b+(w^C&(y^w))+A[14]+2792965006&4294967295,b=C+(v<<17&4294967295|v>>>15),v=w+(y^b&(C^y))+A[15]+1236535329&4294967295,w=b+(v<<22&4294967295|v>>>10),v=y+(b^C&(w^b))+A[1]+4129170786&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^b&(y^w))+A[6]+3225465664&4294967295,C=y+(v<<9&4294967295|v>>>23),v=b+(y^w&(C^y))+A[11]+643717713&4294967295,b=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(b^C))+A[0]+3921069994&4294967295,w=b+(v<<20&4294967295|v>>>12),v=y+(b^C&(w^b))+A[5]+3593408605&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^b&(y^w))+A[10]+38016083&4294967295,C=y+(v<<9&4294967295|v>>>23),v=b+(y^w&(C^y))+A[15]+3634488961&4294967295,b=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(b^C))+A[4]+3889429448&4294967295,w=b+(v<<20&4294967295|v>>>12),v=y+(b^C&(w^b))+A[9]+568446438&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^b&(y^w))+A[14]+3275163606&4294967295,C=y+(v<<9&4294967295|v>>>23),v=b+(y^w&(C^y))+A[3]+4107603335&4294967295,b=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(b^C))+A[8]+1163531501&4294967295,w=b+(v<<20&4294967295|v>>>12),v=y+(b^C&(w^b))+A[13]+2850285829&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^b&(y^w))+A[2]+4243563512&4294967295,C=y+(v<<9&4294967295|v>>>23),v=b+(y^w&(C^y))+A[7]+1735328473&4294967295,b=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(b^C))+A[12]+2368359562&4294967295,w=b+(v<<20&4294967295|v>>>12),v=y+(w^b^C)+A[5]+4294588738&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^b)+A[8]+2272392833&4294967295,C=y+(v<<11&4294967295|v>>>21),v=b+(C^y^w)+A[11]+1839030562&4294967295,b=C+(v<<16&4294967295|v>>>16),v=w+(b^C^y)+A[14]+4259657740&4294967295,w=b+(v<<23&4294967295|v>>>9),v=y+(w^b^C)+A[1]+2763975236&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^b)+A[4]+1272893353&4294967295,C=y+(v<<11&4294967295|v>>>21),v=b+(C^y^w)+A[7]+4139469664&4294967295,b=C+(v<<16&4294967295|v>>>16),v=w+(b^C^y)+A[10]+3200236656&4294967295,w=b+(v<<23&4294967295|v>>>9),v=y+(w^b^C)+A[13]+681279174&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^b)+A[0]+3936430074&4294967295,C=y+(v<<11&4294967295|v>>>21),v=b+(C^y^w)+A[3]+3572445317&4294967295,b=C+(v<<16&4294967295|v>>>16),v=w+(b^C^y)+A[6]+76029189&4294967295,w=b+(v<<23&4294967295|v>>>9),v=y+(w^b^C)+A[9]+3654602809&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^b)+A[12]+3873151461&4294967295,C=y+(v<<11&4294967295|v>>>21),v=b+(C^y^w)+A[15]+530742520&4294967295,b=C+(v<<16&4294967295|v>>>16),v=w+(b^C^y)+A[2]+3299628645&4294967295,w=b+(v<<23&4294967295|v>>>9),v=y+(b^(w|~C))+A[0]+4096336452&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~b))+A[7]+1126891415&4294967295,C=y+(v<<10&4294967295|v>>>22),v=b+(y^(C|~w))+A[14]+2878612391&4294967295,b=C+(v<<15&4294967295|v>>>17),v=w+(C^(b|~y))+A[5]+4237533241&4294967295,w=b+(v<<21&4294967295|v>>>11),v=y+(b^(w|~C))+A[12]+1700485571&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~b))+A[3]+2399980690&4294967295,C=y+(v<<10&4294967295|v>>>22),v=b+(y^(C|~w))+A[10]+4293915773&4294967295,b=C+(v<<15&4294967295|v>>>17),v=w+(C^(b|~y))+A[1]+2240044497&4294967295,w=b+(v<<21&4294967295|v>>>11),v=y+(b^(w|~C))+A[8]+1873313359&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~b))+A[15]+4264355552&4294967295,C=y+(v<<10&4294967295|v>>>22),v=b+(y^(C|~w))+A[6]+2734768916&4294967295,b=C+(v<<15&4294967295|v>>>17),v=w+(C^(b|~y))+A[13]+1309151649&4294967295,w=b+(v<<21&4294967295|v>>>11),v=y+(b^(w|~C))+A[4]+4149444226&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~b))+A[11]+3174756917&4294967295,C=y+(v<<10&4294967295|v>>>22),v=b+(y^(C|~w))+A[2]+718787259&4294967295,b=C+(v<<15&4294967295|v>>>17),v=w+(C^(b|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var w=y-this.blockSize,A=this.B,b=this.h,C=0;C<y;){if(b==0)for(;C<=w;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<y;)if(A[b++]=I.charCodeAt(C++),b==this.blockSize){s(this,A),b=0;break}}else for(;C<y;)if(A[b++]=I[C++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var w=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=w&255,w/=256;for(this.u(I),I=Array(16),y=w=0;4>y;++y)for(var A=0;32>A;A+=8)I[w++]=this.g[y]>>>A&255;return I};function i(I,y){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;for(var w=[],A=!0,b=I.length-1;0<=b;b--){var C=I[b]|0;A&&C==y||(w[b]=C,A=!1)}this.g=w}var c={};function l(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return D(u(-I));for(var y=[],w=1,A=0;I>=w;A++)y[A]=I/w|0,w*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return D(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),A=p,b=0;b<I.length;b+=8){var C=Math.min(8,I.length-b),v=parseInt(I.substring(b,b+C),y);8>C?(C=u(Math.pow(y,C)),A=A.j(C).add(u(v))):(A=A.j(w),A=A.add(u(v)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-D(this).m();for(var I=0,y=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(V(this))return"-"+D(this).toString(I);for(var y=u(Math.pow(I,6)),w=this,A="";;){var b=O(w,y).g;w=j(w,b.j(y));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=b,R(w))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function V(I){return I.h==-1}t.l=function(I){return I=j(this,I),V(I)?-1:R(I)?0:1};function D(I){for(var y=I.g.length,w=[],A=0;A<y;A++)w[A]=~I.g[A];return new o(w,~I.h).add(m)}t.abs=function(){return V(this)?D(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0,b=0;b<=y;b++){var C=A+(this.i(b)&65535)+(I.i(b)&65535),v=(C>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=v>>>16,C&=65535,v&=65535,w[b]=v<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function j(I,y){return I.add(D(y))}t.j=function(I){if(R(this)||R(I))return p;if(V(this))return V(I)?D(this).j(D(I)):D(D(this).j(I));if(V(I))return D(this.j(D(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,w=[],A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var C=this.i(A)>>>16,v=this.i(A)&65535,me=I.i(b)>>>16,Pe=I.i(b)&65535;w[2*A+2*b]+=v*Pe,q(w,2*A+2*b),w[2*A+2*b+1]+=C*Pe,q(w,2*A+2*b+1),w[2*A+2*b+1]+=v*me,q(w,2*A+2*b+1),w[2*A+2*b+2]+=C*me,q(w,2*A+2*b+2)}for(A=0;A<y;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=y;A<2*y;A++)w[A]=0;return new o(w,0)};function q(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function x(I,y){this.g=I,this.h=y}function O(I,y){if(R(y))throw Error("division by zero");if(R(I))return new x(p,p);if(V(I))return y=O(D(I),y),new x(D(y.g),D(y.h));if(V(y))return y=O(I,D(y)),new x(D(y.g),y.h);if(30<I.g.length){if(V(I)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,A=y;0>=A.l(I);)w=G(w),A=G(A);var b=re(w,1),C=re(A,1);for(A=re(A,2),w=re(w,2);!R(A);){var v=C.add(A);0>=v.l(I)&&(b=b.add(w),C=v),A=re(A,1),w=re(w,1)}return y=j(I,b.j(y)),new x(b,y)}for(b=p;0<=I.l(y);){for(w=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=u(w),v=C.j(y);V(v)||0<v.l(I);)w-=A,C=u(w),v=C.j(y);R(C)&&(C=m),b=b.add(C),I=j(I,v)}return new x(b,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)&I.i(A);return new o(w,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)|I.i(A);return new o(w,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)^I.i(A);return new o(w,this.h^I.h)};function G(I){for(var y=I.g.length+1,w=[],A=0;A<y;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(w,I.h)}function re(I,y){var w=y>>5;y%=32;for(var A=I.g.length-w,b=[],C=0;C<A;C++)b[C]=0<y?I.i(C+w)>>>y|I.i(C+w+1)<<32-y:I.i(C+w);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,gr=o}).apply(typeof ld<"u"?ld:typeof self<"u"?self:typeof window<"u"?window:{});var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dg,gi,pg,na,Ol,mg,gg,_g;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ho=="object"&&Ho];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,N){for(var K=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)K[Be-2]=arguments[Be];return h.prototype[P].apply(g,K)}}function V(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function D(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const P=a.length||0,N=g.length||0;a.length=P+N;for(let K=0;K<N;K++)a[P+K]=g[K]}else a.push(g)}}class j{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function q(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var G=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function re(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let N=0;N<w.length;N++)d=w[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function C(a){c.setTimeout(()=>{throw a},0)}function v(){var a=Ge;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class me{constructor(){this.h=this.g=null}add(h,d){const g=Pe.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Pe=new j(()=>new Re,a=>a.reset());class Re{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,fe=!1,Ge=new me,Fe=()=>{const a=c.Promise.resolve(void 0);Ee=()=>{a.then(Ue)}};var Ue=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){C(d)}var h=Pe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}fe=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var jt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function xt(a,h){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(G){e:{try{O(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:yt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&xt.aa.h.call(this)}}R(xt,Le);var yt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++Z,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ke(a){this.src=a,this.g={},this.h=0}ke.prototype.add=function(a,h,d,g,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var K=T(a,h,g,P);return-1<K?(h=a[K],d||(h.fa=!1)):(h=new X(h,this.src,N,!!g,P),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=P)&&Array.prototype.splice.call(g,P,1),N&&(te(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,h,d,g){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),F={};function $(a,h,d,g,P){if(Array.isArray(h)){for(var N=0;N<h.length;N++)$(a,h[N],d,g,P);return null}return d=ue(d),a&&a[L]?a.K(h,d,u(g)?!!g.capture:!1,P):U(a,h,d,!1,g,P)}function U(a,h,d,g,P,N){if(!h)throw Error("Invalid event type");var K=u(P)?!!P.capture:!!P,Be=Q(a);if(Be||(a[S]=Be=new ke(a)),d=Be.add(h,d,g,K,N),d.proxy)return d;if(g=Y(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)jt||(P=K),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(H(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Y(){function a(d){return h.call(a.src,a.listener,d)}const h=se;return a}function W(a,h,d,g,P){if(Array.isArray(h))for(var N=0;N<h.length;N++)W(a,h[N],d,g,P);else g=u(g)?!!g.capture:!!g,d=ue(d),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=T(N,d,g,P),-1<d&&(te(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,d,g,P)),(d=-1<a?h[a]:null)&&z(d))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(H(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Q(h))?(E(d,a),d.h==0&&(d.src=null,h[S]=null)):te(a)}}}function H(a){return a in F?F[a]:F[a]="on"+a}function se(a,h){if(a.da)a=!0;else{h=new xt(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&z(a),a=d.call(g,h)}return a}function Q(a){return a=a[S],a instanceof ke?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function oe(){Me.call(this),this.i=new ke(this),this.M=this,this.F=null}R(oe,Me),oe.prototype[L]=!0,oe.prototype.removeEventListener=function(a,h,d,g){W(this,a,h,d,g)};function _e(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Le(h,a);else if(h instanceof Le)h.target=h.target||a;else{var P=h;h=new Le(g,a),A(h,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var K=h.g=d[N];P=Se(K,g,!0,h)&&P}if(K=h.g=a,P=Se(K,g,!0,h)&&P,P=Se(K,g,!1,h)&&P,d)for(N=0;N<d.length;N++)K=h.g=d[N],P=Se(K,g,!1,h)&&P}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)te(d[g]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},oe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Se(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,N=0;N<h.length;++N){var K=h[N];if(K&&!K.da&&K.capture==d){var Be=K.listener,dt=K.ha||K.src;K.fa&&E(a.i,K),P=Be.call(dt,g)!==!1&&P}}return P&&!g.defaultPrevented}function ut(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function ht(a){a.g=ut(()=>{a.g=null,a.i&&(a.i=!1,ht(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Qt extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ht(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(a){Me.call(this),this.h=a,this.g={}}R(vt,Me);var Xn=[];function Js(a){re(a.g,function(h,d){this.g.hasOwnProperty(d)&&z(h)},a),a.g={}}vt.prototype.N=function(){vt.aa.N.call(this),Js(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ft=c.JSON.stringify,Yt=c.JSON.parse,Ao=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function rs(){}rs.prototype.h=null;function Rh(a){return a.h||(a.h=a.i())}function Sh(){}var Xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cc(){Le.call(this,"d")}R(Cc,Le);function Pc(){Le.call(this,"c")}R(Pc,Le);var Or={},Ch=null;function bo(){return Ch=Ch||new oe}Or.La="serverreachability";function Ph(a){Le.call(this,Or.La,a)}R(Ph,Le);function Zs(a){const h=bo();_e(h,new Ph(h))}Or.STAT_EVENT="statevent";function kh(a,h){Le.call(this,Or.STAT_EVENT,a),this.stat=h}R(kh,Le);function kt(a){const h=bo();_e(h,new kh(h,a))}Or.Ma="timingevent";function Vh(a,h){Le.call(this,Or.Ma,a),this.size=h}R(Vh,Le);function ei(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function ti(){this.g=!0}ti.prototype.xa=function(){this.g=!1};function $y(a,h,d,g,P,N){a.info(function(){if(a.g)if(N)for(var K="",Be=N.split("&"),dt=0;dt<Be.length;dt++){var Ve=Be[dt].split("=");if(1<Ve.length){var Et=Ve[0];Ve=Ve[1];var wt=Et.split("_");K=2<=wt.length&&wt[1]=="type"?K+(Et+"="+Ve+"&"):K+(Et+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+K})}function qy(a,h,d,g,P,N,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+N+" "+K})}function ss(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Hy(a,d)+(g?" "+g:"")})}function jy(a,h){a.info(function(){return"TIMEOUT: "+h})}ti.prototype.info=function(){};function Hy(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return ft(d)}catch{return h}}var Ro={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kc;function So(){}R(So,rs),So.prototype.g=function(){return new XMLHttpRequest},So.prototype.i=function(){return{}},kc=new So;function Zn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dh}function Dh(){this.i=null,this.g="",this.h=!1}var Oh={},Vc={};function Nc(a,h,d){a.L=1,a.v=Vo(Pn(h)),a.m=d,a.P=!0,xh(a,null)}function xh(a,h){a.F=Date.now(),Co(a),a.A=Pn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Qh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Dh,a.g=pf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Qt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Xn[0]=P.toString()),P=Xn);for(var N=0;N<P.length;N++){var K=$(d,P[N],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Zs(),$y(a.i,a.u,a.A,a.l,a.R,a.m)}Zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&kn(a)==3?h.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const wt=kn(this.g);var h=this.g.Ba();const as=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||nf(this.g)))){this.J||wt!=4||h==7||(h==8||0>=as?Zs(3):Zs(2)),Dc(this);var d=this.g.Z();this.X=d;t:if(Mh(this)){var g=nf(this.g);a="";var P=g.length,N=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xr(this),ni(this);var K="";break t}this.h.i=new c.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,qy(this.i,this.u,this.A,this.l,this.R,wt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,dt=this.g;if((Be=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Be)){var Ve=Be;break t}}Ve=null}if(d=Ve)ss(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oc(this,d);else{this.o=!1,this.s=3,kt(12),xr(this),ni(this);break e}}if(this.P){d=!0;let nn;for(;!this.J&&this.C<K.length;)if(nn=zy(this,K),nn==Vc){wt==4&&(this.s=4,kt(14),d=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Oh){this.s=4,kt(15),ss(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else ss(this.i,this.l,nn,null),Oc(this,nn);if(Mh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||K.length!=0||this.h.h||(this.s=1,kt(16),d=!1),this.o=this.o&&d,!d)ss(this.i,this.l,K,"[Invalid Chunked Response]"),xr(this),ni(this);else if(0<K.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Bc(Et),Et.M=!0,kt(11))}}else ss(this.i,this.l,K,null),Oc(this,K);wt==4&&xr(this),this.o&&!this.J&&(wt==4?uf(this.j,this):(this.o=!1,Co(this)))}else cv(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),xr(this),ni(this)}}}catch{}finally{}};function Mh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function zy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Vc:(d=Number(h.substring(d,g)),isNaN(d)?Oh:(g+=1,g+d>h.length?Vc:(h=h.slice(g,g+d),a.C=g+d,h)))}Zn.prototype.cancel=function(){this.J=!0,xr(this)};function Co(a){a.S=Date.now()+a.I,Lh(a,a.I)}function Lh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ei(m(a.ba,a),h)}function Dc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jy(this.i,this.A),this.L!=2&&(Zs(),kt(17)),xr(this),this.s=2,ni(this)):Lh(this,this.S-a)};function ni(a){a.j.G==0||a.J||uf(a.j,a)}function xr(a){Dc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Js(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Oc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||xc(d.h,a))){if(!a.K&&xc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Lo(d),xo(d);else break e;Uc(d),kt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ei(m(d.Za,d),6e3));if(1>=Bh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Lr(d,11)}else if((a.K||d.g==a)&&Lo(d),!q(h))for(P=d.Da.g.parse(h),h=0;h<P.length;h++){let Ve=P[h];if(d.T=Ve[0],Ve=Ve[1],d.G==2)if(Ve[0]=="c"){d.K=Ve[1],d.ia=Ve[2];const Et=Ve[3];Et!=null&&(d.la=Et,d.j.info("VER="+d.la));const wt=Ve[4];wt!=null&&(d.Aa=wt,d.j.info("SVER="+d.Aa));const as=Ve[5];as!=null&&typeof as=="number"&&0<as&&(g=1.5*as,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const nn=a.g;if(nn){const Uo=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Uo){var N=g.h;N.g||Uo.indexOf("spdy")==-1&&Uo.indexOf("quic")==-1&&Uo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Mc(N,N.h),N.h=null))}if(g.D){const $c=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;$c&&(g.ya=$c,Qe(g.I,g.D,$c))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var K=a;if(g.qa=df(g,g.J?g.ia:null,g.W),K.K){$h(g.h,K);var Be=K,dt=g.L;dt&&(Be.I=dt),Be.B&&(Dc(Be),Co(Be)),g.g=K}else cf(g);0<d.i.length&&Mo(d)}else Ve[0]!="stop"&&Ve[0]!="close"||Lr(d,7);else d.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Lr(d,7):Fc(d):Ve[0]!="noop"&&d.l&&d.l.ta(Ve),d.v=0)}}Zs(4)}catch{}}var Wy=class{constructor(a,h){this.g=a,this.map=h}};function Fh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bh(a){return a.h?1:a.g?a.g.size:0}function xc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Mc(a,h){a.g?a.g.add(h):a.h=h}function $h(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Fh.prototype.cancel=function(){if(this.i=qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return V(a.i)}function Ky(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function Gy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function jh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Gy(a),g=Ky(a),P=g.length,N=0;N<P;N++)h.call(void 0,g[N],d&&d[N],a)}var Hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qy(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var N=a[d].substring(0,g);P=a[d].substring(g+1)}else N=a[d];h(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mr){this.h=a.h,Po(this,a.j),this.o=a.o,this.g=a.g,ko(this,a.s),this.l=a.l;var h=a.i,d=new ii;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),zh(this,d),this.m=a.m}else a&&(h=String(a).match(Hh))?(this.h=!1,Po(this,h[1]||"",!0),this.o=ri(h[2]||""),this.g=ri(h[3]||"",!0),ko(this,h[4]),this.l=ri(h[5]||"",!0),zh(this,h[6]||"",!0),this.m=ri(h[7]||"")):(this.h=!1,this.i=new ii(null,this.h))}Mr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(si(h,Wh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(si(h,Wh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(si(d,d.charAt(0)=="/"?Xy:Jy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",si(d,ev)),a.join("")};function Pn(a){return new Mr(a)}function Po(a,h,d){a.j=d?ri(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ko(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function zh(a,h,d){h instanceof ii?(a.i=h,tv(a.i,a.h)):(d||(h=si(h,Zy)),a.i=new ii(h,a.h))}function Qe(a,h,d){a.i.set(h,d)}function Vo(a){return Qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ri(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function si(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Yy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Yy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wh=/[#\/\?@]/g,Jy=/[#\?:]/g,Xy=/[#\?]/g,Zy=/[#\?@]/g,ev=/#/g;function ii(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function er(a){a.g||(a.g=new Map,a.h=0,a.i&&Qy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ii.prototype,t.add=function(a,h){er(this),this.i=null,a=is(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Kh(a,h){er(a),h=is(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Gh(a,h){return er(a),h=is(a,h),a.g.has(h)}t.forEach=function(a,h){er(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)},t.na=function(){er(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const P=a[g];for(let N=0;N<P.length;N++)d.push(h[g])}return d},t.V=function(a){er(this);let h=[];if(typeof a=="string")Gh(this,a)&&(h=h.concat(this.g.get(is(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return er(this),this.i=null,a=is(this,a),Gh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Qh(a,h,d){Kh(a,h),0<d.length&&(a.i=null,a.g.set(is(a,h),V(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const N=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var P=N;K[g]!==""&&(P+="="+encodeURIComponent(String(K[g]))),a.push(P)}}return this.i=a.join("&")};function is(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function tv(a,h){h&&!a.j&&(er(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Kh(this,g),Qh(this,P,d))},a)),a.j=h}function nv(a,h){const d=new ti;if(c.Image){const g=new Image;g.onload=_(tr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(tr,d,"TestLoadImage: error",!1,h,g),g.onabort=_(tr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(tr,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function rv(a,h){const d=new ti,g=new AbortController,P=setTimeout(()=>{g.abort(),tr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(P),N.ok?tr(d,"TestPingServer: ok",!0,h):tr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),tr(d,"TestPingServer: error",!1,h)})}function tr(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function sv(){this.g=new Ao}function iv(a,h,d){const g=d||"";try{jh(a,function(P,N){let K=P;u(P)&&(K=ft(P)),h.push(g+N+"="+encodeURIComponent(K))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function No(a){this.l=a.Ub||null,this.j=a.eb||!1}R(No,rs),No.prototype.g=function(){return new Do(this.l,this.j)},No.prototype.i=function(a){return function(){return a}}({});function Do(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Do,oe),t=Do.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ai(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?oi(this):ai(this),this.readyState==3&&Yh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,oi(this))},t.Qa=function(a){this.g&&(this.response=a,oi(this))},t.ga=function(){this.g&&oi(this)};function oi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ai(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Do.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jh(a){let h="";return re(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Lc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Jh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Qe(a,h,d))}function Xe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Xe,oe);var ov=/^https?$/i,av=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kc.g(),this.v=this.o?Rh(this.o):Rh(kc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Xh(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(av,h,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of d)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Xh(this,N)}};function Xh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Zh(a),Oo(a)}function Zh(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),Oo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oo(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ef(this):this.bb())},t.bb=function(){ef(this)};function ef(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)ut(a.Ea,0,a);else if(_e(a,"readystatechange"),kn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=K===0){var P=String(a.D).match(Hh)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!ov.test(P?P.toLowerCase():"")}d=g}if(d)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var N=2<kn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Zh(a)}}finally{Oo(a)}}}}function Oo(a,h){if(a.g){tf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{d.onreadystatechange=g}catch{}}}function tf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Yt(h)}};function nf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cv(a){const h={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(q(a[g]))continue;var d=b(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[P]||[];h[P]=N,N.push(d)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ci(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function rf(a){this.Aa=0,this.i=[],this.j=new ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ci("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ci("baseRetryDelayMs",5e3,a),this.cb=ci("retryDelaySeedMs",1e4,a),this.Wa=ci("forwardChannelMaxRetries",2,a),this.wa=ci("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Fh(a&&a.concurrentRequestLimit),this.Da=new sv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){kt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=df(this,null,this.W),Mo(this)};function Fc(a){if(sf(a),a.G==3){var h=a.U++,d=Pn(a.I);if(Qe(d,"SID",a.K),Qe(d,"RID",h),Qe(d,"TYPE","terminate"),li(a,d),h=new Zn(a,a.j,h),h.L=2,h.v=Vo(Pn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=pf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Co(h)}ff(a)}function xo(a){a.g&&(Bc(a),a.g.cancel(),a.g=null)}function sf(a){xo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Lo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Mo(a){if(!Uh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ee||Fe(),fe||(Ee(),fe=!0),Ge.add(h,a),a.B=0}}function lv(a,h){return Bh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ei(m(a.Ga,a,h),hf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Zn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=af(this,P,h),d=Pn(this.I),Qe(d,"RID",a),Qe(d,"CVER",22),this.D&&Qe(d,"X-HTTP-Session-Id",this.D),li(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(Jh(N)))+"&"+h:this.m&&Lc(d,this.m,N)),Mc(this.h,P),this.Ua&&Qe(d,"TYPE","init"),this.P?(Qe(d,"$req",h),Qe(d,"SID","null"),P.T=!0,Nc(P,d,null)):Nc(P,d,h),this.G=2}}else this.G==3&&(a?of(this,a):this.i.length==0||Uh(this.h)||of(this))};function of(a,h){var d;h?d=h.l:d=a.U++;const g=Pn(a.I);Qe(g,"SID",a.K),Qe(g,"RID",d),Qe(g,"AID",a.T),li(a,g),a.m&&a.o&&Lc(g,a.m,a.o),d=new Zn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=af(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mc(a.h,d),Nc(d,g,h)}function li(a,h){a.H&&re(a.H,function(d,g){Qe(h,g,d)}),a.l&&jh({},function(d,g){Qe(h,g,d)})}function af(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const K=["count="+d];N==-1?0<d?(N=P[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Be=!0;for(let dt=0;dt<d;dt++){let Ve=P[dt].g;const Et=P[dt].map;if(Ve-=N,0>Ve)N=Math.max(0,P[dt].g-100),Be=!1;else try{iv(Et,K,"req"+Ve+"_")}catch{g&&g(Et)}}if(Be){g=K.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function cf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ee||Fe(),fe||(Ee(),fe=!0),Ge.add(h,a),a.v=0}}function Uc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ei(m(a.Fa,a),hf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,lf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ei(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),xo(this),lf(this))};function Bc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function lf(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Pn(a.qa);Qe(h,"RID","rpc"),Qe(h,"SID",a.K),Qe(h,"AID",a.T),Qe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Qe(h,"TO",a.ja),Qe(h,"TYPE","xmlhttp"),li(a,h),a.m&&a.o&&Lc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Vo(Pn(h)),d.m=null,d.P=!0,xh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,xo(this),Uc(this),kt(19))};function Lo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function uf(a,h){var d=null;if(a.g==h){Lo(a),Bc(a),a.g=null;var g=2}else if(xc(a.h,h))d=h.D,$h(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=bo(),_e(g,new Vh(g,d)),Mo(a)}else cf(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&lv(a,h)||g==2&&Uc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function hf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Lr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new Mr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Po(g,"https"),Vo(g),P?nv(g.toString(),d):rv(g.toString(),d)}else kt(2);a.G=0,a.l&&a.l.sa(h),ff(a),sf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function ff(a){if(a.G=0,a.ka=[],a.l){const h=qh(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function df(a,h,d){var g=d instanceof Mr?Pn(d):new Mr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ko(g,g.s);else{var P=c.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var N=new Mr(null);g&&Po(N,g),h&&(N.g=h),P&&ko(N,P),d&&(N.l=d),g=N}return d=a.D,h=a.ya,d&&h&&Qe(g,d,h),Qe(g,"VER",a.la),li(a,g),g}function pf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Xe(new No({eb:d})):new Xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mf(){}t=mf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fo(){}Fo.prototype.g=function(a,h){return new Ht(a,h)};function Ht(a,h){oe.call(this),this.g=new rf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!q(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!q(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new os(this)}R(Ht,oe),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Fc(this.g)},Ht.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ft(a),a=d);h.i.push(new Wy(h.Ya++,a)),h.G==3&&Mo(h)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Fc(this.g),delete this.g,Ht.aa.N.call(this)};function gf(a){Cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(gf,Cc);function _f(){Pc.call(this),this.status=1}R(_f,Pc);function os(a){this.g=a}R(os,mf),os.prototype.ua=function(){_e(this.g,"a")},os.prototype.ta=function(a){_e(this.g,new gf(a))},os.prototype.sa=function(a){_e(this.g,new _f)},os.prototype.ra=function(){_e(this.g,"b")},Fo.prototype.createWebChannel=Fo.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,_g=function(){return new Fo},gg=function(){return bo()},mg=Or,Ol={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ro.NO_ERROR=0,Ro.TIMEOUT=8,Ro.HTTP_ERROR=6,na=Ro,Nh.COMPLETE="complete",pg=Nh,Sh.EventType=Xs,Xs.OPEN="a",Xs.CLOSE="b",Xs.ERROR="c",Xs.MESSAGE="d",oe.prototype.listen=oe.prototype.K,gi=Sh,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,dg=Xe}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});const ud="@firebase/firestore",hd="4.9.0";/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let qs="12.0.0";/**
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
 */const Jr=new Tu("@firebase/firestore");function us(){return Jr.logLevel}function ee(t,...e){if(Jr.logLevel<=Ie.DEBUG){const n=e.map(bu);Jr.debug(`Firestore (${qs}): ${t}`,...n)}}function Hn(t,...e){if(Jr.logLevel<=Ie.ERROR){const n=e.map(bu);Jr.error(`Firestore (${qs}): ${t}`,...n)}}function ks(t,...e){if(Jr.logLevel<=Ie.WARN){const n=e.map(bu);Jr.warn(`Firestore (${qs}): ${t}`,...n)}}function bu(t){if(typeof t=="string")return t;try{/**
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
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,yg(t,r,n)}function yg(t,e,n){let r=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Hn(r),new Error(r)}function xe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||yg(e,s,r)}function pe(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class yI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vI{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string",31837,{l:r}),new vg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string",2055,{h:e}),new It(e)}}class EI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new EI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){xe(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function II(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=II(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function xl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return nl(s)===nl(i)?Ae(s,i):nl(s)?1:-1}return Ae(t.length,e.length)}const AI=55296,bI=57343;function nl(t){const e=t.charCodeAt(0);return e>=AI&&e<=bI}function Vs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const dd="__name__";class pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ae(e.length,n.length)}static compareSegments(e,n){const r=pn.isNumericId(e),s=pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?pn.extractNumericId(e).compare(pn.extractNumericId(n)):xl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gr.fromString(e.substring(4,e.length-2))}}class ze extends pn{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const RI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends pn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return RI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dd}static keyField(){return new gt([dd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(ze.fromString(e))}static fromName(e){return new ie(ze.fromString(e).popFirst(5))}static empty(){return new ie(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new ze(e.slice()))}}/**
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
 */function Eg(t,e,n){if(!n)throw new J(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SI(t,e,n,r){if(e===!0&&r===!0)throw new J(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pd(t){if(!ie.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function md(t){if(ie.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new J(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ot(t,e){const n={typeString:t};return e&&(n.value=e),n}function uo(t,e){if(!wg(t))throw new J(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new J(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const gd=-62135596800,_d=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*_d);return new We(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<gd)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_d}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(uo(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:ot("string",We._jsonSchemaVersion),seconds:ot("number"),nanoseconds:ot("number")};/**
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
 */const zi=-1;function CI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new Ir(s,ie.empty(),e)}function PI(t){return new Ir(t.readTime,t.key,zi)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(de.min(),ie.empty(),zi)}static max(){return new Ir(de.max(),ie.empty(),zi)}}function kI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const VI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function js(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==VI)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function DI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rc.ce=-1;/**
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
 */const Su=-1;function sc(t){return t==null}function Aa(t){return t===0&&1/t==-1/0}function OI(t){return typeof t=="number"&&Number.isInteger(t)&&!Aa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tg="";function xI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=yd(e)),e=MI(t.get(n),e);return yd(e)}function MI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Tg:n+="";break;default:n+=i}}return n}function yd(t){return t+Tg+""}/**
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
 */function vd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ig(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ed(this.data.getIterator())}getIteratorFrom(e){return new Ed(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Ed{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new at(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ag extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ag("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const LI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(xe(!!t,39018),typeof t=="string"){let e=0;const n=LI.exec(t);if(xe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */const bg="server_timestamp",Rg="__type__",Sg="__previous_value__",Cg="__local_write_time__";function Cu(t){return(t?.mapValue?.fields||{})[Rg]?.stringValue===bg}function ic(t){const e=t.mapValue.fields[Sg];return Cu(e)?ic(e):e}function Wi(t){const e=Ar(t.mapValue.fields[Cg].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class FI{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ba="(default)";class Ki{constructor(e,n){this.projectId=e,this.database=n||ba}static empty(){return new Ki("","")}get isDefaultDatabase(){return this.database===ba}isEqual(e){return e instanceof Ki&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Pg="__type__",UI="__max__",Wo={mapValue:{}},kg="__vector__",Ra="value";function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cu(t)?4:$I(t)?9007199254740991:BI(t)?10:11:ce(28295,{value:t})}function Sn(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ar(s.timestampValue),c=Ar(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return tt(s.geoPointValue.latitude)===tt(i.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return tt(s.integerValue)===tt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=tt(s.doubleValue),c=tt(i.doubleValue);return o===c?Aa(o)===Aa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(vd(o)!==vd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Sn(o[l],c[l])))return!1;return!0}(t,e);default:return ce(52216,{left:t})}}function Gi(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=tt(i.integerValue||i.doubleValue),l=tt(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return wd(t.timestampValue,e.timestampValue);case 4:return wd(Wi(t),Wi(e));case 5:return xl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=br(i),l=br(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Ae(c[u],l[u]);if(f!==0)return f}return Ae(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ae(tt(i.latitude),tt(o.latitude));return c!==0?c:Ae(tt(i.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Td(t.arrayValue,e.arrayValue);case 10:return function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Ra]?.arrayValue,f=l[Ra]?.arrayValue,p=Ae(u?.values?.length||0,f?.values?.length||0);return p!==0?p:Td(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Wo.mapValue&&o===Wo.mapValue)return 0;if(i===Wo.mapValue)return 1;if(o===Wo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=xl(l[p],f[p]);if(m!==0)return m;const _=Ns(c[l[p]],u[f[p]]);if(_!==0)return _}return Ae(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function wd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Ar(t),r=Ar(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Td(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function Ds(t){return Ml(t)}function Ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ml(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ml(n.fields[o])}`;return s+"}"}(t.mapValue):ce(61005,{value:t})}function ra(t){switch(Rr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(t);return e?16+ra(e):16;case 5:return 2*t.stringValue.length;case 6:return br(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ra(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return kr(r.fields,(i,o)=>{s+=i.length+ra(o)}),s}(t.mapValue);default:throw ce(13486,{value:t})}}function Id(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ll(t){return!!t&&"integerValue"in t}function Pu(t){return!!t&&"arrayValue"in t}function Ad(t){return!!t&&"nullValue"in t}function bd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function BI(t){return(t?.mapValue?.fields||{})[Pg]?.stringValue===kg}function Vi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vi(t.arrayValue.values[n]);return e}return{...t}}function $I(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===UI}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vi(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Vi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(Vi(this.value))}}function Vg(t){const e=[];return kr(t.fields,(n,r)=>{const s=new gt([n]);if(sa(r)){const i=Vg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
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
 */class bt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new bt(e,0,de.min(),de.min(),de.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,de.min(),de.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,de.min(),de.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sa{constructor(e,n){this.position=e,this.inclusive=n}}function Rd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qi{constructor(e,n="asc"){this.field=e,this.dir=n}}function qI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ng{}class it extends Ng{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HI(e,n,r):n==="array-contains"?new KI(e,r):n==="in"?new GI(e,r):n==="not-in"?new QI(e,r):n==="array-contains-any"?new YI(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zI(e,r):new WI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ns(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends Ng{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new un(e,n)}matches(e){return Dg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Dg(t){return t.op==="and"}function Og(t){return jI(t)&&Dg(t)}function jI(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Fl(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(Og(t))return t.filters.map(e=>Fl(e)).join(",");{const e=t.filters.map(n=>Fl(n)).join(",");return`${t.op}(${e})`}}function xg(t,e){return t instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Sn(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&xg(o,s.filters[c]),!0):!1}(t,e):void ce(19439)}function Mg(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${Ds(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(Mg).join(" ,")+"}"}(t):"Filter"}class HI extends it{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class zI extends it{constructor(e,n){super(e,"in",n),this.keys=Lg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WI extends it{constructor(e,n){super(e,"not-in",n),this.keys=Lg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lg(t,e){return(e.arrayValue?.values||[]).map(n=>ie.fromName(n.referenceValue))}class KI extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pu(n)&&Gi(n.arrayValue,this.value)}}class GI extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gi(this.value.arrayValue,n)}}class QI extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Gi(this.value.arrayValue,n)}}class YI extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gi(this.value.arrayValue,r))}}/**
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
 */class JI{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Cd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new JI(t,e,n,r,s,i,o)}function ku(t){const e=pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.Te=n}return e.Te}function Vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sd(t.startAt,e.startAt)&&Sd(t.endAt,e.endAt)}function Ul(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class zs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function XI(t,e,n,r,s,i,o,c){return new zs(t,e,n,r,s,i,o,c)}function oc(t){return new zs(t)}function Pd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fg(t){return t.collectionGroup!==null}function Ni(t){const e=pe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new at(gt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Qi(i,r))}),n.has(gt.keyField().canonicalString())||e.Ie.push(new Qi(gt.keyField(),r))}return e.Ie}function vn(t){const e=pe(t);return e.Ee||(e.Ee=ZI(e,Ni(t))),e.Ee}function ZI(t,e){if(t.limitType==="F")return Cd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qi(s.field,i)});const n=t.endAt?new Sa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sa(t.startAt.position,t.startAt.inclusive):null;return Cd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bl(t,e){const n=t.filters.concat([e]);return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $l(t,e,n){return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return Vu(vn(t),vn(e))&&t.limitType===e.limitType}function Ug(t){return`${ku(vn(t))}|lt:${t.limitType}`}function hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Mg(s)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ds(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ds(s)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Rd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Ni(r),s)||r.endAt&&!function(o,c,l){const u=Rd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Ni(r),s))}(t,e)}function eA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bg(t){return(e,n)=>{let r=!1;for(const s of Ni(t)){const i=tA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function tA(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ns(l,u):ce(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
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
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ig(this.inner)}size(){return this.innerSize}}/**
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
 */const nA=new Je(ie.comparator);function zn(){return nA}const $g=new Je(ie.comparator);function _i(...t){let e=$g;for(const n of t)e=e.insert(n.key,n);return e}function qg(t){let e=$g;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return Di()}function jg(){return Di()}function Di(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const rA=new Je(ie.comparator),sA=new at(ie.comparator);function be(...t){let e=sA;for(const n of t)e=e.add(n);return e}const iA=new at(Ae);function oA(){return iA}/**
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
 */function Nu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Aa(e)?"-0":e}}function Hg(t){return{integerValue:""+t}}function zg(t,e){return OI(e)?Hg(e):Nu(t,e)}/**
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
 */class lc{constructor(){this._=void 0}}function aA(t,e,n){return t instanceof Yi?function(s,i){const o={fields:{[Rg]:{stringValue:bg},[Cg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cu(i)&&(i=ic(i)),i&&(o.fields[Sg]=i),{mapValue:o}}(n,e):t instanceof Os?Kg(t,e):t instanceof Ji?Gg(t,e):function(s,i){const o=Wg(s,i),c=kd(o)+kd(s.Ae);return Ll(o)&&Ll(s.Ae)?Hg(c):Nu(s.serializer,c)}(t,e)}function cA(t,e,n){return t instanceof Os?Kg(t,e):t instanceof Ji?Gg(t,e):n}function Wg(t,e){return t instanceof Xi?function(r){return Ll(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yi extends lc{}class Os extends lc{constructor(e){super(),this.elements=e}}function Kg(t,e){const n=Qg(e);for(const r of t.elements)n.some(s=>Sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ji extends lc{constructor(e){super(),this.elements=e}}function Gg(t,e){let n=Qg(e);for(const r of t.elements)n=n.filter(s=>!Sn(s,r));return{arrayValue:{values:n}}}class Xi extends lc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function kd(t){return tt(t.integerValue||t.doubleValue)}function Qg(t){return Pu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Du{constructor(e,n){this.field=e,this.transform=n}}function lA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Os&&s instanceof Os||r instanceof Ji&&s instanceof Ji?Vs(r.elements,s.elements,Sn):r instanceof Xi&&s instanceof Xi?Sn(r.Ae,s.Ae):r instanceof Yi&&s instanceof Yi}(t.transform,e.transform)}class uA{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uc{}function Yg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ou(t.key,qt.none()):new ho(t.key,t.data,qt.none());{const n=t.data,r=Ut.empty();let s=new at(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vr(t.key,r,new Gt(s.toArray()),qt.none())}}function hA(t,e,n){t instanceof ho?function(s,i,o){const c=s.value.clone(),l=Nd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(s,i,o){if(!ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Nd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Jg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,r){return t instanceof ho?function(i,o,c,l){if(!ia(i.precondition,o))return c;const u=i.value.clone(),f=Dd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(i,o,c,l){if(!ia(i.precondition,o))return c;const u=Dd(i.fieldTransforms,l,o),f=o.data;return f.setAll(Jg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function fA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Wg(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Vd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vs(r,s,(i,o)=>lA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends uc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends uc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nd(t,e,n){const r=new Map;xe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,cA(o,c,n[s]))}return r}function Dd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,aA(i,o,e))}return r}class Ou extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dA extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Yg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>Vd(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>Vd(n,r))}}class xu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return rA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new xu(e,n,r,s)}}/**
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
 */class mA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,Ce;function _A(t){switch(t){case M.OK:return ce(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function Xg(t){if(t===void 0)return Hn("GRPC error has no .code"),M.UNKNOWN;switch(t){case st.OK:return M.OK;case st.CANCELLED:return M.CANCELLED;case st.UNKNOWN:return M.UNKNOWN;case st.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case st.INTERNAL:return M.INTERNAL;case st.UNAVAILABLE:return M.UNAVAILABLE;case st.UNAUTHENTICATED:return M.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case st.NOT_FOUND:return M.NOT_FOUND;case st.ALREADY_EXISTS:return M.ALREADY_EXISTS;case st.PERMISSION_DENIED:return M.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case st.ABORTED:return M.ABORTED;case st.OUT_OF_RANGE:return M.OUT_OF_RANGE;case st.UNIMPLEMENTED:return M.UNIMPLEMENTED;case st.DATA_LOSS:return M.DATA_LOSS;default:return ce(39323,{code:t})}}(Ce=st||(st={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yA(){return new TextEncoder}/**
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
 */const vA=new gr([4294967295,4294967295],0);function Od(t){const e=yA().encode(t),n=new fg;return n.update(e),new Uint8Array(n.digest())}function xd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gr([n,r],0),new gr([s,i],0)]}class Mu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yi(`Invalid padding: ${n}`);if(r<0)throw new yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=gr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(gr.fromNumber(r)));return s.compare(vA)===1&&(s=new gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Od(e),[r,s]=xd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Mu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Od(e),[r,s]=xd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(de.min(),s,new Je(Ae),zn(),be())}}class fo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fo(r,n,be(),be(),be())}}/**
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
 */class oa{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Zg{constructor(e,n){this.targetId=e,this.Ce=n}}class e_{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Md{constructor(){this.ve=0,this.Fe=Ld(),this.Me=_t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),n=be(),r=be();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}}),new fo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Ld()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,xe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class EA{constructor(e){this.Ge=e,this.ze=new Map,this.je=zn(),this.Je=Ko(),this.He=Ko(),this.Ye=new Je(Ae)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ul(i))if(r===0){const o=new ie(i.path);this.et(n,o,bt.newNoDocument(o,de.min()))}else xe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=br(r).toUint8Array()}catch(l){if(l instanceof Ag)return ks("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Mu(o,s,i)}catch(l){return ks(l instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Ul(c.target)){const l=new ie(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,bt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=be();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new hc(e,n,this.Ye,this.je,r);return this.je=zn(),this.Je=Ko(),this.He=Ko(),this.Ye=new Je(Ae),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Md,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new at(Ae),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new at(Ae),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Md),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ko(){return new Je(ie.comparator)}function Ld(){return new Je(ie.comparator)}const wA={asc:"ASCENDING",desc:"DESCENDING"},TA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IA={and:"AND",or:"OR"};class AA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ql(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function Ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bA(t,e){return Ca(t,e.toTimestamp())}function En(t){return xe(!!t,49232),de.fromTimestamp(function(n){const r=Ar(n);return new We(r.seconds,r.nanos)}(t))}function Lu(t,e){return jl(t,e).canonicalString()}function jl(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function n_(t){const e=ze.fromString(t);return xe(a_(e),10190,{key:e.toString()}),e}function Hl(t,e){return Lu(t.databaseId,e.path)}function rl(t,e){const n=n_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(s_(n))}function r_(t,e){return Lu(t.databaseId,e)}function RA(t){const e=n_(t);return e.length===4?ze.emptyPath():s_(e)}function zl(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function s_(t){return xe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Fd(t,e,n){return{name:Hl(t,e),fields:n.value.mapValue.fields}}function SA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(xe(f===void 0||typeof f=="string",58123),_t.fromBase64String(f||"")):(xe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),_t.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?M.UNKNOWN:Xg(u.code);return new J(f,u.message||"")}(o);n=new e_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=rl(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):de.min(),c=new Ut({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new oa(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=rl(t,r.document),i=r.readTime?En(r.readTime):de.min(),o=bt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new oa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=rl(t,r.document),i=r.removedTargetIds||[];n=new oa([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gA(s,i),c=r.targetId;n=new Zg(c,o)}}return n}function CA(t,e){let n;if(e instanceof ho)n={update:Fd(t,e.key,e.value)};else if(e instanceof Ou)n={delete:Hl(t,e.key)};else if(e instanceof Vr)n={update:Fd(t,e.key,e.data),updateMask:LA(e.fieldMask)};else{if(!(e instanceof dA))return ce(16599,{Vt:e.type});n={verify:Hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Yi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Os)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xi)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)}(t,e.precondition)),n}function PA(t,e){return t&&t.length>0?(xe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(de.min())&&(o=En(i)),new uA(o,s.transformResults||[])}(n,e))):[]}function kA(t,e){return{documents:[r_(t,e.path)]}}function VA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=r_(t,s);const i=function(u){if(u.length!==0)return o_(un.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:fs(m.field),direction:OA(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ql(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function NA(t){let e=RA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=i_(p);return m instanceof un&&Og(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Qi(ds(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,sc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new Sa(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new Sa(_,m)}(n.endAt)),XI(e,s,o,i,c,"F",l,u)}function DA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function i_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ds(n.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ds(n.unaryFilter.field);return it.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}}(t):t.fieldFilter!==void 0?function(n){return it.create(ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>i_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}}(n.compositeFilter.op))}(t):ce(30097,{filter:t})}function OA(t){return wA[t]}function xA(t){return TA[t]}function MA(t){return IA[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ds(t){return gt.fromServerFormat(t.fieldPath)}function o_(t){return t instanceof it?function(n){if(n.op==="=="){if(bd(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(Ad(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bd(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(Ad(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:xA(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>o_(s));return r.length===1?r[0]:{compositeFilter:{op:MA(n.op),filters:r}}}(t):ce(54877,{filter:t})}function LA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function a_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ur{constructor(e,n,r,s,i=de.min(),o=de.min(),c=_t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class FA{constructor(e){this.yt=e}}function UA(t){const e=NA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$l(e,e.limit,"L"):e}/**
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
 */class BA{constructor(){this.Cn=new $A}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ir.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class $A{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(ze.comparator)).toArray()}}/**
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
 */const Ud={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},c_=41943040;class Lt{static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(c_,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);/**
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
 */class xs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xs(0)}static cr(){return new xs(-1)}}/**
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
 */const Bd="LruGarbageCollector",qA=1048576;function $d([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class jA{constructor(e){this.Ir=e,this.buffer=new at($d),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$d(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(Bd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Hs(n)?ee(Bd,"Ignoring IndexedDB error during garbage collection: ",n):await js(n)}await this.Vr(3e5)})}}class zA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(rc.ce);const r=new jA(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Ud)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ud):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),us()<=Ie.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function WA(t,e){return new zA(t,e)}/**
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
 */class KA{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class QA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Oi(r.mutation,s,Gt.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=_i();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=zn();const o=Di(),c=function(){return Di()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Vr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Oi(f.mutation,u,f.mutation.getFieldMask(),We.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>c.set(u,new GA(f,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Di();let s=new Je((o,c)=>o-c),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Gt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||be()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=jg();f.forEach(m=>{if(!i.has(m)){const _=Yg(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(jr());let c=zi,l=i;return o.next(u=>B.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,be())).next(f=>({batchId:c,changes:qg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=_i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,i).next(c=>B.forEach(c,l=>{const u=function(p,m){return new zs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,bt.newInvalidDocument(f)))});let c=_i();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Oi(f.mutation,u,Gt.empty(),We.now()),cc(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class YA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:UA(s.bundledQuery),readTime:En(s.readTime)}}(n)),B.resolve()}}/**
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
 */class JA{constructor(){this.overlays=new Je(ie.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=jr(),i=n.length+1,o=new ie(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Je((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=jr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return B.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mA(n,r));let i=this.qr.get(n);i===void 0&&(i=be(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class XA{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Fu{constructor(){this.Qr=new at(ct.$r),this.Ur=new at(ct.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ct(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ie(new ze([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ie(new ze([])),r=new ct(n,e),s=new ct(n,e+1);let i=be();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ie.comparator(e.key,n.key)||Ae(e.Yr,n.Yr)}static Kr(e,n){return Ae(e.Yr,n.Yr)||ie.comparator(e.key,n.key)}}/**
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
 */class ZA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new at(ct.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pA(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new ct(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Su:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Ae);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ie(i),0);let c=new at(Ae);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)},o),B.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ct(n,0),s=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class eb{constructor(e){this.ri=e,this.docs=function(){return new Je(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=zn();const o=n.path,c=new ie(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||kI(PI(f),r)<=0||(s.has(f.key)||cc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tb(this)}getSize(e){return B.resolve(this.size)}}class tb extends KA{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class nb{constructor(e){this.persistence=e,this.si=new ts(n=>ku(n),Vu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new Fu,this.targetCount=0,this.ai=xs.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class l_{constructor(e,n){this.ui={},this.overlays={},this.ci=new rc(0),this.li=!1,this.li=!0,this.hi=new XA,this.referenceDelegate=e(this),this.Pi=new nb(this),this.indexManager=new BA,this.remoteDocumentCache=function(s){return new eb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new FA(n),this.Ii=new YA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new ZA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new rb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class rb extends NI{constructor(e){super(),this.currentSequenceNumber=e}}class Uu{constructor(e){this.persistence=e,this.Ri=new Fu,this.Vi=null}static mi(e){return new Uu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const s=ie.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Pa{constructor(e,n){this.persistence=e,this.pi=new ts(r=>xI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=WA(this,n)}static mi(e,n){return new Pa(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ra(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bu(e,n.fromCache,r,s)}}/**
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
 */class sb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ib{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Zw()?8:DI(Pt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sb;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(us()<=Ie.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(us()<=Ie.DEBUG&&ee("QueryEngine","Query:",hs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(us()<=Ie.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):B.resolve())}ys(e,n){if(Pd(n))return B.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=$l(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,$l(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,s){return Pd(n)||s.isEqual(de.min())?B.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(us()<=Ie.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hs(n)),this.vs(e,o,n,CI(s,zi)).next(c=>c))})}Ds(e,n){let r=new at(Bg(e));return n.forEach((s,i)=>{cc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return us()<=Ie.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",hs(n)),this.ps.getDocumentsMatchingQuery(e,n,Ir.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const $u="LocalStore",ob=3e8;class ab{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Je(Ae),this.xs=new ts(i=>ku(i),Vu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function cb(t,e,n,r){return new ab(t,e,n,r)}async function u_(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=be();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function lb(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let _=B.resolve();return m.forEach(R=>{_=_.next(()=>f.getEntry(l,R)).next(V=>{const D=u.docVersions.get(R);xe(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=be();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function h_(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function ub(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(_t.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(V,D,j){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=ob?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))});let l=zn(),u=be();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(hb(i,o,e.documentUpdates).next(f=>{l=f.ks,u=f.qs})),!r.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return B.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ms=s,i))}function hb(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=zn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee($u,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function fb(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Su),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function db(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Wl(t,e,n){const r=pe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Hs(o))throw o;ee($u,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function qd(t,e,n){const r=pe(t);let s=de.min(),i=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=pe(l),m=p.xs.get(f);return m!==void 0?B.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)}(r,o,vn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:be())).next(c=>(pb(r,eA(e),c),{documents:c,Qs:i})))}function pb(t,e,n){let r=t.Os.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class jd{constructor(){this.activeTargetIds=oA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mb{constructor(){this.Mo=new jd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new jd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gb{Oo(e){}shutdown(){}}/**
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
 */const Hd="ConnectivityMonitor";class zd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(Hd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(Hd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Go=null;function Kl(){return Go===null?Go=function(){return 268435456+Math.round(2147483648*Math.random())}():Go++,"0x"+Go.toString(16)}/**
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
 */const sl="RestConnection",_b={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ba?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Kl(),c=this.zo(e,n.toUriEncodedString());ee(sl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Bs(u);return this.Jo(e,c,l,r,f).then(p=>(ee(sl,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ks(sl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=_b[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class vb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Tt="WebChannelConnection";class Eb extends yb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Kl();return new Promise((c,l)=>{const u=new dg;u.setWithCredentials(!0),u.listenOnce(pg.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case na.NO_ERROR:const p=u.getResponseJson();ee(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case na.TIMEOUT:ee(Tt,`RPC '${e}' ${o} timed out`),l(new J(M.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const m=u.getStatus();if(ee(Tt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_?.error;if(R&&R.status&&R.message){const V=function(j){const q=j.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(q)>=0?q:M.UNKNOWN}(R.status);l(new J(V,R.message))}else l(new J(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new J(M.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(Tt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);ee(Tt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Kl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_g(),c=gg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");ee(Tt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const R=new vb({Yo:D=>{_?ee(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(ee(Tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(Tt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),V=(D,j,q)=>{D.listen(j,x=>{try{q(x)}catch(O){setTimeout(()=>{throw O},0)}})};return V(p,gi.EventType.OPEN,()=>{_||(ee(Tt,`RPC '${e}' stream ${s} transport opened.`),R.o_())}),V(p,gi.EventType.CLOSE,()=>{_||(_=!0,ee(Tt,`RPC '${e}' stream ${s} transport closed`),R.a_(),this.E_(p))}),V(p,gi.EventType.ERROR,D=>{_||(_=!0,ks(Tt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),R.a_(new J(M.UNAVAILABLE,"The operation could not be completed")))}),V(p,gi.EventType.MESSAGE,D=>{if(!_){const j=D.data[0];xe(!!j,16349);const q=j,x=q?.error||q[0]?.error;if(x){ee(Tt,`RPC '${e}' stream ${s} received error:`,x);const O=x.status;let G=function(y){const w=st[y];if(w!==void 0)return Xg(w)}(O),re=x.message;G===void 0&&(G=M.INTERNAL,re="Unknown error status: "+O+" with message "+x.message),_=!0,R.a_(new J(G,re)),p.close()}else ee(Tt,`RPC '${e}' stream ${s} received:`,j),R.u_(j)}}),V(c,mg.STAT_EVENT,D=>{D.stat===Ol.PROXY?ee(Tt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Ol.NOPROXY&&ee(Tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.__()},0),R}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function il(){return typeof document<"u"?document:null}/**
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
 */function fc(t){return new AA(t,!0)}/**
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
 */class f_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Wd="PersistentStream";class d_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new f_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new J(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ee(Wd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ee(Wd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wb extends d_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=SA(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?En(o.readTime):de.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=zl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Ul(l)?{documents:kA(i,l)}:{query:VA(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=t_(i,o.resumeToken);const u=ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){c.readTime=Ca(i,o.snapshotVersion.toTimestamp());const u=ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=DA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=zl(this.serializer),n.removeTarget=e,this.q_(n)}}class Tb extends d_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=PA(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=zl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CA(this.serializer,r))};this.q_(n)}}/**
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
 */class Ib{}class Ab extends Ib{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,jl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(M.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,jl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class bb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Hn(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Xr="RemoteStore";class Rb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ns(this)&&(ee(Xr,"Restarting streams for network reachability change."),await async function(l){const u=pe(l);u.Ea.add(4),await po(u),u.Ra.set("Unknown"),u.Ea.delete(4),await dc(u)}(this))})}),this.Ra=new bb(r,s)}}async function dc(t){if(ns(t))for(const e of t.da)await e(!0)}async function po(t){for(const e of t.da)await e(!1)}function p_(t,e){const n=pe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),zu(n)?Hu(n):Ws(n).O_()&&ju(n,e))}function qu(t,e){const n=pe(t),r=Ws(n);n.Ia.delete(e),r.O_()&&m_(n,e),n.Ia.size===0&&(r.O_()?r.L_():ns(n)&&n.Ra.set("Unknown"))}function ju(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).Y_(e)}function m_(t,e){t.Va.Ue(e),Ws(t).Z_(e)}function Hu(t){t.Va=new EA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.Ra.ua()}function zu(t){return ns(t)&&!Ws(t).x_()&&t.Ia.size>0}function ns(t){return pe(t).Ea.size===0}function g_(t){t.Va=void 0}async function Sb(t){t.Ra.set("Online")}async function Cb(t){t.Ia.forEach((e,n)=>{ju(t,e)})}async function Pb(t,e){g_(t),zu(t)?(t.Ra.ha(e),Hu(t)):t.Ra.set("Unknown")}async function kb(t,e,n){if(t.Ra.set("Online"),e instanceof e_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){ee(Xr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ka(t,r)}else if(e instanceof oa?t.Va.Ze(e):e instanceof Zg?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const r=await h_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(_t.EMPTY_BYTE_STRING,f.snapshotVersion)),m_(i,l);const p=new ur(f.target,l,u,f.sequenceNumber);ju(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee(Xr,"Failed to raise snapshot:",r),await ka(t,r)}}async function ka(t,e,n){if(!Hs(e))throw e;t.Ea.add(1),await po(t),t.Ra.set("Offline"),n||(n=()=>h_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Xr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await dc(t)})}function __(t,e){return e().catch(n=>ka(t,n,e))}async function pc(t){const e=pe(t),n=Sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Su;for(;Vb(e);)try{const s=await fb(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Nb(e,s)}catch(s){await ka(e,s)}y_(e)&&v_(e)}function Vb(t){return ns(t)&&t.Ta.length<10}function Nb(t,e){t.Ta.push(e);const n=Sr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function y_(t){return ns(t)&&!Sr(t).x_()&&t.Ta.length>0}function v_(t){Sr(t).start()}async function Db(t){Sr(t).ra()}async function Ob(t){const e=Sr(t);for(const n of t.Ta)e.ea(n.mutations)}async function xb(t,e,n){const r=t.Ta.shift(),s=xu.from(r,e,n);await __(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pc(t)}async function Mb(t,e){e&&Sr(t).X_&&await async function(r,s){if(function(o){return _A(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();Sr(r).B_(),await __(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pc(r)}}(t,e),y_(t)&&v_(t)}async function Kd(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),ee(Xr,"RemoteStore received new credentials");const r=ns(n);n.Ea.add(3),await po(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await dc(n)}async function Lb(t,e){const n=pe(t);e?(n.Ea.delete(2),await dc(n)):e||(n.Ea.add(2),await po(n),n.Ra.set("Unknown"))}function Ws(t){return t.ma||(t.ma=function(n,r,s){const i=pe(n);return i.sa(),new wb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:Sb.bind(null,t),t_:Cb.bind(null,t),r_:Pb.bind(null,t),H_:kb.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),zu(t)?Hu(t):t.Ra.set("Unknown")):(await t.ma.stop(),g_(t))})),t.ma}function Sr(t){return t.fa||(t.fa=function(n,r,s){const i=pe(n);return i.sa(),new Tb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Db.bind(null,t),r_:Mb.bind(null,t),ta:Ob.bind(null,t),na:xb.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await pc(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(Xr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Wu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Wu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ku(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),Hs(t))return new J(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Is{static emptySet(e){return new Is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=_i(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Gd{constructor(){this.ga=new Je(ie.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ms{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ms(e,n,Is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Fb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Ub{constructor(){this.queries=Qd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Qd(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new J(M.ABORTED,"Firestore shutting down"))}}function Qd(){return new ts(t=>Ug(t),ac)}async function Gu(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Fb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Ku(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Yu(n)}async function Qu(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Bb(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Yu(n)}function $b(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Yu(t){t.Ca.forEach(e=>{e.next()})}var Gl,Yd;(Yd=Gl||(Gl={})).Ma="default",Yd.Cache="cache";class Ju{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Gl.Cache}}/**
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
 */class E_{constructor(e){this.key=e}}class w_{constructor(e){this.key=e}}class qb{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=be(),this.mutatedKeys=be(),this.eu=Bg(e),this.tu=new Is(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Gd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=cc(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),V=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;m&&_?m.data.isEqual(_.data)?R!==V&&(r.track({type:3,doc:_}),D=!0):this.su(m,_)||(r.track({type:2,doc:_}),D=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),D=!0):m&&!_&&(r.track({type:1,doc:m}),D=!0,(l||u)&&(c=!0)),D&&(_?(o=o.add(_),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(_,R){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:D})}};return V(_)-V(R)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ms(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Gd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=be(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new w_(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new E_(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=be();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ms.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Xu="SyncEngine";class jb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Hb{constructor(e){this.key=e,this.hu=!1}}class zb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ts(c=>Ug(c),ac),this.Iu=new Map,this.Eu=new Set,this.du=new Je(ie.comparator),this.Au=new Map,this.Ru=new Fu,this.Vu={},this.mu=new Map,this.fu=xs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Wb(t,e,n=!0){const r=S_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await T_(r,e,n,!0),s}async function Kb(t,e){const n=S_(t);await T_(n,e,!0,!1)}async function T_(t,e,n,r){const s=await db(t.localStore,vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Gb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&p_(t.remoteStore,s),c}async function Gb(t,e,n,r,s){t.pu=(p,m,_)=>async function(V,D,j,q){let x=D.view.ru(j);x.Cs&&(x=await qd(V.localStore,D.query,!1).then(({documents:I})=>D.view.ru(I,x)));const O=q&&q.targetChanges.get(D.targetId),G=q&&q.targetMismatches.get(D.targetId)!=null,re=D.view.applyChanges(x,V.isPrimaryClient,O,G);return Xd(V,D.targetId,re.au),re.snapshot}(t,p,m,_);const i=await qd(t.localStore,e,!0),o=new qb(e,i.Qs),c=o.ru(i.documents),l=fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Xd(t,n,u.au);const f=new jb(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function Qb(t,e,n){const r=pe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ac(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qu(r.remoteStore,s.targetId),Ql(r,s.targetId)}).catch(js)):(Ql(r,s.targetId),await Wl(r.localStore,s.targetId,!0))}async function Yb(t,e){const n=pe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qu(n.remoteStore,r.targetId))}async function Jb(t,e,n){const r=sR(t);try{const s=await function(o,c){const l=pe(o),u=We.now(),f=c.reduce((_,R)=>_.add(R.key),be());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=zn(),V=be();return l.Ns.getEntries(_,f).next(D=>{R=D,R.forEach((j,q)=>{q.isValidDocument()||(V=V.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,R)).next(D=>{p=D;const j=[];for(const q of c){const x=fA(q,p.get(q.key).overlayedDocument);x!=null&&j.push(new Vr(q.key,x,Vg(x.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,j,c)}).next(D=>{m=D;const j=D.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(_,D.batchId,j)})}).then(()=>({batchId:m.batchId,changes:qg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Je(Ae)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await mo(r,s.changes),await pc(r.remoteStore)}catch(s){const i=Ku(s,"Failed to persist write");n.reject(i)}}async function I_(t,e){const n=pe(t);try{const r=await ub(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?xe(o.hu,14607):s.removedDocuments.size>0&&(xe(o.hu,42227),o.hu=!1))}),await mo(n,r,e)}catch(r){await js(r)}}function Jd(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=pe(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)}),u&&Yu(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Xb(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Je(ie.comparator);o=o.insert(i,bt.newNoDocument(i,de.min()));const c=be().add(i),l=new hc(de.min(),new Map,new Je(Ae),o,c);await I_(r,l),r.du=r.du.remove(i),r.Au.delete(e),Zu(r)}else await Wl(r.localStore,e,!1).then(()=>Ql(r,e,n)).catch(js)}async function Zb(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await lb(n.localStore,e);b_(n,r,null),A_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,s)}catch(s){await js(s)}}async function eR(t,e,n){const r=pe(t);try{const s=await function(o,c){const l=pe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(xe(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);b_(r,e,n),A_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mo(r,s)}catch(s){await js(s)}}function A_(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function b_(t,e,n){const r=pe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||R_(t,r)})}function R_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(qu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Zu(t))}function Xd(t,e,n){for(const r of n)r instanceof E_?(t.Ru.addReference(r.key,e),tR(t,r)):r instanceof w_?(ee(Xu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||R_(t,r.key)):ce(19791,{wu:r})}function tR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(Xu,"New document in limbo: "+n),t.Eu.add(r),Zu(t))}function Zu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ie(ze.fromString(e)),r=t.fu.next();t.Au.set(r,new Hb(n)),t.du=t.du.insert(n,r),p_(t.remoteStore,new ur(vn(oc(n.path)),r,"TargetPurposeLimboResolution",rc.ce))}}async function mo(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Bu.As(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const f=pe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(u,m=>B.forEach(m.Es,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>B.forEach(m.ds,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Hs(p))throw p;ee($u,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),R=_.snapshotVersion,V=_.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(m,V)}}}(r.localStore,i))}async function nR(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){ee(Xu,"User change. New user:",e.toKey());const r=await u_(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new J(M.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mo(n,r.Ls)}}function rR(t,e){const n=pe(t),r=n.Au.get(e);if(r&&r.hu)return be().add(r.key);{let s=be();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function S_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=I_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Xb.bind(null,e),e.Pu.H_=Bb.bind(null,e.eventManager),e.Pu.yu=$b.bind(null,e.eventManager),e}function sR(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eR.bind(null,e),e}class Va{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return cb(this.persistence,new ib,e.initialUser,this.serializer)}Cu(e){return new l_(Uu.mi,this.serializer)}Du(e){return new mb}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Va.provider={build:()=>new Va};class iR extends Va{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){xe(this.persistence.referenceDelegate instanceof Pa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new HA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new l_(r=>Pa.mi(r,n),this.serializer)}}class Yl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nR.bind(null,this.syncEngine),await Lb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ub}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=function(i){return new Eb(i)}(e.databaseInfo);return function(i,o,c,l){return new Ab(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new Rb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Jd(this.syncEngine,n,0),function(){return zd.v()?new zd:new gb}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new zb(s,i,o,c,l,u);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=pe(n);ee(Xr,"RemoteStore shutting down."),r.Ea.add(5),await po(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Yl.provider={build:()=>new Yl};/**
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
 */class eh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Cr="FirestoreClient";class oR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Cr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Cr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ku(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ol(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await u_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aR(t);ee(Cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Kd(e.remoteStore,s)),t._onlineComponents=e}async function aR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Cr,"Using user provided OfflineComponentProvider");try{await ol(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await ol(t,new Va)}}else ee(Cr,"Using default OfflineComponentProvider"),await ol(t,new iR(void 0));return t._offlineComponents}async function C_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Cr,"Using user provided OnlineComponentProvider"),await Zd(t,t._uninitializedComponentsProvider._online)):(ee(Cr,"Using default OnlineComponentProvider"),await Zd(t,new Yl))),t._onlineComponents}function cR(t){return C_(t).then(e=>e.syncEngine)}async function Na(t){const e=await C_(t),n=e.eventManager;return n.onListen=Wb.bind(null,e.syncEngine),n.onUnlisten=Qb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Kb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Yb.bind(null,e.syncEngine),n}function lR(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new eh({next:m=>{f.Nu(),o.enqueueAndForget(()=>Qu(i,p));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new J(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new J(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Ju(oc(c.path),f,{includeMetadataChanges:!0,qa:!0});return Gu(i,p)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}function uR(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new eh({next:m=>{f.Nu(),o.enqueueAndForget(()=>Qu(i,p)),m.fromCache&&l.source==="server"?u.reject(new J(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Ju(c,f,{includeMetadataChanges:!0,qa:!0});return Gu(i,p)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function P_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ep=new Map;/**
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
 */const k_="firestore.googleapis.com",tp=!0;class np{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=k_,this.ssl=tp}else this.host=e.host,this.ssl=e.ssl??tp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=c_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qA)throw new J(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P_(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new np({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new np(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _I;switch(r.type){case"firstParty":return new wI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ep.get(n);r&&(ee("ComponentProvider","Removing Datastore"),ep.delete(n),r.terminate())}(this),Promise.resolve()}}function hR(t,e,n,r={}){t=$t(t,mc);const s=Bs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(sg(`https://${c}`),ig("Firestore",!0)),i.host!==k_&&i.host!==c&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Tr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=It.MOCK_USER;else{u=Hw(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new It(p)}t._authCredentials=new yI(new vg(u,f))}}/**
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
 */class Nr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nr(this.firestore,e,this._query)}}class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(uo(n,Ze._jsonSchema))return new Ze(e,r||null,new ie(ze.fromString(n.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:ot("string",Ze._jsonSchemaVersion),referencePath:ot("string")};class _r extends Nr{constructor(e,n,r){super(e,n,oc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new ie(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function _n(t,e,...n){if(t=et(t),Eg("collection","path",e),t instanceof mc){const r=ze.fromString(e,...n);return md(r),new _r(t,null,r)}{if(!(t instanceof Ze||t instanceof _r))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return md(r),new _r(t.firestore,null,r)}}function $e(t,e,...n){if(t=et(t),arguments.length===1&&(e=Ru.newId()),Eg("doc","path",e),t instanceof mc){const r=ze.fromString(e,...n);return pd(r),new Ze(t,null,new ie(r))}{if(!(t instanceof Ze||t instanceof _r))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return pd(r),new Ze(t.firestore,t instanceof _r?t.converter:null,new ie(r))}}/**
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
 */const rp="AsyncQueue";class sp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new f_(this,"async_queue_retry"),this._c=()=>{const r=il();r&&ee(rp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=il();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=il();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Un;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Hs(e))throw e;ee(rp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Hn("INTERNAL UNHANDLED ERROR: ",ip(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Wu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:ip(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ip(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function op(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Wn extends mc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new sp,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sp(e),this._firestoreClient=void 0,await e}}}function fR(t,e){const n=typeof t=="object"?t:lg(),r=typeof t=="string"?t:ba,s=Au(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qw("firestore");i&&hR(s,...i)}return s}function go(t){if(t._terminated)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dR(t),t._firestoreClient}function dR(t){const e=t._freezeSettings(),n=function(s,i,o,c){return new FI(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,P_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new oR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
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
 */class Jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jt(_t.fromBase64String(e))}catch(n){throw new J(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jt(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(uo(e,Jt._jsonSchema))return Jt.fromBase64String(e.bytes)}}Jt._jsonSchemaVersion="firestore/bytes/1.0",Jt._jsonSchema={type:ot("string",Jt._jsonSchemaVersion),bytes:ot("string")};/**
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
 */class _o{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ks{constructor(e){this._methodName=e}}/**
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
 */class wn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wn._jsonSchemaVersion}}static fromJSON(e){if(uo(e,wn._jsonSchema))return new wn(e.latitude,e.longitude)}}wn._jsonSchemaVersion="firestore/geoPoint/1.0",wn._jsonSchema={type:ot("string",wn._jsonSchemaVersion),latitude:ot("number"),longitude:ot("number")};/**
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
 */class Tn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Tn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(uo(e,Tn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Tn(e.vectorValues);throw new J(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tn._jsonSchemaVersion="firestore/vectorValue/1.0",Tn._jsonSchema={type:ot("string",Tn._jsonSchemaVersion),vectorValues:ot("object")};/**
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
 */const pR=/^__.*__$/;class mR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}class V_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function N_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class gc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new gc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Da(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(N_(this.Ac)&&pR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class gR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Cc(e,n,r,s=!1){return new gc({Ac:e,methodName:n,Dc:r,path:gt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yo(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new gR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function th(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ih("Data must be an object, but it was:",o,r);const c=x_(r,o);let l,u;if(i.merge)l=new Gt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Jl(e,p,n);if(!o.contains(m))throw new J(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);L_(f,m)||f.push(m)}l=new Gt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new mR(new Ut(c),l,u)}class vo extends Ks{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vo}}function _R(t,e,n){return new gc({Ac:3,Dc:e.settings.Dc,methodName:t._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class nh extends Ks{_toFieldTransform(e){return new Du(e.path,new Yi)}isEqual(e){return e instanceof nh}}class rh extends Ks{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=_R(this,e,!0),r=this.vc.map(i=>Gs(i,n)),s=new Os(r);return new Du(e.path,s)}isEqual(e){return e instanceof rh&&Tr(this.vc,e.vc)}}class sh extends Ks{constructor(e,n){super(e),this.Fc=n}_toFieldTransform(e){const n=new Xi(e.serializer,zg(e.serializer,this.Fc));return new Du(e.path,n)}isEqual(e){return e instanceof sh&&this.Fc===e.Fc}}function D_(t,e,n,r){const s=t.Cc(1,e,n);ih("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();kr(r,(l,u)=>{const f=oh(e,l,n);u=et(u);const p=s.yc(f);if(u instanceof vo)i.push(f);else{const m=Gs(u,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new Gt(i);return new V_(o,c,s.fieldTransforms)}function O_(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[Jl(e,r,n)],l=[s];if(i.length%2!=0)throw new J(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Jl(e,i[m])),l.push(i[m+1]);const u=[],f=Ut.empty();for(let m=c.length-1;m>=0;--m)if(!L_(u,c[m])){const _=c[m];let R=l[m];R=et(R);const V=o.yc(_);if(R instanceof vo)u.push(_);else{const D=Gs(R,V);D!=null&&(u.push(_),f.set(_,D))}}const p=new Gt(u);return new V_(f,p,o.fieldTransforms)}function yR(t,e,n,r=!1){return Gs(n,t.Cc(r?4:3,e))}function Gs(t,e){if(M_(t=et(t)))return ih("Unsupported field value:",e,t),x_(t,e);if(t instanceof Ks)return function(r,s){if(!N_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Gs(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:Ca(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ca(s.serializer,i)}}if(r instanceof wn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jt)return{bytesValue:t_(s.serializer,r._byteString)};if(r instanceof Ze){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tn)return function(o,c){return{mapValue:{fields:{[Pg]:{stringValue:kg},[Ra]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Nu(c.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${nc(r)}`)}(t,e)}function x_(t,e){const n={};return Ig(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(r,s)=>{const i=Gs(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function M_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof wn||t instanceof Jt||t instanceof Ze||t instanceof Ks||t instanceof Tn)}function ih(t,e,n){if(!M_(n)||!wg(n)){const r=nc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Jl(t,e,n){if((e=et(e))instanceof _o)return e._internalPath;if(typeof e=="string")return oh(t,e);throw Da("Field path arguments must be of type string or ",t,!1,void 0,n)}const vR=new RegExp("[~\\*/\\[\\]]");function oh(t,e,n){if(e.search(vR)>=0)throw Da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _o(...e.split("."))._internalPath}catch{throw Da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Da(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(M.INVALID_ARGUMENT,c+t+l)}function L_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class F_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ER(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ER extends F_{data(){return super.data()}}function _c(t,e){return typeof e=="string"?oh(t,e):e instanceof _o?e._internalPath:e._delegate._internalPath}/**
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
 */function U_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ah{}class B_ extends ah{}function Hr(t,e,...n){let r=[];e instanceof ah&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ch).length,c=i.filter(l=>l instanceof yc).length;if(o>1||o>0&&c>0)throw new J(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yc extends B_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yc(e,n,r)}_apply(e){const n=this._parse(e);return $_(e._query,n),new Nr(e.firestore,e.converter,Bl(e._query,n))}_parse(e){const n=yo(e.firestore);return function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){cp(p,f);const R=[];for(const V of p)R.push(ap(l,i,V));m={arrayValue:{values:R}}}else m=ap(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||cp(p,f),m=yR(c,o,p,f==="in"||f==="not-in");return it.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function As(t,e,n){const r=e,s=_c("where",t);return yc._create(s,r,n)}class ch extends ah{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ch(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)$_(o,l),o=Bl(o,l)}(e._query,n),new Nr(e.firestore,e.converter,Bl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lh extends B_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new J(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qi(i,o)}(e._query,this._field,this._direction);return new Nr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new zs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function wR(t,e="asc"){const n=e,r=_c("orderBy",t);return lh._create(r,n)}function ap(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new J(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fg(e)&&n.indexOf("/")!==-1)throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ze.fromString(n));if(!ie.isDocumentKey(r))throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Id(t,new ie(r))}if(n instanceof Ze)return Id(t,n._key);throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function cp(t,e){if(!Array.isArray(t)||t.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TR{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[Ra].arrayValue?.values?.map(r=>tt(r.doubleValue));return new Tn(n)}convertGeoPoint(e){return new wn(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ic(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);xe(a_(r),9688,{name:e});const s=new Ki(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function uh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends F_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_c("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gr._jsonSchema={type:ot("string",Gr._jsonSchemaVersion),bundleSource:ot("string","DocumentSnapshot"),bundleName:ot("string"),bundle:ot("string")};class aa extends Gr{data(e={}){return super.data(e)}}class Qr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new aa(this._firestore,this._userDataWriter,r.key,r,new vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new aa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new vi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new aa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new vi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:IR(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}/**
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
 */function Bn(t){t=$t(t,Ze);const e=$t(t.firestore,Wn);return lR(go(e),t._key).then(n=>q_(e,t,n))}Qr._jsonSchemaVersion="firestore/querySnapshot/1.0",Qr._jsonSchema={type:ot("string",Qr._jsonSchemaVersion),bundleSource:ot("string","QuerySnapshot"),bundleName:ot("string"),bundle:ot("string")};class hh extends TR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function xi(t){t=$t(t,Nr);const e=$t(t.firestore,Wn),n=go(e),r=new hh(e);return U_(t._query),uR(n,t._query).then(s=>new Qr(e,r,t,s))}function yr(t,e,n){t=$t(t,Ze);const r=$t(t.firestore,Wn),s=uh(t.converter,e,n);return vc(r,[th(yo(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qt.none())])}function Ei(t,e,n,...r){t=$t(t,Ze);const s=$t(t.firestore,Wn),i=yo(s);let o;return o=typeof(e=et(e))=="string"||e instanceof _o?O_(i,"updateDoc",t._key,e,n,r):D_(i,"updateDoc",t._key,e),vc(s,[o.toMutation(t._key,qt.exists(!0))])}function al(t,e){const n=$t(t.firestore,Wn),r=$e(t),s=uh(t.converter,e);return vc(n,[th(yo(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function Zi(t,...e){t=et(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||op(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(op(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,c;if(t instanceof Ze)o=$t(t.firestore,Wn),c=oc(t._key.path),i={next:l=>{e[r]&&e[r](q_(o,t,l))},error:e[r+1],complete:e[r+2]};else{const l=$t(t,Nr);o=$t(l.firestore,Wn),c=l._query;const u=new hh(o);i={next:f=>{e[r]&&e[r](new Qr(o,u,l,f))},error:e[r+1],complete:e[r+2]},U_(t._query)}return function(u,f,p,m){const _=new eh(m),R=new Ju(f,_,p);return u.asyncQueue.enqueueAndForget(async()=>Gu(await Na(u),R)),()=>{_.Nu(),u.asyncQueue.enqueueAndForget(async()=>Qu(await Na(u),R))}}(go(o),c,s,i)}function vc(t,e){return function(r,s){const i=new Un;return r.asyncQueue.enqueueAndForget(async()=>Jb(await cR(r),s,i)),i.promise}(go(t),e)}function q_(t,e,n){const r=n.docs.get(e._key),s=new hh(t);return new Gr(t,s,e._key,r,new vi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class AR{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=yo(e)}set(e,n,r){this._verifyNotCommitted();const s=cl(e,this._firestore),i=uh(s.converter,n,r),o=th(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,qt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=cl(e,this._firestore);let o;return o=typeof(n=et(n))=="string"||n instanceof _o?O_(this._dataReader,"WriteBatch.update",i._key,n,r,s):D_(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,qt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=cl(e,this._firestore);return this._mutations=this._mutations.concat(new Ou(n._key,qt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new J(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function cl(t,e){if((t=et(t)).firestore!==e)throw new J(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function bR(){return new vo("deleteField")}function ms(){return new nh("serverTimestamp")}function b1(...t){return new rh("arrayUnion",t)}function RR(t){return new sh("increment",t)}/**
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
 */function lp(t){return go(t=$t(t,Wn)),new AR(t,e=>vc(t,e))}(function(e,n=!0){(function(s){qs=s})($s),Ps(new Yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Wn(new vI(r.getProvider("auth-internal")),new TI(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),mr(ud,hd,e),mr(ud,hd,"esm2020")})();function j_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SR=j_,H_=new co("auth","Firebase",j_());/**
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
 */const Oa=new Tu("@firebase/auth");function CR(t,...e){Oa.logLevel<=Ie.WARN&&Oa.warn(`Auth (${$s}): ${t}`,...e)}function ca(t,...e){Oa.logLevel<=Ie.ERROR&&Oa.error(`Auth (${$s}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw dh(t,...e)}function ln(t,...e){return dh(t,...e)}function fh(t,e,n){const r={...SR(),[e]:n};return new co("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return fh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function z_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tn(t,"argument-error"),fh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return H_.create(t,...e)}function ae(t,e,...n){if(!t)throw dh(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ca(e),new Error(e)}function Kn(t,e){t||Mn(e)}/**
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
 */function Xl(){return typeof self<"u"&&self.location?.href||""}function PR(){return up()==="http:"||up()==="https:"}function up(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function kR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PR()||Yw()||"connection"in navigator)?navigator.onLine:!0}function VR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Kw()||Jw()}get(){return kR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ph(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class W_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OR=new Eo(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Yn(t,e,n,r,s={}){return K_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=lo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return Qw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Bs(t.emulatorConfig.host)&&(u.credentials="include"),W_.fetch()(await G_(t,t.config.apiHost,n,c),u)})}async function K_(t,e,n){t._canInitEmulator=!1;const r={...NR,...e};try{const s=new MR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fh(t,f,u);tn(t,f)}}catch(s){if(s instanceof Qn)throw s;tn(t,"network-request-failed",{message:String(s)})}}async function wo(t,e,n,r,s={}){const i=await Yn(t,e,n,r,s);return"mfaPendingCredential"in i&&tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function G_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ph(t.config,s):`${t.config.apiScheme}://${s}`;return DR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function xR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),OR.get())})}}function Qo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function hp(t){return t!==void 0&&t.enterprise!==void 0}class LR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function FR(t,e){return Yn(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
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
 */async function UR(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function xa(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BR(t,e=!1){const n=et(t),r=await n.getIdToken(e),s=mh(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Mi(ll(s.auth_time)),issuedAtTime:Mi(ll(s.iat)),expirationTime:Mi(ll(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ll(t){return Number(t)*1e3}function mh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=eg(n);return s?JSON.parse(s):(ca("Failed to decode base64 JWT payload"),null)}catch(s){return ca("Caught error parsing JWT payload as JSON",s?.toString()),null}}function fp(t){const e=mh(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&$R(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $R({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ma(t){const e=t.auth,n=await t.getIdToken(),r=await Ls(t,xa(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Q_(s.providerUserInfo):[],o=HR(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Zl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function jR(t){const e=et(t);await Ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Q_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function zR(t,e){const n=await K_(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await G_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Bs(t.emulatorConfig.host)&&(l.credentials="include"),W_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WR(t,e){return Yn(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
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
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=fp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new bs;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function nr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new qR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BR(this,e)}reload(){return jR(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Ls(this,UR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:R,stsTokenManager:V}=n;ae(p&&V,e,"internal-error");const D=bs.fromJSON(this.name,V);ae(typeof p=="string",e,"internal-error"),nr(r,e.name),nr(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof _=="boolean",e,"internal-error"),nr(i,e.name),nr(o,e.name),nr(c,e.name),nr(l,e.name),nr(u,e.name),nr(f,e.name);const j=new on({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:u,lastLoginAt:f});return R&&Array.isArray(R)&&(j.providerData=R.map(q=>({...q}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new bs;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ma(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Q_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new bs;c.updateFromIdToken(r);const l=new on({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const dp=new Map;function Ln(t){Kn(t instanceof Function,"Expected a class definition");let e=dp.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dp.set(t,e),e)}/**
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
 */class Y_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Y_.type="NONE";const pp=Y_;/**
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
 */function la(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=la(this.userKey,s.apiKey,i),this.fullPersistenceKey=la("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xa(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(Ln(pp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(pp);const o=la(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await xa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await on._fromGetAccountInfoResponse(e,m,f)}else p=on._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Rs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Rs(i,e,r))}}/**
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
 */function mp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ey(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ny(e))return"Blackberry";if(ry(e))return"Webos";if(X_(e))return"Safari";if((e.includes("chrome/")||Z_(e))&&!e.includes("edge/"))return"Chrome";if(ty(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function J_(t=Pt()){return/firefox\//i.test(t)}function X_(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z_(t=Pt()){return/crios\//i.test(t)}function ey(t=Pt()){return/iemobile/i.test(t)}function ty(t=Pt()){return/android/i.test(t)}function ny(t=Pt()){return/blackberry/i.test(t)}function ry(t=Pt()){return/webos/i.test(t)}function gh(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KR(t=Pt()){return gh(t)&&!!window.navigator?.standalone}function GR(){return Xw()&&document.documentMode===10}function sy(t=Pt()){return gh(t)||ty(t)||ry(t)||ny(t)||/windows phone/i.test(t)||ey(t)}/**
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
 */function iy(t,e=[]){let n;switch(t){case"Browser":n=mp(Pt());break;case"Worker":n=`${mp(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
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
 */class QR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function YR(t,e={}){return Yn(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const JR=6;class XR{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??JR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ZR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gp(this),this.idTokenSubscription=new gp(this),this.beforeStateQueue=new QR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xa(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ma(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(In(this));const n=e?et(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YR(this),n=new XR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await WR(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&CR(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Cn(t){return et(t)}class gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=oT(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eS(t){Ec=t}function oy(t){return Ec.loadJS(t)}function tS(){return Ec.recaptchaEnterpriseScript}function nS(){return Ec.gapiScript}function rS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class sS{constructor(){this.enterprise=new iS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class iS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const oS="recaptcha-enterprise",ay="NO_RECAPTCHA";class aS{constructor(e){this.type=oS,this.auth=Cn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{FR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new LR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;hp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ay)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&hp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tS();l.length!==0&&(l+=c),oy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function _p(t,e,n,r=!1,s=!1){const i=new aS(t);let o;if(s)o=ay;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function eu(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _p(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _p(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function cS(t,e){const n=Au(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Tr(i,e??{}))return s;tn(s,"already-initialized")}return n.initialize({options:e})}function lS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ln);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function uS(t,e,n){const r=Cn(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cy(e),{host:o,port:c}=hS(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Tr(u,r.config.emulator)&&Tr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Bs(o)?(sg(`${i}//${o}${l}`),ig("Auth",!0)):fS()}function cy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hS(t){const e=cy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yp(o)}}}function yp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _h{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function dS(t,e){return Yn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function pS(t,e){return wo(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
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
 */async function mS(t,e){return wo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function gS(t,e){return wo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
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
 */class eo extends _h{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new eo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eu(e,n,"signInWithPassword",pS);case"emailLink":return mS(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eu(e,r,"signUpPassword",dS);case"emailLink":return gS(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ss(t,e){return wo(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
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
 */const _S="http://localhost";class Zr extends _h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:_S,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
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
 */function yS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vS(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,r=pi(mi(t)).deep_link_id;return(r?pi(mi(r)).link:null)||r||n||e||t}class yh{constructor(e){const n=pi(mi(e)),r=n.apiKey??null,s=n.oobCode??null,i=yS(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=vS(e);try{return new yh(n)}catch{return null}}}/**
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
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return eo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yh.parseLink(n);return ae(r,"argument-error"),eo._fromEmailAndCode(e,r.code,r.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class To extends wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xt extends To{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
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
 */class ar extends To{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
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
 */class cr extends To{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
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
 */class lr extends To{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function ES(t,e){return wo(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
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
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),o=vp(r);return new es({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vp(r);return new es({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class La extends Qn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new La(e,n,r,s)}}function ly(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,i,e,r):i})}async function wS(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return es._forOperation(t,"link",r)}/**
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
 */async function TS(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(In(r));const s="reauthenticate";try{const i=await Ls(t,ly(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=mh(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),es._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
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
 */async function uy(t,e,n=!1){if(Ft(t.app))return Promise.reject(In(t));const r="signIn",s=await ly(t,r,e),i=await es._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function IS(t,e){return uy(Cn(t),e)}/**
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
 */async function hy(t){const e=Cn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AS(t,e,n){if(Ft(t.app))return Promise.reject(In(t));const r=Cn(t),o=await eu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ES).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hy(t),l}),c=await es._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function bS(t,e,n){return Ft(t.app)?Promise.reject(In(t)):IS(et(t),Qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hy(t),r})}/**
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
 */async function RS(t,e){return Yn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function SS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=et(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ls(r,RS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function CS(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function PS(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function Ys(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function kS(t){return et(t).signOut()}const Fa="__sak";/**
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
 */class fy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VS=1e3,NS=10;class dy extends fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);GR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,NS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const DS=dy;/**
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
 */class py extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}py.type="SESSION";const my=py;/**
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
 */function OS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await OS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tc.receivers=[];/**
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
 */function vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=vh("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function An(){return window}function MS(t){An().location.href=t}/**
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
 */function gy(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function LS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FS(){return navigator?.serviceWorker?.controller||null}function US(){return gy()?self:null}/**
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
 */const _y="firebaseLocalStorageDb",BS=1,Ua="firebaseLocalStorage",yy="fbase_key";class Io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ic(t,e){return t.transaction([Ua],e?"readwrite":"readonly").objectStore(Ua)}function $S(){const t=indexedDB.deleteDatabase(_y);return new Io(t).toPromise()}function tu(){const t=indexedDB.open(_y,BS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ua,{keyPath:yy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ua)?e(r):(r.close(),await $S(),e(await tu()))})})}async function Ep(t,e,n){const r=Ic(t,!0).put({[yy]:e,value:n});return new Io(r).toPromise()}async function qS(t,e){const n=Ic(t,!1).get(e),r=await new Io(n).toPromise();return r===void 0?null:r.value}function wp(t,e){const n=Ic(t,!0).delete(e);return new Io(n).toPromise()}const jS=800,HS=3;class vy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tc._getInstance(US()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await LS(),!this.activeServiceWorker)return;this.sender=new xS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tu();return await Ep(e,Fa,"1"),await wp(e,Fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ic(s,!1).getAll();return new Io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vy.type="LOCAL";const zS=vy;new Eo(3e4,6e4);/**
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
 */function Eh(t,e){return e?Ln(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wh extends _h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WS(t){return uy(t.auth,new wh(t),t.bypassAuthState)}function KS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),TS(n,new wh(t),t.bypassAuthState)}async function GS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),wS(n,new wh(t),t.bypassAuthState)}/**
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
 */class Ey{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WS;case"linkViaPopup":case"linkViaRedirect":return GS;case"reauthViaPopup":case"reauthViaRedirect":return KS;default:tn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QS=new Eo(2e3,1e4);async function wy(t,e,n){if(Ft(t.app))return Promise.reject(ln(t,"operation-not-supported-in-this-environment"));const r=Cn(t);z_(t,e,wc);const s=Eh(r,n);return new zr(r,"signInViaPopup",e,s).executeNotNull()}class zr extends Ey{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QS.get())};e()}}zr.currentPopupAction=null;/**
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
 */const YS="pendingRedirect",ua=new Map;class JS extends Ey{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ua.get(this.auth._key());if(!e){try{const r=await XS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ua.set(this.auth._key(),e)}return this.bypassAuthState||ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XS(t,e){const n=Iy(e),r=Ty(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function ZS(t,e){return Ty(t)._set(Iy(e),"true")}function eC(t,e){ua.set(t._key(),e)}function Ty(t){return Ln(t._redirectPersistence)}function Iy(t){return la(YS,t.config.apiKey,t.name)}/**
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
 */function Th(t,e,n){return tC(t,e,n)}async function tC(t,e,n){if(Ft(t.app))return Promise.reject(In(t));const r=Cn(t);z_(t,e,wc),await r._initializationPromise;const s=Eh(r,n);return await ZS(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Ih(t,e){return await Cn(t)._initializationPromise,Ay(t,e,!1)}async function Ay(t,e,n=!1){if(Ft(t.app))return Promise.reject(In(t));const r=Cn(t),s=Eh(r,e),o=await new JS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nC=600*1e3;class rC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!by(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ln(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tp(e))}saveEventToCache(e){this.cachedEventUids.add(Tp(e)),this.lastProcessedEventTime=Date.now()}}function Tp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function by({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function sC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return by(t);default:return!1}}/**
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
 */async function iC(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
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
 */const oC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aC=/^https?/;async function cC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iC(t);for(const n of e)try{if(lC(n))return}catch{}tn(t,"unauthorized-domain")}function lC(t){const e=Xl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aC.test(n))return!1;if(oC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const uC=new Eo(3e4,6e4);function Ip(){const t=An().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hC(t){return new Promise((e,n)=>{function r(){Ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ip(),n(ln(t,"network-request-failed"))},timeout:uC.get()})}if(An().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(An().gapi?.load)r();else{const s=rS("iframefcb");return An()[s]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},oy(`${nS()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ha=null,e})}let ha=null;function fC(t){return ha=ha||hC(t),ha}/**
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
 */const dC=new Eo(5e3,15e3),pC="__/auth/iframe",mC="emulator/auth/iframe",gC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yC(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ph(e,mC):`https://${t.config.authDomain}/${pC}`,r={apiKey:e.apiKey,appName:t.name,v:$s},s=_C.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lo(r).slice(1)}`}async function vC(t){const e=await fC(t),n=An().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:yC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),c=An().setTimeout(()=>{i(o)},dC.get());function l(){An().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const EC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wC=500,TC=600,IC="_blank",AC="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bC(t,e,n,r=wC,s=TC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...EC,width:r.toString(),height:s.toString(),top:i,left:o},u=Pt().toLowerCase();n&&(c=Z_(u)?IC:n),J_(u)&&(e=e||AC,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,R])=>`${m}${_}=${R},`,"");if(KR(u)&&c!=="_self")return RC(e||"",c),new Ap(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Ap(p)}function RC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SC="__/auth/handler",CC="emulator/auth/handler",PC=encodeURIComponent("fac");async function bp(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:s};if(e instanceof wc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof To){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${PC}=${encodeURIComponent(l)}`:"";return`${kC(t)}?${lo(c).slice(1)}${u}`}function kC({config:t}){return t.emulator?ph(t,CC):`https://${t.authDomain}/${SC}`}/**
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
 */const ul="webStorageSupport";class VC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=Ay,this._overrideRedirectResult=eC}async _openPopup(e,n,r,s){Kn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await bp(e,n,r,Xl(),s);return bC(e,i,vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bp(e,n,r,Xl(),s);return MS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vC(e),r=new rC(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ul,{type:ul},s=>{const i=s?.[0]?.[ul];i!==void 0&&n(!!i),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sy()||X_()||gh()}}const NC=VC;var Rp="@firebase/auth",Sp="1.11.0";/**
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
 */class DC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xC(t){Ps(new Yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iy(t)},u=new ZR(r,s,i,l);return lS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new Yr("auth-internal",e=>{const n=Cn(e.getProvider("auth").getImmediate());return(r=>new DC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mr(Rp,Sp,OC(t)),mr(Rp,Sp,"esm2020")}/**
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
 */const MC=300,LC=rg("authIdTokenMaxAge")||MC;let Cp=null;const FC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LC)return;const s=n?.token;Cp!==s&&(Cp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function UC(t=lg()){const e=Au(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cS(t,{popupRedirectResolver:NC,persistence:[zS,DS,my]}),r=rg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=FC(i.toString());PS(n,o,()=>o(n.currentUser)),CS(n,c=>o(c))}}const s=tg("auth");return s&&uS(n,`http://${s}`),n}function BC(){return document.getElementsByTagName("head")?.[0]??document}eS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",BC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xC("Browser");var $C="firebase",qC="12.0.0";/**
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
 */mr($C,qC,"app");const jC={apiKey:"AIzaSyB9_6M0plpGAegqzVp1uOouqAVUbry9sqM",authDomain:"howwell-game.firebaseapp.com",projectId:"howwell-game",storageBucket:"howwell-game.firebasestorage.app",messagingSenderId:"26663870324",appId:"1:26663870324:web:d2655b10ba2d62f9701621"},Ry=cg(jC),nt=UC(Ry),Te=fR(Ry);new Xt;const Sy=we(null),HC=Ys(nt,t=>{Sy.value=t});Es(()=>HC());function zC(){return{user:Sy}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ps=typeof document<"u";function Cy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function WC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cy(t.default)}const Ne=Object.assign;function hl(t,e){const n={};for(const r in e){const s=e[r];n[r]=hn(s)?s.map(t):t(s)}return n}const Li=()=>{},hn=Array.isArray,Py=/#/g,KC=/&/g,GC=/\//g,QC=/=/g,YC=/\?/g,ky=/\+/g,JC=/%5B/g,XC=/%5D/g,Vy=/%5E/g,ZC=/%60/g,Ny=/%7B/g,e0=/%7C/g,Dy=/%7D/g,t0=/%20/g;function Ah(t){return encodeURI(""+t).replace(e0,"|").replace(JC,"[").replace(XC,"]")}function n0(t){return Ah(t).replace(Ny,"{").replace(Dy,"}").replace(Vy,"^")}function nu(t){return Ah(t).replace(ky,"%2B").replace(t0,"+").replace(Py,"%23").replace(KC,"%26").replace(ZC,"`").replace(Ny,"{").replace(Dy,"}").replace(Vy,"^")}function r0(t){return nu(t).replace(QC,"%3D")}function s0(t){return Ah(t).replace(Py,"%23").replace(YC,"%3F")}function i0(t){return t==null?"":s0(t).replace(GC,"%2F")}function to(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const o0=/\/$/,a0=t=>t.replace(o0,"");function fl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=h0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:to(o)}}function c0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function l0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fs(e.matched[r],n.matched[s])&&Oy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Oy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!u0(t[n],e[n]))return!1;return!0}function u0(t,e){return hn(t)?kp(t,e):hn(e)?kp(e,t):t===e}function kp(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function h0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var no;(function(t){t.pop="pop",t.push="push"})(no||(no={}));var Fi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fi||(Fi={}));function f0(t){if(!t)if(ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),a0(t)}const d0=/^[^#]+#/;function p0(t,e){return t.replace(d0,"#")+e}function m0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ac=()=>({left:window.scrollX,top:window.scrollY});function g0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=m0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vp(t,e){return(history.state?history.state.position-e:-1)+t}const ru=new Map;function _0(t,e){ru.set(t,e)}function y0(t){const e=ru.get(t);return ru.delete(t),e}let v0=()=>location.protocol+"//"+location.host;function xy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Pp(l,"")}return Pp(n,t)+r+s}function E0(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=xy(t,location),R=n.value,V=e.value;let D=0;if(m){if(n.value=_,e.value=m,o&&o===R){o=null;return}D=V?m.position-V.position:0}else r(_);s.forEach(j=>{j(n.value,R,{delta:D,type:no.pop,direction:D?D>0?Fi.forward:Fi.back:Fi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Ne({},m.state,{scroll:Ac()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Np(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ac():null}}function w0(t){const{history:e,location:n}=window,r={value:xy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:v0()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=Ne({},e.state,Np(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Ne({},s.value,e.state,{forward:l,scroll:Ac()});i(f.current,f,!0);const p=Ne({},Np(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function T0(t){t=f0(t);const e=w0(t),n=E0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:p0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function I0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),T0(t)}function A0(t){return typeof t=="string"||t&&typeof t=="object"}function My(t){return typeof t=="string"||typeof t=="symbol"}const Ly=Symbol("");var Dp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dp||(Dp={}));function Us(t,e){return Ne(new Error,{type:t,[Ly]:!0},e)}function Nn(t,e){return t instanceof Error&&Ly in t&&(e==null||!!(t.type&e))}const Op="[^/]+?",b0={sensitive:!1,strict:!1,start:!0,end:!0},R0=/[.+*?^${}()[\]/\\]/g;function S0(t,e){const n=Ne({},b0,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(R0,"\\$&"),_+=40;else if(m.type===1){const{value:R,repeatable:V,optional:D,regexp:j}=m;i.push({name:R,repeatable:V,optional:D});const q=j||Op;if(q!==Op){_+=10;try{new RegExp(`(${q})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${q}): `+O.message)}}let x=V?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;p||(x=D&&u.length<2?`(?:/${x})`:"/"+x),D&&(x+="?"),s+=x,_+=20,D&&(_+=-8),V&&(_+=-20),q===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",R=i[m-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:V,optional:D}=_,j=R in u?u[R]:"";if(hn(j)&&!V)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const q=hn(j)?j.join("/"):j;if(!q)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=q}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function C0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Fy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=C0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xp(r))return 1;if(xp(s))return-1}return s.length-r.length}function xp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const P0={type:0,value:""},k0=/[a-zA-Z0-9_]/;function V0(t){if(!t)return[[]];if(t==="/")return[[P0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:k0.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function N0(t,e,n){const r=S0(V0(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function D0(t,e){const n=[],r=new Map;e=Up({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const R=!_,V=Lp(p);V.aliasOf=_&&_.record;const D=Up(e,p),j=[V];if("alias"in p){const O=typeof p.alias=="string"?[p.alias]:p.alias;for(const G of O)j.push(Lp(Ne({},V,{components:_?_.record.components:V.components,path:G,aliasOf:_?_.record:V})))}let q,x;for(const O of j){const{path:G}=O;if(m&&G[0]!=="/"){const re=m.record.path,I=re[re.length-1]==="/"?"":"/";O.path=m.record.path+(G&&I+G)}if(q=N0(O,m,D),_?_.alias.push(q):(x=x||q,x!==q&&x.alias.push(q),R&&p.name&&!Fp(q)&&o(p.name)),Uy(q)&&l(q),V.children){const re=V.children;for(let I=0;I<re.length;I++)i(re[I],q,_&&_.children[I])}_=_||q}return x?()=>{o(x)}:Li}function o(p){if(My(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=M0(p,n);n.splice(m,0,p),p.record.name&&!Fp(p)&&r.set(p.record.name,p)}function u(p,m){let _,R={},V,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Us(1,{location:p});D=_.record.name,R=Ne(Mp(m.params,_.keys.filter(x=>!x.optional).concat(_.parent?_.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),p.params&&Mp(p.params,_.keys.map(x=>x.name))),V=_.stringify(R)}else if(p.path!=null)V=p.path,_=n.find(x=>x.re.test(V)),_&&(R=_.parse(V),D=_.record.name);else{if(_=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!_)throw Us(1,{location:p,currentLocation:m});D=_.record.name,R=Ne({},m.params,p.params),V=_.stringify(R)}const j=[];let q=_;for(;q;)j.unshift(q.record),q=q.parent;return{name:D,path:V,params:R,matched:j,meta:x0(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Mp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Lp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:O0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function O0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Fp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function x0(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function Up(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function M0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Fy(t,e[i])<0?r=i:n=i+1}const s=L0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function L0(t){let e=t;for(;e=e.parent;)if(Uy(e)&&Fy(t,e)===0)return e}function Uy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function F0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ky," "),o=i.indexOf("="),c=to(o<0?i:i.slice(0,o)),l=o<0?null:to(i.slice(o+1));if(c in e){let u=e[c];hn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Bp(t){let e="";for(let n in t){const r=t[n];if(n=r0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(i=>i&&nu(i)):[r&&nu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function U0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const B0=Symbol(""),$p=Symbol(""),bc=Symbol(""),bh=Symbol(""),su=Symbol("");function fi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function or(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Us(4,{from:n,to:e})):m instanceof Error?l(m):A0(m)?l(Us(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function dl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Cy(l)){const f=(l.__vccOpts||l)[e];f&&i.push(or(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=WC(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&or(_,n,r,o,c,s)()}))}}return i}function qp(t){const e=cn(bc),n=cn(bh),r=Ot(()=>{const l=Fn(t.to);return e.resolve(l)}),s=Ot(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Fs.bind(null,f));if(m>-1)return m;const _=jp(l[u-2]);return u>1&&jp(f)===_&&p[p.length-1].path!==_?p.findIndex(Fs.bind(null,l[u-2])):m}),i=Ot(()=>s.value>-1&&z0(n.params,r.value.params)),o=Ot(()=>s.value>-1&&s.value===n.matched.length-1&&Oy(n.params,r.value.params));function c(l={}){if(H0(l)){const u=e[Fn(t.replace)?"replace":"push"](Fn(t.to)).catch(Li);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ot(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function $0(t){return t.length===1?t[0]:t}const q0=Rm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:qp,setup(t,{slots:e}){const n=Ka(qp(t)),{options:r}=cn(bc),s=Ot(()=>({[Hp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&$0(e.default(n));return t.custom?i:Ym("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),j0=q0;function H0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function z0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hp=(t,e,n)=>t??e??n,W0=Rm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=cn(su),s=Ot(()=>t.route||r.value),i=cn($p,0),o=Ot(()=>{let u=Fn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Ot(()=>s.value.matched[o.value]);Xo($p,Ot(()=>o.value+1)),Xo(B0,c),Xo(su,s);const l=we();return Ci(()=>[l.value,c.value,t.name],([u,f,p],[m,_,R])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Fs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return zp(n.default,{Component:m,route:u});const _=p.props[f],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,D=Ym(m,Ne({},R,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return zp(n.default,{Component:D,route:u})||D}}});function zp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const K0=W0;function G0(t){const e=D0(t.routes,t),n=t.parseQuery||F0,r=t.stringifyQuery||Bp,s=t.history,i=fi(),o=fi(),c=fi(),l=Hv(rr);let u=rr;ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=hl.bind(null,L=>""+L),p=hl.bind(null,i0),m=hl.bind(null,to);function _(L,Z){let X,te;return My(L)?(X=e.getRecordMatcher(L),te=Z):te=L,e.addRoute(te,X)}function R(L){const Z=e.getRecordMatcher(L);Z&&e.removeRoute(Z)}function V(){return e.getRoutes().map(L=>L.record)}function D(L){return!!e.getRecordMatcher(L)}function j(L,Z){if(Z=Ne({},Z||l.value),typeof L=="string"){const S=fl(n,L,Z.path),F=e.resolve({path:S.path},Z),$=s.createHref(S.fullPath);return Ne(S,F,{params:m(F.params),hash:to(S.hash),redirectedFrom:void 0,href:$})}let X;if(L.path!=null)X=Ne({},L,{path:fl(n,L.path,Z.path).path});else{const S=Ne({},L.params);for(const F in S)S[F]==null&&delete S[F];X=Ne({},L,{params:p(S)}),Z.params=p(Z.params)}const te=e.resolve(X,Z),ke=L.hash||"";te.params=f(m(te.params));const E=c0(r,Ne({},L,{hash:n0(ke),path:te.path})),T=s.createHref(E);return Ne({fullPath:E,hash:ke,query:r===Bp?U0(L.query):L.query||{}},te,{redirectedFrom:void 0,href:T})}function q(L){return typeof L=="string"?fl(n,L,l.value.path):Ne({},L)}function x(L,Z){if(u!==L)return Us(8,{from:Z,to:L})}function O(L){return I(L)}function G(L){return O(Ne(q(L),{replace:!0}))}function re(L){const Z=L.matched[L.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let te=typeof X=="function"?X(L):X;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=q(te):{path:te},te.params={}),Ne({query:L.query,hash:L.hash,params:te.path!=null?{}:L.params},te)}}function I(L,Z){const X=u=j(L),te=l.value,ke=L.state,E=L.force,T=L.replace===!0,S=re(X);if(S)return I(Ne(q(S),{state:typeof S=="object"?Ne({},ke,S.state):ke,force:E,replace:T}),Z||X);const F=X;F.redirectedFrom=Z;let $;return!E&&l0(r,te,X)&&($=Us(16,{to:F,from:te}),Ue(te,te,!0,!1)),($?Promise.resolve($):A(F,te)).catch(U=>Nn(U)?Nn(U,2)?U:Fe(U):fe(U,F,te)).then(U=>{if(U){if(Nn(U,2))return I(Ne({replace:T},q(U.to),{state:typeof U.to=="object"?Ne({},ke,U.to.state):ke,force:E}),Z||F)}else U=C(F,te,!0,T,ke);return b(F,te,U),U})}function y(L,Z){const X=x(L,Z);return X?Promise.reject(X):Promise.resolve()}function w(L){const Z=jt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(L):L()}function A(L,Z){let X;const[te,ke,E]=Q0(L,Z);X=dl(te.reverse(),"beforeRouteLeave",L,Z);for(const S of te)S.leaveGuards.forEach(F=>{X.push(or(F,L,Z))});const T=y.bind(null,L,Z);return X.push(T),yt(X).then(()=>{X=[];for(const S of i.list())X.push(or(S,L,Z));return X.push(T),yt(X)}).then(()=>{X=dl(ke,"beforeRouteUpdate",L,Z);for(const S of ke)S.updateGuards.forEach(F=>{X.push(or(F,L,Z))});return X.push(T),yt(X)}).then(()=>{X=[];for(const S of E)if(S.beforeEnter)if(hn(S.beforeEnter))for(const F of S.beforeEnter)X.push(or(F,L,Z));else X.push(or(S.beforeEnter,L,Z));return X.push(T),yt(X)}).then(()=>(L.matched.forEach(S=>S.enterCallbacks={}),X=dl(E,"beforeRouteEnter",L,Z,w),X.push(T),yt(X))).then(()=>{X=[];for(const S of o.list())X.push(or(S,L,Z));return X.push(T),yt(X)}).catch(S=>Nn(S,8)?S:Promise.reject(S))}function b(L,Z,X){c.list().forEach(te=>w(()=>te(L,Z,X)))}function C(L,Z,X,te,ke){const E=x(L,Z);if(E)return E;const T=Z===rr,S=ps?history.state:{};X&&(te||T?s.replace(L.fullPath,Ne({scroll:T&&S&&S.scroll},ke)):s.push(L.fullPath,ke)),l.value=L,Ue(L,Z,X,T),Fe()}let v;function me(){v||(v=s.listen((L,Z,X)=>{if(!xt.listening)return;const te=j(L),ke=re(te);if(ke){I(Ne(ke,{replace:!0,force:!0}),te).catch(Li);return}u=te;const E=l.value;ps&&_0(Vp(E.fullPath,X.delta),Ac()),A(te,E).catch(T=>Nn(T,12)?T:Nn(T,2)?(I(Ne(q(T.to),{force:!0}),te).then(S=>{Nn(S,20)&&!X.delta&&X.type===no.pop&&s.go(-1,!1)}).catch(Li),Promise.reject()):(X.delta&&s.go(-X.delta,!1),fe(T,te,E))).then(T=>{T=T||C(te,E,!1),T&&(X.delta&&!Nn(T,8)?s.go(-X.delta,!1):X.type===no.pop&&Nn(T,20)&&s.go(-1,!1)),b(te,E,T)}).catch(Li)}))}let Pe=fi(),Re=fi(),Ee;function fe(L,Z,X){Fe(L);const te=Re.list();return te.length?te.forEach(ke=>ke(L,Z,X)):console.error(L),Promise.reject(L)}function Ge(){return Ee&&l.value!==rr?Promise.resolve():new Promise((L,Z)=>{Pe.add([L,Z])})}function Fe(L){return Ee||(Ee=!L,me(),Pe.list().forEach(([Z,X])=>L?X(L):Z()),Pe.reset()),L}function Ue(L,Z,X,te){const{scrollBehavior:ke}=t;if(!ps||!ke)return Promise.resolve();const E=!X&&y0(Vp(L.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return Qa().then(()=>ke(L,Z,E)).then(T=>T&&g0(T)).catch(T=>fe(T,L,Z))}const Me=L=>s.go(L);let Le;const jt=new Set,xt={currentRoute:l,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:V,resolve:j,options:t,push:O,replace:G,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Re.add,isReady:Ge,install(L){const Z=this;L.component("RouterLink",j0),L.component("RouterView",K0),L.config.globalProperties.$router=Z,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Fn(l)}),ps&&!Le&&l.value===rr&&(Le=!0,O(s.location).catch(ke=>{}));const X={};for(const ke in rr)Object.defineProperty(X,ke,{get:()=>l.value[ke],enumerable:!0});L.provide(bc,Z),L.provide(bh,dm(X)),L.provide(su,l);const te=L.unmount;jt.add(L),L.unmount=function(){jt.delete(L),jt.size<1&&(u=rr,v&&v(),v=null,l.value=rr,Le=!1,Ee=!1),te()}}};function yt(L){return L.reduce((Z,X)=>Z.then(()=>w(X)),Promise.resolve())}return xt}function Q0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Fs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Fs(u,l))||s.push(l))}return[n,r,s]}function Rc(){return cn(bc)}function R1(t){return cn(bh)}const pl=we(!1),Jn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Y0={class:"navbar"},J0={class:"navbar-container"},X0={key:0,class:"dropdown-content"},Z0={key:0,class:"highlight"},eP=["disabled"],tP={key:0,class:"reward-dropdown"},nP={__name:"Navbar",setup(t){const{user:e}=zC(),n=Rc(),r=we(!1),s=we(null),i=we(!1),o=we(!1),c=we(null),l=we(null);we(!1);const u=we(null),f=we(null),p=()=>{i.value=!i.value},m=()=>{i.value=!1};mn(async()=>{if(e.value){const v=await Bn($e(Te,"users",e.value.uid));v.exists()&&(l.value=v.data().role)}});const _=()=>{o.value=!o.value},R=async()=>{await kS(nt),m(),n.push("/")},V=we([]),D=we(null),j=we(null);mn(()=>{const v=_n(Te,"users");Zi(v,async me=>{const Pe=me.docs.map(Fe=>{const Ue=Fe.data(),Me=Ue.correct*10-Ue.timeSpent/60,Le=Math.round(Me),jt=Math.floor((Ue.timeSpent||0)/60),xt=(Ue.timeSpent||0)%60,yt=`${jt}:${xt.toString().padStart(2,"0")}`;return{id:Fe.id,name:Ue.name||"Unknown",score:Le,correct:Ue.correct||0,timeSpent:yt}});Pe.sort((Fe,Ue)=>Ue.score-Fe.score||Ue.correct-Fe.correct||Fe.timeSpent.localeCompare(Ue.timeSpent));const Re=Pe.slice(0,10);V.value=Re;const Ee=new Set(Re.map(Fe=>Fe.id)),fe=lp(Te);me.docs.forEach(Fe=>{const Ue=Fe.id,Me=Fe.data(),Le=$e(Te,"users",Ue);if(Ee.has(Ue)){const jt=Re.findIndex(xt=>xt.id===Ue)+1;Me.rank!==jt&&fe.update(Le,{rank:jt})}else Me.rank!==void 0&&fe.update(Le,{rank:bR()})}),await fe.commit();const Ge=Pe.find(Fe=>Fe.id===e.value?.uid);Ge?(j.value=Pe.findIndex(Fe=>Fe.id===Ge.id)+1,D.value={...Ge,score:Math.round(Ge.score),timeSpent:Ge.timeSpent}):(j.value=null,D.value=null)})});const q=v=>{c.value&&!c.value.contains(v.target)&&(o.value=!1)};mn(()=>{document.addEventListener("click",q)}),Es(()=>{document.removeEventListener("click",q)});const x=we(!1),O=we(null),G=async()=>{const v=await Bn($e(Te,"settings","resetMeta"));if(v.exists()){O.value=v.data().lastReset;const me=Date.now(),Pe=O.value instanceof We?O.value.toMillis():O.value,Re=10080*60*1e3;x.value=me-Pe<Re}};mn(()=>{G()});const re=async()=>{if(!x.value)try{const v=_n(Te,"users"),me=await xi(v),Pe=lp(Te);me.forEach(fe=>{const Ge=$e(Te,"users",fe.id);Pe.update(Ge,{balance:0})});const Re=Hr(v,As("rank","==",1));(await xi(Re)).forEach(fe=>{const Ge=$e(Te,"users",fe.id);Pe.update(Ge,{balance:20})}),me.forEach(fe=>{const Ge=$e(Te,"users",fe.id);Pe.update(Ge,{correct:0,question:0,timeSpent:0,questionNo:[]})}),await Pe.commit(),await yr($e(Te,"settings","resetMeta"),{lastReset:ms()}),x.value=!0,alert("Reset complete! All balances cleared, winner credited, and stats reset.")}catch(v){console.error("Error during reset:",v),alert("Error occurred during reset. Check console.")}},I=Ot(()=>x.value?"reset-btn-blue":"reset-btn-red");Ci(e,async v=>{if(v){const me=await Bn($e(Te,"users",v.uid));me.exists()&&(l.value=me.data().role)}else l.value=null},{immediate:!0});let y=null;const w=v=>{const me=$e(Te,"users",v);y=Zi(me,Pe=>{Pe.exists()?u.value=Pe.data().balance||0:u.value=0})};mn(()=>{Ys(nt,v=>{v&&(f.value=v.uid,w(v.uid))})}),Es(()=>{y&&y()});const A=()=>{r.value=!r.value},b=()=>{r.value=!1},C=v=>{s.value&&!s.value.contains(v.target)&&b()};return mn(()=>{document.addEventListener("click",C)}),Es(()=>{document.removeEventListener("click",C)}),(v,me)=>{const Pe=Er("router-link");return he(),ve("nav",Y0,[k("div",J0,[je(Pe,{to:"/",class:"logo"},{default:zt(()=>me[0]||(me[0]=[ye("QuizGames",-1)])),_:1,__:[0]}),k("button",{class:"menu-toggle",onClick:p},"☰"),k("div",{class:fr(["nav-links",{open:i.value}])},[je(Pe,{to:"/",onClick:m,class:"nav-link"},{default:zt(()=>me[1]||(me[1]=[ye("Home",-1)])),_:1,__:[1]}),k("div",{class:"dropdown nav-item",ref_key:"dropdownRef",ref:c},[k("button",{onClick:_,class:"nav-link dropdown-btn"}," Leaderboard ⏷ "),o.value?(he(),ve("div",X0,[k("table",null,[me[2]||(me[2]=k("thead",null,[k("tr",null,[k("th",null,"Rank"),k("th",null,"Name"),k("th",null,"Score"),k("th",null,"Correct"),k("th",null,"Time")])],-1)),k("tbody",null,[(he(!0),ve(lt,null,oo(V.value,(Re,Ee)=>(he(),ve("tr",{key:Re.id,class:fr({highlight:Re.id===Fn(e)?.uid})},[k("td",null,Ye(Ee+1),1),k("td",null,Ye(Re.name),1),k("td",null,Ye(Re.score),1),k("td",null,Ye(Re.correct),1),k("td",null,Ye(Re.timeSpent),1)],2))),128)),j.value>10?(he(),ve("tr",Z0,[k("td",null,Ye(j.value),1),k("td",null,Ye(D.value?.name),1),k("td",null,Ye(D.value?.score),1),k("td",null,Ye(D.value?.correct),1),k("td",null,Ye(D.value?.timeSpent),1)])):Bt("",!0)])])])):Bt("",!0)],512),Fn(e)?(he(),ve(lt,{key:1},[l.value==="admin"?(he(),ve("button",{key:0,disabled:x.value,class:fr(I.value),onClick:re}," Reset ",10,eP)):Bt("",!0),k("div",{class:"reward-container",ref_key:"rewardRef",ref:s},[k("button",{class:"reward-btn",onClick:A}," Reward ⏷ "),r.value?(he(),ve("div",tP,[k("p",null,[me[5]||(me[5]=k("strong",null,"Wins:",-1)),ye(" "+Ye(u.value??"Loading...")+" coins",1)])])):Bt("",!0)],512),je(Pe,{to:"/topics",onClick:m,class:"nav-link"},{default:zt(()=>me[6]||(me[6]=[ye("Topics",-1)])),_:1,__:[6]}),k("button",{class:"nav-link logout-btn",onClick:R},"Logout")],64)):(he(),ve(lt,{key:0},[je(Pe,{to:"/login",onClick:m,class:"nav-link"},{default:zt(()=>me[3]||(me[3]=[ye("Login",-1)])),_:1,__:[3]}),je(Pe,{to:"/signup",onClick:m,class:"nav-link"},{default:zt(()=>me[4]||(me[4]=[ye("Sign Up",-1)])),_:1,__:[4]})],64))],2)])])}}},rP=Jn(nP,[["__scopeId","data-v-a7fed612"]]),sP={class:"min-h-screen bg-base text-dark font-sans flex flex-col"},iP={class:"container mx-auto p-4 flex-grow"},oP={class:"footer-bar"},aP={__name:"App",setup(t){const e=Rc(),n=typeof FBInstant<"u";return Ys(nt,async r=>{if(r)e.push("/");else if(n){const s=new Xt;await Th(nt,s)}else console.log("Web user, no auto-login")}),Ih(nt).then(async r=>{if(r?.user){const s=r.user;await yr($e(Te,"users",s.uid),{uid:s.uid,name:s.displayName||"",email:s.email,photoURL:s.photoURL||"",lastLogin:new Date},{merge:!0}),e.push("/")}}).catch(r=>console.error("FB Redirect Login Error:",r)),(r,s)=>{const i=Er("router-view"),o=Er("router-link");return he(),ve("div",sP,[je(rP),k("div",iP,[je(i)]),k("footer",oP,[k("p",null,"© "+Ye(new Date().getFullYear())+" Howell. All rights reserved.",1),je(o,{to:"/policies",class:"footer-link"},{default:zt(()=>s[0]||(s[0]=[ye("Policies",-1)])),_:1,__:[0]})])])}}},cP="modulepreload",lP=function(t,e){return new URL(t,e).href},Wp={},ml=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");s=u(n.map(f=>{if(f=lP(f,r),f in Wp)return;Wp[f]=!0;const p=f.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let V=o.length-1;V>=0;V--){const D=o[V];if(D.href===f&&(!p||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${m}`))return;const R=document.createElement("link");if(R.rel=p?"stylesheet":cP,p||(R.as="script"),R.crossOrigin="",R.href=f,l&&R.setAttribute("nonce",l),document.head.appendChild(R),p)return new Promise((V,D)=>{R.addEventListener("load",V),R.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},uP={class:"modal-content"},hP={__name:"RulesModal",props:{open:Boolean},setup(t){return(e,n)=>(he(),Kr(Am,{to:"body"},[t.open?(he(),ve("div",{key:0,class:"modal-overlay",onClick:n[1]||(n[1]=ec(r=>e.$emit("close"),["self"]))},[k("div",uP,[n[2]||(n[2]=k("h2",null,"Howell – Rules, Policies & Information",-1)),n[3]||(n[3]=k("h3",null,"How to Play",-1)),n[4]||(n[4]=k("p",null,[ye(" To play Howell, users must "),k("strong",null,"sign up and log in"),ye(". Once logged in, click on "),k("strong",null,"“Topics”"),ye(" in the navigation bar. You may choose from different quiz topics, including weekly competitions. ")],-1)),n[5]||(n[5]=k("p",null,[ye(" At the end of every quiz, your "),k("strong",null,"score and performance"),ye(" are displayed. ")],-1)),n[6]||(n[6]=k("h3",null,"Rules of Competition",-1)),n[7]||(n[7]=k("p",null,[ye(" Participation in Howell competitions is free. No entry fee is required. Winners are determined based on skill — quiz performance is calculated using: "),k("strong",null,"time spent, correct answers, and number of questions completed"),ye(". ")],-1)),n[8]||(n[8]=k("ul",null,[k("li",null,"Each weekly competition features around 50 questions on a trending athlete."),k("li",null,"The leaderboard ranks players based on accuracy and speed."),k("li",null,[ye("The top leaderboard player of the week wins "),k("strong",null,"20 coins"),ye(".")]),k("li",null,[ye("Coins are withdrawable after accumulating "),k("strong",null,"100+ coins"),ye(".")]),k("li",null,"Rewards must be claimed manually via in-game chat. Howell admins will verify standings before awarding prizes.")],-1)),n[9]||(n[9]=k("h3",null,"Reward Structure",-1)),n[10]||(n[10]=k("ul",null,[k("li",null,[ye("Weekly competition winner: "),k("strong",null,"20 coins"),ye(".")]),k("li",null,[ye("Regular quizzes: earn "),k("strong",null,"2–5 coins"),ye(" per quiz, depending on frequency.")]),k("li",null,"Coins have a withdrawable value determined by app growth, set by the admin."),k("li",null,"Withdrawal methods: chat-arranged (bank transfer, PayPal, or other agreed method).")],-1)),n[11]||(n[11]=k("h3",null,"Privacy Policy",-1)),n[12]||(n[12]=k("p",null,[ye(" Howell respects your privacy. We only collect "),k("strong",null,"basic user data"),ye(" such as your name, email, or phone number. This data is used solely for: ")],-1)),n[13]||(n[13]=k("ul",null,[k("li",null,"Tracking quiz progress and scores."),k("li",null,"Managing leaderboards and competitions."),k("li",null,"Enabling communication about rewards through in-game chat.")],-1)),n[14]||(n[14]=k("p",null," We do not sell, rent, or share your personal data with third-party advertisers or external services. ",-1)),n[15]||(n[15]=k("h3",null,"User Data Handling",-1)),n[16]||(n[16]=k("p",null,[ye(" Your data is stored securely using "),k("strong",null,"Firebase Authentication and Firestore"),ye(". Only Howell administrators have access to reward verification data. Users may request data removal or account deletion at any time by contacting the developer. ")],-1)),n[17]||(n[17]=k("h3",null,"Disclaimer",-1)),n[18]||(n[18]=k("p",null,[ye(" Howell is a "),k("strong",null,"skill-based educational and entertainment quiz game"),ye(". It does not involve gambling, betting, or random draws of any kind. Rewards are provided only to verified winners and are not guaranteed for every participant. ")],-1)),n[19]||(n[19]=k("p",null," Howell reserves the right to adjust competition details, rules, and rewards at its discretion. ",-1)),n[20]||(n[20]=k("h3",null,"Contact Information",-1)),n[21]||(n[21]=k("p",null,[ye(" For support, questions, or data requests, please contact: "),k("br"),k("strong",null,"Developer:"),ye(" Ebuka Jullian "),k("br"),k("strong",null,"Email:"),ye(),k("a",{href:"mailto:ebukaolisaemeka@yahoo.com"},"ebukaolisaemeka@yahoo.com")],-1)),k("button",{class:"close-btn",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"Close")])])):Bt("",!0)]))}},fP=Jn(hP,[["__scopeId","data-v-ab2411c0"]]),dP={class:"admin-chat-list"},pP={key:0},mP=["onClick"],gP={class:"user-name"},_P={key:0,class:"unread-badge"},yP={key:1},vP={__name:"AdminChatList",emits:["chat-selected"],setup(t,{emit:e}){const n=e,r=we([]);mn(()=>{const i=nt.currentUser.uid,o=Hr(_n(Te,"chats"),As("participants","array-contains",i));Zi(o,async c=>{const l=[];for(const u of c.docs){const f=u.data(),p=f.participants.find(m=>m!==i);if(p){const m=await Bn($e(Te,"users",p)),_=m.exists()?m.data():{};l.push({id:p,chatId:u.id,..._,unreadCount:f.unread?.[i]||0})}}r.value=l})});async function s(i,o){const c=nt.currentUser.uid;o&&(await Ei($e(Te,"chats",o),{[`unread.${c}`]:0}),n("chat-selected",o))}return(i,o)=>(he(),ve("div",dP,[o[0]||(o[0]=k("h2",null,"All Chats",-1)),r.value.length?(he(),ve("ul",pP,[(he(!0),ve(lt,null,oo(r.value,c=>(he(),ve("li",{key:c.id,onClick:l=>s(c.id,c.chatId)},[k("span",gP,Ye(c.name||"Unknown User"),1),c.unreadCount>0?(he(),ve("span",_P,Ye(c.unreadCount),1)):Bt("",!0)],8,mP))),128))])):(he(),ve("p",yP,"No chats found"))]))}},EP=Jn(vP,[["__scopeId","data-v-26cbb575"]]),wP={class:"modal-content"},TP={class:"modal-header"},IP={key:0},AP={key:1},bP={key:0,class:"withdraw-form"},RP={class:"withdraw-actions"},SP=["disabled"],CP={class:"input-area"},PP={__name:"ChatModal",props:{isAdmin:Boolean},setup(t){const e=t,n=we(""),r=we([]),s=we(""),i=we(null),o=we(null),c=we([]),l=we(null),u=we(!1),f=we({country:"",currency:"",bank:"",accountNumber:"",amount:0});function p(){Qa(()=>{l.value&&(l.value.scrollTop=l.value.scrollHeight)})}const m=Ot(()=>{const x=f.value;return x.country.trim()&&x.currency.trim()&&x.bank.trim()&&x.accountNumber.trim()&&Number(x.amount)>0});async function _(x){s.value=x,o.value=x;const O=await Bn($e(Te,"chats",x));O.exists()&&(c.value=O.data().participants||[]);const G=nt.currentUser?.uid;G&&await Ei($e(Te,"chats",x),{[`unread.${G}`]:0}).catch(()=>{}),V()}async function R(){if(!i.value||e.isAdmin)return;const x=i.value.uid,O=Hr(_n(Te,"users"),As("role","==","admin")),G=await xi(O);if(G.empty)return;const re=G.docs[0].id,I=_n(Te,"chats"),y=Hr(I,As("participants","array-contains",x)),w=await xi(y);if(w.empty){const A=await al(I,{participants:[x,re],updatedAt:ms(),unread:{[re]:0,[x]:0}});s.value=A.id,c.value=[x,re]}else{const A=w.docs[0];s.value=A.id,c.value=A.data().participants||[x,re],c.value.includes(re)||(c.value.push(re),await Ei($e(Te,"chats",s.value),{participants:c.value,[`unread.${re}`]:0}))}V()}function V(){if(!s.value)return;const x=Hr(_n(Te,"chats",s.value,"messages"),wR("timestamp","asc"));Zi(x,O=>{r.value=O.docs.map(G=>({id:G.id,...G.data()})),p()})}async function D(){if(!n.value.trim()||!s.value||!i.value)return;const x=i.value.uid;if(!c.value?.length){const I=await Bn($e(Te,"chats",s.value));I.exists()&&(c.value=I.data().participants||[])}if(c.value.length===1&&!e.isAdmin){const I=Hr(_n(Te,"users"),As("role","==","admin")),y=await xi(I);if(!y.empty){const w=y.docs[0].id;c.value.push(w),await Ei($e(Te,"chats",s.value),{participants:c.value,[`unread.${w}`]:0})}}const O=c.value.filter(I=>I!==x);await al(_n(Te,"chats",s.value,"messages"),{senderId:x,senderName:i.value.displayName||i.value.email,text:n.value.trim(),timestamp:ms(),readBy:[x]});const G=$e(Te,"chats",s.value),re={lastSenderId:x,updatedAt:ms(),[`unread.${x}`]:0};O.forEach(I=>{re[`unread.${I}`]=RR(1)}),await Ei(G,re),n.value="",p()}function j(){u.value=!u.value}async function q(){if(!s.value||!i.value)return;const x=i.value.uid,O=`
    Country: ${f.value.country}
    Currency: ${f.value.currency}
    Bank: ${f.value.bank}
    Account: ${f.value.accountNumber}
    Amount: ${f.value.amount}
  `.trim();await al(_n(Te,"chats",s.value,"messages"),{senderId:x,senderName:i.value.displayName||i.value.email,text:O,type:"withdraw",timestamp:ms(),readBy:[x]}),u.value=!1}return Ys(nt,async x=>{if(i.value=x,x&&!e.isAdmin){const O=await Bn($e(Te,"users",x.uid));O.exists()&&(f.value.amount=O.data().balance||0),R()}}),(x,O)=>(he(),Kr(Am,{to:"body"},[k("div",{class:"modal-overlay",onClick:O[8]||(O[8]=ec(G=>x.$emit("close"),["self"]))},[k("div",wP,[k("div",TP,[k("h2",null,Ye(t.isAdmin?"Admin Chat":"Chat with Admin"),1),k("button",{class:"close-btn",onClick:O[0]||(O[0]=G=>x.$emit("close"))},"✖")]),t.isAdmin&&!o.value?(he(),ve("div",IP,[je(EP,{onChatSelected:_})])):o.value||s.value?(he(),ve("div",AP,[k("div",{class:"chat-box",ref_key:"chatBox",ref:l},[(he(!0),ve(lt,null,oo(r.value,G=>(he(),ve("div",{key:G.id,class:fr(["message",{"my-message":G.senderId===i.value?.uid,"other-message":G.senderId!==i.value?.uid,"withdraw-message":G.type==="withdraw"}])},[G.type==="withdraw"?(he(),ve(lt,{key:0},[O[9]||(O[9]=ye(" 🏦 ",-1)),O[10]||(O[10]=k("strong",null,"Reward Request",-1)),O[11]||(O[11]=k("br",null,null,-1)),ye(" "+Ye(G.text),1)],64)):(he(),ve(lt,{key:1},[k("strong",null,Ye(G.senderName)+":",1),ye(" "+Ye(G.text),1)],64))],2))),128)),u.value?(he(),ve("div",bP,[O[12]||(O[12]=k("label",null,"Country:",-1)),rn(k("input",{"onUpdate:modelValue":O[1]||(O[1]=G=>f.value.country=G),placeholder:"Enter country"},null,512),[[sn,f.value.country]]),O[13]||(O[13]=k("label",null,"Currency:",-1)),rn(k("input",{"onUpdate:modelValue":O[2]||(O[2]=G=>f.value.currency=G),placeholder:"Enter currency"},null,512),[[sn,f.value.currency]]),O[14]||(O[14]=k("label",null,"Bank:",-1)),rn(k("input",{"onUpdate:modelValue":O[3]||(O[3]=G=>f.value.bank=G),placeholder:"Enter bank"},null,512),[[sn,f.value.bank]]),O[15]||(O[15]=k("label",null,"Account Number:",-1)),rn(k("input",{"onUpdate:modelValue":O[4]||(O[4]=G=>f.value.accountNumber=G),placeholder:"Enter account number"},null,512),[[sn,f.value.accountNumber]]),O[16]||(O[16]=k("label",null,"Amount:",-1)),rn(k("input",{"onUpdate:modelValue":O[5]||(O[5]=G=>f.value.amount=G),type:"number",readonly:""},null,512),[[sn,f.value.amount]]),k("div",RP,[k("button",{onClick:q,disabled:!m.value,class:fr({disabled:!m.value})}," Submit Request ",10,SP),k("button",{onClick:O[6]||(O[6]=G=>u.value=!1)},"Cancel")])])):Bt("",!0)],512),k("div",CP,[rn(k("input",{"onUpdate:modelValue":O[7]||(O[7]=G=>n.value=G),placeholder:"Type your message...",onKeyup:Cw(D,["enter"])},null,544),[[sn,n.value]]),k("button",{onClick:D},"Send"),k("button",{onClick:j},"Claim Reward")])])):Bt("",!0)])])]))}},kP=Jn(PP,[["__scopeId","data-v-e1c02fab"]]),VP={class:"homepage"},NP={key:0,class:"unread-dot"},DP={class:"welcome-box"},OP={key:0,class:"user-greeting"},xP={key:1,class:"user-greeting"},MP={class:"button-group"},LP={__name:"HomePage",setup(t){const e=we(!1),n=we(!1),r=we(null),s=we(null);Ys(nt,async o=>{if(r.value=o,o){const c=await Bn($e(Te,"users",o.uid));s.value=c.data()?.role||"user",i(o.uid)}});function i(o){const c=Hr(_n(Te,"chats"),As("participants","array-contains",o));Zi(c,l=>{let u=!1;l.forEach(f=>{(f.data().unread?.[o]||0)>0&&(u=!0)}),n.value=u})}return(o,c)=>{const l=Er("router-link");return he(),ve("div",VP,[r.value?(he(),ve("div",{key:0,class:"chat-icon-container",onClick:c[0]||(c[0]=u=>pl.value=!0)},[c[4]||(c[4]=k("i",{class:"fas fa-comments"},null,-1)),n.value?(he(),ve("span",NP)):Bt("",!0)])):Bt("",!0),Fn(pl)?(he(),Kr(kP,{key:1,isAdmin:s.value==="admin",onClose:c[1]||(c[1]=u=>pl.value=!1)},null,8,["isAdmin"])):Bt("",!0),k("div",DP,[c[7]||(c[7]=k("h1",{class:"main-title"},"Welcome to the Howell",-1)),r.value?(he(),ve("p",OP,"Hello, "+Ye(r.value.displayName||r.value.email),1)):(he(),ve("p",xP,"Please log in")),c[8]||(c[8]=k("p",{class:"description"},[ye(" Test your knowledge across subjects, people, and world events."),k("br"),ye(" Learn while having fun! ")],-1)),k("div",MP,[r.value?(he(),Kr(l,{key:0,to:"/topics"},{default:zt(()=>c[5]||(c[5]=[k("button",{class:"btn green"},"Explore Topics",-1)])),_:1,__:[5]})):(he(),Kr(l,{key:1,to:"/topics"},{default:zt(()=>c[6]||(c[6]=[k("button",{class:"btn blue"},"Get Started",-1)])),_:1,__:[6]})),k("button",{class:"btn orange",onClick:c[2]||(c[2]=u=>e.value=!0)},"Privacy & Rules")])]),je(fP,{open:e.value,onClose:c[3]||(c[3]=u=>e.value=!1)},null,8,["open"])])}}},FP=Jn(LP,[["__scopeId","data-v-f2dce978"]]),UP={class:"login-container"},BP={class:"login-box"},$P={class:"signup-link"},qP={__name:"LoginPage",setup(t){const e=Rc(),n=we(""),r=we(""),s=async()=>{try{await bS(nt,n.value,r.value),e.push("/")}catch(o){alert(o.message)}},i=async()=>{const o=new Xt;o.addScope("email");try{const l=(await wy(nt,o)).user;await yr($e(Te,"users",l.uid),{uid:l.uid,name:l.displayName||"",email:l.email||"",photoURL:l.photoURL||"",lastLogin:new Date},{merge:!0}),e.push("/")}catch(c){const l=c?.code||"";if(l==="auth/popup-blocked"||l==="auth/popup-closed-by-user"||l==="auth/web-storage-unsupported")try{await Th(nt,o)}catch(u){console.error("Redirect sign-in failed:",u),alert("Facebook sign-in failed. Please try again.")}else console.error("Facebook login failed:",c),alert("Facebook sign-in failed. Please try again.")}};return mn(async()=>{try{const o=await Ih(nt);if(o&&o.user){const c=o.user;await yr($e(Te,"users",c.uid),{uid:c.uid,name:c.displayName||"",email:c.email||"",photoURL:c.photoURL||"",lastLogin:new Date},{merge:!0}),e.push("/")}}catch(o){console.debug("No redirect result or redirect sign-in failed:",o?.code||o)}}),(o,c)=>{const l=Er("router-link");return he(),ve("div",UP,[k("div",BP,[c[7]||(c[7]=k("h2",null,"Login",-1)),k("form",{onSubmit:ec(s,["prevent"])},[c[2]||(c[2]=k("label",null,"Email",-1)),rn(k("input",{type:"email","onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),required:""},null,512),[[sn,n.value]]),c[3]||(c[3]=k("label",null,"Password",-1)),rn(k("input",{type:"password","onUpdate:modelValue":c[1]||(c[1]=u=>r.value=u),required:""},null,512),[[sn,r.value]]),c[4]||(c[4]=k("button",{type:"submit",class:"primary-btn"},"Login",-1))],32),k("button",{class:"facebook-btn",onClick:i},"Continue with Facebook"),k("p",$P,[c[6]||(c[6]=ye(" Don’t have an account? ",-1)),je(l,{to:"/signup"},{default:zt(()=>c[5]||(c[5]=[ye("Sign up",-1)])),_:1,__:[5]})])])])}}},jP=Jn(qP,[["__scopeId","data-v-76d274d6"]]),HP={class:"signup-container"},zP={class:"signup-box"},WP={class:"login-link"},KP={__name:"SignupPage",setup(t){const e=Rc(),n=we(""),r=we(""),s=we(""),i=async()=>{try{const c=await AS(nt,r.value,s.value);await SS(c.user,{displayName:n.value}),await yr($e(Te,"users",c.user.uid),{uid:c.user.uid,name:n.value,email:r.value,photoURL:"",correct:0,question:0,timeSpent:0,balance:0,rank:0,questionNo:[],score:0,createdAt:new Date}),e.push("/")}catch(c){alert(c.message)}},o=async()=>{const c=new Xt;c.addScope("email");try{const u=(await wy(nt,c)).user;await yr($e(Te,"users",u.uid),{uid:u.uid,name:u.displayName||"",email:u.email||"",phone:"",photoURL:u.photoURL||"",correct:0,question:0,timeSpent:0,balance:0,rank:0,questionNo:[],score:0,createdAt:new Date},{merge:!0}),e.push("/")}catch(l){const u=l?.code||"";if(u==="auth/popup-blocked"||u==="auth/popup-closed-by-user"||u==="auth/web-storage-unsupported")try{await Th(nt,c)}catch(f){console.error("Redirect sign-in failed:",f),alert("Facebook sign-in failed. Please try again.")}else console.error("Facebook signup failed:",l),alert("Facebook sign-in failed. Please try again.")}};return mn(async()=>{try{const c=await Ih(nt);if(c&&c.user){const l=c.user;await yr($e(Te,"users",l.uid),{uid:l.uid,name:l.displayName||"",email:l.email||"",phone:"",photoURL:l.photoURL||"",correct:0,question:0,timeSpent:0,balance:0,rank:0,questionNo:[],score:0,createdAt:new Date},{merge:!0}),e.push("/")}}catch(c){console.debug("No redirect result or redirect sign-in failed:",c?.code||c)}}),(c,l)=>{const u=Er("router-link");return he(),ve("div",HP,[k("div",zP,[l[9]||(l[9]=k("h2",null,"Sign Up",-1)),k("form",{onSubmit:ec(i,["prevent"])},[l[3]||(l[3]=k("label",null,"Name",-1)),rn(k("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=f=>n.value=f),required:""},null,512),[[sn,n.value]]),l[4]||(l[4]=k("label",null,"Email",-1)),rn(k("input",{type:"email","onUpdate:modelValue":l[1]||(l[1]=f=>r.value=f),required:""},null,512),[[sn,r.value]]),l[5]||(l[5]=k("label",null,"Password",-1)),rn(k("input",{type:"password","onUpdate:modelValue":l[2]||(l[2]=f=>s.value=f),required:""},null,512),[[sn,s.value]]),l[6]||(l[6]=k("button",{type:"submit",class:"primary-btn"},"Sign Up",-1))],32),k("button",{class:"facebook-btn",onClick:o},"Continue with Facebook"),k("p",WP,[l[8]||(l[8]=ye(" Already have an account? ",-1)),je(u,{to:"/login"},{default:zt(()=>l[7]||(l[7]=[ye("Log in",-1)])),_:1,__:[7]})])])])}}},GP=Jn(KP,[["__scopeId","data-v-6cc1e260"]]),QP={class:"page-container"},YP={key:0,class:"login-notice"},JP={class:"topic-grid"},XP={class:"topic-header"},ZP={class:"topic-title"},e1={key:0,class:"competition-badge"},t1={class:"topic-description"},n1={key:1,class:"play-button disabled",disabled:"",title:"Login to participate"},r1={__name:"TopicSelectionPage",setup(t){const e=we(null);Ys(nt,o=>{e.value=o});const n=[{id:"messi",title:"Lionel Messi",description:"How well do you know Li@nel M6ssi?",isCompetition:!0},{id:"biology",title:"Biology",description:"Test your knowledge of life, cells, plants, and more."},{id:"history",title:"History",description:"Learn from the past to win the present!"},{id:"english",title:"English",description:"Master vocabulary, grammar, and comprehension."},{id:"chemistry",title:"Chemistry",description:"How well do you know chemistry."},{id:"economics",title:"Economics",description:"Supply, demand, money & the markets!"}],r=o=>o.isCompetition?`/competition/${o.id}`:`/play/${o.id}`,s=Ot(()=>[...n].sort((o,c)=>o.isCompetition&&!c.isCompetition?-1:!o.isCompetition&&c.isCompetition?1:0)),i=o=>({messi:"#007BFF",biology:"#28A745",maths:"#73ae50ff",history:"#343A40",english:"#6C757D",economics:"#17A2B8",chemistry:"#0a3238ff"})[o]||"#007BFF";return(o,c)=>{const l=Er("router-link");return he(),ve("div",QP,[c[2]||(c[2]=k("h2",{class:"page-title"},"Select a Topic",-1)),e.value?Bt("",!0):(he(),ve("div",YP,c[0]||(c[0]=[k("p",null,"Login to participate in competition",-1)]))),k("div",JP,[(he(!0),ve(lt,null,oo(s.value,u=>(he(),ve("div",{key:u.id,class:"topic-card",style:so({backgroundColor:i(u.id)})},[k("div",XP,[k("h3",ZP,Ye(u.title),1),u.isCompetition?(he(),ve("span",e1,"Competition")):Bt("",!0)]),k("p",t1,Ye(u.description),1),!u.isCompetition||e.value?(he(),Kr(l,{key:0,to:r(u)},{default:zt(()=>c[1]||(c[1]=[k("button",{class:"play-button"},"Play Now",-1)])),_:2,__:[1]},1032,["to"])):(he(),ve("button",n1," Play Now "))],4))),128))])])}}},s1=Jn(r1,[["__scopeId","data-v-91843f22"]]),i1={class:"page-container"},o1={class:"topic-grid"},a1={class:"topic-header"},c1={class:"topic-title"},l1={key:0,class:"competition-badge"},u1={class:"topic-description"},h1={__name:"Topics",setup(t){const e=[{id:"messi",title:"Lionel Messi",description:"How well do you know Li@nel M6ssi?",isCompetition:!0},{id:"biology",title:"Biology",description:"Test your knowledge of life, cells, plants, and more."},{id:"history",title:"History",description:"Learn from the past to win the present!"},{id:"english",title:"English",description:"Master vocabulary, grammar, and comprehension."},{id:"chemistry",title:"Chemistry",description:"How well do you know chemistry."},{id:"economics",title:"Economics",description:"Supply, demand, money & the markets!"}],n=i=>i.isCompetition?`/competition/${i.id}`:`/play/${i.id}`,r=Ot(()=>[...e].sort((i,o)=>i.isCompetition&&!o.isCompetition?-1:!i.isCompetition&&o.isCompetition?1:0)),s=i=>({messi:"#007BFF",biology:"#28A745",maths:"#73ae50ff",history:"#343A40",english:"#6C757D",economics:"#17A2B8",chemistry:"#0a3238ff"})[i]||"#007BFF";return(i,o)=>{const c=Er("router-link");return he(),ve("div",i1,[o[1]||(o[1]=k("h2",{class:"page-title"},"Select a Topic",-1)),k("div",o1,[(he(!0),ve(lt,null,oo(r.value,l=>(he(),ve("div",{key:l.id,class:"topic-card",style:so({backgroundColor:s(l.id)})},[k("div",a1,[k("h3",c1,Ye(l.title),1),l.isCompetition?(he(),ve("span",l1,"Competition")):Bt("",!0)]),k("p",u1,Ye(l.description),1),je(c,{to:n(l)},{default:zt(()=>o[0]||(o[0]=[k("button",{class:"play-button"},"Play Now",-1)])),_:2,__:[0]},1032,["to"])],4))),128))])])}}},f1=Jn(h1,[["__scopeId","data-v-3496d14b"]]),d1=[{path:"/",component:FP},{path:"/login",component:jP},{path:"/signup",component:GP},{path:"/policies",name:"Policies",component:()=>ml(()=>import("./Policies-CbNsHjRh.js"),__vite__mapDeps([0,1]),import.meta.url)},{path:"/topics",component:s1,meta:{requiresAuth:!1}},{path:"/topic",component:f1,meta:{requiresAuth:!1}},{path:"/play/:topicId",name:"PlayTopic",component:()=>ml(()=>import("./QuestionCarousel-BubrMoM9.js"),__vite__mapDeps([2,3,4]),import.meta.url),props:!0,meta:{requiresAuth:!1}},{path:"/competition/:topicId",name:"Competition",component:()=>ml(()=>import("./Competition-CHfMhG2Z.js"),__vite__mapDeps([5,3,6]),import.meta.url),props:!0,meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",redirect:"/"}],By=G0({history:I0(),routes:d1});By.beforeEach((t,e,n)=>{const r=nt.currentUser;t.matched.some(i=>i.meta.requiresAuth)&&!r?n("/login"):n()});const p1=""+new URL("quiz-bg-DZ1DfWHF.png",import.meta.url).href,m1=""+new URL("quiz-result-CizZnYdT.png",import.meta.url).href,g1=[p1,m1];we(0);const Sc=document.createElement("div");Sc.id="loading-screen";Sc.style=`
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
`;Sc.innerHTML=`
  <div>Loading... <span id="loading-percent">0%</span></div>
  <div style="margin-top: 1rem;">
    <div style="width: 200px; height: 10px; border: 1px solid #fff; border-radius: 5px;">
      <div id="loading-bar" style="width: 0%; height: 100%; background: #00ff7f; border-radius: 5px;"></div>
    </div>
  </div>
`;document.body.appendChild(Sc);function _1(t){const e=document.getElementById("loading-percent"),n=document.getElementById("loading-bar");e&&(e.textContent=`${t}%`),n&&(n.style.width=`${t}%`)}async function y1(t){let e=0;for(const n of t)await new Promise((r,s)=>{const i=new Image;i.src=n,i.onload=()=>{e++;const o=Math.round(e/t.length*100);_1(o),r()},i.onerror=s})}async function v1(t){let e=null,n=null,r=null;try{e=t.player.getID(),n=t.player.getName()||"Unknown",r=t.player.getPhoto()||""}catch(s){console.error("Error fetching FBInstant player data:",s)}return{playerID:e,playerName:n,playerPhoto:r}}async function E1({uid:t,name:e,photoURL:n}){try{const r=$e(Te,"users",t);(await Bn(r)).exists()?console.log("Returning user — no overwrite ✅"):(await yr(r,{uid:t,name:e,photoURL:n,correct:0,question:0,timeSpent:0,balance:0,rank:0,questionNo:[],score:0,createdAt:ms()}),console.log("New Firebase user created ✅"))}catch(r){console.error("Error creating/logging in Firebase user:",r)}}function gl(t=null){const e=Vw(aP);e.use(By),e.config.globalProperties.$fb=t,e.mount("#app");const n=document.getElementById("loading-screen");n&&n.remove()}async function w1(){try{await y1(g1)}catch(e){console.warn("Failed to preload some images:",e)}const t=typeof window<"u"?window.FBInstant:null;if(t&&typeof t.initializeAsync=="function"){console.log("Detected FBInstant environment ✅");try{await t.initializeAsync(),console.log("FB Instant Game initialized 🎮");const{playerID:e,playerName:n,playerPhoto:r}=await v1(t);e&&await E1({uid:e,name:n,photoURL:r}),await t.startGameAsync(),console.log("FB Instant Game started ✅"),gl(t)}catch(e){console.error("FBInstant error:",e),gl(null)}}else console.warn("FBInstant not available — running in web mode 🌐"),gl(null)}w1();export{m1 as A,b1 as B,RR as C,lt as F,Jn as _,T1 as a,mn as b,ve as c,Ot as d,Bt as e,k as f,rn as g,oo as h,ye as i,ml as j,Es as k,Ys as l,$e as m,fr as n,he as o,Te as p,Bn as q,we as r,nt as s,Ye as t,R1 as u,I1 as v,Ci as w,cE as x,Ei as y,je as z};
