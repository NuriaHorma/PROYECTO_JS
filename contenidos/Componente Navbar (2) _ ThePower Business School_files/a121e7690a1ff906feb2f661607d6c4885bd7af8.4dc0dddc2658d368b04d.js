(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/BS7":function(e,t,n){e.exports={trial:"trial_trial__2O1jI"}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=E();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(a=n("Xuae"))&&a.__esModule?a:{default:a},_=n("lwAK"),s=n("FYa8"),u=n("/0+H");function E(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return E=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var S=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var _=0,s=S.length;_<s;_++){var u=S[_];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var E=o.props[u],l=r[u]||new Set;"name"===u&&i||!l.has(E)?(l.add(E),r[u]=l):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function f(e){var t=e.children,n=(0,i.useContext)(_.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}f.rewind=function(){};var O=f;t.default=O},ByQb:function(e,t,n){e.exports={container:"banner_container__1V2hc",textContainer:"banner_textContainer__GTLyB"}},FFyT:function(e,t,n){"use strict";var r={FETCH_MODULES:"FETCH_MODULES",FETCH_MODULES_SUCCESS:"FETCH_MODULES_SUCCESS",FETCH_MODULES_ERROR:"FETCH_MODULES_ERROR",FETCH_MODULE_DETAIL:"FETCH_MODULE_DETAIL",FETCH_MODULE_DETAIL_SUCCESS:"FETCH_MODULE_DETAIL_SUCCESS",FETCH_MODULE_DETAIL_ERROR:"FETCH_MODULE_DETAIL_ERROR",fetchModules:function(e){return{type:r.FETCH_MODULES,payload:{promotionId:e}}},fetchModuleDetail:function(e,t){return{type:r.FETCH_MODULE_DETAIL,payload:{promotionId:e,id:t}}}};t.a=r},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},G4rN:function(e,t,n){e.exports={container:"title_container__2UXey",title:"title_title__3DV4k"}},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},"K/si":function(e,t,n){e.exports={container:"progress-overview_container__24Uj7",contentContainer:"progress-overview_contentContainer__1iyRv",progress:"progress-overview_progress__17Shm",progressBar:"progress-overview_progressBar__3CGe_",leftInfo:"progress-overview_leftInfo__14bSw",tag:"progress-overview_tag__nSey0",button:"progress-overview_button__kUkQ2",focusVisible:"progress-overview_focusVisible__wl0m4"}},K2R8:function(e,t,n){e.exports={spinner:"spinner_spinner__2sw65",rotator:"spinner_rotator__1q_bI",path:"spinner_path__10y-r",dash:"spinner_dash__2tTqH"}},Qv69:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("K2R8"),i=n.n(a),c=o.a.createElement;t.a=function(e){var t=e.size,n=void 0===t?32:t;return c("svg",{className:i.a.spinner,width:"".concat(n,"px"),height:"".concat(n,"px"),viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},c("circle",{className:i.a.path,fill:"none",cx:"33",cy:"33",r:"30"}))}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},VXwv:function(e,t,n){e.exports={breadcrumb:"breadcrumb_breadcrumb__GUffS",focusVisible:"breadcrumb_focusVisible__2adYB",current:"breadcrumb_current__3N0np",icon:"breadcrumb_icon__1RdwH",disabled:"breadcrumb_disabled__2Fes9"}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),_=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),E=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=E},aoKT:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("wd/R"),i=n.n(a),c=n("O0wy"),_=n("/BS7"),s=n.n(_),u=o.a.createElement;t.a=function(e){var t,n=Object(r.useContext)(c.a).keywords,o=e.promotion;if(null!==o&&void 0!==o&&null!==(t=o.trial)&&void 0!==t&&t.ongoing||null!==o&&void 0!==o&&o.blocked){var a,_=i()(null===o||void 0===o?void 0:o.createdAt).add(((null===o||void 0===o||null===(a=o.trial)||void 0===a?void 0:a.days)||0)+1,"days").diff(i()(),"days"),E=u("p",null,u("b",null,n.trial,":")," ",n.daysLeft.replace("placeholder",_),".");return 1===_?E=u("p",null,u("b",null,n.trial,":")," ",n.lastDay):_<=0&&(E=u("p",null,u("b",null,n.trial,":")," ",n.expired)),u("div",{className:s.a.trial},E,u("button",{type:"button",onClick:function(){var e,t,n="".concat("https://payment.thepowermba.com","/?productIds=").concat(null===o||void 0===o||null===(e=o.trial)||void 0===e||null===(t=e.skus)||void 0===t?void 0:t.toString());window.open(n,"_blank")}},n.fullVersion))}return null}},cjq5:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("G4rN"),i=n.n(a),c=n("Rvti"),_=o.a.createElement;t.a=function(e){var t=e.title,n=e.promotion,r=e.hidePromotion,o=void 0!==r&&r;return _("div",{className:i.a.container},_("span",{className:i.a.title},t),!o&&_(c.a,{text:n}))}},dwSK:function(e,t,n){"use strict";var r=n("HALo"),o=n("cpVT"),a=n("q1tI"),i=n.n(a),c=n("8cHP"),_=n("O0wy"),s=n("VXwv"),u=n.n(s),E=n("TdS1"),l=n("gWsE"),p=n("TSYQ"),S=n.n(p),d=i.a.createElement;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=c.Router.pushRoute,I=function(e){e&&!e.includes("undefined")&&C(e)},R=function(e){var t,n=Object(a.useRef)(null),i=Object(E.a)(O(O({},e),{},{elementType:"span"}),n).itemProps,c=Object(l.h)(),_=c.isFocusVisible,s=c.focusProps;return d("li",null,d("span",Object(r.a)({},i,s,{ref:n,className:S()((t={},Object(o.a)(t,u.a.disabled,e.isDisabled),Object(o.a)(t,u.a.current,e.isCurrent),Object(o.a)(t,u.a.focusVisible,_),t))}),e.children),!e.isCurrent&&d("span",{className:u.a.icon,"aria-hidden":"true",style:{padding:"0 5px"}},"\u203a"))};t.a=function(e){var t=Object(a.useContext)(_.a).keywords,n=e.program,o=e.programName,i=void 0===o?"":o,c=e.moduleId,s=void 0===c?"":c,l=e.moduleName,p=void 0===l?"":l,S=e.lessonId,f=void 0===S?"":S,O=e.lessonName,C=void 0===O?"":O,N=e.resources,b=void 0!==N&&N,v=p&&s,U=C&&f,y=Object(E.b)(e).navProps;return d("nav",Object(r.a)({},y,{className:u.a.breadcrumb}),d("ol",null,d(R,{onPress:function(){return I("/")}},"Home"),d(R,{isCurrent:!v,onPress:function(){return I("/programs/".concat(n))}},i),b&&d(R,{onPress:function(){return I("/programs/".concat(n,"/resources"))}},t.resourcesTitle),v&&d(R,{isCurrent:!U,onPress:function(){return I("/programs/".concat(n,"/modules/").concat(s))}},p),U&&d(R,{isCurrent:!0},C)))}},e8rM:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("TSYQ"),i=n.n(a),c=n("O1lQ"),_=n("ByQb"),s=n.n(_),u=o.a.createElement;t.a=function(e){var t=e.title,n=e.subtitle,r=e.buttonTitle,o=e.action,a=e.className;return u("div",{className:i()(s.a.container,a),"data-testid":"banner-container"},u("div",{className:s.a.textContainer},u(c.c,{bold:!0,testId:"bannerTitle"},t),u(c.c,{testId:"bannerSubtitle"},n)),u("div",{className:s.a.actionContainer},u(c.a,{onClick:o,testId:"bannerButton"},r)))}},eskd:function(e,t,n){"use strict";var r=n("HALo"),o=n("cpVT"),a=n("q1tI"),i=n.n(a),c=n("f0Wu"),_=n.n(c),s=n("TSYQ"),u=n.n(s),E=n("/MKj"),l=n("8cHP"),p=n("O1lQ"),S=n("K/si"),d=n.n(S),f=n("O0wy"),O=n("z1bh"),C=n("zI+h"),I=n("gWsE"),R=i.a.createElement;t.a=Object(E.b)((function(e){return{personalizations:e.login.user.personalizations}}))((function(e){var t,n=e.progress,i=void 0===n?0:n,c=e.lastUpdate,s=e.nextClass,E=void 0===s?{}:s,S=(e.type,e.personalizations),N=Object(a.useContext)(f.a).keywords,b=l.Router.pushRoute,v=Object(a.useRef)();_.a.locale(Intl.NumberFormat().resolvedOptions().locale);var U=_()(c),y=_.a.tz.guess(),T="".concat(N.lastActive," ").concat(U.tz(y).format("lll")),m=E&&!E.microlearning,P=Object(C.a)({onPress:function(){var e=E.microlearning,t=E.module,n=E.lesson,r=E.promotionId,o=Object(O.l)(r,t,n,e);b(o)},isDisabled:m},v).buttonProps,h=Object(I.h)(),F=h.focusProps,L=h.isFocusVisible;return R("aside",{"aria-label":N.progressBarLabel,className:d.a.container},R("div",{className:d.a.contentContainer},R("div",{className:d.a.progress},R("div",{className:d.a.leftInfo},c&&R(p.c,{type:"tag",bold:!0},T)),R("div",{className:d.a.tag},R(p.c,{type:"tag",bold:!0},i<100?N.inProgress:N.completed))),R("button",Object(r.a)({type:"button"},P,F,{style:{backgroundColor:m?"#e0e0e0":Object(O.h)(S,"componentsBackground","#CDFFEA"),color:Object(O.h)(S,"componentsColor","#1C4B56"),borderColor:m?"#e0e0e0":Object(O.h)(S,"componentsBackground","#CDFFEA")},className:u()(d.a.button,(t={},Object(o.a)(t,d.a.disabled,m),Object(o.a)(t,d.a.focusVisible,L),t))}),N.goNextClass)))}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qlO2:function(e,t,n){"use strict";var r={CHECK_USER_CONNECTION:"CHECK_USER_CONNECTION",CHECK_USER_CONNECTION_FAILED:"CHECK_USER_CONNECTION_FAILED",CHECK_USER_CONNECTION_ERROR:"CHECK_USER_CONNECTION_ERROR",CHECK_LOGIN:"CHECK_LOGIN",CHECK_LOGIN_SUCCESS:"CHECK_LOGIN_SUCCESS",CHECK_LOGIN_FAILED:"CHECK_LOGIN_FAILED",CHECK_LOGIN_ERROR:"CHECK_LOGIN_ERROR",LOGIN:"LOGIN",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILED:"LOGIN_FAILED",LOGIN_ERROR:"LOGIN_ERROR",LOGIN_BLOCKED:"LOGIN_BLOCKED",SET_USER_TOKEN:"SET_USER_TOKEN",FETCH_MY_USER_INFO:"FETCH_MY_USER_INFO",FETCH_MY_USER_INFO_SUCCESS:"FETCH_MY_USER_INFO_SUCCESS",FETCH_MY_USER_INFO_FAILED:"FETCH_MY_USER_INFO_FAILED",UPDATE_MY_USER_INFO:"UPDATE_MY_USER_INFO",UPDATE_MY_USER_INFO_SUCCESS:"UPDATE_MY_USER_INFO_SUCCESS",UPDATE_MY_USER_INFO_FAILED:"UPDATE_MY_USER_INFO_FAILED",UPDATE_MY_USER_INFO_ERROR:"UPDATE_MY_USER_INFO_ERROR",USER_SYNC_INFO:"USER_SYNC_INFO",USER_SYNC_INFO_SUCCESS:"USER_SYNC_INFO_SUCCESS",USER_SYNC_INFO_FAILED:"USER_SYNC_INFO_FAILED",USER_SYNC_INFO_ERROR:"USER_SYNC_INFO_ERROR",DELETE_POPUP:"DELETE_POPUP",DELETE_POPUP_SUCCESS:"DELETE_POPUP_SUCCESS",DELETE_POPUP_FAILED:"DELETE_POPUP_FAILED",LOGOUT:"LOGOUT",LOGOUT_SUCCESS:"LOGOUT_SUCCESS",LOGOUT_FAILED:"LOGOUT_FAILED",FETCH_MY_USER_FAVOURITE_MICROLEARNINGS:"FETCH_MY_USER_FAVOURITE_MICROLEARNINGS",FETCH_MY_USER_FAVOURITE_MICROLEARNINGS_SUCCESS:"FETCH_MY_USER_FAVOURITE_MICROLEARNINGS_SUCCESS",FETCH_MY_USER_FAVOURITE_MICROLEARNINGS_FAILED:"FETCH_MY_USER_FAVOURITE_MICROLEARNINGS_FAILED",UNLINK_LINKEDIN:"UNLINK_LINKEDIN",UNLINK_LINKEDIN_SUCCESS:"UNLINK_LINKEDIN_SUCCESS",UNLINK_LINKEDIN_FAILED:"UNLINK_LINKEDIN_FAILED",FETCH_PROVIDERS:"FETCH_PROVIDERS",FETCH_PROVIDERS_SUCCESS:"FETCH_PROVIDERS_SUCCESS",FETCH_PROVIDERS_FAILED:"FETCH_PROVIDERS_FAILED",SET_USER_NEW_APP_PT:"SET_USER_NEW_APP_PT",SET_USER_NEW_APP_PT_SUCCESS:"SET_USER_NEW_APP_PT_SUCCESS",SET_USER_NEW_APP_PT_FAILED:"SET_USER_NEW_APP_PT_FAILED",FETCH_MY_USER_SCORES:"FETCH_MY_USER_SCORES",FETCH_MY_USER_SCORES_SUCCESS:"FETCH_MY_USER_SCORES_SUCCESS",FETCH_MY_USER_SCORES_FAILED:"FETCH_MY_USER_SCORES_FAILED",SET_ONBOARDING_STEP:"SET_ONBOARDING_STEP",SET_ONBOARDING_STEP_SUCCESS:"SET_ONBOARDING_STEP_SUCCESS",SET_ONBOARDING_STEP_FAILED:"SET_ONBOARDING_STEP_FAILED",REQUEST_PROGRAM_ACCESS:"REQUEST_PROGRAM_ACCESS",REQUEST_PROGRAM_ACCESS_SUCCESS:"REQUEST_PROGRAM_ACCESS_SUCCESS",REQUEST_PROGRAM_ACCESS_FAILED:"REQUEST_PROGRAM_ACCESS_FAILED",checkUserConnection:function(e){return{type:r.CHECK_USER_CONNECTION,payload:e}},checkLogin:function(e){return{type:r.CHECK_LOGIN,payload:e}},login:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:r.LOGIN,payload:e,isLoginFromLinkedin:t}},updateMyUserInfo:function(e){return{type:r.UPDATE_MY_USER_INFO,payload:e}},userSyncInfo:function(e){return{type:r.USER_SYNC_INFO,payload:e}},deletePopup:function(e,t){return{type:r.DELETE_POPUP,payload:e,cb:t}},logout:function(){return{type:r.LOGOUT}},fetchMyUserFavouriteMicrolearnings:function(){return{type:r.FETCH_MY_USER_FAVOURITE_MICROLEARNINGS}},unlinkLinkedin:function(){return{type:r.UNLINK_LINKEDIN}},fetchProviders:function(e){return{type:r.FETCH_PROVIDERS,payload:e}},setMyUserNewAppPT:function(e){return{type:r.SET_USER_NEW_APP_PT,payload:e}},fetchMyUserScores:function(){return{type:r.FETCH_MY_USER_SCORES}},setOnboardingStep:function(e,t){return{type:r.SET_ONBOARDING_STEP,payload:{step:e,status:t}}},requestPromotionAccess:function(e){return{type:r.REQUEST_PROGRAM_ACCESS,payload:{promotionId:e}}}};t.a=r},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}}]);