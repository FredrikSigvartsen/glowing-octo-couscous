(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{211:function(e,t,n){"use strict";n.r(t);var r,o=n(11),a=n.n(o),c=n(12),i=n.n(c),l=n(18),s=n.n(l),u=n(19),p=n.n(u),m=n(64),h=n.n(m),v=n(20),E=n.n(v),S=n(31),g=n.n(S),d=n(0),f=n.n(d),D=n(136),b=function(e){var t=e.title,n=e.onIncrement,r=e.onDecrement,o=e.counter;return f.a.createElement("div",null,f.a.createElement("div",null,f.a.createElement("p",null,t),f.a.createElement("div",{className:"has-text-right"},f.a.createElement("button",{type:"button",onClick:n},"+"),f.a.createElement("p",null,o),f.a.createElement("button",{type:"button",onClick:r},"-"))))},C=n(215),I=n.n(C),A=n(235),k=n.n(A),w=function(e){var t=e.title,n=e.onStart,r=e.onStop,o=e.onDrag,a=e.defaultPosition;return f.a.createElement(f.a.Fragment,null,f.a.createElement(k.a,{grid:[25,25],onStart:n,onStop:r,onDrag:o,defaultPosition:a},f.a.createElement("div",null,f.a.createElement("div",{className:I()("box")},f.a.createElement("p",null,t)))))},x=Object(D.b)("shopStore")(r=Object(D.c)(r=function(e){function t(e){var n;return a()(this,t),n=s()(this,p()(t).call(this,e)),g()(h()(n),"onStart",function(){n.setState(function(e){return{activeDrags:e.activeDrags+1}})}),g()(h()(n),"onStop",function(){n.setState(function(e){return{activeDrags:e.activeDrags-1}})}),n.state={activeDrags:0},n}return E()(t,e),i()(t,[{key:"render",value:function(){var e=this;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{id:"drag-and-drop"},this.props.shopStore.cagesActive.map(function(t){return f.a.createElement(w,{key:t.title,className:"box",title:t.title,onStart:e.onStart,onStop:e.onStop})})),f.a.createElement("div",null,f.a.createElement("h1",null,"Place your box"),f.a.createElement("h3",null,f.a.createElement("strong",null,"Box ",this.props.shopStore.compassDirection)),f.a.createElement(b,{title:"Compass",counter:this.props.shopStore.compassDirection,onIncrement:function(){return e.props.shopStore.IncrementCompassDirection()},onDecrement:function(){return e.props.shopStore.DecrementCompassDirection()}}),f.a.createElement("h3",null,f.a.createElement("strong",null,"Bur")),f.a.createElement(b,{title:"Active",counter:this.props.shopStore.cagesActive.length,onIncrement:function(){return e.props.shopStore.AddActiveCage()},onDecrement:function(){return e.props.shopStore.RemoveLastActiveCage()}}),f.a.createElement(b,{title:"Inactive",counter:this.props.shopStore.cagesInactive.length,onIncrement:function(){return e.props.shopStore.AddInactiveCage()},onDecrement:function(){return e.props.shopStore.RemoveLastInactiveCage()}})))}}]),t}(f.a.Component))||r)||r;t.default=x}}]);
//# sourceMappingURL=component---src-pages-shop-positioning-js-0a14be1ebfacec085cd6.js.map