"use strict";(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));r(8209);const a={sidebar_position:10,title:"Creating your own widgets"},i="Requesting an API key",s={unversionedId:"widgets/best-practices",id:"widgets/best-practices",title:"Creating your own widgets",description:"Some of the NewRetirement widgets require an API Key.",source:"@site/docs/widgets/best-practices.md",sourceDirName:"widgets",slug:"/widgets/best-practices",permalink:"/docs/widgets/best-practices",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Creating your own widgets"},sidebar:"tutorialSidebar",previous:{title:"Roth Conversion",permalink:"/docs/widgets/widget-catalog/roth-conversion"},next:{title:"APIs",permalink:"/docs/category/apis"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"requesting-an-api-key"},"Requesting an API key"),(0,o.kt)("p",null,"Some of the NewRetirement widgets require an API Key."),(0,o.kt)("p",null,"If an API Key is required you will see it in the widget code, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apiKey="YOUR-API-KEY"\n')),(0,o.kt)("p",null,"NewRetirement provides a demo API Key with a limited number of throttled daily requests."),(0,o.kt)("p",null,"The API Key below is avaible for demo use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"VDlPH9oTUp8NdzwzDMLpv5h0knU6fZft5YNxtb5Q\n")),(0,o.kt)("p",null,"If the demo API Key doesn\u2019t meet your needs please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:sales@newretirement.com"},"sales@newretirement.com"),"."),(0,o.kt)("br",null),(0,o.kt)("h1",{id:"best-practices"},"Best practices"),(0,o.kt)("p",null,"The retirement-calculator web component is an example of best practices for creating a web component."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a form where users can enter their information"),(0,o.kt)("li",{parentName:"ul"},"Convert the form inputs into an FPE Plan request and send it to the FPE forecast service to generate a Forecast"),(0,o.kt)("li",{parentName:"ul"},"Display the Forecast data to the user in a chart or table")))}u.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);