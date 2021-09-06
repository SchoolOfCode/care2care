(this.webpackJsonpcare2care=this.webpackJsonpcare2care||[]).push([[0],{13:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var c,i=e(4),r=e(3),o=Object(r.c)(c||(c=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))},19:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var c,i=e(4),r=e(3).d.button(c||(c=Object(i.a)(["\n  height: 40px;\n  width: 150px;\n  border: none;\n  border-radius: 10px;\n  color: #f5f5f5;\n  background-color: ",";\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n"])),(function(n){return n.theme.accent2}))},27:function(n,t,e){"use strict";e.d(t,"a",(function(){return on}));var c,i,r,o,a,s,l,u,d,b,h,f=e(7),j=e(1),p=e(3),x=e(4),m=Object(p.b)(c||(c=Object(x.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-touch-callout: none;\n  }\n\nbody {\n  position: relative;\n  width: 100%;\n  background: ",";\n  color: ",";\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;\n  font-size: 14px;\n  line-height: 1.5;\n  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody, html {\n  overscroll-behavior-y: contain;\n  overflow-x: hidden!important;\n}\n\n*::-webkit-scrollbar {\n  scrollbar-width: none;  \n  display: none;\n  }\n"])),(function(n){return n.theme.bg}),(function(n){return n.theme.fontColor2})),g={light:{bg:"#f5f5f5",navBg:"#ffffff",menuBg:"#333333af",fontColor1:"#f5f5f5",fontColor2:"#333333",accent1:"#49C6E5",accent2:"#51ADE2",notActive:"#aaaaaa"},dark:{bg:"#243546",navBg:"#314455",menuBg:"#f5f5f5af",fontColor1:"#333333",fontColor2:"#f5f5f5",accent1:"#00BD9D",accent2:"#8BD7D2",notActive:"#0d1720"}},O=e(30),v=e(11),w=e(41),k=e(19),y=e(2),C=function(){var n=Object(v.b)().loginWithRedirect;return Object(y.jsx)(k.a,{onClick:n,children:"Log In"})},S=e(12),L=e(20),E=e(36),z=e(37),A=e(21),P={Login:L.a,Logout:L.b,Menu:A.a,Patients:E.a,AddRecord:A.b,Profile:z.a,CheckRecords:A.c,Settings:L.c},B=e(5),I=e(13),N=function(){var n=Object(B.f)(),t=Object(j.useState)(window.location.pathname),e=Object(f.a)(t,2),c=e[0],i=e[1];Object(j.useEffect)((function(){return n.listen((function(n){i(n.pathname),console.log("You changed the page to: ".concat(c))}))}),[n,c]);var r=[{icon:Object(y.jsx)(P.AddRecord,{className:"icon"}),title:"New Record",path:"/add"},{icon:Object(y.jsx)(P.Patients,{className:"icon"}),title:"Patient",path:"/patient"},{icon:Object(y.jsx)(P.CheckRecords,{className:"icon"}),title:"Daily Logs",path:"/logs"}];return Object(y.jsx)(D,{children:Object(y.jsx)("div",{className:"tab-content",children:r.map((function(n,t){return Object(y.jsx)("div",{className:"tabs ".concat(c===n.path?"active":""),children:Object(y.jsxs)(S.b,{to:n.path,className:"tab-name",children:[Object(y.jsx)("div",{children:n.icon}),Object(y.jsx)("p",{children:n.title})]},t)},t)}))})})},D=p.d.nav(i||(i=Object(x.a)(["\n  background: ",";\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n\n\n  .tab-content {\n    ","\n    justify-content: space-around;\n    flex-flow: row nowrap;\n    width: 100%;\n    padding: 5px 2px 0;\n  }\n\n  .icon {\n    margin-right: 5px;\n    width: 20px;\n    margin-bottom: -3px;\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n    font-size: 24px;\n  }\n\n  .tab-name {\n    ","\n    text-align: center;\n    width: 33vw;\n\n    p {\n      font-size: 12px;\n    }\n  }\n\n  .active {\n    border-bottom: 2px solid "," !important;\n\n    a {\n      color: "," !important;\n      font-weight: bold;\n    }\n  }\n"])),(function(n){return n.theme.navBg}),I.a,(function(n){return n.theme.notActive}),I.a,(function(n){return n.theme.accent1}),(function(n){return n.theme.accent1})),R=function(){var n=Object(v.b)(),t=n.user;return n.isAuthenticated&&Object(y.jsxs)(F,{children:[Object(y.jsx)("img",{src:t.picture,alt:t.name}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:t.name}),Object(y.jsx)("p",{children:t.email})]})]})},F=p.d.div(r||(r=Object(x.a)(["\n  color: ",";\n\n  div {\n    display: flex;\n    flex-direction: column;\n  }\n\n  h2 {\n    font-size: 15px;\n  }\n\n  p {\n    font-size: 10px;\n  }\n\n  img {\n    width: 40px;\n    margin: 5px 5px 0 5px;\n    border-radius: 50%;\n    justify-self: center;\n  }\n"])),(function(n){return n.theme.fontColor1})),M=function(){var n=Object(j.useRef)(null),t=Object(j.useState)(!1),e=Object(f.a)(t,2),c=e[0],i=e[1];return Object(j.useEffect)((function(){var t=function(t){null===n.current||n.current.contains(t.target)||i(!c)};return c&&window.addEventListener("click",t),function(){window.removeEventListener("click",t)}}),[c]),Object(y.jsxs)(T,{children:[Object(y.jsx)(P.Menu,{onClick:function(){return i(!c)},className:"menu-trigger"}),Object(y.jsx)("nav",{ref:n,className:"menu ".concat(c?"active":"inactive"),children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{onClick:function(){return i(!1)},children:Object(y.jsx)(S.b,{to:"/profile",children:Object(y.jsx)(R,{})})}),Object(y.jsx)("li",{onClick:function(){return i(!1)},children:Object(y.jsx)(S.b,{to:"/settings",children:"Settings"})}),Object(y.jsx)("li",{onClick:function(){return i(!1)},children:Object(y.jsx)(S.b,{to:"/new",children:"+ New Patient"})})]})})]})},T=p.d.div(o||(o=Object(x.a)(["\n  .menu {\n    background: ",";\n    backdrop-filter: blur(2px);\n    -webkit-backdrop-filter: blur(2px);\n    -ms-backdrop-filter: blur(2px);\n    border-radius: 8px;\n    position: absolute;\n    top: 50px;\n    right: 20px;\n    width: auto;\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-20px);\n    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;\n  }\n\n  .menu.active {\n    opacity: 1;\n    visibility: visible;\n    transform: translateY(0);\n    z-index: 1;\n  }\n\n  .menu ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .menu li {\n    border-bottom: 1px solid ",";\n    text-align: right;\n    :last-child {\n      border: none;\n    }\n    a {\n      text-decoration: none;\n      color: ",";\n      padding: 15px 20px;\n      display: block;\n    }\n  }\n\n  .menu-trigger {\n    background: transparent;\n    color: ",";\n    cursor: pointer;\n    border: none;\n    width: auto;\n    height: 20px;\n  }\n  @media (min-width: 768px) {\n    display: none;\n  }\n"])),(function(n){return n.theme.menuBg}),(function(n){return n.theme.notActive}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.fontColor2})),U=e(28),Y=function(n){var t=Object(j.useRef)(null),e=Object(U.a)("https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv"),c=Object(f.a)(e,1)[0],i=Object(j.useState)(!1),r=Object(f.a)(i,2),o=r[0],a=r[1],s=Object(j.useState)(""),l=Object(f.a)(s,2),u=l[0],d=l[1],b=Object(j.useContext)(on);return Object(j.useEffect)((function(){var n=function(n){null===t.current||t.current.contains(n.target)||a(!1)};return o&&window.addEventListener("click",n),function(){window.removeEventListener("click",n)}}),[o]),Object(y.jsxs)(q,{children:[Object(y.jsx)("form",{children:Object(y.jsx)(J,{ref:t,type:"search",value:u,onFocus:function(){return a(!0)},onChange:function(n){d(n.target.value)}})}),Object(y.jsx)("ul",{className:"".concat(o?"active":"inactive"),children:c.filter((function(n){return n.Patient.toLowerCase().includes(u.toLowerCase())})).map((function(n,t){return Object(y.jsx)("li",{value:n.ID,onClick:function(t){return b.setPatient(n.Patient)},children:n.Patient},t)}))})]})},q=p.d.div(a||(a=Object(x.a)(["\n  ul {\n    display: flex;\n    flex-direction: column;\n    text-align: right;\n    backdrop-filter: blur(2px);\n    -webkit-backdrop-filter: blur(2px);\n    -ms-backdrop-filter: blur(2px);\n    position: absolute;\n    top: 55px;\n    right: 20px;\n    height: 200px;\n    overflow-y: scroll;\n    width: auto;\n    background: ",";\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    border-radius: 8px;\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);\n    opacity: 0;\n    cursor: pointer;\n    visibility: hidden;\n    transform: translateY(-20px);\n    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;\n  }\n\n  li {\n    border-bottom: 1px solid ",";\n    color: ",";\n    padding: 7px 20px;\n    display: block;\n    :last-child {\n      border: none;\n    }\n    :hover {\n      background-color: ",";\n    }\n  }\n\n  .active {\n    opacity: 1;\n    visibility: visible;\n    transform: translateY(0);\n    z-index: 1;\n  }\n"])),(function(n){return n.theme.menuBg}),(function(n){return n.theme.notActive}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.accent2})),J=p.d.input(s||(s=Object(x.a)(['\n  outline: none;\n  -webkit-appearance: textfield;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  font-family: inherit;\n  font-size: 100%;\n  background: transparent\n    url("http://www.clker.com/cliparts/8/n/U/M/V/E/search-icon.svg") no-repeat\n    right 8px center;\n  background-size: 18px;\n  border: none;\n  width: 20px;\n  min-height: 28px;\n  padding: 0 12px;\n  font-weight: 400;\n  max-width: 100%;\n  transition: all 0.5s;\n  line-height: 20px;\n  color: transparent;\n  cursor: pointer;\n\n  &&::-webkit-search-decoration,\n  &&::-webkit-search-cancel-button {\n    display: none;\n  }\n\n  &&[type="search"]:focus {\n    color: ',";\n    width: 40vw;\n    background-color: ",";\n    border-color: ",";\n    -webkit-box-shadow: 0 0 5px ",";\n    -moz-box-shadow: 0 0 5px ",";\n    box-shadow: 0 0 5px ",";\n  }\n"])),(function(n){return n.theme.fontColor2}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.accent2}),(function(n){return n.theme.accent2}),(function(n){return n.theme.accent2}),(function(n){return n.theme.accent2})),G=function(){return Object(y.jsxs)(Q,{children:[Object(y.jsx)("h3",{children:"Care2Care"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(Y,{}),Object(y.jsx)(M,{})]})]})},Q=p.d.div(l||(l=Object(x.a)(["\n  ","\n  justify-content: space-between;\n  padding: 20px 10px 10px 20px;\n\n  h3 {\n    color: ",";\n  }\n\n  div {\n    ","\n  }\n"])),I.a,(function(n){return n.theme.fontColor2}),I.a),H=e(39),X=e.n(H),V=function(){return Object(y.jsxs)(W,{children:[Object(y.jsx)(G,{}),Object(y.jsx)(X.a,{children:Object(y.jsx)(N,{})})]})},W=p.d.nav(u||(u=Object(x.a)(["\n  background-color: ",";\n  height: 90px;\n  width: 100vw;\n"])),(function(n){return n.theme.navBg})),Z=Object(j.lazy)((function(){return e.e(9).then(e.bind(null,73))})),K=function(){return Object(y.jsx)(_,{children:Object(y.jsx)(j.Suspense,{fallback:Object(y.jsx)("div",{children:"Loading"}),children:Object(y.jsx)(Z,{})})})},_=p.d.main(d||(d=Object(x.a)(["\n  width: 100vw;\n  min-height: calc(100vh - 140px);\n\n  h1 {\n    margin: 40px 0 20px;\n    height: 50px;\n    text-align: center;\n  }\n"]))),$=e.p+"static/media/logo.a12f9b50.svg",nn=function(){var n=Object(j.useState)(!1),t=Object(f.a)(n,2),e=t[0],c=t[1],i=Object(j.useState)(null),r=Object(f.a)(i,2),o=r[0],a=r[1];Object(j.useEffect)((function(){var n=function(n){n.preventDefault(),c(!0),a(n)};return window.addEventListener("beforeinstallprompt",n),function(){return window.removeEventListener("transitionend",n)}}),[]);return e?Object(y.jsx)(k.a,{"aria-label":"Install App",title:"Install App",onClick:function(n){n.preventDefault(),o&&o.prompt()},children:"Install App"}):null},tn=function(){return Object(y.jsxs)(cn,{children:[Object(y.jsx)(rn,{src:$,alt:""}),Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsx)(C,{}),Object(y.jsx)(nn,{})]})]})},en=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(V,{}),Object(y.jsx)(K,{})]})},cn=p.d.div(b||(b=Object(x.a)(["\n  ","\n  flex-direction: column;\n  background: ",";\n  width: 100vw;\n  height: 100vh;\n\n  .buttons {\n    margin-top: 50px;\n\n    button {\n      margin: 0 10px;\n      background: ",";\n\n      @media (max-width: 738px) {\n        width: 40vw;\n      }\n    }\n  }\n"])),I.a,(function(n){return n.theme.bg}),(function(n){return n.theme.accent1})),rn=Object(p.d)(w.a)(h||(h=Object(x.a)(["\n  max-width: 80vw;\n  width: 350px;\n\n  & path {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.accent1})),on=Object(j.createContext)(),an=function(){return Object(v.b)().isAuthenticated?Object(y.jsx)(en,{}):Object(y.jsx)(tn,{})};t.b=function(n){var t=n.children,e=Object(j.useState)(""),c=Object(f.a)(e,2),i=c[0],r=c[1],o=Object(O.a)("theme","light"),a=Object(f.a)(o,2),s=a[0],l=a[1];return Object(v.b)().isLoading?Object(y.jsx)("div",{children:"Loading..."}):Object(y.jsxs)(p.a,{theme:g[s],children:[Object(y.jsx)(m,{}),Object(y.jsx)(on.Provider,{value:{patient:i,setPatient:r,changeTheme:function(){l("light"===s?"dark":"light")}},children:Object(y.jsx)(an,{children:t})})]})}},28:function(n,t,e){"use strict";var c=e(7),i=e(1),r=e(38),o=e.n(r);t.a=function(n){var t=Object(i.useState)([]),e=Object(c.a)(t,2),r=e[0],a=e[1];return Object(i.useEffect)((function(){o.a.parse(n,{download:!0,header:!0,complete:function(n){a(n.data)}})}),[n]),[r]}},30:function(n,t,e){"use strict";var c=e(7),i=e(1);t.a=function(n,t){var e=Object(i.useState)((function(){try{var e=window.localStorage.getItem(n);return e?JSON.parse(e):t}catch(c){return console.log(c),t}})),r=Object(c.a)(e,2),o=r[0],a=r[1];return[o,function(t){try{var e=t instanceof Function?t(o):t;a(e),window.localStorage.setItem(n,JSON.stringify(e))}catch(c){console.log(c)}}]}},63:function(n,t,e){"use strict";e.r(t);e(1);var c=e(32),i=e.n(c),r=function(n){n&&n instanceof Function&&e.e(10).then(e.bind(null,72)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),c(n),i(n),r(n),o(n)}))},o=e(12),a=e(11),s=e(27),l=e(2),u=document.getElementById("root");i.a.render(Object(l.jsx)(a.a,{domain:"archianne.eu.auth0.com",clientId:"9ciI61OkjK0UPi8c8TG0EGUjX6tQHPjq",redirectUri:window.location.origin,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(s.b,{})})}),u),r()}},[[63,1,2]]]);
//# sourceMappingURL=main.6456fb20.chunk.js.map