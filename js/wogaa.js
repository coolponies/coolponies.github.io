/**
 * WOGAA.js
 * Version: 1.0.3-g1546537
 */
!function(){"use strict";var e,t=function(){return t=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t.apply(this,arguments)};function n(e,t,n){if(n||2===arguments.length)for(var a,o=0,r=t.length;o<r;o++)!a&&o in t||(a||(a=Array.prototype.slice.call(t,0,o)),a[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))}!function(e){e.StartTS="START_TS",e.CompleteTS="COMPLETE_TS",e.TrackStructuredEvent="TRACK_STRUCTURED_EVENT",e.SetUserId="SET_USER_ID",e.SetIdentity="SET_IDENTITY",e.SearchSgSearchEvent="SEARCHSG_SEARCH_EVENT",e.SearchSgDisplayEvent="SEARCHSG_DISPLAY_EVENT",e.SearchSgClickEvent="SEARCHSG_CLICK_EVENT",e.SearchSgRateEvent="SEARCHSG_RATE_EVENT",e.SearchSgSessionInitEvent="SEARCHSG_SESSION_INIT_EVENT"}(e||(e={}));window.wogaaLayer=window.wogaaLayer||[],window.wogaaCustom=window.wogaaCustom||{};var a="Wogaa:js",o="wogaa.logger.debug",r=window.wogaaLayer,i="",c=function(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];try{var i=window.localStorage.getItem(o);i&&"true"===i&&console.log.apply(console,n(["🍭 | ".concat(e," |"),t],a,!1))}catch(e){console.error("Unable get local storage",e)}},s={SearchSG:{searchsg_search:function(t){c(a,"SearchSG","triggered search event"),r.push({type:e.SearchSgSearchEvent,payload:t})},searchsg_display:function(t){c(a,"SearchSG","triggered display event."),r.push({type:e.SearchSgDisplayEvent,payload:t})},searchsg_click:function(t){c(a,"SearchSG","triggered clicked event."),r.push({type:e.SearchSgClickEvent,payload:t})},searchsg_rate:function(t){c(a,"SearchSG","triggered rated feedback event."),r.push({type:e.SearchSgRateEvent,payload:t})},searchsg_session_init:function(t){c(a,"SearchSG","triggered session init event."),r.push({type:e.SearchSgSessionInitEvent,payload:t})}}};window.wogaaCustom=t(t({},window.wogaaCustom),{addMeta:function(e){"object"==typeof e&&null!==e&&(window.digitalData=t(t(t({},window.digitalData),{agencyTxnId:null}),e))},completeTransactionalService:function(e,t){void 0===t&&(t={}),c(a,"triggered event complete transactional service",{trackingId:e}),r.push({type:"COMPLETE_TS",payload:{trackingId:e,options:t}})},customContext:function(e,t,n){return s[e][t](n)},getDomainUserId:function(){var e=new RegExp("_sp_id\\.[a-f0-9]+=([^;]+);?"),t=document.cookie.match(e);return!(!t||!t[1])&&t[1].split(".")[0]},getSessionUserId:function(){try{var e=new RegExp("_sp_id\\.[a-f0-9]+=([^;]+);?"),t=document.cookie.match(e);return!(!t||!t[1])&&t[1].split(".")[5]}catch(e){console.error("Unable getting snowplow session id",e)}},log:c,setDebug:function(e){try{window.localStorage.setItem(o,e.toString().toLowerCase())}catch(e){console.error("Unable get local storage",e)}},setIdentity:function(e){c(a,"triggered event set Snowplow identity context."),i=e.id,r.push({type:"SET_IDENTITY",payload:{id:e.id}})},getIdentity:function(){return i},showSentimentsForIS:function(){c(a,"triggered event show sentiments for IS"),r.push({type:"OPEN_IS_SENTIMENTS"})},showSentimentsForTS:function(e,t){var n=(void 0===t?{uniqueTransactionId:null}:t).uniqueTransactionId;c(a,"triggered event show sentiments for TS"),r.push({type:"COMPLETE_TS",payload:{uniqueTransactionId:n,trackingId:e}})},startTransactionalService:function(e,t){void 0===t&&(t={}),c(a,"triggered event start transactional service",{trackingId:e}),r.push({type:"START_TS",payload:{trackingId:e,options:t}})},trackEvent:function(e,t,n,o,i){var s={category:e,action:t,label:n,property:o,value:i};c(a,"triggered track event",{payload:s}),r.push({type:"TRACK_STRUCTURED_EVENT",payload:s})},wogaaJSVersion:"1.0.3-g1546537"});var l,d,p,g,S,u,h,w,E=window.location.href,v=function(e){var t;return"function"==typeof Event?t=new Event(e):(t=document.createEvent("Event")).initEvent(e,!0,!0),t},y=function(e,t){var n,a=this;return void 0===t&&(t=0),function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(n),n=setTimeout((function(){e.apply(a,o)}),t)}}((function(){var e=window.location.href;E!==e&&window.dispatchEvent(v("locationchange")),E=e}),0),f=function(e,t,n){var a=e[t];e[t]=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var r=a.apply(this,e);return window.dispatchEvent(v(t)),n.apply(this,e),r}};(l=function(){var e,t,n,a=window.history;a&&"pushState"in a&&f(a,"pushState",y),a&&"replaceState"in a&&f(a,"replaceState",y),window.addEventListener("popstate",y),window.addEventListener("hashchange",y),e="https://assets.wogaa.sg/scripts/wogaa.js?url="+encodeURIComponent(window.location.href),t=document.head||document.getElementsByTagName("head")[0],(n=document.createElement("script")).async=!0,n.src=e,t.appendChild(n)},d=!1,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return d?void 0:(d=!0,l.apply(this,e))})(),p=window,g=document,S="script",p[u="wogaa_snowplow"]||(p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[],p.GlobalSnowplowNamespace.push(u),p[u]=function(){(p[u].q=p[u].q||[]).push(arguments)},p[u].q=p[u].q||[],h=g.createElement(S),w=g.getElementsByTagName(S)[0],h.async=1,h.src="https://assets.wogaa.sg/snowplow/3.13.1/sp.js",w.parentNode.insertBefore(h,w))}();