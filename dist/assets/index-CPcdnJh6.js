(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();function id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vo={exports:{}},ei={},Go={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),ld=Symbol.for("react.portal"),sd=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),dd=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.memo"),hd=Symbol.for("react.lazy"),Ds=Symbol.iterator;function gd(e){return e===null||typeof e!="object"?null:(e=Ds&&e[Ds]||e["@@iterator"],typeof e=="function"?e:null)}var $o={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qo=Object.assign,Ko={};function lr(e,n,r){this.props=e,this.context=n,this.refs=Ko,this.updater=r||$o}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qo(){}qo.prototype=lr.prototype;function Ol(e,n,r){this.props=e,this.context=n,this.refs=Ko,this.updater=r||$o}var Al=Ol.prototype=new qo;Al.constructor=Ol;Qo(Al,lr.prototype);Al.isPureReactComponent=!0;var Rs=Array.isArray,Yo=Object.prototype.hasOwnProperty,Ul={current:null},Xo={key:!0,ref:!0,__self:!0,__source:!0};function bo(e,n,r){var t,i={},l=null,s=null;if(n!=null)for(t in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(l=""+n.key),n)Yo.call(n,t)&&!Xo.hasOwnProperty(t)&&(i[t]=n[t]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var a=Array(o),c=0;c<o;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(t in o=e.defaultProps,o)i[t]===void 0&&(i[t]=o[t]);return{$$typeof:qr,type:e,key:l,ref:s,props:i,_owner:Ul.current}}function md(e,n){return{$$typeof:qr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function wd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var js=/\/+/g;function vi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?wd(""+e.key):n.toString(36)}function yt(e,n,r,t,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qr:case ld:s=!0}}if(s)return s=e,i=i(s),e=t===""?"."+vi(s,0):t,Rs(i)?(r="",e!=null&&(r=e.replace(js,"$&/")+"/"),yt(i,n,r,"",function(c){return c})):i!=null&&(Hl(i)&&(i=md(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(js,"$&/")+"/")+e)),n.push(i)),1;if(s=0,t=t===""?".":t+":",Rs(e))for(var o=0;o<e.length;o++){l=e[o];var a=t+vi(l,o);s+=yt(l,n,r,a,i)}else if(a=gd(e),typeof a=="function")for(e=a.call(e),o=0;!(l=e.next()).done;)l=l.value,a=t+vi(l,o++),s+=yt(l,n,r,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function nt(e,n,r){if(e==null)return e;var t=[],i=0;return yt(e,t,"","",function(l){return n.call(r,l,i++)}),t}function yd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},vt={transition:null},vd={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:vt,ReactCurrentOwner:Ul};L.Children={map:nt,forEach:function(e,n,r){nt(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return nt(e,function(){n++}),n},toArray:function(e){return nt(e,function(n){return n})||[]},only:function(e){if(!Hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=lr;L.Fragment=sd;L.Profiler=ad;L.PureComponent=Ol;L.StrictMode=od;L.Suspense=fd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vd;L.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Qo({},e.props),i=e.key,l=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,s=Ul.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in n)Yo.call(n,a)&&!Xo.hasOwnProperty(a)&&(t[a]=n[a]===void 0&&o!==void 0?o[a]:n[a])}var a=arguments.length-2;if(a===1)t.children=r;else if(1<a){o=Array(a);for(var c=0;c<a;c++)o[c]=arguments[c+2];t.children=o}return{$$typeof:qr,type:e.type,key:i,ref:l,props:t,_owner:s}};L.createContext=function(e){return e={$$typeof:dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ud,_context:e},e.Consumer=e};L.createElement=bo;L.createFactory=function(e){var n=bo.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:cd,render:e}};L.isValidElement=Hl;L.lazy=function(e){return{$$typeof:hd,_payload:{_status:-1,_result:e},_init:yd}};L.memo=function(e,n){return{$$typeof:pd,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=vt.transition;vt.transition={};try{e()}finally{vt.transition=n}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,n){return oe.current.useCallback(e,n)};L.useContext=function(e){return oe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};L.useEffect=function(e,n){return oe.current.useEffect(e,n)};L.useId=function(){return oe.current.useId()};L.useImperativeHandle=function(e,n,r){return oe.current.useImperativeHandle(e,n,r)};L.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return oe.current.useMemo(e,n)};L.useReducer=function(e,n,r){return oe.current.useReducer(e,n,r)};L.useRef=function(e){return oe.current.useRef(e)};L.useState=function(e){return oe.current.useState(e)};L.useSyncExternalStore=function(e,n,r){return oe.current.useSyncExternalStore(e,n,r)};L.useTransition=function(){return oe.current.useTransition()};L.version="18.2.0";Go.exports=L;var Ie=Go.exports;const Jo=id(Ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd=Ie,Sd=Symbol.for("react.element"),Cd=Symbol.for("react.fragment"),Ed=Object.prototype.hasOwnProperty,xd=kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pd={key:!0,ref:!0,__self:!0,__source:!0};function Zo(e,n,r){var t,i={},l=null,s=null;r!==void 0&&(l=""+r),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(s=n.ref);for(t in n)Ed.call(n,t)&&!Pd.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)i[t]===void 0&&(i[t]=n[t]);return{$$typeof:Sd,type:e,key:l,ref:s,props:i,_owner:xd.current}}ei.Fragment=Cd;ei.jsx=Zo;ei.jsxs=Zo;Vo.exports=ei;var R=Vo.exports,$i={},ea={exports:{}},ye={},na={exports:{}},ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,z){var T=E.length;E.push(z);e:for(;0<T;){var G=T-1>>>1,Y=E[G];if(0<i(Y,z))E[G]=z,E[T]=Y,T=G;else break e}}function r(E){return E.length===0?null:E[0]}function t(E){if(E.length===0)return null;var z=E[0],T=E.pop();if(T!==z){E[0]=T;e:for(var G=0,Y=E.length,Zr=Y>>>1;G<Zr;){var wn=2*(G+1)-1,yi=E[wn],yn=wn+1,et=E[yn];if(0>i(yi,T))yn<Y&&0>i(et,yi)?(E[G]=et,E[yn]=T,G=yn):(E[G]=yi,E[wn]=T,G=wn);else if(yn<Y&&0>i(et,T))E[G]=et,E[yn]=T,G=yn;else break e}}return z}function i(E,z){var T=E.sortIndex-z.sortIndex;return T!==0?T:E.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var a=[],c=[],g=1,h=null,p=3,v=!1,k=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var z=r(c);z!==null;){if(z.callback===null)t(c);else if(z.startTime<=E)t(c),z.sortIndex=z.expirationTime,n(a,z);else break;z=r(c)}}function m(E){if(y=!1,f(E),!k)if(r(a)!==null)k=!0,mi(C);else{var z=r(c);z!==null&&wi(m,z.startTime-E)}}function C(E,z){k=!1,y&&(y=!1,d(N),N=-1),v=!0;var T=p;try{for(f(z),h=r(a);h!==null&&(!(h.expirationTime>z)||E&&!Ne());){var G=h.callback;if(typeof G=="function"){h.callback=null,p=h.priorityLevel;var Y=G(h.expirationTime<=z);z=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===r(a)&&t(a),f(z)}else t(a);h=r(a)}if(h!==null)var Zr=!0;else{var wn=r(c);wn!==null&&wi(m,wn.startTime-z),Zr=!1}return Zr}finally{h=null,p=T,v=!1}}var x=!1,P=null,N=-1,V=5,F=-1;function Ne(){return!(e.unstable_now()-F<V)}function ar(){if(P!==null){var E=e.unstable_now();F=E;var z=!0;try{z=P(!0,E)}finally{z?ur():(x=!1,P=null)}}else x=!1}var ur;if(typeof u=="function")ur=function(){u(ar)};else if(typeof MessageChannel<"u"){var Ms=new MessageChannel,td=Ms.port2;Ms.port1.onmessage=ar,ur=function(){td.postMessage(null)}}else ur=function(){_(ar,0)};function mi(E){P=E,x||(x=!0,ur())}function wi(E,z){N=_(function(){E(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,mi(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var T=p;p=z;try{return E()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var T=p;p=E;try{return z()}finally{p=T}},e.unstable_scheduleCallback=function(E,z,T){var G=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?G+T:G):T=G,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=T+Y,E={id:g++,callback:z,priorityLevel:E,startTime:T,expirationTime:Y,sortIndex:-1},T>G?(E.sortIndex=T,n(c,E),r(a)===null&&E===r(c)&&(y?(d(N),N=-1):y=!0,wi(m,T-G))):(E.sortIndex=Y,n(a,E),k||v||(k=!0,mi(C))),E},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(E){var z=p;return function(){var T=p;p=z;try{return E.apply(this,arguments)}finally{p=T}}}})(ra);na.exports=ra;var Nd=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Ie,we=Nd;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ia=new Set,Fr={};function Fn(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(Fr[e]=n,e=0;e<n.length;e++)ia.add(n[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qi=Object.prototype.hasOwnProperty,zd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Is={},Bs={};function _d(e){return Qi.call(Bs,e)?!0:Qi.call(Is,e)?!1:zd.test(e)?Bs[e]=!0:(Is[e]=!0,!1)}function Td(e,n,r,t){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ld(e,n,r,t){if(n===null||typeof n>"u"||Td(e,n,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,r,t,i,l,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=s}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wl=/[\-:]([a-z])/g;function Vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Wl,Vl);ee[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Wl,Vl);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Wl,Vl);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gl(e,n,r,t){var i=ee.hasOwnProperty(n)?ee[n]:null;(i!==null?i.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ld(n,r,i,t)&&(r=null),t||i===null?_d(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,t=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,t?e.setAttributeNS(t,n,r):e.setAttribute(n,r))))}var Ye=ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rt=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Ki=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),sa=Symbol.for("react.context"),Ql=Symbol.for("react.forward_ref"),qi=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),oa=Symbol.for("react.offscreen"),Os=Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,ki;function yr(e){if(ki===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);ki=n&&n[1]||""}return`
`+ki+e}var Si=!1;function Ci(e,n){if(!e||Si)return"";Si=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var t=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){t=c}e.call(n.prototype)}else{try{throw Error()}catch(c){t=c}e()}}catch(c){if(c&&t&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=t.stack.split(`
`),s=i.length-1,o=l.length-1;1<=s&&0<=o&&i[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==l[o]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=o);break}}}finally{Si=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?yr(e):""}function Fd(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=Ci(e.type,!1),e;case 11:return e=Ci(e.type.render,!1),e;case 1:return e=Ci(e.type,!0),e;default:return""}}function Xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case Rn:return"Portal";case Ki:return"Profiler";case $l:return"StrictMode";case qi:return"Suspense";case Yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sa:return(e.displayName||"Context")+".Consumer";case la:return(e._context.displayName||"Context")+".Provider";case Ql:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kl:return n=e.displayName||null,n!==null?n:Xi(e.type)||"Memo";case be:n=e._payload,e=e._init;try{return Xi(e(n))}catch{}}return null}function Md(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xi(n);case 8:return n===$l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function aa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Dd(e){var n=aa(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function tt(e){e._valueTracker||(e._valueTracker=Dd(e))}function ua(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),t="";return e&&(t=aa(e)?e.checked?"true":"false":e.value),e=t,e!==r?(n.setValue(e),!0):!1}function Lt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bi(e,n){var r=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function As(e,n){var r=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;r=fn(n.value!=null?n.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function da(e,n){n=n.checked,n!=null&&Gl(e,"checked",n,!1)}function Ji(e,n){da(e,n);var r=fn(n.value),t=n.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Zi(e,n.type,r):n.hasOwnProperty("defaultValue")&&Zi(e,n.type,fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Us(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Zi(e,n,r){(n!=="number"||Lt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vr=Array.isArray;function Qn(e,n,r,t){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&t&&(e[r].defaultSelected=!0)}else{for(r=""+fn(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,t&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function el(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hs(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(w(92));if(vr(r)){if(1<r.length)throw Error(w(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:fn(r)}}function ca(e,n){var r=fn(n.value),t=fn(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function Ws(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var it,pa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,t,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,t,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(it=it||document.createElement("div"),it.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=it.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rd=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){Rd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Cr[n]=Cr[e]})});function ha(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+n).trim():n+"px"}function ga(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var t=r.indexOf("--")===0,i=ha(r,n[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,i):e[r]=i}}var jd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,n){if(n){if(jd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function tl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Kn=null,qn=null;function Vs(e){if(e=br(e)){if(typeof ll!="function")throw Error(w(280));var n=e.stateNode;n&&(n=li(n),ll(e.stateNode,e.type,n))}}function ma(e){Kn?qn?qn.push(e):qn=[e]:Kn=e}function wa(){if(Kn){var e=Kn,n=qn;if(qn=Kn=null,Vs(e),n)for(e=0;e<n.length;e++)Vs(n[e])}}function ya(e,n){return e(n)}function va(){}var Ei=!1;function ka(e,n,r){if(Ei)return e(n,r);Ei=!0;try{return ya(e,n,r)}finally{Ei=!1,(Kn!==null||qn!==null)&&(va(),wa())}}function Dr(e,n){var r=e.stateNode;if(r===null)return null;var t=li(r);if(t===null)return null;r=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(w(231,n,typeof r));return r}var sl=!1;if($e)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){sl=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{sl=!1}function Id(e,n,r,t,i,l,s,o,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(r,c)}catch(g){this.onError(g)}}var Er=!1,Ft=null,Mt=!1,ol=null,Bd={onError:function(e){Er=!0,Ft=e}};function Od(e,n,r,t,i,l,s,o,a){Er=!1,Ft=null,Id.apply(Bd,arguments)}function Ad(e,n,r,t,i,l,s,o,a){if(Od.apply(this,arguments),Er){if(Er){var c=Ft;Er=!1,Ft=null}else throw Error(w(198));Mt||(Mt=!0,ol=c)}}function Mn(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Sa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Gs(e){if(Mn(e)!==e)throw Error(w(188))}function Ud(e){var n=e.alternate;if(!n){if(n=Mn(e),n===null)throw Error(w(188));return n!==e?null:e}for(var r=e,t=n;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){r=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return Gs(i),e;if(l===t)return Gs(i),n;l=l.sibling}throw Error(w(188))}if(r.return!==t.return)r=i,t=l;else{for(var s=!1,o=i.child;o;){if(o===r){s=!0,r=i,t=l;break}if(o===t){s=!0,t=i,r=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===r){s=!0,r=l,t=i;break}if(o===t){s=!0,t=l,r=i;break}o=o.sibling}if(!s)throw Error(w(189))}}if(r.alternate!==t)throw Error(w(190))}if(r.tag!==3)throw Error(w(188));return r.stateNode.current===r?e:n}function Ca(e){return e=Ud(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ea(e);if(n!==null)return n;e=e.sibling}return null}var xa=we.unstable_scheduleCallback,$s=we.unstable_cancelCallback,Hd=we.unstable_shouldYield,Wd=we.unstable_requestPaint,$=we.unstable_now,Vd=we.unstable_getCurrentPriorityLevel,Yl=we.unstable_ImmediatePriority,Pa=we.unstable_UserBlockingPriority,Dt=we.unstable_NormalPriority,Gd=we.unstable_LowPriority,Na=we.unstable_IdlePriority,ni=null,Oe=null;function $d(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:qd,Qd=Math.log,Kd=Math.LN2;function qd(e){return e>>>=0,e===0?32:31-(Qd(e)/Kd|0)|0}var lt=64,st=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rt(e,n){var r=e.pendingLanes;if(r===0)return 0;var t=0,i=e.suspendedLanes,l=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~i;o!==0?t=kr(o):(l&=s,l!==0&&(t=kr(l)))}else s=r&~i,s!==0?t=kr(s):l!==0&&(t=kr(l));if(t===0)return 0;if(n!==0&&n!==t&&!(n&i)&&(i=t&-t,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(t&4&&(t|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)r=31-Fe(n),i=1<<r,t|=e[r],n&=~i;return t}function Yd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xd(e,n){for(var r=e.suspendedLanes,t=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Fe(l),o=1<<s,a=i[s];a===-1?(!(o&r)||o&t)&&(i[s]=Yd(o,n)):a<=n&&(e.expiredLanes|=o),l&=~o}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function za(){var e=lt;return lt<<=1,!(lt&4194240)&&(lt=64),e}function xi(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Yr(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Fe(n),e[n]=r}function bd(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Fe(r),l=1<<i;n[i]=0,t[i]=-1,e[i]=-1,r&=~l}}function Xl(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var t=31-Fe(r),i=1<<t;i&n|e[t]&n&&(e[t]|=n),r&=~i}}var D=0;function _a(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ta,bl,La,Fa,Ma,ul=!1,ot=[],tn=null,ln=null,sn=null,Rr=new Map,jr=new Map,Ze=[],Jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qs(e,n){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(n.pointerId)}}function fr(e,n,r,t,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:r,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},n!==null&&(n=br(n),n!==null&&bl(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Zd(e,n,r,t,i){switch(n){case"focusin":return tn=fr(tn,e,n,r,t,i),!0;case"dragenter":return ln=fr(ln,e,n,r,t,i),!0;case"mouseover":return sn=fr(sn,e,n,r,t,i),!0;case"pointerover":var l=i.pointerId;return Rr.set(l,fr(Rr.get(l)||null,e,n,r,t,i)),!0;case"gotpointercapture":return l=i.pointerId,jr.set(l,fr(jr.get(l)||null,e,n,r,t,i)),!0}return!1}function Da(e){var n=Sn(e.target);if(n!==null){var r=Mn(n);if(r!==null){if(n=r.tag,n===13){if(n=Sa(r),n!==null){e.blockedOn=n,Ma(e.priority,function(){La(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=dl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);il=t,r.target.dispatchEvent(t),il=null}else return n=br(r),n!==null&&bl(n),e.blockedOn=r,!1;n.shift()}return!0}function Ks(e,n,r){kt(e)&&r.delete(n)}function ec(){ul=!1,tn!==null&&kt(tn)&&(tn=null),ln!==null&&kt(ln)&&(ln=null),sn!==null&&kt(sn)&&(sn=null),Rr.forEach(Ks),jr.forEach(Ks)}function pr(e,n){e.blockedOn===n&&(e.blockedOn=null,ul||(ul=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,ec)))}function Ir(e){function n(i){return pr(i,e)}if(0<ot.length){pr(ot[0],e);for(var r=1;r<ot.length;r++){var t=ot[r];t.blockedOn===e&&(t.blockedOn=null)}}for(tn!==null&&pr(tn,e),ln!==null&&pr(ln,e),sn!==null&&pr(sn,e),Rr.forEach(n),jr.forEach(n),r=0;r<Ze.length;r++)t=Ze[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<Ze.length&&(r=Ze[0],r.blockedOn===null);)Da(r),r.blockedOn===null&&Ze.shift()}var Yn=Ye.ReactCurrentBatchConfig,jt=!0;function nc(e,n,r,t){var i=D,l=Yn.transition;Yn.transition=null;try{D=1,Jl(e,n,r,t)}finally{D=i,Yn.transition=l}}function rc(e,n,r,t){var i=D,l=Yn.transition;Yn.transition=null;try{D=4,Jl(e,n,r,t)}finally{D=i,Yn.transition=l}}function Jl(e,n,r,t){if(jt){var i=dl(e,n,r,t);if(i===null)Ri(e,n,t,It,r),Qs(e,t);else if(Zd(i,e,n,r,t))t.stopPropagation();else if(Qs(e,t),n&4&&-1<Jd.indexOf(e)){for(;i!==null;){var l=br(i);if(l!==null&&Ta(l),l=dl(e,n,r,t),l===null&&Ri(e,n,t,It,r),l===i)break;i=l}i!==null&&t.stopPropagation()}else Ri(e,n,t,null,r)}}var It=null;function dl(e,n,r,t){if(It=null,e=ql(t),e=Sn(e),e!==null)if(n=Mn(e),n===null)e=null;else if(r=n.tag,r===13){if(e=Sa(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return It=e,null}function Ra(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vd()){case Yl:return 1;case Pa:return 4;case Dt:case Gd:return 16;case Na:return 536870912;default:return 16}default:return 16}}var nn=null,Zl=null,St=null;function ja(){if(St)return St;var e,n=Zl,r=n.length,t,i="value"in nn?nn.value:nn.textContent,l=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[l-t];t++);return St=i.slice(e,1<t?1-t:void 0)}function Ct(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function at(){return!0}function qs(){return!1}function ve(e){function n(r,t,i,l,s){this._reactName=r,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?at:qs,this.isPropagationStopped=qs,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=at)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=at)},persist:function(){},isPersistent:at}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=ve(sr),Xr=H({},sr,{view:0,detail:0}),tc=ve(Xr),Pi,Ni,hr,ri=H({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(Pi=e.screenX-hr.screenX,Ni=e.screenY-hr.screenY):Ni=Pi=0,hr=e),Pi)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),Ys=ve(ri),ic=H({},ri,{dataTransfer:0}),lc=ve(ic),sc=H({},Xr,{relatedTarget:0}),zi=ve(sc),oc=H({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),ac=ve(oc),uc=H({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dc=ve(uc),cc=H({},sr,{data:0}),Xs=ve(cc),fc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hc[e])?!!n[e]:!1}function ns(){return gc}var mc=H({},Xr,{key:function(e){if(e.key){var n=fc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ct(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(e){return e.type==="keypress"?Ct(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ct(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wc=ve(mc),yc=H({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=ve(yc),vc=H({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),kc=ve(vc),Sc=H({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cc=ve(Sc),Ec=H({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xc=ve(Ec),Pc=[9,13,27,32],rs=$e&&"CompositionEvent"in window,xr=null;$e&&"documentMode"in document&&(xr=document.documentMode);var Nc=$e&&"TextEvent"in window&&!xr,Ia=$e&&(!rs||xr&&8<xr&&11>=xr),Js=" ",Zs=!1;function Ba(e,n){switch(e){case"keyup":return Pc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function zc(e,n){switch(e){case"compositionend":return Oa(n);case"keypress":return n.which!==32?null:(Zs=!0,Js);case"textInput":return e=n.data,e===Js&&Zs?null:e;default:return null}}function _c(e,n){if(In)return e==="compositionend"||!rs&&Ba(e,n)?(e=ja(),St=Zl=nn=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ia&&n.locale!=="ko"?null:n.data;default:return null}}var Tc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Tc[e.type]:n==="textarea"}function Aa(e,n,r,t){ma(t),n=Bt(n,"onChange"),0<n.length&&(r=new es("onChange","change",null,r,t),e.push({event:r,listeners:n}))}var Pr=null,Br=null;function Lc(e){Xa(e,0)}function ti(e){var n=An(e);if(ua(n))return e}function Fc(e,n){if(e==="change")return n}var Ua=!1;if($e){var _i;if($e){var Ti="oninput"in document;if(!Ti){var no=document.createElement("div");no.setAttribute("oninput","return;"),Ti=typeof no.oninput=="function"}_i=Ti}else _i=!1;Ua=_i&&(!document.documentMode||9<document.documentMode)}function ro(){Pr&&(Pr.detachEvent("onpropertychange",Ha),Br=Pr=null)}function Ha(e){if(e.propertyName==="value"&&ti(Br)){var n=[];Aa(n,Br,e,ql(e)),ka(Lc,n)}}function Mc(e,n,r){e==="focusin"?(ro(),Pr=n,Br=r,Pr.attachEvent("onpropertychange",Ha)):e==="focusout"&&ro()}function Dc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(Br)}function Rc(e,n){if(e==="click")return ti(n)}function jc(e,n){if(e==="input"||e==="change")return ti(n)}function Ic(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var De=typeof Object.is=="function"?Object.is:Ic;function Or(e,n){if(De(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var i=r[t];if(!Qi.call(n,i)||!De(e[i],n[i]))return!1}return!0}function to(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function io(e,n){var r=to(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=to(r)}}function Wa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Va(){for(var e=window,n=Lt();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Lt(e.document)}return n}function ts(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bc(e){var n=Va(),r=e.focusedElem,t=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Wa(r.ownerDocument.documentElement,r)){if(t!==null&&ts(r)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(t.start,i);t=t.end===void 0?l:Math.min(t.end,i),!e.extend&&l>t&&(i=t,t=l,l=i),i=io(r,l);var s=io(r,t);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>t?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oc=$e&&"documentMode"in document&&11>=document.documentMode,Bn=null,cl=null,Nr=null,fl=!1;function lo(e,n,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fl||Bn==null||Bn!==Lt(t)||(t=Bn,"selectionStart"in t&&ts(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Nr&&Or(Nr,t)||(Nr=t,t=Bt(cl,"onSelect"),0<t.length&&(n=new es("onSelect","select",null,n,r),e.push({event:n,listeners:t}),n.target=Bn)))}function ut(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var On={animationend:ut("Animation","AnimationEnd"),animationiteration:ut("Animation","AnimationIteration"),animationstart:ut("Animation","AnimationStart"),transitionend:ut("Transition","TransitionEnd")},Li={},Ga={};$e&&(Ga=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function ii(e){if(Li[e])return Li[e];if(!On[e])return e;var n=On[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Ga)return Li[e]=n[r];return e}var $a=ii("animationend"),Qa=ii("animationiteration"),Ka=ii("animationstart"),qa=ii("transitionend"),Ya=new Map,so="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,n){Ya.set(e,n),Fn(n,[e])}for(var Fi=0;Fi<so.length;Fi++){var Mi=so[Fi],Ac=Mi.toLowerCase(),Uc=Mi[0].toUpperCase()+Mi.slice(1);hn(Ac,"on"+Uc)}hn($a,"onAnimationEnd");hn(Qa,"onAnimationIteration");hn(Ka,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(qa,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function oo(e,n,r){var t=e.type||"unknown-event";e.currentTarget=r,Ad(t,n,void 0,e),e.currentTarget=null}function Xa(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],i=t.event;t=t.listeners;e:{var l=void 0;if(n)for(var s=t.length-1;0<=s;s--){var o=t[s],a=o.instance,c=o.currentTarget;if(o=o.listener,a!==l&&i.isPropagationStopped())break e;oo(i,o,c),l=a}else for(s=0;s<t.length;s++){if(o=t[s],a=o.instance,c=o.currentTarget,o=o.listener,a!==l&&i.isPropagationStopped())break e;oo(i,o,c),l=a}}}if(Mt)throw e=ol,Mt=!1,ol=null,e}function I(e,n){var r=n[wl];r===void 0&&(r=n[wl]=new Set);var t=e+"__bubble";r.has(t)||(ba(n,e,2,!1),r.add(t))}function Di(e,n,r){var t=0;n&&(t|=4),ba(r,e,t,n)}var dt="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[dt]){e[dt]=!0,ia.forEach(function(r){r!=="selectionchange"&&(Hc.has(r)||Di(r,!1,e),Di(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[dt]||(n[dt]=!0,Di("selectionchange",!1,n))}}function ba(e,n,r,t){switch(Ra(n)){case 1:var i=nc;break;case 4:i=rc;break;default:i=Jl}r=i.bind(null,n,r,e),i=void 0,!sl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),t?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function Ri(e,n,r,t,i){var l=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var o=t.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=t.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Sn(o),s===null)return;if(a=s.tag,a===5||a===6){t=l=s;continue e}o=o.parentNode}}t=t.return}ka(function(){var c=l,g=ql(r),h=[];e:{var p=Ya.get(e);if(p!==void 0){var v=es,k=e;switch(e){case"keypress":if(Ct(r)===0)break e;case"keydown":case"keyup":v=wc;break;case"focusin":k="focus",v=zi;break;case"focusout":k="blur",v=zi;break;case"beforeblur":case"afterblur":v=zi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kc;break;case $a:case Qa:case Ka:v=ac;break;case qa:v=Cc;break;case"scroll":v=tc;break;case"wheel":v=xc;break;case"copy":case"cut":case"paste":v=dc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=bs}var y=(n&4)!==0,_=!y&&e==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var u=c,f;u!==null;){f=u;var m=f.stateNode;if(f.tag===5&&m!==null&&(f=m,d!==null&&(m=Dr(u,d),m!=null&&y.push(Ur(u,m,f)))),_)break;u=u.return}0<y.length&&(p=new v(p,k,null,r,g),h.push({event:p,listeners:y}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&r!==il&&(k=r.relatedTarget||r.fromElement)&&(Sn(k)||k[Qe]))break e;if((v||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,v?(k=r.relatedTarget||r.toElement,v=c,k=k?Sn(k):null,k!==null&&(_=Mn(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(y=Ys,m="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=bs,m="onPointerLeave",d="onPointerEnter",u="pointer"),_=v==null?p:An(v),f=k==null?p:An(k),p=new y(m,u+"leave",v,r,g),p.target=_,p.relatedTarget=f,m=null,Sn(g)===c&&(y=new y(d,u+"enter",k,r,g),y.target=f,y.relatedTarget=_,m=y),_=m,v&&k)n:{for(y=v,d=k,u=0,f=y;f;f=Dn(f))u++;for(f=0,m=d;m;m=Dn(m))f++;for(;0<u-f;)y=Dn(y),u--;for(;0<f-u;)d=Dn(d),f--;for(;u--;){if(y===d||d!==null&&y===d.alternate)break n;y=Dn(y),d=Dn(d)}y=null}else y=null;v!==null&&ao(h,p,v,y,!1),k!==null&&_!==null&&ao(h,_,k,y,!0)}}e:{if(p=c?An(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var C=Fc;else if(eo(p))if(Ua)C=jc;else{C=Dc;var x=Mc}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Rc);if(C&&(C=C(e,c))){Aa(h,C,r,g);break e}x&&x(e,p,c),e==="focusout"&&(x=p._wrapperState)&&x.controlled&&p.type==="number"&&Zi(p,"number",p.value)}switch(x=c?An(c):window,e){case"focusin":(eo(x)||x.contentEditable==="true")&&(Bn=x,cl=c,Nr=null);break;case"focusout":Nr=cl=Bn=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,lo(h,r,g);break;case"selectionchange":if(Oc)break;case"keydown":case"keyup":lo(h,r,g)}var P;if(rs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else In?Ba(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(Ia&&r.locale!=="ko"&&(In||N!=="onCompositionStart"?N==="onCompositionEnd"&&In&&(P=ja()):(nn=g,Zl="value"in nn?nn.value:nn.textContent,In=!0)),x=Bt(c,N),0<x.length&&(N=new Xs(N,e,null,r,g),h.push({event:N,listeners:x}),P?N.data=P:(P=Oa(r),P!==null&&(N.data=P)))),(P=Nc?zc(e,r):_c(e,r))&&(c=Bt(c,"onBeforeInput"),0<c.length&&(g=new Xs("onBeforeInput","beforeinput",null,r,g),h.push({event:g,listeners:c}),g.data=P))}Xa(h,n)})}function Ur(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Bt(e,n){for(var r=n+"Capture",t=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Dr(e,r),l!=null&&t.unshift(Ur(e,l,i)),l=Dr(e,n),l!=null&&t.push(Ur(e,l,i))),e=e.return}return t}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ao(e,n,r,t,i){for(var l=n._reactName,s=[];r!==null&&r!==t;){var o=r,a=o.alternate,c=o.stateNode;if(a!==null&&a===t)break;o.tag===5&&c!==null&&(o=c,i?(a=Dr(r,l),a!=null&&s.unshift(Ur(r,a,o))):i||(a=Dr(r,l),a!=null&&s.push(Ur(r,a,o)))),r=r.return}s.length!==0&&e.push({event:n,listeners:s})}var Wc=/\r\n?/g,Vc=/\u0000|\uFFFD/g;function uo(e){return(typeof e=="string"?e:""+e).replace(Wc,`
`).replace(Vc,"")}function ct(e,n,r){if(n=uo(n),uo(e)!==n&&r)throw Error(w(425))}function Ot(){}var pl=null,hl=null;function gl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,Gc=typeof clearTimeout=="function"?clearTimeout:void 0,co=typeof Promise=="function"?Promise:void 0,$c=typeof queueMicrotask=="function"?queueMicrotask:typeof co<"u"?function(e){return co.resolve(null).then(e).catch(Qc)}:ml;function Qc(e){setTimeout(function(){throw e})}function ji(e,n){var r=n,t=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(t===0){e.removeChild(i),Ir(n);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=i}while(r);Ir(n)}function on(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),Be="__reactFiber$"+or,Hr="__reactProps$"+or,Qe="__reactContainer$"+or,wl="__reactEvents$"+or,Kc="__reactListeners$"+or,qc="__reactHandles$"+or;function Sn(e){var n=e[Be];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Qe]||r[Be]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=fo(e);e!==null;){if(r=e[Be])return r;e=fo(e)}return n}e=r,r=e.parentNode}return null}function br(e){return e=e[Be]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function li(e){return e[Hr]||null}var yl=[],Un=-1;function gn(e){return{current:e}}function B(e){0>Un||(e.current=yl[Un],yl[Un]=null,Un--)}function j(e,n){Un++,yl[Un]=e.current,e.current=n}var pn={},ie=gn(pn),ce=gn(!1),Nn=pn;function Zn(e,n){var r=e.type.contextTypes;if(!r)return pn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=n[l];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function fe(e){return e=e.childContextTypes,e!=null}function At(){B(ce),B(ie)}function po(e,n,r){if(ie.current!==pn)throw Error(w(168));j(ie,n),j(ce,r)}function Ja(e,n,r){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var i in t)if(!(i in n))throw Error(w(108,Md(e)||"Unknown",i));return H({},r,t)}function Ut(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Nn=ie.current,j(ie,e),j(ce,ce.current),!0}function ho(e,n,r){var t=e.stateNode;if(!t)throw Error(w(169));r?(e=Ja(e,n,Nn),t.__reactInternalMemoizedMergedChildContext=e,B(ce),B(ie),j(ie,e)):B(ce),j(ce,r)}var He=null,si=!1,Ii=!1;function Za(e){He===null?He=[e]:He.push(e)}function Yc(e){si=!0,Za(e)}function mn(){if(!Ii&&He!==null){Ii=!0;var e=0,n=D;try{var r=He;for(D=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}He=null,si=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),xa(Yl,mn),i}finally{D=n,Ii=!1}}return null}var Hn=[],Wn=0,Ht=null,Wt=0,ke=[],Se=0,zn=null,We=1,Ve="";function vn(e,n){Hn[Wn++]=Wt,Hn[Wn++]=Ht,Ht=e,Wt=n}function eu(e,n,r){ke[Se++]=We,ke[Se++]=Ve,ke[Se++]=zn,zn=e;var t=We;e=Ve;var i=32-Fe(t)-1;t&=~(1<<i),r+=1;var l=32-Fe(n)+i;if(30<l){var s=i-i%5;l=(t&(1<<s)-1).toString(32),t>>=s,i-=s,We=1<<32-Fe(n)+i|r<<i|t,Ve=l+e}else We=1<<l|r<<i|t,Ve=e}function is(e){e.return!==null&&(vn(e,1),eu(e,1,0))}function ls(e){for(;e===Ht;)Ht=Hn[--Wn],Hn[Wn]=null,Wt=Hn[--Wn],Hn[Wn]=null;for(;e===zn;)zn=ke[--Se],ke[Se]=null,Ve=ke[--Se],ke[Se]=null,We=ke[--Se],ke[Se]=null}var me=null,ge=null,O=!1,Le=null;function nu(e,n){var r=Ce(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function go(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,me=e,ge=on(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,me=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=zn!==null?{id:We,overflow:Ve}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Ce(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,me=e,ge=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(O){var n=ge;if(n){var r=n;if(!go(e,n)){if(vl(e))throw Error(w(418));n=on(r.nextSibling);var t=me;n&&go(e,n)?nu(t,r):(e.flags=e.flags&-4097|2,O=!1,me=e)}}else{if(vl(e))throw Error(w(418));e.flags=e.flags&-4097|2,O=!1,me=e}}}function mo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;me=e}function ft(e){if(e!==me)return!1;if(!O)return mo(e),O=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gl(e.type,e.memoizedProps)),n&&(n=ge)){if(vl(e))throw ru(),Error(w(418));for(;n;)nu(e,n),n=on(n.nextSibling)}if(mo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){ge=on(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=me?on(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=ge;e;)e=on(e.nextSibling)}function er(){ge=me=null,O=!1}function ss(e){Le===null?Le=[e]:Le.push(e)}var Xc=Ye.ReactCurrentBatchConfig;function _e(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}var Vt=gn(null),Gt=null,Vn=null,os=null;function as(){os=Vn=Gt=null}function us(e){var n=Vt.current;B(Vt),e._currentValue=n}function Sl(e,n,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===r)break;e=e.return}}function Xn(e,n){Gt=e,os=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function xe(e){var n=e._currentValue;if(os!==e)if(e={context:e,memoizedValue:n,next:null},Vn===null){if(Gt===null)throw Error(w(308));Vn=e,Gt.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return n}var Cn=null;function ds(e){Cn===null?Cn=[e]:Cn.push(e)}function tu(e,n,r,t){var i=n.interleaved;return i===null?(r.next=r,ds(n)):(r.next=i.next,i.next=r),n.interleaved=r,Ke(e,t)}function Ke(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Je=!1;function cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function an(e,n,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,M&2){var i=t.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n,Ke(e,r)}return i=t.interleaved,i===null?(n.next=n,ds(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ke(e,r)}function Et(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,Xl(e,r)}}function wo(e,n){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=s:l=l.next=s,r=r.next}while(r!==null);l===null?i=l=n:l=l.next=n}else i=l=n;r={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function $t(e,n,r,t){var i=e.updateQueue;Je=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var a=o,c=a.next;a.next=null,s===null?l=c:s.next=c,s=a;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==s&&(o===null?g.firstBaseUpdate=c:o.next=c,g.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;s=0,g=c=a=null,o=l;do{var p=o.lane,v=o.eventTime;if((t&p)===p){g!==null&&(g=g.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,y=o;switch(p=n,v=r,y.tag){case 1:if(k=y.payload,typeof k=="function"){h=k.call(v,h,p);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,p=typeof k=="function"?k.call(v,h,p):k,p==null)break e;h=H({},h,p);break e;case 2:Je=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else v={eventTime:v,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(c=g=v,a=h):g=g.next=v,s|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(g===null&&(a=h),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=g,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Tn|=s,e.lanes=s,e.memoizedState=h}}function yo(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],i=t.callback;if(i!==null){if(t.callback=null,t=r,typeof i!="function")throw Error(w(191,i));i.call(t)}}}var lu=new ta.Component().refs;function Cl(e,n,r,t){n=e.memoizedState,r=r(t,n),r=r==null?n:H({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var oi={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var t=se(),i=dn(e),l=Ge(t,i);l.payload=n,r!=null&&(l.callback=r),n=an(e,l,i),n!==null&&(Me(n,e,i,t),Et(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var t=se(),i=dn(e),l=Ge(t,i);l.tag=1,l.payload=n,r!=null&&(l.callback=r),n=an(e,l,i),n!==null&&(Me(n,e,i,t),Et(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=se(),t=dn(e),i=Ge(r,t);i.tag=2,n!=null&&(i.callback=n),n=an(e,i,t),n!==null&&(Me(n,e,t,r),Et(n,e,t))}};function vo(e,n,r,t,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,l,s):n.prototype&&n.prototype.isPureReactComponent?!Or(r,t)||!Or(i,l):!0}function su(e,n,r){var t=!1,i=pn,l=n.contextType;return typeof l=="object"&&l!==null?l=xe(l):(i=fe(n)?Nn:ie.current,t=n.contextTypes,l=(t=t!=null)?Zn(e,i):pn),n=new n(r,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=oi,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function ko(e,n,r,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,t),n.state!==e&&oi.enqueueReplaceState(n,n.state,null)}function El(e,n,r,t){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=lu,cs(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=xe(l):(l=fe(n)?Nn:ie.current,i.context=Zn(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Cl(e,n,l,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&oi.enqueueReplaceState(i,i.state,null),$t(e,r,i,t),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(w(309));var t=r.stateNode}if(!t)throw Error(w(147,e));var i=t,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(s){var o=i.refs;o===lu&&(o=i.refs={}),s===null?delete o[l]:o[l]=s},n._stringRef=l,n)}if(typeof e!="string")throw Error(w(284));if(!r._owner)throw Error(w(290,e))}return e}function pt(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function So(e){var n=e._init;return n(e._payload)}function ou(e){function n(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function r(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function t(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=cn(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,u,f,m){return u===null||u.tag!==6?(u=Vi(f,d.mode,m),u.return=d,u):(u=i(u,f),u.return=d,u)}function a(d,u,f,m){var C=f.type;return C===jn?g(d,u,f.props.children,m,f.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===be&&So(C)===u.type)?(m=i(u,f.props),m.ref=gr(d,u,f),m.return=d,m):(m=Tt(f.type,f.key,f.props,null,d.mode,m),m.ref=gr(d,u,f),m.return=d,m)}function c(d,u,f,m){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Gi(f,d.mode,m),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function g(d,u,f,m,C){return u===null||u.tag!==7?(u=Pn(f,d.mode,m,C),u.return=d,u):(u=i(u,f),u.return=d,u)}function h(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Vi(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rt:return f=Tt(u.type,u.key,u.props,null,d.mode,f),f.ref=gr(d,null,u),f.return=d,f;case Rn:return u=Gi(u,d.mode,f),u.return=d,u;case be:var m=u._init;return h(d,m(u._payload),f)}if(vr(u)||dr(u))return u=Pn(u,d.mode,f,null),u.return=d,u;pt(d,u)}return null}function p(d,u,f,m){var C=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:o(d,u,""+f,m);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rt:return f.key===C?a(d,u,f,m):null;case Rn:return f.key===C?c(d,u,f,m):null;case be:return C=f._init,p(d,u,C(f._payload),m)}if(vr(f)||dr(f))return C!==null?null:g(d,u,f,m,null);pt(d,f)}return null}function v(d,u,f,m,C){if(typeof m=="string"&&m!==""||typeof m=="number")return d=d.get(f)||null,o(u,d,""+m,C);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case rt:return d=d.get(m.key===null?f:m.key)||null,a(u,d,m,C);case Rn:return d=d.get(m.key===null?f:m.key)||null,c(u,d,m,C);case be:var x=m._init;return v(d,u,f,x(m._payload),C)}if(vr(m)||dr(m))return d=d.get(f)||null,g(u,d,m,C,null);pt(u,m)}return null}function k(d,u,f,m){for(var C=null,x=null,P=u,N=u=0,V=null;P!==null&&N<f.length;N++){P.index>N?(V=P,P=null):V=P.sibling;var F=p(d,P,f[N],m);if(F===null){P===null&&(P=V);break}e&&P&&F.alternate===null&&n(d,P),u=l(F,u,N),x===null?C=F:x.sibling=F,x=F,P=V}if(N===f.length)return r(d,P),O&&vn(d,N),C;if(P===null){for(;N<f.length;N++)P=h(d,f[N],m),P!==null&&(u=l(P,u,N),x===null?C=P:x.sibling=P,x=P);return O&&vn(d,N),C}for(P=t(d,P);N<f.length;N++)V=v(P,d,N,f[N],m),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?N:V.key),u=l(V,u,N),x===null?C=V:x.sibling=V,x=V);return e&&P.forEach(function(Ne){return n(d,Ne)}),O&&vn(d,N),C}function y(d,u,f,m){var C=dr(f);if(typeof C!="function")throw Error(w(150));if(f=C.call(f),f==null)throw Error(w(151));for(var x=C=null,P=u,N=u=0,V=null,F=f.next();P!==null&&!F.done;N++,F=f.next()){P.index>N?(V=P,P=null):V=P.sibling;var Ne=p(d,P,F.value,m);if(Ne===null){P===null&&(P=V);break}e&&P&&Ne.alternate===null&&n(d,P),u=l(Ne,u,N),x===null?C=Ne:x.sibling=Ne,x=Ne,P=V}if(F.done)return r(d,P),O&&vn(d,N),C;if(P===null){for(;!F.done;N++,F=f.next())F=h(d,F.value,m),F!==null&&(u=l(F,u,N),x===null?C=F:x.sibling=F,x=F);return O&&vn(d,N),C}for(P=t(d,P);!F.done;N++,F=f.next())F=v(P,d,N,F.value,m),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?N:F.key),u=l(F,u,N),x===null?C=F:x.sibling=F,x=F);return e&&P.forEach(function(ar){return n(d,ar)}),O&&vn(d,N),C}function _(d,u,f,m){if(typeof f=="object"&&f!==null&&f.type===jn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rt:e:{for(var C=f.key,x=u;x!==null;){if(x.key===C){if(C=f.type,C===jn){if(x.tag===7){r(d,x.sibling),u=i(x,f.props.children),u.return=d,d=u;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===be&&So(C)===x.type){r(d,x.sibling),u=i(x,f.props),u.ref=gr(d,x,f),u.return=d,d=u;break e}r(d,x);break}else n(d,x);x=x.sibling}f.type===jn?(u=Pn(f.props.children,d.mode,m,f.key),u.return=d,d=u):(m=Tt(f.type,f.key,f.props,null,d.mode,m),m.ref=gr(d,u,f),m.return=d,d=m)}return s(d);case Rn:e:{for(x=f.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{r(d,u);break}else n(d,u);u=u.sibling}u=Gi(f,d.mode,m),u.return=d,d=u}return s(d);case be:return x=f._init,_(d,u,x(f._payload),m)}if(vr(f))return k(d,u,f,m);if(dr(f))return y(d,u,f,m);pt(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(r(d,u.sibling),u=i(u,f),u.return=d,d=u):(r(d,u),u=Vi(f,d.mode,m),u.return=d,d=u),s(d)):r(d,u)}return _}var nr=ou(!0),au=ou(!1),Jr={},Ae=gn(Jr),Wr=gn(Jr),Vr=gn(Jr);function En(e){if(e===Jr)throw Error(w(174));return e}function fs(e,n){switch(j(Vr,n),j(Wr,e),j(Ae,Jr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:nl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=nl(n,e)}B(Ae),j(Ae,n)}function rr(){B(Ae),B(Wr),B(Vr)}function uu(e){En(Vr.current);var n=En(Ae.current),r=nl(n,e.type);n!==r&&(j(Wr,e),j(Ae,r))}function ps(e){Wr.current===e&&(B(Ae),B(Wr))}var A=gn(0);function Qt(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bi=[];function hs(){for(var e=0;e<Bi.length;e++)Bi[e]._workInProgressVersionPrimary=null;Bi.length=0}var xt=Ye.ReactCurrentDispatcher,Oi=Ye.ReactCurrentBatchConfig,_n=0,U=null,K=null,X=null,Kt=!1,zr=!1,Gr=0,bc=0;function ne(){throw Error(w(321))}function gs(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!De(e[r],n[r]))return!1;return!0}function ms(e,n,r,t,i,l){if(_n=l,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xt.current=e===null||e.memoizedState===null?nf:rf,e=r(t,i),zr){l=0;do{if(zr=!1,Gr=0,25<=l)throw Error(w(301));l+=1,X=K=null,n.updateQueue=null,xt.current=tf,e=r(t,i)}while(zr)}if(xt.current=qt,n=K!==null&&K.next!==null,_n=0,X=K=U=null,Kt=!1,n)throw Error(w(300));return e}function ws(){var e=Gr!==0;return Gr=0,e}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Pe(){if(K===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=X===null?U.memoizedState:X.next;if(n!==null)X=n,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function $r(e,n){return typeof n=="function"?n(e):n}function Ai(e){var n=Pe(),r=n.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var t=K,i=t.baseQueue,l=r.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}t.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,t=t.baseState;var o=s=null,a=null,c=l;do{var g=c.lane;if((_n&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),t=c.hasEagerState?c.eagerState:e(t,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(o=a=h,s=t):a=a.next=h,U.lanes|=g,Tn|=g}c=c.next}while(c!==null&&c!==l);a===null?s=t:a.next=o,De(t,n.memoizedState)||(de=!0),n.memoizedState=t,n.baseState=s,n.baseQueue=a,r.lastRenderedState=t}if(e=r.interleaved,e!==null){i=e;do l=i.lane,U.lanes|=l,Tn|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Ui(e){var n=Pe(),r=n.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var t=r.dispatch,i=r.pending,l=n.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);De(l,n.memoizedState)||(de=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),r.lastRenderedState=l}return[l,t]}function du(){}function cu(e,n){var r=U,t=Pe(),i=n(),l=!De(t.memoizedState,i);if(l&&(t.memoizedState=i,de=!0),t=t.queue,ys(hu.bind(null,r,t,e),[e]),t.getSnapshot!==n||l||X!==null&&X.memoizedState.tag&1){if(r.flags|=2048,Qr(9,pu.bind(null,r,t,i,n),void 0,null),b===null)throw Error(w(349));_n&30||fu(r,n,i)}return i}function fu(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function pu(e,n,r,t){n.value=r,n.getSnapshot=t,gu(n)&&mu(e)}function hu(e,n,r){return r(function(){gu(n)&&mu(e)})}function gu(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!De(e,r)}catch{return!0}}function mu(e){var n=Ke(e,1);n!==null&&Me(n,e,1,-1)}function Co(e){var n=je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},n.queue=e,e=e.dispatch=ef.bind(null,U,e),[n.memoizedState,e]}function Qr(e,n,r,t){return e={tag:e,create:n,destroy:r,deps:t,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,n.lastEffect=e)),e}function wu(){return Pe().memoizedState}function Pt(e,n,r,t){var i=je();U.flags|=e,i.memoizedState=Qr(1|n,r,void 0,t===void 0?null:t)}function ai(e,n,r,t){var i=Pe();t=t===void 0?null:t;var l=void 0;if(K!==null){var s=K.memoizedState;if(l=s.destroy,t!==null&&gs(t,s.deps)){i.memoizedState=Qr(n,r,l,t);return}}U.flags|=e,i.memoizedState=Qr(1|n,r,l,t)}function Eo(e,n){return Pt(8390656,8,e,n)}function ys(e,n){return ai(2048,8,e,n)}function yu(e,n){return ai(4,2,e,n)}function vu(e,n){return ai(4,4,e,n)}function ku(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Su(e,n,r){return r=r!=null?r.concat([e]):null,ai(4,4,ku.bind(null,n,e),r)}function vs(){}function Cu(e,n){var r=Pe();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&gs(n,t[1])?t[0]:(r.memoizedState=[e,n],e)}function Eu(e,n){var r=Pe();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&gs(n,t[1])?t[0]:(e=e(),r.memoizedState=[e,n],e)}function xu(e,n,r){return _n&21?(De(r,n)||(r=za(),U.lanes|=r,Tn|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=r)}function Jc(e,n){var r=D;D=r!==0&&4>r?r:4,e(!0);var t=Oi.transition;Oi.transition={};try{e(!1),n()}finally{D=r,Oi.transition=t}}function Pu(){return Pe().memoizedState}function Zc(e,n,r){var t=dn(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},Nu(e))zu(n,r);else if(r=tu(e,n,r,t),r!==null){var i=se();Me(r,e,t,i),_u(r,n,t)}}function ef(e,n,r){var t=dn(e),i={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))zu(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,o=l(s,r);if(i.hasEagerState=!0,i.eagerState=o,De(o,s)){var a=n.interleaved;a===null?(i.next=i,ds(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}r=tu(e,n,i,t),r!==null&&(i=se(),Me(r,e,t,i),_u(r,n,t))}}function Nu(e){var n=e.alternate;return e===U||n!==null&&n===U}function zu(e,n){zr=Kt=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function _u(e,n,r){if(r&4194240){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,Xl(e,r)}}var qt={readContext:xe,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},nf={readContext:xe,useCallback:function(e,n){return je().memoizedState=[e,n===void 0?null:n],e},useContext:xe,useEffect:Eo,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Pt(4194308,4,ku.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Pt(4194308,4,e,n)},useInsertionEffect:function(e,n){return Pt(4,2,e,n)},useMemo:function(e,n){var r=je();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var t=je();return n=r!==void 0?r(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=Zc.bind(null,U,e),[t.memoizedState,e]},useRef:function(e){var n=je();return e={current:e},n.memoizedState=e},useState:Co,useDebugValue:vs,useDeferredValue:function(e){return je().memoizedState=e},useTransition:function(){var e=Co(!1),n=e[0];return e=Jc.bind(null,e[1]),je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var t=U,i=je();if(O){if(r===void 0)throw Error(w(407));r=r()}else{if(r=n(),b===null)throw Error(w(349));_n&30||fu(t,n,r)}i.memoizedState=r;var l={value:r,getSnapshot:n};return i.queue=l,Eo(hu.bind(null,t,l,e),[e]),t.flags|=2048,Qr(9,pu.bind(null,t,l,r,n),void 0,null),r},useId:function(){var e=je(),n=b.identifierPrefix;if(O){var r=Ve,t=We;r=(t&~(1<<32-Fe(t)-1)).toString(32)+r,n=":"+n+"R"+r,r=Gr++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=bc++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rf={readContext:xe,useCallback:Cu,useContext:xe,useEffect:ys,useImperativeHandle:Su,useInsertionEffect:yu,useLayoutEffect:vu,useMemo:Eu,useReducer:Ai,useRef:wu,useState:function(){return Ai($r)},useDebugValue:vs,useDeferredValue:function(e){var n=Pe();return xu(n,K.memoizedState,e)},useTransition:function(){var e=Ai($r)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:du,useSyncExternalStore:cu,useId:Pu,unstable_isNewReconciler:!1},tf={readContext:xe,useCallback:Cu,useContext:xe,useEffect:ys,useImperativeHandle:Su,useInsertionEffect:yu,useLayoutEffect:vu,useMemo:Eu,useReducer:Ui,useRef:wu,useState:function(){return Ui($r)},useDebugValue:vs,useDeferredValue:function(e){var n=Pe();return K===null?n.memoizedState=e:xu(n,K.memoizedState,e)},useTransition:function(){var e=Ui($r)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:du,useSyncExternalStore:cu,useId:Pu,unstable_isNewReconciler:!1};function tr(e,n){try{var r="",t=n;do r+=Fd(t),t=t.return;while(t);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Hi(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function xl(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function Tu(e,n,r){r=Ge(-1,r),r.tag=3,r.payload={element:null};var t=n.value;return r.callback=function(){Xt||(Xt=!0,Rl=t),xl(e,n)},r}function Lu(e,n,r){r=Ge(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var i=n.value;r.payload=function(){return t(i)},r.callback=function(){xl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){xl(e,n),typeof t!="function"&&(un===null?un=new Set([this]):un.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),r}function xo(e,n,r){var t=e.pingCache;if(t===null){t=e.pingCache=new lf;var i=new Set;t.set(n,i)}else i=t.get(n),i===void 0&&(i=new Set,t.set(n,i));i.has(r)||(i.add(r),e=vf.bind(null,e,n,r),n.then(e,e))}function Po(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function No(e,n,r,t,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=Ge(-1,1),n.tag=2,an(r,n,1))),r.lanes|=1),e)}var sf=Ye.ReactCurrentOwner,de=!1;function le(e,n,r,t){n.child=e===null?au(n,null,r,t):nr(n,e.child,r,t)}function zo(e,n,r,t,i){r=r.render;var l=n.ref;return Xn(n,i),t=ms(e,n,r,t,l,i),r=ws(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qe(e,n,i)):(O&&r&&is(n),n.flags|=1,le(e,n,t,i),n.child)}function _o(e,n,r,t,i){if(e===null){var l=r.type;return typeof l=="function"&&!zs(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=l,Fu(e,n,l,t,i)):(e=Tt(r.type,null,t,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(r=r.compare,r=r!==null?r:Or,r(s,t)&&e.ref===n.ref)return qe(e,n,i)}return n.flags|=1,e=cn(l,t),e.ref=n.ref,e.return=n,n.child=e}function Fu(e,n,r,t,i){if(e!==null){var l=e.memoizedProps;if(Or(l,t)&&e.ref===n.ref)if(de=!1,n.pendingProps=t=l,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,qe(e,n,i)}return Pl(e,n,r,t,i)}function Mu(e,n,r){var t=n.pendingProps,i=t.children,l=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},j($n,he),he|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,j($n,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=l!==null?l.baseLanes:r,j($n,he),he|=t}else l!==null?(t=l.baseLanes|r,n.memoizedState=null):t=r,j($n,he),he|=t;return le(e,n,i,r),n.child}function Du(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Pl(e,n,r,t,i){var l=fe(r)?Nn:ie.current;return l=Zn(n,l),Xn(n,i),r=ms(e,n,r,t,l,i),t=ws(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qe(e,n,i)):(O&&t&&is(n),n.flags|=1,le(e,n,r,i),n.child)}function To(e,n,r,t,i){if(fe(r)){var l=!0;Ut(n)}else l=!1;if(Xn(n,i),n.stateNode===null)Nt(e,n),su(n,r,t),El(n,r,t,i),t=!0;else if(e===null){var s=n.stateNode,o=n.memoizedProps;s.props=o;var a=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=fe(r)?Nn:ie.current,c=Zn(n,c));var g=r.getDerivedStateFromProps,h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==t||a!==c)&&ko(n,s,t,c),Je=!1;var p=n.memoizedState;s.state=p,$t(n,t,s,i),a=n.memoizedState,o!==t||p!==a||ce.current||Je?(typeof g=="function"&&(Cl(n,r,g,t),a=n.memoizedState),(o=Je||vo(n,r,o,t,p,a,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=a),s.props=t,s.state=a,s.context=c,t=o):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{s=n.stateNode,iu(e,n),o=n.memoizedProps,c=n.type===n.elementType?o:_e(n.type,o),s.props=c,h=n.pendingProps,p=s.context,a=r.contextType,typeof a=="object"&&a!==null?a=xe(a):(a=fe(r)?Nn:ie.current,a=Zn(n,a));var v=r.getDerivedStateFromProps;(g=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==h||p!==a)&&ko(n,s,t,a),Je=!1,p=n.memoizedState,s.state=p,$t(n,t,s,i);var k=n.memoizedState;o!==h||p!==k||ce.current||Je?(typeof v=="function"&&(Cl(n,r,v,t),k=n.memoizedState),(c=Je||vo(n,r,c,t,p,k,a)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(t,k,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(t,k,a)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=k),s.props=t,s.state=k,s.context=a,t=c):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),t=!1)}return Nl(e,n,r,t,l,i)}function Nl(e,n,r,t,i,l){Du(e,n);var s=(n.flags&128)!==0;if(!t&&!s)return i&&ho(n,r,!1),qe(e,n,l);t=n.stateNode,sf.current=n;var o=s&&typeof r.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&s?(n.child=nr(n,e.child,null,l),n.child=nr(n,null,o,l)):le(e,n,o,l),n.memoizedState=t.state,i&&ho(n,r,!0),n.child}function Ru(e){var n=e.stateNode;n.pendingContext?po(e,n.pendingContext,n.pendingContext!==n.context):n.context&&po(e,n.context,!1),fs(e,n.containerInfo)}function Lo(e,n,r,t,i){return er(),ss(i),n.flags|=256,le(e,n,r,t),n.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function ju(e,n,r){var t=n.pendingProps,i=A.current,l=!1,s=(n.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(A,i&1),e===null)return kl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=t.children,e=t.fallback,l?(t=n.mode,l=n.child,s={mode:"hidden",children:s},!(t&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=ci(s,t,0,null),e=Pn(e,t,r,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=_l(r),n.memoizedState=zl,e):ks(n,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return of(e,n,s,t,o,i,r);if(l){l=t.fallback,s=n.mode,i=e.child,o=i.sibling;var a={mode:"hidden",children:t.children};return!(s&1)&&n.child!==i?(t=n.child,t.childLanes=0,t.pendingProps=a,n.deletions=null):(t=cn(i,a),t.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=cn(o,l):(l=Pn(l,s,r,null),l.flags|=2),l.return=n,t.return=n,t.sibling=l,n.child=t,t=l,l=n.child,s=e.child.memoizedState,s=s===null?_l(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~r,n.memoizedState=zl,t}return l=e.child,e=l.sibling,t=cn(l,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t}function ks(e,n){return n=ci({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ht(e,n,r,t){return t!==null&&ss(t),nr(n,e.child,null,r),e=ks(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function of(e,n,r,t,i,l,s){if(r)return n.flags&256?(n.flags&=-257,t=Hi(Error(w(422))),ht(e,n,s,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=t.fallback,i=n.mode,t=ci({mode:"visible",children:t.children},i,0,null),l=Pn(l,i,s,null),l.flags|=2,t.return=n,l.return=n,t.sibling=l,n.child=t,n.mode&1&&nr(n,e.child,null,s),n.child.memoizedState=_l(s),n.memoizedState=zl,l);if(!(n.mode&1))return ht(e,n,s,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var o=t.dgst;return t=o,l=Error(w(419)),t=Hi(l,t,void 0),ht(e,n,s,t)}if(o=(s&e.childLanes)!==0,de||o){if(t=b,t!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(t.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ke(e,i),Me(t,e,i,-1))}return Ns(),t=Hi(Error(w(421))),ht(e,n,s,t)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=kf.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ge=on(i.nextSibling),me=n,O=!0,Le=null,e!==null&&(ke[Se++]=We,ke[Se++]=Ve,ke[Se++]=zn,We=e.id,Ve=e.overflow,zn=n),n=ks(n,t.children),n.flags|=4096,n)}function Fo(e,n,r){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Sl(e.return,n,r)}function Wi(e,n,r,t,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=r,l.tailMode=i)}function Iu(e,n,r){var t=n.pendingProps,i=t.revealOrder,l=t.tail;if(le(e,n,t.children,r),t=A.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fo(e,r,n);else if(e.tag===19)Fo(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(j(A,t),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&Qt(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),Wi(n,!1,i,r,l);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Qt(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Wi(n,!0,r,null,l);break;case"together":Wi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Nt(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Tn|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,r=cn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=cn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function af(e,n,r){switch(n.tag){case 3:Ru(n),er();break;case 5:uu(n);break;case 1:fe(n.type)&&Ut(n);break;case 4:fs(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,i=n.memoizedProps.value;j(Vt,t._currentValue),t._currentValue=i;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(j(A,A.current&1),n.flags|=128,null):r&n.child.childLanes?ju(e,n,r):(j(A,A.current&1),e=qe(e,n,r),e!==null?e.sibling:null);j(A,A.current&1);break;case 19:if(t=(r&n.childLanes)!==0,e.flags&128){if(t)return Iu(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(A,A.current),t)break;return null;case 22:case 23:return n.lanes=0,Mu(e,n,r)}return qe(e,n,r)}var Bu,Tl,Ou,Au;Bu=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Tl=function(){};Ou=function(e,n,r,t){var i=e.memoizedProps;if(i!==t){e=n.stateNode,En(Ae.current);var l=null;switch(r){case"input":i=bi(e,i),t=bi(e,t),l=[];break;case"select":i=H({},i,{value:void 0}),t=H({},t,{value:void 0}),l=[];break;case"textarea":i=el(e,i),t=el(e,t),l=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=Ot)}rl(r,t);var s;r=null;for(c in i)if(!t.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var o=i[c];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in t){var a=t[c];if(o=i!=null?i[c]:void 0,t.hasOwnProperty(c)&&a!==o&&(a!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in a)a.hasOwnProperty(s)&&o[s]!==a[s]&&(r||(r={}),r[s]=a[s])}else r||(l||(l=[]),l.push(c,r)),r=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&I("scroll",e),l||o===a||(l=[])):(l=l||[]).push(c,a))}r&&(l=l||[]).push("style",r);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};Au=function(e,n,r,t){r!==t&&(n.flags|=4)};function mr(e,n){if(!O)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=t,e.childLanes=r,n}function uf(e,n,r){var t=n.pendingProps;switch(ls(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return fe(n.type)&&At(),re(n),null;case 3:return t=n.stateNode,rr(),B(ce),B(ie),hs(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ft(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(Bl(Le),Le=null))),Tl(e,n),re(n),null;case 5:ps(n);var i=En(Vr.current);if(r=n.type,e!==null&&n.stateNode!=null)Ou(e,n,r,t,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(w(166));return re(n),null}if(e=En(Ae.current),ft(n)){t=n.stateNode,r=n.type;var l=n.memoizedProps;switch(t[Be]=n,t[Hr]=l,e=(n.mode&1)!==0,r){case"dialog":I("cancel",t),I("close",t);break;case"iframe":case"object":case"embed":I("load",t);break;case"video":case"audio":for(i=0;i<Sr.length;i++)I(Sr[i],t);break;case"source":I("error",t);break;case"img":case"image":case"link":I("error",t),I("load",t);break;case"details":I("toggle",t);break;case"input":As(t,l),I("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!l.multiple},I("invalid",t);break;case"textarea":Hs(t,l),I("invalid",t)}rl(r,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?t.textContent!==o&&(l.suppressHydrationWarning!==!0&&ct(t.textContent,o,e),i=["children",o]):typeof o=="number"&&t.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&ct(t.textContent,o,e),i=["children",""+o]):Fr.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&I("scroll",t)}switch(r){case"input":tt(t),Us(t,l,!0);break;case"textarea":tt(t),Ws(t);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(t.onclick=Ot)}t=i,n.updateQueue=t,t!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=s.createElement(r,{is:t.is}):(e=s.createElement(r),r==="select"&&(s=e,t.multiple?s.multiple=!0:t.size&&(s.size=t.size))):e=s.createElementNS(e,r),e[Be]=n,e[Hr]=t,Bu(e,n,!1,!1),n.stateNode=e;e:{switch(s=tl(r,t),r){case"dialog":I("cancel",e),I("close",e),i=t;break;case"iframe":case"object":case"embed":I("load",e),i=t;break;case"video":case"audio":for(i=0;i<Sr.length;i++)I(Sr[i],e);i=t;break;case"source":I("error",e),i=t;break;case"img":case"image":case"link":I("error",e),I("load",e),i=t;break;case"details":I("toggle",e),i=t;break;case"input":As(e,t),i=bi(e,t),I("invalid",e);break;case"option":i=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},i=H({},t,{value:void 0}),I("invalid",e);break;case"textarea":Hs(e,t),i=el(e,t),I("invalid",e);break;default:i=t}rl(r,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="style"?ga(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pa(e,a)):l==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Mr(e,a):typeof a=="number"&&Mr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Fr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&I("scroll",e):a!=null&&Gl(e,l,a,s))}switch(r){case"input":tt(e),Us(e,t,!1);break;case"textarea":tt(e),Ws(e);break;case"option":t.value!=null&&e.setAttribute("value",""+fn(t.value));break;case"select":e.multiple=!!t.multiple,l=t.value,l!=null?Qn(e,!!t.multiple,l,!1):t.defaultValue!=null&&Qn(e,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ot)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)Au(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(w(166));if(r=En(Vr.current),En(Ae.current),ft(n)){if(t=n.stateNode,r=n.memoizedProps,t[Be]=n,(l=t.nodeValue!==r)&&(e=me,e!==null))switch(e.tag){case 3:ct(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ct(t.nodeValue,r,(e.mode&1)!==0)}l&&(n.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[Be]=n,n.stateNode=t}return re(n),null;case 13:if(B(A),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ge!==null&&n.mode&1&&!(n.flags&128))ru(),er(),n.flags|=98560,l=!1;else if(l=ft(n),t!==null&&t.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Be]=n}else er(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),l=!1}else Le!==null&&(Bl(Le),Le=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||A.current&1?q===0&&(q=3):Ns())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return rr(),Tl(e,n),e===null&&Ar(n.stateNode.containerInfo),re(n),null;case 10:return us(n.type._context),re(n),null;case 17:return fe(n.type)&&At(),re(n),null;case 19:if(B(A),l=n.memoizedState,l===null)return re(n),null;if(t=(n.flags&128)!==0,s=l.rendering,s===null)if(t)mr(l,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Qt(e),s!==null){for(n.flags|=128,mr(l,!1),t=s.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=r,r=n.child;r!==null;)l=r,e=t,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return j(A,A.current&1|2),n.child}e=e.sibling}l.tail!==null&&$()>ir&&(n.flags|=128,t=!0,mr(l,!1),n.lanes=4194304)}else{if(!t)if(e=Qt(s),e!==null){if(n.flags|=128,t=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!O)return re(n),null}else 2*$()-l.renderingStartTime>ir&&r!==1073741824&&(n.flags|=128,t=!0,mr(l,!1),n.lanes=4194304);l.isBackwards?(s.sibling=n.child,n.child=s):(r=l.last,r!==null?r.sibling=s:n.child=s,l.last=s)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=$(),n.sibling=null,r=A.current,j(A,t?r&1|2:r&1),n):(re(n),null);case 22:case 23:return Ps(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?he&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function df(e,n){switch(ls(n),n.tag){case 1:return fe(n.type)&&At(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rr(),B(ce),B(ie),hs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ps(n),null;case 13:if(B(A),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(A),null;case 4:return rr(),null;case 10:return us(n.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var gt=!1,te=!1,cf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Gn(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){W(e,n,t)}else r.current=null}function Ll(e,n,r){try{r()}catch(t){W(e,n,t)}}var Mo=!1;function ff(e,n){if(pl=jt,e=Va(),ts(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var s=0,o=-1,a=-1,c=0,g=0,h=e,p=null;n:for(;;){for(var v;h!==r||i!==0&&h.nodeType!==3||(o=s+i),h!==l||t!==0&&h.nodeType!==3||(a=s+t),h.nodeType===3&&(s+=h.nodeValue.length),(v=h.firstChild)!==null;)p=h,h=v;for(;;){if(h===e)break n;if(p===r&&++c===i&&(o=s),p===l&&++g===t&&(a=s),(v=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=v}r=o===-1||a===-1?null:{start:o,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(hl={focusedElem:e,selectionRange:r},jt=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,_=k.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:_e(n.type,y),_);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(m){W(n,n.return,m)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return k=Mo,Mo=!1,k}function _r(e,n,r){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ll(n,r,l)}i=i.next}while(i!==t)}}function ui(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==n)}}function Fl(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function Uu(e){var n=e.alternate;n!==null&&(e.alternate=null,Uu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Be],delete n[Hr],delete n[wl],delete n[Kc],delete n[qc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hu(e){return e.tag===5||e.tag===3||e.tag===4}function Do(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ot));else if(t!==4&&(e=e.child,e!==null))for(Ml(e,n,r),e=e.sibling;e!==null;)Ml(e,n,r),e=e.sibling}function Dl(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Dl(e,n,r),e=e.sibling;e!==null;)Dl(e,n,r),e=e.sibling}var J=null,Te=!1;function Xe(e,n,r){for(r=r.child;r!==null;)Wu(e,n,r),r=r.sibling}function Wu(e,n,r){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(ni,r)}catch{}switch(r.tag){case 5:te||Gn(r,n);case 6:var t=J,i=Te;J=null,Xe(e,n,r),J=t,Te=i,J!==null&&(Te?(e=J,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):J.removeChild(r.stateNode));break;case 18:J!==null&&(Te?(e=J,r=r.stateNode,e.nodeType===8?ji(e.parentNode,r):e.nodeType===1&&ji(e,r),Ir(e)):ji(J,r.stateNode));break;case 4:t=J,i=Te,J=r.stateNode.containerInfo,Te=!0,Xe(e,n,r),J=t,Te=i;break;case 0:case 11:case 14:case 15:if(!te&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Ll(r,n,s),i=i.next}while(i!==t)}Xe(e,n,r);break;case 1:if(!te&&(Gn(r,n),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(o){W(r,n,o)}Xe(e,n,r);break;case 21:Xe(e,n,r);break;case 22:r.mode&1?(te=(t=te)||r.memoizedState!==null,Xe(e,n,r),te=t):Xe(e,n,r);break;default:Xe(e,n,r)}}function Ro(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new cf),n.forEach(function(t){var i=Sf.bind(null,e,t);r.has(t)||(r.add(t),t.then(i,i))})}}function ze(e,n){var r=n.deletions;if(r!==null)for(var t=0;t<r.length;t++){var i=r[t];try{var l=e,s=n,o=s;e:for(;o!==null;){switch(o.tag){case 5:J=o.stateNode,Te=!1;break e;case 3:J=o.stateNode.containerInfo,Te=!0;break e;case 4:J=o.stateNode.containerInfo,Te=!0;break e}o=o.return}if(J===null)throw Error(w(160));Wu(l,s,i),J=null,Te=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){W(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vu(n,e),n=n.sibling}function Vu(e,n){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(n,e),Re(e),t&4){try{_r(3,e,e.return),ui(3,e)}catch(y){W(e,e.return,y)}try{_r(5,e,e.return)}catch(y){W(e,e.return,y)}}break;case 1:ze(n,e),Re(e),t&512&&r!==null&&Gn(r,r.return);break;case 5:if(ze(n,e),Re(e),t&512&&r!==null&&Gn(r,r.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(y){W(e,e.return,y)}}if(t&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=r!==null?r.memoizedProps:l,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&da(i,l),tl(o,s);var c=tl(o,l);for(s=0;s<a.length;s+=2){var g=a[s],h=a[s+1];g==="style"?ga(i,h):g==="dangerouslySetInnerHTML"?pa(i,h):g==="children"?Mr(i,h):Gl(i,g,h,c)}switch(o){case"input":Ji(i,l);break;case"textarea":ca(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?Qn(i,!!l.multiple,v,!1):p!==!!l.multiple&&(l.defaultValue!=null?Qn(i,!!l.multiple,l.defaultValue,!0):Qn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Hr]=l}catch(y){W(e,e.return,y)}}break;case 6:if(ze(n,e),Re(e),t&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){W(e,e.return,y)}}break;case 3:if(ze(n,e),Re(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{Ir(n.containerInfo)}catch(y){W(e,e.return,y)}break;case 4:ze(n,e),Re(e);break;case 13:ze(n,e),Re(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Es=$())),t&4&&Ro(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(te=(c=te)||g,ze(n,e),te=c):ze(n,e),Re(e),t&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(h=S=g;S!==null;){switch(p=S,v=p.child,p.tag){case 0:case 11:case 14:case 15:_r(4,p,p.return);break;case 1:Gn(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){t=p,r=p.return;try{n=t,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(y){W(t,r,y)}}break;case 5:Gn(p,p.return);break;case 22:if(p.memoizedState!==null){Io(h);continue}}v!==null?(v.return=p,S=v):Io(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=h.stateNode,a=h.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=ha("display",s))}catch(y){W(e,e.return,y)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){W(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(n,e),Re(e),t&4&&Ro(e);break;case 21:break;default:ze(n,e),Re(e)}}function Re(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(Hu(r)){var t=r;break e}r=r.return}throw Error(w(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(Mr(i,""),t.flags&=-33);var l=Do(e);Dl(e,l,i);break;case 3:case 4:var s=t.stateNode.containerInfo,o=Do(e);Ml(e,o,s);break;default:throw Error(w(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pf(e,n,r){S=e,Gu(e)}function Gu(e,n,r){for(var t=(e.mode&1)!==0;S!==null;){var i=S,l=i.child;if(i.tag===22&&t){var s=i.memoizedState!==null||gt;if(!s){var o=i.alternate,a=o!==null&&o.memoizedState!==null||te;o=gt;var c=te;if(gt=s,(te=a)&&!c)for(S=i;S!==null;)s=S,a=s.child,s.tag===22&&s.memoizedState!==null?Bo(i):a!==null?(a.return=s,S=a):Bo(i);for(;l!==null;)S=l,Gu(l),l=l.sibling;S=i,gt=o,te=c}jo(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,S=l):jo(e)}}function jo(e){for(;S!==null;){var n=S;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||ui(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!te)if(r===null)t.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:_e(n.type,r.memoizedProps);t.componentDidUpdate(i,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&yo(n,l,t);break;case 3:var s=n.updateQueue;if(s!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}yo(n,s,r)}break;case 5:var o=n.stateNode;if(r===null&&n.flags&4){r=o;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Ir(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}te||n.flags&512&&Fl(n)}catch(p){W(n,n.return,p)}}if(n===e){S=null;break}if(r=n.sibling,r!==null){r.return=n.return,S=r;break}S=n.return}}function Io(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var r=n.sibling;if(r!==null){r.return=n.return,S=r;break}S=n.return}}function Bo(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{ui(4,n)}catch(a){W(n,r,a)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var i=n.return;try{t.componentDidMount()}catch(a){W(n,i,a)}}var l=n.return;try{Fl(n)}catch(a){W(n,l,a)}break;case 5:var s=n.return;try{Fl(n)}catch(a){W(n,s,a)}}}catch(a){W(n,n.return,a)}if(n===e){S=null;break}var o=n.sibling;if(o!==null){o.return=n.return,S=o;break}S=n.return}}var hf=Math.ceil,Yt=Ye.ReactCurrentDispatcher,Ss=Ye.ReactCurrentOwner,Ee=Ye.ReactCurrentBatchConfig,M=0,b=null,Q=null,Z=0,he=0,$n=gn(0),q=0,Kr=null,Tn=0,di=0,Cs=0,Tr=null,ue=null,Es=0,ir=1/0,Ue=null,Xt=!1,Rl=null,un=null,mt=!1,rn=null,bt=0,Lr=0,jl=null,zt=-1,_t=0;function se(){return M&6?$():zt!==-1?zt:zt=$()}function dn(e){return e.mode&1?M&2&&Z!==0?Z&-Z:Xc.transition!==null?(_t===0&&(_t=za()),_t):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ra(e.type)),e):1}function Me(e,n,r,t){if(50<Lr)throw Lr=0,jl=null,Error(w(185));Yr(e,r,t),(!(M&2)||e!==b)&&(e===b&&(!(M&2)&&(di|=r),q===4&&en(e,Z)),pe(e,t),r===1&&M===0&&!(n.mode&1)&&(ir=$()+500,si&&mn()))}function pe(e,n){var r=e.callbackNode;Xd(e,n);var t=Rt(e,e===b?Z:0);if(t===0)r!==null&&$s(r),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(r!=null&&$s(r),n===1)e.tag===0?Yc(Oo.bind(null,e)):Za(Oo.bind(null,e)),$c(function(){!(M&6)&&mn()}),r=null;else{switch(_a(t)){case 1:r=Yl;break;case 4:r=Pa;break;case 16:r=Dt;break;case 536870912:r=Na;break;default:r=Dt}r=Ju(r,$u.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function $u(e,n){if(zt=-1,_t=0,M&6)throw Error(w(327));var r=e.callbackNode;if(bn()&&e.callbackNode!==r)return null;var t=Rt(e,e===b?Z:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=Jt(e,t);else{n=t;var i=M;M|=2;var l=Ku();(b!==e||Z!==n)&&(Ue=null,ir=$()+500,xn(e,n));do try{wf();break}catch(o){Qu(e,o)}while(!0);as(),Yt.current=l,M=i,Q!==null?n=0:(b=null,Z=0,n=q)}if(n!==0){if(n===2&&(i=al(e),i!==0&&(t=i,n=Il(e,i))),n===1)throw r=Kr,xn(e,0),en(e,t),pe(e,$()),r;if(n===6)en(e,t);else{if(i=e.current.alternate,!(t&30)&&!gf(i)&&(n=Jt(e,t),n===2&&(l=al(e),l!==0&&(t=l,n=Il(e,l))),n===1))throw r=Kr,xn(e,0),en(e,t),pe(e,$()),r;switch(e.finishedWork=i,e.finishedLanes=t,n){case 0:case 1:throw Error(w(345));case 2:kn(e,ue,Ue);break;case 3:if(en(e,t),(t&130023424)===t&&(n=Es+500-$(),10<n)){if(Rt(e,0)!==0)break;if(i=e.suspendedLanes,(i&t)!==t){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ml(kn.bind(null,e,ue,Ue),n);break}kn(e,ue,Ue);break;case 4:if(en(e,t),(t&4194240)===t)break;for(n=e.eventTimes,i=-1;0<t;){var s=31-Fe(t);l=1<<s,s=n[s],s>i&&(i=s),t&=~l}if(t=i,t=$()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*hf(t/1960))-t,10<t){e.timeoutHandle=ml(kn.bind(null,e,ue,Ue),t);break}kn(e,ue,Ue);break;case 5:kn(e,ue,Ue);break;default:throw Error(w(329))}}}return pe(e,$()),e.callbackNode===r?$u.bind(null,e):null}function Il(e,n){var r=Tr;return e.current.memoizedState.isDehydrated&&(xn(e,n).flags|=256),e=Jt(e,n),e!==2&&(n=ue,ue=r,n!==null&&Bl(n)),e}function Bl(e){ue===null?ue=e:ue.push.apply(ue,e)}function gf(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var i=r[t],l=i.getSnapshot;i=i.value;try{if(!De(l(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Cs,n&=~di,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-Fe(n),t=1<<r;e[r]=-1,n&=~t}}function Oo(e){if(M&6)throw Error(w(327));bn();var n=Rt(e,0);if(!(n&1))return pe(e,$()),null;var r=Jt(e,n);if(e.tag!==0&&r===2){var t=al(e);t!==0&&(n=t,r=Il(e,t))}if(r===1)throw r=Kr,xn(e,0),en(e,n),pe(e,$()),r;if(r===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kn(e,ue,Ue),pe(e,$()),null}function xs(e,n){var r=M;M|=1;try{return e(n)}finally{M=r,M===0&&(ir=$()+500,si&&mn())}}function Ln(e){rn!==null&&rn.tag===0&&!(M&6)&&bn();var n=M;M|=1;var r=Ee.transition,t=D;try{if(Ee.transition=null,D=1,e)return e()}finally{D=t,Ee.transition=r,M=n,!(M&6)&&mn()}}function Ps(){he=$n.current,B($n)}function xn(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Gc(r)),Q!==null)for(r=Q.return;r!==null;){var t=r;switch(ls(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&At();break;case 3:rr(),B(ce),B(ie),hs();break;case 5:ps(t);break;case 4:rr();break;case 13:B(A);break;case 19:B(A);break;case 10:us(t.type._context);break;case 22:case 23:Ps()}r=r.return}if(b=e,Q=e=cn(e.current,null),Z=he=n,q=0,Kr=null,Cs=di=Tn=0,ue=Tr=null,Cn!==null){for(n=0;n<Cn.length;n++)if(r=Cn[n],t=r.interleaved,t!==null){r.interleaved=null;var i=t.next,l=r.pending;if(l!==null){var s=l.next;l.next=i,t.next=s}r.pending=t}Cn=null}return e}function Qu(e,n){do{var r=Q;try{if(as(),xt.current=qt,Kt){for(var t=U.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Kt=!1}if(_n=0,X=K=U=null,zr=!1,Gr=0,Ss.current=null,r===null||r.return===null){q=1,Kr=n,Q=null;break}e:{var l=e,s=r.return,o=r,a=n;if(n=Z,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=o,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Po(s);if(v!==null){v.flags&=-257,No(v,s,o,l,n),v.mode&1&&xo(l,c,n),n=v,a=c;var k=n.updateQueue;if(k===null){var y=new Set;y.add(a),n.updateQueue=y}else k.add(a);break e}else{if(!(n&1)){xo(l,c,n),Ns();break e}a=Error(w(426))}}else if(O&&o.mode&1){var _=Po(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),No(_,s,o,l,n),ss(tr(a,o));break e}}l=a=tr(a,o),q!==4&&(q=2),Tr===null?Tr=[l]:Tr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var d=Tu(l,a,n);wo(l,d);break e;case 1:o=a;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(un===null||!un.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var m=Lu(l,o,n);wo(l,m);break e}}l=l.return}while(l!==null)}Yu(r)}catch(C){n=C,Q===r&&r!==null&&(Q=r=r.return);continue}break}while(!0)}function Ku(){var e=Yt.current;return Yt.current=qt,e===null?qt:e}function Ns(){(q===0||q===3||q===2)&&(q=4),b===null||!(Tn&268435455)&&!(di&268435455)||en(b,Z)}function Jt(e,n){var r=M;M|=2;var t=Ku();(b!==e||Z!==n)&&(Ue=null,xn(e,n));do try{mf();break}catch(i){Qu(e,i)}while(!0);if(as(),M=r,Yt.current=t,Q!==null)throw Error(w(261));return b=null,Z=0,q}function mf(){for(;Q!==null;)qu(Q)}function wf(){for(;Q!==null&&!Hd();)qu(Q)}function qu(e){var n=bu(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Yu(e):Q=n,Ss.current=null}function Yu(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=df(r,n),r!==null){r.flags&=32767,Q=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Q=null;return}}else if(r=uf(r,n,he),r!==null){Q=r;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);q===0&&(q=5)}function kn(e,n,r){var t=D,i=Ee.transition;try{Ee.transition=null,D=1,yf(e,n,r,t)}finally{Ee.transition=i,D=t}return null}function yf(e,n,r,t){do bn();while(rn!==null);if(M&6)throw Error(w(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(bd(e,l),e===b&&(Q=b=null,Z=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||mt||(mt=!0,Ju(Dt,function(){return bn(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Ee.transition,Ee.transition=null;var s=D;D=1;var o=M;M|=4,Ss.current=null,ff(e,r),Vu(r,e),Bc(hl),jt=!!pl,hl=pl=null,e.current=r,pf(r),Wd(),M=o,D=s,Ee.transition=l}else e.current=r;if(mt&&(mt=!1,rn=e,bt=i),l=e.pendingLanes,l===0&&(un=null),$d(r.stateNode),pe(e,$()),n!==null)for(t=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],t(i.value,{componentStack:i.stack,digest:i.digest});if(Xt)throw Xt=!1,e=Rl,Rl=null,e;return bt&1&&e.tag!==0&&bn(),l=e.pendingLanes,l&1?e===jl?Lr++:(Lr=0,jl=e):Lr=0,mn(),null}function bn(){if(rn!==null){var e=_a(bt),n=Ee.transition,r=D;try{if(Ee.transition=null,D=16>e?16:e,rn===null)var t=!1;else{if(e=rn,rn=null,bt=0,M&6)throw Error(w(331));var i=M;for(M|=4,S=e.current;S!==null;){var l=S,s=l.child;if(S.flags&16){var o=l.deletions;if(o!==null){for(var a=0;a<o.length;a++){var c=o[a];for(S=c;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:_r(8,g,l)}var h=g.child;if(h!==null)h.return=g,S=h;else for(;S!==null;){g=S;var p=g.sibling,v=g.return;if(Uu(g),g===c){S=null;break}if(p!==null){p.return=v,S=p;break}S=v}}}var k=l.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}S=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,S=s;else e:for(;S!==null;){if(l=S,l.flags&2048)switch(l.tag){case 0:case 11:case 15:_r(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,S=d;break e}S=l.return}}var u=e.current;for(S=u;S!==null;){s=S;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,S=f;else e:for(s=u;S!==null;){if(o=S,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ui(9,o)}}catch(C){W(o,o.return,C)}if(o===s){S=null;break e}var m=o.sibling;if(m!==null){m.return=o.return,S=m;break e}S=o.return}}if(M=i,mn(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(ni,e)}catch{}t=!0}return t}finally{D=r,Ee.transition=n}}return!1}function Ao(e,n,r){n=tr(r,n),n=Tu(e,n,1),e=an(e,n,1),n=se(),e!==null&&(Yr(e,1,n),pe(e,n))}function W(e,n,r){if(e.tag===3)Ao(e,e,r);else for(;n!==null;){if(n.tag===3){Ao(n,e,r);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(un===null||!un.has(t))){e=tr(r,e),e=Lu(n,e,1),n=an(n,e,1),e=se(),n!==null&&(Yr(n,1,e),pe(n,e));break}}n=n.return}}function vf(e,n,r){var t=e.pingCache;t!==null&&t.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&r,b===e&&(Z&r)===r&&(q===4||q===3&&(Z&130023424)===Z&&500>$()-Es?xn(e,0):Cs|=r),pe(e,n)}function Xu(e,n){n===0&&(e.mode&1?(n=st,st<<=1,!(st&130023424)&&(st=4194304)):n=1);var r=se();e=Ke(e,n),e!==null&&(Yr(e,n,r),pe(e,r))}function kf(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Xu(e,r)}function Sf(e,n){var r=0;switch(e.tag){case 13:var t=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(w(314))}t!==null&&t.delete(n),Xu(e,r)}var bu;bu=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||ce.current)de=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return de=!1,af(e,n,r);de=!!(e.flags&131072)}else de=!1,O&&n.flags&1048576&&eu(n,Wt,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;Nt(e,n),e=n.pendingProps;var i=Zn(n,ie.current);Xn(n,r),i=ms(null,n,t,e,i,r);var l=ws();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(t)?(l=!0,Ut(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cs(n),i.updater=oi,n.stateNode=i,i._reactInternals=n,El(n,t,e,r),n=Nl(null,n,t,!0,l,r)):(n.tag=0,O&&l&&is(n),le(null,n,i,r),n=n.child),n;case 16:t=n.elementType;e:{switch(Nt(e,n),e=n.pendingProps,i=t._init,t=i(t._payload),n.type=t,i=n.tag=Ef(t),e=_e(t,e),i){case 0:n=Pl(null,n,t,e,r);break e;case 1:n=To(null,n,t,e,r);break e;case 11:n=zo(null,n,t,e,r);break e;case 14:n=_o(null,n,t,_e(t.type,e),r);break e}throw Error(w(306,t,""))}return n;case 0:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:_e(t,i),Pl(e,n,t,i,r);case 1:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:_e(t,i),To(e,n,t,i,r);case 3:e:{if(Ru(n),e===null)throw Error(w(387));t=n.pendingProps,l=n.memoizedState,i=l.element,iu(e,n),$t(n,t,null,r);var s=n.memoizedState;if(t=s.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=tr(Error(w(423)),n),n=Lo(e,n,t,r,i);break e}else if(t!==i){i=tr(Error(w(424)),n),n=Lo(e,n,t,r,i);break e}else for(ge=on(n.stateNode.containerInfo.firstChild),me=n,O=!0,Le=null,r=au(n,null,t,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(er(),t===i){n=qe(e,n,r);break e}le(e,n,t,r)}n=n.child}return n;case 5:return uu(n),e===null&&kl(n),t=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,gl(t,i)?s=null:l!==null&&gl(t,l)&&(n.flags|=32),Du(e,n),le(e,n,s,r),n.child;case 6:return e===null&&kl(n),null;case 13:return ju(e,n,r);case 4:return fs(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=nr(n,null,t,r):le(e,n,t,r),n.child;case 11:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:_e(t,i),zo(e,n,t,i,r);case 7:return le(e,n,n.pendingProps,r),n.child;case 8:return le(e,n,n.pendingProps.children,r),n.child;case 12:return le(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(t=n.type._context,i=n.pendingProps,l=n.memoizedProps,s=i.value,j(Vt,t._currentValue),t._currentValue=s,l!==null)if(De(l.value,s)){if(l.children===i.children&&!ce.current){n=qe(e,n,r);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var a=o.firstContext;a!==null;){if(a.context===t){if(l.tag===1){a=Ge(-1,r&-r),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Sl(l.return,r,n),o.lanes|=r;break}a=a.next}}else if(l.tag===10)s=l.type===n.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(w(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Sl(s,r,n),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===n){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}le(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,t=n.pendingProps.children,Xn(n,r),i=xe(i),t=t(i),n.flags|=1,le(e,n,t,r),n.child;case 14:return t=n.type,i=_e(t,n.pendingProps),i=_e(t.type,i),_o(e,n,t,i,r);case 15:return Fu(e,n,n.type,n.pendingProps,r);case 17:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:_e(t,i),Nt(e,n),n.tag=1,fe(t)?(e=!0,Ut(n)):e=!1,Xn(n,r),su(n,t,i),El(n,t,i,r),Nl(null,n,t,!0,e,r);case 19:return Iu(e,n,r);case 22:return Mu(e,n,r)}throw Error(w(156,n.tag))};function Ju(e,n){return xa(e,n)}function Cf(e,n,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,r,t){return new Cf(e,n,r,t)}function zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return zs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ql)return 11;if(e===Kl)return 14}return 2}function cn(e,n){var r=e.alternate;return r===null?(r=Ce(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Tt(e,n,r,t,i,l){var s=2;if(t=e,typeof e=="function")zs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case jn:return Pn(r.children,i,l,n);case $l:s=8,i|=8;break;case Ki:return e=Ce(12,r,n,i|2),e.elementType=Ki,e.lanes=l,e;case qi:return e=Ce(13,r,n,i),e.elementType=qi,e.lanes=l,e;case Yi:return e=Ce(19,r,n,i),e.elementType=Yi,e.lanes=l,e;case oa:return ci(r,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case la:s=10;break e;case sa:s=9;break e;case Ql:s=11;break e;case Kl:s=14;break e;case be:s=16,t=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Ce(s,r,n,i),n.elementType=e,n.type=t,n.lanes=l,n}function Pn(e,n,r,t){return e=Ce(7,e,t,n),e.lanes=r,e}function ci(e,n,r,t){return e=Ce(22,e,t,n),e.elementType=oa,e.lanes=r,e.stateNode={isHidden:!1},e}function Vi(e,n,r){return e=Ce(6,e,null,n),e.lanes=r,e}function Gi(e,n,r){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function xf(e,n,r,t,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xi(0),this.expirationTimes=xi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xi(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _s(e,n,r,t,i,l,s,o,a){return e=new xf(e,n,r,o,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ce(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},cs(l),e}function Pf(e,n,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:t==null?null:""+t,children:e,containerInfo:n,implementation:r}}function Zu(e){if(!e)return pn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var r=e.type;if(fe(r))return Ja(e,r,n)}return n}function ed(e,n,r,t,i,l,s,o,a){return e=_s(r,t,!0,e,i,l,s,o,a),e.context=Zu(null),r=e.current,t=se(),i=dn(r),l=Ge(t,i),l.callback=n??null,an(r,l,i),e.current.lanes=i,Yr(e,i,t),pe(e,t),e}function fi(e,n,r,t){var i=n.current,l=se(),s=dn(i);return r=Zu(r),n.context===null?n.context=r:n.pendingContext=r,n=Ge(l,s),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=an(i,n,s),e!==null&&(Me(e,i,s,l),Et(e,i,s)),s}function Zt(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Ts(e,n){Uo(e,n),(e=e.alternate)&&Uo(e,n)}function Nf(){return null}var nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ls(e){this._internalRoot=e}pi.prototype.render=Ls.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));fi(e,n,null,null)};pi.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ln(function(){fi(null,e,null,null)}),n[Qe]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fa();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Ze.length&&n!==0&&n<Ze[r].priority;r++);Ze.splice(r,0,e),r===0&&Da(e)}};function Fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ho(){}function zf(e,n,r,t,i){if(i){if(typeof t=="function"){var l=t;t=function(){var c=Zt(s);l.call(c)}}var s=ed(n,t,e,0,null,!1,!1,"",Ho);return e._reactRootContainer=s,e[Qe]=s.current,Ar(e.nodeType===8?e.parentNode:e),Ln(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof t=="function"){var o=t;t=function(){var c=Zt(a);o.call(c)}}var a=_s(e,0,!1,null,null,!1,!1,"",Ho);return e._reactRootContainer=a,e[Qe]=a.current,Ar(e.nodeType===8?e.parentNode:e),Ln(function(){fi(n,a,r,t)}),a}function gi(e,n,r,t,i){var l=r._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var o=i;i=function(){var a=Zt(s);o.call(a)}}fi(n,s,e,i)}else s=zf(r,n,e,i,t);return Zt(s)}Ta=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=kr(n.pendingLanes);r!==0&&(Xl(n,r|1),pe(n,$()),!(M&6)&&(ir=$()+500,mn()))}break;case 13:Ln(function(){var t=Ke(e,1);if(t!==null){var i=se();Me(t,e,1,i)}}),Ts(e,1)}};bl=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var r=se();Me(n,e,134217728,r)}Ts(e,134217728)}};La=function(e){if(e.tag===13){var n=dn(e),r=Ke(e,n);if(r!==null){var t=se();Me(r,e,n,t)}Ts(e,n)}};Fa=function(){return D};Ma=function(e,n){var r=D;try{return D=e,n()}finally{D=r}};ll=function(e,n,r){switch(n){case"input":if(Ji(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var t=r[n];if(t!==e&&t.form===e.form){var i=li(t);if(!i)throw Error(w(90));ua(t),Ji(t,i)}}}break;case"textarea":ca(e,r);break;case"select":n=r.value,n!=null&&Qn(e,!!r.multiple,n,!1)}};ya=xs;va=Ln;var _f={usingClientEntryPoint:!1,Events:[br,An,li,ma,wa,xs]},wr={findFiberByHostInstance:Sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Tf={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ca(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wt.isDisabled&&wt.supportsFiber)try{ni=wt.inject(Tf),Oe=wt}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;ye.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fs(n))throw Error(w(200));return Pf(e,n,null,r)};ye.createRoot=function(e,n){if(!Fs(e))throw Error(w(299));var r=!1,t="",i=nd;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=_s(e,1,!1,null,null,r,!1,t,i),e[Qe]=n.current,Ar(e.nodeType===8?e.parentNode:e),new Ls(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Ca(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Ln(e)};ye.hydrate=function(e,n,r){if(!hi(n))throw Error(w(200));return gi(null,e,n,!0,r)};ye.hydrateRoot=function(e,n,r){if(!Fs(e))throw Error(w(405));var t=r!=null&&r.hydratedSources||null,i=!1,l="",s=nd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),n=ed(n,null,e,1,r??null,i,!1,l,s),e[Qe]=n.current,Ar(e),t)for(e=0;e<t.length;e++)r=t[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new pi(n)};ye.render=function(e,n,r){if(!hi(n))throw Error(w(200));return gi(null,e,n,!1,r)};ye.unmountComponentAtNode=function(e){if(!hi(e))throw Error(w(40));return e._reactRootContainer?(Ln(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ye.unstable_batchedUpdates=xs;ye.unstable_renderSubtreeIntoContainer=function(e,n,r,t){if(!hi(r))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return gi(e,n,r,!1,t)};ye.version="18.2.0-next-9e3b772b8-20220608";function rd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rd)}catch(e){console.error(e)}}rd(),ea.exports=ye;var Lf=ea.exports,Wo=Lf;$i.createRoot=Wo.createRoot,$i.hydrateRoot=Wo.hydrateRoot;const Ff=[{id:1,riddle:`Measure of land space
Rows of crops beneath the sun
Farmers' fertile ground`,answer:"Acre"},{id:2,riddle:`On the stage they play
Bringing stories to life's frame
Mastering their art`,answer:"Actor"},{id:3,riddle:`Shoes for athletes' feet
Logos famous worldwide seen
Comfort meets design`,answer:"Adidas"},{id:4,riddle:`Liquid courage flows
Lowering inhibitions
Moderation key`,answer:"Alcohol"},{id:5,riddle:`Senses on high watch
Vigilant for any threat
Ready to respond`,answer:"Alert"},{id:6,riddle:`Heavenly being
Radiant with pure beauty
Messenger divine`,answer:"Angel"},{id:7,riddle:`Lines intersecting
Forming geometric shapes
Measured perfectly`,answer:"Angle"},{id:8,riddle:`Fury boiling bright
Rage burning within the heart
Calm waters, cool tempers`,answer:"Angry"},{id:9,riddle:`Connecting foot, leg
Flexible yet sturdy joint
Bearing body's weight`,answer:"Ankle"},{id:10,riddle:`Listless indifference
Lacking motivation's spark
Caring not at all`,answer:"Apathy"},{id:11,riddle:`Protecting clothes
Shield from spills and splatters
Kitchen's armor clad`,answer:"Apron"},{id:12,riddle:`With bow in steady hand
Patient hunter takes aim true
Arrows find their mark`,answer:"Archer"},{id:13,riddle:`Mighty naval fleet
Warships sailing seas for glory
Power on the waves`,answer:"Armada"},{id:14,riddle:`Deadly projectiles
Soaring swiftly through the air
Striking down their prey`,answer:"Arrows"},{id:15,riddle:`Burning heat of shame
Flushed cheeks, downcasted eyes
Regret's bitter sting`,answer:"Ashamed"},{id:16,riddle:`Training hard each day
Pushing limits, breaking bounds
Champion's mindset strong`,answer:"Athlete"},{id:17,riddle:`Mapping the wide world
Charting lands and oceans vast
Guiding explorers`,answer:"Atlas"},{id:18,riddle:`Striking without warning
Overwhelming defenses
Seizing victory`,answer:"Attack"},{id:19,riddle:`Dusty and forgotten
Treasures hidden from view
Secrets kept above`,answer:"Attic"},{id:20,riddle:`Luxury machines
Sleek and powerful engines
German engineering`,answer:"Audi"},{id:21,riddle:`Family relation
Sharing bonds of kinship strong
Matriarch's sister`,answer:"Aunt"},{id:22,riddle:`Painting words as art
Weaving tales that captivate
Creativity's voice`,answer:"Author"},{id:23,riddle:`Green fruit with rough skin
Hidden treasure inside waits
Guacamole's gem`,answer:"Avocado"},{id:24,riddle:`Honoring greatness
Recognizing achievements
Celebrating best`,answer:"Award"},{id:25,riddle:`Tiny precious one
Innocent eyes full of joy
Parents' pride and love`,answer:"Baby"},{id:26,riddle:`Carrying our loads
Items packed for journeys far
Travelers' burdens`,answer:"Baggage"},{id:27,riddle:`Rising with the sun
Kneading dough with skillful hands
Sweet aromas rise`,answer:"Baker"},{id:28,riddle:`Smooth as an eggshell
Not a single strand of hair
Nature's bare canvas`,answer:"Bald"},{id:29,riddle:`Light as a feather
Floating on the gentle breeze
Children's joy soaring`,answer:"Balloon"},{id:30,riddle:`Stalks of sturdy green
Reaching skyward in the grove
Nature's living fence`,answer:"Bamboo"},{id:31,riddle:`Purple dinosaur
Friendly face that children love
Singing, laughing joy`,answer:"Barney"},{id:32,riddle:`Flitting through the night
Soaring on silent wings
Echolocation`,answer:"Bat"},{id:33,riddle:`Humble legumes grown
Rich in protein, fiber too
Nutritious small pods`,answer:"Beans"},{id:34,riddle:`Facial hair so thick
Covering cheeks and chin growth
Manly display shown`,answer:"Beard"},{id:35,riddle:`Tiny bloodsuckers
Invading mattress hideouts
Itchy nuisance pests`,answer:"Bedbug"},{id:36,riddle:`Holding pants upright
Circling waistline tightly cinched
Fashion's sturdy wrap`,answer:"Belt"},{id:37,riddle:`Sacred scripture bound
Divine wisdom's pages held
Guiding spirituality`,answer:"Bible"},{id:38,riddle:`Muscles bulging big
Results of hard work flexing
Showcasing brawn strength`,answer:"Biceps"},{id:39,riddle:`Beaches and sunbathing
Revealing swimwear so skimpy
Summer's bright display`,answer:"Bikini"},{id:40,riddle:`Holding papers tight
Keeping documents secure
Office organizer`,answer:"Binder"},{id:41,riddle:`Study of life's forms
Exploring nature's wonders
Science's vast frontier`,answer:"Biology"},{id:42,riddle:`Buttery and flaky
Melting in your mouth so sweet
Tea time's tasty treat`,answer:"Biscuit"},{id:43,riddle:`Digital currency
Decentralized, encrypted
Finance revolution`,answer:"Bitcoin"},{id:44,riddle:`Cleaning solution
Removing stains, disinfecting
Powerful liquid`,answer:"Bleach"},{id:45,riddle:`Rolled up tightly tight
Smoked for its calming effects
Mellow relaxation`,answer:"Blunt"},{id:46,riddle:`Rosy cheeks glowing
Embarrassment's crimson hue
Shy, demure warmth shown`,answer:"Blush"},{id:47,riddle:`Swooping down steep slopes
Racing on icy downhill trails
Winter's thrilling ride`,answer:"Bobsled"},{id:48,riddle:`Protecting baby's head
Soft fabric tied under chin
Infant's cozy cap`,answer:"Bonnet"},{id:49,riddle:`Pages bound with knowledge
Worlds of stories to explore
Companions of thought`,answer:"Book"},{id:50,riddle:`Holding tomes upright
Supporting literature's weight
Shelf's trusty pillars`,answer:"Bookend"},{id:51,riddle:`Marking territories
Separating nations' lands
Dividing the maps`,answer:"Border"},{id:52,riddle:`Warrior so brave
Defending Middle-earth's fate
Honor guides his blade`,answer:"Boromir"},{id:53,riddle:`Knocking down the pins
Rolling ball down polished lane
Striking recreation`,answer:"Bowling"},{id:54,riddle:`Fists raised in the ring
Dancing with power and might
Champions trade blows`,answer:"Boxing"},{id:55,riddle:`Metal wires aligned
Straightening teeth through pressure
Perfecting one's smile`,answer:"Braces"},{id:56,riddle:`Intellect's domain
Complex cortex controlling
Life's command center`,answer:"Brain"},{id:57,riddle:`Company's symbol
Identifying products
Marketing's trademark`,answer:"Brand"},{id:58,riddle:`Vowing eternal love
Radiant in white gown's grace
Union celebrated`,answer:"Bride"},{id:59,riddle:`Discolored blemish
Reminder of pain once felt
Healing's purple mark`,answer:"Bruise"},{id:60,riddle:`Drifting so carefree
Translucent orbs floating light
Childlike whimsy shines`,answer:"Bubble"},{id:61,riddle:`Carrying water
Galvanized steel's sturdy hold
Bailing out the rain`,answer:"Bucket"},{id:62,riddle:`Fastening belts tight
Securing straps and holdings
Keeping things in place`,answer:"Buckle"},{id:63,riddle:`Massive, shaggy beasts
Roaming the great open plains
Mighty herd grazing`,answer:"Buffalo"},{id:64,riddle:`Stocky, wrinkled breed
Loyal guard dog, brave and strong
Tenacious spirit`,answer:"Bulldog"},{id:65,riddle:`Twitching little nose
Ears perked, catching every sound
Hopping, furry friend`,answer:"Bunny"},{id:66,riddle:`Tortilla wrapped tight
Filled with beans, rice, and meat
Mexican delight`,answer:"Burrito"},{id:67,riddle:`Transporting masses
Carrying folks to and fro
City's lifeline rides`,answer:"Bus"},{id:68,riddle:`Harvest measurement
Filled with crops from fertile fields
Farmer's bounty stored`,answer:"Bushel"},{id:69,riddle:`Rustic woodland home
Fireplace glowing warmth inside
Nature's cozy nook`,answer:"Cabin"},{id:70,riddle:`Silent, still, and cold
Once a living, breathing form
Life's empty vessel`,answer:"Cadaver"},{id:71,riddle:`Frosted, layered treat
Celebrating special days
Sweet confection's art`,answer:"Cake"},{id:72,riddle:`Newborn bovine young
Growing strong on mother's milk
Future's dairy source`,answer:"Calf"},{id:73,riddle:`Peaceful tranquility
Mind and body's serene state
Still waters undisturbed`,answer:"Calm"},{id:74,riddle:`Capturing moments
Preserving life's memories
Lens focused and framed`,answer:"Camera"},{id:75,riddle:`Thunderous booming
Propelling projectiles far
War's mighty weapon`,answer:"Cannon"},{id:76,riddle:`Billowing fabric
Flowing behind the hero
Emblem of power`,answer:"Cape"},{id:77,riddle:`Commanding respect
Leading crew through thick and thin
Authority's voice`,answer:"Captain"},{id:78,riddle:`Four wheels take you far
Transporting from here to there
Freedom's open road`,answer:"Car"},{id:79,riddle:`Gemstone's weight measured
Determining value's shine
Precious rarity`,answer:"Carat"},{id:80,riddle:`Cozy floor covering
Insulating with fibers
Warmth beneath your feet`,answer:"Carpet"},{id:81,riddle:`Animated tales
Bringing laughter, joy to life
Drawn imagination`,answer:"Cartoon"},{id:82,riddle:`Towering stone walls
Royal residence grandly built
Kingdom's mighty heart`,answer:"Castle"},{id:83,riddle:`Purring contentment
Independent feline grace
Night's elusive prowl`,answer:"Cat"},{id:84,riddle:`Listing merchandise
Guiding shoppers on their quest
Consumer's handbook`,answer:"Catalog"},{id:85,riddle:`Grazing in the field
Herd of gentle lowing beasts
Sources of beef, milk`,answer:"Cattle"},{id:86,riddle:`Spinning discs of old
Carrying tunes of bygone days
Music's former reign`,answer:"CD"},{id:87,riddle:`Overhead expanse
Separating floor and roof
Room's lofty boundary`,answer:"Ceiling"},{id:88,riddle:`Life's smallest unit
Building blocks of all beings
Body's tiny bricks`,answer:"Cell"},{id:89,riddle:`Underground chamber
Cool and dark, storing treasures
Hiding ancient wines`,answer:"Cellar"},{id:90,riddle:`Hundred years have passed
Decades marking time's long march
Era's solemn span`,answer:"Century"},{id:91,riddle:`Providing a seat
Cushioned support for your weight
Relaxation's throne`,answer:"Chair"},{id:92,riddle:`Flowing stream of sound
Visual spectrum's pathway too
Connecting signals`,answer:"Channel"},{id:93,riddle:`Disorder reigning
Confusion's frantic turmoil
Pandemonium rules`,answer:"Chaos"},{id:94,riddle:`Replenishing power
Renewing life's battery
Energy restored`,answer:"Charger"},{id:95,riddle:`Ancient wartime ride
Horses pulling through the fray
Battle's regal cart`,answer:"Chariot"},{id:96,riddle:`Verifying truth
Confirming details align
Validation's mark`,answer:"Check"},{id:97,riddle:`Culinary maestro
Orchestrating flavors' dance
Master of the kitchen`,answer:"Chef"},{id:98,riddle:`Strategic battle
Pieces moving with purpose
Intellectual war`,answer:"Chess"},{id:99,riddle:`Ringing melody
Musical tones mark the hour
Time's gentle reminder`,answer:"Chime"},{id:100,riddle:`Brick-lined vertical
Carrying smoke from the hearth
Winter's cozy flue`,answer:"Chimney"},{id:101,riddle:`Delicate porcelain
Graceful cups and saucers hold
Tea's refined vessel`,answer:"China"},{id:102,riddle:`Carving tool so sharp
Shaping stone and wood with skill
Sculptor's instrument`,answer:"Chisel"},{id:103,riddle:`Musical harmony
Notes combining in pure tune
Symphony's building block`,answer:"Chord"},{id:104,riddle:`Sacred sanctuary
Gathering the faithful throng
Spiritual refuge`,answer:"Church"},{id:105,riddle:`Fastening pieces
Holding tightly, not letting go
Gripping strength secured`,answer:"Clamp"},{id:106,riddle:`Towering stone face
Nature's majestic barrier
Vertical grandeur`,answer:"Cliff"},{id:107,riddle:`Varying temperatures
Weather patterns shift and change
Earth's atmospheric mood`,answer:"Climate"},{id:108,riddle:`Exclusive circle
Tightly knit, sharing secrets
Exclusive inner group`,answer:"Clique"},{id:109,riddle:`Concealing fabric
Shielding from the elements
Mystery's soft veil`,answer:"Cloak"},{id:110,riddle:`Sturdy wooden shoe
Protecting feet from nature
Rustic versatile wear`,answer:"Clog"},{id:111,riddle:`Colorful costume
Smiles hiding behind makeup
Laughter's silly jest`,answer:"Clown"},{id:112,riddle:`Seeking the answer
Puzzle piece to solve the case
Mystery's missing link`,answer:"Clue"},{id:113,riddle:`Guiding the players
Leading them to victory
Mentor on the field`,answer:"Coach"},{id:114,riddle:`Shoreline's embrace
Where land and ocean converge
Nature's sandy fringe`,answer:"Coast"},{id:115,riddle:`Aircraft controls
Pilot's domain in the skies
Guiding navigation`,answer:"Cockpit"},{id:116,riddle:`Tropical treat
Hairy brown orb, milk inside
Island's natural gift`,answer:"Coconut"},{id:117,riddle:`Aromatic brew
Rich and robust liquid warmth
Morning's bold embrace`,answer:"Coffee"},{id:118,riddle:`Winding round and round
Metal spiral tightly wound
Spring's resilient form`,answer:"Coil"},{id:119,riddle:`Sinking into plush
Relaxing in soft cushions
Ease and gentle rest`,answer:"Comfy"},{id:120,riddle:`Corporate entity
United team working as one
Shared goals and vision`,answer:"Company"},{id:121,riddle:`Analyzing things
Finding similarities
Contrasting, weighing both`,answer:"Compare"},{id:122,riddle:`Deception's art form
Tricks and lies spinning tales
Misleading the truth`,answer:"Con"},{id:123,riddle:`Sharing deepest thoughts
Opening your heart to trust
Revealing secrets`,answer:"Confide"},{id:124,riddle:`Granting approval
Permission given freely
Agreement reached`,answer:"Consent"},{id:125,riddle:`Woven strands entwined
Connecting power sources
Electricity's path`,answer:"Cord"},{id:126,riddle:`Verifying truth
Ensuring accuracy reigns
Validating facts`,answer:"Correct"},{id:127,riddle:`Simple resting place
Providing comfort and sleep
Baby's tiny bed`,answer:"Cot"},{id:128,riddle:`Borders and nations
Divided by maps and lines
Different cultures`,answer:"Country"},{id:129,riddle:`Sharing family ties
Related through blood's deep bond
Extended kindred`,answer:"Cousin"},{id:130,riddle:`Riding the range wide
Lassoing cattle with skill
Western frontier's pride`,answer:"Cowboy"},{id:131,riddle:`Muscles seizing tight
Uncomfortable contraction
Brief burst of pain`,answer:"Cramp"},{id:132,riddle:`Towering machine
Lifting heavy loads so high
Constructing big dreams`,answer:"Crane"},{id:133,riddle:`Bony head fortress
Protecting the mind within
Skull's sturdy casing`,answer:"Cranium"},{id:134,riddle:`Wooden container
Holding goods for transport safe
Shipping's sturdy box`,answer:"Crate"},{id:135,riddle:`Coloring the world
Childhood's vibrant wax sticks
Art in simple form`,answer:"Crayon"},{id:136,riddle:`Smooth and silky soft
Rich and indulgent texture
Decadent delight`,answer:"Cream"},{id:137,riddle:`Bringing ideas forth
Imagination takes form
Innovation's spark`,answer:"Creator"},{id:138,riddle:`Measuring your worth
Proving your reliability
Trustworthy resource`,answer:"Credit"},{id:139,riddle:`Unified team force
Working towards a common goal
Collaboration's strength`,answer:"Crew"},{id:140,riddle:`Baby's cozy nest
Protective wooden surround
Infant's first resting place`,answer:"Crib"},{id:141,riddle:`Breaking the law's bounds
Illegal acts of misdeeds
Justice's sworn foe`,answer:"Crime"},{id:142,riddle:`Freshly harvested
Crunchy and delightfully light
Nature's tasty snack`,answer:"Crisp"},{id:143,riddle:`Sailing the high seas
Exploring distant horizons
Adventure awaits`,answer:"Cruise"},{id:144,riddle:`Scattered remnants left
Trailing crumbled bits behind
Evidence of snacks`,answer:"Crumbs"},{id:145,riddle:`Outer protective layer
Shielding the inner softness
Food's sturdy shell`,answer:"Crust"},{id:146,riddle:`Workspace partition
Dividing the office space
Privacy's fabric walls`,answer:"Cubicle"},{id:147,riddle:`Ancient measurement
Length from elbow to tip
Builder's handy guide`,answer:"Cubit"},{id:148,riddle:`Portable dessert
Frosted cake in miniature
Sweet handheld delight`,answer:"Cupcake"},{id:149,riddle:`Fabric partition
Separating rooms and space
Privacy's soft drape`,answer:"Curtain"},{id:150,riddle:`Soft and comfortable
Providing cozy support
Relaxation's friend`,answer:"Cushion"},{id:151,riddle:`Pirate's curved weapon
Sharp steel blade for dueling
Swashbuckling's sword`,answer:"Cutlass"},{id:152,riddle:`Ruler's mighty crown
Absolute power wielded high
Monarch's iron will`,answer:"Czar"},{id:153,riddle:`Tiny touch of paint
Adding color's accent bright
Artist's subtle stroke`,answer:"Dab"},{id:154,riddle:`Moving to the beat
Rhythmic steps and graceful sways
Body's lyrical flow`,answer:"Dance"},{id:155,riddle:`Lurking unseen threats
Peril hiding in the dark
Exercise caution`,answer:"Danger"},{id:156,riddle:`Pointed projectiles
Flying through the air so fast
Bullseye's sharp goal`,answer:"Darts"},{id:157,riddle:`Spinning tales untrue
Misleading with clever lies
Truth's cunning foe`,answer:"Deceive"},{id:158,riddle:`Fathomless abyss
Dark depths of mysteries lurk
Secrets buried low`,answer:"Deep"},{id:159,riddle:`Preset standard choice
Falling back on basic norms
Standard setting ruled`,answer:"Default"},{id:160,riddle:`Flawed imperfection
Deviation from the norm
Something's not quite right`,answer:"Defect"},{id:161,riddle:`Measuring extent
Quantifying achievement
Scale of knowledge gained`,answer:"Degree"},{id:162,riddle:`Bringing to your door
Transporting goods from afar
Package's journey ends`,answer:"Deliver"},{id:163,riddle:`Malevolent force
Tormenting souls with dark power
Evil's wicked bane`,answer:"Demon"},{id:164,riddle:`Caring for your teeth
Promoting healthy gum lines
Smiley's white guardian`,answer:"Dentist"},{id:165,riddle:`Measuring downwards
How far beneath the surface
Plumbing the unknown`,answer:"Depth"},{id:166,riddle:`Intricate facet
Tiny piece of the whole tale
Carefully noting`,answer:"Detail"},{id:167,riddle:`Cubes with dotted sides
Rolling games of luck and chance
Lady fortune's toys`,answer:"Dice"},{id:168,riddle:`Commanding orders
Issuing instructions firm
Leader's resolute voice`,answer:"Dictate"},{id:169,riddle:`Pulsing rhythmic beats
Lights flashing in the darkness
Nightlife's energy`,answer:"Disco"},{id:170,riddle:`Repulsive feeling
Revulsion stirring in your gut
Distaste's bitter breath`,answer:"Disgust"},{id:171,riddle:`Trench carved in the earth
Channeling water's flow path
Draining nature's tears`,answer:"Ditch"},{id:172,riddle:`Exploring the depths
Breathing underwater life
Mastering the sea`,answer:"Diver"},{id:173,riddle:`Plunging into waves
Submerging beneath the blue
Aquatic adventure`,answer:"Diving"},{id:174,riddle:`Severing union
Legal separation's path
Ending marriage's bond`,answer:"Divorce"},{id:175,riddle:`Whirling all around
Disorienting spinning
Losing balance, reeled`,answer:"Dizzy"},{id:176,riddle:`Loyal companion
Furry friend with wagging tail
Man's faithful buddy`,answer:"Dog"},{id:177,riddle:`Playful marine mammal
Intelligent and sociable
Ocean's acrobat`,answer:"Dolphin"},{id:178,riddle:`Extending backbone
Vertebrae's bony ridgeline
Spine's topmost section`,answer:"Dorsal"},{id:179,riddle:`Twofold, not just one
Duplicate, a dual pair
Copies multiplied`,answer:"Double"},{id:180,riddle:`Questioning beliefs
Uncertainty's nagging voice
Lack of confidence`,answer:"Doubt"},{id:181,riddle:`Mythical beast soars
Breathing flames across the skies
Winged serpent's might`,answer:"Dragon"},{id:182,riddle:`Removing excess
Allowing the fluid to pour
Clearing the blocked path`,answer:"Drain"},{id:183,riddle:`Visions in the night
Imagination takes flight
Slumber's fancied realm`,answer:"Dream"},{id:184,riddle:`Carried by the breeze
Gently floating, no purpose
Wandering aimless`,answer:"Drift"},{id:185,riddle:`Slowly trickling down
Liquid beads forming puddles
Nature's gentle tears`,answer:"Drip"},{id:186,riddle:`Parched and arid lands
Thirsty for the rain's relief
Dry earth's cracked canvas`,answer:"Drought"},{id:187,riddle:`Tamed hurricane winds
Spinning cycles, removing damp
Clothes dried and ready`,answer:"Dryer"},{id:188,riddle:`Underground refuge
Shelter dug into the earth
Baseball's hiding spot`,answer:"Dugout"},{id:189,riddle:`Large floppy ears
Cartoon elephant so sweet
Childhood's silly friend`,answer:"Dumbo"},{id:190,riddle:`Dry particles float
Remains of things now transformed
Once whole, now scattered`,answer:"Dust"},{id:191,riddle:`Fluffy warm cocoon
Insulating sleeper's nest
Cozy comfort's pouch`,answer:"Duvet"},{id:192,riddle:`Throbbing, piercing ache
Unwelcome discomfort felt
Ear's sharp anguish pains`,answer:"Earache"},{id:193,riddle:`Boundary's frontier
Where surfaces intersect
Line of division`,answer:"Edge"},{id:194,riddle:`Revising, refining
Polishing the rougher parts
Improving the work`,answer:"Edit"},{id:195,riddle:`Slithering serpent
Gliding through the river's depths
Scaly underwater`,answer:"Eel"},{id:196,riddle:`Causing a result
Influencing the outcome
Leaving an imprint`,answer:"Effect"},{id:197,riddle:`Oval shaped vessel
Containing unborn life form
Nature's perfect start`,answer:"Egg"},{id:198,riddle:`Whimsical creature
Mischievous and playful
Magic's little friend`,answer:"Elf"},{id:199,riddle:`Running far away
Leaving all behind to wed
Secret ceremony`,answer:"Elope"},{id:200,riddle:`Absolute ruler
Governing with iron fist
Monarch's mighty reign`,answer:"Emperor"},{id:201,riddle:`Opposing forces
Rivalry and conflict clash
Battling against foes`,answer:"Enemy"},{id:202,riddle:`Committed union
Pledging hearts and lives as one
Lovers' sacred vow`,answer:"Engaged"},{id:203,riddle:`Misstep or mistake
Departure from what is right
Inaccuracy`,answer:"Error"},{id:204,riddle:`Moment of insight
Sudden brilliant revelation
Light bulb's bright idea`,answer:"Eureka"},{id:205,riddle:`Testing knowledge
Assessing the learner's grasp
Schooling's challenge`,answer:"Exam"},{id:206,riddle:`Once fresh, now lifeless
Viability has faded
No more use remains`,answer:"Expired"},{id:207,riddle:`Voyaging outward
Seeking unknown territories
Adventure beckons`,answer:"Explore"},{id:208,riddle:`Orb of vision's sight
Gazing outward from its cave
Optic's watchful sphere`,answer:"Eyeball"},{id:209,riddle:`Woven threads entwined
Soft material's cozy drape
Clothing's textile heart`,answer:"Fabric"},{id:210,riddle:`Industrial site
Assembling parts into wholes
Production's domain`,answer:"Factory"},{id:211,riddle:`Trendy for a time
Popular and all the rage
Then quickly forgotten`,answer:"Fad"},{id:212,riddle:`Vibrant hues soften
Once brilliant colors muted
Growing pale and dull`,answer:"Fade"},{id:213,riddle:`Cooling the heated
Circulating the air's flow
Breezy respite brought`,answer:"Fan"},{id:214,riddle:`Pouring forth water
Metallic spout's liquid stream
Sink's steady supply`,answer:"Faucet"},{id:215,riddle:`Lightweight plumage floats
Soft and delicate descent
Nature's airy down`,answer:"Feather"},{id:216,riddle:`Emotional state
Inner sensations expressed
Heartfelt sentiments`,answer:"Feeling"},{id:217,riddle:`Strings plucked with precise grace
Melodies sweetly performed
Music's dancing bow`,answer:"Fiddle"},{id:218,riddle:`Imagined vision
Fantastical mind's creature
Not grounded in truth`,answer:"Figment"},{id:219,riddle:`Blazing fox's icon
Web browser's furry emblem
Cyberspace's swift guide`,answer:"Firefox"},{id:220,riddle:`Brave souls undaunted
Rushing towards the danger
Rescuing from flames`,answer:"Fireman"},{id:221,riddle:`Baiting the water
Patiently awaiting catch
Angler's peaceful art`,answer:"Fishing"},{id:222,riddle:`Patriotic symbol
Nation's colors raised with pride
Identity's banner`,answer:"Flag"},{id:223,riddle:`Level and even plane
No bumps or raised surfaces
Smooth, consistent ground`,answer:"Flat"},{id:224,riddle:`Savory essence
Distinctive tastes lingering
Palate's zesty notes`,answer:"Flavor"},{id:225,riddle:`Soaring in the skies
Spanning distances so vast
Winged journey's path`,answer:"Flight"},{id:226,riddle:`Gathered in masses
Multitudes moving as one
United travellers`,answer:"Flock"},{id:227,riddle:`Arranging bouquets
Crafting nature's fragrant art
Petal's vibrant hues`,answer:"Florist"},{id:228,riddle:`Drifting debris
Remains cast off from vessels
Ocean's scattered junk`,answer:"Flotsam"},{id:229,riddle:`Vibrant petals bloom
Nature's delicate beauties
Fragrance sweet perfumes`,answer:"Flower"},{id:230,riddle:`Aching, feverish
Chills and congestion's burden
Viral discomfort`,answer:"Flu"},{id:231,riddle:`Hollow woodwind breathes
Melodic tunes taking flight
Music's airy stream`,answer:"Flute"},{id:232,riddle:`Delicate motion
Graceful movements drifting by
Gently rising, falling`,answer:"Flutter"},{id:233,riddle:`Misty haze surrounds
Obscuring sight, hiding views
Visibility's veil`,answer:"Fog"},{id:234,riddle:`Thin metallic sheet
Malleable and so pliable
Wrapping's safeguard`,answer:"Foil"},{id:235,riddle:`Shaping existence
Giving structure and framework
Defining the mold`,answer:"Form"},{id:236,riddle:`Ancient remains preserved
Once living, now turned to stone
Petrified history`,answer:"Fossil"},{id:237,riddle:`Feathered bird raised
Source of eggs and plump meat
Farmer's winged livestock`,answer:"Fowl"},{id:238,riddle:`Enclosing border
Holding pictures in its grip
Art's sturdy outline`,answer:"Frame"},{id:239,riddle:`Crispy golden sticks
Salted snacks from potatoes
Dipped in ketchup's bliss`,answer:"Fries"},{id:240,riddle:`Leading the advance
Facing forward, headed first
Pioneering path`,answer:"Front"},{id:241,riddle:`Icy crystals form
Winter's chilly breath descends
Nature's frozen art`,answer:"Frost"},{id:242,riddle:`Powering machines
Providing energy's spark
Igniting motion`,answer:"Fuel"},{id:243,riddle:`Containing no space
Capacity has been reached
Completely occupied`,answer:"Full"},{id:244,riddle:`Laughter and delight
Enjoyment and merriment
Pleasure's bright sunshine`,answer:"Fun"},{id:245,riddle:`Directing the flow
Narrowing the passage's path
Guiding liquid streams`,answer:"Funnel"},{id:246,riddle:`Soft and warm coating
Protecting from winter's chill
Animal's fuzzy guard`,answer:"Fur"},{id:247,riddle:`Vast cosmic expanse
Innumerable stars shine
Universe's grandeur`,answer:"Galaxy"},{id:248,riddle:`Liquid measurement
Containing four quarts' volume
Standard fluid amount`,answer:"Gallon"},{id:249,riddle:`Hooves thundering by
Muscles rippling, manes flowing
Swift steed's graceful stride`,answer:"Gallop"},{id:250,riddle:`Competitive sport
Following rules, playing fair
Rivaling for fun`,answer:"Game"},{id:251,riddle:`Controller in hand
Immersed in virtual worlds
Digital adventurer`,answer:"Gamer"},{id:252,riddle:`Flourishing greenery
Carefully tended oasis
Nature's peaceful gem`,answer:"Garden"},{id:253,riddle:`Striking for order
Calling court proceedings
Justice's wooden mallet`,answer:"Gavel"},{id:254,riddle:`Invisible foe
Causing illness and disease
Microscopic threat`,answer:"Germ"},{id:255,riddle:`European land
Home to beer and sausages
Efficient culture`,answer:"Germany"},{id:256,riddle:`Erupting upwards
Steam and water shooting high
Nature's hot spring show`,answer:"Geyser"},{id:257,riddle:`Towering presence
Looming figure of great size
Vast and overpowering`,answer:"Giant"},{id:258,riddle:`Pungent root spices
Adding zest to cuisine
Distinctive aroma`,answer:"Ginger"},{id:259,riddle:`Towering creature
Spotted legs and lengthy neck
Graceful herbivore`,answer:"Giraffe"},{id:260,riddle:`Transparent lenses
Assisting impaired vision
Seeing more clearly`,answer:"Glasses"},{id:261,riddle:`Sparkling and shiny
Reflecting light in all hues
Shimmering glamour`,answer:"Glitter"},{id:262,riddle:`Sticky adhesive
Binding objects together
Uniting as one`,answer:"Glue"},{id:263,riddle:`Facial hair trim
Slim tuft beneath the bottom lip
Slight chin adornment`,answer:"Goatee"},{id:264,riddle:`Mythical creature
Mischievous and impish
Trickster's green mischief`,answer:"Goblin"},{id:265,riddle:`Precious metal gleams
Radiant and so malleable
Wealth's coveted lure`,answer:"Gold"},{id:266,riddle:`Floating along canals
Water taxi's elegant ride
Venice's sleek transport`,answer:"Gondola"},{id:267,riddle:`Flowing fabric falls
Elegant for grand occasions
Formal evening wear`,answer:"Gown"},{id:268,riddle:`Tiny bits in fields, 
Harvested for daily bread, 
Earth's golden treasure.`,answer:"grain"},{id:269,riddle:`Wisdom's elder face, 
Stories wrapped in years gone by, 
Memory's embrace.`,answer:"grandpa"},{id:270,riddle:`Force that holds us down, 
Invisible yet so strong, 
Dance of mass and space.`,answer:"gravity"},{id:271,riddle:`Small explosive orb, 
Handle with utmost caution, 
Danger in a throw.`,answer:"grenade"},{id:272,riddle:`Gridiron of the feast, 
Flames beneath the open sky, 
Sizzle and char meet.`,answer:"grill"},{id:273,riddle:`Wedding day he stands, 
In attire of love's grand plan, 
Partner by his side.`,answer:"groom"},{id:274,riddle:`Guardian of the grove, 
Branches stretch towards the sky, 
Guardian of all.`,answer:"groot"},{id:275,riddle:`Together we stand, 
Bonds that bind us heart to heart, 
Unity our strength.`,answer:"group"},{id:276,riddle:`Game of mind and chance, 
Puzzles waiting to be solved, 
Shadows in the mind.`,answer:"guess"},{id:277,riddle:`Candy on a roll, 
Rainbow spheres of sugared joy, 
Chewy burst of glee.`,answer:"gumball"},{id:278,riddle:`Master of the mind, 
Guiding light in darkened paths, 
Wisdom's silent voice.`,answer:"guru"},{id:279,riddle:`Twist and leap in air, 
Graceful dancer defies earth, 
Poetry in motion.`,answer:"gymnast"},{id:280,riddle:`Ice falls from the sky, 
Nature's frozen confetti, 
Chill upon the skin.`,answer:"hail"},{id:281,riddle:`Locks fall with each snip, 
Transformation in the chair, 
New self takes a breath.`,answer:"haircut"},{id:282,riddle:`A fraction of the whole, 
Split between two equal parts, 
Balance incomplete.`,answer:"half"},{id:283,riddle:`Fingers filled with earth, 
Grasping life within a palm, 
Nature's gentle hold.`,answer:"handful"},{id:284,riddle:`Gateway to control, 
Lever for manipulation, 
Access to the world.`,answer:"handle"},{id:285,riddle:`Suspended in the air, 
Swinging with the wind's embrace, 
Pendulum of time.`,answer:"hang"},{id:286,riddle:`Aloha's sunny shore, 
Paradise in ocean's embrace, 
Tropic beauty's call.`,answer:"hawaii"},{id:287,riddle:`Last journey's carriage, 
Black solemnity's embrace, 
Farewell's silent ride.`,answer:"hearse"},{id:288,riddle:`Radiating warmth, 
Comfort in the coldest nights, 
Hearth of home's embrace.`,answer:"heater"},{id:289,riddle:`Beyond mortal sight, 
Realm of peace and endless light, 
Eternal reward.`,answer:"heaven"},{id:290,riddle:`Guardian of the head, 
Shield from life's harsh blows and falls, 
Sentinel of safety.`,answer:"helmet"},{id:291,riddle:`Darkness' bitter scourge, 
Tyrant of a brutal age, 
Echoes of a stain.`,answer:"hitler"},{id:292,riddle:`Frozen battleground, 
Blades on ice, swift gliding dance, 
Victory's crisp air.`,answer:"hockey"},{id:293,riddle:`Noise of heralding, 
Signal of arrival near, 
Soundtrack of the streets.`,answer:"honk"},{id:294,riddle:`Warmth in woven cloth, 
Comfort in soft fabric's hold, 
Embrace against chill.`,answer:"hoodies"},{id:295,riddle:`Temperature's ascent, 
Burning touch upon the skin, 
Summer's fiery breath.`,answer:"hot"},{id:296,riddle:`Home away from home, 
Shelter in a foreign land, 
Rest for wandering.`,answer:"hotel"},{id:297,riddle:`Sentient existence
Crafted from flesh and bone's form
Life's greatest wonder`,answer:"human"},{id:298,riddle:`Tracking unseen trails
Patient stalker of the wild
Prey's demise it seeks`,answer:"hunter"},{id:299,riddle:`Obstacle's presence
Challenges stride's momentum
Overcome, press on`,answer:"hurdle"},{id:300,riddle:`Vowed companion's bond
Sharing life's journey as one
Love's sacred union`,answer:"husband"},{id:301,riddle:`Simple dwelling place
Offering humble shelter
Home's warm embrace`,answer:"hut"},{id:302,riddle:`City's silent guard
Waiting to douse crimson wrath
Protector unsung`,answer:"hydrant"},{id:303,riddle:`Winter's frozen gift
Crystals adorning nature
Transient artistry`,answer:"ice"},{id:304,riddle:`Hanging frozen spears
Nature's icy chandeliers
Winter's ornament`,answer:"icicle"},{id:305,riddle:`Birth of inspiration
Sparking creativity's flame
Thought's fertile essence`,answer:"idea"},{id:306,riddle:`Frozen dome abode
Sheltering from winter's bite
Arctic ingenuity`,answer:"igloo"},{id:307,riddle:`Inward collapse force
Structure yielding to pressure
Ruins emerge from whole`,answer:"implode"},{id:308,riddle:`Constant evolution
Refining the imperfect
Progress's sweet fruit`,answer:"improve"},{id:309,riddle:`Bonds forged by marriage
Extending family's embrace
Love's new relations`,answer:"in-law"},{id:310,riddle:`Tearing flesh's frontline
Guards that aid mastication
Nature's brutal tools`,answer:"incisor"},{id:311,riddle:`Sustenance's inflow
Fueling life's continuation
Wealth's steady pulse`,answer:"income"},{id:312,riddle:`Guiding fingers seek
Amidst boundless knowledge troves
Truth's revealer`,answer:"index"},{id:313,riddle:`Resistance to change
Object's tendency at rest
Motion's adversary`,answer:"inertia"},{id:314,riddle:`Malady's cruel spread
Invading the body's defenses
Health's silent foe`,answer:"infect"},{id:315,riddle:`Imagination's spark
Birthing the unprecedented
Creativity's gift`,answer:"invent"},{id:316,riddle:`Unexpected twist
Contradicting expectations
Life's comedic turn`,answer:"ironic"},{id:317,riddle:`Land midst boundless sea
Nature's isolated realm
Paradise untamed`,answer:"island"},{id:318,riddle:`Clinging evergreen
Decorating nature's walls
Persistence embodied`,answer:"ivy"},{id:319,riddle:`Ancient culture's heart
Honor's timeless paradigm
Eastern philosophy`,answer:"japan"},{id:320,riddle:`Devouring entrance
Guarding life's sustenance gate
Bone's sturdy bastion`,answer:"jaw"},{id:321,riddle:`Rhythmic melodies
Evoking the soul's rapture
Music's soulful dance`,answer:"jazz"},{id:322,riddle:`Mystic warrior's light
Guarding justice, peace supreme
Hope's last sentinel`,answer:"jedi"},{id:323,riddle:`Lively footwork spree
Celebrating joy's eruption
Dance of merriment`,answer:"jig"},{id:324,riddle:`Fragments reassembled
Revealing hidden pictures
Puzzle's challege solved`,answer:"jigsaw"},{id:325,riddle:`Laughter's sweetelixir
Antidote to sorrow's sting
Humor's gift divine`,answer:"joke"},{id:326,riddle:`Mirth's mischievous jester
Delivering laughs unrestrained
Fun's court entertainer`,answer:"joker"},{id:327,riddle:`Inked chronicles tome
Narrating life's odyssey
Memory's vessel`,answer:"journal"},{id:328,riddle:`Dexterous handiwork
Juggling spheres in rhythmic dance
Coordination's art`,answer:"juggle"},{id:329,riddle:`Verdant wilderness
Nature's untamed dominion
Adventure beckons`,answer:"jungle"},{id:330,riddle:`Discarded remnants
Once treasured, now forsaken
Value's transience`,answer:"junk"},{id:331,riddle:`Scales weighing fairly
Upholding truth's equilibrium
Moral arbiter`,answer:"justice"},{id:332,riddle:`Tangy condiment
Enhancing flavor's delight
Culinary accent`,answer:"ketchup"},{id:333,riddle:`Lurking in the shadows
Awaiting to strike unseen
Death's silent agent`,answer:"killer"},{id:334,riddle:`Intimate gesture
Sharing affection's nectar
Love's sweet elixir`,answer:"kiss"},{id:335,riddle:`Tiny furry bundle
Innocence personified
Cuteness overload`,answer:"kitten"},{id:336,riddle:`Fuzzy little fruit
Nature's brown-furred delicacy
Sweet savory treat`,answer:"kiwi"},{id:337,riddle:`Crispy wafer snack
Chocolate's irresistible
Sweet indulgence calls`,answer:"kit-kat"},{id:338,riddle:`Humbling posture
Submission's reverent stance
Deference expressed`,answer:"kneel"},{id:339,riddle:`Armored warrior
Upholding honor's virtues
Chivalry's bastion`,answer:"knight"},{id:340,riddle:`Cuddly tree dweller
Nature's fuzzy ambassador
Australian charm`,answer:"koala"},{id:341,riddle:`Delicate threads weaved
Adorning with elegant grace
Feminine accent`,answer:"lace"},{id:342,riddle:`Crimson-dotted gem
Nature's miniature artwork
Garden's living jewel`,answer:"ladybug"},{id:343,riddle:`Radiant beacon
Illuminating the darkness
Knowledge's guiding light`,answer:"lamp"},{id:344,riddle:`Warrior's long-reach arm
Extending to strike from afar
Battle's distant sting`,answer:"lance"},{id:345,riddle:`Cradling embrace
Comforting life's journey
Nurturing shelter`,answer:"lap"},{id:346,riddle:`Portable workstation
Connecting digital realms
Modern necessity`,answer:"laptop"},{id:347,riddle:`Finality's curtain
Conclusion to all things
Ending's inevitability`,answer:"last"},{id:348,riddle:`Traveler's brief pause
Respite midst the journey's haste
Transition's interlude`,answer:"layover"},{id:349,riddle:`Gradual seepage
Unwanted liquid escape
Integrity's foe`,answer:"leak"},{id:350,riddle:`Wisdom's acquistion
Expanding mind's horizons
Knowledge's sacred quest`,answer:"learn"},{id:351,riddle:`Nature's rugged skin
Protecting life's fragility
Durability's cloak`,answer:"leather"},{id:352,riddle:`Imparting wisdom
Guiding young minds to greatness
Knowledge's sacred rite`,answer:"lecture"},{id:353,riddle:`Elven archer prince
Defending nature's splendor
Woodland guardian`,answer:"legolas"},{id:354,riddle:`Inked thoughts on parchment
Conveying heart's musings
Communication's art`,answer:"letter"},{id:355,riddle:`Verdant leafy gems
Nature's vibrant sustenance
Health's crunchy treasure`,answer:"lettuce"},{id:356,riddle:`Balanced equilibrium
Neutral ground's even plane
Equality's stage`,answer:"level"},{id:357,riddle:`Tiny parasites
Feasting on warmth's haven
Invasive freeloaders`,answer:"lice"},{id:358,riddle:`Clinging to rock's face
Nature's resilient artwork
Patient masterpiece`,answer:"lichen"},{id:359,riddle:`Deceptive falsehood
Veiling truth's naked visage
Honesty's antithesis`,answer:"lie"},{id:360,riddle:`Brilliant radiance
Illuminating the darkness
Nature's guiding torch`,answer:"light"},{id:361,riddle:`Boundary's constraint
Restricting ambition's reach
Potential's leash`,answer:"limit"},{id:362,riddle:`Majestic ruler
Commanding the savannah
Pride's fearless guardian`,answer:"lion"},{id:363,riddle:`Ocean's armored gem
Clutching life with dexterous claws
Delicacy untamed`,answer:"lobster"},{id:364,riddle:`Brand's visual emblem
Identity's signature
Recognition's mark`,answer:"logo"},{id:365,riddle:`Canada's currency
Maple leaf's monetary form
Nation's tender pride`,answer:"loonie"},{id:366,riddle:`Luck's enticing game
Dreams of riches tantalize
Fortune's siren call`,answer:"lottery"},{id:367,riddle:`Sublime connection
Hearts entwined in sacred bond
Eternal union`,answer:"love"},{id:368,riddle:`Unwavering trust
Faithful devotion's anchor
Friendship's bedrock`,answer:"loyalty"},{id:369,riddle:`Soothing melodies
Escorting to slumber's realm
Dreams' gentle usher`,answer:"lullaby"},{id:370,riddle:`Breath's vital chamber
Facilitating life's rhythm
Oxygen's temple`,answer:"lung"},{id:371,riddle:`Poetic expression
Voicing music's heartfelt verse
Emotions untamed`,answer:"lyrics"},{id:372,riddle:`Clearing wild's tangle
Nature's unruly obstruction
Jungle's razor blade`,answer:"machete"},{id:373,riddle:`Automating tasks
Augmenting human efforts
Progress's engine`,answer:"machine"},{id:374,riddle:`Exuding bravado
Confidence's bold persona
Masculine display`,answer:"macho"},{id:375,riddle:`Invisible bonds
Attracting opposing poles
Nature's unseen grasp`,answer:"magnet"},{id:376,riddle:`Awaiting letters
Guarding correspondence's trove
Communication's gate`,answer:"mailbox"},{id:377,riddle:`Canvas for the face
Enhancing nature's artistry
Beauty's painted veil`,answer:"makeup"},{id:378,riddle:`Ancient titan roamed
Towering over the landscape
Prehistoric wonder`,answer:"mammoth"},{id:379,riddle:`Gentle sea kindred
Grazing ocean's lush gardens
Peaceful aquatic souls`,answer:"manatee"},{id:380,riddle:`Extraterrestrial
Visitor from distant worlds
Cosmic explorer`,answer:"martian"},{id:381,riddle:`Spirited champion
Rallying team's passion
Pride's embodiment`,answer:"mascot"},{id:382,riddle:`Concealing visage
Guarding identity's veil
Anonymity's cloak`,answer:"mask"},{id:383,riddle:`Towering pine tree
Ship's steadying backbone
Sailing's staunch pillar`,answer:"mast"},{id:384,riddle:`Cushioning surface
Cradling rest and refuge
Comfort's simple gift`,answer:"mat"},{id:385,riddle:`Chaos reigns supreme
Order's descent to madness
Bedlam's wild dance`,answer:"mayhem"},{id:386,riddle:`Belonging's embrace
United in common purpose
Collective kinship`,answer:"member"},{id:387,riddle:`Mental time capsule
Preserving life's moments past
Mind's treasured archive`,answer:"memory"},{id:388,riddle:`Ocean's siren call
Enchanting those who wander
Beauty beyond dreams`,answer:"mermaid"},{id:389,riddle:`Celestial traveler
Blazing across midnight's veil
Star's fleeting messenger`,answer:"meteor"},{id:390,riddle:`Seasonal pilgrims
Seeking fortunes in new lands
Nature's nomads roam`,answer:"migrate"},{id:391,riddle:`Silent storyteller
Weaving tales without a word
Expression's artisan`,answer:"mime"},{id:392,riddle:`Buried treasure trove
Nature's concealed riches
Earth's hidden jewels`,answer:"mine"},{id:393,riddle:`Unearthing fortune
Delving into nature's vault
Wealth's determined seeker`,answer:"miner"},{id:394,riddle:`Family transporter
Conveying precious cargo
Memories on wheels`,answer:"minivan"},{id:395,riddle:`Reflecting surface
Unveiling truth's honest gaze
Reality's window`,answer:"mirror"},{id:396,riddle:`Lethal projectile
Delivering destruction's kiss
Death's swift messenger`,answer:"missile"},{id:397,riddle:`Warming winter's grip
Protecting tender fingers
Comfort's cozy embrace`,answer:"mitten"},{id:398,riddle:`Bold hairstyle's crest
Defiant expression blazed
Rebellion's plumage`,answer:"mohawk"},{id:399,riddle:`Grinding life's fuel
Nature's culinary millstone
Mastication's might`,answer:"molar"},{id:400,riddle:`Creeping invader
Transforming matter's essence
Nature's alchemist`,answer:"mold"},{id:401,riddle:`Nurturing embrace
Unconditional haven
Love's steady anchor`,answer:"mom"},{id:402,riddle:`Torrential deluge
Nature's rhythmic annual dance
Renewal's liquid gift`,answer:"monsoon"},{id:403,riddle:`Lurking in shadows
Awakening primal terrors
Nightmare's haunting form`,answer:"monster"},{id:404,riddle:`Resourceful scrounger
Surviving on others' leavings
Frugality's art`,answer:"mooch"},{id:405,riddle:`Melodic genius
Composing heaven's symphony
Music's immortal bard`,answer:"mozart"},{id:406,riddle:`Warrior princess brave
Defying destiny's shackles
China's heroine`,answer:"mulan"},{id:407,riddle:`Ancient soul preserved
Guarding the past's mysteries
History's witness`,answer:"mummy"},{id:408,riddle:`Soul's divine language
Transcending spoken barriers
Emotion's pure voice`,answer:"music"},{id:409,riddle:`Ancient wisdom's tale
Explaining the unexplained
Truth cloaked in wonder`,answer:"myth"},{id:410,riddle:`Unique identifier
Summoning one's essence
Identity's call`,answer:"name"},{id:411,riddle:`Nurturing guardian
Tending to young life's blossoms
Childhood's gentle guide`,answer:"nanny"},{id:412,riddle:`Ninja's fierce spirit
Defiant will's embodiment
Determination's fire`,answer:"naruto"},{id:413,riddle:`Little ocean friend
Exploring wonder's vast depths
Adventure beckons`,answer:"nemo"},{id:414,riddle:`Rooftop of the world
Majestic mountain kingdom
Himalayas' jewel`,answer:"nepal"},{id:415,riddle:`Woven cradle warm
Nurturing life's fragile hopes
Nature's loving arms`,answer:"nest"},{id:416,riddle:`Streaming's vast trove
Unlocking entertainment's realm
Stories at command`,answer:"netflix"},{id:417,riddle:`Atom's dense nucleus
Binding matter's essence
Nature's building blocks`,answer:"neutron"},{id:418,riddle:`Day's veil descending
Enveloping in mystery
Darkness's hushed realm`,answer:"night"},{id:419,riddle:`Winged victory's brand
Inspiring athletic feats
Swift triumph's emblem`,answer:"nike"},{id:420,riddle:`Scent's honored gate
Guiding aromas to senses
Fragrance's usher`,answer:"nose"},{id:421,riddle:`Breath's narrow channels
Welcoming life's vital air
Respiration's doors`,answer:"nostril"},{id:422,riddle:`Healing's gentle hand
Tending to suffering's fears
Compassion embodied`,answer:"nurse"},{id:423,riddle:`Warmth in flavor's wrap
Enhancing culinary bliss
Spice's cozy embrace`,answer:"nutmeg"},{id:424,riddle:`Propelling water's path
Guiding vessel's liquid course
Journey's patient aide`,answer:"oar"},{id:425,riddle:`Yielding to command
Surrendering to authority
Submission's humble act`,answer:"obey"},{id:426,riddle:`Productivity's realm
Facilitating daily toils
Endeavor's domain`,answer:"office"},{id:427,riddle:`Obscuring vision
Concealing truth's inner light
Mystery's veil drawn`,answer:"opaque"},{id:428,riddle:`Celestial ballet
Endless revolutions traced
Gravity's embrace`,answer:"orbit"},{id:429,riddle:`Vital bodily choir
Harmonizing life's rhythm
Nature's symphony`,answer:"organ"},{id:430,riddle:`Measure of substance
Quantifying matter's weight
Mass's modest unit`,answer:"ounce"},{id:431,riddle:`Culinary hearth
Transforming raw to savored
Flavor's magic kiln`,answer:"oven"},{id:432,riddle:`Winged silent hunter
Patient guardian of the night
Wisdom's feathered sage`,answer:"owl"},{id:433,riddle:`Ocean's pearl treasures
Nature's delicacy cloaked
Briny jewel concealed`,answer:"oyster"},{id:434,riddle:`Portal to knowledge
Unlocking wisdom's secrets
Enlightenment's gate`,answer:"page"},{id:435,riddle:`Simple vessel formed
Containing life's liquid wealth
Nature's humble cup`,answer:"pail"},{id:436,riddle:`Suffering's cruel sting
Reminding of fragility
Life's harsh tutor`,answer:"pain"},{id:437,riddle:`Grandeur's stately halls
Opulence and majesty
Wealth's resplendent home`,answer:"palace"},{id:438,riddle:`Bamboo forest's prince
Graceful ambassador of peace
Nature's gentle soul`,answer:"panda"},{id:439,riddle:`Overwhelming dread
Paralyzing the senses
Fear's icy grip`,answer:"panic"},{id:440,riddle:`Celebration's march
Uniting in jubilant joy
Festivity's grand stream`,answer:"parade"},{id:441,riddle:`Nurturing life's spark
Guiding with wisdom and care
Love's steadfast anchors`,answer:"parent"},{id:442,riddle:`Diplomatic words
Averting conflict's storm
Peace's delicate path`,answer:"parley"},{id:443,riddle:`Humor's playful twist
Mirroring truth's absurdity
Wit's clever portrait`,answer:"parody"},{id:444,riddle:`Shared journey's ally
Strengthening through unity
Friendship's steadfast bond`,answer:"partner"},{id:445,riddle:`Sugary temptation
Indulging sweet tooth's desires
Dessert's guilty bliss`,answer:"pastry"},{id:446,riddle:`Serenity's embrace
Calming storms of turmoil
Harmony's sweet balm`,answer:"peace"},{id:447,riddle:`Resplendent display
Nature's vibrant living gem
Pride's majestic plume`,answer:"peacock"},{id:448,riddle:`Nutty treasure trove
Nature's protein-rich bounty
Crunchy delight`,answer:"peanut"},{id:449,riddle:`Humble life's toiler
Tilling earth's fertile bounty
Simple dignity`,answer:"peasant"},{id:450,riddle:`Nature's warm mantle
Protecting from winter's bite
Furry guardian`,answer:"pelt"},{id:451,riddle:`Refreshment's crisp tide
Quenching summer's thirsty call
Carbonated wave`,answer:"pepsi"},{id:452,riddle:`Unwanted invader
Disrupting order's sanctity
Plague's persistent foe`,answer:"pest"},{id:453,riddle:`Ancient ruler's might
Guarding the Nile's fertile realm
Egypt's immortal king`,answer:"pharaoh"},{id:454,riddle:`Connecting voices
Bridging distances unseen
Technology's bond`,answer:"phone"},{id:455,riddle:`Frozen memories
Capturing life's fleeting moments
Time's cherished portrait`,answer:"photo"},{id:456,riddle:`Ivory symphony
Evocative melodies flow
Music's elegant dance`,answer:"piano"},{id:457,riddle:`Nature's open feast
Celebrating the outdoors
Fresh air's banquet`,answer:"picnic"},{id:458,riddle:`Squalid dwelling place
Nature's humblest abode
Simple life's content`,answer:"pigpen"},{id:459,riddle:`Orderly stacked mass
Composing neat accumulation
Structured assemblage`,answer:"pile"},{id:460,riddle:`Spiritual seeker
Journeying sacred terrain
Faith's ardent traveler`,answer:"pilgrim"},{id:461,riddle:`Soaring certainty
Guiding through uncertainty
Confidence takes flight`,answer:"pilot"},{id:462,riddle:`Channeling life's flow
Guiding unseen forces' path
Nature's humble conduit`,answer:"pipe"},{id:463,riddle:`Daring sea renegade
Plundering ocean's treasures
Adventure's rebel soul`,answer:"pirate"},{id:464,riddle:`Savory disc of bliss
Cheese and dough's delicious tryst
Culinary canvas`,answer:"pizza"},{id:465,riddle:`Architecting steps
Mapping the path to success
Strategy's blueprint`,answer:"plan"},{id:466,riddle:`Sturdy wooden length
Bridging gaps with confidence
Nature's humble beam`,answer:"plank"},{id:467,riddle:`Synthetic polymer
Molded into endless forms
Human ingenuity`,answer:"plastic"},{id:468,riddle:`Cultivating soil
Opening earth's fertile womb
Harvest's diligent aid`,answer:"plow"},{id:469,riddle:`Pipe's deft caretaker
Mastering water's meandering
Fluid choreographer`,answer:"plumber"},{id:470,riddle:`Portable vessel
Containing life's essentials
Convenience's pouch`,answer:"pocket"},{id:471,riddle:`Precise indicator
Guiding toward desired goals
Direction's arrow`,answer:"point"},{id:472,riddle:`Fantastic realm
Where creatures come alive
Imagination reigns`,answer:"pokemon"},{id:473,riddle:`Towering sentinel
Marking boundaries unseen
Nature's silent sentry`,answer:"pole"},{id:474,riddle:`Upholding order
Guarding society's virtue
Justice's sentinels`,answer:"police"},{id:475,riddle:`Ceremonial flair
Elevating the mundane
Grandeur's elegant veil`,answer:"pomp"},{id:476,riddle:`Arrogant display
Self-importance's vain curtain
Humility's bane`,answer:"pompous"},{id:477,riddle:`Friendly rivalry
Pixelated battles waged
Digital showdown`,answer:"pong"},{id:478,riddle:`Sailor's mighty arms
Spinach-fueled heroic deeds
Cartoon legend`,answer:"popeye"},{id:479,riddle:`Supporting pillar
Anchoring firm foundation
Structure's backbone`,answer:"post"},{id:480,riddle:`Innocent blossom
Awakening to life's grand stage
Youth's fleeting breath`,answer:"preteen"},{id:481,riddle:`Hunter's target seized
Life's cruel struggle for survival
Nature's harsh cycle`,answer:"prey"},{id:482,riddle:`Coveted trophy
Reward for arduous quest
Victory's sweet spoils`,answer:"prize"},{id:483,riddle:`Nature's bountiful gifts
Nurturing life's sustenance
Earth's generous yield`,answer:"produce"},{id:484,riddle:`Endeavor's sweet fruit
Labor's well-earned dividend
Success's nectar`,answer:"profit"},{id:485,riddle:`Sacred covenant
Binding hearts in trust's embrace
Honor's pledge sincere`,answer:"promise"},{id:486,riddle:`Offering life's hand
Seeking union's sacred bond
Love's tender question`,answer:"propose"},{id:487,riddle:`Autumn's vibrant gem
Guarding nature's sweet treasures
Harvest's golden prize`,answer:"pumpkin"},{id:488,riddle:`Rebel's defiant cry
Challenging conformity
Anarchy's anthem`,answer:"punk"},{id:489,riddle:`Animated life
Guided by unseen strings
Performer's brave soul`,answer:"puppet"},{id:490,riddle:`Malleable clay
Adapting to any shape
Sculptor's humble tool`,answer:"putty"},{id:491,riddle:`Crystalline beauty
Nature's mesmerizing gems
Earth's frozen rainbows`,answer:"quartz"},{id:492,riddle:`Orderly procession
Patiently awaiting turns
Courtesy's design`,answer:"queue"},{id:493,riddle:`Abandoning toil
Surrendering to leisure
Duty's brief reprieve`,answer:"quit"},{id:494,riddle:`Archer's lethal arms
Delivering pointed vengeance
Death's winged envoys`,answer:"quiver"},{id:495,riddle:`Masked bandit roams
Nature's clever mischief-maker
Nocturnal burglar`,answer:"raccoon"},{id:496,riddle:`Swift competition
Pushing limits to the brink
Victory's fierce chase`,answer:"race"},{id:497,riddle:`Fury's searing blaze
Consuming reason's gentle flame
Anger's inferno`,answer:"rage"},{id:498,riddle:`Spectrum's vibrant arch
Nature's fleeting masterpiece
Beauty's transient bow`,answer:"rainbow"},{id:499,riddle:`Unpredictable
Defying order's patterns
Chaos's whimsical dance`,answer:"random"},{id:500,riddle:`Renaissance master
Brilliant painter's legacy
Italian virtuoso`,answer:"raphael"},{id:501,riddle:`Mechanical click
Steadily tightening grip
Progress's steady beat`,answer:"ratchet"},{id:502,riddle:`Radiant beam bright
Illuminating the darkness
Light's elegant stream`,answer:"ray"},{id:503,riddle:`Vast expanse unknown
Mystery's uncharted terrain
Exploration beckons`,answer:"realm"},{id:504,riddle:`Paper's bundled stack
Awaiting words' inscription
Blank canvas prepared`,answer:"ream"},{id:505,riddle:`Transaction's trace
Confirming exchange's details
Proof of purchased goods`,answer:"receipt"},{id:506,riddle:`Youthful interlude
Brief respite from studious toil
Playtime's joyful call`,answer:"recess"},{id:507,riddle:`Capturing moments
Preserving time's fleeting steps
History's witness`,answer:"record"},{id:508,riddle:`Rebirth of discards
Nature's wisdom circles back
Waste's metamorphosis`,answer:"recycle"},{id:509,riddle:`Impartial judge
Ensuring fair play's virtue
Justice's guardian`,answer:"referee"},{id:510,riddle:`Reimbursement's flow
Restoring balance's scales
Equity's return`,answer:"refund"},{id:511,riddle:`Remorse's bitter sting
Lamenting choices ill-made
Hindsight's painful thorn`,answer:"regret"},{id:512,riddle:`Persisting essence
Defying time's erosion
Constancy's steadfast core`,answer:"remain"},{id:513,riddle:`Commerce's heartbeat
Facilitating exchange
Trade's vital artery`,answer:"retail"},{id:514,riddle:`Life's autumn sunset
Embracingwisdom's gentle rest
Labor's earned repose`,answer:"retire"},{id:515,riddle:`Unveiling truth's form
Lifting mystery's concealing veil
Enlightenment's dawn`,answer:"reveal"},{id:516,riddle:`Vindicating strike
Justice's stern sentencing blow
Scorned fury's release`,answer:"revenge"},{id:517,riddle:`Earned accolade
Commending efforts well-spent
Success's sweet prize`,answer:"reward"},{id:518,riddle:`Lyrical wordplay
Crafting harmonious verse
Poetry's chiming dance`,answer:"rhyme"},{id:519,riddle:`Steady pulse of life
Guiding movements ebb and flow
Nature's harmonious beat`,answer:"rhythm"},{id:520,riddle:`Skeletal pillars
Supporting life's fragile frame
Body's sturdy rungs`,answer:"rib"},{id:521,riddle:`Puzzling conundrum
Challenging the mind's acuity
Wit's entertaining test`,answer:"riddle"},{id:522,riddle:`Moral compass true
Guiding through life's labyrinth
Virtue's steadfast path`,answer:"right"},{id:523,riddle:`Nature's tough facade
Guarding tender fruit within
Protective shell`,answer:"rind"},{id:524,riddle:`Daring's double edge
Venturing into the unknown
Peril and reward`,answer:"risk"},{id:525,riddle:`Constant competition
Pushing limits in fierce combat
Striving for greatness`,answer:"rival"},{id:526,riddle:`Elegant garment
Adorning with regal grace
Noble's stately cloak`,answer:"robe"},{id:527,riddle:`Mechanical life
Emulating human traits
Artificial aide`,answer:"robot"},{id:528,riddle:`Soaring skyward thrust
Defying gravity's shackles
Exploration's chariot`,answer:"rocket"},{id:529,riddle:`Untamed spectacle
Cowboy's daring feats displayed
Wild west's grand showcase`,answer:"rodeo"},{id:530,riddle:`Gliding aquatic path
Humble vessel's peaceful drift
Liquid serenity`,answer:"rowboat"},{id:531,riddle:`Stretching resilience
Molding to shifting demands
Flexibility's might`,answer:"rubber"},{id:532,riddle:`Crimson gem aglow
Nature's radiant masterpiece
Passion's scarlet fire`,answer:"ruby"},{id:533,riddle:`Guiding water's course
Vessel's steadying influence
Direction's gentle hand`,answer:"rudder"},{id:534,riddle:`Small in the litter, 
Last to reach the feeding bowl, 
Nature's tiny child.`,answer:"runt"},{id:535,riddle:`Guardian in the night, 
Bolted barrier of steel, 
Protector's stronghold.`,answer:"safe"},{id:536,riddle:`Leap against the flow, 
Journey to birthplace to spawn, 
Nature's cyclic dance.`,answer:"salmon"},{id:537,riddle:`Seasoning of life, 
Crystals from the ancient sea, 
Flavor's simple joy.`,answer:"salt"},{id:538,riddle:`Childhood's domain vast, 
Creativity's realm wide, 
Imagination's play.`,answer:"sandbox"},{id:539,riddle:`Life's flowing essence, 
Amber nectar from the tree, 
Nature's golden gift.`,answer:"sap"},{id:540,riddle:`Elegant waist tie, 
Adorning cloth of beauty, 
Fashion's graceful touch.`,answer:"sash"},{id:541,riddle:`Ringed giant in space, 
Celestial beauty's guard, 
Orb of endless awe.`,answer:"saturn"},{id:542,riddle:`Linked in savory chain, 
Meaty flavor fills the air, 
Grill's hearty sizzle.`,answer:"sausage"},{id:543,riddle:`Neck's cozy embrace, 
Woven warmth against the chill, 
Fashion's winter hug.`,answer:"scarf"},{id:544,riddle:`Temple of knowledge, 
Minds nurtured in wisdom's light, 
Future's hopeful bloom.`,answer:"school"},{id:545,riddle:`Unraveling truth, 
Inquiry's quest for knowledge, 
Discovery's path.`,answer:"science"},{id:546,riddle:`Echo of terror, 
Piercing sound of darkest fear, 
Night's chilling outcry.`,answer:"scream"},{id:547,riddle:`Words upon the page, 
Narrative's unfolding tale, 
Story's guiding hand.`,answer:"script"},{id:548,riddle:`Harvester's sharp blade, 
Reaper's silent sweep of wheat, 
Harvest moon's shadow.`,answer:"scythe"},{id:549,riddle:`Nature's changing cloak, 
Paints the world in hues of time, 
Cycle's gentle turn.`,answer:"season"},{id:550,riddle:`Cushion for weary, 
Perch for soul in transit's rest, 
Comfort's gentle hold.`,answer:"seat"},{id:551,riddle:`Promising new life, 
Nature's hope in tiny form, 
Future's budding dream.`,answer:"seed"},{id:552,riddle:`Master's helping hand, 
Silent helper in the home, 
Duty's loyal call.`,answer:"servant"},{id:553,riddle:`Hidden underworld, 
Flowing channels in the dark, 
City's buried vein.`,answer:"sewer"},{id:554,riddle:`Vertical descent, 
Passage from light to the deep, 
Earth's hidden core path.`,answer:"shaft"},{id:555,riddle:`Concealing shadow, 
Guilt's shroud upon the spirit, 
Heart's heavy burden.`,answer:"shame"},{id:556,riddle:`Cleansing liquid fall, 
Foam upon the skin's delight, 
Refreshing cascade.`,answer:"shower"},{id:557,riddle:`Tiny hunter swift, 
Mouse-sized with a fierce bite, 
Nature's hidden snout.`,answer:"shrew"},{id:558,riddle:`Harvester's curved blade, 
Reaper's swift slice through the stalks, 
Harvest moon's shadow.`,answer:"sickle"},{id:559,riddle:`Beckoning to all, 
Messenger of change and hope, 
Motion in the air.`,answer:"signal"},{id:560,riddle:`River's muddy bed, 
Settled sediment below, 
Earth's silent deposit.`,answer:"silt"},{id:561,riddle:`Lion king in the wild, 
Majesty in every step, 
Savanna's noble lord.`,answer:"simba"},{id:562,riddle:`Realm of dreams and rest, 
Mind's journey to the unknown, 
Night's peaceful refuge.`,answer:"sleep"},{id:563,riddle:`Winter's icy touch, 
Tiny crystals from the sky, 
Frost's cold embrace.`,answer:"sleet"},{id:564,riddle:`Droop of body's weight, 
Tiredness in every limb, 
Weariness's grasp.`,answer:"slump"},{id:565,riddle:`Blast from inner depth, 
Clearing passage from within, 
Nose's sudden blow.`,answer:"sneeze"},{id:566,riddle:`Brief escape from time, 
Mind's journey to the void's edge, 
Twilight's silent pause.`,answer:"snooze"},{id:567,riddle:`Night's rumbling bass, 
Symphony of slumber's realm, 
Echoes in the dark.`,answer:"snore"},{id:568,riddle:`Footwear for the cold, 
Cloth guardians of the toes, 
Warmth in woolen weave.`,answer:"socks"},{id:569,riddle:`Melody's sweet call, 
Harmony of heart and voice, 
Echoes of the soul.`,answer:"song"},{id:570,riddle:`Essence of being, 
Eternal spark within all, 
Life's eternal flame.`,answer:"soul"},{id:571,riddle:`Vast expanse above, 
Infinity's silent void, 
Stars in endless dance.`,answer:"space"},{id:572,riddle:`Extra for the need, 
Surplus for the unforeseen, 
Reserve for the lack.`,answer:"spare"},{id:573,riddle:`Absorber of spill, 
Porous friend of cleanliness, 
Liquid's eager mate.`,answer:"sponge"},{id:574,riddle:`Digital jukebox, 
Melodies at your command, 
Music's streaming joy.`,answer:"spotify"},{id:575,riddle:`Life's rebirth in bloom, 
Nature's cycle starts anew, 
Blossoms in the air.`,answer:"spring"},{id:576,riddle:`Hunker close to ground, 
Muscles tensed in readiness, 
Vigilance in form.`,answer:"squat"},{id:577,riddle:`Ascending the climb, 
Footsteps echo on each step, 
Ascent to the heights.`,answer:"stairs"},{id:578,riddle:`Office binding force, 
Holds papers in neat bundles, 
Sometimes on the desk.`,answer:"staple"},{id:579,riddle:`New venture's first step, 
Seed of innovation sown, 
Business' humble start.`,answer:"startup"},{id:580,riddle:`Remain in one place, 
Perseverance in stillness, 
Anchor in the storm.`,answer:"stay"},{id:581,riddle:`Simmering liquid, 
Culinary magic brew, 
Comfort in a bowl.`,answer:"stew"},{id:582,riddle:`Long-legged sky dancer, 
Carrier of new life's hope, 
Baby's aerial birth.`,answer:"stork"},{id:583,riddle:`Tales woven in words, 
Narratives of life's journey, 
Pages of the past.`,answer:"story"},{id:584,riddle:`Seeker of knowledge, 
Scholar in the halls of learn, 
Mind's eager pupil.`,answer:"student"},{id:585,riddle:`Fill with things of need, 
Overflowing with possessions, 
Cluttered life's debris.`,answer:"stuff"},{id:586,riddle:`Nature's sweet delight, 
Crystalline nectar of life, 
Pleasure on the tongue.`,answer:"sugar"},{id:587,riddle:`Formal attire's grace, 
Tailored elegance on show, 
Dressed for the occasion.`,answer:"suit"},{id:588,riddle:`Day's radiant orb, 
Source of warmth and light's embrace, 
Celestial beacon.`,answer:"sun"},{id:589,riddle:`Skin kissed by fiery, 
Glow of summertime's passion, 
Crimson mark of love.`,answer:"sunburn"},{id:590,riddle:`Riding waves with grace, 
Dance upon the ocean's crest, 
Surfer's liquid art.`,answer:"surfing"},{id:591,riddle:`Ocean's culinary, 
Rice and fish in seaweed wrap, 
Delicate delight.`,answer:"sushi"},{id:592,riddle:`Marsh's murky embrace, 
Home to creatures of the deep, 
Nature's hidden world.`,answer:"swamp"},{id:593,riddle:`Buzzing cloud of wings, 
Hive's chaotic symphony, 
Nature's busy throng.`,answer:"swarm"},{id:594,riddle:`Winter's warm embrace, 
Woolen shield against the cold, 
Comfort in knit form.`,answer:"sweater"},{id:595,riddle:`Injector of cure, 
Healing touch in slender form, 
Medicine's aid.`,answer:"syringe"},{id:596,riddle:`Interconnected, 
Parts that work in unity, 
Order in chaos.`,answer:"system"},{id:597,riddle:`Pond's baby creature, 
Future frog in tiny form, 
Nature's transformation.`,answer:"tadpole"},{id:598,riddle:`Liquid reservoir, 
Container for aquatic life, 
Glass home for the fish.`,answer:"tank"},{id:599,riddle:`Tell tales out of school, 
Whispered secrets in the wind, 
Gossip's silent flight.`,answer:"tattle"},{id:600,riddle:`Financial burden, 
Tribute paid to governance, 
Civic duty's call.`,answer:"taxes"},{id:601,riddle:`City's roving car, 
Ferry for the urban tide, 
Traveler's swift ride.`,answer:"taxi"},{id:602,riddle:`Infused aromatic, 
Steeped in hot water's embrace, 
Sip of fragrant tea.`,answer:"teabag"},{id:603,riddle:`Unified in goal, 
Together in strength they stand, 
Victory as one.`,answer:"team"},{id:604,riddle:`Torrent of emotion, 
Droplet of the soul's sorrow, 
Heart's mournful release.`,answer:"tearful"},{id:605,riddle:`Home of skin and poles, 
Shelter in nature's embrace, 
Nomad's resting place.`,answer:"teepee"},{id:606,riddle:`Storm within the self, 
Fury's tempest in the soul, 
Emotion's wild tide.`,answer:"temper"},{id:607,riddle:`Electric pioneer, 
Innovator's sparking dream, 
Current of the age.`,answer:"tesla"},{id:608,riddle:`Speak truth under oath's gaze, 
Swear upon the sacred book, 
Witness to the facts.`,answer:"testify"},{id:609,riddle:`Falling blocks in line, 
Puzzle of spatial design, 
Mind's strategic play.`,answer:"tetris"},{id:610,riddle:`Cosmic titan's might, 
Grim fate wielder's shadow cast, 
Infinity's will.`,answer:"thanos"},{id:611,riddle:`Thought's whispered whisper, 
Framework of the universe, 
Mind's speculative realm.`,answer:"theory"},{id:612,riddle:`Cogitating mind, 
Mental gears turning in thought, 
Brain's silent chatter.`,answer:"think"},{id:613,riddle:`Weaver's slender strand, 
Fabric's delicate support, 
Needle's quiet guide.`,answer:"thread"},{id:614,riddle:`Seat of regal grace, 
Monarch's symbol of power, 
Majestic ruler's perch.`,answer:"throne"},{id:615,riddle:`Admission to ride, 
Passage to a journey's start, 
Entry to the show.`,answer:"ticket"},{id:616,riddle:`Ocean's rhythmic pull, 
Dance of moon's gravitational play, 
Nature's liquid clock.`,answer:"tide"},{id:617,riddle:`Ever fleeting span, 
Passage marked by seconds' hand, 
Life's elusive grasp.`,answer:"time"},{id:618,riddle:`Shade on window glass, 
Tint of privacy's cocoon, 
Sunlight's filtered hue.`,answer:"tinting"},{id:619,riddle:`Whispering footfall, 
Silent step in stealthy move, 
Sneaky dancer's gait.`,answer:"tiptoe"},{id:620,riddle:`Rubber road companion, 
Tread-worn friend of weary wheels, 
Roll on highway's song.`,answer:"tire"},{id:621,riddle:`Bread's crispy salute, 
Golden brown in fire's heat, 
Morning's crunchy cheer.`,answer:"toast"},{id:622,riddle:`Present day's sibling, 
Now's kin in the passage of, 
Time's eternal flow.`,answer:"today"},{id:623,riddle:`Tiny toddling step, 
Early years' wobbly dance, 
Childhood's playful gait.`,answer:"toddler"},{id:624,riddle:`Nature's twisting wrath, 
Spiral fury in the sky, 
Wind's furious dance.`,answer:"tornado"},{id:625,riddle:`Wanderer in lands far, 
Seeker of new sights unseen, 
Adventure's eager guest.`,answer:"tourist"},{id:626,riddle:`Nomad's home on wheels, 
Rolling shelter on the road, 
Mobile haven's grace.`,answer:"trailer"},{id:627,riddle:`Steel serpent's journey, 
Iron horse on tracks of steel, 
Locomotive's song.`,answer:"train"},{id:628,riddle:`Caught in fate's cruel snare, 
Captive in life's twisted plot, 
Freedom's distant dream.`,answer:"trapped"},{id:629,riddle:`Sea's fishing vessel, 
Sailor's livelihood and craft, 
Ocean's bounty quest.`,answer:"trawler"},{id:630,riddle:`Stumble, stumble, fall, 
Unexpected journey's halt, 
Foot's sudden misstep.`,answer:"trip"},{id:631,riddle:`Hauler of the load, 
Giant on the road's expanse, 
Freight's rolling beast.`,answer:"truck"},{id:632,riddle:`Nature's roaring wave, 
Ocean's fury unleashed, 
Watery rampage.`,answer:"tsunami"},{id:633,riddle:`Basin of warm embrace, 
Soothing soak in liquid's hold, 
Bathing sanctuary.`,answer:"tub"},{id:634,riddle:`Brassy blast of sound, 
Echo of orchestral grace, 
Music's golden horn.`,answer:"tuba"},{id:635,riddle:`Pull with all your might, 
Struggle against fate's cruel hand, 
Tension's silent war.`,answer:"tug"},{id:636,riddle:`Harbor's working friend, 
Towing ships in sea's embrace, 
Sailor's guiding light.`,answer:"tugboat"},{id:637,riddle:`Tower's armored head, 
Sentinel of fortress grand, 
Castle's silent guard.`,answer:"turret"},{id:638,riddle:`Guide in learning's art, 
Mentor in the scholar's path, 
Knowledge's patient hand.`,answer:"tutor"},{id:639,riddle:`Ballerina's grace, 
Skirt of tulle in twirl's dance, 
Graceful pirouette.`,answer:"tutu"},{id:640,riddle:`Snap of tightened string, 
Vibrant hum of musical, 
Guitar's playful strum.`,answer:"twang"},{id:641,riddle:`Chirp of digital, 
Social chatter in the void, 
Virtual bird's song.`,answer:"twitter"},{id:642,riddle:`Elevation's climb, 
Ascend to greater heights reached, 
Progress's onward march.`,answer:"upgrade"},{id:643,riddle:`Night's bloodthirsty fiend, 
Undead predator's delight, 
Fangs in darkness' shroud.`,answer:"vampire"},{id:644,riddle:`Traveler on the road, 
Journey's mobile abode, 
Wandering shelter's grace.`,answer:"van"},{id:645,riddle:`Creamy pod's delight, 
Flavoring in frozen treat, 
Ice cream's fragrant base.`,answer:"vanilla"},{id:646,riddle:`Herbivore's delight, 
Plant-based feast for conscious soul, 
Nature's gentle meal.`,answer:"vegan"},{id:647,riddle:`Road's swift traveler, 
Engine-powered journey's steed, 
Transport's metal form.`,answer:"vehicle"},{id:648,riddle:`Conduit of life's flow, 
Pathway for the crimson stream, 
Artery's pulsing beat.`,answer:"vein"},{id:649,riddle:`Guardian of the chest, 
Cloth protector of the heart, 
Fashion's cozy hug.`,answer:"vest"},{id:650,riddle:`Darkness' twisted heart, 
Evil's shadow in the night, 
Nemesis of light.`,answer:"villain"},{id:651,riddle:`Future's painted dream, 
Image of what's yet to be, 
Hope in painted hues.`,answer:"vision"},{id:652,riddle:`Health's little boost, 
Pill of wellness in your hand, 
Nature's tiny aid.`,answer:"vitamin"},{id:653,riddle:`Echo of the soul, 
Sound of inner essence's call, 
Vocal spirit's song.`,answer:"voice"},{id:654,riddle:`Wiggle of the tail, 
Happy dance in furry form, 
Canine joyous cheer.`,answer:"wag"},{id:655,riddle:`Robotic friend in space, 
Lone explorer's journey's grace, 
Pixar's metal heart.`,answer:"wall-e"},{id:656,riddle:`Keeper of treasures, 
Leather pouch of wealth's embrace, 
Coins' silent haven.`,answer:"wallet"},{id:657,riddle:`Sorrow's silent swim, 
Drowning in emotion's tide, 
Grief's watery embrace.`,answer:"wallow"},{id:658,riddle:`Spicy green delight, 
Flavor kick in sushi's bite, 
Japanese zing's gift.`,answer:"wasabi"},{id:659,riddle:`Quencher of thirst's cry, 
Liquid life in crystal form, 
Nature's purest gift.`,answer:"water"},{id:660,riddle:`Fortune's gleaming hold, 
Currency of dreams and toil, 
Midas' golden touch.`,answer:"wealth"},{id:661,riddle:`Sky's shifting canvas, 
Nature's volatile display, 
Atmosphere's mood swing.`,answer:"weather"},{id:662,riddle:`Union of two hearts, 
Vows exchanged in love's embrace, 
Eternity's bond.`,answer:"wedding"},{id:663,riddle:`Nature's unwanted, 
Intruder in garden's grace, 
Flora's foe in green.`,answer:"weed"},{id:664,riddle:`Metal's fiery dance, 
Sparks that join the pieces whole, 
Craftsman's molten art.`,answer:"welder"},{id:665,riddle:`Drenched in liquid's hold, 
Rain's gentle caress on skin, 
Nature's moistened gift.`,answer:"wet"},{id:666,riddle:`Leviathan of seas, 
Giant of the ocean's realm, 
Nature's mighty king.`,answer:"whale"},{id:667,riddle:`Milky protein's form, 
Liquid gold of dairy's hold, 
Cheese's secret twin.`,answer:"whey"},{id:668,riddle:`Crack of dominance, 
Sound of authority's lash, 
Power's echoing call.`,answer:"whip"},{id:669,riddle:`Vortex of motion, 
Stirring life with metal hand, 
Culinary dance.`,answer:"whisk"},{id:670,riddle:`Digital connect, 
Invisible web's embrace, 
Cyberspace's signal.`,answer:"wifi"},{id:671,riddle:`Mane of synthetic, 
Locks of fashion's false grace, 
Stylish deception.`,answer:"wig"},{id:672,riddle:`Victor's sweet triumph, 
Champion in the game of life, 
Conquest's golden crown.`,answer:"win"},{id:673,riddle:`Nature's breath of life, 
Invisible force of change, 
Sky's playful spirit.`,answer:"wind"},{id:674,riddle:`Desire's whispered plea, 
Hope's silent plea to stars, 
Dream's tender request.`,answer:"wish"},{id:675,riddle:`Crafty spellcaster, 
Magic wielder in the dark, 
Sorcerer's crafty hand.`,answer:"witch"},{id:676,riddle:`Arcane sorcerer, 
Master of the mystic arts, 
Magic's ancient sage.`,answer:"wizard"},{id:677,riddle:`Body's fiery dance, 
Exercise in sweat's embrace, 
Fitness's joyful art.`,answer:"workout"},{id:678,riddle:`Realm of all known life, 
Earth's spinning orb of blue, 
Humanity's home.`,answer:"world"},{id:679,riddle:`Twist in pain's embrace, 
Body's writhing agony, 
Tortured spirit's scream.`,answer:"writhe"},{id:680,riddle:`Ocean's floating grace, 
Luxury on liquid realm, 
Sailing palace grand.`,answer:"yacht"},{id:681,riddle:`Mountain wanderer, 
Shaggy beast of snow-capped heights, 
Highland's furry friend.`,answer:"yak"},{id:682,riddle:`Plot of earth's green grace, 
Nature's carpet spread with care, 
Garden's lush expanse.`,answer:"yard"},{id:683,riddle:`Mountain's hidden friend, 
Mythical beast of legend, 
Snowy wilderness.`,answer:"yeti"},{id:684,riddle:`Jedi master sage, 
Mentor in the force's flow, 
Galactic guide's light.`,answer:"yoda"},{id:685,riddle:`Alpine melody, 
Echoes from the mountain's heart, 
Nature's joyful song.`,answer:"yodel"},{id:686,riddle:`Sun's golden center, 
Breakfast orb of morning's light, 
Egg's yellow treasure.`,answer:"yolk"},{id:687,riddle:`Virtual showcase, 
Digital stage of the world, 
Internet's vast scroll.`,answer:"youtube"},{id:688,riddle:`Ice's gliding friend, 
Rink's smooth operator's tool, 
Hockey's icy dance.`,answer:"zamboni"},{id:689,riddle:`Mind's tranquil garden, 
Serene sanctuary of peace, 
Harmony's still pool.`,answer:"zen"},{id:690,riddle:`Nothingness in count, 
Void's absence in the scale, 
Emptiness's realm.`,answer:"zero"},{id:691,riddle:`Father of the gods, 
Olympus' ruler in might, 
Thunder wielder's throne.`,answer:"zeus"},{id:692,riddle:`Fabric's toothy grip, 
Closure of cloth's parted seam, 
Garment's metal teeth.`,answer:"zipper"},{id:693,riddle:`Risen from the grave, 
Undead wanderer's grim plight, 
Lifeless horror's march.`,answer:"zombie"},{id:694,riddle:`Menagerie's domain, 
Nature's diverse display, 
Animal kingdom.`,answer:"zoo"}],Mf=()=>{Ie.useState(0);const e=Math.floor(Math.random()*694)+0,[n,r]=Ie.useState(Ff[e]),[t,i]=Ie.useState([]),[l,s]=Ie.useState([]),[o,a]=Ie.useState(""),[c,g]=Ie.useState(!1);function h(y){return y.split(`
`).map((_,d)=>R.jsxs(Jo.Fragment,{children:[_,R.jsx("br",{})]},d))}Ie.useEffect(()=>{const y=n.answer.split("").map((m,C)=>({letter:m.toUpperCase(),clicked:!1})),_=Math.max(10-y.length,0),u="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").sort(()=>Math.random()-.5).slice(0,_).map(m=>({letter:m,clicked:!1})),f=y.concat(u).sort(()=>Math.random()-.5);i(f)},[n]);const p=y=>{if(!o&&!t[y].clicked){const _=t[y].letter;i(d=>{const u=[...d];return u[y].clicked=!0,u}),s(d=>[...d,_])}},v=()=>{const y=l.join("");a(y);const _=y.toUpperCase()===n.answer.toUpperCase();g(_)},k=()=>{i(y=>y.map(_=>({..._,clicked:!1}))),s([]),a(""),g(!1)};return R.jsxs("div",{className:"container",children:[R.jsx("h1",{children:"Hai-Clue"}),R.jsx("h2",{children:h(n.riddle)}),R.jsxs("div",{className:"your-selection",children:[R.jsx("strong",{}),R.jsx("span",{children:l.join("")})]}),R.jsxs("div",{className:"letter-grid",children:[R.jsx("div",{className:"row",children:t.slice(0,5).map((y,_)=>R.jsx("button",{onClick:()=>p(_),className:y.clicked?"selected":"",children:y.letter},_))}),R.jsx("div",{className:"row",children:t.slice(5,10).map((y,_)=>R.jsx("button",{onClick:()=>p(_+5),className:y.clicked?"selected":"",children:y.letter},_+5))})]}),R.jsxs("div",{className:"controls",children:[R.jsx("button",{onClick:v,disabled:o,children:"Submit"}),R.jsx("button",{onClick:k,disabled:!l.length,children:"Reset"}),R.jsx("button",{onClick:()=>window.location.reload(),children:"Next"}),!c&&o&&R.jsx("button",{onClick:k,children:"Try Again"})]}),R.jsxs("div",{children:[o&&R.jsx("p",{children:c?"Correct!":"Incorrect! Try again."}),c&&R.jsxs("p",{children:["Answer: ",n.answer.toUpperCase()]})]})]})},Df=()=>R.jsx(R.Fragment,{children:R.jsx(Mf,{})});$i.createRoot(document.getElementById("root")).render(R.jsx(Jo.StrictMode,{children:R.jsx(Df,{})}));
