(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(221),c=a(218);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},213:function(e,t,a){var n;e.exports=(n=a(216))&&n.default||n},214:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(82),o=a.n(s);a.d(t,"a",function(){return o.a});a(213),a(13).default.enqueue,r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},216:function(e,t,a){"use strict";a.r(t);var n=a(41),r=a.n(n),i=a(0),c=a.n(i),s=a(16),o=a.n(s),l=a(108),u=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(l.a,r()({location:t,pageResources:a},a.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},217:function(e,t,a){e.exports=a.p+"static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"},218:function(e,t,a){"use strict";var n=a(219),r=a(0),i=a.n(r),c=a(16),s=a.n(c),o=a(224),l=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,s=n.data.site,o=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | ".concat(s.siteMetadata.title),meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},219:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},221:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(11),c=a.n(i),s=a(12),o=a.n(s),l=a(18),u=a.n(l),m=a(19),d=a.n(m),p=a(64),v=a.n(p),g=a(20),b=a.n(g),f=a(31),h=a.n(f),E=a(214),N=a(215),y=a.n(N),k=a(217),w=a.n(k),M=function(e){function t(e){var a;return c()(this,t),a=u()(this,d()(t).call(this,e)),h()(v()(a),"toggleNav",function(){a.setState(function(e){return{isActive:!e.isActive}})}),a.state={isActive:!1,menuLinks:[{title:"Home",link:"/"}],currentPath:a.props.currentPath},a}return b()(t,e),o()(t,[{key:"render",value:function(){var e=this.state,t=e.menuLinks,a=void 0===t?[]:t,n=e.currentPath,i=void 0===n?"/":n,c=e.isActive;return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(E.a,{to:"/",className:"navbar-item"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:w.a,alt:"logo",className:"logo"}))),r.a.createElement("button",{type:"button",tabIndex:0,"aria-label":"menu","aria-expanded":"false",className:y()("navbar-burger","burger","nav-toggle",{"is-active":c}),"data-target":"navbarMenuHeroC",onClick:this.toggleNav},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navbarMenuHeroC",className:y()("navbar-menu",{"is-active":c})},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(A,{menuLinks:a,activeMenuItem:i,setActive:this.toggleActiveMenuItem}),r.a.createElement("div",{className:"navbar-item "},r.a.createElement(E.a,{className:"button is-primary",to:"/shop/positioning"},"Order")))))}}]),t}(r.a.Component),A=function(e){var t=e.menuLinks,a=e.activeMenuItem;return r.a.createElement(r.a.Fragment,null,t.map(function(e){var t=e.link.length<2?e.link:"".concat(e.link,"/");return e.dropdown?r.a.createElement(x,{key:e.title,menuItem:e,activeMenuItem:a}):r.a.createElement(E.a,{key:e.title,className:y()("navbar-item","is-tab",{"is-active":a===t}),to:e.link},e.title)}))},x=function(e){var t=e.menuItem,a=e.activeMenuItem;return r.a.createElement("div",{className:y()("navbar-item","has-dropdown","is-hoverable")},r.a.createElement("button",{type:"button",className:"navbar-link"},t.name),r.a.createElement("div",{className:"navbar-dropdown"},t.dropdown.map(function(e){return r.a.createElement(E.a,{key:e.link,className:y()("navbar-item","is-tab",{"is-active":a==="".concat(e.link,"/")}),to:e.link},e.name)})))},I=M,R=(new Date).getFullYear(),j=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("section",{className:"footer-content section is-medium"},r.a.createElement("div",{className:"container"},r.a.createElement("h5",{className:"subtitle copyright has-text-centered"},"COPYRIGHT @ SEALAB AS ",R,"."))))};a(222),a(223),t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement("main",null,t),r.a.createElement(j,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-7b367a578e195433c1ab.js.map