(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(21),s=n.n(a),o=(n(29),n(14)),i=n(24),u=n(4),j=n.n(u),l=n(9),b=n(8),h=n(0),d=function(e){var t=e.text,n=e.color,c=e.onClick;return Object(h.jsx)("button",{className:"btn edge",style:{backgroundColor:n},onClick:c,children:t})};d.defaultProps={};var p=d,x=function(e){var t=e.title,n=e.onShow,c=e.show;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)(p,{color:c?"red":"green",text:c?"Close task":"Add Task",onClick:n})]})};x.defaultProps={title:"Task tracker"};var f=x,O=function(){return Object(h.jsx)("footer",{children:Object(h.jsx)("p",{children:"Copyright \xa9 2021"})})},m=n(11),v=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Version 1.0"}),Object(h.jsx)(m.b,{exact:!0,to:"/react-training-app/",children:"Go back"})]})},k=n(16),g=function(e){var t=e.task,n=e.deleteTask,c=e.toggleTask;return Object(h.jsxs)("div",{className:"task",children:[Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)("h3",{children:t.text}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)("button",{className:"btn",style:{backgroundColor:"gold"},onClick:function(){return c(t.id)},children:t.reminder?Object(h.jsx)(k.c,{}):Object(h.jsx)(k.b,{})}),Object(h.jsx)("button",{className:"btn",style:{backgroundColor:"tomato"},onClick:function(){return n(t.id)},children:Object(h.jsx)(k.a,{})})]})]}),Object(h.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(h.jsx)(h.Fragment,{children:t.map((function(e,t){return Object(h.jsx)(g,{task:e,deleteTask:n,toggleTask:c},t)}))})},T=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(b.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(""),i=Object(b.a)(o,2),u=i[0],j=i[1],l=Object(c.useState)(!1),d=Object(b.a)(l,2),p=d[0],x=d[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:p}),s(""),j(""),x(!1)):alert("Please add task name")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Task Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Task name",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Date & Time"}),Object(h.jsx)("input",{type:"text",placeholder:"Date & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"Set reminder"}),Object(h.jsx)("input",{type:"checkbox",value:p,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(h.jsx)("div",{className:"form-control",children:Object(h.jsx)("input",{type:"submit",value:"Save task",className:"btn btn-block"})})]})},N=function(e){var t=e.onSearch,n=Object(c.useState)(""),r=Object(b.a)(n,2),a=r[0],s=r[1],o=function(){s("")};return Object(h.jsx)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),t(a),o()},children:Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("h2",{children:"Search"}),Object(h.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},value:a,placeholder:"Task name"}),Object(h.jsx)("input",{type:"submit",value:"Search",className:"btn",style:{backgroundColor:"royalblue"}})]})})},C=n(2);var w=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(b.a)(a,2),u=s[0],d=s[1];Object(c.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks/".concat(t),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,r([].concat(Object(i.a)(n),[a]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks/".concat(t),{method:"DELETE"});case 2:r(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,a,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return c=e.sent,a=Object(o.a)(Object(o.a)({},c),{},{reminder:!c.reminder}),e.next=6,fetch("https://vuhaovn-tasks.herokuapp.com/tasks/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:return s=e.sent,e.next=9,s.json();case 9:i=e.sent,r(n.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:i.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks?q=".concat(t),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(m.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(m.b,{exact:!0,to:"/react-training-app/",activeClassName:"active",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.b,{exact:!0,to:"/react-training-app/about",activeClassName:"active",children:"About"})})]})}),Object(h.jsxs)(C.a,{exact:!0,path:"/react-training-app/",children:[Object(h.jsx)(f,{onShow:function(){d(!u)},show:u}),u&&Object(h.jsx)(T,{onAdd:k}),Object(h.jsx)(N,{onSearch:S}),n.length>0?Object(h.jsx)(y,{tasks:n,onDelete:g,onToggle:w}):Object(h.jsx)("p",{children:"No task to show"})]}),Object(h.jsx)(C.a,{exact:!0,path:"/react-training-app/about",children:Object(h.jsx)(v,{})}),Object(h.jsx)(O,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.8c1c81ae.chunk.js.map