const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Login-DgcUS4UL.js","./createLucideIcon-fLpDlMtB.js","./mail-D36ZKh02.js","./Signup-ChlxK1_k.js","./user-BtkSAdda.js","./ChatPage-VqUmI7oa.js"])))=>i.map(i=>d[i]);
var F1=Object.defineProperty;var j1=(t,e,n)=>e in t?F1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Yo=(t,e,n)=>j1(t,typeof e!="symbol"?e+"":e,n);function B1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var z1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function $1(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var cv={exports:{}},Rc={},fv={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),K1=Symbol.for("react.portal"),W1=Symbol.for("react.fragment"),q1=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),G1=Symbol.for("react.provider"),Q1=Symbol.for("react.context"),Y1=Symbol.for("react.forward_ref"),X1=Symbol.for("react.suspense"),J1=Symbol.for("react.memo"),Z1=Symbol.for("react.lazy"),pg=Symbol.iterator;function eI(t){return t===null||typeof t!="object"?null:(t=pg&&t[pg]||t["@@iterator"],typeof t=="function"?t:null)}var hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dv=Object.assign,pv={};function So(t,e,n){this.props=t,this.context=e,this.refs=pv,this.updater=n||hv}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mv(){}mv.prototype=So.prototype;function Md(t,e,n){this.props=t,this.context=e,this.refs=pv,this.updater=n||hv}var Ud=Md.prototype=new mv;Ud.constructor=Md;dv(Ud,So.prototype);Ud.isPureReactComponent=!0;var mg=Array.isArray,gv=Object.prototype.hasOwnProperty,Fd={current:null},yv={key:!0,ref:!0,__self:!0,__source:!0};function _v(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gv.call(e,r)&&!yv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ul,type:t,key:s,ref:o,props:i,_owner:Fd.current}}function tI(t,e){return{$$typeof:ul,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ul}function nI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gg=/\/+/g;function Tf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nI(""+t.key):e.toString(36)}function pu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ul:case K1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Tf(o,0):r,mg(i)?(n="",t!=null&&(n=t.replace(gg,"$&/")+"/"),pu(i,e,n,"",function(f){return f})):i!=null&&(jd(i)&&(i=tI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",mg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Tf(s,l);o+=pu(s,e,n,u,i)}else if(u=eI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Tf(s,l++),o+=pu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wl(t,e,n){if(t==null)return t;var r=[],i=0;return pu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},mu={transition:null},iI={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:mu,ReactCurrentOwner:Fd};function vv(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:Wl,forEach:function(t,e,n){Wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wl(t,function(){e++}),e},toArray:function(t){return Wl(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=So;Be.Fragment=W1;Be.Profiler=H1;Be.PureComponent=Md;Be.StrictMode=q1;Be.Suspense=X1;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iI;Be.act=vv;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)gv.call(e,u)&&!yv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];r.children=l}return{$$typeof:ul,type:t.type,key:i,ref:s,props:r,_owner:o}};Be.createContext=function(t){return t={$$typeof:Q1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G1,_context:t},t.Consumer=t};Be.createElement=_v;Be.createFactory=function(t){var e=_v.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:Y1,render:t}};Be.isValidElement=jd;Be.lazy=function(t){return{$$typeof:Z1,_payload:{_status:-1,_result:t},_init:rI}};Be.memo=function(t,e){return{$$typeof:J1,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=mu.transition;mu.transition={};try{t()}finally{mu.transition=e}};Be.unstable_act=vv;Be.useCallback=function(t,e){return mn.current.useCallback(t,e)};Be.useContext=function(t){return mn.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Be.useEffect=function(t,e){return mn.current.useEffect(t,e)};Be.useId=function(){return mn.current.useId()};Be.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return mn.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Be.useRef=function(t){return mn.current.useRef(t)};Be.useState=function(t){return mn.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return mn.current.useTransition()};Be.version="18.3.1";fv.exports=Be;var oe=fv.exports;const Bd=uv(oe),sI=B1({__proto__:null,default:Bd},[oe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI=oe,aI=Symbol.for("react.element"),lI=Symbol.for("react.fragment"),uI=Object.prototype.hasOwnProperty,cI=oI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fI={key:!0,ref:!0,__self:!0,__source:!0};function wv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uI.call(e,r)&&!fI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aI,type:t,key:s,ref:o,props:i,_owner:cI.current}}Rc.Fragment=lI;Rc.jsx=wv;Rc.jsxs=wv;cv.exports=Rc;var st=cv.exports,ph={},Ev={exports:{}},Nn={},Tv={exports:{}},Iv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(ie,ve){var Oe=ie.length;ie.push(ve);e:for(;0<Oe;){var rt=Oe-1>>>1,Xe=ie[rt];if(0<i(Xe,ve))ie[rt]=ve,ie[Oe]=Xe,Oe=rt;else break e}}function n(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var ve=ie[0],Oe=ie.pop();if(Oe!==ve){ie[0]=Oe;e:for(var rt=0,Xe=ie.length,He=Xe>>>1;rt<He;){var wt=2*(rt+1)-1,Ce=ie[wt],yt=wt+1,On=ie[yt];if(0>i(Ce,Oe))yt<Xe&&0>i(On,Ce)?(ie[rt]=On,ie[yt]=Oe,rt=yt):(ie[rt]=Ce,ie[wt]=Oe,rt=wt);else if(yt<Xe&&0>i(On,Oe))ie[rt]=On,ie[yt]=Oe,rt=yt;else break e}}return ve}function i(ie,ve){var Oe=ie.sortIndex-ve.sortIndex;return Oe!==0?Oe:ie.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],f=[],p=1,g=null,v=3,R=!1,O=!1,L=!1,F=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(ie){for(var ve=n(f);ve!==null;){if(ve.callback===null)r(f);else if(ve.startTime<=ie)r(f),ve.sortIndex=ve.expirationTime,e(u,ve);else break;ve=n(f)}}function $(ie){if(L=!1,N(ie),!O)if(n(u)!==null)O=!0,cn(Z);else{var ve=n(f);ve!==null&&Sn($,ve.startTime-ie)}}function Z(ie,ve){O=!1,L&&(L=!1,P(T),T=-1),R=!0;var Oe=v;try{for(N(ve),g=n(u);g!==null&&(!(g.expirationTime>ve)||ie&&!b());){var rt=g.callback;if(typeof rt=="function"){g.callback=null,v=g.priorityLevel;var Xe=rt(g.expirationTime<=ve);ve=t.unstable_now(),typeof Xe=="function"?g.callback=Xe:g===n(u)&&r(u),N(ve)}else r(u);g=n(u)}if(g!==null)var He=!0;else{var wt=n(f);wt!==null&&Sn($,wt.startTime-ve),He=!1}return He}finally{g=null,v=Oe,R=!1}}var ee=!1,x=null,T=-1,S=5,C=-1;function b(){return!(t.unstable_now()-C<S)}function V(){if(x!==null){var ie=t.unstable_now();C=ie;var ve=!0;try{ve=x(!0,ie)}finally{ve?k():(ee=!1,x=null)}}else ee=!1}var k;if(typeof I=="function")k=function(){I(V)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,zn=Qt.port2;Qt.port1.onmessage=V,k=function(){zn.postMessage(null)}}else k=function(){F(V,0)};function cn(ie){x=ie,ee||(ee=!0,k())}function Sn(ie,ve){T=F(function(){ie(t.unstable_now())},ve)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ie){ie.callback=null},t.unstable_continueExecution=function(){O||R||(O=!0,cn(Z))},t.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<ie?Math.floor(1e3/ie):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(ie){switch(v){case 1:case 2:case 3:var ve=3;break;default:ve=v}var Oe=v;v=ve;try{return ie()}finally{v=Oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ie,ve){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var Oe=v;v=ie;try{return ve()}finally{v=Oe}},t.unstable_scheduleCallback=function(ie,ve,Oe){var rt=t.unstable_now();switch(typeof Oe=="object"&&Oe!==null?(Oe=Oe.delay,Oe=typeof Oe=="number"&&0<Oe?rt+Oe:rt):Oe=rt,ie){case 1:var Xe=-1;break;case 2:Xe=250;break;case 5:Xe=1073741823;break;case 4:Xe=1e4;break;default:Xe=5e3}return Xe=Oe+Xe,ie={id:p++,callback:ve,priorityLevel:ie,startTime:Oe,expirationTime:Xe,sortIndex:-1},Oe>rt?(ie.sortIndex=Oe,e(f,ie),n(u)===null&&ie===n(f)&&(L?(P(T),T=-1):L=!0,Sn($,Oe-rt))):(ie.sortIndex=Xe,e(u,ie),O||R||(O=!0,cn(Z))),ie},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(ie){var ve=v;return function(){var Oe=v;v=ve;try{return ie.apply(this,arguments)}finally{v=Oe}}}})(Iv);Tv.exports=Iv;var hI=Tv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dI=oe,kn=hI;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sv=new Set,Na={};function ms(t,e){ao(t,e),ao(t+"Capture",e)}function ao(t,e){for(Na[t]=e,t=0;t<e.length;t++)Sv.add(e[t])}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mh=Object.prototype.hasOwnProperty,pI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yg={},_g={};function mI(t){return mh.call(_g,t)?!0:mh.call(yg,t)?!1:pI.test(t)?_g[t]=!0:(yg[t]=!0,!1)}function gI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yI(t,e,n,r){if(e===null||typeof e>"u"||gI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var zd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zd,$d);Ht[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zd,$d);Ht[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zd,$d);Ht[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,r){var i=Ht.hasOwnProperty(e)?Ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yI(e,n,i,r)&&(n=null),r||i===null?mI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $r=dI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ql=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),Av=Symbol.for("react.provider"),xv=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),_h=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),ri=Symbol.for("react.lazy"),Rv=Symbol.for("react.offscreen"),vg=Symbol.iterator;function Xo(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,If;function oa(t){if(If===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);If=e&&e[1]||""}return`
`+If+t}var Sf=!1;function Af(t,e){if(!t||Sf)return"";Sf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){r=f}t.call(e.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Sf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function _I(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=Af(t.type,!1),t;case 11:return t=Af(t.type.render,!1),t;case 1:return t=Af(t.type,!0),t;default:return""}}function vh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Vs:return"Portal";case gh:return"Profiler";case Wd:return"StrictMode";case yh:return"Suspense";case _h:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xv:return(t.displayName||"Context")+".Consumer";case Av:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:vh(t.type)||"Memo";case ri:e=t._payload,t=t._init;try{return vh(t(e))}catch{}}return null}function vI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vh(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ri(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wI(t){var e=Pv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hl(t){t._valueTracker||(t._valueTracker=wI(t))}function Cv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Pv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wh(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ri(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kv(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function Eh(t,e){kv(t,e);var n=Ri(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Th(t,e.type,n):e.hasOwnProperty("defaultValue")&&Th(t,e.type,Ri(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Eg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Th(t,e,n){(e!=="number"||Mu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function Ys(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ri(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(aa(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ri(n)}}function Nv(t,e){var n=Ri(e.value),r=Ri(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gl,Ov=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gl=Gl||document.createElement("div"),Gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EI=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){EI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Dv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function Vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TI=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ah(t,e){if(e){if(TI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=null;function Gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,Xs=null,Js=null;function Sg(t){if(t=hl(t)){if(typeof Ph!="function")throw Error(J(280));var e=t.stateNode;e&&(e=bc(e),Ph(t.stateNode,t.type,e))}}function Lv(t){Xs?Js?Js.push(t):Js=[t]:Xs=t}function Mv(){if(Xs){var t=Xs,e=Js;if(Js=Xs=null,Sg(t),e)for(t=0;t<e.length;t++)Sg(e[t])}}function Uv(t,e){return t(e)}function Fv(){}var xf=!1;function jv(t,e,n){if(xf)return t(e,n);xf=!0;try{return Uv(t,e,n)}finally{xf=!1,(Xs!==null||Js!==null)&&(Fv(),Mv())}}function Oa(t,e){var n=t.stateNode;if(n===null)return null;var r=bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var Ch=!1;if(Vr)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){Ch=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{Ch=!1}function II(t,e,n,r,i,s,o,l,u){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(p){this.onError(p)}}var _a=!1,Uu=null,Fu=!1,kh=null,SI={onError:function(t){_a=!0,Uu=t}};function AI(t,e,n,r,i,s,o,l,u){_a=!1,Uu=null,II.apply(SI,arguments)}function xI(t,e,n,r,i,s,o,l,u){if(AI.apply(this,arguments),_a){if(_a){var f=Uu;_a=!1,Uu=null}else throw Error(J(198));Fu||(Fu=!0,kh=f)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ag(t){if(gs(t)!==t)throw Error(J(188))}function RI(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ag(i),t;if(s===r)return Ag(i),e;s=s.sibling}throw Error(J(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==r)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function zv(t){return t=RI(t),t!==null?$v(t):null}function $v(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$v(t);if(e!==null)return e;t=t.sibling}return null}var Kv=kn.unstable_scheduleCallback,xg=kn.unstable_cancelCallback,PI=kn.unstable_shouldYield,CI=kn.unstable_requestPaint,St=kn.unstable_now,kI=kn.unstable_getCurrentPriorityLevel,Qd=kn.unstable_ImmediatePriority,Wv=kn.unstable_UserBlockingPriority,ju=kn.unstable_NormalPriority,NI=kn.unstable_LowPriority,qv=kn.unstable_IdlePriority,Pc=null,cr=null;function bI(t){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:VI,OI=Math.log,DI=Math.LN2;function VI(t){return t>>>=0,t===0?32:31-(OI(t)/DI|0)|0}var Ql=64,Yl=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=la(l):(s&=o,s!==0&&(r=la(s)))}else o=n&~i,o!==0?r=la(o):s!==0&&(r=la(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qn(e),i=1<<n,r|=t[n],e&=~i;return r}function LI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=LI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hv(){var t=Ql;return Ql<<=1,!(Ql&4194240)&&(Ql=64),t}function Rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function UI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Je=0;function Gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qv,Xd,Yv,Xv,Jv,bh=!1,Xl=[],gi=null,yi=null,_i=null,Da=new Map,Va=new Map,si=[],FI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rg(t,e){switch(t){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":yi=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function Zo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=hl(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jI(t,e,n,r,i){switch(e){case"focusin":return gi=Zo(gi,t,e,n,r,i),!0;case"dragenter":return yi=Zo(yi,t,e,n,r,i),!0;case"mouseover":return _i=Zo(_i,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Da.set(s,Zo(Da.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Va.set(s,Zo(Va.get(s)||null,t,e,n,r,i)),!0}return!1}function Zv(t){var e=Qi(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=Bv(n),e!==null){t.blockedOn=e,Jv(t.priority,function(){Yv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rh=r,n.target.dispatchEvent(r),Rh=null}else return e=hl(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Pg(t,e,n){gu(t)&&n.delete(e)}function BI(){bh=!1,gi!==null&&gu(gi)&&(gi=null),yi!==null&&gu(yi)&&(yi=null),_i!==null&&gu(_i)&&(_i=null),Da.forEach(Pg),Va.forEach(Pg)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,bh||(bh=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,BI)))}function La(t){function e(i){return ea(i,t)}if(0<Xl.length){ea(Xl[0],t);for(var n=1;n<Xl.length;n++){var r=Xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gi!==null&&ea(gi,t),yi!==null&&ea(yi,t),_i!==null&&ea(_i,t),Da.forEach(e),Va.forEach(e),n=0;n<si.length;n++)r=si[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<si.length&&(n=si[0],n.blockedOn===null);)Zv(n),n.blockedOn===null&&si.shift()}var Zs=$r.ReactCurrentBatchConfig,zu=!0;function zI(t,e,n,r){var i=Je,s=Zs.transition;Zs.transition=null;try{Je=1,Jd(t,e,n,r)}finally{Je=i,Zs.transition=s}}function $I(t,e,n,r){var i=Je,s=Zs.transition;Zs.transition=null;try{Je=4,Jd(t,e,n,r)}finally{Je=i,Zs.transition=s}}function Jd(t,e,n,r){if(zu){var i=Oh(t,e,n,r);if(i===null)Mf(t,e,r,$u,n),Rg(t,r);else if(jI(i,t,e,n,r))r.stopPropagation();else if(Rg(t,r),e&4&&-1<FI.indexOf(t)){for(;i!==null;){var s=hl(i);if(s!==null&&Qv(s),s=Oh(t,e,n,r),s===null&&Mf(t,e,r,$u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mf(t,e,r,null,n)}}var $u=null;function Oh(t,e,n,r){if($u=null,t=Gd(r),t=Qi(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function e0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kI()){case Qd:return 1;case Wv:return 4;case ju:case NI:return 16;case qv:return 536870912;default:return 16}default:return 16}}var hi=null,Zd=null,yu=null;function t0(){if(yu)return yu;var t,e=Zd,n=e.length,r,i="value"in hi?hi.value:hi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yu=i.slice(t,1<r?1-r:void 0)}function _u(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function Cg(){return!1}function bn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jl:Cg,this.isPropagationStopped=Cg,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=bn(Ao),fl=mt({},Ao,{view:0,detail:0}),KI=bn(fl),Pf,Cf,ta,Cc=mt({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(Pf=t.screenX-ta.screenX,Cf=t.screenY-ta.screenY):Cf=Pf=0,ta=t),Pf)},movementY:function(t){return"movementY"in t?t.movementY:Cf}}),kg=bn(Cc),WI=mt({},Cc,{dataTransfer:0}),qI=bn(WI),HI=mt({},fl,{relatedTarget:0}),kf=bn(HI),GI=mt({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),QI=bn(GI),YI=mt({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XI=bn(YI),JI=mt({},Ao,{data:0}),Ng=bn(JI),ZI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tS[t])?!!e[t]:!1}function tp(){return nS}var rS=mt({},fl,{key:function(t){if(t.key){var e=ZI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_u(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?_u(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_u(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iS=bn(rS),sS=mt({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bg=bn(sS),oS=mt({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),aS=bn(oS),lS=mt({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),uS=bn(lS),cS=mt({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=bn(cS),hS=[9,13,27,32],np=Vr&&"CompositionEvent"in window,va=null;Vr&&"documentMode"in document&&(va=document.documentMode);var dS=Vr&&"TextEvent"in window&&!va,n0=Vr&&(!np||va&&8<va&&11>=va),Og=" ",Dg=!1;function r0(t,e){switch(t){case"keyup":return hS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function pS(t,e){switch(t){case"compositionend":return i0(e);case"keypress":return e.which!==32?null:(Dg=!0,Og);case"textInput":return t=e.data,t===Og&&Dg?null:t;default:return null}}function mS(t,e){if(Ms)return t==="compositionend"||!np&&r0(t,e)?(t=t0(),yu=Zd=hi=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var gS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gS[t.type]:e==="textarea"}function s0(t,e,n,r){Lv(r),e=Ku(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wa=null,Ma=null;function yS(t){g0(t,0)}function kc(t){var e=js(t);if(Cv(e))return t}function _S(t,e){if(t==="change")return e}var o0=!1;if(Vr){var Nf;if(Vr){var bf="oninput"in document;if(!bf){var Lg=document.createElement("div");Lg.setAttribute("oninput","return;"),bf=typeof Lg.oninput=="function"}Nf=bf}else Nf=!1;o0=Nf&&(!document.documentMode||9<document.documentMode)}function Mg(){wa&&(wa.detachEvent("onpropertychange",a0),Ma=wa=null)}function a0(t){if(t.propertyName==="value"&&kc(Ma)){var e=[];s0(e,Ma,t,Gd(t)),jv(yS,e)}}function vS(t,e,n){t==="focusin"?(Mg(),wa=e,Ma=n,wa.attachEvent("onpropertychange",a0)):t==="focusout"&&Mg()}function wS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(Ma)}function ES(t,e){if(t==="click")return kc(e)}function TS(t,e){if(t==="input"||t==="change")return kc(e)}function IS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:IS;function Ua(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mh.call(e,i)||!Xn(t[i],e[i]))return!1}return!0}function Ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fg(t,e){var n=Ug(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ug(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u0(){for(var t=window,e=Mu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Mu(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SS(t){var e=u0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l0(n.ownerDocument.documentElement,n)){if(r!==null&&rp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fg(n,s);var o=Fg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AS=Vr&&"documentMode"in document&&11>=document.documentMode,Us=null,Dh=null,Ea=null,Vh=!1;function jg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vh||Us==null||Us!==Mu(r)||(r=Us,"selectionStart"in r&&rp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ea&&Ua(Ea,r)||(Ea=r,r=Ku(Dh,"onSelect"),0<r.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Us)))}function Zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},Of={},c0={};Vr&&(c0=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Nc(t){if(Of[t])return Of[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in c0)return Of[t]=e[n];return t}var f0=Nc("animationend"),h0=Nc("animationiteration"),d0=Nc("animationstart"),p0=Nc("transitionend"),m0=new Map,Bg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(t,e){m0.set(t,e),ms(e,[t])}for(var Df=0;Df<Bg.length;Df++){var Vf=Bg[Df],xS=Vf.toLowerCase(),RS=Vf[0].toUpperCase()+Vf.slice(1);bi(xS,"on"+RS)}bi(f0,"onAnimationEnd");bi(h0,"onAnimationIteration");bi(d0,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(p0,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function zg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xI(r,e,void 0,t),t.currentTarget=null}function g0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,f=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;zg(i,l,f),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,f=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;zg(i,l,f),s=u}}}if(Fu)throw t=kh,Fu=!1,kh=null,t}function lt(t,e){var n=e[jh];n===void 0&&(n=e[jh]=new Set);var r=t+"__bubble";n.has(r)||(y0(e,t,2,!1),n.add(r))}function Lf(t,e,n){var r=0;e&&(r|=4),y0(n,t,r,e)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[eu]){t[eu]=!0,Sv.forEach(function(n){n!=="selectionchange"&&(PS.has(n)||Lf(n,!1,t),Lf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[eu]||(e[eu]=!0,Lf("selectionchange",!1,e))}}function y0(t,e,n,r){switch(e0(e)){case 1:var i=zI;break;case 4:i=$I;break;default:i=Jd}n=i.bind(null,e,n,t),i=void 0,!Ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}jv(function(){var f=s,p=Gd(n),g=[];e:{var v=m0.get(t);if(v!==void 0){var R=ep,O=t;switch(t){case"keypress":if(_u(n)===0)break e;case"keydown":case"keyup":R=iS;break;case"focusin":O="focus",R=kf;break;case"focusout":O="blur",R=kf;break;case"beforeblur":case"afterblur":R=kf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=kg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=qI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=aS;break;case f0:case h0:case d0:R=QI;break;case p0:R=uS;break;case"scroll":R=KI;break;case"wheel":R=fS;break;case"copy":case"cut":case"paste":R=XI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=bg}var L=(e&4)!==0,F=!L&&t==="scroll",P=L?v!==null?v+"Capture":null:v;L=[];for(var I=f,N;I!==null;){N=I;var $=N.stateNode;if(N.tag===5&&$!==null&&(N=$,P!==null&&($=Oa(I,P),$!=null&&L.push(ja(I,$,N)))),F)break;I=I.return}0<L.length&&(v=new R(v,O,null,n,p),g.push({event:v,listeners:L}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",v&&n!==Rh&&(O=n.relatedTarget||n.fromElement)&&(Qi(O)||O[Lr]))break e;if((R||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,R?(O=n.relatedTarget||n.toElement,R=f,O=O?Qi(O):null,O!==null&&(F=gs(O),O!==F||O.tag!==5&&O.tag!==6)&&(O=null)):(R=null,O=f),R!==O)){if(L=kg,$="onMouseLeave",P="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(L=bg,$="onPointerLeave",P="onPointerEnter",I="pointer"),F=R==null?v:js(R),N=O==null?v:js(O),v=new L($,I+"leave",R,n,p),v.target=F,v.relatedTarget=N,$=null,Qi(p)===f&&(L=new L(P,I+"enter",O,n,p),L.target=N,L.relatedTarget=F,$=L),F=$,R&&O)t:{for(L=R,P=O,I=0,N=L;N;N=Ns(N))I++;for(N=0,$=P;$;$=Ns($))N++;for(;0<I-N;)L=Ns(L),I--;for(;0<N-I;)P=Ns(P),N--;for(;I--;){if(L===P||P!==null&&L===P.alternate)break t;L=Ns(L),P=Ns(P)}L=null}else L=null;R!==null&&$g(g,v,R,L,!1),O!==null&&F!==null&&$g(g,F,O,L,!0)}}e:{if(v=f?js(f):window,R=v.nodeName&&v.nodeName.toLowerCase(),R==="select"||R==="input"&&v.type==="file")var Z=_S;else if(Vg(v))if(o0)Z=TS;else{Z=wS;var ee=vS}else(R=v.nodeName)&&R.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(Z=ES);if(Z&&(Z=Z(t,f))){s0(g,Z,n,p);break e}ee&&ee(t,v,f),t==="focusout"&&(ee=v._wrapperState)&&ee.controlled&&v.type==="number"&&Th(v,"number",v.value)}switch(ee=f?js(f):window,t){case"focusin":(Vg(ee)||ee.contentEditable==="true")&&(Us=ee,Dh=f,Ea=null);break;case"focusout":Ea=Dh=Us=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,jg(g,n,p);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":jg(g,n,p)}var x;if(np)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ms?r0(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(n0&&n.locale!=="ko"&&(Ms||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ms&&(x=t0()):(hi=p,Zd="value"in hi?hi.value:hi.textContent,Ms=!0)),ee=Ku(f,T),0<ee.length&&(T=new Ng(T,t,null,n,p),g.push({event:T,listeners:ee}),x?T.data=x:(x=i0(n),x!==null&&(T.data=x)))),(x=dS?pS(t,n):mS(t,n))&&(f=Ku(f,"onBeforeInput"),0<f.length&&(p=new Ng("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:f}),p.data=x))}g0(g,e)})}function ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ku(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oa(t,n),s!=null&&r.unshift(ja(t,s,i)),s=Oa(t,e),s!=null&&r.push(ja(t,s,i))),t=t.return}return r}function Ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $g(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,f=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&f!==null&&(l=f,i?(u=Oa(n,s),u!=null&&o.unshift(ja(n,u,l))):i||(u=Oa(n,s),u!=null&&o.push(ja(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(CS,`
`).replace(kS,"")}function tu(t,e,n){if(e=Kg(e),Kg(t)!==e&&n)throw Error(J(425))}function Wu(){}var Lh=null,Mh=null;function Uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(t){return Wg.resolve(null).then(t).catch(OS)}:Fh;function OS(t){setTimeout(function(){throw t})}function Uf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),La(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);La(e)}function vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),lr="__reactFiber$"+xo,Ba="__reactProps$"+xo,Lr="__reactContainer$"+xo,jh="__reactEvents$"+xo,DS="__reactListeners$"+xo,VS="__reactHandles$"+xo;function Qi(t){var e=t[lr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[lr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qg(t);t!==null;){if(n=t[lr])return n;t=qg(t)}return e}t=n,n=t.parentNode}return null}function hl(t){return t=t[lr]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function bc(t){return t[Ba]||null}var Bh=[],Bs=-1;function Oi(t){return{current:t}}function ct(t){0>Bs||(t.current=Bh[Bs],Bh[Bs]=null,Bs--)}function ot(t,e){Bs++,Bh[Bs]=t.current,t.current=e}var Pi={},ln=Oi(Pi),wn=Oi(!1),rs=Pi;function lo(t,e){var n=t.type.contextTypes;if(!n)return Pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function En(t){return t=t.childContextTypes,t!=null}function qu(){ct(wn),ct(ln)}function Hg(t,e,n){if(ln.current!==Pi)throw Error(J(168));ot(ln,e),ot(wn,n)}function _0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(J(108,vI(t)||"Unknown",i));return mt({},n,r)}function Hu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pi,rs=ln.current,ot(ln,t),ot(wn,wn.current),!0}function Gg(t,e,n){var r=t.stateNode;if(!r)throw Error(J(169));n?(t=_0(t,e,rs),r.__reactInternalMemoizedMergedChildContext=t,ct(wn),ct(ln),ot(ln,t)):ct(wn),ot(wn,n)}var Ar=null,Oc=!1,Ff=!1;function v0(t){Ar===null?Ar=[t]:Ar.push(t)}function LS(t){Oc=!0,v0(t)}function Di(){if(!Ff&&Ar!==null){Ff=!0;var t=0,e=Je;try{var n=Ar;for(Je=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ar=null,Oc=!1}catch(i){throw Ar!==null&&(Ar=Ar.slice(t+1)),Kv(Qd,Di),i}finally{Je=e,Ff=!1}}return null}var zs=[],$s=0,Gu=null,Qu=0,Vn=[],Ln=0,is=null,xr=1,Rr="";function Wi(t,e){zs[$s++]=Qu,zs[$s++]=Gu,Gu=t,Qu=e}function w0(t,e,n){Vn[Ln++]=xr,Vn[Ln++]=Rr,Vn[Ln++]=is,is=t;var r=xr;t=Rr;var i=32-Qn(r)-1;r&=~(1<<i),n+=1;var s=32-Qn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xr=1<<32-Qn(e)+i|n<<i|r,Rr=s+t}else xr=1<<s|n<<i|r,Rr=t}function ip(t){t.return!==null&&(Wi(t,1),w0(t,1,0))}function sp(t){for(;t===Gu;)Gu=zs[--$s],zs[$s]=null,Qu=zs[--$s],zs[$s]=null;for(;t===is;)is=Vn[--Ln],Vn[Ln]=null,Rr=Vn[--Ln],Vn[Ln]=null,xr=Vn[--Ln],Vn[Ln]=null}var Cn=null,Rn=null,ht=!1,Gn=null;function E0(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:xr,overflow:Rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,Rn=null,!0):!1;default:return!1}}function zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $h(t){if(ht){var e=Rn;if(e){var n=e;if(!Qg(t,e)){if(zh(t))throw Error(J(418));e=vi(n.nextSibling);var r=Cn;e&&Qg(t,e)?E0(r,n):(t.flags=t.flags&-4097|2,ht=!1,Cn=t)}}else{if(zh(t))throw Error(J(418));t.flags=t.flags&-4097|2,ht=!1,Cn=t}}}function Yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function nu(t){if(t!==Cn)return!1;if(!ht)return Yg(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uh(t.type,t.memoizedProps)),e&&(e=Rn)){if(zh(t))throw T0(),Error(J(418));for(;e;)E0(t,e),e=vi(e.nextSibling)}if(Yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Cn?vi(t.stateNode.nextSibling):null;return!0}function T0(){for(var t=Rn;t;)t=vi(t.nextSibling)}function uo(){Rn=Cn=null,ht=!1}function op(t){Gn===null?Gn=[t]:Gn.push(t)}var MS=$r.ReactCurrentBatchConfig;function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var r=n.stateNode}if(!r)throw Error(J(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function ru(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xg(t){var e=t._init;return e(t._payload)}function I0(t){function e(P,I){if(t){var N=P.deletions;N===null?(P.deletions=[I],P.flags|=16):N.push(I)}}function n(P,I){if(!t)return null;for(;I!==null;)e(P,I),I=I.sibling;return null}function r(P,I){for(P=new Map;I!==null;)I.key!==null?P.set(I.key,I):P.set(I.index,I),I=I.sibling;return P}function i(P,I){return P=Ii(P,I),P.index=0,P.sibling=null,P}function s(P,I,N){return P.index=N,t?(N=P.alternate,N!==null?(N=N.index,N<I?(P.flags|=2,I):N):(P.flags|=2,I)):(P.flags|=1048576,I)}function o(P){return t&&P.alternate===null&&(P.flags|=2),P}function l(P,I,N,$){return I===null||I.tag!==6?(I=qf(N,P.mode,$),I.return=P,I):(I=i(I,N),I.return=P,I)}function u(P,I,N,$){var Z=N.type;return Z===Ls?p(P,I,N.props.children,$,N.key):I!==null&&(I.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===ri&&Xg(Z)===I.type)?($=i(I,N.props),$.ref=na(P,I,N),$.return=P,$):($=Au(N.type,N.key,N.props,null,P.mode,$),$.ref=na(P,I,N),$.return=P,$)}function f(P,I,N,$){return I===null||I.tag!==4||I.stateNode.containerInfo!==N.containerInfo||I.stateNode.implementation!==N.implementation?(I=Hf(N,P.mode,$),I.return=P,I):(I=i(I,N.children||[]),I.return=P,I)}function p(P,I,N,$,Z){return I===null||I.tag!==7?(I=ts(N,P.mode,$,Z),I.return=P,I):(I=i(I,N),I.return=P,I)}function g(P,I,N){if(typeof I=="string"&&I!==""||typeof I=="number")return I=qf(""+I,P.mode,N),I.return=P,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ql:return N=Au(I.type,I.key,I.props,null,P.mode,N),N.ref=na(P,null,I),N.return=P,N;case Vs:return I=Hf(I,P.mode,N),I.return=P,I;case ri:var $=I._init;return g(P,$(I._payload),N)}if(aa(I)||Xo(I))return I=ts(I,P.mode,N,null),I.return=P,I;ru(P,I)}return null}function v(P,I,N,$){var Z=I!==null?I.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return Z!==null?null:l(P,I,""+N,$);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ql:return N.key===Z?u(P,I,N,$):null;case Vs:return N.key===Z?f(P,I,N,$):null;case ri:return Z=N._init,v(P,I,Z(N._payload),$)}if(aa(N)||Xo(N))return Z!==null?null:p(P,I,N,$,null);ru(P,N)}return null}function R(P,I,N,$,Z){if(typeof $=="string"&&$!==""||typeof $=="number")return P=P.get(N)||null,l(I,P,""+$,Z);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ql:return P=P.get($.key===null?N:$.key)||null,u(I,P,$,Z);case Vs:return P=P.get($.key===null?N:$.key)||null,f(I,P,$,Z);case ri:var ee=$._init;return R(P,I,N,ee($._payload),Z)}if(aa($)||Xo($))return P=P.get(N)||null,p(I,P,$,Z,null);ru(I,$)}return null}function O(P,I,N,$){for(var Z=null,ee=null,x=I,T=I=0,S=null;x!==null&&T<N.length;T++){x.index>T?(S=x,x=null):S=x.sibling;var C=v(P,x,N[T],$);if(C===null){x===null&&(x=S);break}t&&x&&C.alternate===null&&e(P,x),I=s(C,I,T),ee===null?Z=C:ee.sibling=C,ee=C,x=S}if(T===N.length)return n(P,x),ht&&Wi(P,T),Z;if(x===null){for(;T<N.length;T++)x=g(P,N[T],$),x!==null&&(I=s(x,I,T),ee===null?Z=x:ee.sibling=x,ee=x);return ht&&Wi(P,T),Z}for(x=r(P,x);T<N.length;T++)S=R(x,P,T,N[T],$),S!==null&&(t&&S.alternate!==null&&x.delete(S.key===null?T:S.key),I=s(S,I,T),ee===null?Z=S:ee.sibling=S,ee=S);return t&&x.forEach(function(b){return e(P,b)}),ht&&Wi(P,T),Z}function L(P,I,N,$){var Z=Xo(N);if(typeof Z!="function")throw Error(J(150));if(N=Z.call(N),N==null)throw Error(J(151));for(var ee=Z=null,x=I,T=I=0,S=null,C=N.next();x!==null&&!C.done;T++,C=N.next()){x.index>T?(S=x,x=null):S=x.sibling;var b=v(P,x,C.value,$);if(b===null){x===null&&(x=S);break}t&&x&&b.alternate===null&&e(P,x),I=s(b,I,T),ee===null?Z=b:ee.sibling=b,ee=b,x=S}if(C.done)return n(P,x),ht&&Wi(P,T),Z;if(x===null){for(;!C.done;T++,C=N.next())C=g(P,C.value,$),C!==null&&(I=s(C,I,T),ee===null?Z=C:ee.sibling=C,ee=C);return ht&&Wi(P,T),Z}for(x=r(P,x);!C.done;T++,C=N.next())C=R(x,P,T,C.value,$),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?T:C.key),I=s(C,I,T),ee===null?Z=C:ee.sibling=C,ee=C);return t&&x.forEach(function(V){return e(P,V)}),ht&&Wi(P,T),Z}function F(P,I,N,$){if(typeof N=="object"&&N!==null&&N.type===Ls&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case ql:e:{for(var Z=N.key,ee=I;ee!==null;){if(ee.key===Z){if(Z=N.type,Z===Ls){if(ee.tag===7){n(P,ee.sibling),I=i(ee,N.props.children),I.return=P,P=I;break e}}else if(ee.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===ri&&Xg(Z)===ee.type){n(P,ee.sibling),I=i(ee,N.props),I.ref=na(P,ee,N),I.return=P,P=I;break e}n(P,ee);break}else e(P,ee);ee=ee.sibling}N.type===Ls?(I=ts(N.props.children,P.mode,$,N.key),I.return=P,P=I):($=Au(N.type,N.key,N.props,null,P.mode,$),$.ref=na(P,I,N),$.return=P,P=$)}return o(P);case Vs:e:{for(ee=N.key;I!==null;){if(I.key===ee)if(I.tag===4&&I.stateNode.containerInfo===N.containerInfo&&I.stateNode.implementation===N.implementation){n(P,I.sibling),I=i(I,N.children||[]),I.return=P,P=I;break e}else{n(P,I);break}else e(P,I);I=I.sibling}I=Hf(N,P.mode,$),I.return=P,P=I}return o(P);case ri:return ee=N._init,F(P,I,ee(N._payload),$)}if(aa(N))return O(P,I,N,$);if(Xo(N))return L(P,I,N,$);ru(P,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,I!==null&&I.tag===6?(n(P,I.sibling),I=i(I,N),I.return=P,P=I):(n(P,I),I=qf(N,P.mode,$),I.return=P,P=I),o(P)):n(P,I)}return F}var co=I0(!0),S0=I0(!1),Yu=Oi(null),Xu=null,Ks=null,ap=null;function lp(){ap=Ks=Xu=null}function up(t){var e=Yu.current;ct(Yu),t._currentValue=e}function Kh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){Xu=t,ap=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(Xu===null)throw Error(J(308));Ks=t,Xu.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var Yi=null;function cp(t){Yi===null?Yi=[t]:Yi.push(t)}function A0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mr(t,r)}function Mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ii=!1;function fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function x0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mr(t,n)}return i=r.interleaved,i===null?(e.next=e,cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mr(t,n)}function vu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}function Jg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ju(t,e,n,r){var i=t.updateQueue;ii=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,f=u.next;u.next=null,o===null?s=f:o.next=f,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=f:l.next=f,p.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,p=f=u=null,l=s;do{var v=l.lane,R=l.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var O=t,L=l;switch(v=e,R=n,L.tag){case 1:if(O=L.payload,typeof O=="function"){g=O.call(R,g,v);break e}g=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=L.payload,v=typeof O=="function"?O.call(R,g,v):O,v==null)break e;g=mt({},g,v);break e;case 2:ii=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else R={eventTime:R,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(f=p=R,u=g):p=p.next=R,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(p===null&&(u=g),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);os|=o,t.lanes=o,t.memoizedState=g}}function Zg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(J(191,i));i.call(r)}}}var dl={},fr=Oi(dl),za=Oi(dl),$a=Oi(dl);function Xi(t){if(t===dl)throw Error(J(174));return t}function hp(t,e){switch(ot($a,e),ot(za,t),ot(fr,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sh(e,t)}ct(fr),ot(fr,e)}function fo(){ct(fr),ct(za),ct($a)}function R0(t){Xi($a.current);var e=Xi(fr.current),n=Sh(e,t.type);e!==n&&(ot(za,t),ot(fr,n))}function dp(t){za.current===t&&(ct(fr),ct(za))}var dt=Oi(0);function Zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jf=[];function pp(){for(var t=0;t<jf.length;t++)jf[t]._workInProgressVersionPrimary=null;jf.length=0}var wu=$r.ReactCurrentDispatcher,Bf=$r.ReactCurrentBatchConfig,ss=0,pt=null,kt=null,Mt=null,ec=!1,Ta=!1,Ka=0,US=0;function Zt(){throw Error(J(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function gp(t,e,n,r,i,s){if(ss=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wu.current=t===null||t.memoizedState===null?zS:$S,t=n(r,i),Ta){s=0;do{if(Ta=!1,Ka=0,25<=s)throw Error(J(301));s+=1,Mt=kt=null,e.updateQueue=null,wu.current=KS,t=n(r,i)}while(Ta)}if(wu.current=tc,e=kt!==null&&kt.next!==null,ss=0,Mt=kt=pt=null,ec=!1,e)throw Error(J(300));return t}function yp(){var t=Ka!==0;return Ka=0,t}function ar(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?pt.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function jn(){if(kt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Mt===null?pt.memoizedState:Mt.next;if(e!==null)Mt=e,kt=t;else{if(t===null)throw Error(J(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Mt===null?pt.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function Wa(t,e){return typeof e=="function"?e(t):e}function zf(t){var e=jn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var r=kt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,f=s;do{var p=f.lane;if((ss&p)===p)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var g={lane:p,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,pt.lanes|=p,os|=p}f=f.next}while(f!==null&&f!==s);u===null?o=r:u.next=l,Xn(r,e.memoizedState)||(vn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pt.lanes|=s,os|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $f(t){var e=jn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xn(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function P0(){}function C0(t,e){var n=pt,r=jn(),i=e(),s=!Xn(r.memoizedState,i);if(s&&(r.memoizedState=i,vn=!0),r=r.queue,_p(b0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Mt!==null&&Mt.memoizedState.tag&1){if(n.flags|=2048,qa(9,N0.bind(null,n,r,i,e),void 0,null),Ut===null)throw Error(J(349));ss&30||k0(n,e,i)}return i}function k0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function N0(t,e,n,r){e.value=n,e.getSnapshot=r,O0(e)&&D0(t)}function b0(t,e,n){return n(function(){O0(e)&&D0(t)})}function O0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function D0(t){var e=Mr(t,1);e!==null&&Yn(e,t,1,-1)}function ey(t){var e=ar();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},e.queue=t,t=t.dispatch=BS.bind(null,pt,t),[e.memoizedState,t]}function qa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function V0(){return jn().memoizedState}function Eu(t,e,n,r){var i=ar();pt.flags|=t,i.memoizedState=qa(1|e,n,void 0,r===void 0?null:r)}function Dc(t,e,n,r){var i=jn();r=r===void 0?null:r;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,r!==null&&mp(r,o.deps)){i.memoizedState=qa(e,n,s,r);return}}pt.flags|=t,i.memoizedState=qa(1|e,n,s,r)}function ty(t,e){return Eu(8390656,8,t,e)}function _p(t,e){return Dc(2048,8,t,e)}function L0(t,e){return Dc(4,2,t,e)}function M0(t,e){return Dc(4,4,t,e)}function U0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function F0(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4,4,U0.bind(null,e,t),n)}function vp(){}function j0(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function B0(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function z0(t,e,n){return ss&21?(Xn(n,e)||(n=Hv(),pt.lanes|=n,os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function FS(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var r=Bf.transition;Bf.transition={};try{t(!1),e()}finally{Je=n,Bf.transition=r}}function $0(){return jn().memoizedState}function jS(t,e,n){var r=Ti(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K0(t))W0(e,n);else if(n=A0(t,e,n,r),n!==null){var i=hn();Yn(n,t,r,i),q0(n,e,r)}}function BS(t,e,n){var r=Ti(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(t))W0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Xn(l,o)){var u=e.interleaved;u===null?(i.next=i,cp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=A0(t,e,i,r),n!==null&&(i=hn(),Yn(n,t,r,i),q0(n,e,r))}}function K0(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function W0(t,e){Ta=ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}var tc={readContext:Fn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},zS={readContext:Fn,useCallback:function(t,e){return ar().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:ty,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4194308,4,U0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Eu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Eu(4,2,t,e)},useMemo:function(t,e){var n=ar();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ar();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jS.bind(null,pt,t),[r.memoizedState,t]},useRef:function(t){var e=ar();return t={current:t},e.memoizedState=t},useState:ey,useDebugValue:vp,useDeferredValue:function(t){return ar().memoizedState=t},useTransition:function(){var t=ey(!1),e=t[0];return t=FS.bind(null,t[1]),ar().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pt,i=ar();if(ht){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Ut===null)throw Error(J(349));ss&30||k0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ty(b0.bind(null,r,s,t),[t]),r.flags|=2048,qa(9,N0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ar(),e=Ut.identifierPrefix;if(ht){var n=Rr,r=xr;n=(r&~(1<<32-Qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=US++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$S={readContext:Fn,useCallback:j0,useContext:Fn,useEffect:_p,useImperativeHandle:F0,useInsertionEffect:L0,useLayoutEffect:M0,useMemo:B0,useReducer:zf,useRef:V0,useState:function(){return zf(Wa)},useDebugValue:vp,useDeferredValue:function(t){var e=jn();return z0(e,kt.memoizedState,t)},useTransition:function(){var t=zf(Wa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:P0,useSyncExternalStore:C0,useId:$0,unstable_isNewReconciler:!1},KS={readContext:Fn,useCallback:j0,useContext:Fn,useEffect:_p,useImperativeHandle:F0,useInsertionEffect:L0,useLayoutEffect:M0,useMemo:B0,useReducer:$f,useRef:V0,useState:function(){return $f(Wa)},useDebugValue:vp,useDeferredValue:function(t){var e=jn();return kt===null?e.memoizedState=t:z0(e,kt.memoizedState,t)},useTransition:function(){var t=$f(Wa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:P0,useSyncExternalStore:C0,useId:$0,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vc={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=hn(),i=Ti(t),s=Nr(r,i);s.payload=e,n!=null&&(s.callback=n),e=wi(t,s,i),e!==null&&(Yn(e,t,i,r),vu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=hn(),i=Ti(t),s=Nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wi(t,s,i),e!==null&&(Yn(e,t,i,r),vu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),r=Ti(t),i=Nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=wi(t,i,r),e!==null&&(Yn(e,t,r,n),vu(e,t,r))}};function ny(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,r)||!Ua(i,s):!0}function H0(t,e,n){var r=!1,i=Pi,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(i=En(e)?rs:ln.current,r=e.contextTypes,s=(r=r!=null)?lo(t,i):Pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ry(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function qh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Fn(s):(s=En(e)?rs:ln.current,i.context=lo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vc.enqueueReplaceState(i,i.state,null),Ju(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ho(t,e){try{var n="",r=e;do n+=_I(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WS=typeof WeakMap=="function"?WeakMap:Map;function G0(t,e,n){n=Nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rc||(rc=!0,rd=r),Hh(t,e)},n}function Q0(t,e,n){n=Nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Hh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hh(t,e),typeof r!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function iy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new WS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sA.bind(null,t,e,n),e.then(t,t))}function sy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function oy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nr(-1,1),e.tag=2,wi(n,e,1))),n.lanes|=1),t)}var qS=$r.ReactCurrentOwner,vn=!1;function fn(t,e,n,r){e.child=t===null?S0(e,null,n,r):co(e,t.child,n,r)}function ay(t,e,n,r,i){n=n.render;var s=e.ref;return eo(e,i),r=gp(t,e,n,r,s,i),n=yp(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(ht&&n&&ip(e),e.flags|=1,fn(t,e,r,i),e.child)}function ly(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Y0(t,e,s,r,i)):(t=Au(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(o,r)&&t.ref===e.ref)return Ur(t,e,i)}return e.flags|=1,t=Ii(s,r),t.ref=e.ref,t.return=e,e.child=t}function Y0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ua(s,r)&&t.ref===e.ref)if(vn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Ur(t,e,i)}return Gh(t,e,n,r,i)}function X0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(qs,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(qs,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ot(qs,xn),xn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ot(qs,xn),xn|=r;return fn(t,e,i,n),e.child}function J0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gh(t,e,n,r,i){var s=En(n)?rs:ln.current;return s=lo(e,s),eo(e,i),n=gp(t,e,n,r,s,i),r=yp(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(ht&&r&&ip(e),e.flags|=1,fn(t,e,n,i),e.child)}function uy(t,e,n,r,i){if(En(n)){var s=!0;Hu(e)}else s=!1;if(eo(e,i),e.stateNode===null)Tu(t,e),H0(e,n,r),qh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Fn(f):(f=En(n)?rs:ln.current,f=lo(e,f));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==f)&&ry(e,o,r,f),ii=!1;var v=e.memoizedState;o.state=v,Ju(e,r,o,i),u=e.memoizedState,l!==r||v!==u||wn.current||ii?(typeof p=="function"&&(Wh(e,n,p,r),u=e.memoizedState),(l=ii||ny(e,n,l,r,v,u,f))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=f,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,x0(t,e),l=e.memoizedProps,f=e.type===e.elementType?l:qn(e.type,l),o.props=f,g=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Fn(u):(u=En(n)?rs:ln.current,u=lo(e,u));var R=n.getDerivedStateFromProps;(p=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||v!==u)&&ry(e,o,r,u),ii=!1,v=e.memoizedState,o.state=v,Ju(e,r,o,i);var O=e.memoizedState;l!==g||v!==O||wn.current||ii?(typeof R=="function"&&(Wh(e,n,R,r),O=e.memoizedState),(f=ii||ny(e,n,f,r,v,O,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,O,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,O,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=O),o.props=r,o.state=O,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Qh(t,e,n,r,s,i)}function Qh(t,e,n,r,i,s){J0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gg(e,n,!1),Ur(t,e,s);r=e.stateNode,qS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=co(e,t.child,null,s),e.child=co(e,null,l,s)):fn(t,e,l,s),e.memoizedState=r.state,i&&Gg(e,n,!0),e.child}function Z0(t){var e=t.stateNode;e.pendingContext?Hg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hg(t,e.context,!1),hp(t,e.containerInfo)}function cy(t,e,n,r,i){return uo(),op(i),e.flags|=256,fn(t,e,n,r),e.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function Xh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ew(t,e,n){var r=e.pendingProps,i=dt.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ot(dt,i&1),t===null)return $h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,r,0,null),t=ts(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xh(n),e.memoizedState=Yh,t):wp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return HS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ii(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ii(l,s):(s=ts(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yh,r}return s=t.child,t=s.sibling,r=Ii(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wp(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function iu(t,e,n,r){return r!==null&&op(r),co(e,t.child,null,n),t=wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kf(Error(J(422))),iu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Uc({mode:"visible",children:r.children},i,0,null),s=ts(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&co(e,t.child,null,o),e.child.memoizedState=Xh(o),e.memoizedState=Yh,s);if(!(e.mode&1))return iu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(J(419)),r=Kf(s,r,void 0),iu(t,e,o,r)}if(l=(o&t.childLanes)!==0,vn||l){if(r=Ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mr(t,i),Yn(r,t,i,-1))}return xp(),r=Kf(Error(J(421))),iu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=oA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rn=vi(i.nextSibling),Cn=e,ht=!0,Gn=null,t!==null&&(Vn[Ln++]=xr,Vn[Ln++]=Rr,Vn[Ln++]=is,xr=t.id,Rr=t.overflow,is=e),e=wp(e,r.children),e.flags|=4096,e)}function fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kh(t.return,e,n)}function Wf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(fn(t,e,r.children,n),r=dt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fy(t,n,e);else if(t.tag===19)fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ot(dt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wf(e,!0,n,null,s);break;case"together":Wf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GS(t,e,n){switch(e.tag){case 3:Z0(e),uo();break;case 5:R0(e);break;case 1:En(e.type)&&Hu(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ot(Yu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ot(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?ew(t,e,n):(ot(dt,dt.current&1),t=Ur(t,e,n),t!==null?t.sibling:null);ot(dt,dt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return tw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ot(dt,dt.current),r)break;return null;case 22:case 23:return e.lanes=0,X0(t,e,n)}return Ur(t,e,n)}var nw,Jh,rw,iw;nw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jh=function(){};rw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xi(fr.current);var s=null;switch(n){case"input":i=wh(t,i),r=wh(t,r),s=[];break;case"select":i=mt({},i,{value:void 0}),r=mt({},r,{value:void 0}),s=[];break;case"textarea":i=Ih(t,i),r=Ih(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wu)}Ah(n,r);var o;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var l=i[f];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Na.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var u=r[f];if(l=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&u!==l&&(u!=null||l!=null))if(f==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Na.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&lt("scroll",t),s||l===u||(s=[])):(s=s||[]).push(f,u))}n&&(s=s||[]).push("style",n);var f=s;(e.updateQueue=f)&&(e.flags|=4)}};iw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ra(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function QS(t,e,n){var r=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return En(e.type)&&qu(),en(e),null;case 3:return r=e.stateNode,fo(),ct(wn),ct(ln),pp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(od(Gn),Gn=null))),Jh(t,e),en(e),null;case 5:dp(e);var i=Xi($a.current);if(n=e.type,t!==null&&e.stateNode!=null)rw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(J(166));return en(e),null}if(t=Xi(fr.current),nu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[lr]=e,r[Ba]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",r),lt("close",r);break;case"iframe":case"object":case"embed":lt("load",r);break;case"video":case"audio":for(i=0;i<ua.length;i++)lt(ua[i],r);break;case"source":lt("error",r);break;case"img":case"image":case"link":lt("error",r),lt("load",r);break;case"details":lt("toggle",r);break;case"input":wg(r,s),lt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},lt("invalid",r);break;case"textarea":Tg(r,s),lt("invalid",r)}Ah(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&tu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&tu(r.textContent,l,t),i=["children",""+l]):Na.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&lt("scroll",r)}switch(n){case"input":Hl(r),Eg(r,s,!0);break;case"textarea":Hl(r),Ig(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[lr]=e,t[Ba]=r,nw(t,e,!1,!1),e.stateNode=t;e:{switch(o=xh(n,r),n){case"dialog":lt("cancel",t),lt("close",t),i=r;break;case"iframe":case"object":case"embed":lt("load",t),i=r;break;case"video":case"audio":for(i=0;i<ua.length;i++)lt(ua[i],t);i=r;break;case"source":lt("error",t),i=r;break;case"img":case"image":case"link":lt("error",t),lt("load",t),i=r;break;case"details":lt("toggle",t),i=r;break;case"input":wg(t,r),i=wh(t,r),lt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=mt({},r,{value:void 0}),lt("invalid",t);break;case"textarea":Tg(t,r),i=Ih(t,r),lt("invalid",t);break;default:i=r}Ah(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Vv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ov(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ba(t,u):typeof u=="number"&&ba(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Na.hasOwnProperty(s)?u!=null&&s==="onScroll"&&lt("scroll",t):u!=null&&Kd(t,s,u,o))}switch(n){case"input":Hl(t),Eg(t,r,!1);break;case"textarea":Hl(t),Ig(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ri(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ys(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ys(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)iw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(J(166));if(n=Xi($a.current),Xi(fr.current),nu(e)){if(r=e.stateNode,n=e.memoizedProps,r[lr]=e,(s=r.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:tu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lr]=e,e.stateNode=r}return en(e),null;case 13:if(ct(dt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&Rn!==null&&e.mode&1&&!(e.flags&128))T0(),uo(),e.flags|=98560,s=!1;else if(s=nu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[lr]=e}else uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Gn!==null&&(od(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Nt===0&&(Nt=3):xp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return fo(),Jh(t,e),t===null&&Fa(e.stateNode.containerInfo),en(e),null;case 10:return up(e.type._context),en(e),null;case 17:return En(e.type)&&qu(),en(e),null;case 19:if(ct(dt),s=e.memoizedState,s===null)return en(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ra(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zu(t),o!==null){for(e.flags|=128,ra(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>po&&(e.flags|=128,r=!0,ra(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return en(e),null}else 2*St()-s.renderingStartTime>po&&n!==1073741824&&(e.flags|=128,r=!0,ra(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=dt.current,ot(dt,r?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function YS(t,e){switch(sp(e),e.tag){case 1:return En(e.type)&&qu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),ct(wn),ct(ln),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(ct(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(dt),null;case 4:return fo(),null;case 10:return up(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var su=!1,rn=!1,XS=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){vt(t,e,r)}else n.current=null}function Zh(t,e,n){try{n()}catch(r){vt(t,e,r)}}var hy=!1;function JS(t,e){if(Lh=zu,t=u0(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,f=0,p=0,g=t,v=null;t:for(;;){for(var R;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(R=g.firstChild)!==null;)v=g,g=R;for(;;){if(g===t)break t;if(v===n&&++f===i&&(l=o),v===s&&++p===r&&(u=o),(R=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},zu=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var O=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var L=O.memoizedProps,F=O.memoizedState,P=e.stateNode,I=P.getSnapshotBeforeUpdate(e.elementType===e.type?L:qn(e.type,L),F);P.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var N=e.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch($){vt(e,e.return,$)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return O=hy,hy=!1,O}function Ia(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zh(e,n,s)}i=i.next}while(i!==r)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sw(t){var e=t.alternate;e!==null&&(t.alternate=null,sw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[lr],delete e[Ba],delete e[jh],delete e[DS],delete e[VS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ow(t){return t.tag===5||t.tag===3||t.tag===4}function dy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ow(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wu));else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}var zt=null,Hn=!1;function ti(t,e,n){for(n=n.child;n!==null;)aw(t,e,n),n=n.sibling}function aw(t,e,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:rn||Ws(n,e);case 6:var r=zt,i=Hn;zt=null,ti(t,e,n),zt=r,Hn=i,zt!==null&&(Hn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Hn?(t=zt,n=n.stateNode,t.nodeType===8?Uf(t.parentNode,n):t.nodeType===1&&Uf(t,n),La(t)):Uf(zt,n.stateNode));break;case 4:r=zt,i=Hn,zt=n.stateNode.containerInfo,Hn=!0,ti(t,e,n),zt=r,Hn=i;break;case 0:case 11:case 14:case 15:if(!rn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zh(n,e,o),i=i.next}while(i!==r)}ti(t,e,n);break;case 1:if(!rn&&(Ws(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){vt(n,e,l)}ti(t,e,n);break;case 21:ti(t,e,n);break;case 22:n.mode&1?(rn=(r=rn)||n.memoizedState!==null,ti(t,e,n),rn=r):ti(t,e,n);break;default:ti(t,e,n)}}function py(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XS),e.forEach(function(r){var i=aA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:zt=l.stateNode,Hn=!1;break e;case 3:zt=l.stateNode.containerInfo,Hn=!0;break e;case 4:zt=l.stateNode.containerInfo,Hn=!0;break e}l=l.return}if(zt===null)throw Error(J(160));aw(s,o,i),zt=null,Hn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){vt(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lw(e,t),e=e.sibling}function lw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),sr(t),r&4){try{Ia(3,t,t.return),Lc(3,t)}catch(L){vt(t,t.return,L)}try{Ia(5,t,t.return)}catch(L){vt(t,t.return,L)}}break;case 1:Wn(e,t),sr(t),r&512&&n!==null&&Ws(n,n.return);break;case 5:if(Wn(e,t),sr(t),r&512&&n!==null&&Ws(n,n.return),t.flags&32){var i=t.stateNode;try{ba(i,"")}catch(L){vt(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&kv(i,s),xh(l,o);var f=xh(l,s);for(o=0;o<u.length;o+=2){var p=u[o],g=u[o+1];p==="style"?Vv(i,g):p==="dangerouslySetInnerHTML"?Ov(i,g):p==="children"?ba(i,g):Kd(i,p,g,f)}switch(l){case"input":Eh(i,s);break;case"textarea":Nv(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Ys(i,!!s.multiple,R,!1):v!==!!s.multiple&&(s.defaultValue!=null?Ys(i,!!s.multiple,s.defaultValue,!0):Ys(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ba]=s}catch(L){vt(t,t.return,L)}}break;case 6:if(Wn(e,t),sr(t),r&4){if(t.stateNode===null)throw Error(J(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(L){vt(t,t.return,L)}}break;case 3:if(Wn(e,t),sr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(L){vt(t,t.return,L)}break;case 4:Wn(e,t),sr(t);break;case 13:Wn(e,t),sr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ip=St())),r&4&&py(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(f=rn)||p,Wn(e,t),rn=f):Wn(e,t),sr(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!p&&t.mode&1)for(he=t,p=t.child;p!==null;){for(g=he=p;he!==null;){switch(v=he,R=v.child,v.tag){case 0:case 11:case 14:case 15:Ia(4,v,v.return);break;case 1:Ws(v,v.return);var O=v.stateNode;if(typeof O.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,O.props=e.memoizedProps,O.state=e.memoizedState,O.componentWillUnmount()}catch(L){vt(r,n,L)}}break;case 5:Ws(v,v.return);break;case 22:if(v.memoizedState!==null){gy(g);continue}}R!==null?(R.return=v,he=R):gy(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Dv("display",o))}catch(L){vt(t,t.return,L)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=f?"":g.memoizedProps}catch(L){vt(t,t.return,L)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Wn(e,t),sr(t),r&4&&py(t);break;case 21:break;default:Wn(e,t),sr(t)}}function sr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ow(n)){var r=n;break e}n=n.return}throw Error(J(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ba(i,""),r.flags&=-33);var s=dy(t);nd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=dy(t);td(t,l,o);break;default:throw Error(J(161))}}catch(u){vt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZS(t,e,n){he=t,uw(t)}function uw(t,e,n){for(var r=(t.mode&1)!==0;he!==null;){var i=he,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||su;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rn;l=su;var f=rn;if(su=o,(rn=u)&&!f)for(he=i;he!==null;)o=he,u=o.child,o.tag===22&&o.memoizedState!==null?yy(i):u!==null?(u.return=o,he=u):yy(i);for(;s!==null;)he=s,uw(s),s=s.sibling;he=i,su=l,rn=f}my(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,he=s):my(t)}}function my(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Lc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var p=f.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&La(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}rn||e.flags&512&&ed(e)}catch(v){vt(e,e.return,v)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function gy(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function yy(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(u){vt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){vt(e,i,u)}}var s=e.return;try{ed(e)}catch(u){vt(e,s,u)}break;case 5:var o=e.return;try{ed(e)}catch(u){vt(e,o,u)}}}catch(u){vt(e,e.return,u)}if(e===t){he=null;break}var l=e.sibling;if(l!==null){l.return=e.return,he=l;break}he=e.return}}var eA=Math.ceil,nc=$r.ReactCurrentDispatcher,Ep=$r.ReactCurrentOwner,Un=$r.ReactCurrentBatchConfig,Ge=0,Ut=null,Rt=null,Wt=0,xn=0,qs=Oi(0),Nt=0,Ha=null,os=0,Mc=0,Tp=0,Sa=null,yn=null,Ip=0,po=1/0,Ir=null,rc=!1,rd=null,Ei=null,ou=!1,di=null,ic=0,Aa=0,id=null,Iu=-1,Su=0;function hn(){return Ge&6?St():Iu!==-1?Iu:Iu=St()}function Ti(t){return t.mode&1?Ge&2&&Wt!==0?Wt&-Wt:MS.transition!==null?(Su===0&&(Su=Hv()),Su):(t=Je,t!==0||(t=window.event,t=t===void 0?16:e0(t.type)),t):1}function Yn(t,e,n,r){if(50<Aa)throw Aa=0,id=null,Error(J(185));cl(t,n,r),(!(Ge&2)||t!==Ut)&&(t===Ut&&(!(Ge&2)&&(Mc|=n),Nt===4&&oi(t,Wt)),Tn(t,r),n===1&&Ge===0&&!(e.mode&1)&&(po=St()+500,Oc&&Di()))}function Tn(t,e){var n=t.callbackNode;MI(t,e);var r=Bu(t,t===Ut?Wt:0);if(r===0)n!==null&&xg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xg(n),e===1)t.tag===0?LS(_y.bind(null,t)):v0(_y.bind(null,t)),bS(function(){!(Ge&6)&&Di()}),n=null;else{switch(Gv(r)){case 1:n=Qd;break;case 4:n=Wv;break;case 16:n=ju;break;case 536870912:n=qv;break;default:n=ju}n=yw(n,cw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cw(t,e){if(Iu=-1,Su=0,Ge&6)throw Error(J(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var r=Bu(t,t===Ut?Wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sc(t,r);else{e=r;var i=Ge;Ge|=2;var s=hw();(Ut!==t||Wt!==e)&&(Ir=null,po=St()+500,es(t,e));do try{rA();break}catch(l){fw(t,l)}while(!0);lp(),nc.current=s,Ge=i,Rt!==null?e=0:(Ut=null,Wt=0,e=Nt)}if(e!==0){if(e===2&&(i=Nh(t),i!==0&&(r=i,e=sd(t,i))),e===1)throw n=Ha,es(t,0),oi(t,r),Tn(t,St()),n;if(e===6)oi(t,r);else{if(i=t.current.alternate,!(r&30)&&!tA(i)&&(e=sc(t,r),e===2&&(s=Nh(t),s!==0&&(r=s,e=sd(t,s))),e===1))throw n=Ha,es(t,0),oi(t,r),Tn(t,St()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(J(345));case 2:qi(t,yn,Ir);break;case 3:if(oi(t,r),(r&130023424)===r&&(e=Ip+500-St(),10<e)){if(Bu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){hn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fh(qi.bind(null,t,yn,Ir),e);break}qi(t,yn,Ir);break;case 4:if(oi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=St()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eA(r/1960))-r,10<r){t.timeoutHandle=Fh(qi.bind(null,t,yn,Ir),r);break}qi(t,yn,Ir);break;case 5:qi(t,yn,Ir);break;default:throw Error(J(329))}}}return Tn(t,St()),t.callbackNode===n?cw.bind(null,t):null}function sd(t,e){var n=Sa;return t.current.memoizedState.isDehydrated&&(es(t,e).flags|=256),t=sc(t,e),t!==2&&(e=yn,yn=n,e!==null&&od(e)),t}function od(t){yn===null?yn=t:yn.push.apply(yn,t)}function tA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oi(t,e){for(e&=~Tp,e&=~Mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),r=1<<n;t[n]=-1,e&=~r}}function _y(t){if(Ge&6)throw Error(J(327));to();var e=Bu(t,0);if(!(e&1))return Tn(t,St()),null;var n=sc(t,e);if(t.tag!==0&&n===2){var r=Nh(t);r!==0&&(e=r,n=sd(t,r))}if(n===1)throw n=Ha,es(t,0),oi(t,e),Tn(t,St()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qi(t,yn,Ir),Tn(t,St()),null}function Sp(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(po=St()+500,Oc&&Di())}}function as(t){di!==null&&di.tag===0&&!(Ge&6)&&to();var e=Ge;Ge|=1;var n=Un.transition,r=Je;try{if(Un.transition=null,Je=1,t)return t()}finally{Je=r,Un.transition=n,Ge=e,!(Ge&6)&&Di()}}function Ap(){xn=qs.current,ct(qs)}function es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NS(n)),Rt!==null)for(n=Rt.return;n!==null;){var r=n;switch(sp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qu();break;case 3:fo(),ct(wn),ct(ln),pp();break;case 5:dp(r);break;case 4:fo();break;case 13:ct(dt);break;case 19:ct(dt);break;case 10:up(r.type._context);break;case 22:case 23:Ap()}n=n.return}if(Ut=t,Rt=t=Ii(t.current,null),Wt=xn=e,Nt=0,Ha=null,Tp=Mc=os=0,yn=Sa=null,Yi!==null){for(e=0;e<Yi.length;e++)if(n=Yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yi=null}return t}function fw(t,e){do{var n=Rt;try{if(lp(),wu.current=tc,ec){for(var r=pt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ec=!1}if(ss=0,Mt=kt=pt=null,Ta=!1,Ka=0,Ep.current=null,n===null||n.return===null){Nt=1,Ha=e,Rt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Wt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var R=sy(o);if(R!==null){R.flags&=-257,oy(R,o,l,s,e),R.mode&1&&iy(s,f,e),e=R,u=f;var O=e.updateQueue;if(O===null){var L=new Set;L.add(u),e.updateQueue=L}else O.add(u);break e}else{if(!(e&1)){iy(s,f,e),xp();break e}u=Error(J(426))}}else if(ht&&l.mode&1){var F=sy(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),oy(F,o,l,s,e),op(ho(u,l));break e}}s=u=ho(u,l),Nt!==4&&(Nt=2),Sa===null?Sa=[s]:Sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var P=G0(s,u,e);Jg(s,P);break e;case 1:l=u;var I=s.type,N=s.stateNode;if(!(s.flags&128)&&(typeof I.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Ei===null||!Ei.has(N)))){s.flags|=65536,e&=-e,s.lanes|=e;var $=Q0(s,l,e);Jg(s,$);break e}}s=s.return}while(s!==null)}pw(n)}catch(Z){e=Z,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function hw(){var t=nc.current;return nc.current=tc,t===null?tc:t}function xp(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ut===null||!(os&268435455)&&!(Mc&268435455)||oi(Ut,Wt)}function sc(t,e){var n=Ge;Ge|=2;var r=hw();(Ut!==t||Wt!==e)&&(Ir=null,es(t,e));do try{nA();break}catch(i){fw(t,i)}while(!0);if(lp(),Ge=n,nc.current=r,Rt!==null)throw Error(J(261));return Ut=null,Wt=0,Nt}function nA(){for(;Rt!==null;)dw(Rt)}function rA(){for(;Rt!==null&&!PI();)dw(Rt)}function dw(t){var e=gw(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?pw(t):Rt=e,Ep.current=null}function pw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YS(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Rt=null;return}}else if(n=QS(n,e,xn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Nt===0&&(Nt=5)}function qi(t,e,n){var r=Je,i=Un.transition;try{Un.transition=null,Je=1,iA(t,e,n,r)}finally{Un.transition=i,Je=r}return null}function iA(t,e,n,r){do to();while(di!==null);if(Ge&6)throw Error(J(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(UI(t,s),t===Ut&&(Rt=Ut=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ou||(ou=!0,yw(ju,function(){return to(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=Je;Je=1;var l=Ge;Ge|=4,Ep.current=null,JS(t,n),lw(n,t),SS(Mh),zu=!!Lh,Mh=Lh=null,t.current=n,ZS(n),CI(),Ge=l,Je=o,Un.transition=s}else t.current=n;if(ou&&(ou=!1,di=t,ic=i),s=t.pendingLanes,s===0&&(Ei=null),bI(n.stateNode),Tn(t,St()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rc)throw rc=!1,t=rd,rd=null,t;return ic&1&&t.tag!==0&&to(),s=t.pendingLanes,s&1?t===id?Aa++:(Aa=0,id=t):Aa=0,Di(),null}function to(){if(di!==null){var t=Gv(ic),e=Un.transition,n=Je;try{if(Un.transition=null,Je=16>t?16:t,di===null)var r=!1;else{if(t=di,di=null,ic=0,Ge&6)throw Error(J(331));var i=Ge;for(Ge|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var f=l[u];for(he=f;he!==null;){var p=he;switch(p.tag){case 0:case 11:case 15:Ia(8,p,s)}var g=p.child;if(g!==null)g.return=p,he=g;else for(;he!==null;){p=he;var v=p.sibling,R=p.return;if(sw(p),p===f){he=null;break}if(v!==null){v.return=R,he=v;break}he=R}}}var O=s.alternate;if(O!==null){var L=O.child;if(L!==null){O.child=null;do{var F=L.sibling;L.sibling=null,L=F}while(L!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ia(9,s,s.return)}var P=s.sibling;if(P!==null){P.return=s.return,he=P;break e}he=s.return}}var I=t.current;for(he=I;he!==null;){o=he;var N=o.child;if(o.subtreeFlags&2064&&N!==null)N.return=o,he=N;else e:for(o=I;he!==null;){if(l=he,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Lc(9,l)}}catch(Z){vt(l,l.return,Z)}if(l===o){he=null;break e}var $=l.sibling;if($!==null){$.return=l.return,he=$;break e}he=l.return}}if(Ge=i,Di(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(Pc,t)}catch{}r=!0}return r}finally{Je=n,Un.transition=e}}return!1}function vy(t,e,n){e=ho(n,e),e=G0(t,e,1),t=wi(t,e,1),e=hn(),t!==null&&(cl(t,1,e),Tn(t,e))}function vt(t,e,n){if(t.tag===3)vy(t,t,n);else for(;e!==null;){if(e.tag===3){vy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ei===null||!Ei.has(r))){t=ho(n,t),t=Q0(e,t,1),e=wi(e,t,1),t=hn(),e!==null&&(cl(e,1,t),Tn(e,t));break}}e=e.return}}function sA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Wt&n)===n&&(Nt===4||Nt===3&&(Wt&130023424)===Wt&&500>St()-Ip?es(t,0):Tp|=n),Tn(t,e)}function mw(t,e){e===0&&(t.mode&1?(e=Yl,Yl<<=1,!(Yl&130023424)&&(Yl=4194304)):e=1);var n=hn();t=Mr(t,e),t!==null&&(cl(t,e,n),Tn(t,n))}function oA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mw(t,n)}function aA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(J(314))}r!==null&&r.delete(e),mw(t,n)}var gw;gw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,GS(t,e,n);vn=!!(t.flags&131072)}else vn=!1,ht&&e.flags&1048576&&w0(e,Qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tu(t,e),t=e.pendingProps;var i=lo(e,ln.current);eo(e,n),i=gp(null,e,r,t,i,n);var s=yp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(r)?(s=!0,Hu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fp(e),i.updater=Vc,e.stateNode=i,i._reactInternals=e,qh(e,r,t,n),e=Qh(null,e,r,!0,s,n)):(e.tag=0,ht&&s&&ip(e),fn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uA(r),t=qn(r,t),i){case 0:e=Gh(null,e,r,t,n);break e;case 1:e=uy(null,e,r,t,n);break e;case 11:e=ay(null,e,r,t,n);break e;case 14:e=ly(null,e,r,qn(r.type,t),n);break e}throw Error(J(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Gh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),uy(t,e,r,i,n);case 3:e:{if(Z0(e),t===null)throw Error(J(387));r=e.pendingProps,s=e.memoizedState,i=s.element,x0(t,e),Ju(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ho(Error(J(423)),e),e=cy(t,e,r,n,i);break e}else if(r!==i){i=ho(Error(J(424)),e),e=cy(t,e,r,n,i);break e}else for(Rn=vi(e.stateNode.containerInfo.firstChild),Cn=e,ht=!0,Gn=null,n=S0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),r===i){e=Ur(t,e,n);break e}fn(t,e,r,n)}e=e.child}return e;case 5:return R0(e),t===null&&$h(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uh(r,i)?o=null:s!==null&&Uh(r,s)&&(e.flags|=32),J0(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&$h(e),null;case 13:return ew(t,e,n);case 4:return hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=co(e,null,r,n):fn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),ay(t,e,r,i,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ot(Yu,r._currentValue),r._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===i.children&&!wn.current){e=Ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nr(-1,n&-n),u.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var p=f.pending;p===null?u.next=u:(u.next=p.next,p.next=u),f.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,eo(e,n),i=Fn(i),r=r(i),e.flags|=1,fn(t,e,r,n),e.child;case 14:return r=e.type,i=qn(r,e.pendingProps),i=qn(r.type,i),ly(t,e,r,i,n);case 15:return Y0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Tu(t,e),e.tag=1,En(r)?(t=!0,Hu(e)):t=!1,eo(e,n),H0(e,r,i),qh(e,r,i,n),Qh(null,e,r,!0,t,n);case 19:return tw(t,e,n);case 22:return X0(t,e,n)}throw Error(J(156,e.tag))};function yw(t,e){return Kv(t,e)}function lA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,r){return new lA(t,e,n,r)}function Rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uA(t){if(typeof t=="function")return Rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Hd)return 14}return 2}function Ii(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Au(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return ts(n.children,i,s,e);case Wd:o=8,i|=8;break;case gh:return t=Mn(12,n,e,i|2),t.elementType=gh,t.lanes=s,t;case yh:return t=Mn(13,n,e,i),t.elementType=yh,t.lanes=s,t;case _h:return t=Mn(19,n,e,i),t.elementType=_h,t.lanes=s,t;case Rv:return Uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Av:o=10;break e;case xv:o=9;break e;case qd:o=11;break e;case Hd:o=14;break e;case ri:o=16,r=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ts(t,e,n,r){return t=Mn(7,t,r,e),t.lanes=n,t}function Uc(t,e,n,r){return t=Mn(22,t,r,e),t.elementType=Rv,t.lanes=n,t.stateNode={isHidden:!1},t}function qf(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function Hf(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rf(0),this.expirationTimes=Rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pp(t,e,n,r,i,s,o,l,u){return t=new cA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(s),t}function fA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _w(t){if(!t)return Pi;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(En(n))return _0(t,n,e)}return e}function vw(t,e,n,r,i,s,o,l,u){return t=Pp(n,r,!0,t,i,s,o,l,u),t.context=_w(null),n=t.current,r=hn(),i=Ti(n),s=Nr(r,i),s.callback=e??null,wi(n,s,i),t.current.lanes=i,cl(t,i,r),Tn(t,r),t}function Fc(t,e,n,r){var i=e.current,s=hn(),o=Ti(i);return n=_w(n),e.context===null?e.context=n:e.pendingContext=n,e=Nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wi(i,e,o),t!==null&&(Yn(t,i,o,s),vu(t,i,o)),o}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cp(t,e){wy(t,e),(t=t.alternate)&&wy(t,e)}function hA(){return null}var ww=typeof reportError=="function"?reportError:function(t){console.error(t)};function kp(t){this._internalRoot=t}jc.prototype.render=kp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Fc(t,e,null,null)};jc.prototype.unmount=kp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;as(function(){Fc(null,t,null,null)}),e[Lr]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<si.length&&e!==0&&e<si[n].priority;n++);si.splice(n,0,t),n===0&&Zv(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ey(){}function dA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=oc(o);s.call(f)}}var o=vw(e,r,t,0,null,!1,!1,"",Ey);return t._reactRootContainer=o,t[Lr]=o.current,Fa(t.nodeType===8?t.parentNode:t),as(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var f=oc(u);l.call(f)}}var u=Pp(t,0,!1,null,null,!1,!1,"",Ey);return t._reactRootContainer=u,t[Lr]=u.current,Fa(t.nodeType===8?t.parentNode:t),as(function(){Fc(e,u,n,r)}),u}function zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=oc(o);l.call(u)}}Fc(e,o,t,i)}else o=dA(n,e,t,i,r);return oc(o)}Qv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(Yd(e,n|1),Tn(e,St()),!(Ge&6)&&(po=St()+500,Di()))}break;case 13:as(function(){var r=Mr(t,1);if(r!==null){var i=hn();Yn(r,t,1,i)}}),Cp(t,1)}};Xd=function(t){if(t.tag===13){var e=Mr(t,134217728);if(e!==null){var n=hn();Yn(e,t,134217728,n)}Cp(t,134217728)}};Yv=function(t){if(t.tag===13){var e=Ti(t),n=Mr(t,e);if(n!==null){var r=hn();Yn(n,t,e,r)}Cp(t,e)}};Xv=function(){return Je};Jv=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Ph=function(t,e,n){switch(e){case"input":if(Eh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bc(r);if(!i)throw Error(J(90));Cv(r),Eh(r,i)}}}break;case"textarea":Nv(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};Uv=Sp;Fv=as;var pA={usingClientEntryPoint:!1,Events:[hl,js,bc,Lv,Mv,Sp]},ia={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mA={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zv(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||hA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{Pc=au.inject(mA),cr=au}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pA;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(J(200));return fA(t,e,null,n)};Nn.createRoot=function(t,e){if(!Np(t))throw Error(J(299));var n=!1,r="",i=ww;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pp(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,Fa(t.nodeType===8?t.parentNode:t),new kp(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=zv(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return as(t)};Nn.hydrate=function(t,e,n){if(!Bc(e))throw Error(J(200));return zc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Np(t))throw Error(J(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ww;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vw(e,null,t,1,n??null,i,!1,s,o),t[Lr]=e.current,Fa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jc(e)};Nn.render=function(t,e,n){if(!Bc(e))throw Error(J(200));return zc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(J(40));return t._reactRootContainer?(as(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};Nn.unstable_batchedUpdates=Sp;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bc(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return zc(t,e,n,!1,r)};Nn.version="18.3.1-next-f1338f8080-20240426";function Ew(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ew)}catch(t){console.error(t)}}Ew(),Ev.exports=Nn;var gA=Ev.exports,Ty=gA;ph.createRoot=Ty.createRoot,ph.hydrateRoot=Ty.hydrateRoot;const yA="modulepreload",_A=function(t,e){return new URL(t,e).href},Iy={},bp=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(f=>{if(f=_A(f,r),f in Iy)return;Iy[f]=!0;const p=f.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!r)for(let O=o.length-1;O>=0;O--){const L=o[O];if(L.href===f&&(!p||L.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${g}`))return;const R=document.createElement("link");if(R.rel=p?"stylesheet":yA,p||(R.as="script"),R.crossOrigin="",R.href=f,u&&R.setAttribute("nonce",u),document.head.appendChild(R),p)return new Promise((O,L)=>{R.addEventListener("load",O),R.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ga.apply(this,arguments)}var pi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pi||(pi={}));const Sy="popstate";function vA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ad("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ac(i)}return EA(e,n,null,t)}function At(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Op(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wA(){return Math.random().toString(36).substr(2,8)}function Ay(t,e){return{usr:t.state,key:t.key,idx:e}}function ad(t,e,n,r){return n===void 0&&(n=null),Ga({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ro(e):e,{state:n,key:e&&e.key||r||wA()})}function ac(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ro(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function EA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=pi.Pop,u=null,f=p();f==null&&(f=0,o.replaceState(Ga({},o.state,{idx:f}),""));function p(){return(o.state||{idx:null}).idx}function g(){l=pi.Pop;let F=p(),P=F==null?null:F-f;f=F,u&&u({action:l,location:L.location,delta:P})}function v(F,P){l=pi.Push;let I=ad(L.location,F,P);f=p()+1;let N=Ay(I,f),$=L.createHref(I);try{o.pushState(N,"",$)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;i.location.assign($)}s&&u&&u({action:l,location:L.location,delta:1})}function R(F,P){l=pi.Replace;let I=ad(L.location,F,P);f=p();let N=Ay(I,f),$=L.createHref(I);o.replaceState(N,"",$),s&&u&&u({action:l,location:L.location,delta:0})}function O(F){let P=i.location.origin!=="null"?i.location.origin:i.location.href,I=typeof F=="string"?F:ac(F);return I=I.replace(/ $/,"%20"),At(P,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,P)}let L={get action(){return l},get location(){return t(i,o)},listen(F){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Sy,g),u=F,()=>{i.removeEventListener(Sy,g),u=null}},createHref(F){return e(i,F)},createURL:O,encodeLocation(F){let P=O(F);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:v,replace:R,go(F){return o.go(F)}};return L}var xy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xy||(xy={}));function TA(t,e,n){return n===void 0&&(n="/"),IA(t,e,n)}function IA(t,e,n,r){let i=typeof e=="string"?Ro(e):e,s=Dp(i.pathname||"/",n);if(s==null)return null;let o=Tw(t);SA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let f=LA(s);l=OA(o[u],f)}return l}function Tw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(At(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let f=Si([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(At(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Tw(s.children,e,p,f)),!(s.path==null&&!s.index)&&e.push({path:f,score:NA(f,s.index),routesMeta:p})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Iw(s.path))i(s,o,u)}),e}function Iw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Iw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function SA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:bA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AA=/^:[\w-]+$/,xA=3,RA=2,PA=1,CA=10,kA=-2,Ry=t=>t==="*";function NA(t,e){let n=t.split("/"),r=n.length;return n.some(Ry)&&(r+=kA),e&&(r+=RA),n.filter(i=>!Ry(i)).reduce((i,s)=>i+(AA.test(s)?xA:s===""?PA:CA),r)}function bA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function OA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],f=l===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",g=DA({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},p),v=u.route;if(!g)return null;Object.assign(i,g.params),o.push({params:i,pathname:Si([s,g.pathname]),pathnameBase:BA(Si([s,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(s=Si([s,g.pathnameBase]))}return o}function DA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((f,p,g)=>{let{paramName:v,isOptional:R}=p;if(v==="*"){let L=l[g]||"";o=s.slice(0,s.length-L.length).replace(/(.)\/+$/,"$1")}const O=l[g];return R&&!O?f[v]=void 0:f[v]=(O||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:o,pattern:t}}function VA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Op(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function LA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Op(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Dp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const MA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,UA=t=>MA.test(t);function FA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ro(t):t,s;if(n)if(UA(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Op(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Py(n.substring(1),"/"):s=Py(n,e)}else s=e;return{pathname:s,search:zA(r),hash:$A(i)}}function Py(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vp(t,e){let n=jA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ro(t):(i=Ga({},t),At(!i.pathname||!i.pathname.includes("?"),Gf("?","pathname","search",i)),At(!i.pathname||!i.pathname.includes("#"),Gf("#","pathname","hash",i)),At(!i.search||!i.search.includes("#"),Gf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let g=e.length-1;if(!r&&o.startsWith("..")){let v=o.split("/");for(;v[0]==="..";)v.shift(),g-=1;i.pathname=v.join("/")}l=g>=0?e[g]:"/"}let u=FA(i,l),f=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(f||p)&&(u.pathname+="/"),u}const Si=t=>t.join("/").replace(/\/\/+/g,"/"),BA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$A=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function KA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Sw=["post","put","patch","delete"];new Set(Sw);const WA=["get",...Sw];new Set(WA);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qa(){return Qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qa.apply(this,arguments)}const Mp=oe.createContext(null),qA=oe.createContext(null),Vi=oe.createContext(null),$c=oe.createContext(null),Li=oe.createContext({outlet:null,matches:[],isDataRoute:!1}),Aw=oe.createContext(null);function HA(t,e){let{relative:n}=e===void 0?{}:e;Po()||At(!1);let{basename:r,navigator:i}=oe.useContext(Vi),{hash:s,pathname:o,search:l}=Pw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Si([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Po(){return oe.useContext($c)!=null}function pl(){return Po()||At(!1),oe.useContext($c).location}function xw(t){oe.useContext(Vi).static||oe.useLayoutEffect(t)}function Rw(){let{isDataRoute:t}=oe.useContext(Li);return t?ox():GA()}function GA(){Po()||At(!1);let t=oe.useContext(Mp),{basename:e,future:n,navigator:r}=oe.useContext(Vi),{matches:i}=oe.useContext(Li),{pathname:s}=pl(),o=JSON.stringify(Vp(i,n.v7_relativeSplatPath)),l=oe.useRef(!1);return xw(()=>{l.current=!0}),oe.useCallback(function(f,p){if(p===void 0&&(p={}),!l.current)return;if(typeof f=="number"){r.go(f);return}let g=Lp(f,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Si([e,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[e,r,o,s,t])}function Pw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=oe.useContext(Vi),{matches:i}=oe.useContext(Li),{pathname:s}=pl(),o=JSON.stringify(Vp(i,r.v7_relativeSplatPath));return oe.useMemo(()=>Lp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function QA(t,e){return YA(t,e)}function YA(t,e,n,r){Po()||At(!1);let{navigator:i}=oe.useContext(Vi),{matches:s}=oe.useContext(Li),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let f=pl(),p;if(e){var g;let F=typeof e=="string"?Ro(e):e;u==="/"||(g=F.pathname)!=null&&g.startsWith(u)||At(!1),p=F}else p=f;let v=p.pathname||"/",R=v;if(u!=="/"){let F=u.replace(/^\//,"").split("/");R="/"+v.replace(/^\//,"").split("/").slice(F.length).join("/")}let O=TA(t,{pathname:R}),L=tx(O&&O.map(F=>Object.assign({},F,{params:Object.assign({},l,F.params),pathname:Si([u,i.encodeLocation?i.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?u:Si([u,i.encodeLocation?i.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),s,n,r);return e&&L?oe.createElement($c.Provider,{value:{location:Qa({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:pi.Pop}},L):L}function XA(){let t=sx(),e=KA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),n?oe.createElement("pre",{style:i},n):null,null)}const JA=oe.createElement(XA,null);class ZA extends oe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?oe.createElement(Li.Provider,{value:this.props.routeContext},oe.createElement(Aw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ex(t){let{routeContext:e,match:n,children:r}=t,i=oe.useContext(Mp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),oe.createElement(Li.Provider,{value:e},r)}function tx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);p>=0||At(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(f=p),g.route.id){let{loaderData:v,errors:R}=n,O=g.route.loader&&v[g.route.id]===void 0&&(!R||R[g.route.id]===void 0);if(g.route.lazy||O){u=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,g,v)=>{let R,O=!1,L=null,F=null;n&&(R=l&&g.route.id?l[g.route.id]:void 0,L=g.route.errorElement||JA,u&&(f<0&&v===0?(ax("route-fallback"),O=!0,F=null):f===v&&(O=!0,F=g.route.hydrateFallbackElement||null)));let P=e.concat(o.slice(0,v+1)),I=()=>{let N;return R?N=L:O?N=F:g.route.Component?N=oe.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=p,oe.createElement(ex,{match:g,routeContext:{outlet:p,matches:P,isDataRoute:n!=null},children:N})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?oe.createElement(ZA,{location:n.location,revalidation:n.revalidation,component:L,error:R,children:I(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):I()},null)}var Cw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Cw||{}),kw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kw||{});function nx(t){let e=oe.useContext(Mp);return e||At(!1),e}function rx(t){let e=oe.useContext(qA);return e||At(!1),e}function ix(t){let e=oe.useContext(Li);return e||At(!1),e}function Nw(t){let e=ix(),n=e.matches[e.matches.length-1];return n.route.id||At(!1),n.route.id}function sx(){var t;let e=oe.useContext(Aw),n=rx(),r=Nw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ox(){let{router:t}=nx(Cw.UseNavigateStable),e=Nw(kw.UseNavigateStable),n=oe.useRef(!1);return xw(()=>{n.current=!0}),oe.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Qa({fromRouteId:e},s)))},[t,e])}const Cy={};function ax(t,e,n){Cy[t]||(Cy[t]=!0)}function lx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function xu(t){let{to:e,replace:n,state:r,relative:i}=t;Po()||At(!1);let{future:s,static:o}=oe.useContext(Vi),{matches:l}=oe.useContext(Li),{pathname:u}=pl(),f=Rw(),p=Lp(e,Vp(l,s.v7_relativeSplatPath),u,i==="path"),g=JSON.stringify(p);return oe.useEffect(()=>f(JSON.parse(g),{replace:n,state:r,relative:i}),[f,g,i,n,r]),null}function ca(t){At(!1)}function ux(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pi.Pop,navigator:s,static:o=!1,future:l}=t;Po()&&At(!1);let u=e.replace(/^\/*/,"/"),f=oe.useMemo(()=>({basename:u,navigator:s,static:o,future:Qa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ro(r));let{pathname:p="/",search:g="",hash:v="",state:R=null,key:O="default"}=r,L=oe.useMemo(()=>{let F=Dp(p,u);return F==null?null:{location:{pathname:F,search:g,hash:v,state:R,key:O},navigationType:i}},[u,p,g,v,R,O,i]);return L==null?null:oe.createElement(Vi.Provider,{value:f},oe.createElement($c.Provider,{children:n,value:L}))}function cx(t){let{children:e,location:n}=t;return QA(ld(e),n)}new Promise(()=>{});function ld(t,e){e===void 0&&(e=[]);let n=[];return oe.Children.forEach(t,(r,i)=>{if(!oe.isValidElement(r))return;let s=[...e,i];if(r.type===oe.Fragment){n.push.apply(n,ld(r.props.children,s));return}r.type!==ca&&At(!1),!r.props.index||!r.props.children||At(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ld(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ud(){return ud=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ud.apply(this,arguments)}function fx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dx(t,e){return t.button===0&&(!e||e==="_self")&&!hx(t)}const px=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mx="6";try{window.__reactRouterVersion=mx}catch{}const gx="startTransition",ky=sI[gx];function yx(t){let{basename:e,children:n,future:r,window:i}=t,s=oe.useRef();s.current==null&&(s.current=vA({window:i,v5Compat:!0}));let o=s.current,[l,u]=oe.useState({action:o.action,location:o.location}),{v7_startTransition:f}=r||{},p=oe.useCallback(g=>{f&&ky?ky(()=>u(g)):u(g)},[u,f]);return oe.useLayoutEffect(()=>o.listen(p),[o,p]),oe.useEffect(()=>lx(r),[r]),oe.createElement(ux,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const _x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jO=oe.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:f,preventScrollReset:p,viewTransition:g}=e,v=fx(e,px),{basename:R}=oe.useContext(Vi),O,L=!1;if(typeof f=="string"&&vx.test(f)&&(O=f,_x))try{let N=new URL(window.location.href),$=f.startsWith("//")?new URL(N.protocol+f):new URL(f),Z=Dp($.pathname,R);$.origin===N.origin&&Z!=null?f=Z+$.search+$.hash:L=!0}catch{}let F=HA(f,{relative:i}),P=wx(f,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,viewTransition:g});function I(N){r&&r(N),N.defaultPrevented||P(N)}return oe.createElement("a",ud({},v,{href:O||F,onClick:L||s?r:I,ref:n,target:u}))});var Ny;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ny||(Ny={}));var by;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(by||(by={}));function wx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Rw(),f=pl(),p=Pw(t,{relative:o});return oe.useCallback(g=>{if(dx(g,n)){g.preventDefault();let v=r!==void 0?r:ac(f)===ac(p);u(t,{replace:v,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[f,u,p,r,i,n,t,s,o,l])}const Ex={},Oy=t=>{let e;const n=new Set,r=(p,g)=>{const v=typeof p=="function"?p(e):p;if(!Object.is(v,e)){const R=e;e=g??(typeof v!="object"||v===null)?v:Object.assign({},e,v),n.forEach(O=>O(e,R))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>f,subscribe:p=>(n.add(p),()=>n.delete(p)),destroy:()=>{(Ex?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},f=e=t(r,i,u);return u},Tx=t=>t?Oy(t):Oy;var bw={exports:{}},Ow={},Dw={exports:{}},Vw={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=oe;function Ix(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sx=typeof Object.is=="function"?Object.is:Ix,Ax=mo.useState,xx=mo.useEffect,Rx=mo.useLayoutEffect,Px=mo.useDebugValue;function Cx(t,e){var n=e(),r=Ax({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return Rx(function(){i.value=n,i.getSnapshot=e,Qf(i)&&s({inst:i})},[t,n,e]),xx(function(){return Qf(i)&&s({inst:i}),t(function(){Qf(i)&&s({inst:i})})},[t]),Px(n),n}function Qf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sx(t,n)}catch{return!0}}function kx(t,e){return e()}var Nx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?kx:Cx;Vw.useSyncExternalStore=mo.useSyncExternalStore!==void 0?mo.useSyncExternalStore:Nx;Dw.exports=Vw;var bx=Dw.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=oe,Ox=bx;function Dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vx=typeof Object.is=="function"?Object.is:Dx,Lx=Ox.useSyncExternalStore,Mx=Kc.useRef,Ux=Kc.useEffect,Fx=Kc.useMemo,jx=Kc.useDebugValue;Ow.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=Mx(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Fx(function(){function u(R){if(!f){if(f=!0,p=R,R=r(R),i!==void 0&&o.hasValue){var O=o.value;if(i(O,R))return g=O}return g=R}if(O=g,Vx(p,R))return O;var L=r(R);return i!==void 0&&i(O,L)?(p=R,O):(p=R,g=L)}var f=!1,p,g,v=n===void 0?null:n;return[function(){return u(e())},v===null?void 0:function(){return u(v())}]},[e,n,r,i]);var l=Lx(t,s[0],s[1]);return Ux(function(){o.hasValue=!0,o.value=l},[l]),jx(l),l};bw.exports=Ow;var Bx=bw.exports;const zx=uv(Bx),Lw={},{useDebugValue:$x}=Bd,{useSyncExternalStoreWithSelector:Kx}=zx;let Dy=!1;const Wx=t=>t;function qx(t,e=Wx,n){(Lw?"production":void 0)!=="production"&&n&&!Dy&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Dy=!0);const r=Kx(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return $x(r),r}const Vy=t=>{(Lw?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Tx(t):t,n=(r,i)=>qx(e,r,i);return Object.assign(n,e),n},Hx=t=>t?Vy(t):Vy;var Ly={};/**
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
 */const Mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,f=u?t[i+2]:0,p=s>>2,g=(s&3)<<4|l>>4;let v=(l&15)<<2|f>>6,R=f&63;u||(R=64,o||(v=64)),r.push(n[p],n[g],n[v],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||f==null||g==null)throw new Qx;const v=s<<2|l>>4;if(r.push(v),f!==64){const R=l<<4&240|f>>2;if(r.push(R),g!==64){const O=f<<6&192|g;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yx=function(t){const e=Mw(t);return Uw.encodeByteArray(e,!0)},lc=function(t){return Yx(t).replace(/\./g,"")},Fw=function(t){try{return Uw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jx=()=>Xx().__FIREBASE_DEFAULTS__,Zx=()=>{if(typeof process>"u"||typeof Ly>"u")return;const t=Ly.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fw(t[1]);return e&&JSON.parse(e)},Wc=()=>{try{return Jx()||Zx()||eR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jw=t=>{var e,n;return(n=(e=Wc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bw=t=>{const e=jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zw=()=>{var t;return(t=Wc())===null||t===void 0?void 0:t.config},$w=t=>{var e;return(e=Wc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[lc(JSON.stringify(n)),lc(JSON.stringify(o)),""].join(".")}/**
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
 */function un(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(un())}function iR(){var t;const e=(t=Wc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lR(){const t=un();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uR(){return!iR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ww(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function cR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const fR="FirebaseError";class tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fR,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new tr(i,l,r)}}function hR(t,e){return t.replace(dR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dR=/\{\$([^}]+)}/g;function pR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ya(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(My(s)&&My(o)){if(!Ya(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function My(t){return t!==null&&typeof t=="object"}/**
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
 */function ml(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ha(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mR(t,e){const n=new gR(t,e);return n.subscribe.bind(n)}class gR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yf),i.error===void 0&&(i.error=Yf),i.complete===void 0&&(i.complete=Yf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yf(){}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hi="[DEFAULT]";/**
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
 */class _R{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wR(e))try{this.getOrInitializeService({instanceIdentifier:Hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hi){return this.instances.has(e)}getOptions(e=Hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hi){return this.component?this.component.multipleInstances?e:Hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vR(t){return t===Hi?void 0:t}function wR(t){return t.instantiationMode==="EAGER"}/**
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
 */class ER{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _R(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var We;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(We||(We={}));const TR={debug:We.DEBUG,verbose:We.VERBOSE,info:We.INFO,warn:We.WARN,error:We.ERROR,silent:We.SILENT},IR=We.INFO,SR={[We.DEBUG]:"log",[We.VERBOSE]:"log",[We.INFO]:"info",[We.WARN]:"warn",[We.ERROR]:"error"},AR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=SR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Up{constructor(e){this.name=e,this._logLevel=IR,this._logHandler=AR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in We))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,We.DEBUG,...e),this._logHandler(this,We.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,We.VERBOSE,...e),this._logHandler(this,We.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,We.INFO,...e),this._logHandler(this,We.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,We.WARN,...e),this._logHandler(this,We.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,We.ERROR,...e),this._logHandler(this,We.ERROR,...e)}}const xR=(t,e)=>e.some(n=>t instanceof n);let Uy,Fy;function RR(){return Uy||(Uy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PR(){return Fy||(Fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qw=new WeakMap,cd=new WeakMap,Hw=new WeakMap,Xf=new WeakMap,Fp=new WeakMap;function CR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qw.set(n,t)}).catch(()=>{}),Fp.set(e,t),e}function kR(t){if(cd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cd.set(t,e)}let fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NR(t){fd=t(fd)}function bR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jf(this),e,...n);return Hw.set(r,e.sort?e.sort():[e]),br(r)}:PR().includes(t)?function(...e){return t.apply(Jf(this),e),br(qw.get(this))}:function(...e){return br(t.apply(Jf(this),e))}}function OR(t){return typeof t=="function"?bR(t):(t instanceof IDBTransaction&&kR(t),xR(t,RR())?new Proxy(t,fd):t)}function br(t){if(t instanceof IDBRequest)return CR(t);if(Xf.has(t))return Xf.get(t);const e=OR(t);return e!==t&&(Xf.set(t,e),Fp.set(e,t)),e}const Jf=t=>Fp.get(t);function gl(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(br(o.result),u.oldVersion,u.newVersion,br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}function Zf(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),br(n).then(()=>{})}const DR=["get","getKey","getAll","getAllKeys","count"],VR=["put","add","delete","clear"],eh=new Map;function jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(eh.get(e))return eh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),i&&u.done]))[0]};return eh.set(e,s),s}NR(t=>({...t,get:(e,n,r)=>jy(e,n)||t.get(e,n,r),has:(e,n)=>!!jy(e,n)||t.has(e,n)}));/**
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
 */class LR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",By="0.10.13";/**
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
 */const Fr=new Up("@firebase/app"),UR="@firebase/app-compat",FR="@firebase/analytics-compat",jR="@firebase/analytics",BR="@firebase/app-check-compat",zR="@firebase/app-check",$R="@firebase/auth",KR="@firebase/auth-compat",WR="@firebase/database",qR="@firebase/data-connect",HR="@firebase/database-compat",GR="@firebase/functions",QR="@firebase/functions-compat",YR="@firebase/installations",XR="@firebase/installations-compat",JR="@firebase/messaging",ZR="@firebase/messaging-compat",eP="@firebase/performance",tP="@firebase/performance-compat",nP="@firebase/remote-config",rP="@firebase/remote-config-compat",iP="@firebase/storage",sP="@firebase/storage-compat",oP="@firebase/firestore",aP="@firebase/vertexai-preview",lP="@firebase/firestore-compat",uP="firebase",cP="10.14.1";/**
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
 */const dd="[DEFAULT]",fP={[hd]:"fire-core",[UR]:"fire-core-compat",[jR]:"fire-analytics",[FR]:"fire-analytics-compat",[zR]:"fire-app-check",[BR]:"fire-app-check-compat",[$R]:"fire-auth",[KR]:"fire-auth-compat",[WR]:"fire-rtdb",[qR]:"fire-data-connect",[HR]:"fire-rtdb-compat",[GR]:"fire-fn",[QR]:"fire-fn-compat",[YR]:"fire-iid",[XR]:"fire-iid-compat",[JR]:"fire-fcm",[ZR]:"fire-fcm-compat",[eP]:"fire-perf",[tP]:"fire-perf-compat",[nP]:"fire-rc",[rP]:"fire-rc-compat",[iP]:"fire-gcs",[sP]:"fire-gcs-compat",[oP]:"fire-fst",[lP]:"fire-fst-compat",[aP]:"fire-vertex","fire-js":"fire-js",[uP]:"fire-js-all"};/**
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
 */const uc=new Map,hP=new Map,pd=new Map;function zy(t,e){try{t.container.addComponent(e)}catch(n){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jn(t){const e=t.name;if(pd.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;pd.set(e,t);for(const n of uc.values())zy(n,t);for(const n of hP.values())zy(n,t);return!0}function _s(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ur(t){return t.settings!==void 0}/**
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
 */const dP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new ys("app","Firebase",dP);/**
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
 */class pP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
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
 */const Co=cP;function Gw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ai.create("bad-app-name",{appName:String(i)});if(n||(n=zw()),!n)throw Ai.create("no-options");const s=uc.get(i);if(s){if(Ya(n,s.options)&&Ya(r,s.config))return s;throw Ai.create("duplicate-app",{appName:i})}const o=new ER(i);for(const u of pd.values())o.addComponent(u);const l=new pP(n,r,o);return uc.set(i,l),l}function qc(t=dd){const e=uc.get(t);if(!e&&t===dd&&zw())return Gw();if(!e)throw Ai.create("no-app",{appName:t});return e}function In(t,e,n){var r;let i=(r=fP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(l.join(" "));return}Jn(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mP="firebase-heartbeat-database",gP=1,Xa="firebase-heartbeat-store";let th=null;function Qw(){return th||(th=gl(mP,gP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ai.create("idb-open",{originalErrorMessage:t.message})})),th}async function yP(t){try{const n=(await Qw()).transaction(Xa),r=await n.objectStore(Xa).get(Yw(t));return await n.done,r}catch(e){if(e instanceof tr)Fr.warn(e.message);else{const n=Ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(n.message)}}}async function $y(t,e){try{const r=(await Qw()).transaction(Xa,"readwrite");await r.objectStore(Xa).put(e,Yw(t)),await r.done}catch(n){if(n instanceof tr)Fr.warn(n.message);else{const r=Ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fr.warn(r.message)}}}function Yw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _P=1024,vP=30*24*60*60*1e3;class wP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ky();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=vP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Fr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ky(),{heartbeatsToSend:r,unsentEntries:i}=EP(this._heartbeatsCache.heartbeats),s=lc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Fr.warn(n),""}}}function Ky(){return new Date().toISOString().substring(0,10)}function EP(t,e=_P){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kw()?Ww().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wy(t){return lc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IP(t){Jn(new Bn("platform-logger",e=>new LR(e),"PRIVATE")),Jn(new Bn("heartbeat",e=>new wP(e),"PRIVATE")),In(hd,By,t),In(hd,By,"esm2017"),In("fire-js","")}IP("");function jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SP=Xw,Jw=new ys("auth","Firebase",Xw());/**
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
 */const cc=new Up("@firebase/auth");function AP(t,...e){cc.logLevel<=We.WARN&&cc.warn(`Auth (${Co}): ${t}`,...e)}function Ru(t,...e){cc.logLevel<=We.ERROR&&cc.error(`Auth (${Co}): ${t}`,...e)}/**
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
 */function Zn(t,...e){throw Bp(t,...e)}function hr(t,...e){return Bp(t,...e)}function Zw(t,e,n){const r=Object.assign(Object.assign({},SP()),{[e]:n});return new ys("auth","Firebase",r).create(e,{appName:t.name})}function Or(t){return Zw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jw.create(t,...e)}function Ae(t,e,...n){if(!t)throw Bp(e,...n)}function Pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ru(e),new Error(e)}function jr(t,e){t||Pr(e)}/**
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
 */function md(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xP(){return qy()==="http:"||qy()==="https:"}function qy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function RP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xP()||oR()||"connection"in navigator)?navigator.onLine:!0}function PP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yl{constructor(e,n){this.shortDelay=e,this.longDelay=n,jr(n>e,"Short delay should be less than long delay!"),this.isMobile=rR()||aR()}get(){return RP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zp(t,e){jr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class eE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kP=new yl(3e4,6e4);function Mi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ui(t,e,n,r,i={}){return tE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ml(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},s);return sR()||(f.referrerPolicy="no-referrer"),eE.fetch()(nE(t,t.config.apiHost,n,l),f)})}async function tE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CP),e);try{const i=new bP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw lu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw lu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw lu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw lu(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Zw(t,p,f);Zn(t,p)}}catch(i){if(i instanceof tr)throw i;Zn(t,"network-request-failed",{message:String(i)})}}async function _l(t,e,n,r,i={}){const s=await Ui(t,e,n,r,i);return"mfaPendingCredential"in s&&Zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zp(t.config,i):`${t.config.apiScheme}://${i}`}function NP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hr(this.auth,"network-request-failed")),kP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hr(t,e,r);return i.customData._tokenResponse=n,i}function Hy(t){return t!==void 0&&t.enterprise!==void 0}class OP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function DP(t,e){return Ui(t,"GET","/v2/recaptchaConfig",Mi(t,e))}/**
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
 */async function VP(t,e){return Ui(t,"POST","/v1/accounts:delete",e)}async function rE(t,e){return Ui(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LP(t,e=!1){const n=tt(t),r=await n.getIdToken(e),i=$p(r);Ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xa(nh(i.auth_time)),issuedAtTime:xa(nh(i.iat)),expirationTime:xa(nh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nh(t){return Number(t)*1e3}function $p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fw(n);return i?JSON.parse(i):(Ru("Failed to decode base64 JWT payload"),null)}catch(i){return Ru("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gy(t){const e=$p(t);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ja(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&MP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class UP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xa(this.lastLoginAt),this.creationTime=xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ja(t,rE(n,{idToken:r}));Ae(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iE(s.providerUserInfo):[],l=jP(t.providerData,o),u=t.isAnonymous,f=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?f:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new gd(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function FP(t){const e=tt(t);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iE(t){return t.map(e=>{var{providerId:n}=e,r=jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function BP(t,e){const n=await tE(t,{},async()=>{const r=ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",eE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zP(t,e){return Ui(t,"POST","/v2/accounts:revokeToken",Mi(t,e))}/**
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
 */class no{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const n=Gy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await BP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new no;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Ae(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new no,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
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
 */function ni(t,e){Ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ja(this,this.stsTokenManager.getToken(this.auth,e));return Ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LP(this,e)}reload(){return FP(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ur(this.auth.app))return Promise.reject(Or(this.auth));const e=await this.getIdToken();return await Ja(this,VP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,f,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,O=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,P=(f=n.createdAt)!==null&&f!==void 0?f:void 0,I=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:N,emailVerified:$,isAnonymous:Z,providerData:ee,stsTokenManager:x}=n;Ae(N&&x,e,"internal-error");const T=no.fromJSON(this.name,x);Ae(typeof N=="string",e,"internal-error"),ni(g,e.name),ni(v,e.name),Ae(typeof $=="boolean",e,"internal-error"),Ae(typeof Z=="boolean",e,"internal-error"),ni(R,e.name),ni(O,e.name),ni(L,e.name),ni(F,e.name),ni(P,e.name),ni(I,e.name);const S=new Cr({uid:N,auth:e,email:v,emailVerified:$,displayName:g,isAnonymous:Z,photoURL:O,phoneNumber:R,tenantId:L,stsTokenManager:T,createdAt:P,lastLoginAt:I});return ee&&Array.isArray(ee)&&(S.providerData=ee.map(C=>Object.assign({},C))),F&&(S._redirectEventId=F),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new no;i.updateFromServerResponse(n);const s=new Cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new no;l.updateFromIdToken(r);const u=new Cr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,f),u}}/**
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
 */const Qy=new Map;function kr(t){jr(t instanceof Function,"Expected a class definition");let e=Qy.get(t);return e?(jr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qy.set(t,e),e)}/**
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
 */class sE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sE.type="NONE";const Yy=sE;/**
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
 */function Pu(t,e,n){return`firebase:${t}:${e}:${n}`}class ro{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ro(kr(Yy),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||kr(Yy);const o=Pu(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const p=await f._get(o);if(p){const g=Cr._fromJSON(e,p);f!==s&&(l=g),s=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ro(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==s)try{await f._remove(o)}catch{}})),new ro(s,e,r))}}/**
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
 */function Xy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fE(e))return"Blackberry";if(hE(e))return"Webos";if(aE(e))return"Safari";if((e.includes("chrome/")||lE(e))&&!e.includes("edge/"))return"Chrome";if(cE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oE(t=un()){return/firefox\//i.test(t)}function aE(t=un()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lE(t=un()){return/crios\//i.test(t)}function uE(t=un()){return/iemobile/i.test(t)}function cE(t=un()){return/android/i.test(t)}function fE(t=un()){return/blackberry/i.test(t)}function hE(t=un()){return/webos/i.test(t)}function Kp(t=un()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $P(t=un()){var e;return Kp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KP(){return lR()&&document.documentMode===10}function dE(t=un()){return Kp(t)||cE(t)||hE(t)||fE(t)||/windows phone/i.test(t)||uE(t)}/**
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
 */function pE(t,e=[]){let n;switch(t){case"Browser":n=Xy(un());break;case"Worker":n=`${Xy(un())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Co}/${r}`}/**
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
 */class WP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qP(t,e={}){return Ui(t,"GET","/v2/passwordPolicy",Mi(t,e))}/**
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
 */const HP=6;class GP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class QP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jy(this),this.idTokenSubscription=new Jy(this),this.beforeStateQueue=new WP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rE(this,{idToken:e}),r=await Cr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ur(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ur(this.app))return Promise.reject(Or(this));const n=e?tt(e):null;return n&&Ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ur(this.app)?Promise.reject(Or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ur(this.app)?Promise.reject(Or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qP(this),n=new GP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kr(e)||this._popupRedirectResolver;Ae(n,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[kr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vs(t){return tt(t)}class Jy{constructor(e){this.auth=e,this.observer=null,this.addObserver=mR(n=>this.observer=n)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YP(t){Hc=t}function mE(t){return Hc.loadJS(t)}function XP(){return Hc.recaptchaEnterpriseScript}function JP(){return Hc.gapiScript}function ZP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eC="recaptcha-enterprise",tC="NO_RECAPTCHA";class nC{constructor(e){this.type=eC,this.auth=vs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{DP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new OP(u);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,o(f.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Hy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(f=>{o(f)}).catch(()=>{o(tC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Hy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=XP();u.length!==0&&(u+=l),mE(u).then(()=>{i(l,s,o)}).catch(f=>{o(f)})}}).catch(l=>{o(l)})})}}async function Zy(t,e,n,r=!1){const i=new nC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Zy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function rC(t,e){const n=_s(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ya(s,e??{}))return i;Zn(i,"already-initialized")}return n.initialize({options:e})}function iC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sC(t,e,n){const r=vs(t);Ae(r._canInitEmulator,r,"emulator-config-failed"),Ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=gE(e),{host:o,port:l}=oC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),aC()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oC(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:e_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:e_(o)}}}function e_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,n){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}async function lC(t,e){return Ui(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function uC(t,e){return _l(t,"POST","/v1/accounts:signInWithPassword",Mi(t,e))}/**
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
 */async function cC(t,e){return _l(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}async function fC(t,e){return _l(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}/**
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
 */class Za extends Wp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Za(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Za(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yd(e,n,"signInWithPassword",uC);case"emailLink":return cC(e,{email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yd(e,r,"signUpPassword",lC);case"emailLink":return fC(e,{idToken:n,email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function io(t,e){return _l(t,"POST","/v1/accounts:signInWithIdp",Mi(t,e))}/**
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
 */const hC="http://localhost";class ls extends Wp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ls(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,io(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:hC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ml(n)}return e}}/**
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
 */function dC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pC(t){const e=fa(ha(t)).link,n=e?fa(ha(e)).deep_link_id:null,r=fa(ha(t)).deep_link_id;return(r?fa(ha(r)).link:null)||r||n||e||t}class qp{constructor(e){var n,r,i,s,o,l;const u=fa(ha(e)),f=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=dC((i=u.mode)!==null&&i!==void 0?i:null);Ae(f&&p&&g,"argument-error"),this.apiKey=f,this.operation=g,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=pC(e);try{return new qp(n)}catch{return null}}}/**
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
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,n){return Za._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qp.parseLink(n);return Ae(r,"argument-error"),Za._fromEmailAndCode(e,r.code,r.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vl extends yE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ai extends vl{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
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
 */class li extends vl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return li.credential(n,r)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
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
 */class ui extends vl{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
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
 */class ci extends vl{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ci.credential(n,r)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
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
 */async function mC(t,e){return _l(t,"POST","/v1/accounts:signUp",Mi(t,e))}/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cr._fromIdTokenResponse(e,r,i),o=t_(r);return new us({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=t_(r);return new us({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function t_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hc extends tr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hc(e,n,r,i)}}function _E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,s,e,r):s})}async function gC(t,e,n=!1){const r=await Ja(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function yC(t,e,n=!1){const{auth:r}=t;if(ur(r.app))return Promise.reject(Or(r));const i="reauthenticate";try{const s=await Ja(t,_E(r,i,e,t),n);Ae(s.idToken,r,"internal-error");const o=$p(s.idToken);Ae(o,r,"internal-error");const{sub:l}=o;return Ae(t.uid===l,r,"user-mismatch"),us._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zn(r,"user-mismatch"),s}}/**
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
 */async function vE(t,e,n=!1){if(ur(t.app))return Promise.reject(Or(t));const r="signIn",i=await _E(t,r,e),s=await us._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _C(t,e){return vE(vs(t),e)}/**
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
 */async function wE(t){const e=vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vC(t,e,n){if(ur(t.app))return Promise.reject(Or(t));const r=vs(t),o=await yd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&wE(t),u}),l=await us._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function wC(t,e,n){return ur(t.app)?Promise.reject(Or(t)):_C(tt(t),ko.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wE(t),r})}/**
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
 */function EC(t,e){return tt(t).setPersistence(e)}function TC(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function IC(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function SC(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function AC(t){return tt(t).signOut()}const dc="__sak";/**
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
 */class EE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xC=1e3,RC=10;class TE extends EE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const IE=TE;/**
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
 */class SE extends EE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SE.type="SESSION";const AE=SE;/**
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
 */function PC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async f=>f(n.origin,s)),u=await PC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gc.receivers=[];/**
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
 */function Hp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class CC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const f=Hp("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dr(){return window}function kC(t){dr().location.href=t}/**
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
 */function xE(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function NC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OC(){return xE()?self:null}/**
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
 */const RE="firebaseLocalStorageDb",DC=1,pc="firebaseLocalStorage",PE="fbase_key";class wl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qc(t,e){return t.transaction([pc],e?"readwrite":"readonly").objectStore(pc)}function VC(){const t=indexedDB.deleteDatabase(RE);return new wl(t).toPromise()}function _d(){const t=indexedDB.open(RE,DC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pc,{keyPath:PE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pc)?e(r):(r.close(),await VC(),e(await _d()))})})}async function n_(t,e,n){const r=Qc(t,!0).put({[PE]:e,value:n});return new wl(r).toPromise()}async function LC(t,e){const n=Qc(t,!1).get(e),r=await new wl(n).toPromise();return r===void 0?null:r.value}function r_(t,e){const n=Qc(t,!0).delete(e);return new wl(n).toPromise()}const MC=800,UC=3;class CE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gc._getInstance(OC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NC(),!this.activeServiceWorker)return;this.sender=new CC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await n_(e,dc,"1"),await r_(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>n_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>r_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qc(i,!1).getAll();return new wl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CE.type="LOCAL";const FC=CE;new yl(3e4,6e4);/**
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
 */function jC(t,e){return e?kr(e):(Ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gp extends Wp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BC(t){return vE(t.auth,new Gp(t),t.bypassAuthState)}function zC(t){const{auth:e,user:n}=t;return Ae(n,e,"internal-error"),yC(n,new Gp(t),t.bypassAuthState)}async function $C(t){const{auth:e,user:n}=t;return Ae(n,e,"internal-error"),gC(n,new Gp(t),t.bypassAuthState)}/**
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
 */class kE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BC;case"linkViaPopup":case"linkViaRedirect":return $C;case"reauthViaPopup":case"reauthViaRedirect":return zC;default:Zn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KC=new yl(2e3,1e4);class Hs extends kE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=Hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KC.get())};e()}}Hs.currentPopupAction=null;/**
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
 */const WC="pendingRedirect",Cu=new Map;class qC extends kE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cu.get(this.auth._key());if(!e){try{const r=await HC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cu.set(this.auth._key(),e)}return this.bypassAuthState||Cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HC(t,e){const n=YC(e),r=QC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GC(t,e){Cu.set(t._key(),e)}function QC(t){return kr(t._redirectPersistence)}function YC(t){return Pu(WC,t.config.apiKey,t.name)}async function XC(t,e,n=!1){if(ur(t.app))return Promise.reject(Or(t));const r=vs(t),i=jC(r,e),o=await new qC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const JC=10*60*1e3;class ZC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ek(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!NE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JC&&this.cachedEventUids.clear(),this.cachedEventUids.has(i_(e))}saveEventToCache(e){this.cachedEventUids.add(i_(e)),this.lastProcessedEventTime=Date.now()}}function i_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function NE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ek(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NE(t);default:return!1}}/**
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
 */async function tk(t,e={}){return Ui(t,"GET","/v1/projects",e)}/**
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
 */const nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rk=/^https?/;async function ik(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tk(t);for(const n of e)try{if(sk(n))return}catch{}Zn(t,"unauthorized-domain")}function sk(t){const e=md(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rk.test(n))return!1;if(nk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ok=new yl(3e4,6e4);function s_(){const t=dr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ak(t){return new Promise((e,n)=>{var r,i,s;function o(){s_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{s_(),n(hr(t,"network-request-failed"))},timeout:ok.get()})}if(!((i=(r=dr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dr().gapi)===null||s===void 0)&&s.load)o();else{const l=ZP("iframefcb");return dr()[l]=()=>{gapi.load?o():n(hr(t,"network-request-failed"))},mE(`${JP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ku=null,e})}let ku=null;function lk(t){return ku=ku||ak(t),ku}/**
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
 */const uk=new yl(5e3,15e3),ck="__/auth/iframe",fk="emulator/auth/iframe",hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pk(t){const e=t.config;Ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zp(e,fk):`https://${t.config.authDomain}/${ck}`,r={apiKey:e.apiKey,appName:t.name,v:Co},i=dk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ml(r).slice(1)}`}async function mk(t){const e=await lk(t),n=dr().gapi;return Ae(n,t,"internal-error"),e.open({where:document.body,url:pk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hr(t,"network-request-failed"),l=dr().setTimeout(()=>{s(o)},uk.get());function u(){dr().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const gk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yk=500,_k=600,vk="_blank",wk="http://localhost";class o_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ek(t,e,n,r=yk,i=_k){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},gk),{width:r.toString(),height:i.toString(),top:s,left:o}),f=un().toLowerCase();n&&(l=lE(f)?vk:n),oE(f)&&(e=e||wk,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[R,O])=>`${v}${R}=${O},`,"");if($P(f)&&l!=="_self")return Tk(e||"",l),new o_(null);const g=window.open(e||"",l,p);Ae(g,t,"popup-blocked");try{g.focus()}catch{}return new o_(g)}function Tk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ik="__/auth/handler",Sk="emulator/auth/handler",Ak=encodeURIComponent("fac");async function a_(t,e,n,r,i,s){Ae(t.config.authDomain,t,"auth-domain-config-required"),Ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Co,eventId:i};if(e instanceof yE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof vl){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),f=u?`#${Ak}=${encodeURIComponent(u)}`:"";return`${xk(t)}?${ml(l).slice(1)}${f}`}function xk({config:t}){return t.emulator?zp(t,Sk):`https://${t.authDomain}/${Ik}`}/**
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
 */const rh="webStorageSupport";class Rk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=AE,this._completeRedirectFn=XC,this._overrideRedirectResult=GC}async _openPopup(e,n,r,i){var s;jr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await a_(e,n,r,md(),i);return Ek(e,o,Hp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await a_(e,n,r,md(),i);return kC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mk(e),r=new ZC(e);return n.register("authEvent",i=>(Ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rh,{type:rh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rh];o!==void 0&&n(!!o),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ik(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dE()||aE()||Kp()}}const Pk=Rk;var l_="@firebase/auth",u_="1.7.9";/**
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
 */class Ck{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nk(t){Jn(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pE(t)},f=new QP(r,i,s,u);return iC(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jn(new Bn("auth-internal",e=>{const n=vs(e.getProvider("auth").getImmediate());return(r=>new Ck(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(l_,u_,kk(t)),In(l_,u_,"esm2017")}/**
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
 */const bk=5*60,Ok=$w("authIdTokenMaxAge")||bk;let c_=null;const Dk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ok)return;const i=n==null?void 0:n.token;c_!==i&&(c_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vk(t=qc()){const e=_s(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rC(t,{popupRedirectResolver:Pk,persistence:[FC,IE,AE]}),r=$w("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Dk(s.toString());IC(n,o,()=>o(n.currentUser)),TC(n,l=>o(l))}}const i=jw("auth");return i&&sC(n,`http://${i}`),n}function Lk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Lk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nk("Browser");var f_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,bE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,T){function S(){}S.prototype=T.prototype,x.D=T.prototype,x.prototype=new S,x.prototype.constructor=x,x.C=function(C,b,V){for(var k=Array(arguments.length-2),Qt=2;Qt<arguments.length;Qt++)k[Qt-2]=arguments[Qt];return T.prototype[b].apply(C,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,T,S){S||(S=0);var C=Array(16);if(typeof T=="string")for(var b=0;16>b;++b)C[b]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(b=0;16>b;++b)C[b]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=x.g[0],S=x.g[1],b=x.g[2];var V=x.g[3],k=T+(V^S&(b^V))+C[0]+3614090360&4294967295;T=S+(k<<7&4294967295|k>>>25),k=V+(b^T&(S^b))+C[1]+3905402710&4294967295,V=T+(k<<12&4294967295|k>>>20),k=b+(S^V&(T^S))+C[2]+606105819&4294967295,b=V+(k<<17&4294967295|k>>>15),k=S+(T^b&(V^T))+C[3]+3250441966&4294967295,S=b+(k<<22&4294967295|k>>>10),k=T+(V^S&(b^V))+C[4]+4118548399&4294967295,T=S+(k<<7&4294967295|k>>>25),k=V+(b^T&(S^b))+C[5]+1200080426&4294967295,V=T+(k<<12&4294967295|k>>>20),k=b+(S^V&(T^S))+C[6]+2821735955&4294967295,b=V+(k<<17&4294967295|k>>>15),k=S+(T^b&(V^T))+C[7]+4249261313&4294967295,S=b+(k<<22&4294967295|k>>>10),k=T+(V^S&(b^V))+C[8]+1770035416&4294967295,T=S+(k<<7&4294967295|k>>>25),k=V+(b^T&(S^b))+C[9]+2336552879&4294967295,V=T+(k<<12&4294967295|k>>>20),k=b+(S^V&(T^S))+C[10]+4294925233&4294967295,b=V+(k<<17&4294967295|k>>>15),k=S+(T^b&(V^T))+C[11]+2304563134&4294967295,S=b+(k<<22&4294967295|k>>>10),k=T+(V^S&(b^V))+C[12]+1804603682&4294967295,T=S+(k<<7&4294967295|k>>>25),k=V+(b^T&(S^b))+C[13]+4254626195&4294967295,V=T+(k<<12&4294967295|k>>>20),k=b+(S^V&(T^S))+C[14]+2792965006&4294967295,b=V+(k<<17&4294967295|k>>>15),k=S+(T^b&(V^T))+C[15]+1236535329&4294967295,S=b+(k<<22&4294967295|k>>>10),k=T+(b^V&(S^b))+C[1]+4129170786&4294967295,T=S+(k<<5&4294967295|k>>>27),k=V+(S^b&(T^S))+C[6]+3225465664&4294967295,V=T+(k<<9&4294967295|k>>>23),k=b+(T^S&(V^T))+C[11]+643717713&4294967295,b=V+(k<<14&4294967295|k>>>18),k=S+(V^T&(b^V))+C[0]+3921069994&4294967295,S=b+(k<<20&4294967295|k>>>12),k=T+(b^V&(S^b))+C[5]+3593408605&4294967295,T=S+(k<<5&4294967295|k>>>27),k=V+(S^b&(T^S))+C[10]+38016083&4294967295,V=T+(k<<9&4294967295|k>>>23),k=b+(T^S&(V^T))+C[15]+3634488961&4294967295,b=V+(k<<14&4294967295|k>>>18),k=S+(V^T&(b^V))+C[4]+3889429448&4294967295,S=b+(k<<20&4294967295|k>>>12),k=T+(b^V&(S^b))+C[9]+568446438&4294967295,T=S+(k<<5&4294967295|k>>>27),k=V+(S^b&(T^S))+C[14]+3275163606&4294967295,V=T+(k<<9&4294967295|k>>>23),k=b+(T^S&(V^T))+C[3]+4107603335&4294967295,b=V+(k<<14&4294967295|k>>>18),k=S+(V^T&(b^V))+C[8]+1163531501&4294967295,S=b+(k<<20&4294967295|k>>>12),k=T+(b^V&(S^b))+C[13]+2850285829&4294967295,T=S+(k<<5&4294967295|k>>>27),k=V+(S^b&(T^S))+C[2]+4243563512&4294967295,V=T+(k<<9&4294967295|k>>>23),k=b+(T^S&(V^T))+C[7]+1735328473&4294967295,b=V+(k<<14&4294967295|k>>>18),k=S+(V^T&(b^V))+C[12]+2368359562&4294967295,S=b+(k<<20&4294967295|k>>>12),k=T+(S^b^V)+C[5]+4294588738&4294967295,T=S+(k<<4&4294967295|k>>>28),k=V+(T^S^b)+C[8]+2272392833&4294967295,V=T+(k<<11&4294967295|k>>>21),k=b+(V^T^S)+C[11]+1839030562&4294967295,b=V+(k<<16&4294967295|k>>>16),k=S+(b^V^T)+C[14]+4259657740&4294967295,S=b+(k<<23&4294967295|k>>>9),k=T+(S^b^V)+C[1]+2763975236&4294967295,T=S+(k<<4&4294967295|k>>>28),k=V+(T^S^b)+C[4]+1272893353&4294967295,V=T+(k<<11&4294967295|k>>>21),k=b+(V^T^S)+C[7]+4139469664&4294967295,b=V+(k<<16&4294967295|k>>>16),k=S+(b^V^T)+C[10]+3200236656&4294967295,S=b+(k<<23&4294967295|k>>>9),k=T+(S^b^V)+C[13]+681279174&4294967295,T=S+(k<<4&4294967295|k>>>28),k=V+(T^S^b)+C[0]+3936430074&4294967295,V=T+(k<<11&4294967295|k>>>21),k=b+(V^T^S)+C[3]+3572445317&4294967295,b=V+(k<<16&4294967295|k>>>16),k=S+(b^V^T)+C[6]+76029189&4294967295,S=b+(k<<23&4294967295|k>>>9),k=T+(S^b^V)+C[9]+3654602809&4294967295,T=S+(k<<4&4294967295|k>>>28),k=V+(T^S^b)+C[12]+3873151461&4294967295,V=T+(k<<11&4294967295|k>>>21),k=b+(V^T^S)+C[15]+530742520&4294967295,b=V+(k<<16&4294967295|k>>>16),k=S+(b^V^T)+C[2]+3299628645&4294967295,S=b+(k<<23&4294967295|k>>>9),k=T+(b^(S|~V))+C[0]+4096336452&4294967295,T=S+(k<<6&4294967295|k>>>26),k=V+(S^(T|~b))+C[7]+1126891415&4294967295,V=T+(k<<10&4294967295|k>>>22),k=b+(T^(V|~S))+C[14]+2878612391&4294967295,b=V+(k<<15&4294967295|k>>>17),k=S+(V^(b|~T))+C[5]+4237533241&4294967295,S=b+(k<<21&4294967295|k>>>11),k=T+(b^(S|~V))+C[12]+1700485571&4294967295,T=S+(k<<6&4294967295|k>>>26),k=V+(S^(T|~b))+C[3]+2399980690&4294967295,V=T+(k<<10&4294967295|k>>>22),k=b+(T^(V|~S))+C[10]+4293915773&4294967295,b=V+(k<<15&4294967295|k>>>17),k=S+(V^(b|~T))+C[1]+2240044497&4294967295,S=b+(k<<21&4294967295|k>>>11),k=T+(b^(S|~V))+C[8]+1873313359&4294967295,T=S+(k<<6&4294967295|k>>>26),k=V+(S^(T|~b))+C[15]+4264355552&4294967295,V=T+(k<<10&4294967295|k>>>22),k=b+(T^(V|~S))+C[6]+2734768916&4294967295,b=V+(k<<15&4294967295|k>>>17),k=S+(V^(b|~T))+C[13]+1309151649&4294967295,S=b+(k<<21&4294967295|k>>>11),k=T+(b^(S|~V))+C[4]+4149444226&4294967295,T=S+(k<<6&4294967295|k>>>26),k=V+(S^(T|~b))+C[11]+3174756917&4294967295,V=T+(k<<10&4294967295|k>>>22),k=b+(T^(V|~S))+C[2]+718787259&4294967295,b=V+(k<<15&4294967295|k>>>17),k=S+(V^(b|~T))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+T&4294967295,x.g[1]=x.g[1]+(b+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+b&4294967295,x.g[3]=x.g[3]+V&4294967295}r.prototype.u=function(x,T){T===void 0&&(T=x.length);for(var S=T-this.blockSize,C=this.B,b=this.h,V=0;V<T;){if(b==0)for(;V<=S;)i(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<T;)if(C[b++]=x.charCodeAt(V++),b==this.blockSize){i(this,C),b=0;break}}else for(;V<T;)if(C[b++]=x[V++],b==this.blockSize){i(this,C),b=0;break}}this.h=b,this.o+=T},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var T=1;T<x.length-8;++T)x[T]=0;var S=8*this.o;for(T=x.length-8;T<x.length;++T)x[T]=S&255,S/=256;for(this.u(x),x=Array(16),T=S=0;4>T;++T)for(var C=0;32>C;C+=8)x[S++]=this.g[T]>>>C&255;return x};function s(x,T){var S=l;return Object.prototype.hasOwnProperty.call(S,x)?S[x]:S[x]=T(x)}function o(x,T){this.h=T;for(var S=[],C=!0,b=x.length-1;0<=b;b--){var V=x[b]|0;C&&V==T||(S[b]=V,C=!1)}this.g=S}var l={};function u(x){return-128<=x&&128>x?s(x,function(T){return new o([T|0],0>T?-1:0)}):new o([x|0],0>x?-1:0)}function f(x){if(isNaN(x)||!isFinite(x))return g;if(0>x)return F(f(-x));for(var T=[],S=1,C=0;x>=S;C++)T[C]=x/S|0,S*=4294967296;return new o(T,0)}function p(x,T){if(x.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x.charAt(0)=="-")return F(p(x.substring(1),T));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=f(Math.pow(T,8)),C=g,b=0;b<x.length;b+=8){var V=Math.min(8,x.length-b),k=parseInt(x.substring(b,b+V),T);8>V?(V=f(Math.pow(T,V)),C=C.j(V).add(f(k))):(C=C.j(S),C=C.add(f(k)))}return C}var g=u(0),v=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(L(this))return-F(this).m();for(var x=0,T=1,S=0;S<this.g.length;S++){var C=this.i(S);x+=(0<=C?C:4294967296+C)*T,T*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(O(this))return"0";if(L(this))return"-"+F(this).toString(x);for(var T=f(Math.pow(x,6)),S=this,C="";;){var b=$(S,T).g;S=P(S,b.j(T));var V=((0<S.g.length?S.g[0]:S.h)>>>0).toString(x);if(S=b,O(S))return V+C;for(;6>V.length;)V="0"+V;C=V+C}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function O(x){if(x.h!=0)return!1;for(var T=0;T<x.g.length;T++)if(x.g[T]!=0)return!1;return!0}function L(x){return x.h==-1}t.l=function(x){return x=P(this,x),L(x)?-1:O(x)?0:1};function F(x){for(var T=x.g.length,S=[],C=0;C<T;C++)S[C]=~x.g[C];return new o(S,~x.h).add(v)}t.abs=function(){return L(this)?F(this):this},t.add=function(x){for(var T=Math.max(this.g.length,x.g.length),S=[],C=0,b=0;b<=T;b++){var V=C+(this.i(b)&65535)+(x.i(b)&65535),k=(V>>>16)+(this.i(b)>>>16)+(x.i(b)>>>16);C=k>>>16,V&=65535,k&=65535,S[b]=k<<16|V}return new o(S,S[S.length-1]&-2147483648?-1:0)};function P(x,T){return x.add(F(T))}t.j=function(x){if(O(this)||O(x))return g;if(L(this))return L(x)?F(this).j(F(x)):F(F(this).j(x));if(L(x))return F(this.j(F(x)));if(0>this.l(R)&&0>x.l(R))return f(this.m()*x.m());for(var T=this.g.length+x.g.length,S=[],C=0;C<2*T;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var b=0;b<x.g.length;b++){var V=this.i(C)>>>16,k=this.i(C)&65535,Qt=x.i(b)>>>16,zn=x.i(b)&65535;S[2*C+2*b]+=k*zn,I(S,2*C+2*b),S[2*C+2*b+1]+=V*zn,I(S,2*C+2*b+1),S[2*C+2*b+1]+=k*Qt,I(S,2*C+2*b+1),S[2*C+2*b+2]+=V*Qt,I(S,2*C+2*b+2)}for(C=0;C<T;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=T;C<2*T;C++)S[C]=0;return new o(S,0)};function I(x,T){for(;(x[T]&65535)!=x[T];)x[T+1]+=x[T]>>>16,x[T]&=65535,T++}function N(x,T){this.g=x,this.h=T}function $(x,T){if(O(T))throw Error("division by zero");if(O(x))return new N(g,g);if(L(x))return T=$(F(x),T),new N(F(T.g),F(T.h));if(L(T))return T=$(x,F(T)),new N(F(T.g),T.h);if(30<x.g.length){if(L(x)||L(T))throw Error("slowDivide_ only works with positive integers.");for(var S=v,C=T;0>=C.l(x);)S=Z(S),C=Z(C);var b=ee(S,1),V=ee(C,1);for(C=ee(C,2),S=ee(S,2);!O(C);){var k=V.add(C);0>=k.l(x)&&(b=b.add(S),V=k),C=ee(C,1),S=ee(S,1)}return T=P(x,b.j(T)),new N(b,T)}for(b=g;0<=x.l(T);){for(S=Math.max(1,Math.floor(x.m()/T.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),V=f(S),k=V.j(T);L(k)||0<k.l(x);)S-=C,V=f(S),k=V.j(T);O(V)&&(V=v),b=b.add(V),x=P(x,k)}return new N(b,x)}t.A=function(x){return $(this,x).h},t.and=function(x){for(var T=Math.max(this.g.length,x.g.length),S=[],C=0;C<T;C++)S[C]=this.i(C)&x.i(C);return new o(S,this.h&x.h)},t.or=function(x){for(var T=Math.max(this.g.length,x.g.length),S=[],C=0;C<T;C++)S[C]=this.i(C)|x.i(C);return new o(S,this.h|x.h)},t.xor=function(x){for(var T=Math.max(this.g.length,x.g.length),S=[],C=0;C<T;C++)S[C]=this.i(C)^x.i(C);return new o(S,this.h^x.h)};function Z(x){for(var T=x.g.length+1,S=[],C=0;C<T;C++)S[C]=x.i(C)<<1|x.i(C-1)>>>31;return new o(S,x.h)}function ee(x,T){var S=T>>5;T%=32;for(var C=x.g.length-S,b=[],V=0;V<C;V++)b[V]=0<T?x.i(V+S)>>>T|x.i(V+S+1)<<32-T:x.i(V+S);return new o(b,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=f,o.fromString=p,ns=o}).apply(typeof f_<"u"?f_:typeof self<"u"?self:typeof window<"u"?window:{});var uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var OE,da,DE,Nu,vd,VE,LE,ME;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,m){return a==Array.prototype||a==Object.prototype||(a[h]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof uu=="object"&&uu];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var U=a[w];if(!(U in m))break e;m=m[U]}a=a[a.length-1],w=m[a],h=h(w),h!=w&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var m=0,w=!1,U={next:function(){if(!w&&m<a.length){var z=m++;return{value:h(z,a[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function f(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function p(a,h,m){return a.call.apply(a.bind,arguments)}function g(a,h,m){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),a.apply(h,U)}}return function(){return a.apply(h,arguments)}}function v(a,h,m){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,v.apply(null,arguments)}function R(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function O(a,h){function m(){}m.prototype=h.prototype,a.aa=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(w,U,z){for(var ne=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)ne[nt-2]=arguments[nt];return h.prototype[U].apply(w,ne)}}function L(a){const h=a.length;if(0<h){const m=Array(h);for(let w=0;w<h;w++)m[w]=a[w];return m}return[]}function F(a,h){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(u(w)){const U=a.length||0,z=w.length||0;a.length=U+z;for(let ne=0;ne<z;ne++)a[U+ne]=w[ne]}else a.push(w)}}class P{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function I(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var Z=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function ee(a,h,m){for(const w in a)h.call(m,a[w],w,a)}function x(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function T(a){const h={};for(const m in a)h[m]=a[m];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,h){let m,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(m in w)a[m]=w[m];for(let z=0;z<S.length;z++)m=S[z],Object.prototype.hasOwnProperty.call(w,m)&&(a[m]=w[m])}}function b(a){var h=1;a=a.split(":");const m=[];for(;0<h&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function V(a){l.setTimeout(()=>{throw a},0)}function k(){var a=ve;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Qt{constructor(){this.h=this.g=null}add(h,m){const w=zn.get();w.set(h,m),this.h?this.h.next=w:this.g=w,this.h=w}}var zn=new P(()=>new cn,a=>a.reset());class cn{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Sn,ie=!1,ve=new Qt,Oe=()=>{const a=l.Promise.resolve(void 0);Sn=()=>{a.then(rt)}};var rt=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(m){V(m)}var h=zn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ie=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var wt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,h),l.removeEventListener("test",m,h)}catch{}return a}();function Ce(a,h){if(He.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{$(h.nodeName);var U=!0;break e}catch{}U=!1}U||(h=null)}}else m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement);this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:yt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ce.aa.h.call(this)}}O(Ce,He);var yt={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var On="closure_listenable_"+(1e6*Math.random()|0),bl=0;function Ts(a,h,m,w,U){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!w,this.ha=U,this.key=++bl,this.da=this.fa=!1}function _r(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ji(a){this.src=a,this.g={},this.h=0}ji.prototype.add=function(a,h,m,w,U){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var ne=Is(a,h,w,U);return-1<ne?(h=a[ne],m||(h.fa=!1)):(h=new Ts(h,this.src,z,!!w,U),h.fa=m,a.push(h)),h};function Wr(a,h){var m=h.type;if(m in a.g){var w=a.g[m],U=Array.prototype.indexOf.call(w,h,void 0),z;(z=0<=U)&&Array.prototype.splice.call(w,U,1),z&&(_r(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Is(a,h,m,w){for(var U=0;U<a.length;++U){var z=a[U];if(!z.da&&z.listener==h&&z.capture==!!m&&z.ha==w)return U}return-1}var Lo="closure_lm_"+(1e6*Math.random()|0),Mo={};function Ol(a,h,m,w,U){if(Array.isArray(h)){for(var z=0;z<h.length;z++)Ol(a,h[z],m,w,U);return null}return m=Ss(m),a&&a[On]?a.K(h,m,f(w)?!!w.capture:!1,U):Dl(a,h,m,!1,w,U)}function Dl(a,h,m,w,U,z){if(!h)throw Error("Invalid event type");var ne=f(U)?!!U.capture:!!U,nt=Bi(a);if(nt||(a[Lo]=nt=new ji(a)),m=nt.add(h,m,w,ne,z),m.proxy)return m;if(w=Vl(),m.proxy=w,w.src=a,w.listener=m,a.addEventListener)wt||(U=ne),U===void 0&&(U=!1),a.addEventListener(h.toString(),w,U);else if(a.attachEvent)a.attachEvent(Uo(h.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Vl(){function a(m){return h.call(a.src,a.listener,m)}const h=Fo;return a}function nr(a,h,m,w,U){if(Array.isArray(h))for(var z=0;z<h.length;z++)nr(a,h[z],m,w,U);else w=f(w)?!!w.capture:!!w,m=Ss(m),a&&a[On]?(a=a.i,h=String(h).toString(),h in a.g&&(z=a.g[h],m=Is(z,m,w,U),-1<m&&(_r(z[m]),Array.prototype.splice.call(z,m,1),z.length==0&&(delete a.g[h],a.h--)))):a&&(a=Bi(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Is(h,m,w,U)),(m=-1<a?h[a]:null)&&qr(m))}function qr(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[On])Wr(h.i,a);else{var m=a.type,w=a.proxy;h.removeEventListener?h.removeEventListener(m,w,a.capture):h.detachEvent?h.detachEvent(Uo(m),w):h.addListener&&h.removeListener&&h.removeListener(w),(m=Bi(h))?(Wr(m,a),m.h==0&&(m.src=null,h[Lo]=null)):_r(a)}}}function Uo(a){return a in Mo?Mo[a]:Mo[a]="on"+a}function Fo(a,h){if(a.da)a=!0;else{h=new Ce(h,this);var m=a.listener,w=a.ha||a.src;a.fa&&qr(a),a=m.call(w,h)}return a}function Bi(a){return a=a[Lo],a instanceof ji?a:null}var Hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ss(a){return typeof a=="function"?a:(a[Hr]||(a[Hr]=function(h){return a.handleEvent(h)}),a[Hr])}function Et(){Xe.call(this),this.i=new ji(this),this.M=this,this.F=null}O(Et,Xe),Et.prototype[On]=!0,Et.prototype.removeEventListener=function(a,h,m,w){nr(this,a,h,m,w)};function Ct(a,h){var m,w=a.F;if(w)for(m=[];w;w=w.F)m.push(w);if(a=a.M,w=h.type||h,typeof h=="string")h=new He(h,a);else if(h instanceof He)h.target=h.target||a;else{var U=h;h=new He(w,a),C(h,U)}if(U=!0,m)for(var z=m.length-1;0<=z;z--){var ne=h.g=m[z];U=Gr(ne,w,!0,h)&&U}if(ne=h.g=a,U=Gr(ne,w,!0,h)&&U,U=Gr(ne,w,!1,h)&&U,m)for(z=0;z<m.length;z++)ne=h.g=m[z],U=Gr(ne,w,!1,h)&&U}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var m=a.g[h],w=0;w<m.length;w++)_r(m[w]);delete a.g[h],a.h--}}this.F=null},Et.prototype.K=function(a,h,m,w){return this.i.add(String(a),h,!1,m,w)},Et.prototype.L=function(a,h,m,w){return this.i.add(String(a),h,!0,m,w)};function Gr(a,h,m,w){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var U=!0,z=0;z<h.length;++z){var ne=h[z];if(ne&&!ne.da&&ne.capture==m){var nt=ne.listener,Bt=ne.ha||ne.src;ne.fa&&Wr(a.i,ne),U=nt.call(Bt,w)!==!1&&U}}return U&&!w.defaultPrevented}function jo(a,h,m){if(typeof a=="function")m&&(a=v(a,m));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ll(a){a.g=jo(()=>{a.g=null,a.i&&(a.i=!1,Ll(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Bo extends Xe{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ll(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vr(a){Xe.call(this),this.h=a,this.g={}}O(vr,Xe);var zi=[];function Qr(a){ee(a.g,function(h,m){this.g.hasOwnProperty(m)&&qr(h)},a),a.g={}}vr.prototype.N=function(){vr.aa.N.call(this),Qr(this)},vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rr=l.JSON.stringify,$i=l.JSON.parse,As=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function wr(){}wr.prototype.h=null;function Yr(a){return a.h||(a.h=a.i())}function xs(){}var Xr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zo(){He.call(this,"d")}O(zo,He);function $o(){He.call(this,"c")}O($o,He);var Ft={},ir=null;function $n(){return ir=ir||new Et}Ft.La="serverreachability";function Rs(a){He.call(this,Ft.La,a)}O(Rs,He);function Er(a){const h=$n();Ct(h,new Rs(h))}Ft.STAT_EVENT="statevent";function Ko(a,h){He.call(this,Ft.STAT_EVENT,a),this.stat=h}O(Ko,He);function jt(a){const h=$n();Ct(h,new Ko(h,a))}Ft.Ma="timingevent";function Yt(a,h){He.call(this,Ft.Ma,a),this.size=h}O(Yt,He);function Jr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function d(){this.g=!0}d.prototype.xa=function(){this.g=!1};function _(a,h,m,w,U,z){a.info(function(){if(a.g)if(z)for(var ne="",nt=z.split("&"),Bt=0;Bt<nt.length;Bt++){var Qe=nt[Bt].split("=");if(1<Qe.length){var Xt=Qe[0];Qe=Qe[1];var Jt=Xt.split("_");ne=2<=Jt.length&&Jt[1]=="type"?ne+(Xt+"="+Qe+"&"):ne+(Xt+"=redacted&")}}else ne=null;else ne=z;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+h+`
`+m+`
`+ne})}function y(a,h,m,w,U,z,ne){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+h+`
`+m+`
`+z+" "+ne})}function c(a,h,m,w){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+D(a,m)+(w?" "+w:"")})}function E(a,h){a.info(function(){return"TIMEOUT: "+h})}d.prototype.info=function(){};function D(a,h){if(!a.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var w=m[a];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var z=U[0];if(z!="noop"&&z!="stop"&&z!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return rr(m)}catch{return h}}var M={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},W={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},X;function fe(){}O(fe,wr),fe.prototype.g=function(){return new XMLHttpRequest},fe.prototype.i=function(){return{}},X=new fe;function te(a,h,m,w){this.j=a,this.i=h,this.l=m,this.R=w||1,this.U=new vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ze}function ze(){this.i=null,this.g="",this.h=!1}var le={},we={};function Ee(a,h,m){a.L=1,a.v=it(Ue(h)),a.m=m,a.P=!0,ke(a,null)}function ke(a,h){a.F=Date.now(),Te(a),a.A=Ue(a.v);var m=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),qm(m.i,"t",w),a.C=0,m=a.j.J,a.h=new ze,a.g=cg(a.j,m?h:null,!a.m),0<a.O&&(a.M=new Bo(v(a.Y,a,a.g),a.O)),h=a.U,m=a.g,w=a.ca;var U="readystatechange";Array.isArray(U)||(U&&(zi[0]=U.toString()),U=zi);for(var z=0;z<U.length;z++){var ne=Ol(m,U[z],w||h.handleEvent,!1,h.h||h);if(!ne)break;h.g[ne.key]=ne}h=a.H?T(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Er(),_(a.i,a.u,a.A,a.l,a.R,a.m)}te.prototype.ca=function(a){a=a.target;const h=this.M;h&&Tr(a)==3?h.j():this.Y(a)},te.prototype.Y=function(a){try{if(a==this.g)e:{const Jt=Tr(this.g);var h=this.g.Ba();const ks=this.g.Z();if(!(3>Jt)&&(Jt!=3||this.g&&(this.h.h||this.g.oa()||Zm(this.g)))){this.J||Jt!=4||h==7||(h==8||0>=ks?Er(3):Er(2)),ue(this);var m=this.g.Z();this.X=m;t:if(Re(this)){var w=Zm(this.g);a="";var U=w.length,z=Tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),pe(this);var ne="";break t}this.h.i=new l.TextDecoder}for(h=0;h<U;h++)this.h.h=!0,a+=this.h.i.decode(w[h],{stream:!(z&&h==U-1)});w.length=0,this.h.g+=a,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=m==200,y(this.i,this.u,this.A,this.l,this.R,Jt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var nt,Bt=this.g;if((nt=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(nt)){var Qe=nt;break t}}Qe=null}if(m=Qe)c(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ce(this,m);else{this.o=!1,this.s=3,jt(12),re(this),pe(this);break e}}if(this.P){m=!0;let Kn;for(;!this.J&&this.C<ne.length;)if(Kn=Se(this,ne),Kn==we){Jt==4&&(this.s=4,jt(14),m=!1),c(this.i,this.l,null,"[Incomplete Response]");break}else if(Kn==le){this.s=4,jt(15),c(this.i,this.l,ne,"[Invalid Chunk]"),m=!1;break}else c(this.i,this.l,Kn,null),ce(this,Kn);if(Re(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Jt!=4||ne.length!=0||this.h.h||(this.s=1,jt(16),m=!1),this.o=this.o&&m,!m)c(this.i,this.l,ne,"[Invalid Chunked Response]"),re(this),pe(this);else if(0<ne.length&&!this.W){this.W=!0;var Xt=this.j;Xt.g==this&&Xt.ba&&!Xt.M&&(Xt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),wf(Xt),Xt.M=!0,jt(11))}}else c(this.i,this.l,ne,null),ce(this,ne);Jt==4&&re(this),this.o&&!this.J&&(Jt==4?og(this.j,this):(this.o=!1,Te(this)))}else M1(this.g),m==400&&0<ne.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),re(this),pe(this)}}}catch{}finally{}};function Re(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Se(a,h){var m=a.C,w=h.indexOf(`
`,m);return w==-1?we:(m=Number(h.substring(m,w)),isNaN(m)?le:(w+=1,w+m>h.length?we:(h=h.slice(w,w+m),a.C=w+m,h)))}te.prototype.cancel=function(){this.J=!0,re(this)};function Te(a){a.S=Date.now()+a.I,Ie(a,a.I)}function Ie(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Jr(v(a.ba,a),h)}function ue(a){a.B&&(l.clearTimeout(a.B),a.B=null)}te.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(E(this.i,this.A),this.L!=2&&(Er(),jt(17)),re(this),this.s=2,pe(this)):Ie(this,this.S-a)};function pe(a){a.j.G==0||a.J||og(a.j,a)}function re(a){ue(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Qr(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ce(a,h){try{var m=a.j;if(m.G!=0&&(m.g==a||G(m.h,a))){if(!a.K&&G(m.h,a)&&m.G==3){try{var w=m.Da.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)zl(m),jl(m);else break e;vf(m),jt(18)}}else m.za=U[1],0<m.za-m.T&&37500>U[2]&&m.F&&m.v==0&&!m.C&&(m.C=Jr(v(m.Za,m),6e3));if(1>=B(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ki(m,11)}else if((a.K||m.g==a)&&zl(m),!I(h))for(U=m.Da.g.parse(h),h=0;h<U.length;h++){let Qe=U[h];if(m.T=Qe[0],Qe=Qe[1],m.G==2)if(Qe[0]=="c"){m.K=Qe[1],m.ia=Qe[2];const Xt=Qe[3];Xt!=null&&(m.la=Xt,m.j.info("VER="+m.la));const Jt=Qe[4];Jt!=null&&(m.Aa=Jt,m.j.info("SVER="+m.Aa));const ks=Qe[5];ks!=null&&typeof ks=="number"&&0<ks&&(w=1.5*ks,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Kn=a.g;if(Kn){const Kl=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kl){var z=w.h;z.g||Kl.indexOf("spdy")==-1&&Kl.indexOf("quic")==-1&&Kl.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(K(z,z.h),z.h=null))}if(w.D){const Ef=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ef&&(w.ya=Ef,ge(w.I,w.D,Ef))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var ne=a;if(w.qa=ug(w,w.J?w.ia:null,w.W),ne.K){q(w.h,ne);var nt=ne,Bt=w.L;Bt&&(nt.I=Bt),nt.B&&(ue(nt),Te(nt)),w.g=ne}else ig(w);0<m.i.length&&Bl(m)}else Qe[0]!="stop"&&Qe[0]!="close"||Ki(m,7);else m.G==3&&(Qe[0]=="stop"||Qe[0]=="close"?Qe[0]=="stop"?Ki(m,7):_f(m):Qe[0]!="noop"&&m.l&&m.l.ta(Qe),m.v=0)}}Er(4)}catch{}}var de=class{constructor(a,h){this.g=a,this.map=h}};function se(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function j(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function B(a){return a.h?1:a.g?a.g.size:0}function G(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function K(a,h){a.g?a.g.add(h):a.h=h}function q(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}se.prototype.cancel=function(){if(this.i=Y(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Y(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.D);return h}return L(a.i)}function ye(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],m=a.length,w=0;w<m;w++)h.push(a[w]);return h}h=[],m=0;for(w in a)h[m++]=a[w];return h}function De(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var m=0;m<a;m++)h.push(m);return h}h=[],m=0;for(const w in a)h[m++]=w;return h}}}function Ve(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var m=De(a),w=ye(a),U=w.length,z=0;z<U;z++)h.call(void 0,w[z],m&&m[z],a)}var Ne=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A(a,h){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var w=a[m].indexOf("="),U=null;if(0<=w){var z=a[m].substring(0,w);U=a[m].substring(w+1)}else z=a[m];h(z,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function xe(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xe){this.h=a.h,Fe(this,a.j),this.o=a.o,this.g=a.g,be(this,a.s),this.l=a.l;var h=a.i,m=new Wo;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),je(this,m),this.m=a.m}else a&&(h=String(a).match(Ne))?(this.h=!1,Fe(this,h[1]||"",!0),this.o=Ke(h[2]||""),this.g=Ke(h[3]||"",!0),be(this,h[4]),this.l=Ke(h[5]||"",!0),je(this,h[6]||"",!0),this.m=Ke(h[7]||"")):(this.h=!1,this.i=new Wo(null,this.h))}xe.prototype.toString=function(){var a=[],h=this.j;h&&a.push(et(h,at,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(et(h,at,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(et(m,m.charAt(0)=="/"?Ot:Tt,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",et(m,Vt)),a.join("")};function Ue(a){return new xe(a)}function Fe(a,h,m){a.j=m?Ke(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function be(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function je(a,h,m){h instanceof Wo?(a.i=h,k1(a.i,a.h)):(m||(h=et(h,Dt)),a.i=new Wo(h,a.h))}function ge(a,h,m){a.i.set(h,m)}function it(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ke(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function et(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,ft),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ft(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var at=/[#\/\?@]/g,Tt=/[#\?:]/g,Ot=/[#\?]/g,Dt=/[#\?@]/g,Vt=/#/g;function Wo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zr(a){a.g||(a.g=new Map,a.h=0,a.i&&A(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Wo.prototype,t.add=function(a,h){Zr(this),this.i=null,a=Ps(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Km(a,h){Zr(a),h=Ps(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Wm(a,h){return Zr(a),h=Ps(a,h),a.g.has(h)}t.forEach=function(a,h){Zr(this),this.g.forEach(function(m,w){m.forEach(function(U){a.call(h,U,w,this)},this)},this)},t.na=function(){Zr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let w=0;w<h.length;w++){const U=a[w];for(let z=0;z<U.length;z++)m.push(h[w])}return m},t.V=function(a){Zr(this);let h=[];if(typeof a=="string")Wm(this,a)&&(h=h.concat(this.g.get(Ps(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)h=h.concat(a[m])}return h},t.set=function(a,h){return Zr(this),this.i=null,a=Ps(this,a),Wm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function qm(a,h,m){Km(a,h),0<m.length&&(a.i=null,a.g.set(Ps(a,h),L(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var w=h[m];const z=encodeURIComponent(String(w)),ne=this.V(w);for(w=0;w<ne.length;w++){var U=z;ne[w]!==""&&(U+="="+encodeURIComponent(String(ne[w]))),a.push(U)}}return this.i=a.join("&")};function Ps(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function k1(a,h){h&&!a.j&&(Zr(a),a.i=null,a.g.forEach(function(m,w){var U=w.toLowerCase();w!=U&&(Km(this,w),qm(this,U,m))},a)),a.j=h}function N1(a,h){const m=new d;if(l.Image){const w=new Image;w.onload=R(ei,m,"TestLoadImage: loaded",!0,h,w),w.onerror=R(ei,m,"TestLoadImage: error",!1,h,w),w.onabort=R(ei,m,"TestLoadImage: abort",!1,h,w),w.ontimeout=R(ei,m,"TestLoadImage: timeout",!1,h,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else h(!1)}function b1(a,h){const m=new d,w=new AbortController,U=setTimeout(()=>{w.abort(),ei(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:w.signal}).then(z=>{clearTimeout(U),z.ok?ei(m,"TestPingServer: ok",!0,h):ei(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(U),ei(m,"TestPingServer: error",!1,h)})}function ei(a,h,m,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(m)}catch{}}function O1(){this.g=new As}function D1(a,h,m){const w=m||"";try{Ve(a,function(U,z){let ne=U;f(U)&&(ne=rr(U)),h.push(w+z+"="+encodeURIComponent(ne))})}catch(U){throw h.push(w+"type="+encodeURIComponent("_badmap")),U}}function Ml(a){this.l=a.Ub||null,this.j=a.eb||!1}O(Ml,wr),Ml.prototype.g=function(){return new Ul(this.l,this.j)},Ml.prototype.i=function(a){return function(){return a}}({});function Ul(a,h){Et.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Ul,Et),t=Ul.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ho(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ho(this)),this.g&&(this.readyState=3,Ho(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qo(this):Ho(this),this.readyState==3&&Hm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qo(this))},t.Qa=function(a){this.g&&(this.response=a,qo(this))},t.ga=function(){this.g&&qo(this)};function qo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ho(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function Ho(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gm(a){let h="";return ee(a,function(m,w){h+=w,h+=":",h+=m,h+=`\r
`}),h}function yf(a,h,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=Gm(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):ge(a,h,m))}function _t(a){Et.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(_t,Et);var V1=/^https?$/i,L1=["POST","PUT"];t=_t.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():X.g(),this.v=this.o?Yr(this.o):Yr(X),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(z){Qm(this,z);return}if(a=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)m.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())m.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(z=>z.toLowerCase()=="content-type"),U=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(L1,h,void 0))||w||U||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ne]of m)this.g.setRequestHeader(z,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jm(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){Qm(this,z)}};function Qm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ym(a),Fl(a)}function Ym(a){a.A||(a.A=!0,Ct(a,"complete"),Ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ct(this,"complete"),Ct(this,"abort"),Fl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fl(this,!0)),_t.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Xm(this):this.bb())},t.bb=function(){Xm(this)};function Xm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tr(a)!=4||a.Z()!=2)){if(a.u&&Tr(a)==4)jo(a.Ea,0,a);else if(Ct(a,"readystatechange"),Tr(a)==4){a.h=!1;try{const ne=a.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var w;if(w=ne===0){var U=String(a.D).match(Ne)[1]||null;!U&&l.self&&l.self.location&&(U=l.self.location.protocol.slice(0,-1)),w=!V1.test(U?U.toLowerCase():"")}m=w}if(m)Ct(a,"complete"),Ct(a,"success");else{a.m=6;try{var z=2<Tr(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",Ym(a)}}finally{Fl(a)}}}}function Fl(a,h){if(a.g){Jm(a);const m=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ct(a,"ready");try{m.onreadystatechange=w}catch{}}}function Jm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),$i(h)}};function Zm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function M1(a){const h={};a=(a.g&&2<=Tr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(I(a[w]))continue;var m=b(a[w]);const U=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const z=h[U]||[];h[U]=z,z.push(m)}x(h,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Go(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function eg(a){this.Aa=0,this.i=[],this.j=new d,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Go("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Go("baseRetryDelayMs",5e3,a),this.cb=Go("retryDelaySeedMs",1e4,a),this.Wa=Go("forwardChannelMaxRetries",2,a),this.wa=Go("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new se(a&&a.concurrentRequestLimit),this.Da=new O1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=eg.prototype,t.la=8,t.G=1,t.connect=function(a,h,m,w){jt(0),this.W=a,this.H=h||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=ug(this,null,this.W),Bl(this)};function _f(a){if(tg(a),a.G==3){var h=a.U++,m=Ue(a.I);if(ge(m,"SID",a.K),ge(m,"RID",h),ge(m,"TYPE","terminate"),Qo(a,m),h=new te(a,a.j,h),h.L=2,h.v=it(Ue(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=h.v,m=!0),m||(h.g=cg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Te(h)}lg(a)}function jl(a){a.g&&(wf(a),a.g.cancel(),a.g=null)}function tg(a){jl(a),a.u&&(l.clearTimeout(a.u),a.u=null),zl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Bl(a){if(!j(a.h)&&!a.s){a.s=!0;var h=a.Ga;Sn||Oe(),ie||(Sn(),ie=!0),ve.add(h,a),a.B=0}}function U1(a,h){return B(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Jr(v(a.Ga,a,h),ag(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const U=new te(this,this.j,a);let z=this.o;if(this.S&&(z?(z=T(z),C(z,this.S)):z=this.S),this.m!==null||this.O||(U.H=z,z=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=rg(this,U,h),m=Ue(this.I),ge(m,"RID",a),ge(m,"CVER",22),this.D&&ge(m,"X-HTTP-Session-Id",this.D),Qo(this,m),z&&(this.O?h="headers="+encodeURIComponent(String(Gm(z)))+"&"+h:this.m&&yf(m,this.m,z)),K(this.h,U),this.Ua&&ge(m,"TYPE","init"),this.P?(ge(m,"$req",h),ge(m,"SID","null"),U.T=!0,Ee(U,m,null)):Ee(U,m,h),this.G=2}}else this.G==3&&(a?ng(this,a):this.i.length==0||j(this.h)||ng(this))};function ng(a,h){var m;h?m=h.l:m=a.U++;const w=Ue(a.I);ge(w,"SID",a.K),ge(w,"RID",m),ge(w,"AID",a.T),Qo(a,w),a.m&&a.o&&yf(w,a.m,a.o),m=new te(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),h&&(a.i=h.D.concat(a.i)),h=rg(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),K(a.h,m),Ee(m,w,h)}function Qo(a,h){a.H&&ee(a.H,function(m,w){ge(h,w,m)}),a.l&&Ve({},function(m,w){ge(h,w,m)})}function rg(a,h,m){m=Math.min(a.i.length,m);var w=a.l?v(a.l.Na,a.l,a):null;e:{var U=a.i;let z=-1;for(;;){const ne=["count="+m];z==-1?0<m?(z=U[0].g,ne.push("ofs="+z)):z=0:ne.push("ofs="+z);let nt=!0;for(let Bt=0;Bt<m;Bt++){let Qe=U[Bt].g;const Xt=U[Bt].map;if(Qe-=z,0>Qe)z=Math.max(0,U[Bt].g-100),nt=!1;else try{D1(Xt,ne,"req"+Qe+"_")}catch{w&&w(Xt)}}if(nt){w=ne.join("&");break e}}}return a=a.i.splice(0,m),h.D=a,w}function ig(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Sn||Oe(),ie||(Sn(),ie=!0),ve.add(h,a),a.v=0}}function vf(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Jr(v(a.Fa,a),ag(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,sg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Jr(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),jl(this),sg(this))};function wf(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function sg(a){a.g=new te(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Ue(a.qa);ge(h,"RID","rpc"),ge(h,"SID",a.K),ge(h,"AID",a.T),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(h,"TO",a.ja),ge(h,"TYPE","xmlhttp"),Qo(a,h),a.m&&a.o&&yf(h,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=it(Ue(h)),m.m=null,m.P=!0,ke(m,a)}t.Za=function(){this.C!=null&&(this.C=null,jl(this),vf(this),jt(19))};function zl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function og(a,h){var m=null;if(a.g==h){zl(a),wf(a),a.g=null;var w=2}else if(G(a.h,h))m=h.D,q(a.h,h),w=1;else return;if(a.G!=0){if(h.o)if(w==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var U=a.B;w=$n(),Ct(w,new Yt(w,m)),Bl(a)}else ig(a);else if(U=h.s,U==3||U==0&&0<h.X||!(w==1&&U1(a,h)||w==2&&vf(a)))switch(m&&0<m.length&&(h=a.h,h.i=h.i.concat(m)),U){case 1:Ki(a,5);break;case 4:Ki(a,10);break;case 3:Ki(a,6);break;default:Ki(a,2)}}}function ag(a,h){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*h}function Ki(a,h){if(a.j.info("Error code "+h),h==2){var m=v(a.fb,a),w=a.Xa;const U=!w;w=new xe(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fe(w,"https"),it(w),U?N1(w.toString(),m):b1(w.toString(),m)}else jt(2);a.G=0,a.l&&a.l.sa(h),lg(a),tg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function lg(a){if(a.G=0,a.ka=[],a.l){const h=Y(a.h);(h.length!=0||a.i.length!=0)&&(F(a.ka,h),F(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function ug(a,h,m){var w=m instanceof xe?Ue(m):new xe(m);if(w.g!="")h&&(w.g=h+"."+w.g),be(w,w.s);else{var U=l.location;w=U.protocol,h=h?h+"."+U.hostname:U.hostname,U=+U.port;var z=new xe(null);w&&Fe(z,w),h&&(z.g=h),U&&be(z,U),m&&(z.l=m),w=z}return m=a.D,h=a.ya,m&&h&&ge(w,m,h),ge(w,"VER",a.la),Qo(a,w),w}function cg(a,h,m){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new _t(new Ml({eb:m})):new _t(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fg(){}t=fg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $l(){}$l.prototype.g=function(a,h){return new An(a,h)};function An(a,h){Et.call(this),this.g=new eg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!I(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Cs(this)}O(An,Et),An.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},An.prototype.close=function(){_f(this.g)},An.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=rr(a),a=m);h.i.push(new de(h.Ya++,a)),h.G==3&&Bl(h)},An.prototype.N=function(){this.g.l=null,delete this.j,_f(this.g),delete this.g,An.aa.N.call(this)};function hg(a){zo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}O(hg,zo);function dg(){$o.call(this),this.status=1}O(dg,$o);function Cs(a){this.g=a}O(Cs,fg),Cs.prototype.ua=function(){Ct(this.g,"a")},Cs.prototype.ta=function(a){Ct(this.g,new hg(a))},Cs.prototype.sa=function(a){Ct(this.g,new dg)},Cs.prototype.ra=function(){Ct(this.g,"b")},$l.prototype.createWebChannel=$l.prototype.g,An.prototype.send=An.prototype.o,An.prototype.open=An.prototype.m,An.prototype.close=An.prototype.close,ME=function(){return new $l},LE=function(){return $n()},VE=Ft,vd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},M.NO_ERROR=0,M.TIMEOUT=8,M.HTTP_ERROR=6,Nu=M,W.COMPLETE="complete",DE=W,xs.EventType=Xr,Xr.OPEN="a",Xr.CLOSE="b",Xr.ERROR="c",Xr.MESSAGE="d",Et.prototype.listen=Et.prototype.K,da=xs,_t.prototype.listenOnce=_t.prototype.L,_t.prototype.getLastError=_t.prototype.Ka,_t.prototype.getLastErrorCode=_t.prototype.Ba,_t.prototype.getStatus=_t.prototype.Z,_t.prototype.getResponseJson=_t.prototype.Oa,_t.prototype.getResponseText=_t.prototype.oa,_t.prototype.send=_t.prototype.ea,_t.prototype.setWithCredentials=_t.prototype.Ha,OE=_t}).apply(typeof uu<"u"?uu:typeof self<"u"?self:typeof window<"u"?window:{});const h_="@firebase/firestore";/**
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
 */class nn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nn.UNAUTHENTICATED=new nn(null),nn.GOOGLE_CREDENTIALS=new nn("google-credentials-uid"),nn.FIRST_PARTY=new nn("first-party-uid"),nn.MOCK_USER=new nn("mock-user");/**
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
 */let No="10.14.0";/**
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
 */const cs=new Up("@firebase/firestore");function sa(){return cs.logLevel}function me(t,...e){if(cs.logLevel<=We.DEBUG){const n=e.map(Qp);cs.debug(`Firestore (${No}): ${t}`,...n)}}function Br(t,...e){if(cs.logLevel<=We.ERROR){const n=e.map(Qp);cs.error(`Firestore (${No}): ${t}`,...n)}}function go(t,...e){if(cs.logLevel<=We.WARN){const n=e.map(Qp);cs.warn(`Firestore (${No}): ${t}`,...n)}}function Qp(t){if(typeof t=="string")return t;try{/**
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
 */function Pe(t="Unexpected state"){const e=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: `+t;throw Br(e),new Error(e)}function Ze(t,e){t||Pe()}function Me(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class UE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nn.UNAUTHENTICATED))}shutdown(){}}class Uk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fk{constructor(e){this.t=e,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ze(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ze(typeof r.accessToken=="string"),new UE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string"),new nn(e)}}class jk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Bk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new jk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $k{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ze(this.o===void 0);const r=s=>{s.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,me("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ze(typeof n.token=="string"),this.R=n.token,new zk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Kk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class FE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Kk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ye(t,e){return t<e?-1:t>e?1:0}function yo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class bt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ae(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new bt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ye(this.nanoseconds,e.nanoseconds):Ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Le(e)}static min(){return new Le(new bt(0,0))}static max(){return new Le(new bt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class el{constructor(e,n,r){n===void 0?n=0:n>e.length&&Pe(),r===void 0?r=e.length-n:r>e.length-n&&Pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return el.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof el?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ut extends el{construct(e,n,r){return new ut(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ut(n)}static emptyPath(){return new ut([])}}const Wk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends el{construct(e,n,r){return new Kt(e,n,r)}static isValidIdentifier(e){return Wk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ae(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new ae(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ae(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new ae(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(n)}static emptyPath(){return new Kt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(ut.fromString(e))}static fromName(e){return new _e(ut.fromString(e).popFirst(5))}static empty(){return new _e(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ut.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new ut(e.slice()))}}function qk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Le.fromTimestamp(r===1e9?new bt(n+1,0):new bt(n,r));return new Ci(i,_e.empty(),e)}function Hk(t){return new Ci(t.readTime,t.key,-1)}class Ci{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ci(Le.min(),_e.empty(),-1)}static max(){return new Ci(Le.max(),_e.empty(),-1)}}function Gk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(t.documentKey,e.documentKey),n!==0?n:Ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const Qk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function El(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==Qk)throw t;me("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Q((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.reject(n)}static resolve(e){return new Q((n,r)=>{n(e)})}static reject(e){return new Q((n,r)=>{r(e)})}static waitFor(e){return new Q((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=Q.resolve(!1);for(const r of e)n=n.next(i=>i?Q.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new Q((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const f=u;n(e[f]).next(p=>{o[f]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new Q((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Xk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Tl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Yp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yp.oe=-1;function Yc(t){return t==null}function mc(t){return t===0&&1/t==-1/0}function Jk(t){return typeof t=="number"&&Number.isInteger(t)&&!mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function d_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class gt{constructor(e,n){this.comparator=e,this.root=n||$t.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cu(this.root,e,this.comparator,!1)}getReverseIterator(){return new cu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cu(this.root,e,this.comparator,!0)}}class cu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$t.RED,this.left=i??$t.EMPTY,this.right=s??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Pe();const e=this.left.check();if(e!==this.right.check())throw Pe();return e+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw Pe()}get value(){throw Pe()}get color(){throw Pe()}get left(){throw Pe()}get right(){throw Pe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new $t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new p_(this.data.getIterator())}getIteratorFrom(e){return new p_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qt(this.comparator);return n.data=e,n}}class p_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new Pn([])}unionWith(e){let n=new qt(Kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class BE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new BE("Invalid base64 string: "+s):s}}(e);return new Gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const Zk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(t){if(Ze(!!t),typeof t=="string"){let e=0;const n=Zk.exec(t);if(Ze(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:It(t.seconds),nanos:It(t.nanos)}}function It(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?Gt.fromBase64String(t):Gt.fromUint8Array(t)}/**
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
 */function Xp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jp(t){const e=t.mapValue.fields.__previous_value__;return Xp(e)?Jp(e):e}function tl(t){const e=ki(t.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
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
 */class e2{constructor(e,n,r,i,s,o,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f}}class nl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new nl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fu={mapValue:{}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xp(t)?4:n2(t)?9007199254740991:t2(t)?10:11:Pe()}function gr(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tl(t).isEqual(tl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ki(i.timestampValue),l=ki(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return fs(i.bytesValue).isEqual(fs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return It(i.geoPointValue.latitude)===It(s.geoPointValue.latitude)&&It(i.geoPointValue.longitude)===It(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return It(i.integerValue)===It(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=It(i.doubleValue),l=It(s.doubleValue);return o===l?mc(o)===mc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return yo(t.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(d_(o)!==d_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!gr(o[u],l[u])))return!1;return!0}(t,e);default:return Pe()}}function rl(t,e){return(t.values||[]).find(n=>gr(n,e))!==void 0}function _o(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return Ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ye(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=It(s.integerValue||s.doubleValue),u=It(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return m_(t.timestampValue,e.timestampValue);case 4:return m_(tl(t),tl(e));case 5:return Ye(t.stringValue,e.stringValue);case 6:return function(s,o){const l=fs(s),u=fs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let f=0;f<l.length&&f<u.length;f++){const p=Ye(l[f],u[f]);if(p!==0)return p}return Ye(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Ye(It(s.latitude),It(o.latitude));return l!==0?l:Ye(It(s.longitude),It(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return g_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,f,p;const g=s.fields||{},v=o.fields||{},R=(l=g.value)===null||l===void 0?void 0:l.arrayValue,O=(u=v.value)===null||u===void 0?void 0:u.arrayValue,L=Ye(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((p=O==null?void 0:O.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:g_(R,O)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===fu.mapValue&&o===fu.mapValue)return 0;if(s===fu.mapValue)return 1;if(o===fu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),f=o.fields||{},p=Object.keys(f);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const v=Ye(u[g],p[g]);if(v!==0)return v;const R=_o(l[u[g]],f[p[g]]);if(R!==0)return R}return Ye(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Pe()}}function m_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ye(t,e);const n=ki(t),r=ki(e),i=Ye(n.seconds,r.seconds);return i!==0?i:Ye(n.nanos,r.nanos)}function g_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=_o(n[i],r[i]);if(s)return s}return Ye(n.length,r.length)}function vo(t){return wd(t)}function wd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ki(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return _e.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wd(n.fields[o])}`;return i+"}"}(t.mapValue):Pe()}function y_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ed(t){return!!t&&"integerValue"in t}function Zp(t){return!!t&&"arrayValue"in t}function __(t){return!!t&&"nullValue"in t}function v_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bu(t){return!!t&&"mapValue"in t}function t2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ra(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ra(t.arrayValue.values[n]);return e}return Object.assign({},t)}function n2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(n)}setAll(e){let n=Kt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ra(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());bu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];bu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _n(Ra(this.value))}}function zE(t){const e=[];return ws(t.fields,(n,r)=>{const i=new Kt([n]);if(bu(r)){const s=zE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pn(e)}/**
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
 */class sn{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new sn(e,0,Le.min(),Le.min(),Le.min(),_n.empty(),0)}static newFoundDocument(e,n,r,i){return new sn(e,1,n,Le.min(),r,i,0)}static newNoDocument(e,n){return new sn(e,2,n,Le.min(),Le.min(),_n.empty(),0)}static newUnknownDocument(e,n){return new sn(e,3,n,Le.min(),Le.min(),_n.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof sn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gc{constructor(e,n){this.position=e,this.inclusive=n}}function w_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=_e.comparator(_e.fromName(o.referenceValue),n.key):r=_o(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function E_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class il{constructor(e,n="asc"){this.field=e,this.dir=n}}function r2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $E{}class Pt extends $E{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new s2(e,n,r):n==="array-contains"?new l2(e,r):n==="in"?new u2(e,r):n==="not-in"?new c2(e,r):n==="array-contains-any"?new f2(e,r):new Pt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new o2(e,r):new a2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_o(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class er extends $E{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new er(e,n)}matches(e){return KE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function KE(t){return t.op==="and"}function WE(t){return i2(t)&&KE(t)}function i2(t){for(const e of t.filters)if(e instanceof er)return!1;return!0}function Td(t){if(t instanceof Pt)return t.field.canonicalString()+t.op.toString()+vo(t.value);if(WE(t))return t.filters.map(e=>Td(e)).join(",");{const e=t.filters.map(n=>Td(n)).join(",");return`${t.op}(${e})`}}function qE(t,e){return t instanceof Pt?function(r,i){return i instanceof Pt&&r.op===i.op&&r.field.isEqual(i.field)&&gr(r.value,i.value)}(t,e):t instanceof er?function(r,i){return i instanceof er&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&qE(o,i.filters[l]),!0):!1}(t,e):void Pe()}function HE(t){return t instanceof Pt?function(n){return`${n.field.canonicalString()} ${n.op} ${vo(n.value)}`}(t):t instanceof er?function(n){return n.op.toString()+" {"+n.getFilters().map(HE).join(" ,")+"}"}(t):"Filter"}class s2 extends Pt{constructor(e,n,r){super(e,n,r),this.key=_e.fromName(r.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class o2 extends Pt{constructor(e,n){super(e,"in",n),this.keys=GE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class a2 extends Pt{constructor(e,n){super(e,"not-in",n),this.keys=GE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function GE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>_e.fromName(r.referenceValue))}class l2 extends Pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zp(n)&&rl(n.arrayValue,this.value)}}class u2 extends Pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rl(this.value.arrayValue,n)}}class c2 extends Pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!rl(this.value.arrayValue,n)}}class f2 extends Pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>rl(this.value.arrayValue,r))}}/**
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
 */class h2{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function T_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new h2(t,e,n,r,i,s,o)}function em(t){const e=Me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Td(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vo(r)).join(",")),e.ue=n}return e.ue}function tm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!r2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!E_(t.startAt,e.startAt)&&E_(t.endAt,e.endAt)}function Id(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class bo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function d2(t,e,n,r,i,s,o,l){return new bo(t,e,n,r,i,s,o,l)}function Xc(t){return new bo(t)}function I_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function QE(t){return t.collectionGroup!==null}function Pa(t){const e=Me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qt(Kt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new il(s,r))}),n.has(Kt.keyField().canonicalString())||e.ce.push(new il(Kt.keyField(),r))}return e.ce}function pr(t){const e=Me(t);return e.le||(e.le=p2(e,Pa(t))),e.le}function p2(t,e){if(t.limitType==="F")return T_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new il(i.field,s)});const n=t.endAt?new gc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gc(t.startAt.position,t.startAt.inclusive):null;return T_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sd(t,e){const n=t.filters.concat([e]);return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yc(t,e,n){return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jc(t,e){return tm(pr(t),pr(e))&&t.limitType===e.limitType}function YE(t){return`${em(pr(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HE(i)).join(", ")}]`),Yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vo(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function Zc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):_e.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Pa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const f=w_(o,l,u);return o.inclusive?f<=0:f<0}(r.startAt,Pa(r),i)||r.endAt&&!function(o,l,u){const f=w_(o,l,u);return o.inclusive?f>=0:f>0}(r.endAt,Pa(r),i))}(t,e)}function m2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XE(t){return(e,n)=>{let r=!1;for(const i of Pa(t)){const s=g2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function g2(t,e,n){const r=t.field.isKeyField()?_e.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),f=l.data.field(s);return u!==null&&f!==null?_o(u,f):Pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Pe()}}/**
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
 */class Oo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jE(this.inner)}size(){return this.innerSize}}/**
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
 */const y2=new gt(_e.comparator);function zr(){return y2}const JE=new gt(_e.comparator);function pa(...t){let e=JE;for(const n of t)e=e.insert(n.key,n);return e}function ZE(t){let e=JE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ji(){return Ca()}function eT(){return Ca()}function Ca(){return new Oo(t=>t.toString(),(t,e)=>t.isEqual(e))}const _2=new gt(_e.comparator),v2=new qt(_e.comparator);function $e(...t){let e=v2;for(const n of t)e=e.add(n);return e}const w2=new qt(Ye);function E2(){return w2}/**
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
 */function nm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function tT(t){return{integerValue:""+t}}function T2(t,e){return Jk(e)?tT(e):nm(t,e)}/**
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
 */class ef{constructor(){this._=void 0}}function I2(t,e,n){return t instanceof sl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xp(s)&&(s=Jp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof wo?rT(t,e):t instanceof ol?iT(t,e):function(i,s){const o=nT(i,s),l=S_(o)+S_(i.Pe);return Ed(o)&&Ed(i.Pe)?tT(l):nm(i.serializer,l)}(t,e)}function S2(t,e,n){return t instanceof wo?rT(t,e):t instanceof ol?iT(t,e):n}function nT(t,e){return t instanceof _c?function(r){return Ed(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class sl extends ef{}class wo extends ef{constructor(e){super(),this.elements=e}}function rT(t,e){const n=sT(e);for(const r of t.elements)n.some(i=>gr(i,r))||n.push(r);return{arrayValue:{values:n}}}class ol extends ef{constructor(e){super(),this.elements=e}}function iT(t,e){let n=sT(e);for(const r of t.elements)n=n.filter(i=>!gr(i,r));return{arrayValue:{values:n}}}class _c extends ef{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function S_(t){return It(t.integerValue||t.doubleValue)}function sT(t){return Zp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class oT{constructor(e,n){this.field=e,this.transform=n}}function A2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof wo&&i instanceof wo||r instanceof ol&&i instanceof ol?yo(r.elements,i.elements,gr):r instanceof _c&&i instanceof _c?gr(r.Pe,i.Pe):r instanceof sl&&i instanceof sl}(t.transform,e.transform)}class x2{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tf{}function aT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nf(t.key,dn.none()):new Il(t.key,t.data,dn.none());{const n=t.data,r=_n.empty();let i=new qt(Kt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fi(t.key,r,new Pn(i.toArray()),dn.none())}}function R2(t,e,n){t instanceof Il?function(i,s,o){const l=i.value.clone(),u=x_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fi?function(i,s,o){if(!Ou(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=x_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(lT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ka(t,e,n,r){return t instanceof Il?function(s,o,l,u){if(!Ou(s.precondition,o))return l;const f=s.value.clone(),p=R_(s.fieldTransforms,u,o);return f.setAll(p),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fi?function(s,o,l,u){if(!Ou(s.precondition,o))return l;const f=R_(s.fieldTransforms,u,o),p=o.data;return p.setAll(lT(s)),p.setAll(f),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Ou(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function P2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nT(r.transform,i||null);s!=null&&(n===null&&(n=_n.empty()),n.set(r.field,s))}return n||null}function A_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&yo(r,i,(s,o)=>A2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Il extends tf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fi extends tf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function x_(t,e,n){const r=new Map;Ze(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,S2(o,l,n[i]))}return r}function R_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,I2(s,o,e))}return r}class nf extends tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class C2 extends tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class k2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&R2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=aT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$e())}isEqual(e){return this.batchId===e.batchId&&yo(this.mutations,e.mutations,(n,r)=>A_(n,r))&&yo(this.baseMutations,e.baseMutations,(n,r)=>A_(n,r))}}class rm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ze(e.mutations.length===r.length);let i=function(){return _2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rm(e,n,r,i)}}/**
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
 */class N2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class b2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var xt,qe;function O2(t){switch(t){default:return Pe();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function uT(t){if(t===void 0)return Br("GRPC error has no .code"),H.UNKNOWN;switch(t){case xt.OK:return H.OK;case xt.CANCELLED:return H.CANCELLED;case xt.UNKNOWN:return H.UNKNOWN;case xt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case xt.INTERNAL:return H.INTERNAL;case xt.UNAVAILABLE:return H.UNAVAILABLE;case xt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case xt.NOT_FOUND:return H.NOT_FOUND;case xt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case xt.ABORTED:return H.ABORTED;case xt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case xt.DATA_LOSS:return H.DATA_LOSS;default:return Pe()}}(qe=xt||(xt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function D2(){return new TextEncoder}/**
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
 */const V2=new ns([4294967295,4294967295],0);function P_(t){const e=D2().encode(t),n=new bE;return n.update(e),new Uint8Array(n.digest())}function C_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ns([n,r],0),new ns([i,s],0)]}class im{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ma(`Invalid padding: ${n}`);if(r<0)throw new ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ma(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ns.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ns.fromNumber(r)));return i.compare(V2)===1&&(i=new ns([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=P_(e),[r,i]=C_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new im(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=P_(e),[r,i]=C_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rf(Le.min(),i,new gt(Ye),zr(),$e())}}class Sl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sl(r,n,$e(),$e(),$e())}}/**
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
 */class Du{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class cT{constructor(e,n){this.targetId=e,this.me=n}}class fT{constructor(e,n,r=Gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class k_{constructor(){this.fe=0,this.ge=b_(),this.pe=Gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=$e(),n=$e(),r=$e();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Pe()}}),new Sl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=b_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ze(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class L2{constructor(e){this.Le=e,this.Be=new Map,this.ke=zr(),this.qe=N_(),this.Qe=new gt(Ye)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Id(s))if(r===0){const o=new _e(s.path);this.Ue(n,o,sn.newNoDocument(o,Le.min()))}else Ze(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,f)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=fs(r).toUint8Array()}catch(u){if(u instanceof BE)return go("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new im(o,i,s)}catch(u){return go(u instanceof ma?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Id(l.target)){const u=new _e(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,sn.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=$e();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new rf(e,n,this.Qe,this.ke,r);return this.ke=zr(),this.qe=N_(),this.Qe=new gt(Ye),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new k_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qt(Ye),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||me("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new k_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function N_(){return new gt(_e.comparator)}function b_(){return new gt(_e.comparator)}const M2={asc:"ASCENDING",desc:"DESCENDING"},U2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},F2={and:"AND",or:"OR"};class j2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ad(t,e){return t.useProto3Json||Yc(e)?e:{value:e}}function vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function B2(t,e){return vc(t,e.toTimestamp())}function mr(t){return Ze(!!t),Le.fromTimestamp(function(n){const r=ki(n);return new bt(r.seconds,r.nanos)}(t))}function sm(t,e){return xd(t,e).canonicalString()}function xd(t,e){const n=function(i){return new ut(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dT(t){const e=ut.fromString(t);return Ze(_T(e)),e}function Rd(t,e){return sm(t.databaseId,e.path)}function ih(t,e){const n=dT(e);if(n.get(1)!==t.databaseId.projectId)throw new ae(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _e(mT(n))}function pT(t,e){return sm(t.databaseId,e)}function z2(t){const e=dT(t);return e.length===4?ut.emptyPath():mT(e)}function Pd(t){return new ut(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mT(t){return Ze(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function O_(t,e,n){return{name:Rd(t,e),fields:n.value.mapValue.fields}}function $2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:Pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(f,p){return f.useProto3Json?(Ze(p===void 0||typeof p=="string"),Gt.fromBase64String(p||"")):(Ze(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Gt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(f){const p=f.code===void 0?H.UNKNOWN:uT(f.code);return new ae(p,f.message||"")}(o);n=new fT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ih(t,r.document.name),s=mr(r.document.updateTime),o=r.document.createTime?mr(r.document.createTime):Le.min(),l=new _n({mapValue:{fields:r.document.fields}}),u=sn.newFoundDocument(i,s,o,l),f=r.targetIds||[],p=r.removedTargetIds||[];n=new Du(f,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ih(t,r.document),s=r.readTime?mr(r.readTime):Le.min(),o=sn.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Du([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ih(t,r.document),s=r.removedTargetIds||[];n=new Du([],s,i,null)}else{if(!("filter"in e))return Pe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new b2(i,s),l=r.targetId;n=new cT(l,o)}}return n}function K2(t,e){let n;if(e instanceof Il)n={update:O_(t,e.key,e.value)};else if(e instanceof nf)n={delete:Rd(t,e.key)};else if(e instanceof Fi)n={update:O_(t,e.key,e.data),updateMask:Z2(e.fieldMask)};else{if(!(e instanceof C2))return Pe();n={verify:Rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof sl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof wo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ol)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _c)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:B2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Pe()}(t,e.precondition)),n}function W2(t,e){return t&&t.length>0?(Ze(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?mr(i.updateTime):mr(s);return o.isEqual(Le.min())&&(o=mr(s)),new x2(o,i.transformResults||[])}(n,e))):[]}function q2(t,e){return{documents:[pT(t,e.path)]}}function H2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pT(t,i);const s=function(f){if(f.length!==0)return yT(er.create(f,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(f){if(f.length!==0)return f.map(p=>function(v){return{field:Os(v.field),direction:Y2(v.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ad(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:n,parent:i}}function G2(t){let e=z2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ze(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const v=gT(g);return v instanceof er&&WE(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(v=>function(O){return new il(Ds(O.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,Yc(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(g){const v=!!g.before,R=g.values||[];return new gc(R,v)}(n.startAt));let f=null;return n.endAt&&(f=function(g){const v=!g.before,R=g.values||[];return new gc(R,v)}(n.endAt)),d2(e,i,o,s,l,"F",u,f)}function Q2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return Pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ds(n.unaryFilter.field);return Pt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ds(n.unaryFilter.field);return Pt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return Pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Pe()}}(t):t.fieldFilter!==void 0?function(n){return Pt.create(Ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return er.create(n.compositeFilter.filters.map(r=>gT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Pe()}}(n.compositeFilter.op))}(t):Pe()}function Y2(t){return M2[t]}function X2(t){return U2[t]}function J2(t){return F2[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ds(t){return Kt.fromServerFormat(t.fieldPath)}function yT(t){return t instanceof Pt?function(n){if(n.op==="=="){if(v_(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(__(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(v_(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(__(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:X2(n.op),value:n.value}}}(t):t instanceof er?function(n){const r=n.getFilters().map(i=>yT(i));return r.length===1?r[0]:{compositeFilter:{op:J2(n.op),filters:r}}}(t):Pe()}function Z2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _T(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class mi{constructor(e,n,r,i,s=Le.min(),o=Le.min(),l=Gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eN{constructor(e){this.ct=e}}function tN(t){const e=G2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yc(e,e.limit,"L"):e}/**
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
 */class nN{constructor(){this.un=new rN}addToCollectionParentIndex(e,n){return this.un.add(n),Q.resolve()}getCollectionParents(e,n){return Q.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return Q.resolve()}deleteFieldIndex(e,n){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,n){return Q.resolve()}getDocumentsMatchingTarget(e,n){return Q.resolve(null)}getIndexType(e,n){return Q.resolve(0)}getFieldIndexes(e,n){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,n){return Q.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,n){return Q.resolve(Ci.min())}updateCollectionGroup(e,n,r){return Q.resolve()}updateIndexEntries(e,n){return Q.resolve()}}class rN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qt(ut.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qt(ut.comparator)).toArray()}}/**
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
 */class Eo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Eo(0)}static kn(){return new Eo(-1)}}/**
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
 */class iN{constructor(){this.changes=new Oo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,sn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class oN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ka(r.mutation,i,Pn.empty(),bt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,$e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=$e()){const i=Ji();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=pa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ji();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,$e()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=zr();const o=Ca(),l=function(){return Ca()}();return n.forEach((u,f)=>{const p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof Fi)?s=s.insert(f.key,f):p!==void 0?(o.set(f.key,p.mutation.getFieldMask()),ka(p.mutation,f,p.mutation.getFieldMask(),bt.now())):o.set(f.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((f,p)=>o.set(f,p)),n.forEach((f,p)=>{var g;return l.set(f,new sN(p,(g=o.get(f))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ca();let i=new gt((o,l)=>o-l),s=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const f=n.get(u);if(f===null)return;let p=r.get(u)||Pn.empty();p=l.applyToLocalView(f,p),r.set(u,p);const g=(i.get(l.batchId)||$e()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,p=u.value,g=eT();p.forEach(v=>{if(!s.has(v)){const R=aT(n.get(v),r.get(v));R!==null&&g.set(v,R),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,f,g))}return Q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return _e.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):Q.resolve(Ji());let l=-1,u=s;return o.next(f=>Q.forEach(f,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(p)?Q.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,f,s)).next(()=>this.computeViews(e,u,f,$e())).next(p=>({batchId:l,changes:ZE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(r=>{let i=pa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=pa();return this.indexManager.getCollectionParents(e,s).next(l=>Q.forEach(l,u=>{const f=function(g,v){return new bo(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(p=>{p.forEach((g,v)=>{o=o.insert(g,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,f)=>{const p=f.getKey();o.get(p)===null&&(o=o.insert(p,sn.newInvalidDocument(p)))});let l=pa();return o.forEach((u,f)=>{const p=s.get(u);p!==void 0&&ka(p.mutation,f,Pn.empty(),bt.now()),Zc(n,f)&&(l=l.insert(u,f))}),l})}}/**
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
 */class aN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return Q.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mr(i.createTime)}}(n)),Q.resolve()}getNamedQuery(e,n){return Q.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:tN(i.bundledQuery),readTime:mr(i.readTime)}}(n)),Q.resolve()}}/**
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
 */class lN{constructor(){this.overlays=new gt(_e.comparator),this.Ir=new Map}getOverlay(e,n){return Q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ji();return Q.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),Q.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),Q.resolve()}getOverlaysForCollection(e,n,r){const i=Ji(),s=n.length+1,o=new _e(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return Q.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new gt((f,p)=>f-p);const o=this.overlays.getIterator();for(;o.hasNext();){const f=o.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let p=s.get(f.largestBatchId);p===null&&(p=Ji(),s=s.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=Ji(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=i)););return Q.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new N2(n,r));let s=this.Ir.get(n);s===void 0&&(s=$e(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class uN{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Q.resolve()}}/**
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
 */class om{constructor(){this.Tr=new qt(Lt.Er),this.dr=new qt(Lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Lt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Lt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new _e(new ut([])),r=new Lt(n,e),i=new Lt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new _e(new ut([])),r=new Lt(n,e),i=new Lt(n,e+1);let s=$e();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Lt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Lt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return _e.comparator(e.key,n.key)||Ye(e.wr,n.wr)}static Ar(e,n){return Ye(e.wr,n.wr)||_e.comparator(e.key,n.key)}}/**
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
 */class cN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qt(Lt.Er)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new k2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Lt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(e,n){return Q.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Lt(n,0),i=new Lt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qt(Ye);return n.forEach(i=>{const s=new Lt(i,0),o=new Lt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),Q.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;_e.isDocumentKey(s)||(s=s.child(""));const o=new Lt(new _e(s),0);let l=new qt(Ye);return this.br.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(u.wr)),!0)},o),Q.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ze(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return Q.forEach(n.mutations,i=>{const s=new Lt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Lt(n,0),i=this.br.firstAfterOrEqual(r);return Q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class fN{constructor(e){this.Mr=e,this.docs=function(){return new gt(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return Q.resolve(r?r.document.mutableCopy():sn.newInvalidDocument(n))}getEntries(e,n){let r=zr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():sn.newInvalidDocument(i))}),Q.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zr();const o=n.path,l=new _e(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:p}}=u.getNext();if(!o.isPrefixOf(f.path))break;f.path.length>o.length+1||Gk(Hk(p),r)<=0||(i.has(p.key)||Zc(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return Q.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Pe()}Or(e,n){return Q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hN(this)}getSize(e){return Q.resolve(this.size)}}class hN extends iN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),Q.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class dN{constructor(e){this.persistence=e,this.Nr=new Oo(n=>em(n),tm),this.lastRemoteSnapshotVersion=Le.min(),this.highestTargetId=0,this.Lr=0,this.Br=new om,this.targetCount=0,this.kr=Eo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),Q.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Eo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,Q.resolve()}updateTargetData(e,n){return this.Kn(n),Q.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),Q.waitFor(s).next(()=>i)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return Q.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),Q.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),Q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return Q.resolve(r)}containsKey(e,n){return Q.resolve(this.Br.containsKey(n))}}/**
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
 */class pN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Yp(0),this.Kr=!1,this.Kr=!0,this.$r=new uN,this.referenceDelegate=e(this),this.Ur=new dN(this),this.indexManager=new nN,this.remoteDocumentCache=function(i){return new fN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new eN(n),this.Gr=new aN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new cN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){me("MemoryPersistence","Starting transaction:",e);const i=new mN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return Q.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class mN extends Yk{constructor(e){super(),this.currentSequenceNumber=e}}class am{constructor(e){this.persistence=e,this.Jr=new om,this.Yr=null}static Zr(e){return new am(e)}get Xr(){if(this.Yr)return this.Yr;throw Pe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),Q.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),Q.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Xr,r=>{const i=_e.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Le.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return Q.or([()=>Q.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class lm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=$e(),i=$e();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lm(e,n.fromCache,r,i)}}/**
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
 */class gN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return uR()?8:Xk(un())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new gN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(sa()<=We.DEBUG&&me("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Q.resolve()):(sa()<=We.DEBUG&&me("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(sa()<=We.DEBUG&&me("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(n))):Q.resolve())}Yi(e,n){if(I_(n))return Q.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yc(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=$e(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.ts(n,l);return this.ns(n,f,o,u.readTime)?this.Yi(e,yc(n,null,"F")):this.rs(e,f,n,u)}))})))}Zi(e,n,r,i){return I_(n)||i.isEqual(Le.min())?Q.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?Q.resolve(null):(sa()<=We.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bs(n)),this.rs(e,o,n,qk(i,-1)).next(l=>l))})}ts(e,n){let r=new qt(XE(e));return n.forEach((i,s)=>{Zc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return sa()<=We.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",bs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ci.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class _N{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new gt(Ye),this._s=new Oo(s=>em(s),tm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function vN(t,e,n,r){return new _N(t,e,n,r)}async function vT(t,e){const n=Me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=$e();for(const f of i){o.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}for(const f of s){l.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(f=>({hs:f,removedBatchIds:o,addedBatchIds:l}))})})}function wN(t,e){const n=Me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,f,p){const g=f.batch,v=g.keys();let R=Q.resolve();return v.forEach(O=>{R=R.next(()=>p.getEntry(u,O)).next(L=>{const F=f.docVersions.get(O);Ze(F!==null),L.version.compareTo(F)<0&&(g.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),p.addEntry(L)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=$e();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wT(t){const e=Me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function EN(t,e){const n=Me(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((p,g)=>{const v=i.get(g);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,g)));let R=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Gt.EMPTY_BYTE_STRING,Le.min()).withLastLimboFreeSnapshotVersion(Le.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(g,R),function(L,F,P){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(v,R,p)&&l.push(n.Ur.updateTargetData(s,R))});let u=zr(),f=$e();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(TN(s,o,e.documentUpdates).next(p=>{u=p.Ps,f=p.Is})),!r.isEqual(Le.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return Q.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,f)).next(()=>u)}).then(s=>(n.os=i,s))}function TN(t,e,n){let r=$e(),i=$e();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zr();return n.forEach((l,u)=>{const f=s.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Le.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):me("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function IN(t,e){const n=Me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function SN(t,e){const n=Me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,Q.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new mi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=Me(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Tl(o))throw o;me("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function D_(t,e,n){const r=Me(t);let i=Le.min(),s=$e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,f,p){const g=Me(u),v=g._s.get(p);return v!==void 0?Q.resolve(g.os.get(v)):g.Ur.getTargetData(f,p)}(r,o,pr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Le.min(),n?s:$e())).next(l=>(AN(r,m2(e),l),{documents:l,Ts:s})))}function AN(t,e,n){let r=t.us.get(e)||Le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class V_{constructor(){this.activeTargetIds=E2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xN{constructor(){this.so=new V_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new V_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RN{_o(e){}shutdown(){}}/**
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
 */class L_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){me("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){me("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hu=null;function sh(){return hu===null?hu=function(){return 268435456+Math.round(2147483648*Math.random())}():hu++,"0x"+hu.toString(16)}/**
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
 */const PN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class CN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const tn="WebChannelConnection";class kN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=sh(),u=this.xo(n,r.toUriEncodedString());me("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,s,o),this.No(n,u,f,i).then(p=>(me("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw go("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+No}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=PN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=sh();return new Promise((o,l)=>{const u=new OE;u.setWithCredentials(!0),u.listenOnce(DE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Nu.NO_ERROR:const p=u.getResponseJson();me(tn,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case Nu.TIMEOUT:me(tn,`RPC '${e}' ${s} timed out`),l(new ae(H.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const g=u.getStatus();if(me(tn,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v==null?void 0:v.error;if(R&&R.status&&R.message){const O=function(F){const P=F.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(P)>=0?P:H.UNKNOWN}(R.status);l(new ae(O,R.message))}else l(new ae(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ae(H.UNAVAILABLE,"Connection failed."));break;default:Pe()}}finally{me(tn,`RPC '${e}' ${s} completed.`)}});const f=JSON.stringify(i);me(tn,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",f,r,15)})}Bo(e,n,r){const i=sh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ME(),l=LE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");me(tn,`Creating RPC '${e}' stream ${i}: ${p}`,u);const g=o.createWebChannel(p,u);let v=!1,R=!1;const O=new CN({Io:F=>{R?me(tn,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(v||(me(tn,`Opening RPC '${e}' stream ${i} transport.`),g.open(),v=!0),me(tn,`RPC '${e}' stream ${i} sending:`,F),g.send(F))},To:()=>g.close()}),L=(F,P,I)=>{F.listen(P,N=>{try{I(N)}catch($){setTimeout(()=>{throw $},0)}})};return L(g,da.EventType.OPEN,()=>{R||(me(tn,`RPC '${e}' stream ${i} transport opened.`),O.yo())}),L(g,da.EventType.CLOSE,()=>{R||(R=!0,me(tn,`RPC '${e}' stream ${i} transport closed`),O.So())}),L(g,da.EventType.ERROR,F=>{R||(R=!0,go(tn,`RPC '${e}' stream ${i} transport errored:`,F),O.So(new ae(H.UNAVAILABLE,"The operation could not be completed")))}),L(g,da.EventType.MESSAGE,F=>{var P;if(!R){const I=F.data[0];Ze(!!I);const N=I,$=N.error||((P=N[0])===null||P===void 0?void 0:P.error);if($){me(tn,`RPC '${e}' stream ${i} received error:`,$);const Z=$.status;let ee=function(S){const C=xt[S];if(C!==void 0)return uT(C)}(Z),x=$.message;ee===void 0&&(ee=H.INTERNAL,x="Unknown error status: "+Z+" with message "+$.message),R=!0,O.So(new ae(ee,x)),g.close()}else me(tn,`RPC '${e}' stream ${i} received:`,I),O.bo(I)}}),L(l,VE.STAT_EVENT,F=>{F.stat===vd.PROXY?me(tn,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===vd.NOPROXY&&me(tn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.wo()},0),O}}function oh(){return typeof document<"u"?document:null}/**
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
 */function sf(t){return new j2(t,!0)}/**
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
 */class ET{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&me("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class TT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ET(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Br(n.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new ae(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return me("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(me("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NN extends TT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=$2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Le.min():o.readTime?mr(o.readTime):Le.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Id(u)?{documents:q2(s,u)}:{query:H2(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hT(s,o.resumeToken);const f=Ad(s,o.expectedCount);f!==null&&(l.expectedCount=f)}else if(o.snapshotVersion.compareTo(Le.min())>0){l.readTime=vc(s,o.snapshotVersion.toTimestamp());const f=Ad(s,o.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const r=Q2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.a_(n)}}class bN extends TT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ze(!!e.streamToken),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=W2(e.writeResults,e.commitTime),r=mr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Pd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>K2(this.serializer,r))};this.a_(n)}}/**
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
 */class ON extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new ae(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,xd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ae(H.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,xd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae(H.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class DN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Br(n),this.D_=!1):me("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class VN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Es(this)&&(me("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=Me(u);f.L_.add(4),await Al(f),f.q_.set("Unknown"),f.L_.delete(4),await of(f)}(this))})}),this.q_=new DN(r,i)}}async function of(t){if(Es(t))for(const e of t.B_)await e(!0)}async function Al(t){for(const e of t.B_)await e(!1)}function IT(t,e){const n=Me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),hm(n)?fm(n):Do(n).r_()&&cm(n,e))}function um(t,e){const n=Me(t),r=Do(n);n.N_.delete(e),r.r_()&&ST(n,e),n.N_.size===0&&(r.r_()?r.o_():Es(n)&&n.q_.set("Unknown"))}function cm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Do(t).A_(e)}function ST(t,e){t.Q_.xe(e),Do(t).R_(e)}function fm(t){t.Q_=new L2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Do(t).start(),t.q_.v_()}function hm(t){return Es(t)&&!Do(t).n_()&&t.N_.size>0}function Es(t){return Me(t).L_.size===0}function AT(t){t.Q_=void 0}async function LN(t){t.q_.set("Online")}async function MN(t){t.N_.forEach((e,n)=>{cm(t,e)})}async function UN(t,e){AT(t),hm(t)?(t.q_.M_(e),fm(t)):t.q_.set("Unknown")}async function FN(t,e,n){if(t.q_.set("Online"),e instanceof fT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){me("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wc(t,r)}else if(e instanceof Du?t.Q_.Ke(e):e instanceof cT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Le.min()))try{const r=await wT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(f);p&&s.N_.set(f,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,f)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(Gt.EMPTY_BYTE_STRING,p.snapshotVersion)),ST(s,u);const g=new mi(p.target,u,f,p.sequenceNumber);cm(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){me("RemoteStore","Failed to raise snapshot:",r),await wc(t,r)}}async function wc(t,e,n){if(!Tl(e))throw e;t.L_.add(1),await Al(t),t.q_.set("Offline"),n||(n=()=>wT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{me("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await of(t)})}function xT(t,e){return e().catch(n=>wc(t,n,e))}async function af(t){const e=Me(t),n=Ni(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;jN(e);)try{const i=await IN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,BN(e,i)}catch(i){await wc(e,i)}RT(e)&&PT(e)}function jN(t){return Es(t)&&t.O_.length<10}function BN(t,e){t.O_.push(e);const n=Ni(t);n.r_()&&n.V_&&n.m_(e.mutations)}function RT(t){return Es(t)&&!Ni(t).n_()&&t.O_.length>0}function PT(t){Ni(t).start()}async function zN(t){Ni(t).p_()}async function $N(t){const e=Ni(t);for(const n of t.O_)e.m_(n.mutations)}async function KN(t,e,n){const r=t.O_.shift(),i=rm.from(r,e,n);await xT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await af(t)}async function WN(t,e){e&&Ni(t).V_&&await async function(r,i){if(function(o){return O2(o)&&o!==H.ABORTED}(i.code)){const s=r.O_.shift();Ni(r).s_(),await xT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await af(r)}}(t,e),RT(t)&&PT(t)}async function M_(t,e){const n=Me(t);n.asyncQueue.verifyOperationInProgress(),me("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.L_.add(3),await Al(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await of(n)}async function qN(t,e){const n=Me(t);e?(n.L_.delete(2),await of(n)):e||(n.L_.add(2),await Al(n),n.q_.set("Unknown"))}function Do(t){return t.K_||(t.K_=function(n,r,i){const s=Me(n);return s.w_(),new NN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:LN.bind(null,t),Ro:MN.bind(null,t),mo:UN.bind(null,t),d_:FN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),hm(t)?fm(t):t.q_.set("Unknown")):(await t.K_.stop(),AT(t))})),t.K_}function Ni(t){return t.U_||(t.U_=function(n,r,i){const s=Me(n);return s.w_(),new bN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:zN.bind(null,t),mo:WN.bind(null,t),f_:$N.bind(null,t),g_:KN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await af(t)):(await t.U_.stop(),t.O_.length>0&&(me("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class dm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new dm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pm(t,e){if(Br("AsyncQueue",`${e}: ${t}`),Tl(t))return new ae(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class so{constructor(e){this.comparator=e?(n,r)=>e(n,r)||_e.comparator(n.key,r.key):(n,r)=>_e.comparator(n.key,r.key),this.keyedMap=pa(),this.sortedSet=new gt(this.comparator)}static emptySet(e){return new so(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new so;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class U_{constructor(){this.W_=new gt(_e.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Pe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class To{constructor(e,n,r,i,s,o,l,u,f){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new To(e,n,so.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class HN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class GN{constructor(){this.queries=F_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Me(n),s=i.queries;i.queries=F_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new ae(H.ABORTED,"Firestore shutting down"))}}function F_(){return new Oo(t=>YE(t),Jc)}async function mm(t,e){const n=Me(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new HN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pm(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&ym(n)}async function gm(t,e){const n=Me(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function QN(t,e){const n=Me(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&ym(n)}function YN(t,e,n){const r=Me(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function ym(t){t.Y_.forEach(e=>{e.next()})}var kd,j_;(j_=kd||(kd={})).ea="default",j_.Cache="cache";class _m{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new To(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==kd.Cache}}/**
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
 */class CT{constructor(e){this.key=e}}class kT{constructor(e){this.key=e}}class XN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=$e(),this.mutatedKeys=$e(),this.Aa=XE(e),this.Ra=new so(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new U_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const v=i.get(p),R=Zc(this.query,g)?g:null,O=!!v&&this.mutatedKeys.has(v.key),L=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let F=!1;v&&R?v.data.isEqual(R.data)?O!==L&&(r.track({type:3,doc:R}),F=!0):this.ga(v,R)||(r.track({type:2,doc:R}),F=!0,(u&&this.Aa(R,u)>0||f&&this.Aa(R,f)<0)&&(l=!0)):!v&&R?(r.track({type:0,doc:R}),F=!0):v&&!R&&(r.track({type:1,doc:v}),F=!0,(u||f)&&(l=!0)),F&&(R?(o=o.add(R),s=L?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,g)=>function(R,O){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Pe()}};return L(R)-L(O)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,f=u!==this.Ea;return this.Ea=u,o.length!==0||f?{snapshot:new To(this.query,e.Ra,s,o,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new U_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=$e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new kT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new CT(r))}),n}ba(e){this.Ta=e.Ts,this.da=$e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return To.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class JN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZN{constructor(e){this.key=e,this.va=!1}}class eb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Oo(l=>YE(l),Jc),this.Ma=new Map,this.xa=new Set,this.Oa=new gt(_e.comparator),this.Na=new Map,this.La=new om,this.Ba={},this.ka=new Map,this.qa=Eo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function tb(t,e,n=!0){const r=LT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await NT(r,e,n,!0),i}async function nb(t,e){const n=LT(t);await NT(n,e,!0,!1)}async function NT(t,e,n,r){const i=await SN(t.localStore,pr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await rb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&IT(t.remoteStore,i),l}async function rb(t,e,n,r,i){t.Ka=(g,v,R)=>async function(L,F,P,I){let N=F.view.ma(P);N.ns&&(N=await D_(L.localStore,F.query,!1).then(({documents:x})=>F.view.ma(x,N)));const $=I&&I.targetChanges.get(F.targetId),Z=I&&I.targetMismatches.get(F.targetId)!=null,ee=F.view.applyChanges(N,L.isPrimaryClient,$,Z);return z_(L,F.targetId,ee.wa),ee.snapshot}(t,g,v,R);const s=await D_(t.localStore,e,!0),o=new XN(e,s.Ts),l=o.ma(s.documents),u=Sl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),f=o.applyChanges(l,t.isPrimaryClient,u);z_(t,n,f.wa);const p=new JN(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),f.snapshot}async function ib(t,e,n){const r=Me(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Jc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&um(r.remoteStore,i.targetId),Nd(r,i.targetId)}).catch(El)):(Nd(r,i.targetId),await Cd(r.localStore,i.targetId,!0))}async function sb(t,e){const n=Me(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),um(n.remoteStore,r.targetId))}async function ob(t,e,n){const r=db(t);try{const i=await function(o,l){const u=Me(o),f=bt.now(),p=l.reduce((R,O)=>R.add(O.key),$e());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let O=zr(),L=$e();return u.cs.getEntries(R,p).next(F=>{O=F,O.forEach((P,I)=>{I.isValidDocument()||(L=L.add(P))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,O)).next(F=>{g=F;const P=[];for(const I of l){const N=P2(I,g.get(I.key).overlayedDocument);N!=null&&P.push(new Fi(I.key,N,zE(N.value.mapValue),dn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,f,P,l)}).next(F=>{v=F;const P=F.applyToLocalDocumentSet(g,L);return u.documentOverlayCache.saveOverlays(R,F.batchId,P)})}).then(()=>({batchId:v.batchId,changes:ZE(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let f=o.Ba[o.currentUser.toKey()];f||(f=new gt(Ye)),f=f.insert(l,u),o.Ba[o.currentUser.toKey()]=f}(r,i.batchId,n),await xl(r,i.changes),await af(r.remoteStore)}catch(i){const s=pm(i,"Failed to persist write");n.reject(s)}}async function bT(t,e){const n=Me(t);try{const r=await EN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Ze(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Ze(o.va):i.removedDocuments.size>0&&(Ze(o.va),o.va=!1))}),await xl(n,r,e)}catch(r){await El(r)}}function B_(t,e,n){const r=Me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Me(o);u.onlineState=l;let f=!1;u.queries.forEach((p,g)=>{for(const v of g.j_)v.Z_(l)&&(f=!0)}),f&&ym(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ab(t,e,n){const r=Me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new gt(_e.comparator);o=o.insert(s,sn.newNoDocument(s,Le.min()));const l=$e().add(s),u=new rf(Le.min(),new Map,new gt(Ye),o,l);await bT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),vm(r)}else await Cd(r.localStore,e,!1).then(()=>Nd(r,e,n)).catch(El)}async function lb(t,e){const n=Me(t),r=e.batch.batchId;try{const i=await wN(n.localStore,e);DT(n,r,null),OT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xl(n,i)}catch(i){await El(i)}}async function ub(t,e,n){const r=Me(t);try{const i=await function(o,l){const u=Me(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return u.mutationQueue.lookupMutationBatch(f,l).next(g=>(Ze(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(f,g))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>u.localDocuments.getDocuments(f,p))})}(r.localStore,e);DT(r,e,n),OT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xl(r,i)}catch(i){await El(i)}}function OT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function DT(t,e,n){const r=Me(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||VT(t,r)})}function VT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(um(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),vm(t))}function z_(t,e,n){for(const r of n)r instanceof CT?(t.La.addReference(r.key,e),cb(t,r)):r instanceof kT?(me("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||VT(t,r.key)):Pe()}function cb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(me("SyncEngine","New document in limbo: "+n),t.xa.add(r),vm(t))}function vm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new _e(ut.fromString(e)),r=t.qa.next();t.Na.set(r,new ZN(n)),t.Oa=t.Oa.insert(n,r),IT(t.remoteStore,new mi(pr(Xc(n.path)),r,"TargetPurposeLimboResolution",Yp.oe))}}async function xl(t,e,n){const r=Me(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(f=>{var p;if((f||n)&&r.isPrimaryClient){const g=f?!f.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(f){i.push(f);const g=lm.Wi(u.targetId,f);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,f){const p=Me(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>Q.forEach(f,v=>Q.forEach(v.$i,R=>p.persistence.referenceDelegate.addReference(g,v.targetId,R)).next(()=>Q.forEach(v.Ui,R=>p.persistence.referenceDelegate.removeReference(g,v.targetId,R)))))}catch(g){if(!Tl(g))throw g;me("LocalStore","Failed to update sequence numbers: "+g)}for(const g of f){const v=g.targetId;if(!g.fromCache){const R=p.os.get(v),O=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(O);p.os=p.os.insert(v,L)}}}(r.localStore,s))}async function fb(t,e){const n=Me(t);if(!n.currentUser.isEqual(e)){me("SyncEngine","User change. New user:",e.toKey());const r=await vT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new ae(H.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xl(n,r.hs)}}function hb(t,e){const n=Me(t),r=n.Na.get(e);if(r&&r.va)return $e().add(r.key);{let i=$e();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function LT(t){const e=Me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ab.bind(null,e),e.Ca.d_=QN.bind(null,e.eventManager),e.Ca.$a=YN.bind(null,e.eventManager),e}function db(t){const e=Me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ub.bind(null,e),e}class Ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sf(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return vN(this.persistence,new yN,e.initialUser,this.serializer)}Ga(e){return new pN(am.Zr,this.serializer)}Wa(e){return new xN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ec.provider={build:()=>new Ec};class bd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>B_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fb.bind(null,this.syncEngine),await qN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GN}()}createDatastore(e){const n=sf(e.databaseInfo.databaseId),r=function(s){return new kN(s)}(e.databaseInfo);return function(s,o,l,u){return new ON(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new VN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>B_(this.syncEngine,n,0),function(){return L_.D()?new L_:new RN}())}createSyncEngine(e,n){return function(i,s,o,l,u,f,p){const g=new eb(i,s,o,l,u,f);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Me(i);me("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Al(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bd.provider={build:()=>new bd};/**
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
 */class wm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class pb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nn.UNAUTHENTICATED,this.clientId=FE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{me("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(me("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ah(t,e){t.asyncQueue.verifyOperationInProgress(),me("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mb(t);me("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>M_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>M_(e.remoteStore,i)),t._onlineComponents=e}async function mb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){me("FirestoreClient","Using user provided OfflineComponentProvider");try{await ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;go("Error using user provided cache. Falling back to memory cache: "+n),await ah(t,new Ec)}}else me("FirestoreClient","Using default OfflineComponentProvider"),await ah(t,new Ec);return t._offlineComponents}async function MT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(me("FirestoreClient","Using user provided OnlineComponentProvider"),await $_(t,t._uninitializedComponentsProvider._online)):(me("FirestoreClient","Using default OnlineComponentProvider"),await $_(t,new bd))),t._onlineComponents}function gb(t){return MT(t).then(e=>e.syncEngine)}async function Tc(t){const e=await MT(t),n=e.eventManager;return n.onListen=tb.bind(null,e.syncEngine),n.onUnlisten=ib.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=sb.bind(null,e.syncEngine),n}function yb(t,e,n={}){const r=new Dr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,f){const p=new wm({next:v=>{p.Za(),o.enqueueAndForget(()=>gm(s,g));const R=v.docs.has(l);!R&&v.fromCache?f.reject(new ae(H.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&v.fromCache&&u&&u.source==="server"?f.reject(new ae(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(v)},error:v=>f.reject(v)}),g=new _m(Xc(l.path),p,{includeMetadataChanges:!0,_a:!0});return mm(s,g)}(await Tc(t),t.asyncQueue,e,n,r)),r.promise}function _b(t,e,n={}){const r=new Dr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,f){const p=new wm({next:v=>{p.Za(),o.enqueueAndForget(()=>gm(s,g)),v.fromCache&&u.source==="server"?f.reject(new ae(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(v)},error:v=>f.reject(v)}),g=new _m(l,p,{includeMetadataChanges:!0,_a:!0});return mm(s,g)}(await Tc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function UT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const K_=new Map;/**
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
 */function FT(t,e,n){if(!n)throw new ae(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vb(t,e,n,r){if(e===!0&&r===!0)throw new ae(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function W_(t){if(!_e.isDocumentKey(t))throw new ae(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q_(t){if(_e.isDocumentKey(t))throw new ae(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Pe()}function pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lf(t);throw new ae(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function wb(t,e){if(e<=0)throw new ae(H.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class H_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new H_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new H_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Mk;switch(r.type){case"firstParty":return new Bk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=K_.get(n);r&&(me("ComponentProvider","Removing Datastore"),K_.delete(n),r.terminate())}(this),Promise.resolve()}}function Eb(t,e,n,r={}){var i;const s=(t=pn(t,uf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=nn.MOCK_USER;else{l=nR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new ae(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nn(f)}t._authCredentials=new Uk(new UE(l,u))}}/**
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
 */class Kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kr(this.firestore,e,this._query)}}class on{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class xi extends Kr{constructor(e,n,r){super(e,n,Xc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new _e(e))}withConverter(e){return new xi(this.firestore,e,this._path)}}function KO(t,e,...n){if(t=tt(t),FT("collection","path",e),t instanceof uf){const r=ut.fromString(e,...n);return q_(r),new xi(t,null,r)}{if(!(t instanceof on||t instanceof xi))throw new ae(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ut.fromString(e,...n));return q_(r),new xi(t.firestore,null,r)}}function fi(t,e,...n){if(t=tt(t),arguments.length===1&&(e=FE.newId()),FT("doc","path",e),t instanceof uf){const r=ut.fromString(e,...n);return W_(r),new on(t,null,new _e(r))}{if(!(t instanceof on||t instanceof xi))throw new ae(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ut.fromString(e,...n));return W_(r),new on(t.firestore,t instanceof xi?t.converter:null,new _e(r))}}/**
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
 */class G_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ET(this,"async_queue_retry"),this.Vu=()=>{const r=oh();r&&me("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=oh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Dr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Tl(e))throw e;me("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Br("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=dm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Pe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Q_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class yr extends uf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new G_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new G_(e),this._firestoreClient=void 0,await e}}}function Tb(t,e){const n=typeof t=="object"?t:qc(),r=typeof t=="string"?t:"(default)",i=_s(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Bw("firestore");s&&Eb(i,...s)}return i}function Rl(t){if(t._terminated)throw new ae(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Ib(t),t._firestoreClient}function Ib(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,f,p){return new e2(l,u,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,UT(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new pb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Io(Gt.fromBase64String(e))}catch(n){throw new ae(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Io(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cl{constructor(e){this._methodName=e}}/**
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
 */class Em{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ye(this._lat,e._lat)||Ye(this._long,e._long)}}/**
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
 */class Tm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const Sb=/^__.*__$/;class Ab{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Il(e,this.data,n,this.fieldTransforms)}}class jT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function BT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pe()}}class cf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ic(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(BT(this.Cu)&&Sb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class xb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sf(e)}Qu(e,n,r,i=!1){return new cf({Cu:e,methodName:n,qu:r,path:Kt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kl(t){const e=t._freezeSettings(),n=sf(t._databaseId);return new xb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Im(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);xm("Data must be an object, but it was:",o,r);const l=KT(r,o);let u,f;if(s.merge)u=new Pn(o.fieldMask),f=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const v=Od(e,g,n);if(!o.contains(v))throw new ae(H.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);qT(p,v)||p.push(v)}u=new Pn(p),f=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,f=o.fieldTransforms;return new Ab(new _n(l),u,f)}class ff extends Cl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ff}}function Rb(t,e,n){return new cf({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sm extends Cl{_toFieldTransform(e){return new oT(e.path,new sl)}isEqual(e){return e instanceof Sm}}class Am extends Cl{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=Rb(this,e,!0),r=this.Ku.map(s=>Vo(s,n)),i=new wo(r);return new oT(e.path,i)}isEqual(e){return e instanceof Am&&Ya(this.Ku,e.Ku)}}function zT(t,e,n,r){const i=t.Qu(1,e,n);xm("Data must be an object, but it was:",i,r);const s=[],o=_n.empty();ws(r,(u,f)=>{const p=Rm(e,u,n);f=tt(f);const g=i.Nu(p);if(f instanceof ff)s.push(p);else{const v=Vo(f,g);v!=null&&(s.push(p),o.set(p,v))}});const l=new Pn(s);return new jT(o,l,i.fieldTransforms)}function $T(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Od(e,r,n)],u=[i];if(s.length%2!=0)throw new ae(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)l.push(Od(e,s[v])),u.push(s[v+1]);const f=[],p=_n.empty();for(let v=l.length-1;v>=0;--v)if(!qT(f,l[v])){const R=l[v];let O=u[v];O=tt(O);const L=o.Nu(R);if(O instanceof ff)f.push(R);else{const F=Vo(O,L);F!=null&&(f.push(R),p.set(R,F))}}const g=new Pn(f);return new jT(p,g,o.fieldTransforms)}function Pb(t,e,n,r=!1){return Vo(n,t.Qu(r?4:3,e))}function Vo(t,e){if(WT(t=tt(t)))return xm("Unsupported field value:",e,t),KT(t,e);if(t instanceof Cl)return function(r,i){if(!BT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Vo(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return T2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=bt.fromDate(r);return{timestampValue:vc(i.serializer,s)}}if(r instanceof bt){const s=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vc(i.serializer,s)}}if(r instanceof Em)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Io)return{bytesValue:hT(i.serializer,r._byteString)};if(r instanceof on){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Tm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return nm(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${lf(r)}`)}(t,e)}function KT(t,e){const n={};return jE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,i)=>{const s=Vo(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof bt||t instanceof Em||t instanceof Io||t instanceof on||t instanceof Cl||t instanceof Tm)}function xm(t,e,n){if(!WT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=lf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Od(t,e,n){if((e=tt(e))instanceof Pl)return e._internalPath;if(typeof e=="string")return Rm(t,e);throw Ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const Cb=new RegExp("[~\\*/\\[\\]]");function Rm(t,e,n){if(e.search(Cb)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pl(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ic(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ae(H.INVALID_ARGUMENT,l+t+u)}function qT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class HT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kb extends HT{data(){return super.data()}}function hf(t,e){return typeof e=="string"?Rm(t,e):e instanceof Pl?e._internalPath:e._delegate._internalPath}/**
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
 */function GT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pm{}class Cm extends Pm{}function WO(t,e,...n){let r=[];e instanceof Pm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof km).length,l=s.filter(u=>u instanceof df).length;if(o>1||o>0&&l>0)throw new ae(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class df extends Cm{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new df(e,n,r)}_apply(e){const n=this._parse(e);return QT(e._query,n),new Kr(e.firestore,e.converter,Sd(e._query,n))}_parse(e){const n=kl(e.firestore);return function(s,o,l,u,f,p,g){let v;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new ae(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){X_(g,p);const R=[];for(const O of g)R.push(Y_(u,s,O));v={arrayValue:{values:R}}}else v=Y_(u,s,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||X_(g,p),v=Pb(l,o,g,p==="in"||p==="not-in");return Pt.create(f,p,v)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qO(t,e,n){const r=e,i=hf("where",t);return df._create(i,r,n)}class km extends Pm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new km(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:er.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)QT(o,u),o=Sd(o,u)}(e._query,n),new Kr(e.firestore,e.converter,Sd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nm extends Cm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Nm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new ae(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new ae(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new il(s,o)}(e._query,this._field,this._direction);return new Kr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new bo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function HO(t,e="asc"){const n=e,r=hf("orderBy",t);return Nm._create(r,n)}class bm extends Cm{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new bm(e,n,r)}_apply(e){return new Kr(e.firestore,e.converter,yc(e._query,this._limit,this._limitType))}}function GO(t){return wb("limit",t),bm._create("limit",t,"F")}function Y_(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new ae(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!QE(e)&&n.indexOf("/")!==-1)throw new ae(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ut.fromString(n));if(!_e.isDocumentKey(r))throw new ae(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return y_(t,new _e(r))}if(n instanceof on)return y_(t,n._key);throw new ae(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lf(n)}.`)}function X_(t,e){if(!Array.isArray(t)||t.length===0)throw new ae(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ae(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Nb{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ws(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>It(o.doubleValue));return new Tm(s)}convertGeoPoint(e){return new Em(It(e.latitude),It(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tl(e));default:return null}}convertTimestamp(e){const n=ki(e);return new bt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ut.fromString(e);Ze(_T(r));const i=new nl(r.get(1),r.get(3)),s=new _e(r.popFirst(5));return i.isEqual(n)||Br(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Om(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ga{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class YT extends HT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vu extends YT{data(e={}){return super.data(e)}}class XT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ga(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vu(this._firestore,this._userDataWriter,r.key,r,new ga(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Vu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ga(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Vu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ga(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return l.type!==0&&(f=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:bb(l.type),doc:u,oldIndex:f,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Pe()}}/**
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
 */function JT(t){t=pn(t,on);const e=pn(t.firestore,yr);return yb(Rl(e),t._key).then(n=>ZT(e,t,n))}class Dm extends Nb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Io(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,n)}}function QO(t){t=pn(t,Kr);const e=pn(t.firestore,yr),n=Rl(e),r=new Dm(e);return GT(t._query),_b(n,t._query).then(i=>new XT(e,r,t,i))}function Ob(t,e,n){t=pn(t,on);const r=pn(t.firestore,yr),i=Om(t.converter,e,n);return Nl(r,[Im(kl(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dn.none())])}function Lu(t,e,n,...r){t=pn(t,on);const i=pn(t.firestore,yr),s=kl(i);let o;return o=typeof(e=tt(e))=="string"||e instanceof Pl?$T(s,"updateDoc",t._key,e,n,r):zT(s,"updateDoc",t._key,e),Nl(i,[o.toMutation(t._key,dn.exists(!0))])}function YO(t){return Nl(pn(t.firestore,yr),[new nf(t._key,dn.none())])}function XO(t,e){const n=pn(t.firestore,yr),r=fi(t),i=Om(t.converter,e);return Nl(n,[Im(kl(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function JO(t,...e){var n,r,i;t=tt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Q_(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Q_(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,f,p;if(t instanceof on)f=pn(t.firestore,yr),p=Xc(t._key.path),u={next:g=>{e[o]&&e[o](ZT(f,t,g))},error:e[o+1],complete:e[o+2]};else{const g=pn(t,Kr);f=pn(g.firestore,yr),p=g._query;const v=new Dm(f);u={next:R=>{e[o]&&e[o](new XT(f,v,g,R))},error:e[o+1],complete:e[o+2]},GT(t._query)}return function(v,R,O,L){const F=new wm(L),P=new _m(R,F,O);return v.asyncQueue.enqueueAndForget(async()=>mm(await Tc(v),P)),()=>{F.Za(),v.asyncQueue.enqueueAndForget(async()=>gm(await Tc(v),P))}}(Rl(f),p,l,u)}function Nl(t,e){return function(r,i){const s=new Dr;return r.asyncQueue.enqueueAndForget(async()=>ob(await gb(r),i,s)),s.promise}(Rl(t),e)}function ZT(t,e,n){const r=n.docs.get(e._key),i=new Dm(t);return new YT(t,i,e._key,r,new ga(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class Db{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=kl(e)}set(e,n,r){this._verifyNotCommitted();const i=lh(e,this._firestore),s=Om(i.converter,n,r),o=Im(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,dn.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=lh(e,this._firestore);let o;return o=typeof(n=tt(n))=="string"||n instanceof Pl?$T(this._dataReader,"WriteBatch.update",s._key,n,r,i):zT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,dn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=lh(e,this._firestore);return this._mutations=this._mutations.concat(new nf(n._key,dn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ae(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lh(t,e){if((t=tt(t)).firestore!==e)throw new ae(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function du(){return new Sm("serverTimestamp")}function ZO(...t){return new Am("arrayUnion",t)}/**
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
 */function eD(t){return Rl(t=pn(t,yr)),new Db(t,e=>Nl(t,e))}(function(e,n=!0){(function(i){No=i})(Co),Jn(new Bn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new yr(new Fk(r.getProvider("auth-internal")),new $k(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new ae(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nl(f.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),In(h_,"4.7.3",e),In(h_,"4.7.3","esm2017")})();var Vb="firebase",Lb="10.14.1";/**
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
 */In(Vb,Lb,"app");const e1="@firebase/installations",Vm="0.6.9";/**
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
 */const t1=1e4,n1=`w:${Vm}`,r1="FIS_v2",Mb="https://firebaseinstallations.googleapis.com/v1",Ub=60*60*1e3,Fb="installations",jb="Installations";/**
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
 */const Bb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ds=new ys(Fb,jb,Bb);function i1(t){return t instanceof tr&&t.code.includes("request-failed")}/**
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
 */function s1({projectId:t}){return`${Mb}/projects/${t}/installations`}function o1(t){return{token:t.token,requestStatus:2,expiresIn:$b(t.expiresIn),creationTime:Date.now()}}async function a1(t,e){const r=(await e.json()).error;return ds.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function l1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zb(t,{refreshToken:e}){const n=l1(t);return n.append("Authorization",Kb(e)),n}async function u1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $b(t){return Number(t.replace("s","000"))}function Kb(t){return`${r1} ${t}`}/**
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
 */async function Wb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=s1(t),i=l1(t),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const o={fid:n,authVersion:r1,appId:t.appId,sdkVersion:n1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await u1(()=>fetch(r,l));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:o1(f.authToken)}}else throw await a1("Create Installation",u)}/**
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
 */function c1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function qb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Hb=/^[cdef][\w-]{21}$/,Dd="";function Gb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Qb(t);return Hb.test(n)?n:Dd}catch{return Dd}}function Qb(t){return qb(t).substr(0,22)}/**
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
 */function pf(t){return`${t.appName}!${t.appId}`}/**
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
 */const f1=new Map;function h1(t,e){const n=pf(t);d1(n,e),Yb(n,e)}function d1(t,e){const n=f1.get(t);if(n)for(const r of n)r(e)}function Yb(t,e){const n=Xb();n&&n.postMessage({key:t,fid:e}),Jb()}let Zi=null;function Xb(){return!Zi&&"BroadcastChannel"in self&&(Zi=new BroadcastChannel("[Firebase] FID Change"),Zi.onmessage=t=>{d1(t.data.key,t.data.fid)}),Zi}function Jb(){f1.size===0&&Zi&&(Zi.close(),Zi=null)}/**
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
 */const Zb="firebase-installations-database",e6=1,ps="firebase-installations-store";let uh=null;function Lm(){return uh||(uh=gl(Zb,e6,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ps)}}})),uh}async function Sc(t,e){const n=pf(t),i=(await Lm()).transaction(ps,"readwrite"),s=i.objectStore(ps),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&h1(t,e.fid),e}async function p1(t){const e=pf(t),r=(await Lm()).transaction(ps,"readwrite");await r.objectStore(ps).delete(e),await r.done}async function mf(t,e){const n=pf(t),i=(await Lm()).transaction(ps,"readwrite"),s=i.objectStore(ps),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&h1(t,l.fid),l}/**
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
 */async function Mm(t){let e;const n=await mf(t.appConfig,r=>{const i=t6(r),s=n6(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Dd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function t6(t){const e=t||{fid:Gb(),registrationStatus:0};return m1(e)}function n6(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ds.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=r6(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:i6(t)}:{installationEntry:e}}async function r6(t,e){try{const n=await Wb(t,e);return Sc(t.appConfig,n)}catch(n){throw i1(n)&&n.customData.serverCode===409?await p1(t.appConfig):await Sc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function i6(t){let e=await J_(t.appConfig);for(;e.registrationStatus===1;)await c1(100),e=await J_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Mm(t);return r||n}return e}function J_(t){return mf(t,e=>{if(!e)throw ds.create("installation-not-found");return m1(e)})}function m1(t){return s6(t)?{fid:t.fid,registrationStatus:0}:t}function s6(t){return t.registrationStatus===1&&t.registrationTime+t1<Date.now()}/**
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
 */async function o6({appConfig:t,heartbeatServiceProvider:e},n){const r=a6(t,n),i=zb(t,n),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const o={installation:{sdkVersion:n1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await u1(()=>fetch(r,l));if(u.ok){const f=await u.json();return o1(f)}else throw await a1("Generate Auth Token",u)}function a6(t,{fid:e}){return`${s1(t)}/${e}/authTokens:generate`}/**
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
 */async function Um(t,e=!1){let n;const r=await mf(t.appConfig,s=>{if(!g1(s))throw ds.create("not-registered");const o=s.authToken;if(!e&&c6(o))return s;if(o.requestStatus===1)return n=l6(t,e),s;{if(!navigator.onLine)throw ds.create("app-offline");const l=h6(s);return n=u6(t,l),l}});return n?await n:r.authToken}async function l6(t,e){let n=await Z_(t.appConfig);for(;n.authToken.requestStatus===1;)await c1(100),n=await Z_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Um(t,e):r}function Z_(t){return mf(t,e=>{if(!g1(e))throw ds.create("not-registered");const n=e.authToken;return d6(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function u6(t,e){try{const n=await o6(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Sc(t.appConfig,r),n}catch(n){if(i1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await p1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Sc(t.appConfig,r)}throw n}}function g1(t){return t!==void 0&&t.registrationStatus===2}function c6(t){return t.requestStatus===2&&!f6(t)}function f6(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ub}function h6(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function d6(t){return t.requestStatus===1&&t.requestTime+t1<Date.now()}/**
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
 */async function p6(t){const e=t,{installationEntry:n,registrationPromise:r}=await Mm(e);return r?r.catch(console.error):Um(e).catch(console.error),n.fid}/**
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
 */async function m6(t,e=!1){const n=t;return await g6(n),(await Um(n,e)).token}async function g6(t){const{registrationPromise:e}=await Mm(t);e&&await e}/**
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
 */function y6(t){if(!t||!t.options)throw ch("App Configuration");if(!t.name)throw ch("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ch(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ch(t){return ds.create("missing-app-config-values",{valueName:t})}/**
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
 */const y1="installations",_6="installations-internal",v6=t=>{const e=t.getProvider("app").getImmediate(),n=y6(e),r=_s(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},w6=t=>{const e=t.getProvider("app").getImmediate(),n=_s(e,y1).getImmediate();return{getId:()=>p6(n),getToken:i=>m6(n,i)}};function E6(){Jn(new Bn(y1,v6,"PUBLIC")),Jn(new Bn(_6,w6,"PRIVATE"))}E6();In(e1,Vm);In(e1,Vm,"esm2017");/**
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
 */const T6="/firebase-messaging-sw.js",I6="/firebase-cloud-messaging-push-scope",_1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",S6="https://fcmregistrations.googleapis.com/v1",v1="google.c.a.c_id",A6="google.c.a.c_l",x6="google.c.a.ts",R6="google.c.a.e";var ev;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ev||(ev={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var al;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(al||(al={}));/**
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
 */function Sr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function P6(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const fh="fcm_token_details_db",C6=5,tv="fcm_token_object_Store";async function k6(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(fh))return null;let e=null;return(await gl(fh,C6,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(tv))return;const u=o.objectStore(tv),f=await u.index("fcmSenderId").get(t);if(await u.clear(),!!f){if(i===2){const p=f;if(!p.auth||!p.p256dh||!p.endpoint)return;e={token:p.fcmToken,createTime:(l=p.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:Sr(p.vapidKey)}}}else if(i===3){const p=f;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:Sr(p.auth),p256dh:Sr(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:Sr(p.vapidKey)}}}else if(i===4){const p=f;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:Sr(p.auth),p256dh:Sr(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:Sr(p.vapidKey)}}}}}})).close(),await Zf(fh),await Zf("fcm_vapid_details_db"),await Zf("undefined"),N6(e)?e:null}function N6(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const b6="firebase-messaging-database",O6=1,ll="firebase-messaging-store";let hh=null;function w1(){return hh||(hh=gl(b6,O6,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ll)}}})),hh}async function D6(t){const e=E1(t),r=await(await w1()).transaction(ll).objectStore(ll).get(e);if(r)return r;{const i=await k6(t.appConfig.senderId);if(i)return await Fm(t,i),i}}async function Fm(t,e){const n=E1(t),i=(await w1()).transaction(ll,"readwrite");return await i.objectStore(ll).put(e,n),await i.done,e}function E1({appConfig:t}){return t.appId}/**
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
 */const V6={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},an=new ys("messaging","Messaging",V6);/**
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
 */async function L6(t,e){const n=await Bm(t),r=T1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(jm(t.appConfig),i)).json()}catch(o){throw an.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw an.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw an.create("token-subscribe-no-token");return s.token}async function M6(t,e){const n=await Bm(t),r=T1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${jm(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw an.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw an.create("token-update-failed",{errorInfo:o})}if(!s.token)throw an.create("token-update-no-token");return s.token}async function U6(t,e){const r={method:"DELETE",headers:await Bm(t)};try{const s=await(await fetch(`${jm(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw an.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw an.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function jm({projectId:t}){return`${S6}/projects/${t}/registrations`}async function Bm({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function T1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==_1&&(i.web.applicationPubKey=r),i}/**
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
 */const F6=7*24*60*60*1e3;async function j6(t){const e=await z6(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Sr(e.getKey("auth")),p256dh:Sr(e.getKey("p256dh"))},r=await D6(t.firebaseDependencies);if(r){if($6(r.subscriptionOptions,n))return Date.now()>=r.createTime+F6?B6(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await U6(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return nv(t.firebaseDependencies,n)}else return nv(t.firebaseDependencies,n)}async function B6(t,e){try{const n=await M6(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Fm(t.firebaseDependencies,r),n}catch(n){throw n}}async function nv(t,e){const r={token:await L6(t,e),createTime:Date.now(),subscriptionOptions:e};return await Fm(t,r),r.token}async function z6(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:P6(e)})}function $6(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function rv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return K6(e,t),W6(e,t),q6(e,t),e}function K6(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function W6(t,e){e.data&&(t.data=e.data)}function q6(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function H6(t){return typeof t=="object"&&!!t&&v1 in t}/**
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
 */function G6(t){if(!t||!t.options)throw dh("App Configuration Object");if(!t.name)throw dh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw dh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function dh(t){return an.create("missing-app-config-values",{valueName:t})}/**
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
 */class Q6{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=G6(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Y6(t){try{t.swRegistration=await navigator.serviceWorker.register(T6,{scope:I6}),t.swRegistration.update().catch(()=>{})}catch(e){throw an.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function X6(t,e){if(!e&&!t.swRegistration&&await Y6(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw an.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function J6(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=_1)}/**
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
 */async function I1(t,e){if(!navigator)throw an.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw an.create("permission-blocked");return await J6(t,e==null?void 0:e.vapidKey),await X6(t,e==null?void 0:e.serviceWorkerRegistration),j6(t)}/**
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
 */async function Z6(t,e,n){const r=eO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[v1],message_name:n[A6],message_time:n[x6],message_device_time:Math.floor(Date.now()/1e3)})}function eO(t){switch(t){case al.NOTIFICATION_CLICKED:return"notification_open";case al.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function tO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===al.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(rv(n)):t.onMessageHandler.next(rv(n)));const r=n.data;H6(r)&&r[R6]==="1"&&await Z6(t,n.messageType,r)}const iv="@firebase/messaging",sv="0.12.12";/**
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
 */const nO=t=>{const e=new Q6(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>tO(e,n)),e},rO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>I1(e,r)}};function iO(){Jn(new Bn("messaging",nO,"PUBLIC")),Jn(new Bn("messaging-internal",rO,"PRIVATE")),In(iv,sv),In(iv,sv,"esm2017")}/**
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
 */async function sO(){try{await Ww()}catch{return!1}return typeof window<"u"&&Kw()&&cR()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function oO(t,e){if(!navigator)throw an.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function aO(t=qc()){return sO().then(e=>{if(!e)throw an.create("unsupported-browser")},e=>{throw an.create("indexed-db-unsupported")}),_s(tt(t),"messaging").getImmediate()}async function lO(t,e){return t=tt(t),I1(t,e)}function tD(t,e){return t=tt(t),oO(t,e)}iO();/**
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
 */const uO="type.googleapis.com/google.protobuf.Int64Value",cO="type.googleapis.com/google.protobuf.UInt64Value";function S1(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Vd(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Vd(e));if(typeof t=="function"||typeof t=="object")return S1(t,e=>Vd(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Ac(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case uO:case cO:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Ac(e)):typeof t=="function"||typeof t=="object"?S1(t,e=>Ac(e)):t}/**
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
 */const zm="functions";/**
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
 */const ov={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oo extends tr{constructor(e,n,r){super(`${zm}/${e}`,n||""),this.details=r}}function fO(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function hO(t,e){let n=fO(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!ov[o])return new oo("internal","internal");n=ov[o],r=o}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=Ac(i))}}catch{}return n==="ok"?null:new oo(n,r,i)}/**
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
 */class dO{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const Ld="us-central1";function pO(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new oo("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class mO{constructor(e,n,r,i,s=Ld,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new dO(n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Ld}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function gO(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function yO(t,e,n){return r=>vO(t,e,r,{})}async function _O(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function vO(t,e,n,r){const i=t._url(e);return wO(t,i,n,r)}async function wO(t,e,n,r){n=Vd(n);const i={data:n},s={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const l=r.timeout||7e4,u=pO(l),f=await Promise.race([_O(e,i,s,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!f)throw new oo("cancelled","Firebase Functions instance was deleted.");const p=hO(f.status,f.json);if(p)throw p;if(!f.json)throw new oo("internal","Response is not valid JSON object.");let g=f.json.data;if(typeof g>"u"&&(g=f.json.result),typeof g>"u")throw new oo("internal","Response is missing data field.");return{data:Ac(g)}}const av="@firebase/functions",lv="0.11.8";/**
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
 */const EO="auth-internal",TO="app-check-internal",IO="messaging-internal";function SO(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(EO),l=r.getProvider(IO),u=r.getProvider(TO);return new mO(s,o,l,u,i,t)};Jn(new Bn(zm,n,"PUBLIC").setMultipleInstances(!0)),In(av,lv,e),In(av,lv,"esm2017")}/**
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
 */function AO(t=qc(),e=Ld){const r=_s(tt(t),zm).getImmediate({identifier:e}),i=Bw("functions");return i&&xO(r,...i),r}function xO(t,e,n){gO(tt(t),e,n)}function nD(t,e,n){return yO(tt(t),e)}SO(fetch.bind(self));const RO={apiKey:"AIzaSyBYdApPaaAW97Eds0IYvH8q-_XmhfTLl0E",authDomain:"nova-app-d207e.firebaseapp.com",projectId:"nova-app-d207e",storageBucket:"nova-app-d207e.firebasestorage.app",messagingSenderId:"178011579545",appId:"1:178011579545:web:e6b4946ec318c6090e0408"},gf=Gw(RO),Gs=Vk(gf),Gi=Tb(gf),PO=aO(gf),rD=AO(gf,"us-central1");EC(Gs,IE).catch(console.error);async function iD(){try{const t="BA4AugiknNovSxgmfQFt_HIQ0yVnsQqlSNcCfN-ooN89GAoSQOEhMPPy3QVdDF8P5eXvTF0YjyqML1pFk3X3Jf4";let e;"serviceWorker"in navigator&&(e=await navigator.serviceWorker.register("/sw.js"));const n=await lO(PO,{vapidKey:t,serviceWorkerRegistration:e});return n?(console.log("FCM Token:",n),n):null}catch(t){return console.error("Unable to get FCM token",t),null}}function CO(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var A1={exports:{}};const kO={},NO=Object.freeze(Object.defineProperty({__proto__:null,default:kO},Symbol.toStringTag,{value:"Module"})),bO=$1(NO);(function(t){(function(e){var n=function(d){var _,y=new Float64Array(16);if(d)for(_=0;_<d.length;_++)y[_]=d[_];return y},r=function(){throw new Error("no PRNG")},i=new Uint8Array(16),s=new Uint8Array(32);s[0]=9;var o=n(),l=n([1]),u=n([56129,1]),f=n([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),p=n([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),g=n([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),v=n([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),R=n([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function O(d,_,y,c){d[_]=y>>24&255,d[_+1]=y>>16&255,d[_+2]=y>>8&255,d[_+3]=y&255,d[_+4]=c>>24&255,d[_+5]=c>>16&255,d[_+6]=c>>8&255,d[_+7]=c&255}function L(d,_,y,c,E){var D,M=0;for(D=0;D<E;D++)M|=d[_+D]^y[c+D];return(1&M-1>>>8)-1}function F(d,_,y,c){return L(d,_,y,c,16)}function P(d,_,y,c){return L(d,_,y,c,32)}function I(d,_,y,c){for(var E=c[0]&255|(c[1]&255)<<8|(c[2]&255)<<16|(c[3]&255)<<24,D=y[0]&255|(y[1]&255)<<8|(y[2]&255)<<16|(y[3]&255)<<24,M=y[4]&255|(y[5]&255)<<8|(y[6]&255)<<16|(y[7]&255)<<24,W=y[8]&255|(y[9]&255)<<8|(y[10]&255)<<16|(y[11]&255)<<24,X=y[12]&255|(y[13]&255)<<8|(y[14]&255)<<16|(y[15]&255)<<24,fe=c[4]&255|(c[5]&255)<<8|(c[6]&255)<<16|(c[7]&255)<<24,te=_[0]&255|(_[1]&255)<<8|(_[2]&255)<<16|(_[3]&255)<<24,ze=_[4]&255|(_[5]&255)<<8|(_[6]&255)<<16|(_[7]&255)<<24,le=_[8]&255|(_[9]&255)<<8|(_[10]&255)<<16|(_[11]&255)<<24,we=_[12]&255|(_[13]&255)<<8|(_[14]&255)<<16|(_[15]&255)<<24,Ee=c[8]&255|(c[9]&255)<<8|(c[10]&255)<<16|(c[11]&255)<<24,ke=y[16]&255|(y[17]&255)<<8|(y[18]&255)<<16|(y[19]&255)<<24,Re=y[20]&255|(y[21]&255)<<8|(y[22]&255)<<16|(y[23]&255)<<24,Se=y[24]&255|(y[25]&255)<<8|(y[26]&255)<<16|(y[27]&255)<<24,Te=y[28]&255|(y[29]&255)<<8|(y[30]&255)<<16|(y[31]&255)<<24,Ie=c[12]&255|(c[13]&255)<<8|(c[14]&255)<<16|(c[15]&255)<<24,ue=E,pe=D,re=M,ce=W,de=X,se=fe,j=te,B=ze,G=le,K=we,q=Ee,Y=ke,ye=Re,De=Se,Ve=Te,Ne=Ie,A,xe=0;xe<20;xe+=2)A=ue+ye|0,de^=A<<7|A>>>25,A=de+ue|0,G^=A<<9|A>>>23,A=G+de|0,ye^=A<<13|A>>>19,A=ye+G|0,ue^=A<<18|A>>>14,A=se+pe|0,K^=A<<7|A>>>25,A=K+se|0,De^=A<<9|A>>>23,A=De+K|0,pe^=A<<13|A>>>19,A=pe+De|0,se^=A<<18|A>>>14,A=q+j|0,Ve^=A<<7|A>>>25,A=Ve+q|0,re^=A<<9|A>>>23,A=re+Ve|0,j^=A<<13|A>>>19,A=j+re|0,q^=A<<18|A>>>14,A=Ne+Y|0,ce^=A<<7|A>>>25,A=ce+Ne|0,B^=A<<9|A>>>23,A=B+ce|0,Y^=A<<13|A>>>19,A=Y+B|0,Ne^=A<<18|A>>>14,A=ue+ce|0,pe^=A<<7|A>>>25,A=pe+ue|0,re^=A<<9|A>>>23,A=re+pe|0,ce^=A<<13|A>>>19,A=ce+re|0,ue^=A<<18|A>>>14,A=se+de|0,j^=A<<7|A>>>25,A=j+se|0,B^=A<<9|A>>>23,A=B+j|0,de^=A<<13|A>>>19,A=de+B|0,se^=A<<18|A>>>14,A=q+K|0,Y^=A<<7|A>>>25,A=Y+q|0,G^=A<<9|A>>>23,A=G+Y|0,K^=A<<13|A>>>19,A=K+G|0,q^=A<<18|A>>>14,A=Ne+Ve|0,ye^=A<<7|A>>>25,A=ye+Ne|0,De^=A<<9|A>>>23,A=De+ye|0,Ve^=A<<13|A>>>19,A=Ve+De|0,Ne^=A<<18|A>>>14;ue=ue+E|0,pe=pe+D|0,re=re+M|0,ce=ce+W|0,de=de+X|0,se=se+fe|0,j=j+te|0,B=B+ze|0,G=G+le|0,K=K+we|0,q=q+Ee|0,Y=Y+ke|0,ye=ye+Re|0,De=De+Se|0,Ve=Ve+Te|0,Ne=Ne+Ie|0,d[0]=ue>>>0&255,d[1]=ue>>>8&255,d[2]=ue>>>16&255,d[3]=ue>>>24&255,d[4]=pe>>>0&255,d[5]=pe>>>8&255,d[6]=pe>>>16&255,d[7]=pe>>>24&255,d[8]=re>>>0&255,d[9]=re>>>8&255,d[10]=re>>>16&255,d[11]=re>>>24&255,d[12]=ce>>>0&255,d[13]=ce>>>8&255,d[14]=ce>>>16&255,d[15]=ce>>>24&255,d[16]=de>>>0&255,d[17]=de>>>8&255,d[18]=de>>>16&255,d[19]=de>>>24&255,d[20]=se>>>0&255,d[21]=se>>>8&255,d[22]=se>>>16&255,d[23]=se>>>24&255,d[24]=j>>>0&255,d[25]=j>>>8&255,d[26]=j>>>16&255,d[27]=j>>>24&255,d[28]=B>>>0&255,d[29]=B>>>8&255,d[30]=B>>>16&255,d[31]=B>>>24&255,d[32]=G>>>0&255,d[33]=G>>>8&255,d[34]=G>>>16&255,d[35]=G>>>24&255,d[36]=K>>>0&255,d[37]=K>>>8&255,d[38]=K>>>16&255,d[39]=K>>>24&255,d[40]=q>>>0&255,d[41]=q>>>8&255,d[42]=q>>>16&255,d[43]=q>>>24&255,d[44]=Y>>>0&255,d[45]=Y>>>8&255,d[46]=Y>>>16&255,d[47]=Y>>>24&255,d[48]=ye>>>0&255,d[49]=ye>>>8&255,d[50]=ye>>>16&255,d[51]=ye>>>24&255,d[52]=De>>>0&255,d[53]=De>>>8&255,d[54]=De>>>16&255,d[55]=De>>>24&255,d[56]=Ve>>>0&255,d[57]=Ve>>>8&255,d[58]=Ve>>>16&255,d[59]=Ve>>>24&255,d[60]=Ne>>>0&255,d[61]=Ne>>>8&255,d[62]=Ne>>>16&255,d[63]=Ne>>>24&255}function N(d,_,y,c){for(var E=c[0]&255|(c[1]&255)<<8|(c[2]&255)<<16|(c[3]&255)<<24,D=y[0]&255|(y[1]&255)<<8|(y[2]&255)<<16|(y[3]&255)<<24,M=y[4]&255|(y[5]&255)<<8|(y[6]&255)<<16|(y[7]&255)<<24,W=y[8]&255|(y[9]&255)<<8|(y[10]&255)<<16|(y[11]&255)<<24,X=y[12]&255|(y[13]&255)<<8|(y[14]&255)<<16|(y[15]&255)<<24,fe=c[4]&255|(c[5]&255)<<8|(c[6]&255)<<16|(c[7]&255)<<24,te=_[0]&255|(_[1]&255)<<8|(_[2]&255)<<16|(_[3]&255)<<24,ze=_[4]&255|(_[5]&255)<<8|(_[6]&255)<<16|(_[7]&255)<<24,le=_[8]&255|(_[9]&255)<<8|(_[10]&255)<<16|(_[11]&255)<<24,we=_[12]&255|(_[13]&255)<<8|(_[14]&255)<<16|(_[15]&255)<<24,Ee=c[8]&255|(c[9]&255)<<8|(c[10]&255)<<16|(c[11]&255)<<24,ke=y[16]&255|(y[17]&255)<<8|(y[18]&255)<<16|(y[19]&255)<<24,Re=y[20]&255|(y[21]&255)<<8|(y[22]&255)<<16|(y[23]&255)<<24,Se=y[24]&255|(y[25]&255)<<8|(y[26]&255)<<16|(y[27]&255)<<24,Te=y[28]&255|(y[29]&255)<<8|(y[30]&255)<<16|(y[31]&255)<<24,Ie=c[12]&255|(c[13]&255)<<8|(c[14]&255)<<16|(c[15]&255)<<24,ue=E,pe=D,re=M,ce=W,de=X,se=fe,j=te,B=ze,G=le,K=we,q=Ee,Y=ke,ye=Re,De=Se,Ve=Te,Ne=Ie,A,xe=0;xe<20;xe+=2)A=ue+ye|0,de^=A<<7|A>>>25,A=de+ue|0,G^=A<<9|A>>>23,A=G+de|0,ye^=A<<13|A>>>19,A=ye+G|0,ue^=A<<18|A>>>14,A=se+pe|0,K^=A<<7|A>>>25,A=K+se|0,De^=A<<9|A>>>23,A=De+K|0,pe^=A<<13|A>>>19,A=pe+De|0,se^=A<<18|A>>>14,A=q+j|0,Ve^=A<<7|A>>>25,A=Ve+q|0,re^=A<<9|A>>>23,A=re+Ve|0,j^=A<<13|A>>>19,A=j+re|0,q^=A<<18|A>>>14,A=Ne+Y|0,ce^=A<<7|A>>>25,A=ce+Ne|0,B^=A<<9|A>>>23,A=B+ce|0,Y^=A<<13|A>>>19,A=Y+B|0,Ne^=A<<18|A>>>14,A=ue+ce|0,pe^=A<<7|A>>>25,A=pe+ue|0,re^=A<<9|A>>>23,A=re+pe|0,ce^=A<<13|A>>>19,A=ce+re|0,ue^=A<<18|A>>>14,A=se+de|0,j^=A<<7|A>>>25,A=j+se|0,B^=A<<9|A>>>23,A=B+j|0,de^=A<<13|A>>>19,A=de+B|0,se^=A<<18|A>>>14,A=q+K|0,Y^=A<<7|A>>>25,A=Y+q|0,G^=A<<9|A>>>23,A=G+Y|0,K^=A<<13|A>>>19,A=K+G|0,q^=A<<18|A>>>14,A=Ne+Ve|0,ye^=A<<7|A>>>25,A=ye+Ne|0,De^=A<<9|A>>>23,A=De+ye|0,Ve^=A<<13|A>>>19,A=Ve+De|0,Ne^=A<<18|A>>>14;d[0]=ue>>>0&255,d[1]=ue>>>8&255,d[2]=ue>>>16&255,d[3]=ue>>>24&255,d[4]=se>>>0&255,d[5]=se>>>8&255,d[6]=se>>>16&255,d[7]=se>>>24&255,d[8]=q>>>0&255,d[9]=q>>>8&255,d[10]=q>>>16&255,d[11]=q>>>24&255,d[12]=Ne>>>0&255,d[13]=Ne>>>8&255,d[14]=Ne>>>16&255,d[15]=Ne>>>24&255,d[16]=j>>>0&255,d[17]=j>>>8&255,d[18]=j>>>16&255,d[19]=j>>>24&255,d[20]=B>>>0&255,d[21]=B>>>8&255,d[22]=B>>>16&255,d[23]=B>>>24&255,d[24]=G>>>0&255,d[25]=G>>>8&255,d[26]=G>>>16&255,d[27]=G>>>24&255,d[28]=K>>>0&255,d[29]=K>>>8&255,d[30]=K>>>16&255,d[31]=K>>>24&255}function $(d,_,y,c){I(d,_,y,c)}function Z(d,_,y,c){N(d,_,y,c)}var ee=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function x(d,_,y,c,E,D,M){var W=new Uint8Array(16),X=new Uint8Array(64),fe,te;for(te=0;te<16;te++)W[te]=0;for(te=0;te<8;te++)W[te]=D[te];for(;E>=64;){for($(X,W,M,ee),te=0;te<64;te++)d[_+te]=y[c+te]^X[te];for(fe=1,te=8;te<16;te++)fe=fe+(W[te]&255)|0,W[te]=fe&255,fe>>>=8;E-=64,_+=64,c+=64}if(E>0)for($(X,W,M,ee),te=0;te<E;te++)d[_+te]=y[c+te]^X[te];return 0}function T(d,_,y,c,E){var D=new Uint8Array(16),M=new Uint8Array(64),W,X;for(X=0;X<16;X++)D[X]=0;for(X=0;X<8;X++)D[X]=c[X];for(;y>=64;){for($(M,D,E,ee),X=0;X<64;X++)d[_+X]=M[X];for(W=1,X=8;X<16;X++)W=W+(D[X]&255)|0,D[X]=W&255,W>>>=8;y-=64,_+=64}if(y>0)for($(M,D,E,ee),X=0;X<y;X++)d[_+X]=M[X];return 0}function S(d,_,y,c,E){var D=new Uint8Array(32);Z(D,c,E,ee);for(var M=new Uint8Array(8),W=0;W<8;W++)M[W]=c[W+16];return T(d,_,y,M,D)}function C(d,_,y,c,E,D,M){var W=new Uint8Array(32);Z(W,D,M,ee);for(var X=new Uint8Array(8),fe=0;fe<8;fe++)X[fe]=D[fe+16];return x(d,_,y,c,E,X,W)}var b=function(d){this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0;var _,y,c,E,D,M,W,X;_=d[0]&255|(d[1]&255)<<8,this.r[0]=_&8191,y=d[2]&255|(d[3]&255)<<8,this.r[1]=(_>>>13|y<<3)&8191,c=d[4]&255|(d[5]&255)<<8,this.r[2]=(y>>>10|c<<6)&7939,E=d[6]&255|(d[7]&255)<<8,this.r[3]=(c>>>7|E<<9)&8191,D=d[8]&255|(d[9]&255)<<8,this.r[4]=(E>>>4|D<<12)&255,this.r[5]=D>>>1&8190,M=d[10]&255|(d[11]&255)<<8,this.r[6]=(D>>>14|M<<2)&8191,W=d[12]&255|(d[13]&255)<<8,this.r[7]=(M>>>11|W<<5)&8065,X=d[14]&255|(d[15]&255)<<8,this.r[8]=(W>>>8|X<<8)&8191,this.r[9]=X>>>5&127,this.pad[0]=d[16]&255|(d[17]&255)<<8,this.pad[1]=d[18]&255|(d[19]&255)<<8,this.pad[2]=d[20]&255|(d[21]&255)<<8,this.pad[3]=d[22]&255|(d[23]&255)<<8,this.pad[4]=d[24]&255|(d[25]&255)<<8,this.pad[5]=d[26]&255|(d[27]&255)<<8,this.pad[6]=d[28]&255|(d[29]&255)<<8,this.pad[7]=d[30]&255|(d[31]&255)<<8};b.prototype.blocks=function(d,_,y){for(var c=this.fin?0:2048,E,D,M,W,X,fe,te,ze,le,we,Ee,ke,Re,Se,Te,Ie,ue,pe,re,ce=this.h[0],de=this.h[1],se=this.h[2],j=this.h[3],B=this.h[4],G=this.h[5],K=this.h[6],q=this.h[7],Y=this.h[8],ye=this.h[9],De=this.r[0],Ve=this.r[1],Ne=this.r[2],A=this.r[3],xe=this.r[4],Ue=this.r[5],Fe=this.r[6],be=this.r[7],je=this.r[8],ge=this.r[9];y>=16;)E=d[_+0]&255|(d[_+1]&255)<<8,ce+=E&8191,D=d[_+2]&255|(d[_+3]&255)<<8,de+=(E>>>13|D<<3)&8191,M=d[_+4]&255|(d[_+5]&255)<<8,se+=(D>>>10|M<<6)&8191,W=d[_+6]&255|(d[_+7]&255)<<8,j+=(M>>>7|W<<9)&8191,X=d[_+8]&255|(d[_+9]&255)<<8,B+=(W>>>4|X<<12)&8191,G+=X>>>1&8191,fe=d[_+10]&255|(d[_+11]&255)<<8,K+=(X>>>14|fe<<2)&8191,te=d[_+12]&255|(d[_+13]&255)<<8,q+=(fe>>>11|te<<5)&8191,ze=d[_+14]&255|(d[_+15]&255)<<8,Y+=(te>>>8|ze<<8)&8191,ye+=ze>>>5|c,le=0,we=le,we+=ce*De,we+=de*(5*ge),we+=se*(5*je),we+=j*(5*be),we+=B*(5*Fe),le=we>>>13,we&=8191,we+=G*(5*Ue),we+=K*(5*xe),we+=q*(5*A),we+=Y*(5*Ne),we+=ye*(5*Ve),le+=we>>>13,we&=8191,Ee=le,Ee+=ce*Ve,Ee+=de*De,Ee+=se*(5*ge),Ee+=j*(5*je),Ee+=B*(5*be),le=Ee>>>13,Ee&=8191,Ee+=G*(5*Fe),Ee+=K*(5*Ue),Ee+=q*(5*xe),Ee+=Y*(5*A),Ee+=ye*(5*Ne),le+=Ee>>>13,Ee&=8191,ke=le,ke+=ce*Ne,ke+=de*Ve,ke+=se*De,ke+=j*(5*ge),ke+=B*(5*je),le=ke>>>13,ke&=8191,ke+=G*(5*be),ke+=K*(5*Fe),ke+=q*(5*Ue),ke+=Y*(5*xe),ke+=ye*(5*A),le+=ke>>>13,ke&=8191,Re=le,Re+=ce*A,Re+=de*Ne,Re+=se*Ve,Re+=j*De,Re+=B*(5*ge),le=Re>>>13,Re&=8191,Re+=G*(5*je),Re+=K*(5*be),Re+=q*(5*Fe),Re+=Y*(5*Ue),Re+=ye*(5*xe),le+=Re>>>13,Re&=8191,Se=le,Se+=ce*xe,Se+=de*A,Se+=se*Ne,Se+=j*Ve,Se+=B*De,le=Se>>>13,Se&=8191,Se+=G*(5*ge),Se+=K*(5*je),Se+=q*(5*be),Se+=Y*(5*Fe),Se+=ye*(5*Ue),le+=Se>>>13,Se&=8191,Te=le,Te+=ce*Ue,Te+=de*xe,Te+=se*A,Te+=j*Ne,Te+=B*Ve,le=Te>>>13,Te&=8191,Te+=G*De,Te+=K*(5*ge),Te+=q*(5*je),Te+=Y*(5*be),Te+=ye*(5*Fe),le+=Te>>>13,Te&=8191,Ie=le,Ie+=ce*Fe,Ie+=de*Ue,Ie+=se*xe,Ie+=j*A,Ie+=B*Ne,le=Ie>>>13,Ie&=8191,Ie+=G*Ve,Ie+=K*De,Ie+=q*(5*ge),Ie+=Y*(5*je),Ie+=ye*(5*be),le+=Ie>>>13,Ie&=8191,ue=le,ue+=ce*be,ue+=de*Fe,ue+=se*Ue,ue+=j*xe,ue+=B*A,le=ue>>>13,ue&=8191,ue+=G*Ne,ue+=K*Ve,ue+=q*De,ue+=Y*(5*ge),ue+=ye*(5*je),le+=ue>>>13,ue&=8191,pe=le,pe+=ce*je,pe+=de*be,pe+=se*Fe,pe+=j*Ue,pe+=B*xe,le=pe>>>13,pe&=8191,pe+=G*A,pe+=K*Ne,pe+=q*Ve,pe+=Y*De,pe+=ye*(5*ge),le+=pe>>>13,pe&=8191,re=le,re+=ce*ge,re+=de*je,re+=se*be,re+=j*Fe,re+=B*Ue,le=re>>>13,re&=8191,re+=G*xe,re+=K*A,re+=q*Ne,re+=Y*Ve,re+=ye*De,le+=re>>>13,re&=8191,le=(le<<2)+le|0,le=le+we|0,we=le&8191,le=le>>>13,Ee+=le,ce=we,de=Ee,se=ke,j=Re,B=Se,G=Te,K=Ie,q=ue,Y=pe,ye=re,_+=16,y-=16;this.h[0]=ce,this.h[1]=de,this.h[2]=se,this.h[3]=j,this.h[4]=B,this.h[5]=G,this.h[6]=K,this.h[7]=q,this.h[8]=Y,this.h[9]=ye},b.prototype.finish=function(d,_){var y=new Uint16Array(10),c,E,D,M;if(this.leftover){for(M=this.leftover,this.buffer[M++]=1;M<16;M++)this.buffer[M]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(c=this.h[1]>>>13,this.h[1]&=8191,M=2;M<10;M++)this.h[M]+=c,c=this.h[M]>>>13,this.h[M]&=8191;for(this.h[0]+=c*5,c=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=c,c=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=c,y[0]=this.h[0]+5,c=y[0]>>>13,y[0]&=8191,M=1;M<10;M++)y[M]=this.h[M]+c,c=y[M]>>>13,y[M]&=8191;for(y[9]-=8192,E=(c^1)-1,M=0;M<10;M++)y[M]&=E;for(E=~E,M=0;M<10;M++)this.h[M]=this.h[M]&E|y[M];for(this.h[0]=(this.h[0]|this.h[1]<<13)&65535,this.h[1]=(this.h[1]>>>3|this.h[2]<<10)&65535,this.h[2]=(this.h[2]>>>6|this.h[3]<<7)&65535,this.h[3]=(this.h[3]>>>9|this.h[4]<<4)&65535,this.h[4]=(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14)&65535,this.h[5]=(this.h[6]>>>2|this.h[7]<<11)&65535,this.h[6]=(this.h[7]>>>5|this.h[8]<<8)&65535,this.h[7]=(this.h[8]>>>8|this.h[9]<<5)&65535,D=this.h[0]+this.pad[0],this.h[0]=D&65535,M=1;M<8;M++)D=(this.h[M]+this.pad[M]|0)+(D>>>16)|0,this.h[M]=D&65535;d[_+0]=this.h[0]>>>0&255,d[_+1]=this.h[0]>>>8&255,d[_+2]=this.h[1]>>>0&255,d[_+3]=this.h[1]>>>8&255,d[_+4]=this.h[2]>>>0&255,d[_+5]=this.h[2]>>>8&255,d[_+6]=this.h[3]>>>0&255,d[_+7]=this.h[3]>>>8&255,d[_+8]=this.h[4]>>>0&255,d[_+9]=this.h[4]>>>8&255,d[_+10]=this.h[5]>>>0&255,d[_+11]=this.h[5]>>>8&255,d[_+12]=this.h[6]>>>0&255,d[_+13]=this.h[6]>>>8&255,d[_+14]=this.h[7]>>>0&255,d[_+15]=this.h[7]>>>8&255},b.prototype.update=function(d,_,y){var c,E;if(this.leftover){for(E=16-this.leftover,E>y&&(E=y),c=0;c<E;c++)this.buffer[this.leftover+c]=d[_+c];if(y-=E,_+=E,this.leftover+=E,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(y>=16&&(E=y-y%16,this.blocks(d,_,E),_+=E,y-=E),y){for(c=0;c<y;c++)this.buffer[this.leftover+c]=d[_+c];this.leftover+=y}};function V(d,_,y,c,E,D){var M=new b(D);return M.update(y,c,E),M.finish(d,_),0}function k(d,_,y,c,E,D){var M=new Uint8Array(16);return V(M,0,y,c,E,D),F(d,_,M,0)}function Qt(d,_,y,c,E){var D;if(y<32)return-1;for(C(d,0,_,0,y,c,E),V(d,16,d,32,y-32,d),D=0;D<16;D++)d[D]=0;return 0}function zn(d,_,y,c,E){var D,M=new Uint8Array(32);if(y<32||(S(M,0,32,c,E),k(_,16,_,32,y-32,M)!==0))return-1;for(C(d,0,_,0,y,c,E),D=0;D<32;D++)d[D]=0;return 0}function cn(d,_){var y;for(y=0;y<16;y++)d[y]=_[y]|0}function Sn(d){var _,y,c=1;for(_=0;_<16;_++)y=d[_]+c+65535,c=Math.floor(y/65536),d[_]=y-c*65536;d[0]+=c-1+37*(c-1)}function ie(d,_,y){for(var c,E=~(y-1),D=0;D<16;D++)c=E&(d[D]^_[D]),d[D]^=c,_[D]^=c}function ve(d,_){var y,c,E,D=n(),M=n();for(y=0;y<16;y++)M[y]=_[y];for(Sn(M),Sn(M),Sn(M),c=0;c<2;c++){for(D[0]=M[0]-65517,y=1;y<15;y++)D[y]=M[y]-65535-(D[y-1]>>16&1),D[y-1]&=65535;D[15]=M[15]-32767-(D[14]>>16&1),E=D[15]>>16&1,D[14]&=65535,ie(M,D,1-E)}for(y=0;y<16;y++)d[2*y]=M[y]&255,d[2*y+1]=M[y]>>8}function Oe(d,_){var y=new Uint8Array(32),c=new Uint8Array(32);return ve(y,d),ve(c,_),P(y,0,c,0)}function rt(d){var _=new Uint8Array(32);return ve(_,d),_[0]&1}function Xe(d,_){var y;for(y=0;y<16;y++)d[y]=_[2*y]+(_[2*y+1]<<8);d[15]&=32767}function He(d,_,y){for(var c=0;c<16;c++)d[c]=_[c]+y[c]}function wt(d,_,y){for(var c=0;c<16;c++)d[c]=_[c]-y[c]}function Ce(d,_,y){var c,E,D=0,M=0,W=0,X=0,fe=0,te=0,ze=0,le=0,we=0,Ee=0,ke=0,Re=0,Se=0,Te=0,Ie=0,ue=0,pe=0,re=0,ce=0,de=0,se=0,j=0,B=0,G=0,K=0,q=0,Y=0,ye=0,De=0,Ve=0,Ne=0,A=y[0],xe=y[1],Ue=y[2],Fe=y[3],be=y[4],je=y[5],ge=y[6],it=y[7],Ke=y[8],et=y[9],ft=y[10],at=y[11],Tt=y[12],Ot=y[13],Dt=y[14],Vt=y[15];c=_[0],D+=c*A,M+=c*xe,W+=c*Ue,X+=c*Fe,fe+=c*be,te+=c*je,ze+=c*ge,le+=c*it,we+=c*Ke,Ee+=c*et,ke+=c*ft,Re+=c*at,Se+=c*Tt,Te+=c*Ot,Ie+=c*Dt,ue+=c*Vt,c=_[1],M+=c*A,W+=c*xe,X+=c*Ue,fe+=c*Fe,te+=c*be,ze+=c*je,le+=c*ge,we+=c*it,Ee+=c*Ke,ke+=c*et,Re+=c*ft,Se+=c*at,Te+=c*Tt,Ie+=c*Ot,ue+=c*Dt,pe+=c*Vt,c=_[2],W+=c*A,X+=c*xe,fe+=c*Ue,te+=c*Fe,ze+=c*be,le+=c*je,we+=c*ge,Ee+=c*it,ke+=c*Ke,Re+=c*et,Se+=c*ft,Te+=c*at,Ie+=c*Tt,ue+=c*Ot,pe+=c*Dt,re+=c*Vt,c=_[3],X+=c*A,fe+=c*xe,te+=c*Ue,ze+=c*Fe,le+=c*be,we+=c*je,Ee+=c*ge,ke+=c*it,Re+=c*Ke,Se+=c*et,Te+=c*ft,Ie+=c*at,ue+=c*Tt,pe+=c*Ot,re+=c*Dt,ce+=c*Vt,c=_[4],fe+=c*A,te+=c*xe,ze+=c*Ue,le+=c*Fe,we+=c*be,Ee+=c*je,ke+=c*ge,Re+=c*it,Se+=c*Ke,Te+=c*et,Ie+=c*ft,ue+=c*at,pe+=c*Tt,re+=c*Ot,ce+=c*Dt,de+=c*Vt,c=_[5],te+=c*A,ze+=c*xe,le+=c*Ue,we+=c*Fe,Ee+=c*be,ke+=c*je,Re+=c*ge,Se+=c*it,Te+=c*Ke,Ie+=c*et,ue+=c*ft,pe+=c*at,re+=c*Tt,ce+=c*Ot,de+=c*Dt,se+=c*Vt,c=_[6],ze+=c*A,le+=c*xe,we+=c*Ue,Ee+=c*Fe,ke+=c*be,Re+=c*je,Se+=c*ge,Te+=c*it,Ie+=c*Ke,ue+=c*et,pe+=c*ft,re+=c*at,ce+=c*Tt,de+=c*Ot,se+=c*Dt,j+=c*Vt,c=_[7],le+=c*A,we+=c*xe,Ee+=c*Ue,ke+=c*Fe,Re+=c*be,Se+=c*je,Te+=c*ge,Ie+=c*it,ue+=c*Ke,pe+=c*et,re+=c*ft,ce+=c*at,de+=c*Tt,se+=c*Ot,j+=c*Dt,B+=c*Vt,c=_[8],we+=c*A,Ee+=c*xe,ke+=c*Ue,Re+=c*Fe,Se+=c*be,Te+=c*je,Ie+=c*ge,ue+=c*it,pe+=c*Ke,re+=c*et,ce+=c*ft,de+=c*at,se+=c*Tt,j+=c*Ot,B+=c*Dt,G+=c*Vt,c=_[9],Ee+=c*A,ke+=c*xe,Re+=c*Ue,Se+=c*Fe,Te+=c*be,Ie+=c*je,ue+=c*ge,pe+=c*it,re+=c*Ke,ce+=c*et,de+=c*ft,se+=c*at,j+=c*Tt,B+=c*Ot,G+=c*Dt,K+=c*Vt,c=_[10],ke+=c*A,Re+=c*xe,Se+=c*Ue,Te+=c*Fe,Ie+=c*be,ue+=c*je,pe+=c*ge,re+=c*it,ce+=c*Ke,de+=c*et,se+=c*ft,j+=c*at,B+=c*Tt,G+=c*Ot,K+=c*Dt,q+=c*Vt,c=_[11],Re+=c*A,Se+=c*xe,Te+=c*Ue,Ie+=c*Fe,ue+=c*be,pe+=c*je,re+=c*ge,ce+=c*it,de+=c*Ke,se+=c*et,j+=c*ft,B+=c*at,G+=c*Tt,K+=c*Ot,q+=c*Dt,Y+=c*Vt,c=_[12],Se+=c*A,Te+=c*xe,Ie+=c*Ue,ue+=c*Fe,pe+=c*be,re+=c*je,ce+=c*ge,de+=c*it,se+=c*Ke,j+=c*et,B+=c*ft,G+=c*at,K+=c*Tt,q+=c*Ot,Y+=c*Dt,ye+=c*Vt,c=_[13],Te+=c*A,Ie+=c*xe,ue+=c*Ue,pe+=c*Fe,re+=c*be,ce+=c*je,de+=c*ge,se+=c*it,j+=c*Ke,B+=c*et,G+=c*ft,K+=c*at,q+=c*Tt,Y+=c*Ot,ye+=c*Dt,De+=c*Vt,c=_[14],Ie+=c*A,ue+=c*xe,pe+=c*Ue,re+=c*Fe,ce+=c*be,de+=c*je,se+=c*ge,j+=c*it,B+=c*Ke,G+=c*et,K+=c*ft,q+=c*at,Y+=c*Tt,ye+=c*Ot,De+=c*Dt,Ve+=c*Vt,c=_[15],ue+=c*A,pe+=c*xe,re+=c*Ue,ce+=c*Fe,de+=c*be,se+=c*je,j+=c*ge,B+=c*it,G+=c*Ke,K+=c*et,q+=c*ft,Y+=c*at,ye+=c*Tt,De+=c*Ot,Ve+=c*Dt,Ne+=c*Vt,D+=38*pe,M+=38*re,W+=38*ce,X+=38*de,fe+=38*se,te+=38*j,ze+=38*B,le+=38*G,we+=38*K,Ee+=38*q,ke+=38*Y,Re+=38*ye,Se+=38*De,Te+=38*Ve,Ie+=38*Ne,E=1,c=D+E+65535,E=Math.floor(c/65536),D=c-E*65536,c=M+E+65535,E=Math.floor(c/65536),M=c-E*65536,c=W+E+65535,E=Math.floor(c/65536),W=c-E*65536,c=X+E+65535,E=Math.floor(c/65536),X=c-E*65536,c=fe+E+65535,E=Math.floor(c/65536),fe=c-E*65536,c=te+E+65535,E=Math.floor(c/65536),te=c-E*65536,c=ze+E+65535,E=Math.floor(c/65536),ze=c-E*65536,c=le+E+65535,E=Math.floor(c/65536),le=c-E*65536,c=we+E+65535,E=Math.floor(c/65536),we=c-E*65536,c=Ee+E+65535,E=Math.floor(c/65536),Ee=c-E*65536,c=ke+E+65535,E=Math.floor(c/65536),ke=c-E*65536,c=Re+E+65535,E=Math.floor(c/65536),Re=c-E*65536,c=Se+E+65535,E=Math.floor(c/65536),Se=c-E*65536,c=Te+E+65535,E=Math.floor(c/65536),Te=c-E*65536,c=Ie+E+65535,E=Math.floor(c/65536),Ie=c-E*65536,c=ue+E+65535,E=Math.floor(c/65536),ue=c-E*65536,D+=E-1+37*(E-1),E=1,c=D+E+65535,E=Math.floor(c/65536),D=c-E*65536,c=M+E+65535,E=Math.floor(c/65536),M=c-E*65536,c=W+E+65535,E=Math.floor(c/65536),W=c-E*65536,c=X+E+65535,E=Math.floor(c/65536),X=c-E*65536,c=fe+E+65535,E=Math.floor(c/65536),fe=c-E*65536,c=te+E+65535,E=Math.floor(c/65536),te=c-E*65536,c=ze+E+65535,E=Math.floor(c/65536),ze=c-E*65536,c=le+E+65535,E=Math.floor(c/65536),le=c-E*65536,c=we+E+65535,E=Math.floor(c/65536),we=c-E*65536,c=Ee+E+65535,E=Math.floor(c/65536),Ee=c-E*65536,c=ke+E+65535,E=Math.floor(c/65536),ke=c-E*65536,c=Re+E+65535,E=Math.floor(c/65536),Re=c-E*65536,c=Se+E+65535,E=Math.floor(c/65536),Se=c-E*65536,c=Te+E+65535,E=Math.floor(c/65536),Te=c-E*65536,c=Ie+E+65535,E=Math.floor(c/65536),Ie=c-E*65536,c=ue+E+65535,E=Math.floor(c/65536),ue=c-E*65536,D+=E-1+37*(E-1),d[0]=D,d[1]=M,d[2]=W,d[3]=X,d[4]=fe,d[5]=te,d[6]=ze,d[7]=le,d[8]=we,d[9]=Ee,d[10]=ke,d[11]=Re,d[12]=Se,d[13]=Te,d[14]=Ie,d[15]=ue}function yt(d,_){Ce(d,_,_)}function On(d,_){var y=n(),c;for(c=0;c<16;c++)y[c]=_[c];for(c=253;c>=0;c--)yt(y,y),c!==2&&c!==4&&Ce(y,y,_);for(c=0;c<16;c++)d[c]=y[c]}function bl(d,_){var y=n(),c;for(c=0;c<16;c++)y[c]=_[c];for(c=250;c>=0;c--)yt(y,y),c!==1&&Ce(y,y,_);for(c=0;c<16;c++)d[c]=y[c]}function Ts(d,_,y){var c=new Uint8Array(32),E=new Float64Array(80),D,M,W=n(),X=n(),fe=n(),te=n(),ze=n(),le=n();for(M=0;M<31;M++)c[M]=_[M];for(c[31]=_[31]&127|64,c[0]&=248,Xe(E,y),M=0;M<16;M++)X[M]=E[M],te[M]=W[M]=fe[M]=0;for(W[0]=te[0]=1,M=254;M>=0;--M)D=c[M>>>3]>>>(M&7)&1,ie(W,X,D),ie(fe,te,D),He(ze,W,fe),wt(W,W,fe),He(fe,X,te),wt(X,X,te),yt(te,ze),yt(le,W),Ce(W,fe,W),Ce(fe,X,ze),He(ze,W,fe),wt(W,W,fe),yt(X,W),wt(fe,te,le),Ce(W,fe,u),He(W,W,te),Ce(fe,fe,W),Ce(W,te,le),Ce(te,X,E),yt(X,ze),ie(W,X,D),ie(fe,te,D);for(M=0;M<16;M++)E[M+16]=W[M],E[M+32]=fe[M],E[M+48]=X[M],E[M+64]=te[M];var we=E.subarray(32),Ee=E.subarray(16);return On(we,we),Ce(Ee,Ee,we),ve(d,Ee),0}function _r(d,_){return Ts(d,_,s)}function ji(d,_){return r(_,32),_r(d,_)}function Wr(d,_,y){var c=new Uint8Array(32);return Ts(c,y,_),Z(d,i,c,ee)}var Is=Qt,Lo=zn;function Mo(d,_,y,c,E,D){var M=new Uint8Array(32);return Wr(M,E,D),Is(d,_,y,c,M)}function Ol(d,_,y,c,E,D){var M=new Uint8Array(32);return Wr(M,E,D),Lo(d,_,y,c,M)}var Dl=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function Vl(d,_,y,c){for(var E=new Int32Array(16),D=new Int32Array(16),M,W,X,fe,te,ze,le,we,Ee,ke,Re,Se,Te,Ie,ue,pe,re,ce,de,se,j,B,G,K,q,Y,ye=d[0],De=d[1],Ve=d[2],Ne=d[3],A=d[4],xe=d[5],Ue=d[6],Fe=d[7],be=_[0],je=_[1],ge=_[2],it=_[3],Ke=_[4],et=_[5],ft=_[6],at=_[7],Tt=0;c>=128;){for(de=0;de<16;de++)se=8*de+Tt,E[de]=y[se+0]<<24|y[se+1]<<16|y[se+2]<<8|y[se+3],D[de]=y[se+4]<<24|y[se+5]<<16|y[se+6]<<8|y[se+7];for(de=0;de<80;de++)if(M=ye,W=De,X=Ve,fe=Ne,te=A,ze=xe,le=Ue,we=Fe,Ee=be,ke=je,Re=ge,Se=it,Te=Ke,Ie=et,ue=ft,pe=at,j=Fe,B=at,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=(A>>>14|Ke<<18)^(A>>>18|Ke<<14)^(Ke>>>9|A<<23),B=(Ke>>>14|A<<18)^(Ke>>>18|A<<14)^(A>>>9|Ke<<23),G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,j=A&xe^~A&Ue,B=Ke&et^~Ke&ft,G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,j=Dl[de*2],B=Dl[de*2+1],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,j=E[de%16],B=D[de%16],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,re=q&65535|Y<<16,ce=G&65535|K<<16,j=re,B=ce,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=(ye>>>28|be<<4)^(be>>>2|ye<<30)^(be>>>7|ye<<25),B=(be>>>28|ye<<4)^(ye>>>2|be<<30)^(ye>>>7|be<<25),G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,j=ye&De^ye&Ve^De&Ve,B=be&je^be&ge^je&ge,G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,we=q&65535|Y<<16,pe=G&65535|K<<16,j=fe,B=Se,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=re,B=ce,G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,fe=q&65535|Y<<16,Se=G&65535|K<<16,De=M,Ve=W,Ne=X,A=fe,xe=te,Ue=ze,Fe=le,ye=we,je=Ee,ge=ke,it=Re,Ke=Se,et=Te,ft=Ie,at=ue,be=pe,de%16===15)for(se=0;se<16;se++)j=E[se],B=D[se],G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=E[(se+9)%16],B=D[(se+9)%16],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,re=E[(se+1)%16],ce=D[(se+1)%16],j=(re>>>1|ce<<31)^(re>>>8|ce<<24)^re>>>7,B=(ce>>>1|re<<31)^(ce>>>8|re<<24)^(ce>>>7|re<<25),G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,re=E[(se+14)%16],ce=D[(se+14)%16],j=(re>>>19|ce<<13)^(ce>>>29|re<<3)^re>>>6,B=(ce>>>19|re<<13)^(re>>>29|ce<<3)^(ce>>>6|re<<26),G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,E[se]=q&65535|Y<<16,D[se]=G&65535|K<<16;j=ye,B=be,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=d[0],B=_[0],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,d[0]=ye=q&65535|Y<<16,_[0]=be=G&65535|K<<16,j=De,B=je,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=d[1],B=_[1],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,d[1]=De=q&65535|Y<<16,_[1]=je=G&65535|K<<16,j=Ve,B=ge,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=d[2],B=_[2],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,d[2]=Ve=q&65535|Y<<16,_[2]=ge=G&65535|K<<16,j=Ne,B=it,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=d[3],B=_[3],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,d[3]=Ne=q&65535|Y<<16,_[3]=it=G&65535|K<<16,j=A,B=Ke,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=d[4],B=_[4],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,d[4]=A=q&65535|Y<<16,_[4]=Ke=G&65535|K<<16,j=xe,B=et,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=d[5],B=_[5],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,d[5]=xe=q&65535|Y<<16,_[5]=et=G&65535|K<<16,j=Ue,B=ft,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=d[6],B=_[6],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,d[6]=Ue=q&65535|Y<<16,_[6]=ft=G&65535|K<<16,j=Fe,B=at,G=B&65535,K=B>>>16,q=j&65535,Y=j>>>16,j=d[7],B=_[7],G+=B&65535,K+=B>>>16,q+=j&65535,Y+=j>>>16,K+=G>>>16,q+=K>>>16,Y+=q>>>16,d[7]=Fe=q&65535|Y<<16,_[7]=at=G&65535|K<<16,Tt+=128,c-=128}return c}function nr(d,_,y){var c=new Int32Array(8),E=new Int32Array(8),D=new Uint8Array(256),M,W=y;for(c[0]=1779033703,c[1]=3144134277,c[2]=1013904242,c[3]=2773480762,c[4]=1359893119,c[5]=2600822924,c[6]=528734635,c[7]=1541459225,E[0]=4089235720,E[1]=2227873595,E[2]=4271175723,E[3]=1595750129,E[4]=2917565137,E[5]=725511199,E[6]=4215389547,E[7]=327033209,Vl(c,E,_,y),y%=128,M=0;M<y;M++)D[M]=_[W-y+M];for(D[y]=128,y=256-128*(y<112?1:0),D[y-9]=0,O(D,y-8,W/536870912|0,W<<3),Vl(c,E,D,y),M=0;M<8;M++)O(d,8*M,c[M],E[M]);return 0}function qr(d,_){var y=n(),c=n(),E=n(),D=n(),M=n(),W=n(),X=n(),fe=n(),te=n();wt(y,d[1],d[0]),wt(te,_[1],_[0]),Ce(y,y,te),He(c,d[0],d[1]),He(te,_[0],_[1]),Ce(c,c,te),Ce(E,d[3],_[3]),Ce(E,E,p),Ce(D,d[2],_[2]),He(D,D,D),wt(M,c,y),wt(W,D,E),He(X,D,E),He(fe,c,y),Ce(d[0],M,W),Ce(d[1],fe,X),Ce(d[2],X,W),Ce(d[3],M,fe)}function Uo(d,_,y){var c;for(c=0;c<4;c++)ie(d[c],_[c],y)}function Fo(d,_){var y=n(),c=n(),E=n();On(E,_[2]),Ce(y,_[0],E),Ce(c,_[1],E),ve(d,c),d[31]^=rt(y)<<7}function Bi(d,_,y){var c,E;for(cn(d[0],o),cn(d[1],l),cn(d[2],l),cn(d[3],o),E=255;E>=0;--E)c=y[E/8|0]>>(E&7)&1,Uo(d,_,c),qr(_,d),qr(d,d),Uo(d,_,c)}function Hr(d,_){var y=[n(),n(),n(),n()];cn(y[0],g),cn(y[1],v),cn(y[2],l),Ce(y[3],g,v),Bi(d,y,_)}function Ss(d,_,y){var c=new Uint8Array(64),E=[n(),n(),n(),n()],D;for(y||r(_,32),nr(c,_,32),c[0]&=248,c[31]&=127,c[31]|=64,Hr(E,c),Fo(d,E),D=0;D<32;D++)_[D+32]=d[D];return 0}var Et=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function Ct(d,_){var y,c,E,D;for(c=63;c>=32;--c){for(y=0,E=c-32,D=c-12;E<D;++E)_[E]+=y-16*_[c]*Et[E-(c-32)],y=Math.floor((_[E]+128)/256),_[E]-=y*256;_[E]+=y,_[c]=0}for(y=0,E=0;E<32;E++)_[E]+=y-(_[31]>>4)*Et[E],y=_[E]>>8,_[E]&=255;for(E=0;E<32;E++)_[E]-=y*Et[E];for(c=0;c<32;c++)_[c+1]+=_[c]>>8,d[c]=_[c]&255}function Gr(d){var _=new Float64Array(64),y;for(y=0;y<64;y++)_[y]=d[y];for(y=0;y<64;y++)d[y]=0;Ct(d,_)}function jo(d,_,y,c){var E=new Uint8Array(64),D=new Uint8Array(64),M=new Uint8Array(64),W,X,fe=new Float64Array(64),te=[n(),n(),n(),n()];nr(E,c,32),E[0]&=248,E[31]&=127,E[31]|=64;var ze=y+64;for(W=0;W<y;W++)d[64+W]=_[W];for(W=0;W<32;W++)d[32+W]=E[32+W];for(nr(M,d.subarray(32),y+32),Gr(M),Hr(te,M),Fo(d,te),W=32;W<64;W++)d[W]=c[W];for(nr(D,d,y+64),Gr(D),W=0;W<64;W++)fe[W]=0;for(W=0;W<32;W++)fe[W]=M[W];for(W=0;W<32;W++)for(X=0;X<32;X++)fe[W+X]+=D[W]*E[X];return Ct(d.subarray(32),fe),ze}function Ll(d,_){var y=n(),c=n(),E=n(),D=n(),M=n(),W=n(),X=n();return cn(d[2],l),Xe(d[1],_),yt(E,d[1]),Ce(D,E,f),wt(E,E,d[2]),He(D,d[2],D),yt(M,D),yt(W,M),Ce(X,W,M),Ce(y,X,E),Ce(y,y,D),bl(y,y),Ce(y,y,E),Ce(y,y,D),Ce(y,y,D),Ce(d[0],y,D),yt(c,d[0]),Ce(c,c,D),Oe(c,E)&&Ce(d[0],d[0],R),yt(c,d[0]),Ce(c,c,D),Oe(c,E)?-1:(rt(d[0])===_[31]>>7&&wt(d[0],o,d[0]),Ce(d[3],d[0],d[1]),0)}function Bo(d,_,y,c){var E,D=new Uint8Array(32),M=new Uint8Array(64),W=[n(),n(),n(),n()],X=[n(),n(),n(),n()];if(y<64||Ll(X,c))return-1;for(E=0;E<y;E++)d[E]=_[E];for(E=0;E<32;E++)d[E+32]=c[E];if(nr(M,d,y),Gr(M),Bi(W,X,M),Hr(X,_.subarray(32)),qr(W,X),Fo(D,W),y-=64,P(_,0,D,0)){for(E=0;E<y;E++)d[E]=0;return-1}for(E=0;E<y;E++)d[E]=_[E+64];return y}var vr=32,zi=24,Qr=32,rr=16,$i=32,As=32,wr=32,Yr=32,xs=32,Xr=zi,zo=Qr,$o=rr,Ft=64,ir=32,$n=64,Rs=32,Er=64;e.lowlevel={crypto_core_hsalsa20:Z,crypto_stream_xor:C,crypto_stream:S,crypto_stream_salsa20_xor:x,crypto_stream_salsa20:T,crypto_onetimeauth:V,crypto_onetimeauth_verify:k,crypto_verify_16:F,crypto_verify_32:P,crypto_secretbox:Qt,crypto_secretbox_open:zn,crypto_scalarmult:Ts,crypto_scalarmult_base:_r,crypto_box_beforenm:Wr,crypto_box_afternm:Is,crypto_box:Mo,crypto_box_open:Ol,crypto_box_keypair:ji,crypto_hash:nr,crypto_sign:jo,crypto_sign_keypair:Ss,crypto_sign_open:Bo,crypto_secretbox_KEYBYTES:vr,crypto_secretbox_NONCEBYTES:zi,crypto_secretbox_ZEROBYTES:Qr,crypto_secretbox_BOXZEROBYTES:rr,crypto_scalarmult_BYTES:$i,crypto_scalarmult_SCALARBYTES:As,crypto_box_PUBLICKEYBYTES:wr,crypto_box_SECRETKEYBYTES:Yr,crypto_box_BEFORENMBYTES:xs,crypto_box_NONCEBYTES:Xr,crypto_box_ZEROBYTES:zo,crypto_box_BOXZEROBYTES:$o,crypto_sign_BYTES:Ft,crypto_sign_PUBLICKEYBYTES:ir,crypto_sign_SECRETKEYBYTES:$n,crypto_sign_SEEDBYTES:Rs,crypto_hash_BYTES:Er,gf:n,D:f,L:Et,pack25519:ve,unpack25519:Xe,M:Ce,A:He,S:yt,Z:wt,pow2523:bl,add:qr,set25519:cn,modL:Ct,scalarmult:Bi,scalarbase:Hr};function Ko(d,_){if(d.length!==vr)throw new Error("bad key size");if(_.length!==zi)throw new Error("bad nonce size")}function jt(d,_){if(d.length!==wr)throw new Error("bad public key size");if(_.length!==Yr)throw new Error("bad secret key size")}function Yt(){for(var d=0;d<arguments.length;d++)if(!(arguments[d]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function Jr(d){for(var _=0;_<d.length;_++)d[_]=0}e.randomBytes=function(d){var _=new Uint8Array(d);return r(_,d),_},e.secretbox=function(d,_,y){Yt(d,_,y),Ko(y,_);for(var c=new Uint8Array(Qr+d.length),E=new Uint8Array(c.length),D=0;D<d.length;D++)c[D+Qr]=d[D];return Qt(E,c,c.length,_,y),E.subarray(rr)},e.secretbox.open=function(d,_,y){Yt(d,_,y),Ko(y,_);for(var c=new Uint8Array(rr+d.length),E=new Uint8Array(c.length),D=0;D<d.length;D++)c[D+rr]=d[D];return c.length<32||zn(E,c,c.length,_,y)!==0?null:E.subarray(Qr)},e.secretbox.keyLength=vr,e.secretbox.nonceLength=zi,e.secretbox.overheadLength=rr,e.scalarMult=function(d,_){if(Yt(d,_),d.length!==As)throw new Error("bad n size");if(_.length!==$i)throw new Error("bad p size");var y=new Uint8Array($i);return Ts(y,d,_),y},e.scalarMult.base=function(d){if(Yt(d),d.length!==As)throw new Error("bad n size");var _=new Uint8Array($i);return _r(_,d),_},e.scalarMult.scalarLength=As,e.scalarMult.groupElementLength=$i,e.box=function(d,_,y,c){var E=e.box.before(y,c);return e.secretbox(d,_,E)},e.box.before=function(d,_){Yt(d,_),jt(d,_);var y=new Uint8Array(xs);return Wr(y,d,_),y},e.box.after=e.secretbox,e.box.open=function(d,_,y,c){var E=e.box.before(y,c);return e.secretbox.open(d,_,E)},e.box.open.after=e.secretbox.open,e.box.keyPair=function(){var d=new Uint8Array(wr),_=new Uint8Array(Yr);return ji(d,_),{publicKey:d,secretKey:_}},e.box.keyPair.fromSecretKey=function(d){if(Yt(d),d.length!==Yr)throw new Error("bad secret key size");var _=new Uint8Array(wr);return _r(_,d),{publicKey:_,secretKey:new Uint8Array(d)}},e.box.publicKeyLength=wr,e.box.secretKeyLength=Yr,e.box.sharedKeyLength=xs,e.box.nonceLength=Xr,e.box.overheadLength=e.secretbox.overheadLength,e.sign=function(d,_){if(Yt(d,_),_.length!==$n)throw new Error("bad secret key size");var y=new Uint8Array(Ft+d.length);return jo(y,d,d.length,_),y},e.sign.open=function(d,_){if(Yt(d,_),_.length!==ir)throw new Error("bad public key size");var y=new Uint8Array(d.length),c=Bo(y,d,d.length,_);if(c<0)return null;for(var E=new Uint8Array(c),D=0;D<E.length;D++)E[D]=y[D];return E},e.sign.detached=function(d,_){for(var y=e.sign(d,_),c=new Uint8Array(Ft),E=0;E<c.length;E++)c[E]=y[E];return c},e.sign.detached.verify=function(d,_,y){if(Yt(d,_,y),_.length!==Ft)throw new Error("bad signature size");if(y.length!==ir)throw new Error("bad public key size");var c=new Uint8Array(Ft+d.length),E=new Uint8Array(Ft+d.length),D;for(D=0;D<Ft;D++)c[D]=_[D];for(D=0;D<d.length;D++)c[D+Ft]=d[D];return Bo(E,c,c.length,y)>=0},e.sign.keyPair=function(){var d=new Uint8Array(ir),_=new Uint8Array($n);return Ss(d,_),{publicKey:d,secretKey:_}},e.sign.keyPair.fromSecretKey=function(d){if(Yt(d),d.length!==$n)throw new Error("bad secret key size");for(var _=new Uint8Array(ir),y=0;y<_.length;y++)_[y]=d[32+y];return{publicKey:_,secretKey:new Uint8Array(d)}},e.sign.keyPair.fromSeed=function(d){if(Yt(d),d.length!==Rs)throw new Error("bad seed size");for(var _=new Uint8Array(ir),y=new Uint8Array($n),c=0;c<32;c++)y[c]=d[c];return Ss(_,y,!0),{publicKey:_,secretKey:y}},e.sign.publicKeyLength=ir,e.sign.secretKeyLength=$n,e.sign.seedLength=Rs,e.sign.signatureLength=Ft,e.hash=function(d){Yt(d);var _=new Uint8Array(Er);return nr(_,d,d.length),_},e.hash.hashLength=Er,e.verify=function(d,_){return Yt(d,_),d.length===0||_.length===0||d.length!==_.length?!1:L(d,0,_,0,d.length)===0},e.setPRNG=function(d){r=d},function(){var d=typeof self<"u"?self.crypto||self.msCrypto:null;if(d&&d.getRandomValues){var _=65536;e.setPRNG(function(y,c){var E,D=new Uint8Array(c);for(E=0;E<c;E+=_)d.getRandomValues(D.subarray(E,E+Math.min(c-E,_)));for(E=0;E<c;E++)y[E]=D[E];Jr(D)})}else typeof CO<"u"&&(d=bO,d&&d.randomBytes&&e.setPRNG(function(y,c){var E,D=d.randomBytes(c);for(E=0;E<c;E++)y[E]=D[E];Jr(D)}))}()})(t.exports?t.exports:self.nacl=self.nacl||{})})(A1);var or=A1.exports,x1={exports:{}};(function(t){(function(e,n){t.exports?t.exports=n():(e.nacl||(e.nacl={}),e.nacl.util=n())})(z1,function(){var e={};function n(r){if(!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(r))throw new TypeError("invalid encoding")}return e.decodeUTF8=function(r){if(typeof r!="string")throw new TypeError("expected string");var i,s=unescape(encodeURIComponent(r)),o=new Uint8Array(s.length);for(i=0;i<s.length;i++)o[i]=s.charCodeAt(i);return o},e.encodeUTF8=function(r){var i,s=[];for(i=0;i<r.length;i++)s.push(String.fromCharCode(r[i]));return decodeURIComponent(escape(s.join("")))},typeof atob>"u"?typeof Buffer.from<"u"?(e.encodeBase64=function(r){return Buffer.from(r).toString("base64")},e.decodeBase64=function(r){return n(r),new Uint8Array(Array.prototype.slice.call(Buffer.from(r,"base64"),0))}):(e.encodeBase64=function(r){return new Buffer(r).toString("base64")},e.decodeBase64=function(r){return n(r),new Uint8Array(Array.prototype.slice.call(new Buffer(r,"base64"),0))}):(e.encodeBase64=function(r){var i,s=[],o=r.length;for(i=0;i<o;i++)s.push(String.fromCharCode(r[i]));return btoa(s.join(""))},e.decodeBase64=function(r){n(r);var i,s=atob(r),o=new Uint8Array(s.length);for(i=0;i<s.length;i++)o[i]=s.charCodeAt(i);return o}),e})})(x1);var Dn=x1.exports;class OO{constructor(){Yo(this,"db",null);Yo(this,"DB_NAME","video-chat-db");Yo(this,"DB_VERSION",1)}async initialize(){this.db||(this.db=await gl(this.DB_NAME,this.DB_VERSION,{upgrade(e){if(!e.objectStoreNames.contains("messages")){const n=e.createObjectStore("messages",{keyPath:"messageId"});n.createIndex("by-conversation","conversationId"),n.createIndex("by-timestamp","timestamp")}if(e.objectStoreNames.contains("conversations")||e.createObjectStore("conversations",{keyPath:"conversationId"}).createIndex("by-lastMessageTime","lastMessageTime"),!e.objectStoreNames.contains("contacts")){const n=e.createObjectStore("contacts",{keyPath:"uid"});n.createIndex("by-displayName","displayName"),n.createIndex("by-status","status")}if(!e.objectStoreNames.contains("callHistory")){const n=e.createObjectStore("callHistory",{keyPath:"callId"});n.createIndex("by-startTime","startTime"),n.createIndex("by-remoteUser","remoteUserId")}e.objectStoreNames.contains("userKeys")||e.createObjectStore("userKeys",{keyPath:"userId"})}}))}async saveMessage(e){this.db||await this.initialize(),await this.db.put("messages",e)}async getMessages(e,n=50){return this.db||await this.initialize(),(await this.db.getAllFromIndex("messages","by-conversation",e)).sort((i,s)=>i.timestamp-s.timestamp).slice(-n)}async getMessage(e){return this.db||await this.initialize(),await this.db.get("messages",e)}async deleteMessage(e){this.db||await this.initialize(),await this.db.delete("messages",e)}async saveConversation(e){this.db||await this.initialize(),await this.db.put("conversations",e)}async getConversation(e){return this.db||await this.initialize(),await this.db.get("conversations",e)}async getConversations(){return this.db||await this.initialize(),(await this.db.getAll("conversations")).sort((n,r)=>r.lastMessageTime-n.lastMessageTime)}async deleteConversation(e){this.db||await this.initialize(),await this.db.delete("conversations",e);const n=await this.getMessages(e,1e3),r=this.db.transaction("messages","readwrite");for(const i of n)await r.store.delete(i.messageId)}async saveContact(e){this.db||await this.initialize(),await this.db.put("contacts",e)}async getContact(e){return this.db||await this.initialize(),await this.db.get("contacts",e)}async getContacts(){return this.db||await this.initialize(),await this.db.getAll("contacts")}async deleteContact(e){this.db||await this.initialize(),await this.db.delete("contacts",e)}async saveCallHistory(e){this.db||await this.initialize(),await this.db.put("callHistory",e)}async getCallHistory(e=50){return this.db||await this.initialize(),(await this.db.getAll("callHistory")).sort((r,i)=>i.startTime-r.startTime).slice(0,e)}async getCallsWithUser(e,n=20){return this.db||await this.initialize(),(await this.db.getAllFromIndex("callHistory","by-remoteUser",e)).sort((i,s)=>s.startTime-i.startTime).slice(0,n)}async saveUserKeys(e,n,r){this.db||await this.initialize(),await this.db.put("userKeys",{userId:e,publicKey:n,secretKey:r,createdAt:Date.now()})}async getUserKeys(e){this.db||await this.initialize();const n=await this.db.get("userKeys",e);if(n)return{publicKey:n.publicKey,secretKey:n.secretKey}}async deleteOldMessages(e,n=500){this.db||await this.initialize();const r=await this.getMessages(e,1e3);if(r.length>n){const i=r.slice(0,r.length-n),s=this.db.transaction("messages","readwrite");for(const o of i)await s.store.delete(o.messageId)}}async clearAllData(){this.db||await this.initialize(),await this.db.clear("messages"),await this.db.clear("conversations"),await this.db.clear("contacts"),await this.db.clear("callHistory"),await this.db.clear("userKeys")}}const Qs=new OO;class $m{static getKeyPair(){return this.keyPair||(this.keyPair=or.box.keyPair()),this.keyPair}static generateKeyPair(){const e=or.box.keyPair();return{publicKey:Dn.encodeBase64(e.publicKey),secretKey:Dn.encodeBase64(e.secretKey)}}static async getOrCreateUserKeys(e){const n=await Qs.getUserKeys(e);if(n)return n;const r=this.generateKeyPair();return await Qs.saveUserKeys(e,r.publicKey,r.secretKey),r}static encryptMessage(e,n,r){const i=or.randomBytes(or.box.nonceLength),s=or.box.before(Dn.decodeBase64(n),Dn.decodeBase64(r)),o=or.box.after(Dn.decodeUTF8(e),i,s);return{ciphertext:Dn.encodeBase64(o),nonce:Dn.encodeBase64(i)}}static decryptMessage(e,n,r,i){const s=or.box.before(Dn.decodeBase64(r),Dn.decodeBase64(i)),o=or.box.open.after(Dn.decodeBase64(e),Dn.decodeBase64(n),s);if(!o)throw new Error("Failed to decrypt message - invalid keys or corrupted data");return Dn.encodeUTF8(o)}static async hashData(e){const n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}static generateNonce(){return or.randomBytes(or.box.nonceLength)}}Yo($m,"keyPair",null);async function R1(t,e){const n=await Qs.getUserKeys(t);if(n)return e!=null&&e.publicKey&&e.publicKey!==n.publicKey?e.secretKey?(await Qs.saveUserKeys(t,e.publicKey,e.secretKey),{publicKey:e.publicKey,secretKey:e.secretKey,updatedRemote:!1}):{...n,updatedRemote:!0}:{...n,updatedRemote:!1};if(e!=null&&e.publicKey&&(e!=null&&e.secretKey))return await Qs.saveUserKeys(t,e.publicKey,e.secretKey),{publicKey:e.publicKey,secretKey:e.secretKey,updatedRemote:!1};const r=$m.generateKeyPair();return await Qs.saveUserKeys(t,r.publicKey,r.secretKey),{...r,updatedRemote:!0}}function P1(t,e){if(!t)return null;const{secretKey:n,...r}=t;return{...r,publicKey:e}}const xc=Hx((t,e)=>({user:null,userProfile:null,loading:!1,error:null,isAuthenticated:!1,signup:async(n,r,i)=>{t({loading:!0,error:null});try{const{user:s}=await vC(Gs,n,r),o=await $m.getOrCreateUserKeys(s.uid),l={email:n,displayName:i,photoURL:null,status:"online",lastSeen:new Date,createdAt:new Date,isVerified:!1,blockedUsers:[],friends:[],publicKey:o.publicKey,settings:{privacyLevel:"friends_only",notificationsEnabled:!0}};await Ob(fi(Gi,"users",s.uid),{...l,uid:s.uid,publicKey:o.publicKey,secretKey:o.secretKey,createdAt:du(),lastSeen:du()});const u={...s,displayName:i,photoURL:null};t({user:u,userProfile:{...l,uid:s.uid},isAuthenticated:!0})}catch(s){const o=s.message;throw t({error:o}),s}finally{t({loading:!1})}},login:async(n,r)=>{t({loading:!0,error:null});try{const{user:i}=await wC(Gs,n,r),o=(await JT(fi(Gi,"users",i.uid))).data(),l=await R1(i.uid,o),u=!(o!=null&&o.publicKey)||!(o!=null&&o.secretKey)||l.updatedRemote;await Lu(fi(Gi,"users",i.uid),{status:"online",lastSeen:du(),publicKey:l.publicKey,...u?{secretKey:l.secretKey}:{}});const f={...i,displayName:(o==null?void 0:o.displayName)||i.displayName||i.email,photoURL:(o==null?void 0:o.photoURL)||i.photoURL};t({user:f,userProfile:P1(o,l.publicKey),isAuthenticated:!0})}catch(i){const s=i.message;throw t({error:s}),i}finally{t({loading:!1})}},logout:async()=>{t({loading:!0,error:null});try{const n=Gs.currentUser;n&&await Lu(fi(Gi,"users",n.uid),{status:"offline",lastSeen:du()}),await AC(Gs),t({user:null,userProfile:null,isAuthenticated:!1})}catch(n){const r=n.message;throw t({error:r}),n}finally{t({loading:!1})}},setUser:n=>t({user:n,isAuthenticated:!!n}),setUserProfile:n=>t({userProfile:n}),setError:n=>t({error:n}),clearError:()=>t({error:null}),updateProfile:async n=>{const{user:r,userProfile:i}=e();if(!(!r||!i))try{await Lu(fi(Gi,"users",r.uid),n),t({userProfile:{...i,...n}})}catch(s){throw console.error("Failed to update profile:",s),s}}}));SC(Gs,async t=>{if(t){const n=(await JT(fi(Gi,"users",t.uid))).data(),r=await R1(t.uid,n);(!(n!=null&&n.publicKey)||!(n!=null&&n.secretKey)||r.updatedRemote)&&await Lu(fi(Gi,"users",t.uid),{publicKey:r.publicKey,secretKey:r.secretKey}),xc.setState({user:t,userProfile:P1(n,r.publicKey),isAuthenticated:!0})}else xc.setState({user:null,userProfile:null,isAuthenticated:!1})});function C1({size:t="medium",className:e=""}){const n={small:"w-4 h-4",medium:"w-8 h-8",large:"w-12 h-12"};return st.jsx("div",{className:`${n[t]} ${e}`,children:st.jsxs("svg",{className:"animate-spin w-full h-full text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[st.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),st.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}function DO({children:t}){const{isAuthenticated:e,loading:n}=xc();return n?st.jsx("div",{className:"min-h-screen flex items-center justify-center",children:st.jsx(C1,{size:"large"})}):e?st.jsx(st.Fragment,{children:t}):st.jsx(xu,{to:"/login",replace:!0})}const VO=oe.lazy(()=>bp(()=>import("./Login-DgcUS4UL.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>({default:t.Login}))),LO=oe.lazy(()=>bp(()=>import("./Signup-ChlxK1_k.js"),__vite__mapDeps([3,4,1,2]),import.meta.url).then(t=>({default:t.Signup}))),MO=oe.lazy(()=>bp(()=>import("./ChatPage-VqUmI7oa.js"),__vite__mapDeps([5,1,4]),import.meta.url).then(t=>({default:t.ChatPage})));function UO(){const{isAuthenticated:t}=xc();return st.jsx(yx,{children:st.jsx(oe.Suspense,{fallback:st.jsx(C1,{}),children:st.jsxs(cx,{children:[st.jsx(ca,{path:"/login",element:t?st.jsx(xu,{to:"/chat"}):st.jsx(VO,{})}),st.jsx(ca,{path:"/signup",element:t?st.jsx(xu,{to:"/chat"}):st.jsx(LO,{})}),st.jsx(ca,{path:"/chat",element:st.jsx(DO,{children:st.jsx(MO,{})})}),st.jsx(ca,{path:"/",element:st.jsx(xu,{to:t?"/chat":"/login"})})]})})})}ph.createRoot(document.getElementById("root")).render(st.jsx(Bd.StrictMode,{children:st.jsx(UO,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(t=>{console.error("Service worker registration failed:",t)})});export{XO as A,GO as B,Qs as C,HO as D,$m as E,C1 as L,Rw as a,jO as b,Hx as c,Gs as d,iD as e,rD as f,Lu as g,nD as h,fi as i,st as j,Gi as k,KO as l,PO as m,JO as n,tD as o,YO as p,WO as q,oe as r,du as s,JT as t,xc as u,eD as v,qO as w,ZO as x,Ob as y,QO as z};
