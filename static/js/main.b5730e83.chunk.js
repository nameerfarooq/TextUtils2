(this["webpackJsonptextutils-875aad53d71b03b0f77168821fb915a84f1bb926"]=this["webpackJsonptextutils-875aad53d71b03b0f77168821fb915a84f1bb926"]||[]).push([[0],{14:function(e,t,o){},23:function(e,t,o){},30:function(e,t,o){},31:function(e,t,o){},32:function(e,t,o){"use strict";o.r(t);var a=o(1),c=o.n(a),l=o(16),s=o.n(l),n=(o(23),o(10)),r=(o(14),o(8)),i=o(0);function d(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode.theme," bg-").concat(e.mode.theme," "),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/text",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link","aria-current":"page",to:"/about",children:e.a})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/text",children:e.b})})]}),Object(i.jsxs)("form",{className:"d-flex flex-wrap",children:[Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{onClick:e.togglerLight,className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio4",value:"option4"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio4",children:"Lightmode"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{onClick:e.togglerRed,className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"option1"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio1",children:"Redmode"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{onClick:e.togglerBlue,className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"option2"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"Bluemode"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{onClick:e.togglerGreen,className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio3",value:"option3"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio3",children:"Greenmode"})]})]})]})]})})})}d.defaultProps={title:"enter Title",a:"first tab",b:"second tab",c:"third tab"};o(30),o(31);function h(e){var t=Object(a.useState)(e.a),o=Object(n.a)(t,2),c=o[0],l=o[1],s="";return"white"===e.mode.color?s="":"#003154"===e.mode.color?s="#003154":"#690000"===e.mode.color?s="#690000":"#00350c"===e.mode.color&&(s="#00350c"),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"container my-5",children:Object(i.jsxs)("div",{className:"my-3",children:[Object(i.jsx)("h3",{children:e.heading}),Object(i.jsx)("textarea",{className:"form-control",id:"mytext",rows:"8",value:c,onChange:function(e){l(e.target.value)}}),Object(i.jsx)("button",{disabled:0===c.length,style:{backgroundColor:s,border:"solid 1px white"},className:"btn btn-primary m-2 ",onClick:function(){var t=c.toUpperCase();l(t),e.showAlert("Text formatted to Upper case","success","warning")},children:"UpperCase"}),Object(i.jsx)("button",{disabled:0===c.length,style:{backgroundColor:s,border:"solid 1px white"},className:"btn btn-primary m-2",onClick:function(){var t=c.toLowerCase();l(t),e.showAlert("Text formatted to Lower case","success","danger")},children:"LowerCase"}),Object(i.jsx)("button",{disabled:0===c.length,style:{backgroundColor:s,border:"solid 1px white"},className:"btn btn-primary m-2",onClick:function(){document.getElementById("mytext").select(),document.execCommand("copy"),e.showAlert("Text Copied to Clipboard","success","success")},children:"CopyText"}),Object(i.jsx)("button",{disabled:0===c.length,style:{backgroundColor:s,border:"solid 1px white"},className:"btn btn-primary m-2",onClick:function(){l(""),e.showAlert("Text Cleared","success","warning")},children:"ClearText"}),Object(i.jsx)("button",{disabled:0===c.length,style:{backgroundColor:s,border:"solid 1px white"},className:"btn btn-primary m-2",onClick:function(){var t=c.replace(/  +/g," ");l(t),e.showAlert("extra spaces removed","success","success")},children:"clear Extra space"})]})}),Object(i.jsx)("div",{className:"container outer my-3",children:Object(i.jsxs)("div",{className:"inner1",children:[Object(i.jsx)("h2",{style:{color:"dark"===e.mode.theme?"yellow":"black"},children:"Your Text Summary"}),Object(i.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(i.jsxs)("p",{children:["read time - ",.008*c.split(/\s+/).filter((function(e){return 0!==e.length})).length]}),Object(i.jsx)("h3",{style:{color:"dark"===e.mode.theme?"yellow":"black"},children:"Preview"}),Object(i.jsx)("p",{children:c.length>0?c:"enter some text to preview"})]})})]})}function b(e){var t=e.mode.color;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"accordion",style:{backgroundColor:t,color:"dark"===e.mode.theme?"white":"black",borderColor:"dark"===e.mode.theme?"white":"black"},id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",style:{backgroundColor:t,color:"dark"===e.mode.theme?"white":"black",borderColor:"dark"===e.mode.theme?"white":"black"},children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{style:{backgroundColor:t,color:"dark"===e.mode.theme?"white":"black",borderColor:"dark"===e.mode.theme?"white":"black"},className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:{backgroundColor:t,color:"dark"===e.mode.theme?"white":"black",borderColor:"dark"===e.mode.theme?"white":"black"},children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{style:{backgroundColor:t,color:"dark"===e.mode.theme?"white":"black",borderColor:"dark"===e.mode.theme?"white":"black"},className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:{backgroundColor:t,color:"dark"===e.mode.theme?"white":"black",borderColor:"dark"===e.mode.theme?"white":"black"},children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{style:{backgroundColor:t,color:"dark"===e.mode.theme?"white":"black",borderColor:"dark"===e.mode.theme?"white":"black"},className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})})}function m(e){return e.alert&&Object(i.jsx)("div",{className:"container alertUpper",children:Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.alertColor,' " role="alert  fade show fixed-top alertIMP'),children:[Object(i.jsx)("strong",{children:e.alert.type.charAt(0).toUpperCase()+e.alert.type.slice("1")})," ",e.alert.msg]})})}h.defaultProps={heading:"enter you text",a:"hello world"};var u=o(2);var j=function(){var e=Object(a.useState)({theme:"light",color:"white"}),t=Object(n.a)(e,2),o=t[0],c=t[1],l=Object(a.useState)(null),s=Object(n.a)(l,2),j=s[0],p=s[1],g=function(e,t,o){p({msg:e,type:t,alertColor:o}),setTimeout((function(){p(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(d,{title:"TextUtils",a:"About",b:"Text",c:"FollowUs",mode:o,togglerLight:function(){"white"!==o.color&&(c({theme:"light",color:"white"}),document.body.style.backgroundColor="white",document.body.style.color="black",g("Light mode enabled","success","success"))},togglerBlue:function(){"#003154"!==o.color&&(c({theme:"dark",color:"#003154"}),document.body.style.backgroundColor="#003154",document.body.style.color="white",g("Blue mode enabled","success","success"))},togglerRed:function(){"#690000"!==o.color&&(c({theme:"dark",color:"#690000"}),document.body.style.backgroundColor="#690000",document.body.style.color="white",g("Red mode enabled","success","success"))},togglerGreen:function(){"#00350c"!==o.color&&(c({theme:"dark",color:"#00350c"}),document.body.style.backgroundColor="#00350c",document.body.style.color="white",g("Green mode enabled","success","success"))},showAlert:g}),Object(i.jsx)(m,{alert:j}),Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/about",children:Object(i.jsx)(b,{mode:o})}),Object(i.jsx)(u.a,{exact:!0,path:"/text",children:Object(i.jsx)(h,{heading:"enter your text to analyze",a:"",mode:o,showAlert:g})})]})]})})},p=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,33)).then((function(t){var o=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;o(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),p()}},[[32,1,2]]]);
//# sourceMappingURL=main.b5730e83.chunk.js.map