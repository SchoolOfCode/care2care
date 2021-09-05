(this.webpackJsonpcare2care=this.webpackJsonpcare2care||[]).push([[3],{64:function(n,e,t){"use strict";var i,c=t(4),a=t(3),s=t(2);e.a=function(){return Object(s.jsx)(r,{children:Object(s.jsx)("p",{children:"No Patient Selected"})})};var r=a.d.div(i||(i=Object(c.a)(["\n  text-align: center;\n"])))},65:function(n,e,t){"use strict";t.r(e);var i,c=t(4),a=t(7),s=t(1),r=t(3),o=t(28),j=t(26),l=t(13),d=t(64),h=t(2);e.default=function(){var n=Object(o.a)("https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv"),e=Object(a.a)(n,1)[0],t=Object(s.useContext)(j.a),i=e.filter((function(n){return n.Patient.includes(t.patient)})),c=Array.isArray(i)&&i.map((function(n,e){return Object(h.jsxs)("ul",{children:[Object(h.jsx)("img",{src:n.Picture||"https://static.thenounproject.com/png/3201525-200.png",alt:""}),Object(h.jsx)("h3",{children:n.Patient}),Object(h.jsxs)("div",{className:"patient-info",children:[Object(h.jsx)("div",{className:"info summary",children:Object(h.jsx)("p",{children:n.Summary||""})}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h4",{children:"Diagnosis"}),Object(h.jsx)("p",{children:n.Diagnosis||"No Information Available"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h4",{children:"Allergies"}),Object(h.jsx)("p",{children:n.Allergies||"No Information Available"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h4",{children:"Medication"}),Object(h.jsx)("p",{children:n.Medication||"No Information Available"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h4",{children:"DNR"}),Object(h.jsx)("p",{children:n.DNR||"No Information Available"})]}),Object(h.jsx)("h3",{children:"Personal Information"}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h4",{children:"Email"}),Object(h.jsx)("p",{children:n.Email||"No Information Available"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h4",{children:"Date of Birth"}),Object(h.jsx)("p",{children:n.DoB||"No Information Available"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h4",{children:"NHS Number"}),Object(h.jsx)("p",{children:n.NHS_Number||"No Information Available"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h4",{children:"GP"}),Object(h.jsx)("p",{children:n.GP||"No Information Available"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h4",{children:"Next of Kin"}),Object(h.jsxs)("span",{children:[Object(h.jsx)("p",{children:n.NextOfKin||"No Information Available"}),Object(h.jsx)("p",{children:n.NoK_Contact})]})]})]},e)]},e)})),r=function(){return Object(h.jsx)(h.Fragment,{children:c})};return Object(h.jsxs)(x,{children:[Object(h.jsx)("h1",{children:"Patient Profile"}),Object(h.jsx)("div",{children:t.patient?Object(h.jsx)(r,{}):Object(h.jsx)(d.a,{})})]})};var x=r.d.div(i||(i=Object(c.a)(["\n  height: calc(100vh - 140px);\n\n  ul {\n    ","\n    flex-direction: column;\n    width: 100vw;\n  }\n\n  img {\n    width: 150px;\n    height: 150px;\n    margin: 20px auto 0;\n    border: 5px solid ",";\n    border-radius: 50%;\n    justify-self: center;\n    object-fit: cover;\n  }\n\n  h3 {\n    font-size: 30px;\n  }\n\n  .summary {\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n    padding: 10px;\n    margin-bottom: 25px;\n  }\n\n  .patient-info {\n    margin-top: 10px;\n    padding: 0 30px;\n    text-align: left;\n    width: 50%;\n\n    h3 {\n      font-size: 20px;\n      margin: 15px 0 10px;\n    }\n\n    h4 {\n      color: ",";\n      border-bottom: "," 1px solid;\n    }\n\n    .info {\n      margin-top: 15px;\n\n      span {\n        ",";\n        justify-content: space-between;\n      }\n    }\n\n    @media (max-width: 738px) {\n      width: 100vw;\n    }\n  }\n"])),l.a,(function(n){return n.theme.accent1}),(function(n){return n.theme.accent1}),(function(n){return n.theme.accent1}),l.a)}}]);
//# sourceMappingURL=3.cd903554.chunk.js.map