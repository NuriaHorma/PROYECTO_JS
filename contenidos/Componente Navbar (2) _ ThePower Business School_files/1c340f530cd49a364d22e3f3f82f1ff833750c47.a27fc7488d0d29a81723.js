(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"/UJS":function(e,t,E){e.exports={container:"live-event-card_container__3dBYZ",home:"live-event-card_home__3JKvf",content:"live-event-card_content__2PPHA",tag:"live-event-card_tag__1EwnU",class:"live-event-card_class__t7hIM",blink:"live-event-card_blink__23Y4r",actionButton:"live-event-card_actionButton__28R64"}},"2iER":function(e,t,E){"use strict";(function(e){var a=E("q1tI"),n=E.n(a),_=E("wd/R"),i=E.n(_),R=E("/MKj"),r=E("fZgO"),o=E("z1bh"),I=E("7HoK"),c=E("Yhau"),S=E("Csw2"),T=E("EAjk"),N=E("8cHP"),A=E.n(N),C=n.a.createElement,s=A.a.Router,d={getTodayEvents:r.a.getTodayEvents};t.a=Object(R.b)((function(e){return{today:e.events.today,user:e.login.user}}),d)((function(t){var E=t.today,_=t.getTodayEvents,R=t.user,r=(E||{}).powerlearnings,N=void 0===r?[]:r,A=Object(a.useState)(null),d=A[0],l=A[1],O=Object(a.useState)(null),u=O[0],L=O[1],M=s.router.pathname,G="B2B"===R.contactType,D=Object(o.x)(R.promotions),p=Object(o.c)(R.promotions),v=function(){Object(I.c)("PowerLearning access","Live cards"),Object(I.c)("PowerLearning live cards behavior",R.email?"Get info - ".concat(R.email):"Get info"),Object(c.c)("/powerlearning/".concat(d._id))},m=function(){Object(I.c)("PowerLearning access","Live cards"),Object(I.c)("PowerLearning live cards behavior",R.email?"Go to live class - ".concat(R.email):"Go to live class"),Object(c.c)(d.link)};Object(a.useEffect)((function(){_()}),[]);var f=function(t){var E=Number(e.env.REACT_APP_POWERLEARNING_MINS)||10;t.forEach((function(e){if(Object(o.A)(e.date,E)){var t=i.a.duration(i()(e.date).diff(i()())).asMinutes();t>0&&L(Math.round(t)),l(e)}}))};return Object(a.useEffect)((function(){f(N)}),[N]),Object(o.P)((function(){f(N)}),1e4),(D||!p)&&!G&&d&&C(n.a.Fragment,null,"/MicrolearningDetails"===M?C(T.a,{title:d.title,minutesWait:u,handleInfo:v,handleDirect:m}):C("div",null,C(S.a,{title:d.title,minutesWait:u,handleInfo:v,handleDirect:m})))}))}).call(this,E("8oxB"))},"7/s4":function(e,t,E){"use strict";var a,n=E("hKbo"),_=(a=n)&&a.__esModule?a:{default:a};e.exports=_.default},"7HoK":function(e,t,E){"use strict";E.d(t,"a",(function(){return i})),E.d(t,"b",(function(){return R})),E.d(t,"d",(function(){return r})),E.d(t,"c",(function(){return o})),E.d(t,"e",(function(){return I}));var a=E("7/s4"),n=E.n(a),_={gtmId:"GTM-5L3TGTJ",events:{campaignAction:"campaignAction",abTest:"abTest"}},i=function(){return n.a.initialize(_)},R=function(e){var t={dataLayer:e};n.a.dataLayer(t)},r=function(e,t){try{var E={dataLayer:{campaignName:e,campaignSuccess:t,event:"campaignAction"}};n.a.dataLayer(E)}catch(a){}},o=function(e,t){try{var E={dataLayer:{testName:e,testOption:t,event:"abTest"}};n.a.dataLayer(E)}catch(a){}},I=function(e,t){try{var E={dataLayer:{taskName:e,taskOption:t,event:"taskSuccess"}};n.a.dataLayer(E)}catch(a){}}},Csw2:function(e,t,E){"use strict";var a=E("cpVT"),n=E("q1tI"),_=E.n(n),i=E("TSYQ"),R=E.n(i),r=E("O1lQ"),o=E("O0wy"),I=E("y8T2"),c=E.n(I),S=E("/UJS"),T=E.n(S),N=E("8cHP"),A=E.n(N),C=_.a.createElement,s=A.a.Router;t.a=function(e){var t=Object(n.useContext)(o.a).keywords,E=e.title,_=e.minutesWait,i=e.handleInfo,I=e.handleDirect,S=s.router.pathname;return C("div",{className:R()(T.a.container,Object(a.a)({},T.a.home,"/Index"===S))},C("div",{className:T.a.content},C("div",{className:T.a.tag},C(r.c,{type:"small",bold:!0},_?"".concat(t.liveClassIn," ").concat(_," min"):"".concat(t.liveClassNow))),C("div",{className:T.a.class},C("img",{alt:"dot-icon",src:c.a}),C(r.a,{plain:!0,onClick:i},E))),C("div",{className:T.a.actionButton},C(r.a,{onClick:I},t.watchNow)))}},EAjk:function(e,t,E){"use strict";var a=E("q1tI"),n=E.n(a),_=E("O1lQ"),i=E("y8T2"),R=E.n(i),r=E("twBV"),o=E.n(r),I=E("O0wy"),c=E("eX9s"),S=E.n(c),T=n.a.createElement;t.a=function(e){var t=e.title,E=e.minutesWait,n=e.handleDirect,i=e.handleInfo,r=Object(a.useState)(!1),c=r[0],N=r[1],A=Object(a.useContext)(I.a).keywords;return c?T("div",{className:S.a.bannerContainer},T("div",{className:S.a.classContainer},T("div",{className:S.a.tag,onClick:function(){return N(!c)}},T(_.c,{type:"tag",bold:!0},E?"".concat(A.liveClassIn," ").concat(E," min"):"".concat(A.liveClassNow))),T("div",{className:S.a.class},T("img",{alt:"dot-icon",src:R.a}),T(_.a,{plain:!0,onClick:i},t))),T("div",{className:S.a.actionContainer},T(_.a,{plain:!0,onClick:n},A.watchNow),T("button",{type:"button",className:S.a.closeButton,onClick:function(){return N(!1)}},T("img",{alt:"",src:o.a})))):T("div",{className:S.a.container},T("div",{className:S.a.tag,onClick:function(){return N(!c)}},T(_.c,{type:"tag",bold:!0},E?"".concat(A.liveClassIn," ").concat(E," min"):"".concat(A.liveClassNow))))}},Kacz:function(e,t,E){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}},LDTn:function(e,t,E){"use strict";var a={FETCH_MICROLEARNINGS:"FETCH_MICROLEARNINGS",FETCH_MICROLEARNINGS_SUCCESS:"FETCH_MICROLEARNINGS_SUCCESS",FETCH_MICROLEARNINGS_ERROR:"FETCH_MICROLEARNINGS_ERROR",FETCH_MICROLEARNING_DETAIL:"FETCH_MICROLEARNING_DETAIL",FETCH_MICROLEARNING_DETAIL_SUCCESS:"FETCH_MICROLEARNING_DETAIL_SUCCESS",FETCH_MICROLEARNING_DETAIL_ERROR:"FETCH_MICROLEARNING_DETAIL_ERROR",CLEAR_MICROLEARNING_DETAIL:"CLEAR_MICROLEARNING_DETAIL",CLEAR_MICROLEARNING_DETAIL_SUCCESS:"CLEAR_MICROLEARNING_DETAIL_SUCCESS",CLEAR_MICROLEARNING_DETAIL_ERROR:"CLEAR_MICROLEARNING_DETAIL_ERROR",COMPLETE_MICROLEARNING:"COMPLETE_MICROLEARNING",COMPLETE_MICROLEARNING_SUCCESS:"COMPLETE_MICROLEARNING_SUCCESS",COMPLETE_MICROLEARNING_ERROR:"COMPLETE_MICROLEARNING_ERROR",FETCH_MICROLEARNING_LAST_UNLOCKED:"FETCH_MICROLEARNING_LAST_UNLOCKED",FETCH_MICROLEARNING_LAST_UNLOCKED_SUCCESS:"FETCH_MICROLEARNING_LAST_UNLOCKED_SUCCESS",FETCH_MICROLEARNING_LAST_UNLOCKED_ERROR:"FETCH_MICROLEARNING_LAST_UNLOCKED_ERROR",FETCH_NEXT_MICROLEARNINGS:"FETCH_NEXT_MICROLEARNINGS",FETCH_NEXT_MICROLEARNINGS_SUCCESS:"FETCH_NEXT_MICROLEARNINGS_SUCCESS",FETCH_NEXT_MICROLEARNINGS_ERROR:"FETCH_NEXT_MICROLEARNINGS_ERROR",ADD_FAVOURITE_MICROLEARNING:"ADD_FAVOURITE_MICROLEARNING",ADD_FAVOURITE_MICROLEARNING_SUCCESS:"ADD_FAVOURITE_MICROLEARNING_SUCCESS",ADD_FAVOURITE_MICROLEARNING_ERROR:"ADD_FAVOURITE_MICROLEARNING_ERROR",DELETE_FAVOURITE_MICROLEARNING:"DELETE_FAVOURITE_MICROLEARNING",DELETE_FAVOURITE_MICROLEARNING_SUCCESS:"DELETE_FAVOURITE_MICROLEARNING_SUCCESS",DELETE_FAVOURITE_MICROLEARNING_ERROR:"DELETE_FAVOURITE_MICROLEARNING_ERROR",GET_FAVOURITE_MICROLEARNINGS:"GET_FAVOURITE_MICROLEARNINGS",GET_FAVOURITE_MICROLEARNINGS_SUCCESS:"GET_FAVOURITE_MICROLEARNINGS_SUCCESS",GET_FAVOURITE_MICROLEARNINGS_ERROR:"GET_FAVOURITE_MICROLEARNINGS_ERROR",UPDATE_SELECTED_MICROLEARNING_DETAIL:"UPDATE_SELECTED_MICROLEARNING_DETAIL",SET_MICROLEARNING_INPUT_DATA:"SET_MICROLEARNING_INPUT_DATA",SHARE_MICROLEARNINGS:"SHARE_MICROLEARNINGS",SHARE_MICROLEARNINGS_SUCCESS:"SHARE_MICROLEARNINGS_SUCCESS",SHARE_MICROLEARNINGS_ERROR:"SHARE_MICROLEARNINGS_ERROR",SET_INITIAL_RESPONSE_DATA:"SET_INITIAL_RESPONSE_DATA",SET_INITIAL_RESPONSE_DATA_SUCCESS:"SET_INITIAL_RESPONSE_DATA_SUCCESS",SET_INITIAL_RESPONSE_DATA_ERROR:"SET_INITIAL_RESPONSE_DATA_ERROR",SET_RESPONSE_DATA:"SET_RESPONSE_DATA",SET_RESPONSE_DATA_SUCCESS:"SET_RESPONSE_DATA_SUCCESS",SET_RESPONSE_DATA_ERROR:"SET_RESPONSE_DATA_ERROR",SET_PREVIOUS_STEP:"SET_PREVIOUS_STEP",SET_ACTION:"SET_ACTION",SET_PREVIOUS_DATA:"SET_PREVIOUS_DATA",SET_PREVIOUS_DATA_SUCCESS:"SET_PREVIOUS_DATA_SUCCESS",SET_PREVIOUS_DATA_ERROR:"SET_PREVIOUS_DATA_ERROR",SET_SEND_EMAIL:"SET_SEND_EMAIL",SET_SEND_EMAIL_SUCCESS:"SET_SEND_EMAIL_SUCCESS",SET_SEND_EMAIL_ERROR:"SET_SEND_EMAIL_ERROR",fetchMicrolearnings:function(e,t,E){return{type:a.FETCH_MICROLEARNINGS,payload:{promotionId:e,moduleId:t,lessonId:E}}},getFavouriteMicrolearnings:function(e){return{type:a.GET_FAVOURITE_MICROLEARNINGS,payload:{promotionId:e}}},fetchLastUnlocked:function(e){return{type:a.FETCH_MICROLEARNING_LAST_UNLOCKED,payload:{promotionId:e}}},fetchNextMicrolearnings:function(e){return{type:a.FETCH_NEXT_MICROLEARNINGS,payload:{nextMicrolearnings:e}}},fetchMicrolearningDetail:function(e,t,E,n){return{type:a.FETCH_MICROLEARNING_DETAIL,payload:{promotionId:e,moduleId:t,lessonId:E,id:n}}},clearMicrolearningDetail:function(){return{type:a.CLEAR_MICROLEARNING_DETAIL}},completeMicrolearning:function(e,t,E,n,_){return{type:a.COMPLETE_MICROLEARNING,payload:{promotionId:e,moduleId:t,lessonId:E,id:n},cb:_}},addFavouriteMicrolearning:function(e,t){return{type:a.ADD_FAVOURITE_MICROLEARNING,payload:{promotionId:e,microlearningId:t}}},deleteFavouriteMicrolearning:function(e,t){return{type:a.DELETE_FAVOURITE_MICROLEARNING,payload:{promotionId:e,microlearningId:t}}},shareMicrolearnings:function(e,t){return{type:a.SHARE_MICROLEARNINGS,payload:{emailId:e,microlearningId:t}}},updateSelectedMicrolearningDetail:function(e){return{type:a.UPDATE_SELECTED_MICROLEARNING_DETAIL,payload:{selectedMicrolearnigDetail:e}}},setInitialResponseData:function(e){return{type:a.SET_INITIAL_RESPONSE_DATA,payload:{data:e}}},setMicrolearningInputData:function(e,t){return{type:a.SET_MICROLEARNING_INPUT_DATA,payload:{data:e,selectedOption:t}}},setResponseData:function(e,t,E){return{type:a.SET_RESPONSE_DATA,payload:{data:e,id:t,nextStep:E}}},setPreviousData:function(e,t){return{type:a.SET_PREVIOUS_DATA,payload:{data:e,id:t}}},setInitialErrorResponseData:function(e){return{type:a.SET_INITIAL_RESPONSE_DATA_ERROR,payload:{error:e}}},setResponseErrorData:function(e){return{type:a.SET_RESPONSE_DATA_ERROR,payload:{error:e}}},setAction:function(e){return{type:a.SET_ACTION,payload:{data:e}}},setPreviousStep:function(e){return{type:a.SET_PREVIOUS_STEP,payload:{data:e}}}};t.a=a},eX9s:function(e,t,E){e.exports={tag:"live-event-banner_tag__1pGuE",container:"live-event-banner_container__1VLKm",bannerContainer:"live-event-banner_bannerContainer__3xVue",classContainer:"live-event-banner_classContainer__3V0Co",class:"live-event-banner_class__1hfog",blink:"live-event-banner_blink__13LXa",actionContainer:"live-event-banner_actionContainer__39Lde",closeButton:"live-event-banner_closeButton__3ID8t"}},fZgO:function(e,t,E){"use strict";var a={GET_EVENT_LIST:"GET_EVENT_LIST",GET_EVENT_LIST_SUCCESS:"GET_EVENT_LIST_SUCCESS",GET_EVENT_LIST_ERROR:"GET_EVENT_LIST_ERROR",GET_CALENDAR:"GET_CALENDAR",GET_CALENDAR_SUCCESS:"GET_CALENDAR_SUCCESS",GET_CALENDAR_ERROR:"GET_CALENDAR_ERROR",GET_EVENT:"GET_EVENT_DETAILS",GET_EVENT_SUCCESS:"GET_EVENT_DETAILS_SUCCESS",GET_EVENT_ERROR:"GET_EVENT_DETAILS_ERROR",GET_TODAY_EVENTS:"GET_TODAY_EVENTS",GET_TODAY_EVENTS_SUCCESS:"GET_TODAY_EVENTS_SUCCESS",GET_TODAY_EVENTS_ERROR:"GET_TODAY_EVENTS_ERROR",WEBINAR_REGISTER:"WEBINAR_REGISTER",WEBINAR_REGISTER_SUCCESS:"WEBINAR_REGISTER_SUCCESS",WEBINAR_REGISTER_ERROR:"WEBINAR_REGISTER_ERROR",GET_SIGNATURE:"GET_SIGNATURE",GET_SIGNATURE_SUCCESS:"GET_SIGNATURE_SUCCESS",GET_SIGNATURE_ERROR:"GET_SIGNATURE_ERROR",getEventList:function(){return{type:a.GET_EVENT_LIST}},getCalendar:function(e){return{type:a.GET_CALENDAR,payload:e}},getEvent:function(e){return{type:a.GET_EVENT,payload:e}},getTodayEvents:function(e){return{type:a.GET_TODAY_EVENTS,payload:e}},webinarRegister:function(e){return{type:a.WEBINAR_REGISTER,payload:e}},getSignature:function(e){return{type:a.GET_SIGNATURE,payload:e}}};t.a=a},hKbo:function(e,t,E){"use strict";var a,n=E("wWlz"),_=(a=n)&&a.__esModule?a:{default:a};var i={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=_.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,E=e.events,a=void 0===E?{}:E,n=e.dataLayer,_=e.dataLayerName,i=void 0===_?"dataLayer":_,R=e.auth,r=void 0===R?"":R,o=e.preview,I=void 0===o?"":o,c=this.gtm({id:t,events:a,dataLayer:n||void 0,dataLayerName:i,auth:r,preview:I});n&&document.head.appendChild(c.dataScript),document.head.insertBefore(c.script(),document.head.childNodes[0]),document.body.insertBefore(c.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,E=e.dataLayerName,a=void 0===E?"dataLayer":E;if(window[a])return window[a].push(t);var n=_.default.dataLayer(t,a),i=this.dataScript(n);document.head.insertBefore(i,document.head.childNodes[0])}};e.exports=i},twBV:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMS40MTYgMTBMMjAgMTguNTg0IDE4LjU4NCAyMCAxMCAxMS40MTYgMS40MTYgMjAgMCAxOC41ODQgOC41ODQgMTAgMCAxLjQxNiAxLjQxNiAwIDEwIDguNTg0IDE4LjU4NCAwIDIwIDEuNDE2IDExLjQxNiAxMHoiLz4KPC9zdmc+Cg=="},wWlz:function(e,t,E){"use strict";var a,n=E("Kacz"),_=(a=n)&&a.__esModule?a:{default:a};var i={tags:function(e){var t=e.id,E=e.events,a=e.dataLayer,n=e.dataLayerName,i=e.preview,R="&gtm_auth="+e.auth,r="&gtm_preview="+i;return t||(0,_.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+R+r+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(E).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+R+r+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+n+"','"+t+"');",dataLayerVar:this.dataLayer(a,n)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=i},y8T2:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIKZmlsbD0iIzAwMDAwMCI+CiAgICA8cGF0aCBkPSJNMjQgMjRIMFYwaDI0djI0eiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjgiIGZpbGw9IiNlZjAwMDAiLz4KPC9zdmc+"}}]);