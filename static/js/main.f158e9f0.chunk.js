(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{23:function(n,e,t){n.exports=t(46)},29:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(18),o=t.n(c),i=t(4),u=t(1),l=t(2);function s(){var n=Object(u.a)(["\nfont-size: 21px;\ntex-align: center;\nmargin-bottom: 50px;\n"]);return s=function(){return n},n}function b(){var n=Object(u.a)(["\n    font-size: 32px;\n    text-align:center;\n    margin-bottom: 20px;\n"]);return b=function(){return n},n}function f(){var n=Object(u.a)(["\nborder: 0;\nbackground-color: rgba(0,0,0, 0.7);\ncolor: white;\nmargin-bottom: 20px;\npadding: 15px;\ncursor: pointer;\n"]);return f=function(){return n},n}function d(){var n=Object(u.a)(["\ndisplay:flex;\nflex-direction: column;\nwidth: 100%;\n"]);return d=function(){return n},n}function p(){var n=Object(u.a)(["\nmax-width: 1100px;\nheight: 500px;\ndisplay: flex;\nalign-items: center;\nflex-direction: column;\nbackground-color:rgba(255,255,255, 0.5);\npadding: 20px 15px;\nborder: 2px solid rgb(64,199,129)\n"]);return p=function(){return n},n}var m=l.b.div(p()),g=l.b.div(d()),x=l.b.button(f()),j=l.b.div(b()),O=l.b.div(s()),v=function(n){var e=n.question,t=n.totalQuestions,r=n.currentQuestion,c=n.handleResponse,o=n.score,i=n.answers,u=n.disabled;return a.a.createElement(m,null,a.a.createElement("h1",null," SCORE: ",o),a.a.createElement(j,null,e),a.a.createElement(O,null,r," / ",t),a.a.createElement(g,null,i&&i.map((function(n,e){return a.a.createElement(x,{key:e+n,disabled:u||null,value:i[e],onClick:c},a.a.createElement("span",null," ",n))}))))};function h(){var n=Object(u.a)(["\n        background-color:rgba(255, 0,0, 0.5);\n    "]);return h=function(){return n},n}function E(){var n=Object(u.a)(["\nmax-width: 250px;\npadding: 20px;\ncolor: #fff;\nbackground-color:rgba(0, 255, 0, 0.5);\nposition: absolute;\ntop: 0;\nright: 0;\nfont-size: 32px;\ntransition: 1s all ease;\nanimation: .5s "," ease-out;\n","\n"]);return E=function(){return n},n}function w(){var n=Object(u.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;}\n"]);return w=function(){return n},n}var k=Object(l.c)(w()),y=l.b.div(E(),k,(function(n){return!1===n.result&&Object(l.a)(h())})),S=function(n){var e=n.result;return a.a.createElement("div",null,a.a.createElement(y,{result:e},e?"\u0412\u0435\u0440\u043d\u043e":"\u041d\u0435\u0432\u0435\u0440\u043d\u043e"))};function q(){var n=Object(u.a)(["\nmargin-top: 20px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\nwidth: 600px;\nheight: 300px;\ncolor: #fff;\nbackground-color: rgba(0,0,0, 0.5);\nborder: 1px solid rgba(0, 255, 0, 0.5);\nfont-size: 32px;\ntransition: 1s all ease;\n"]);return q=function(){return n},n}var z=l.b.div(q());function Q(){var n=Object(u.a)(["\n    text-align: center;\n    margin: 0;\n    color:#fff;\n    font-size: 60px;\n"]);return Q=function(){return n},n}function C(){var n=Object(u.a)(["\n        margin: 10px 0px;\n        "]);return C=function(){return n},n}function R(){var n=Object(u.a)(["\n    cursor: pointer;\n    padding: 5px 20px;\n    font-weight: 700;\n    color: white;\n    text-decoration: none;\n    padding: .8em 1em calc(.8em + 3px);\n    border-radius: 3px;\n    background: rgb(64,199,129);\n    box-shadow: 0 -3px rgb(53,167,110) inset;\n    transition: 0.2s;\n    border: none;\n    padding: 15px 0px;\n    width: 150px;\n    ",";\n\n"]);return R=function(){return n},n}function J(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    background: url('https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') center center/cover no-repeat;\n    height: 100vh;\n    "]);return J=function(){return n},n}var T=l.b.div(J()),_=l.b.button(R(),(function(n){return n.margin&&Object(l.a)(C())})),A=l.b.h1(Q()),B=function(n){var e=n.score,t=n.handleTryAgain;return a.a.createElement(z,{className:"final-score"},a.a.createElement(A,null,"\u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430: ".concat(e," \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432")),a.a.createElement(_,{onClick:t,margin:!0},"\u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430"))},M=(t(29),t(22)),N=t.n(M);var D=function(){var n=Object(r.useState)([]),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),l=u[0],s=u[1],b=Object(r.useState)(0),f=Object(i.a)(b,2),d=f[0],p=f[1],m=Object(r.useState)([]),g=Object(i.a)(m,2),x=g[0],j=g[1],O=Object(r.useState)(""),h=Object(i.a)(O,2),E=h[0],w=h[1],k=Object(r.useState)(!1),y=Object(i.a)(k,2),q=y[0],z=y[1],Q=Object(r.useState)(0),C=Object(i.a)(Q,2),R=C[0],J=C[1],M=Object(r.useState)(null),D=Object(i.a)(M,2),H=D[0],I=D[1],L=Object(r.useState)(!1),W=Object(i.a)(L,2),F=W[0],G=W[1],K=Object(r.useState)(!1),P=Object(i.a)(K,2),U=P[0],V=P[1],X=Object(r.useState)(!1),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1];return a.a.createElement(T,null,Z&&a.a.createElement(S,{result:H}),a.a.createElement(A,null,"React-quiz"),U?a.a.createElement(B,{handleTryAgain:function(){p(0),J(0),V(!1)},score:R}):null,F||U?null:a.a.createElement(_,{margin:!0,onClick:function(n){s(!0),N.a.get("https://opentdb.com/api.php?amount=".concat(10)).then((function(n){var e=n.data;c(e.results.map((function(n){return n.question}))),s(!1),G(!0),w(e.results.map((function(n){return n.correct_answer})));var t=e.results.map((function(n){return n.incorrect_answers.concat(n.correct_answer)}));j(t.map((function(n){return n.sort((function(){return Math.random()-.5}))})))}))}},"start"),a.a.createElement("div",null,l&&a.a.createElement("p",null,"Loading Questions..."),F?a.a.createElement(v,{disabled:q,answers:0!==x.length?x[d]:null,score:R,handleResponse:function(n){var e=n.currentTarget.value;E[d]===e?(J(R+1),z(!0),$(!0),I(!0)):(I(!1),z(!0),$(!0))},question:t[d],totalQuestions:10,currentQuestion:d+1}):null),F&&a.a.createElement(_,{margin:!0,onClick:function(n){d+1!==10?(p(d+1),z(!1),$(!1)):(V(!0),G(!1))}},"Next question"))};o.a.render(a.a.createElement(D,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f158e9f0.chunk.js.map