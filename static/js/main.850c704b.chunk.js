(this["webpackJsonpservicebookingsystem1.0"]=this["webpackJsonpservicebookingsystem1.0"]||[]).push([[0],{39:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),s=c.n(a),r=c(11),i=c.n(r),l=(c(55),c(39),c(45)),j=c(16),o=c(17),d=c(30),b=c(19),h=c(18),u=(c(43),(new Date).toLocaleString()),O=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],m=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"koni",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("h2",{children:"Add Booking"}),Object(n.jsxs)("p",{children:[O,"-",u]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name of customer"}),Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Customer Name"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Address"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Address"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Contact No."}),Object(n.jsx)("input",{type:"number",className:"form-control",placeholder:"Phone No:."})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Query"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Query"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Agent Assigned."}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Agent Name"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Date and Time Alloted."}),Object(n.jsx)("input",{type:"datetime-local",className:"form-control",placeholder:"date and time"})]}),Object(n.jsx)("button",{className:"button",children:"Add Booking"})]})})}}]),c}(a.Component),x=c(24),p=c(27),g=c(35),f=c(21),v=c(6),N=c(37),y=[{title:"DashBoard",path:"/BookingTable",icon:Object(n.jsx)(p.a,{}),cName:"nav-text"},{title:"New Booking",path:"/AddBooking",icon:Object(n.jsx)(N.a,{}),cName:"nav-text"},{title:"Add agents",path:"/AddAgent",icon:Object(n.jsx)(N.c,{}),cName:"nav-text"},{title:"View Agent",path:"/AgentTable",icon:Object(n.jsx)(x.b,{}),cName:"nav-text"},{title:"Logout",path:"/Logout",icon:Object(n.jsx)(N.b,{}),cName:"nav-text"}],A=(c(56),c(0)),k=(new Date).toLocaleString(),C=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],w=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"koni",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("h2",{children:"Add Agent"}),Object(n.jsxs)("p",{children:[C,"-",k]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name of Agent"}),Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Agent Name"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Address"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Address"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Contact No."}),Object(n.jsx)("input",{type:"number",className:"form-control",placeholder:"Phone No:"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Join On"}),Object(n.jsx)("input",{type:"datetime-local",className:"form-control",placeholder:"Join Date"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"UserName Alloted."}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"User Name"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password Alloted."}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Password"})]}),Object(n.jsx)("button",{className:"button",children:"Register agent"})]})})}}]),c}(a.Component),T=(c(44),function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(j.a)(this,c),(n=t.call(this,e)).state={students:[{AgentId:1,AgentName:"Wasif Kan",age:21,email:"wasif@email.com"},{AgentId:2,AgentName:"Manu",age:19,email:"manu@email.com"},{AgentId:3,AgentName:"jone wick",age:16,email:"saad@email.com"},{AgentId:4,AgentName:"Adam crick",age:25,email:"asad@email.com"}]},n}return Object(o.a)(c,[{key:"renderTableData",value:function(){return this.state.students.map((function(e,t){var c=e.AgentId,a=e.AgentName,s=e.age,r=e.email;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:c}),Object(n.jsx)("td",{children:a}),Object(n.jsx)("td",{children:s}),Object(n.jsx)("td",{children:r})]},c)}))}},{key:"renderTableHeader",value:function(){return Object.keys(this.state.students[0]).map((function(e,t){return Object(n.jsx)("th",{children:e.toUpperCase()},t)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{id:"title",children:"View Booking"}),Object(n.jsx)("table",{Id:"students",children:Object(n.jsxs)("tbody",{children:[Object(n.jsx)("tr",{children:this.renderTableHeader()}),this.renderTableData()]})})]})}}]),c}(a.Component)),S=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(j.a)(this,c),(n=t.call(this,e)).state={students:[{id:1,name:"Wasif",age:21,email:"wasif@email.com"},{id:2,name:"Ali",age:19,email:"ali@email.com"},{id:3,name:"Saad",age:16,email:"saad@email.com"},{id:4,name:"Asad",age:25,email:"asad@email.com"}]},n}return Object(o.a)(c,[{key:"renderTableData",value:function(){return this.state.students.map((function(e,t){var c=e.id,a=e.name,s=e.age,r=e.email;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:c}),Object(n.jsx)("td",{children:a}),Object(n.jsx)("td",{children:s}),Object(n.jsx)("td",{children:r})]},c)}))}},{key:"renderTableHeader",value:function(){return Object.keys(this.state.students[0]).map((function(e,t){return Object(n.jsx)("th",{children:e.toUpperCase()},t)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{id:"title",children:"View Agent"}),Object(n.jsx)("table",{id:"students",children:Object(n.jsxs)("tbody",{children:[Object(n.jsx)("tr",{children:this.renderTableHeader()}),this.renderTableData()]})})]})}}]),c}(a.Component),B=c(96),D=c(95),L=c(93),P=c(94),I=c(92);function F(){var e=s.a.useState(!0),t=Object(g.a)(e,2),c=t[0],a=t[1],r=function(){a(!1)};return Object(n.jsx)("div",{children:Object(n.jsxs)(B.a,{open:c,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(I.a,{id:"alert-dialog-title",children:"Logout from the Service Booking System"}),Object(n.jsx)(L.a,{children:Object(n.jsx)(P.a,{id:"alert-dialog-description",children:"Please Click on the Logout button to logout of the website,Press cancel to stay on the Site."})}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)("button",{onClick:r,className:"button",children:"Cancel"}),Object(n.jsx)("button",{onClick:function(){return console.log("hello"),window.location.replace("https://manuchaturvedi.github.io/Servicefrontend/"),Object(n.jsx)(v.a,{to:"/BookingTable"})},className:"button",children:"Logout"})]})]})})}var E=function(){var e=Object(a.useState)(!1),t=Object(g.a)(e,2),c=t[0],s=t[1],r=function(){return s(!c)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsxs)(A.b.Provider,{value:{color:"#fff"},children:[Object(n.jsx)("div",{className:"navbar",children:Object(n.jsx)(f.b,{to:"#",className:"menu-bars",children:Object(n.jsx)(x.a,{onClick:r})})}),Object(n.jsx)("nav",{className:"nav-menu active",children:Object(n.jsxs)("ul",{className:"nav-menu-items",onClick:r,children:[Object(n.jsx)("li",{className:"navbar-toggle",children:Object(n.jsx)(f.b,{to:"#",className:"menu-bars"})}),y.map((function(e,t){return Object(n.jsx)("li",{className:e.cName,children:Object(n.jsxs)(f.b,{to:e.path,children:[e.icon,Object(n.jsx)("span",{children:e.title})]})},t)}))]})})]}),Object(n.jsxs)(v.d,{children:[Object(n.jsx)(v.b,{path:"/AddAgent",children:Object(n.jsx)(w,{})}),Object(n.jsx)(v.b,{path:"/AddBooking",children:Object(n.jsx)(m,{})}),Object(n.jsx)(v.b,{path:"/BookingTable",children:Object(n.jsx)(T,{})}),Object(n.jsx)(v.b,{path:"/AgentTable",children:Object(n.jsx)(S,{})}),Object(n.jsx)(v.b,{path:"/Logout",children:Object(n.jsx)(F,{})})]})]})})},z=(c.p,c.p+"static/media/halfback.98c0409b.png");function R(){return Object(n.jsx)("img",{width:300,height:250,src:z,alt:"Logo"})}var M=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(j.a)(this,c),(a=t.call(this,e)).setRedirect=function(){"admin"==a.state.username&&"admin"==a.state.password&&a.setState({redirect:!0})},a.handleChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.renderRedirect=function(){if(a.state.redirect)return Object(n.jsx)(v.a,{to:"/BookingTable"})},a.state={redirect:!1,username:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"logo",children:[Object(n.jsxs)("p",{children:["SERVICE BOOKING ",Object(n.jsx)("br",{})," SYSTEM"]}),Object(n.jsx)(R,{}),Object(n.jsx)("h6",{children:"Powered By:"}),Object(n.jsx)("h5",{children:" NCS Technologies"}),Object(n.jsxs)("div",{style:{color:"",padding:"5px",cursor:"pointer"},children:[Object(n.jsx)(A.b.Provider,{value:{color:"#25d366",size:"50px"},children:Object(n.jsx)(x.d,{size:45})}),Object(n.jsx)(A.b.Provider,{value:{color:"#0e76a8",size:"50px"},children:Object(n.jsx)(x.c,{size:45})}),Object(n.jsx)(A.b.Provider,{value:{color:"#3c2ec0",size:"50px"},children:Object(n.jsx)(p.b,{size:45})})]})]}),Object(n.jsx)("div",{class:"vl"}),Object(n.jsx)("div",{className:"kon",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-groups",children:[Object(n.jsx)("label",{children:"Login"}),Object(n.jsx)("input",{type:"email",className:"form-control",name:"username",placeholder:"Enter email",value:this.state.username,onChange:this.handleChange})]}),Object(n.jsxs)("div",{className:"form-groups",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleChange})]}),this.renderRedirect(),Object(n.jsx)("button",{className:"button",onClick:this.setRedirect,children:"LOGIN"}),Object(n.jsx)("button",{className:"lic",children:"Licence Expire in:173 days"})]})})]})}}]),c}(a.Component);function H(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(M,{})})}function J(){return Object(n.jsx)("div",{children:Object(n.jsx)(E,{})})}function U(){return Object(n.jsx)("div",{children:Object(n.jsx)(E,{})})}function V(){return Object(n.jsx)("div",{children:Object(n.jsx)(E,{})})}function W(){return Object(n.jsx)("div",{children:Object(n.jsx)(E,{})})}var G=function(){return Object(n.jsx)(f.a,{children:Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(v.d,{children:[Object(n.jsx)(v.b,{path:"/BookingTable",children:Object(n.jsx)(U,{})}),Object(n.jsx)(v.b,{path:"/AddAgent",children:Object(n.jsx)(V,{})}),Object(n.jsx)(v.b,{path:"/AddBooking",children:Object(n.jsx)(W,{})}),Object(n.jsx)(v.b,{path:"/AgentTable",children:Object(n.jsx)(J,{})}),Object(n.jsx)(v.b,{path:"/",children:Object(n.jsx)(H,{})})]})})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,98)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(65);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root")),K()}},[[66,1,2]]]);
//# sourceMappingURL=main.850c704b.chunk.js.map