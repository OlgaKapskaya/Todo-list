(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{53:function(e,t,a){e.exports={containerInput:"Input_containerInput__1Icpn"}},65:function(e,t,a){e.exports=a(75)},70:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),l=a.n(c),o=(a(70),a(45)),r=a(11),u=a(17),s=a(16),d=(a(71),a(127)),m=a(112),b=a(113),f=a(53),j=a.n(f),O=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(null),r=Object(s.a)(o,2),u=(r[0],r[1]),f=Object(n.useState)(!1),O=Object(s.a)(f,2),p=O[0],E=O[1],h=function(){""!==c.trim()?(e.addItem(c.trim()),l("")):(u("Title is required"),E(!0))};return i.a.createElement("div",{className:j.a.containerInput},i.a.createElement(d.a,{value:c,onChange:function(e){l(e.currentTarget.value)},onBlur:function(){return E(!1)},size:"small",label:e.label,variant:"outlined",onKeyPress:function(e){u(null),E(!1),"Enter"===e.key&&(h(),l(""))},error:p,helperText:p&&"Incorrect value!"}),i.a.createElement(m.a,{onClick:h,size:"small",style:{marginLeft:"5px"}},i.a.createElement(b.a,null)))},p=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),r=Object(s.a)(o,2),u=r[0],m=r[1],b=function(){l(!1),f()},f=function(){""!==u&&(e.onChangeText(u),l(!1))};return c?i.a.createElement(d.a,{value:u,onBlur:b,onChange:function(e){m(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&(f(),b())},autoFocus:!0}):i.a.createElement("span",{onDoubleClick:function(){m(e.title),l(!0)}}," ",e.title," ")},E=a(114),h=a(111),v=a(116),g=a(128),k=a(119),D=a(78),T=a(115),y=a(117),I=a(118);function C(e){return i.a.createElement("div",null,i.a.createElement(E.a,{variant:"h5",color:"primary",style:{marginBottom:"10px",fontWeight:"bold"}},i.a.createElement(p,{title:e.title,onChangeText:function(t){e.changeTodolistTitle(t,e.todolistID)}}),i.a.createElement(m.a,{onClick:function(){e.deleteTodolist(e.todolistID)},size:"small"},i.a.createElement(T.a,null))),i.a.createElement("div",null,i.a.createElement(O,{addItem:function(t){e.addTask(t,e.todolistID)},label:"Enter task title"})),i.a.createElement(h.a,null,e.tasks.map((function(t){return i.a.createElement(v.a,{key:t.id,className:t.isDone?"is-done":"",style:{padding:"0px",justifyContent:"space-between",textDecoration:t.isDone?"line-through":"none"}},i.a.createElement(g.a,{checked:t.isDone,onChange:function(a){e.changeTaskStatus(t.id,a.currentTarget.checked,e.todolistID)},color:"primary",size:"small",icon:i.a.createElement(y.a,null),checkedIcon:i.a.createElement(I.a,null),style:{padding:"0px"}}),i.a.createElement(p,{title:t.title,onChangeText:function(a){e.changeTaskTitle(a,e.todolistID,t.id)}}),i.a.createElement(m.a,{onClick:function(){return e.removeTask(t.id,e.todolistID)},size:"small"},i.a.createElement(T.a,null)))}))),i.a.createElement("div",null,i.a.createElement(k.a,{color:"primary",size:"small"},i.a.createElement(D.a,{variant:"all"===e.filter?"contained":"outlined",onClick:function(){return e.changeFilter("all",e.todolistID)}},"All"),i.a.createElement(D.a,{variant:"active"===e.filter?"contained":"outlined",onClick:function(){return e.changeFilter("active",e.todolistID)}},"Active"),i.a.createElement(D.a,{variant:"completed"===e.filter?"contained":"outlined",onClick:function(){return e.changeFilter("completed",e.todolistID)}},"Completed"))))}var S=a(129),x=a(120),w=a(121),z=a(123),B=a(124),J=a(77),L=a(122);var A=function(){var e,t=Object(S.a)(),a=Object(S.a)(),c=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:a,title:"What to buy",filter:"all"}]),l=Object(s.a)(c,2),d=l[0],b=l[1],f=Object(n.useState)((e={},Object(u.a)(e,t,[{id:Object(S.a)(),title:"HTML&CSS",isDone:!0},{id:Object(S.a)(),title:"JS",isDone:!0},{id:Object(S.a)(),title:"ReactJS",isDone:!1},{id:Object(S.a)(),title:"Rest API",isDone:!1},{id:Object(S.a)(),title:"GraphQL",isDone:!1}]),Object(u.a)(e,a,[{id:Object(S.a)(),title:"HTML&CSS2",isDone:!0},{id:Object(S.a)(),title:"JS2",isDone:!0},{id:Object(S.a)(),title:"ReactJS2",isDone:!1},{id:Object(S.a)(),title:"Rest API2",isDone:!1},{id:Object(S.a)(),title:"GraphQL2",isDone:!1}]),e)),j=Object(s.a)(f,2),p=j[0],h=j[1];function v(e,t){var a=p[t].filter((function(t){return t.id!==e}));h(Object(r.a)(Object(r.a)({},p),{},Object(u.a)({},t,a)))}function g(e,t){var a={id:Object(S.a)(),title:e,isDone:!1};h(Object(r.a)(Object(r.a)({},p),{},Object(u.a)({},t,[a].concat(Object(o.a)(p[t])))))}function k(e,t,a){h(Object(r.a)(Object(r.a)({},p),{},Object(u.a)({},a,p[a].map((function(a){return a.id===e?Object(r.a)(Object(r.a)({},a),{},{isDone:t}):a})))))}function T(e,t){b(d.map((function(a){return a.id===t?Object(r.a)(Object(r.a)({},a),{},{filter:e}):a})))}var y=function(e,t){b(d.map((function(a){return a.id===t?Object(r.a)(Object(r.a)({},a),{},{title:e}):a})))},I=function(e,t,a){h(Object(r.a)(Object(r.a)({},p),{},Object(u.a)({},t,p[t].map((function(t){return t.id===a?Object(r.a)(Object(r.a)({},t),{},{title:e}):t})))))},A=function(e){b(d.filter((function(t){return t.id!==e})))};return i.a.createElement("div",{className:"App"},i.a.createElement(x.a,{position:"static"},i.a.createElement(w.a,{style:{justifyContent:"space-between"}},i.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(L.a,null)),i.a.createElement(E.a,{variant:"h6"},"Todolists"),i.a.createElement(D.a,{color:"inherit",variant:"outlined"},"Login"))),i.a.createElement(z.a,null,i.a.createElement(B.a,{container:!0,style:{paddingTop:"10px",paddingBottom:"10px"}}," ",i.a.createElement(O,{addItem:function(e){var t={id:Object(S.a)(),title:e,filter:"all"};b([t].concat(Object(o.a)(d))),h(Object(r.a)(Object(r.a)({},p),{},Object(u.a)({},t.id,[])))},label:"Enter todolist title"})),i.a.createElement(B.a,{container:!0,spacing:2},d.map((function(e){var t=p[e.id];return"active"===e.filter&&(t=p[e.id].filter((function(e){return!e.isDone}))),"completed"===e.filter&&(t=p[e.id].filter((function(e){return e.isDone}))),i.a.createElement(B.a,{item:!0,key:e.id},i.a.createElement(J.a,{style:{width:"230px",padding:"10px"},variant:"outlined"},i.a.createElement(C,{todolistID:e.id,title:e.title,tasks:t,removeTask:v,changeFilter:T,addTask:g,changeTaskStatus:k,filter:e.filter,changeTodolistTitle:y,changeTaskTitle:I,deleteTodolist:A})))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(59),W=a(126),P=a(125),R=a(43),N=Object(F.a)({palette:{primary:P.a,secondary:R.a,type:"dark"}});l.a.render(i.a.createElement(W.a,{theme:N},i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.9774d20c.chunk.js.map