(this.webpackJsonpcare2care=this.webpackJsonpcare2care||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var i,c,a=n(0),o=n(9),r=n.n(o),s=n(5),l=n(2),b=n(4),h=Object(l.b)(i||(i=Object(b.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  }\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;\n  font-size: 14px;\n  line-height: 1.5;\n  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]))),j={light:{bg:"#f5f5f5"},dark:{bg:"#0D1117"}},d=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(i){return console.log(i),t}})),i=Object(s.a)(n,2),c=i[0],o=i[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(i){console.log(i)}}]},f=n(1),u=function(){return Object(f.jsx)(g,{children:[{title:"Home",path:"/"},{title:"Profile",path:"/profile"},{title:"Patient",path:"/patient"},{title:"Add New Record",path:"/add"},{title:"Check Records",path:"/check"},{title:"Settings",path:"/settings"}].map((function(e,t){return Object(f.jsx)("a",{href:e.path,children:e.title},t)}))})},g=l.c.nav(c||(c=Object(b.a)(["\ndisplay: flex;\nflex-flow: row nowrap;\njustify-content: space-between;\n"]))),p=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(10)]).then(n.bind(null,42))})),O=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(a.Suspense,{fallback:Object(f.jsx)("div",{children:"Loading"}),children:Object(f.jsx)(p,{})})})},m=function(){var e=d("theme","dark"),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(f.jsxs)(l.a,{theme:j[n],children:[Object(f.jsx)(h,{changeTheme:function(){i("dark"===n?"light":"dark")}}),Object(f.jsx)(u,{}),Object(f.jsx)(O,{})]})},x=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,43)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))},w=document.getElementById("root");r.a.render(Object(f.jsx)(a.StrictMode,{children:Object(f.jsx)(m,{})}),w),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.fbca45dc.chunk.js.map