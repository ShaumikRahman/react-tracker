(this.webpackJsonptracker=this.webpackJsonptracker||[]).push([[0],{14:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),n=r(6),l=r.n(n),s=r(8),o=r(4),i=r(0),d=function(){return Object(i.jsx)("h1",{className:"App__Title",children:"Tracker"})},u=r(7),p=function(e){var t=e.task,r=e.handleDelete;return Object(i.jsx)(u.a,{className:"Task__Delete",onClick:function(e){r(t.id),e.stopPropagation()}})},j=function(e){var t=e.task;return t.completed?Object(i.jsx)("p",{className:"Task__Text complete",children:t.title}):Object(i.jsx)("p",{className:"Task__Text",children:t.title})},m=function(e){var t=e.task,r=e.handleDelete,c=e.toggleComplete;t.completed;return Object(i.jsxs)("div",{className:"Task",onClick:function(){c(t.id,t.completed)},children:[Object(i.jsx)(j,{task:t}),Object(i.jsx)(p,{task:t,handleDelete:r})]})},b=function(e){var t=e.tasks,r=e.handleDelete,c=e.toggleComplete;return Object(i.jsx)("div",{className:"App__Tasks",children:t.map((function(e){return Object(i.jsx)(m,{task:e,handleDelete:r,toggleComplete:c},e.id)}))})},f=function(e){var t=e.addTask,r=Object(c.useState)(""),a=Object(o.a)(r,2),n=a[0],l=a[1];return Object(i.jsxs)("form",{className:"App__Add",onSubmit:function(e){e.preventDefault(),n.trim().length&&(t(n),l(""))},children:[Object(i.jsx)("div",{className:"form-control inputDiv",children:Object(i.jsx)("input",{className:"input",name:"text",type:"text",placeholder:"Add Task",value:n,autoComplete:"off",onChange:function(e){l(e.target.value)}})}),Object(i.jsx)("input",{className:"submit",type:"submit",name:"Submit",value:">"})]})};var h=function(){var e=Object(c.useState)([{id:1,title:"Take the trash out",completed:!1},{id:2,title:"Clean",completed:!1},{id:3,title:"Fix fridge",completed:!1},{id:4,title:"Eat dinnerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",completed:!0},{id:5,title:"Move boxes",completed:!1}]),t=Object(o.a)(e,2),r=t[0],a=t[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{}),Object(i.jsx)(f,{addTask:function(e){a([].concat(Object(s.a)(r),[{id:Math.floor(1e4*Math.random()),title:"".concat(e),completed:!1}]))}}),Object(i.jsx)(b,{tasks:r,toggleComplete:function(e,t){console.log("toggled status of task ".concat(e," from ").concat(t," to ").concat(!t)),a(r.map((function(t){return t.id===e?(t.completed=!t.completed,t):t})))},handleDelete:function(e){console.log("deleted task with id ".concat(e)),a(r.filter((function(t){return t.id!==e})))}})]})};l.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1ac4ccdf.chunk.js.map