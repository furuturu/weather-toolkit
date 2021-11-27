(this["webpackJsonpweather-toolkit"]=this["webpackJsonpweather-toolkit"]||[]).push([[0],{195:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var r,c,a,o,i,s,l,d,u,b,j,p,x,f,O,h,g=n(0),m=n.n(g),v=n(57),y=n.n(v),w=(n(195),n(18)),k=n(23),S=n(21),E=n(22),C=E.a.form(r||(r=Object(S.a)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  margin: 5px;\n"]))),F=E.a.input(c||(c=Object(S.a)(["\n  font-family: inherit;\n  width: 500px;\n  border: 0;\n  border-bottom: 2px solid #0a4500;\n  outline: 0;\n  font-size: 1.3rem;\n  padding: 7px 0;\n  background: transparent;\n"]))),L=E.a.button(a||(a=Object(S.a)(["\n  position: relative;\n  display: block;\n  width: 200px;\n  height: 36px;\n  border-radius: 18px;\n  background-color: black;\n  border: solid 1px transparent;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 300;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n  &:hover {\n    background-color: darkslategrey;\n    border-color: #fff;\n    transition: 0.3s ease-in-out;\n  }\n"]))),_=n(51),T="FETCH_CURRENT",z="FETCH_CURRENT_MAP",M=Object(_.a)(T),I=Object(_.a)(z),D=Object(_.b)({name:"weather",initialState:{city:{name:null,country:null,coord:{lat:55.75322,lon:37.622513}},Forecast:null,isLoading:!1,error:!1},reducers:{showLoader:function(e,t){e.isLoading=t.payload},saveForecastToState:function(e,t){e.isLoading=!1,e.error=!1,e.Forecast=t.payload},showError:function(e,t){e.error=t.payload},saveCity:function(e,t){e.city=t.payload}}}),N=D.actions,R=N.showLoader,U=N.showError,P=N.saveForecastToState,A=N.saveCity,B=function(e){var t;return null===(t=e.forecast.city)||void 0===t?void 0:t.coord},H=function(e){return e.forecast.city},J=function(e){return e.forecast.isLoading},K=function(e){return e.forecast.error},X=function(e){return e.forecast.Forecast},q=n(3),G=function(){var e=Object(g.useState)(""),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(k.b)(),a=localStorage.getItem("city");!Object(k.c)(H).name&&a&&c(M(a));return Object(q.jsxs)(C,{onSubmit:function(e){e.preventDefault(),n.trim()&&(c(R(!0)),c(M(n)),r(""))},children:[Object(q.jsx)(F,{placeholder:"Enter your location",onChange:function(e){r(e.target.value)},value:n}),Object(q.jsx)(L,{type:"submit",children:"Search"})]})},V=E.a.div(o||(o=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Z=E.a.div(i||(i=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin: 30px;\n  cursor: pointer;\n  background-color: ",";\n  &:hover {\n    background-color: rgba(220, 220, 220, 0.65);\n  }\n"])),(function(e){return e.selected===e.index?"rgb(220,220,220)":"rgb(245,245,245)"})),Q=function(e){return Math.round(e.reduce((function(e,t){return e+t}))/2)},W=function(e){return"https://openweathermap.org/img/wn/".concat(e,"@2x.png")},Y=E.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  cursor: pointer;\n  .content {\n    display: flex;\n  }\n"]))),$=E.a.div(l||(l=Object(S.a)(["\n  font-size: 120px;\n  line-height: 0.7;\n  margin: 0;\n"]))),ee=E.a.h4(d||(d=Object(S.a)(["\n  margin: 20px 0 20px 0;\n  font-size: fontSize(14px);\n  font-weight: 400;\n  text-transform: uppercase;\n  text-align: center;\n"]))),te=E.a.div(u||(u=Object(S.a)(["\n  display: flex;\n  align-content: center;\n  height: 100px;\n  width: 100px;\n"]))),ne=E.a.div(b||(b=Object(S.a)(["\n  font-size: fontSize(13px);\n  text-align: center;\n"]))),re=E.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  min-width: 100%;\n  margin: 15px;\n  border: 3px solid darkslategrey;\n"]))),ce=E.a.div(p||(p=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n"]))),ae=n(352),oe=n(186),ie=n(356),se=n(76),le=n(182),de=n(183),ue=function(){var e,t=null===(e=Object(k.c)(X))||void 0===e?void 0:e.hourly;return Object(q.jsxs)(ae.a,{width:600,height:300,data:t,children:[Object(q.jsx)(oe.a,{type:"monotone",name:"Temperature for the next 48 hours",dataKey:"temp",stroke:"#004220"}),Object(q.jsx)(ie.a,{stroke:"#ccc"}),Object(q.jsx)(se.a,{verticalAlign:"top",height:36}),Object(q.jsx)(le.a,{}),Object(q.jsx)(de.a,{dataKey:"temp",type:"number"})]})},be=function(e){var t,n,r=e.index,c=null===(t=Object(k.c)(X))||void 0===t?void 0:t.daily,a=Object(k.c)(H),o=Object(g.useState)(!0),i=Object(w.a)(o,2),s=i[0],l=i[1];return Object(q.jsxs)("div",{children:[s?Object(q.jsxs)(Y,{onClick:function(){return l(!1)},children:[Object(q.jsxs)(ee,{children:[a.name,", ",a.country," ",Object(q.jsx)("br",{}),"Forecast for the ",(n=c[r].dt,new Date(1e3*n).toLocaleString("en-GB",{year:"numeric",month:"numeric",day:"numeric",weekday:"long"}))]}),Object(q.jsxs)("div",{className:"content",children:[Object(q.jsxs)($,{children:[Q([c[r].temp.max,c[r].temp.min]),"\xb0"]}),Object(q.jsx)(te,{children:Object(q.jsx)("img",{src:W(c[r].weather[0].icon),alt:c[r].weather[0].description})})]}),Object(q.jsxs)(ne,{children:[Object(q.jsxs)("b",{children:["Feels like ",Math.round(c[r].feels_like.day)]}),Object(q.jsx)("br",{}),c[r].weather[0].description,", humidity:"," ",c[r].humidity,"%, wind speed:"," ",Math.round(c[r].wind_speed),"m/s"]})]}):Object(q.jsx)(ce,{onClick:function(){return l(!0)},children:Object(q.jsx)(ue,{})}),Object(q.jsx)(re,{})]})},je=function(){var e,t=null===(e=Object(k.c)(X))||void 0===e?void 0:e.daily.slice(0,5),n=Object(g.useState)(0),r=Object(w.a)(n,2),c=r[0],a=r[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(be,{index:c}),Object(q.jsx)(V,{children:t&&t.map((function(e,t){return Object(q.jsxs)(Z,{selected:c,index:t,onClick:function(){return function(e){a(e)}(t)},children:[Object(q.jsx)("div",{children:(n=e.dt,new Date(1e3*n).toLocaleString("en-US",{weekday:"long"}))}),Object(q.jsx)("img",{src:W(e.weather[0].icon),alt:""}),Object(q.jsxs)("div",{children:[Q([e.temp.max,e.temp.min]),"\xb0"]})]},e.dt);var n}))})]})},pe=E.a.div(x||(x=Object(S.a)(["\n  text-align: center;\n  margin: 5px;\n  background-color: rgba(255,8,12,0.65);\n  font-size: xx-large;"]))),xe=function(){return Object(q.jsx)(pe,{children:"The location you provided is invalid"})},fe=Object(E.b)(f||(f=Object(S.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),Oe=E.a.div(O||(O=Object(S.a)(['\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 50%;\n    border: 10px solid transparent;\n    border-left-color: black;\n    border-top-color: black;\n    animation: '," 1s infinite ease-in-out;\n  }\n"])),fe),he=E.a.div(h||(h=Object(S.a)(["\n  display: grid;\n  place-items: center;\n  height: 375px;\n"]))),ge=function(){return Object(q.jsx)(he,{children:Object(q.jsx)(Oe,{})})},me=n(120),ve=function(){var e=Object(g.useState)(null),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(k.b)(),a=localStorage.getItem("city");if(console.log(),null===n&&!a){navigator.geolocation.getCurrentPosition((function(e){c(R(!0)),c(I({lat:e.coords.latitude,lon:e.coords.longitude}))}))}var o=Object(k.c)(B),i=Object(g.useMemo)((function(){return[o.lat,o.lon]}),[o]);Object(g.useEffect)((function(){r(i)}),[i]);return Object(q.jsx)(me.a,{height:300,onClick:function(e){r(e.latLng);var t={lat:e.latLng[0],lon:e.latLng[1]};c(R(!0)),c(I(t))},defaultZoom:11,center:n,children:Object(q.jsx)(me.b,{width:50,anchor:n})})},ye=function(){var e=Object(k.c)(X),t=Object(k.c)(K),n=Object(k.c)(J);return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(G,{}),n&&Object(q.jsx)(ge,{}),t&&Object(q.jsx)(xe,{}),!t&&!n&&e&&Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(je,{})}),Object(q.jsx)(ve,{})]})},we=function(){return Object(q.jsx)(ye,{})},ke=n(33),Se=n(185),Ee=n(30),Ce=n.n(Ee),Fe=n(25),Le=n(99),_e=n.n(Le),Te="2368f91b4188f22eb7c0ed42d1a9e8c6",ze=function(e){return _e.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(Te,"&units=metric"))},Me=function(e){var t=e.lat,n=e.lon;return _e.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(n,"&exclude=minutely,alerts&appid=").concat(Te,"&units=metric"))},Ie=function(e){var t=e.lat,n=e.lon;return _e.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(n,"&appid=").concat(Te,"&units=metric"))},De=Ce.a.mark(Pe),Ne=Ce.a.mark(Ae),Re=Ce.a.mark(Be),Ue=Ce.a.mark(He);function Pe(e){var t,n;return Ce.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Fe.c)(U(!1));case 3:return r.next=5,Object(Fe.b)(ze,e.payload);case 5:return t=r.sent,console.log(t),r.next=9,Object(Fe.c)(A({name:t.data.name,country:t.data.sys.country,coord:t.data.coord}));case 9:return localStorage.setItem("city",t.data.name),r.next=12,Object(Fe.b)(Me,t.data.coord);case 12:return n=r.sent,console.log(n.data),r.next=16,Object(Fe.c)(P(n.data));case 16:r.next=23;break;case 18:return r.prev=18,r.t0=r.catch(0),r.next=22,Object(Fe.c)(U(!0));case 22:console.log("\u0432\u0441\u0435 \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c \u043d\u0430\u0445\u0443\u0439");case 23:return r.prev=23,r.next=26,Object(Fe.c)(R(!1));case 26:return r.finish(23);case 27:case"end":return r.stop()}}),De,null,[[0,18,23,27]])}function Ae(){return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.d)(T,Pe);case 2:case"end":return e.stop()}}),Ne)}function Be(e){var t,n;return Ce.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Fe.c)(U(!1));case 3:return r.next=5,Object(Fe.b)(Ie,e.payload);case 5:return t=r.sent,console.log(t.data),r.next=9,Object(Fe.c)(A({name:t.data.name,country:t.data.sys.country,coord:t.data.coord}));case 9:return localStorage.setItem("city",t.data.name),r.next=12,Object(Fe.b)(Me,t.data.coord);case 12:return n=r.sent,console.log(n.data),r.next=16,Object(Fe.c)(P(n.data));case 16:r.next=23;break;case 18:return r.prev=18,r.t0=r.catch(0),r.next=22,Object(Fe.c)(U(!0));case 22:console.log("\u0432\u0441\u0435 \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c \u043d\u0430\u0445\u0443\u0439");case 23:return r.prev=23,r.next=26,Object(Fe.c)(R(!1));case 26:return r.finish(23);case 27:case"end":return r.stop()}}),Re,null,[[0,18,23,27]])}function He(){return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.d)(z,Be);case 2:case"end":return e.stop()}}),Ue)}var Je=Ce.a.mark(Ke);function Ke(){return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.a)([Ae(),He()]);case 2:case"end":return e.stop()}}),Je)}var Xe=Object(ke.b)({forecast:D.reducer}),qe=function(e){var t=Object(Se.a)(),n=Object(ke.a)(t),r=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ke.c,c=Object(ke.d)(Xe,e,r(n));return t.run(Ke),c}();y.a.render(Object(q.jsx)(m.a.StrictMode,{children:Object(q.jsx)(k.a,{store:qe,children:Object(q.jsx)(we,{})})}),document.getElementById("root"))}},[[350,1,2]]]);
//# sourceMappingURL=main.50fe4589.chunk.js.map