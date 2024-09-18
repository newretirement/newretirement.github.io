"use strict";(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[633],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=o(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));a(8209);const i={description:"Glossary of financial terms and definitions used by FPE"},s="Terminology",l={unversionedId:"apis/fpe/terms",id:"apis/fpe/terms",title:"Terminology",description:"Glossary of financial terms and definitions used by FPE",source:"@site/docs/apis/fpe/terms.md",sourceDirName:"apis/fpe",slug:"/apis/fpe/terms",permalink:"/docs/apis/fpe/terms",draft:!1,tags:[],version:"current",frontMatter:{description:"Glossary of financial terms and definitions used by FPE"},sidebar:"tutorialSidebar",previous:{title:"Output Streams",permalink:"/docs/apis/fpe/output_streams"}},p={},o=[{value:"estate value",id:"estate-value",level:2},{value:"excess income",id:"excess-income",level:2},{value:"expense stream",id:"expense-stream",level:2},{value:"income stream",id:"income-stream",level:2},{value:"lifetime debt",id:"lifetime-debt",level:2},{value:"longevity age",id:"longevity-age",level:2},{value:"liquid asset",id:"liquid-asset",level:2},{value:"liquid estate value",id:"liquid-estate-value",level:2},{value:"periodic payment",id:"periodic-payment",level:2},{value:"RMD liability",id:"rmd-liability",level:2},{value:"shortfall withdrawal",id:"shortfall-withdrawal",level:2},{value:"transfer",id:"transfer",level:2}],c={toc:o};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terminology"},"Terminology"),(0,r.kt)("h2",{id:"estate-value"},"estate value"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/e/estate.asp"},"estate")," is everything comprising the net worth of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#plan"},"plan"),", including all land and real estate, possessions, financial securities, cash, and other assets."),(0,r.kt)("p",null,"In FPE, the estate value is simply the sum the ending balances of ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"all"))," ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#account"},"accounts")," regardless of ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#accounttype"},"account type"),"."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"excess-income"},"excess income"),(0,r.kt)("p",null,"After processing all expenses, transfers, tax payments, and contributions to retirement plans within a given month, ",(0,r.kt)("em",{parentName:"p"},"excess income")," is the remainder of the gross income received that month."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"expense-stream"},"expense stream"),(0,r.kt)("p",null,"An expense stream represents a withdrawal from 1 or more ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#account"},"accounts")," within the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#plan"},"plan"),".  In FPE, an expense stream is represented as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#paymentstream"},"paymentStream")," whose ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," is empty, and whose ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," is assigned the name of an existing account or ",(0,r.kt)("inlineCode",{parentName:"p"},'"optimal"'),", which then funds the expense using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/optimal_withdraw"},"Optimal Withdrawal Strategy"),"."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"income-stream"},"income stream"),(0,r.kt)("p",null,"An income stream represents money from an external source that is deposited into an ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#account"},"account")," within the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#plan"},"plan"),".  In FPE, an income stream is represented as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#paymentstream"},"paymentStream")," whose ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," attribute is empty, and whose ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," account is set to an existing account within the plan."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"lifetime-debt"},"lifetime debt"),(0,r.kt)("p",null,"Whenever the plan has insufficient funds to cover a withdrawal, the amount is paid for out of the \u201clifetime debt\u201d account (i.e. an account whose type is ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#accounttype"},"revolvingCredit"),")."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"longevity-age"},"longevity age"),(0,r.kt)("p",null,"Longevity age refers to a person\u2019s life expectancy.  In FPE, this value is set via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#person"},"Plan.Person.goalAge")," attribute."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"liquid-asset"},"liquid asset"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/l/liquidasset.asp"},"liquid asset")," is an asset that can easily be converted into cash in a short amount of time.  Within FPE, an ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#account"},"account")," is classified as a liquid asset based on its ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#accounttype"},"type")," combined with the following rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NOT a liquid asset if account type is ",(0,r.kt)("inlineCode",{parentName:"li"},"asset"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mortgage"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"reverseMortage"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"loan"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"revolvingCredit")),(0,r.kt)("li",{parentName:"ul"},"IS a liquid asset for any other ",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/fpe/datatypes#accounttype"},"account type"))),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"liquid-estate-value"},"liquid estate value"),(0,r.kt)("p",null,"Liquid estate value is very similar to ",(0,r.kt)("a",{parentName:"p",href:"#estate-value"},"estate value"),", except that certain ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#accounttype"},"account types")," are excluded from the total value. The excluded account types are ",(0,r.kt)("inlineCode",{parentName:"p"},"asset"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mortgage"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"reverseMortage"),"."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"periodic-payment"},"periodic payment"),(0,r.kt)("p",null,"A payment that occurs at regular intervals (vs. a one-time payment).  The frequency of a periodic payment is determined by the value of ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#paymentstream"},"PaymentStream.paymentsPerYear"),"."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"rmd-liability"},"RMD liability"),(0,r.kt)("p",null,"The IRS-mandated amount of money that must be withdrawn annually from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#plan"},"plan\u2019s")," tax-deferred accounts in order to satisfy the ",(0,r.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/r/requiredminimumdistribution.asp"},"RMD rule"),"."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"shortfall-withdrawal"},"shortfall withdrawal"),(0,r.kt)("p",null,"A shortfall withdrawal is an implicit withdrawal from an accounts that is automatically triggered when FPE is attempting to satisfy an expense amount that exceeds the balance of a given account. The order from which accounts are drawn is determined by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/optimal_withdraw"},"optimal withdrawal strategy"),"."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"transfer"},"transfer"),(0,r.kt)("p",null,"A transfer is a transaction whereby money is withdrawn from one ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#account"},"account")," and deposited into another. In FPE, a tranfer is accomplished by setting both the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," attributes of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#paymentstream"},"paymentStream")," object."))}d.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);