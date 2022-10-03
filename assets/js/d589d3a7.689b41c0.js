"use strict";(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));n(8209);const o={sidebar_position:2},i="Getting started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Create a plan on NewRetirement.com",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/intro"},next:{title:"NewRetirement concepts and models",permalink:"/docs/concepts"}},c={},p=[{value:"Create a plan on NewRetirement.com",id:"create-a-plan-on-newretirementcom",level:2},{value:"Get an API key",id:"get-an-api-key",level:2},{value:"Next steps",id:"next-steps",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("h2",{id:"create-a-plan-on-newretirementcom"},"Create a plan on NewRetirement.com"),(0,a.kt)("p",null,"If you haven\u2019t used the ",(0,a.kt)("a",{parentName:"p",href:"https://www.newretirement.com/planner"},"NewRetirement.com Planner")," yet, we recommend creating a free account and creating a financial plan. The free tier will give you a great overview of the platform\u2019s underlying approach and capabilities, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("em",{parentName:"li"},"key concepts and terms")," we use to describe lifelong financial planning and wellness;"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("em",{parentName:"li"},"essential inputs")," that help to build accurate planning scenarios;"),(0,a.kt)("li",{parentName:"ul"},"and the ",(0,a.kt)("em",{parentName:"li"},"comprehensive range of options")," we support for users to add greater nuance and detail to their financial plans.")),(0,a.kt)("h2",{id:"get-an-api-key"},"Get an API key"),(0,a.kt)("p",null,"Next, you\u2019ll need an API key to access the NewRetirement Financial Planning Engine \u2014 even if you\u2019re just interested in embedding a widget on your website."),(0,a.kt)("p",null,"If you\u2019re simply kicking the tires, you can use the ",(0,a.kt)("strong",{parentName:"p"},"demo key")," below. For any other use, you\u2019ll want your own API key; contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:customer_service@newretirement.com"},"customer_service@newretirement.com")," to get your own key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"LQnxEMYWQQ3OPhPxESWP88rhfriWoCLm7r0pWVMZ\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Our demo key is designed for exploratory use of the FPE API only. Even though it provides access to all endpoints, requests are throttled \u2014 and of course, you\u2019ll be sharing it with other demo users.")),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"If you\u2019re interested in adding a web component to your application, look to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/widget-catalog"},"widget catalog")," for information about embed codes, theming, and more."),(0,a.kt)("p",null,"If you\u2019re interested in deeper levels of integration, we recommend going to ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts"},"Concepts and models")," for more detailed information about integrating your application with the FPE and our SDKs."))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);