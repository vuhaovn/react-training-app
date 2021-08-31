(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(20),s=n.n(a),o=(n(29),n(14)),u=n(24),i=n(4),l=n.n(i),j=n(9),b=n(8),h=n(2),d=n(0),f=function(e){var t=e.text,n=e.color,r=e.onClick;return Object(d.jsx)("button",{className:"btn",style:{backgroundColor:n},onClick:r,children:t})};f.defaultProps={};var p=f,x=function(e){var t=e.title,n=e.onShow,r=e.show,c=Object(h.e)();return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),"/"===c.pathname&&Object(d.jsx)(p,{color:r?"red":"green",text:r?"Close task":"Add Task",onClick:n})]})};x.defaultProps={title:"Task tracker"};var O=x,m=n(10),v=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)("p",{children:"Copyright \xa9 2021"}),Object(d.jsx)(m.b,{to:"/about",children:"About"})]})},k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Version 1.0"}),Object(d.jsx)(m.b,{to:"/",children:"Go back"})]})},g=n(23),y=function(e){var t=e.task,n=e.deleteTask,r=e.toggleTask;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(g.a,{onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},T=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e,t){return Object(d.jsx)(y,{task:e,deleteTask:n,toggleTask:r},t)}))})},w=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),u=Object(b.a)(o,2),i=u[0],l=u[1],j=Object(r.useState)(!1),h=Object(b.a)(j,2),f=h[0],p=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a||alert("Please add task name"),t({text:a,day:i,reminder:f}),s(""),l(""),p(!1)},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task Name"}),Object(d.jsx)("input",{type:"text",placeholder:"Task name",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Date & Time"}),Object(d.jsx)("input",{type:"text",placeholder:"Date & Time",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Set reminder"}),Object(d.jsx)("input",{type:"checkbox",value:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(d.jsx)("div",{className:"form-control",children:Object(d.jsx)("input",{type:"submit",value:"Save task",className:"btn btn-block"})})]})},S=function(e){var t=e.onSearch,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],s=c[1],o=function(){s("")};return Object(d.jsx)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),t(a),o()},children:Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("h2",{children:"Search"}),Object(d.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},value:a,placeholder:"Task name"}),Object(d.jsx)("input",{type:"submit",value:"Search",className:"btn",style:{backgroundColor:"blue"}})]})})};var C=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(b.a)(a,2),i=s[0],f=s[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4001/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4001/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4001/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,c([].concat(Object(u.a)(n),[a]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4001/tasks/".concat(t),{method:"DELETE"});case 2:c(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(l.a.mark((function e(t){var r,a,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return r=e.sent,a=Object(o.a)(Object(o.a)({},r),{},{reminder:!r.reminder}),e.next=6,fetch("http://localhost:4001/tasks/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:return s=e.sent,e.next=9,s.json();case 9:u=e.sent,c(n.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:u.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4001/tasks?q=".concat(t),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(m.a,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{onShow:function(){f(!i)},show:i}),Object(d.jsx)(h.a,{path:"/about",component:k}),Object(d.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(d.jsxs)(d.Fragment,{children:[i&&Object(d.jsx)(w,{onAdd:g}),Object(d.jsx)(S,{onSearch:N}),n.length>0?Object(d.jsx)(T,{tasks:n,onDelete:y,onToggle:C}):Object(d.jsx)("p",{children:"No task to show"})]})}}),Object(d.jsx)(v,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.fd59007b.chunk.js.map