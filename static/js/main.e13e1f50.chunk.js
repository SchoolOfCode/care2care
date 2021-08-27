(this.webpackJsonpcare2care=this.webpackJsonpcare2care||[]).push([[0],{26:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var c,i=e(6),o=e(5).c.button(c||(c=Object(i.a)(["\n  height: 40px;\n  width: 100px;\n  border: none;\n  border-radius: 10px;\n  color: #f5f5f5;\n  background-color: ",";\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n"])),(function(n){return n.theme.accent1}))},28:function(n,t,e){"use strict";var c=e(17),i=e(1);t.a=function(n,t){var e=Object(i.useState)((function(){try{var e=window.localStorage.getItem(n);return e?JSON.parse(e):t}catch(c){return console.log(c),t}})),o=Object(c.a)(e,2),r=o[0],a=o[1];return[r,function(t){try{var e=t instanceof Function?t(r):t;a(e),window.localStorage.setItem(n,JSON.stringify(e))}catch(c){console.log(c)}}]}},52:function(n,t,e){"use strict";e.r(t);var c,i,o,r,a,s,l,b=e(1),d=e(29),j=e.n(d),h=function(n){n&&n instanceof Function&&e.e(9).then(e.bind(null,58)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;e(n),c(n),i(n),o(n),r(n)}))},u=e(16),f=e(10),g=e(17),x=e(5),O=e(6),p=Object(x.b)(c||(c=Object(O.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  }\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;\n  font-size: 14px;\n  line-height: 1.5;\n  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n  overflow-x: hidden!important;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]))),m={light:{bg:"#f5f5f5",color1:"#f5f5f5",accent1:"#1C7293"},dark:{bg:"#0D1117",color1:"#333333",accent1:"#51ADE2"}},w=e(28),v=e(26),y=e(2),k=function(){var n=Object(f.b)().loginWithRedirect;return Object(y.jsx)(S,{onClick:n,children:"Log In"})},S=Object(x.c)(v.a)(i||(i=Object(O.a)(["\n  background: rgb(31, 193, 27);\n"]))),P=e(19),C=e(33),I=e(34),L=e(22),A={Login:P.a,Logout:P.b,Patients:C.a,AddRecord:L.a,Profile:I.a,CheckRecords:L.b,Settings:P.c},F=e.p+"static/media/smallLogo.93be83d7.svg",R=e(18),z=function(){var n=[{icon:Object(y.jsx)(A.Patients,{}),title:"Patient",path:"/patient"},{icon:Object(y.jsx)(A.AddRecord,{}),title:"Add New Record",path:"/add"},{icon:Object(y.jsx)(A.Profile,{}),title:"Profile",path:"/profile"},{icon:Object(y.jsx)(A.CheckRecords,{}),title:"Check Records",path:"/check"},{icon:Object(y.jsx)(A.Settings,{}),title:"Settings",path:"/settings"}];return Object(y.jsxs)(E,{children:[Object(y.jsx)("div",{class:"logo",children:Object(y.jsx)(U,{src:F,alt:""})}),Object(y.jsx)("div",{class:"icons",children:n.map((function(n,t){return Object(y.jsx)(u.b,{to:n.path,children:n.icon},t)}))})]})},E=x.c.nav(o||(o=Object(O.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  background: ",";\n  margin-bottom: 50px;\n\n  .icons {\n    width: 80%;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-around;\n    align-items: center;\n    @media (max-width: 798px) {\n      width: 100%;\n    }\n  }\n\n  a {\n    color: ",";\n    font-size: 24px;\n  }\n\n  .logo {\n    @media (max-width: 798px) {\n      display: none;\n    }\n  }\n"])),(function(n){return n.theme.accent1}),(function(n){return n.theme.color1})),U=Object(x.c)(R.a)(r||(r=Object(O.a)(["\n  max-width: 77px;\n\n  & path {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.color1})),J=Object(b.lazy)((function(){return e.e(8).then(e.bind(null,59))})),B=function(){return Object(y.jsx)(D,{children:Object(y.jsx)(b.Suspense,{fallback:Object(y.jsx)("div",{children:"Loading"}),children:Object(y.jsx)(J,{})})})},D=x.c.main(a||(a=Object(O.a)(["\n  height: 90vh;\n  width: 100vw;\n  \n  h1 {\n    margin-bottom: 20px;\n    text-align: center;\n  }\n"]))),N=e.p+"static/media/logo.a12f9b50.svg",T=function(){return Object(y.jsxs)(H,{children:[Object(y.jsx)(q,{src:N,alt:""}),Object(y.jsx)(k,{})]})},G=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(z,{}),Object(y.jsx)(B,{})]})},H=x.c.div(s||(s=Object(O.a)(["\n  background: ",";\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.bg})),q=Object(x.c)(R.a)(l||(l=Object(O.a)(["\n  max-width: 80vw;\n  width: 350px;\n\n  & path {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.accent1})),K=function(){return Object(f.b)().isAuthenticated?Object(y.jsx)(G,{}):Object(y.jsx)(T,{})},M=function(){var n=Object(w.a)("theme","light"),t=Object(g.a)(n,2),e=t[0];t[1];return Object(f.b)().isLoading?Object(y.jsx)("div",{children:"Loading..."}):Object(y.jsxs)(x.a,{theme:m[e],children:[Object(y.jsx)(p,{}),Object(y.jsx)(K,{})]})},Q=document.getElementById("root");j.a.render(Object(y.jsx)(f.a,{domain:"archianne.eu.auth0.com",clientId:"9ciI61OkjK0UPi8c8TG0EGUjX6tQHPjq",redirectUri:window.location.origin,children:Object(y.jsx)(u.a,{children:Object(y.jsx)(M,{})})}),Q),h()}},[[52,1,2]]]);
//# sourceMappingURL=main.e13e1f50.chunk.js.map