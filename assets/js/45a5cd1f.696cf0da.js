"use strict";(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(8209);const o={sidebar_position:3},c="Boldin concepts and models",i={unversionedId:"concepts",id:"concepts",title:"Boldin concepts and models",description:"Conceptual model",source:"@site/docs/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/docs/concepts",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Widgets",permalink:"/docs/category/widgets"}},l={},s=[{value:"Conceptual model",id:"conceptual-model",level:2},{value:"Accounts",id:"accounts",level:3},{value:"Payment streams",id:"payment-streams",level:3},{value:"Events",id:"events",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"boldin-concepts-and-models"},"Boldin concepts and models"),(0,a.kt)("h2",{id:"conceptual-model"},"Conceptual model"),(0,a.kt)("p",null,"The Boldin FPE (Financial Planning Engine) looks for three different types of input to provide accurate simulations of a user","\u2019","s financial future:"),(0,a.kt)("h3",{id:"accounts"},"Accounts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Accounts typically represent accounts held at a financial institution, such as a checking account, a savings account, or a retirement account."),(0,a.kt)("li",{parentName:"ul"},"Accounts can also represent assets (like houses), debts (like mortgages), cash, or businesses."),(0,a.kt)("li",{parentName:"ul"},"Accounts have a balance and an expected rate of return.")),(0,a.kt)("h3",{id:"payment-streams"},"Payment streams"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Payment streams are any flows of data into or out of an account or between accounts."),(0,a.kt)("li",{parentName:"ul"},"Payment streams can be recurring over a time period or can be one-time events."),(0,a.kt)("li",{parentName:"ul"},"Payment streams have a frequency, and time range, and an expected growth rate."),(0,a.kt)("li",{parentName:"ul"},"Some examples of payments streams would be work income, monthly expenses, windfall income (like inheritance), or contributions to savings.")),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Events reflect real-life events that can impact a user","\u2019","s financial outlook now, or at some point in the future"),(0,a.kt)("li",{parentName:"ul"},"For example, a Relocation event might generate a new Account for the new home and an Account for a new Mortgage as well as new Payment Streams for the proceeds of the sale and new mortgage payments.")),(0,a.kt)("p",null,"For more detail, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes"},"Data Structures and Types")," in the FPE API documentation."))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);