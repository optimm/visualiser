(this.webpackJsonpreact_project=this.webpackJsonpreact_project||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var r=c(1),l=c.n(r),a=c(5),n=c.n(a),o=c(6),s=c(7),i=c(8),d=function(e,t){console.log(e);var c=1,r=0,l=setInterval((function(){document.querySelector(".random").addEventListener("click",(function(){clearInterval(l)}));for(var t=document.querySelectorAll(".bar"),a=0;a<c;a++)t[a].classList.add("yellow");if(r>=0&&e[r].value>e[r+1].value){document.querySelector(".current")&&document.querySelector(".current").classList.remove("current"),document.querySelectorAll(".active").forEach((function(e){e.classList.remove("active")}));var n=document.querySelector("#id".concat(e[r].id)),o=document.querySelector("#id".concat(e[r+1].id));o.classList.add("active");var s=[o.style.transform,n.style.transform];n.style.transform=s[0],o.style.transform=s[1];var i=[e[r+1],e[r]];e[r]=i[0],e[r+1]=i[1],r--}else if(c>=e.length-1){for(var d=0;d<=c;d++)t[d].classList.add("yellow");clearInterval(l),document.querySelectorAll(".active").forEach((function(e){e.classList.remove("active")}))}else c++,r=c-1,document.querySelector(".current")&&document.querySelector(".current").classList.remove("current"),document.querySelector(".container").children[c].classList.add("current")}),t)},u=function(e,t){var c=0,r=1,l=0,a=setInterval((function(){(document.querySelector(".random").addEventListener("click",(function(){clearInterval(a)})),document.querySelectorAll(".green").forEach((function(e){e.classList.remove("green")})),document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),r<15)&&document.querySelector("#id".concat(e[r].id)).classList.add("active");if(document.querySelector(".purple")&&document.querySelector(".purple").classList.remove("purple"),document.querySelector("#id".concat(e[l].id)).classList.add("purple"),r<=14&&e[r].value<e[l].value)l=r,r++;else if(c>=e.length-1)document.querySelector("#id".concat(e[c].id)).classList.add("yellow"),document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),document.querySelector(".purple")&&document.querySelector(".purple").classList.remove("purple"),clearInterval(a);else if(r===e.length){var t=document.querySelector("#id".concat(e[c].id)),n=document.querySelector("#id".concat(e[l].id));n.classList.add("green"),t.classList.add("green");var o=[n.style.transform,t.style.transform];t.style.transform=o[0],n.style.transform=o[1];var s=[e[c],e[l]];e[l]=s[0],e[c]=s[1],document.querySelector("#id".concat(e[c].id)).classList.add("yellow"),c++,r=c+1,l=c}else e[r]>=e[l]&&r++}),t)},m=function(e,t){console.log(e);var c=0,r=0,l=!0,a=setInterval((function(){if(document.querySelector(".random").addEventListener("click",(function(){clearInterval(a)})),l){document.querySelectorAll(".green").forEach((function(e){e.classList.remove("green")}));var t=document.querySelector("#id".concat(e[r].id));document.querySelector("#id".concat(e[r+1].id)).classList.add("green"),t.classList.add("green"),l=!1}else if(r<e.length-c-1){if(e[r].value>e[r+1].value){var n=document.querySelector("#id".concat(e[r].id)),o=document.querySelector("#id".concat(e[r+1].id)),s=[o.style.transform,n.style.transform];n.style.transform=s[0],o.style.transform=s[1];var i=[e[r+1],e[r]];e[r]=i[0],e[r+1]=i[1]}++r!=e.length-c-1&&(l=!0)}else c>=e.length?clearInterval(a):(document.querySelectorAll(".green").forEach((function(e){e.classList.remove("green")})),document.querySelector("#id".concat(e[e.length-c-1].id)).classList.add("yellow"),c++,r=0,l=!0)}),t)},v=c(0),y=function(){return Object(v.jsx)("div",{className:"header",children:Object(v.jsx)("h1",{children:"Sorting Visualizer"})})};var f=function(){var e=Object(r.useState)([{value:19,id:1},{value:22,id:2},{value:29,id:3},{value:25,id:4},{value:27,id:5},{value:30,id:6},{value:23,id:7},{value:21,id:8},{value:31,id:9},{value:28,id:10},{value:21,id:11},{value:25,id:12},{value:19,id:13},{value:22,id:14},{value:23,id:15}]),t=Object(i.a)(e,2),c=t[0],l=t[1];function a(){var e=document.querySelector(".random");e.innerText="Reset",e.style.backgroundColor="black",e.style.color="white"}return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{}),Object(v.jsxs)("div",{className:"handler",children:[Object(v.jsx)("button",{className:"random",onClick:function(){var e=document.querySelector(".random");e.innerText="Randomize",e.style.backgroundColor="aquamarine",e.style.color="black",document.querySelectorAll(".bar").forEach((function(e,t){e.classList.remove("active"),e.classList.remove("current"),e.classList.remove("green"),e.classList.remove("yellow"),e.style.transform="translate(".concat(40*t,"px, ",0,"px)"),e.classList.remove("purple")}));for(var t=Object(s.a)(c),r=0;r<c.length;r++)t[r].value=Math.floor(25*Math.random()+10),t[r].id=r+1;console.log(t),l(t)},children:"Randomize"}),Object(v.jsx)("button",{className:"sort",onClick:function(){var e,t=document.getElementById("speed");e="slow"===t.value?500:"normal"===t.value?200:70,a(),m(c,e)},children:"Bubble"}),Object(v.jsx)("button",{className:"sort",onClick:function(){var e,t=document.getElementById("speed");e="slow"===t.value?600:"normal"===t.value?300:100,a(),u(c,e)},children:"Selection"}),Object(v.jsx)("button",{className:"sort",onClick:function(){var e,t=document.getElementById("speed");e="slow"===t.value?600:"normal"===t.value?300:100,a(),d(c,e)},children:"Insertion"}),Object(v.jsxs)("select",{id:"speed",children:[Object(v.jsx)("option",{className:"space",disabled:!0,children:"\xa0"}),Object(v.jsx)("option",{className:"label speeds",disabled:!0,children:"Speed of visualization"}),Object(v.jsx)("option",{className:"space",disabled:!0,children:"\xa0"}),Object(v.jsx)("option",{value:"fast",className:"speeds",children:"Fast"}),Object(v.jsx)("option",{value:"normal",className:"speeds",selected:!0,children:"Normal"}),Object(v.jsx)("option",{value:"slow",className:"speeds",children:"Slow"})]})]}),Object(v.jsx)("div",{className:"container active current",children:c.map((function(e,t){return Object(v.jsx)("div",{id:"id".concat(t+1),className:"bar",style:Object(o.a)({height:10*e.value,transform:"translate(".concat(40*t,"px, ",0,"px)"),transition:"transform 0.3s ease"},"transition","all 0.3s ease"),children:e.value})}))})]})};n.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d98f7220.chunk.js.map