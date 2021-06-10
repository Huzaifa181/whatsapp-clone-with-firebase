(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(30),i=c.n(n),r=(c(83),c(19)),o=c(34),j=c(11),d=(c.p,c(84),c(37)),l=d.a.initializeApp({apiKey:"AIzaSyBsQ-co6SdfcxWkZAIB24wYWoBFk3z2Luo",authDomain:"chatapp-ff5a3.firebaseapp.com",databaseURL:"https://chatapp-ff5a3.firebaseio.com",projectId:"chatapp-ff5a3",storageBucket:"chatapp-ff5a3.appspot.com",messagingSenderId:"427653757536",appId:"1:427653757536:web:946d9e0a02d61b6c06e105",measurementId:"G-52HJM487JG"}),b=l.firestore(),h=l.auth(),u=new d.a.auth.GoogleAuthProvider,m=b,O=c(45),p=c.n(O),x=c(47),f=c.n(x),v=c(46),g=c.n(v),_=c(51),N=c.n(_),S=c(135),y=c(133),w=(c(90),c(4)),C=function(e){var t,c=e.addNewChat,s=e.id,n=e.name,i=Object(a.useState)([]),j=Object(r.a)(i,2),d=j[0],l=j[1];Object(a.useEffect)((function(){s&&m.collection("rooms").doc(s).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){l(e.docs.map((function(e){return e.data()})))}))}),[s]);return c?Object(w.jsx)("div",{onClick:function(){var e=prompt("Please enter name for chat");e&&m.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(w.jsx)("h2",{children:"Add New Chat"})}):Object(w.jsx)(o.b,{to:"/rooms/".concat(s),children:Object(w.jsxs)("div",{className:"sidebarChat",children:[Object(w.jsx)(S.a,{}),Object(w.jsxs)("div",{className:"sidebarChat__info",children:[Object(w.jsx)("h2",{children:n}),Object(w.jsx)("p",{children:null===(t=d[0])||void 0===t?void 0:t.message})]})]})})},k=(c(96),Object(a.createContext)()),I=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(w.jsx)(k.Provider,{value:Object(a.useReducer)(t,c),children:s})},A=function(){return Object(a.useContext)(k)},B=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=A(),i=Object(r.a)(n,2),o=i[0].user;i[1];return Object(a.useEffect)((function(){var e=m.collection("rooms").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(w.jsxs)("div",{className:"sidebar",children:[Object(w.jsxs)("div",{className:"sidebar__header",children:[Object(w.jsx)(S.a,{src:null===o||void 0===o?void 0:o.photoURL}),Object(w.jsxs)("div",{className:"sidebar__headerRight",children:[Object(w.jsx)(y.a,{children:Object(w.jsx)(p.a,{})}),Object(w.jsx)(y.a,{children:Object(w.jsx)(g.a,{})}),Object(w.jsx)(y.a,{children:Object(w.jsx)(f.a,{})})]})]}),Object(w.jsx)("div",{className:"sidebar__search",children:Object(w.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(w.jsx)(N.a,{}),Object(w.jsx)("input",{placeholder:"Search or Start Now chat",type:"text"})]})}),Object(w.jsxs)("div",{className:"sidebar__chats",children:[Object(w.jsx)(C,{addNewChat:!0}),c.map((function(e){return Object(w.jsx)(C,{id:e.id,name:e.data.name},e.id)}))]})]})},R=c(55),D=c.n(R),E=c(70),U=c(73),L=c.n(U),T=c(72),W=c.n(T),G=(c(99),c(71)),J=(c.n(G).a.create({baseURL:"http://localhost:9000"}),function(){var e,t,c=A(),s=Object(r.a)(c,2),n=s[0].user,i=(s[1],Object(j.f)().roomId),o=Object(a.useState)(""),l=Object(r.a)(o,2),b=l[0],h=l[1],u=Object(a.useState)(""),O=Object(r.a)(u,2),x=O[0],v=O[1],_=Object(a.useState)([]),N=Object(r.a)(_,2),C=N[0],k=N[1],I=function(){var e=Object(E.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),m.collection("rooms").doc(i).collection("messages").add({message:b,name:n.displayName,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),h("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i&&(m.collection("rooms").doc(i).onSnapshot((function(e){v(e.data().name)})),m.collection("rooms").doc(i).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){k(e.docs.map((function(e){return e.data()})))})))}),[i]),Object(w.jsxs)("div",{className:"chat",children:[Object(w.jsxs)("div",{className:"chat__header",children:[Object(w.jsx)(S.a,{}),Object(w.jsxs)("div",{className:"chat__headerInfo",children:[Object(w.jsx)("h3",{children:x}),Object(w.jsxs)("p",{children:["Last Seen At",new Date(null===(e=C[C.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(w.jsxs)("div",{className:"chat__headerRight",children:[Object(w.jsx)(y.a,{children:Object(w.jsx)(p.a,{})}),Object(w.jsx)(y.a,{children:Object(w.jsx)(g.a,{})}),Object(w.jsx)(y.a,{children:Object(w.jsx)(f.a,{})})]})]}),Object(w.jsx)("div",{className:"chat__body",children:C.map((function(e){var t;return Object(w.jsxs)("p",{className:"chat__message ".concat(e.name==n.displayName&&"chat__receiver"),children:[Object(w.jsx)("span",{className:"chat__name",children:e.name}),e.message,Object(w.jsx)("span",{className:"chat__timestamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(w.jsxs)("div",{className:"chat__footer",children:[Object(w.jsx)(W.a,{style:{color:"gray"}}),Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{value:b,onChange:function(e){return h(e.target.value)},placeholder:"Type a message",type:"text"}),Object(w.jsx)("button",{onClick:function(e){return I(e)},type:"submit",children:"Send a message"})]}),Object(w.jsx)(L.a,{style:{color:"gray"}})]})]})}),P=c(74),z=(c(117),c(134)),F=c(56),M="SET_USER",H=function(e,t){switch(t.type){case M:return Object(F.a)(Object(F.a)({},e),{},{user:t.user});default:return e}},K=function(){var e=A(),t=Object(r.a)(e,2);Object(P.a)(t[0]);var c=t[1];return Object(w.jsx)("div",{className:"login",children:Object(w.jsxs)("div",{className:"login__container",children:[Object(w.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:"whatsapp logo"}),Object(w.jsx)("div",{className:"login__text",children:Object(w.jsx)("h1",{children:"Signin to Whatsapp"})}),Object(w.jsx)(z.a,{onClick:function(){console.log("ju"),h.signInWithPopup(u).then((function(e){c({type:M,user:e.user}),console.log(e)})).catch((function(e){alert(e.message)}))},children:"Signin with Google"})]})})};c(118);var Q=function(){var e=A(),t=Object(r.a)(e,2),c=t[0].user;return t[1],console.log(A),Object(w.jsx)("div",{className:"app",children:c?Object(w.jsx)("div",{className:"app__body",children:Object(w.jsx)(o.a,{children:Object(w.jsxs)(j.c,{children:[Object(w.jsxs)(j.a,{path:"/rooms/:roomId",children:[Object(w.jsx)(B,{}),Object(w.jsx)(J,{})]}),Object(w.jsx)(j.a,{path:"/",children:Object(w.jsx)(B,{})})]})})}):Object(w.jsx)(K,{})})};i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(I,{initialState:{user:null},reducer:H,children:Object(w.jsx)(Q,{})})}),document.getElementById("root"))},83:function(e,t,c){},90:function(e,t,c){},96:function(e,t,c){},99:function(e,t,c){}},[[119,1,2]]]);
//# sourceMappingURL=main.923800ef.chunk.js.map