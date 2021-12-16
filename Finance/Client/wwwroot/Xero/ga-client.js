var gaClient=function(e){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),n=1;n<arguments.length;n++){var a=arguments[n];if(null!=a)for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])}return r});function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t=(function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(r,[{key:"getPath",value:function(){return location.pathname+location.search+location.hash}},{key:"onurlchange",value:function(){var e=this.oldPath,t=this.getPath();this.oldPath=t,e.toLowerCase()!=t.toLowerCase()&&this.removeHash(e).toLowerCase()==this.removeHash(t).toLowerCase()&&this.tracker.send("pageview",t)}},{key:"removeHash",value:function(e){var t=e.indexOf("#");return-1==t?e:e.substr(0,t)}}]),r);function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.tracker=e,this.oldPath=this.getPath(),window.addEventListener("popstate",this.onurlchange.bind(this)),window.addEventListener("hashchange",this.onurlchange.bind(this)),this.tracker.set("page",this.getPath())}var a="hashChangeTracker",g={debug:!1,autotrack:!1,sendPageView:!0,defaultAutotrackScriptUrl:"/autotrack.js",defaultScriptUrl:"/analytics.js",attributePrefix:"data-",autotrackWidgets:["cleanUrlTracker","eventTracker","impressionTracker","maxScrollTracker","mediaQueryTracker","urlChangeTracker",a],cleanurltrackerStripquery:!1,cleanurltrackerStripnumericid:!1,trackErrors:!0,objectName:"ga",trackerId:"",env:"prod",prodUri:"https://xerolytics.xero.com/api/",uatUri:"https://xerolytics.xero-uat.com/api/",testUri:"https://xerolytics.global.xero-test.com/api/",sampleRate:100,siteSpeedSampleRate:1,cookieName:"_ga",cookieDomain:"auto",pageTitle:i(),errorSampleRate:"0.15",basePathsToTruncate:"",basePathsList:[]};function i(){var e=window.location.pathname;return window.location.hostname+" - "+e}function h(e){var t=e[e.env.toLowerCase().trim()+"Uri"];return t||e.prodUri}function c(){return Math.random().toString(36).substring(2,15)}function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Date.now;return"performance"in e&&null!=e.performance&&null!=e.performance?t()-e.performance.timing.loadEventEnd:-1}function s(e){return e&&e.match(/[0-9]+x[0-9]+/)?e.split("x").map(function(e){return parseInt(e,10)}):[0,0]}function l(e){var t=s(e.sr),r=s(e.vp),n=new Date(Date.now());return{message:decodeURIComponent(e.exd),location:decodeURIComponent(e.dl),viewportWidth:r[0],viewportHeight:r[1],screenWidth:t[0],screenHeight:t[1],userAgent:e.ua,referrer:e.dr,pageTitle:decodeURIComponent(e.dt),date:n.toString(),timestamp:n.getTime(),lang:e.ul,scriptUrl:null,line:0,col:0,identifier:[c(),c()].join("-"),timeSincePageLoad:u()}}function d(e,t,r,n){var i={eventType:e,properties:{ua:n}};null!=t&&t.split("&").forEach(function(e){var t=e.split("="),r=o(t,2),n=r[0],a=r[1];i.properties[n]=a}),r&&r.orgId&&(i.properties.dimension0=r.orgId);var a=i.properties.t;return i.eventType="google","exception"===(i.event=a)&&(i.eventType="error",i.properties=l(i.properties)),JSON.stringify(i)}function p(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:XMLHttpRequest;this.endpoint=e,this.Klass=t}function f(e){this.endpoint=e}function v(e){this.endpoint=e}function m(e){return!!e}function k(a,i){return function(e,t){var r=navigator.userAgent,n=Object.assign({},e,{method:"POST",headers:{"Content-Type":"text/plain"},body:d("hit",e.body,t,r)});return i&&i("Requesting",a.endpoint,n),a.send(n)}}function y(e,t,r){return t?new v(e):r?new f(e):new p(e)}function b(o,c){return function(e,t,r,n,a){var i=(a?a.stack:e)+" @"+t+":"+r+":"+n;o[c]("send","exception",{exDescription:i,exFatal:!1})}}function w(r,n,t){return function(e){t&&t("Registering sendHitTask on tracker "+e.get("trackingId")),e.set("sendHitTask",function(e){var t={body:e.get("hitPayload")};r(t,n.orgId)})}}function T(e,t){var r=t(e.getAttribute("href")||e.getAttribute("xlink:href"));return r.hostname!=window.location.hostname&&"http"==r.protocol.slice(0,4)}function S(r){return{eventTracker:{attributePrefix:r.attributePrefix,events:["click","auxclick","contextmenu"]},impressionTracker:{attributePrefix:r.attributePrefix},outboundLinkTracker:{attributePrefix:r.attributePrefix,events:["click","contextmenu","auxclick"],shouldTrackOutboundLink:T},cleanUrlTracker:{attributePrefix:r.attributePrefix,stripQuery:r.cleanurltrackerStripquery,urlFieldsFilter:function(e,t){return-1==r.autotrackWidgets.indexOf(a)?e.page=I(e.page,r.cleanurltrackerStripnumericid):e.page=I(e.page+location.hash,r.cleanurltrackerStripnumericid),e.page=U(e.page,r.basePathsList),e}},pageVisibilityTracker:{attributePrefix:r.attributePrefix,hitFilter:function(e){e.set("title",r.pageTitle)}},urlChangeTracker:{},hashChangeTracker:{}}}function x(e){var t=e.errorSampleRate?parseFloat(e.errorSampleRate):0;return Math.random()<t}function P(e){var t=document.createElement("script");if(t.async=!0,t.src=e,document.getElementsByTagName("script").length){var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}else document.body.insertBefore(t,document.body.firstElementChild)}function E(){return null}p.prototype.send=function(e,t){var r=new this.Klass;r.open(e.method,this.endpoint,!0),r.setRequestHeader("Content-Type","text/plain"),e.onLoad&&(r.onload=function(){e.onLoad(r)}),e.onError&&(r.onerror=function(){e.onError(r)}),r.send(e.body),t&&t(e)},f.prototype.send=function(e,t){fetch(this.endpoint,e),t&&t(e)},v.prototype.send=function(e,t){var r=new Blob([e.body],{type:"text/plain"});navigator.sendBeacon(this.endpoint,r),t&&t(e)};var O=document.getElementById("ga-client");var C={loadConfig:function(e){return e?JSON.parse(JSON.stringify(e.dataset)):{}},createService:y,log:function(){var e=Array.prototype.slice.call(arguments);e.unshift("[ga-client]"),console.log.apply(console,e)}};function j(e,t){return Object.assign({},e,t)}function L(e,t){return[e,t].join("")}function I(e,t){return t&&(e=e.replace(/(\/)\d+(\/|$)/g,"$1numericid$2")),e.toLowerCase().replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g,"guid").replace(/([=/])![0-9a-z!-]{5}([&#/?]|$)/g,"$1shortcode$2").replace(/([=/])![0-9a-z!-]{5}([&#/?]|$)/g,"$1shortcode$2")}function U(e,t){if(t.length){var r=!0,n=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var c=i.value;if(0<=e.indexOf(c))return c}}catch(e){n=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw a}}}return e}function R(){!function(e,t){var r=window[window.GoogleAnalyticsObject||"ga"];"function"==typeof r&&r("provide",e,t)}(a,t)}function N(e,t,r){var n={};if(t&&t.cd)try{n=JSON.parse(t.cd)}catch(e){r("JSON failed to parse:",e)}return j(n,e.gaPageVars&&e.gaPageVars.dimensions||{})}function A(){var e=j(C,0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}),t=function(e,r){var n=r;return null!=n.autotrackWidgets&&(n.autotrackWidgets=function(e){return e.split(",").map(function(e){return e.trim()})}(n.autotrackWidgets)),["debug","trackErrors","autotrack","cleanurltrackerStripquery","cleanurltrackerStripnumericid","sendPageView"].forEach(function(e){var t=r[e];void 0!==t&&(n[e]=function(e){return"true"===e||!0===e}(t))}),Object.assign({},e,n)}(g,e.loadConfig(O)),r=t.debug?e.log:E;t.trackerId||r('You must provide a trackerId (eg, data-tracker-id="UA-XXXXXX-X") to use the xerolytics module');var n=t.userId,a=m(navigator.sendBeacon),i=m(window.fetch),o=h(t),c=w(k(e.createService(o,a,i),r),t,r),u=S(t),s=N(window,t,r),l=O?O.src:"/",d=l.substr(0,l.lastIndexOf("/"));r("Set baseUrl to "+d);var p=t.scriptUrl||L(d,t.defaultScriptUrl),f=t.autotrackScriptUrl||L(d,t.defaultAutotrackScriptUrl);t.basePathsToTruncate.length&&(t.basePathsList=t.basePathsToTruncate.replace(/\s/g,"").split(",")),null==e.analytics&&(r("Loading analytics script tag "+p),function(e,t){var r=window;r.GoogleAnalyticsObject=e,r[e]=function(){(r[e].q=r[e].q||[]).push(arguments)},r[e].l=1*new Date,P(t)}(t.objectName,p)),t.autotrack&&(r("Loading autotrack script tag "+f),P(f),R()),function(e,t,r,n,a,i,o){var c=e[t.objectName],u={cookieName:t.cookieName,cookieDomain:t.cookieDomain,sampleRate:t.sampleRate,siteSpeedSampleRate:t.siteSpeedSampleRate};c("create",t.trackerId,u),c(a),Object.keys(o).forEach(function(e){var t=o[e];i(e,t),c("set",e,t)}),t.autotrack&&0<t.autotrackWidgets.length&&t.autotrackWidgets.forEach(function(e){var t=n[e]||{};c("require",e,t)}),null!=r&&c("set","userId",r),c("set","title",t.pageTitle),t.sendPageView&&c("send","pageview",{}),t.trackErrors&&x(t)&&(e.onerror=b(e,t.objectName)),i&&i("Created tracker for "+t.trackerId)}(window,t,n,u,c,r,s)}return O&&A(),e.BeaconService=v,e.HttpService=f,e.XhrService=p,e.apiClient=k,e.cleanPath=I,e.createErrorHandler=b,e.createXerolyticsErrorFromGaEvent=l,e.createXerolyticsEvent=d,e.default=A,e.getCombinedDimensions=N,e.getEndpoint=h,e.getPageTitle=i,e.getService=y,e.getWidgetOptions=S,e.isInErrorTrackingCohort=x,e.setupSendHitTask=w,e.shouldTrackOutboundLink=T,e.supports=m,e.timeSincePageLoad=u,e.truncateToBasePath=U,e}({});