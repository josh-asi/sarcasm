(this.webpackJsonpsarcasm=this.webpackJsonpsarcasm||[]).push([[0],{116:function(a,e,t){},117:function(a,e,t){"use strict";t.r(e);t(61);var s=t(0),c=t.n(s),r=t(59),n=t.n(r),m=(t(116),t(36)),_=t(5),o=t.n(_),i=function(){return Math.round(Math.random())},l=function(){var a,e=Object(s.useState)(""),t=Object(m.a)(e,2),r=t[0],n=t[1],_=Object(s.useRef)(null),l=Object(s.useState)(!1),u=Object(m.a)(l,2),d=u[0],p=u[1];return c.a.createElement("main",{className:o.a.sarcasm},c.a.createElement("div",{className:o.a.sarcasm__container},c.a.createElement("h1",{className:o.a.sarcasm__header},"SaRCasM"),c.a.createElement("p",{className:o.a.sarcasm__description},"This converts your text input to have a random alternating case to mimic sarcastic text. Type in the textarea below and see some magic.",c.a.createElement("br",null),"(Please note that the design of this webpage is intenionally bad. Yes, I did spell that wrong)"),c.a.createElement("div",{className:o.a.sarcasm__textfield},c.a.createElement("div",{className:o.a.sarcasm__actions},c.a.createElement("button",{className:o.a.sarcasm__button,onClick:function(){n("")}},"Clear Text"),c.a.createElement("button",{className:o.a.sarcasm__button,onClick:function(){d||(_.current.select(),document.execCommand("copy"),p(!0),a=setTimeout((function(){p(!1),clearTimeout(a)}),1500))}},d?"Copied":"Copy Text")),c.a.createElement("textarea",{ref:_,type:"text",className:o.a.sarcasm__textarea,value:r,onChange:function(a){var e,t=a.target.value;if(t.length===r.length-1)n(r.slice(0,-1));else{var s=(e=t.slice(-1),i()?e.toUpperCase():e.toLowerCase());n(r+s)}}}))))};n.a.render(c.a.createElement(l,null),document.getElementById("root"))},5:function(a,e,t){a.exports={sarcasm:"sarcasm_sarcasm__3HGU_",sarcasm__container:"sarcasm_sarcasm__container__3qBzd",sarcasm__header:"sarcasm_sarcasm__header__MBIAd",sarcasm__description:"sarcasm_sarcasm__description__1jKtR",sarcasm__textfield:"sarcasm_sarcasm__textfield__pHttP",sarcasm__actions:"sarcasm_sarcasm__actions__3uNSj",sarcasm__button:"sarcasm_sarcasm__button__2nRdH",sarcasm__textarea:"sarcasm_sarcasm__textarea__10lbE"}},60:function(a,e,t){a.exports=t(117)}},[[60,1,2]]]);
//# sourceMappingURL=main.16af6e1d.chunk.js.map