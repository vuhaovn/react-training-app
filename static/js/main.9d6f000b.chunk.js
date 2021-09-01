(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(20),s=n.n(a),o=(n(29),n(14)),i=n(24),u=n(4),j=n.n(u),h=n(9),l=n(8),b=n(0),p=function(e){var t=e.text,n=e.color,r=e.onClick;return Object(b.jsx)("button",{className:"btn",style:{backgroundColor:n},onClick:r,children:t})};p.defaultProps={};var d=p,f=function(e){var t=e.title,n=e.onShow,r=e.show;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)(d,{color:r?"red":"green",text:r?"Close task":"Add Task",onClick:n})]})};f.defaultProps={title:"Task tracker"};var x=f,O=function(){return Object(b.jsx)("footer",{children:Object(b.jsx)("p",{children:"Copyright \xa9 2021"})})},v=n(11),m=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Version 1.0"}),Object(b.jsx)(v.b,{to:"/",children:"Go back"})]})},k=n(23),g=function(e){var t=e.task,n=e.deleteTask,r=e.toggleTask;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(b.jsxs)("h3",{children:[t.text," ",Object(b.jsx)(k.a,{onClick:function(){return n(t.id)}})]}),Object(b.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){return Object(b.jsx)(g,{task:e,deleteTask:n,toggleTask:r},t)}))})},T=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(l.a)(o,2),u=i[0],j=i[1],h=Object(r.useState)(!1),p=Object(l.a)(h,2),d=p[0],f=p[1];return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:d}),s(""),j(""),f(!1)):alert("Please add task name")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task Name"}),Object(b.jsx)("input",{type:"text",placeholder:"Task name",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Date & Time"}),Object(b.jsx)("input",{type:"text",placeholder:"Date & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set reminder"}),Object(b.jsx)("input",{type:"checkbox",value:d,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(b.jsx)("div",{className:"form-control",children:Object(b.jsx)("input",{type:"submit",value:"Save task",className:"btn btn-block"})})]})},w=function(e){var t=e.onSearch,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=function(){s("")};return Object(b.jsx)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),t(a),o()},children:Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("h2",{children:"Search"}),Object(b.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},value:a,placeholder:"Task name"}),Object(b.jsx)("input",{type:"submit",value:"Search",className:"btn",style:{backgroundColor:"royalblue"}})]})})},S=n(2);var C=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(l.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=function(){var e=Object(h.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks/".concat(t),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(j.a.mark((function e(t){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,c([].concat(Object(i.a)(n),[a]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks/".concat(t),{method:"DELETE"});case 2:c(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(j.a.mark((function e(t){var r,a,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return r=e.sent,a=Object(o.a)(Object(o.a)({},r),{},{reminder:!r.reminder}),e.next=6,fetch("https://vuhaovn-tasks.herokuapp.com/tasks/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:return s=e.sent,e.next=9,s.json();case 9:i=e.sent,c(n.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:i.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vuhaovn-tasks.herokuapp.com/tasks?q=".concat(t),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(v.a,{children:Object(b.jsx)(S.c,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(v.c,{exact:!0,to:"https://vuhaovn.github.io/react-training-app/",activeClassName:"active",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(v.c,{exact:!0,to:"https://vuhaovn.github.io/react-training-app/about",activeClassName:"active",children:"About"})})]})}),Object(b.jsxs)(S.a,{path:"https://vuhaovn.github.io/react-training-app/",children:[Object(b.jsx)(x,{onShow:function(){p(!u)},show:u}),u&&Object(b.jsx)(T,{onAdd:k}),Object(b.jsx)(w,{onSearch:N}),n.length>0?Object(b.jsx)(y,{tasks:n,onDelete:g,onToggle:C}):Object(b.jsx)("p",{children:"No task to show"})]}),Object(b.jsx)(S.a,{path:"https://vuhaovn.github.io/react-training-app/about",children:Object(b.jsx)(m,{})}),Object(b.jsx)(O,{})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.9d6f000b.chunk.js.map