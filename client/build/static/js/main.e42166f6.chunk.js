(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/wordcloud_man.2b344a1a.png"},106:function(e,t,a){e.exports=a.p+"static/media/no-back.a284d700.png"},109:function(e,t,a){e.exports=a(213)},114:function(e,t,a){},115:function(e,t,a){},121:function(e,t){},123:function(e,t){},158:function(e,t){},159:function(e,t){},205:function(e,t,a){},206:function(e,t,a){},208:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(38),o=a.n(r),c=(a(114),a(115),a(20)),l=(a(116),a(19)),i=(a(205),a(104)),u=a.n(i),m=(a(206),a(6)),p=function(e){var t=e.bulbNum,a=e.route,n=e.text;return s.a.createElement("div",{className:"bulb-link"},s.a.createElement("svg",{className:"bulb ".concat(t),id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 119.51 386.54"},s.a.createElement("title",null,"Lightbulb"),s.a.createElement("path",{className:"cls-1",d:"M80.26,270.52H38.85a57.6,57.6,0,1,0,41.41,0Z"}),s.a.createElement("path",{className:"cls-1",d:"M35.77,268.52H83.33a3.56,3.56,0,1,0,0-7.12H35.77a3.56,3.56,0,0,0,0,7.13Z"}),s.a.createElement("path",{className:"cls-1",d:"M35.77,259.94H83.33a3.56,3.56,0,1,0,0-7.12H35.77a3.56,3.56,0,0,0,0,7.13Z"}),s.a.createElement("path",{className:"cls-1",d:"M35.77,251.35H83.33a3.56,3.56,0,1,0,0-7.12H35.77a3.56,3.56,0,0,0,0,7.13Z"}),s.a.createElement("path",{className:"cls-1",d:"M44,242.77H75.12a3.56,3.56,0,0,0,0-7.12H72.21c-.93-2.91-6.6-5.18-9.62-5.19L65.49,0l-3,0-2.9,230.46h-.06L56.62,0l-3,0,2.9,230.42c-3,0-8.69,2.27-9.62,5.19H44a3.56,3.56,0,1,0,0,7.13Z"})),s.a.createElement(m.b,{to:"".concat(a)},s.a.createElement("div",{className:"bulb-div ".concat(n)},s.a.createElement("p",null,n))))},d=function(e){return{type:"SET_USER",user:e}},h=function(e){return{type:"LOADING",loading:e}},g=function(e){return{type:"ERROR",msg:e}},f=Object(l.b)(null,function(e){return{setUser:function(t){return e(d(t))}}})(function(){return s.a.createElement("div",{className:"landing-page"},s.a.createElement("section",{className:"hero-section"},s.a.createElement("header",{className:"landing-header"},s.a.createElement("h1",{className:"main-title"},"do you."),s.a.createElement("h3",{className:"main-tagline"},"let your Personality shine.")),s.a.createElement("article",{className:"mission-article"},s.a.createElement("div",{className:"wordcloud-container"},s.a.createElement("img",{className:"wordcloud-man",src:u.a,alt:"wordcloud man"})),s.a.createElement("div",{className:"mission-statement"},s.a.createElement("h6",{className:"purpose"},"Recognizing and understanding your personality type can change the way you see yourself - which in turns affects everything you do and every aspect of your life. Please take any of our personality assessments to help you unlock your potential, find your passion, and DO YOU!")))),s.a.createElement("section",{className:"lightbulb-section"},s.a.createElement(p,{bulbNum:"bulb-one",text:"sign up",route:"/signup"}),s.a.createElement(p,{bulbNum:"bulb-two",text:"personalities",route:"/personality-types"}),s.a.createElement(p,{bulbNum:"bulb-three",text:"login",route:"/login"}),s.a.createElement(p,{bulbNum:"bulb-four",text:"assessments",route:"/assessments"})))}),b=(a(208),a(106)),E=a.n(b),v=function(e){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"header-text"},s.a.createElement(m.b,{to:"/",className:"home-page",onClick:function(e){}},s.a.createElement("h1",{className:"app-title"},"do you.")),s.a.createElement("h3",{className:"app-tagline"},"let your Personality shine.")),s.a.createElement("div",{className:"lightbulb-container"},s.a.createElement("img",{className:"lightbulbs",src:E.a,alt:"hanging lightbulb logo"})))},w=a(40),N=a(41),y=a(42),O=a(45),S=a(43),x=a(46),j=a(25),k=a.n(j),C=a(44),P=(a(210),function(e){function t(){var e;return Object(N.a)(this,t),(e=Object(O.a)(this,Object(S.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(w.a)({},n,s))},e.signInUser=function(t){var a=e.state,n=a.email,s=a.password;t.preventDefault(),e.props.fetchUserFromDB(n,s)},e.state={email:"",password:"",loggedIn:!1},e}return Object(x.a)(t,e),Object(y.a)(t,[{key:"updateLocalStorage",value:function(e){localStorage.setItem("user",JSON.stringify(e))}},{key:"componentWillReceiveProps",value:function(e){null!==e.user&&(this.setState({loggedIn:!0}),this.updateLocalStorage(e.user))}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return e.loggedIn?s.a.createElement(c.a,{to:"/controls"}):s.a.createElement("div",{className:"login-container"},s.a.createElement("div",{className:"input-container"},s.a.createElement("form",{onSubmit:this.signInUser},s.a.createElement("h2",{className:"login-text"},"Login To Your Account"),s.a.createElement("input",{className:"email-input",name:"email",placeholder:"email address",autoFocus:!0,value:t,onChange:this.handleChange}),s.a.createElement("input",{className:"password-input",placeholder:"password",name:"password",type:"password",value:a,onChange:this.handleChange}),s.a.createElement("input",{className:"sign-in-btn",type:"submit",name:"submit",value:"Log in",disabled:!t||!a}),s.a.createElement("h2",{className:"sign-up-text"},"Don't Have An Account?",s.a.createElement(m.b,{className:"signup-link",to:"/signup"},"Sign Up!")))))}}]),t}(n.Component)),R=Object(l.b)(null,function(e){return{fetchUserFromDB:function(t,a){return e(function(e,t){return function(){var a=Object(C.a)(k.a.mark(function a(n){var s,r;return k.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(h(!0)),a.next=3,fetch("".concat("","/api/v1/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});case 3:return(s=a.sent).ok||n(g(s.statusText)),a.next=7,s.json();case 7:r=a.sent,console.log(r),n(h(!1)),n(d(r));case 11:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(t,a))}}})(P),T=(a(211),function(e){function t(){var e;return Object(N.a)(this,t),(e=Object(O.a)(this,Object(S.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(w.a)({},n,s))},e.resetForm=function(){e.setState({name:"",email:"",password:"",confirmPassword:""})},e.handleSubmit=function(t){var a=e.state,n=a.name,s=a.email,r=a.password;t.preventDefault(),e.validatePassword()?(e.props.addUserToDB(n,s,r),e.resetForm()):e.setState({instruction:"Something went wrong... Please verify that you have entered the correct password",password:"",confirmPassword:""})},e.state={name:"",email:"",password:"",confirmPassword:"",loggedIn:!1,instruction:""},e}return Object(x.a)(t,e),Object(y.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.user!=={}&&this.setState({loggedIn:!0})}},{key:"validatePassword",value:function(){var e=this.state;return e.password===e.confirmPassword}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password,r=e.confirmPassword,o=e.loggedIn,l=e.instruction;return o?s.a.createElement(c.a,{to:"/controls"}):s.a.createElement("section",{className:"container"},s.a.createElement("div",{className:"signup-container"},s.a.createElement("form",{className:"create-user-form",onSubmit:this.handleSubmit},s.a.createElement("h3",{className:"create-account-heading"},"Create New Account"),s.a.createElement("input",{className:"newuser-name",type:"text",name:"name",placeholder:"name",autoFocus:!0,value:t,onChange:this.handleChange}),s.a.createElement("input",{className:"newuser-email",type:"email",name:"email",placeholder:"email",value:a,onChange:this.handleChange}),s.a.createElement("input",{className:"newuser-password",type:"password",name:"password",placeholder:"password",value:n,onChange:this.handleChange}),s.a.createElement("input",{className:"newuser-password confirm-password",type:"password",name:"confirmPassword",placeholder:"confirm password",value:r,onChange:this.handleChange}),s.a.createElement("p",null,l),s.a.createElement("button",{className:"signup-btn",type:"submit",disabled:!t||!a||!n||!r},"Sign Up"))))}}]),t}(n.Component)),U=Object(l.b)(null,function(e){return{addUserToDB:function(t,a,n){return e(function(e,t,a){return function(){var n=Object(C.a)(k.a.mark(function n(s){var r,o;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s(h(!0)),n.next=3,fetch("".concat("","/api/v1/users/new"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:a})});case 3:return(r=n.sent).ok||s(g(r.statusText)),n.next=7,r.json();case 7:o=n.sent,s(h(!1)),s(d(o));case 10:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}(t,a,n))}}})(T),I=(a(212),function(e){var t=e.user,a=t?"".concat(t.name.toUpperCase()):"user";return s.a.createElement("div",{className:"outer-container"},s.a.createElement("div",{className:"controls-container"},s.a.createElement("div",{className:"welcome-container"},s.a.createElement("h2",{className:"welcome-msg"},"Welcome, ",a,"!"),s.a.createElement(m.b,{className:"sign-out-link",to:"/"},s.a.createElement("button",{className:"sign-out-btn",onClick:function(){}},"Sign Out"))),s.a.createElement("div",{className:"controls-links"},s.a.createElement(m.b,{to:"/profile",className:"profile-page"},"my profile."),s.a.createElement(m.b,{to:"/personality-types",className:"personality-types-page"},"personalities."),s.a.createElement(m.b,{to:"/assessments",className:"assessments-page"},"assessments."))))}),D=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(c.d,null,s.a.createElement(c.b,{exact:!0,path:"/",component:f}),s.a.createElement(c.b,{path:"/",component:v})),s.a.createElement(c.b,{exact:!0,path:"/login",component:R}),s.a.createElement(c.b,{exact:!0,path:"/signup",component:U}),s.a.createElement(c.b,{exact:!0,path:"/controls",component:I}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(18),L=a(107),A=a(108),M=Object(H.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.user[0];case"REMOVE_USER":return{};default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return t.loading;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return t.msg;default:return e}},assessments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ASSESSMENTS":return t.assessments;default:return e}}}),B=Object(H.createStore)(M,Object(L.composeWithDevTools)(Object(H.applyMiddleware)(A.a)));o.a.render(s.a.createElement(l.a,{store:B},s.a.createElement(m.a,null,s.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,1,2]]]);
//# sourceMappingURL=main.e42166f6.chunk.js.map