"use strict";(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),h=r,d=u["".concat(p,".").concat(h)]||u[h]||s[h]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={description:"Understanding interactions between accounts"},l="Income-Linked Contributions",i={unversionedId:"apis/fpe/income_linked_contribs",id:"apis/fpe/income_linked_contribs",title:"Income-Linked Contributions",description:"Understanding interactions between accounts",source:"@site/docs/apis/fpe/income_linked_contribs.md",sourceDirName:"apis/fpe",slug:"/apis/fpe/income_linked_contribs",permalink:"/docs/apis/fpe/income_linked_contribs",draft:!1,tags:[],version:"current",frontMatter:{description:"Understanding interactions between accounts"},sidebar:"tutorialSidebar",previous:{title:"Data Structures and Types",permalink:"/docs/apis/fpe/datatypes"},next:{title:"Optimal Withdrawal Strategy",permalink:"/docs/apis/fpe/optimal_withdraw"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Employer Match Logic",id:"employer-match-logic",level:3},{value:"Sample Scenarios",id:"sample-scenarios",level:2},{value:"Example 1: Employer Matching",id:"example-1-employer-matching",level:3},{value:"Example 2: Employer Matching with annual cap",id:"example-2-employer-matching-with-annual-cap",level:3},{value:"Example 3: Fixed-Dollar Employer Contribution",id:"example-3-fixed-dollar-employer-contribution",level:3},{value:"Example 4: Fixed-Dollar Employee Contribution",id:"example-4-fixed-dollar-employee-contribution",level:3},{value:"Example 5: Separate Employee and Employer Contribution Accounts",id:"example-5-separate-employee-and-employer-contribution-accounts",level:3},{value:"Output Streams",id:"output-streams",level:3}],c={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"income-linked-contributions"},"Income-Linked Contributions"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Income-linked contributions are essentially one or more contributions taken directly from an ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/terms#income-stream"},"income stream")," payment, and deposited into one or more target ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#account"},"accounts"),".  The remainder of the income payment (i.e. the amount left after processing the contributions) is then deposited into the stream\u2019s designated ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," account."),(0,r.kt)("h3",{id:"employer-match-logic"},"Employer Match Logic"),(0,r.kt)("p",null,"Some companies offer ",(0,r.kt)("a",{parentName:"p",href:"https://www.investopedia.com/articles/personal-finance/112315/how-401k-matching-works.asp"},"401(k) matching"),", whereby the company contributes a certain amount to the employee\u2019s retirement savings plan based on that employee\u2019s annual contribution."),(0,r.kt)("p",null,"FPE supports single-tiered and multi-tiered employer match rules.  A single-tiered example is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Match 100% of employee's contribution up to 6% of salary\n")),(0,r.kt)("p",null,"A multi-tiered example is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tier 1: Match 100% of employee's contribution up to 6% of salary\ntier 2: Then, match 50% of employee's contribution up to 8% of salary\ntier 3: Then, match 25% of employee's contribution up to 10% of salary\n")),(0,r.kt)("p",null,"The dollar amount of the employer match is calculated and processed on each pay period (typically monthly).  The basic calculation steps are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Determine the ",(0,r.kt)("em",{parentName:"li"},"employer contribution rate")," based on the employer match rules and the employee\u2019s contribution rate"),(0,r.kt)("li",{parentName:"ol"},"Multiply ",(0,r.kt)("em",{parentName:"li"},"employer contribution rate")," by the employee\u2019s pretax income to obtain the dollar amount the employer will contribute as a match."),(0,r.kt)("li",{parentName:"ol"},"If an annual employer match limit was specified, then (if necessary) reduce the employer match dollar amount calculated for the current pay period (see previous step) such that the year-to-date employer match amount does not exceed this limit.")),(0,r.kt)("p",null,"Below are the calculation steps in detail:"),(0,r.kt)("b",null,"Step 1: Calculate employer contribution rate"),(0,r.kt)("p",null,"This formula is the same for single- or multi-tiered match rules (a single-tier rule is just a multi-tier composed of 1 tier).  "),(0,r.kt)("p",null,"Let:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"c")," = the employee contribution rate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"n")," = the number of employer match tiers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"r",(0,r.kt)("sub",null,"k"))," = the employer match rate for tier ",(0,r.kt)("em",{parentName:"li"},"k")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"s",(0,r.kt)("sub",null,"k"))," = the percent of salary up to which the employer will match in tier ",(0,r.kt)("em",{parentName:"li"},"k"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?%5Ctext%7Bemployer%20contribution%20rate%7D%20=%20%5Csum_%7Bk=1%7D%5E%7Bn%7D%5Cbegin%7Bcases%7D%20r_%7Bk%7D%20%5Ctimes%20min(c,%20s_%7Bk%7D)%20&%20%5Ctext%7B%20if%20%7D%20k=1%20%5C%5C%20r_%7Bk%7D%20%5Ctimes%20max(0,%20min(c,%20s_%7Bk%7D)%20-%20s_%7Bk-1%7D)%20&%20%5Ctext%7B%20if%20%7D%20k%3E1%20%5C%5C%5Cend%7Bcases%7D",alt:"empmatch"})),(0,r.kt)("b",null,"Step 2: Calculate employer match dollar amount"),(0,r.kt)("p",null,"The amount that the employer will contribute to the employee\u2019s retirement plan for the current pay period is simply:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?%5Ctext%7Bemployer%20match%20dollar%20amount%7D%20=%20i%20%5Ctimes%20r",alt:"emp-match-amount"})),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"i")," = the employee\u2019s pretax income for the current pay period"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"r")," = the ",(0,r.kt)("em",{parentName:"li"},"employer contribution rate")," calculated in the previous step")),(0,r.kt)("b",null,"Step 3: Constrain employer match to satisfy an annual cap"),(0,r.kt)("p",null,"If an employer match annual cap has been specified (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#contributionfromincome"},"employerMatchAnnualCap"),"), the employer match dollar amount may need to be reduced in order to stay within this annual limit:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?m'%20=%20%5Cbegin%7Bcases%7DannualCap%20-%20ytdMatch%20&%20%5Ctext%7B%20if%20%7D%20(ytdMatch%20+%20m)%20%3E%20annualCap%20%5C%5Cm%20+%20%5Ctext%7B%20if%20%7D%20(ytdMatch%20+%20m)%20%3C=%20annualCap%20%5C%5C%20%5Cend%7Bcases%7D",alt:"emp-match-cap"})),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"m")," = the employer match dollar amount calculated in the previous step"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ytdMatch")," = the total year-to-date employer match amount (not including ",(0,r.kt)("em",{parentName:"li"},"m"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"annualCap")," = employer match annual dollar amount cap"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"m\u2019")," = the (potentially) reduced employer match dollar amount")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"m\u2019")," is the dollar amount that the employer will contribute to the employee\u2019s retirement savings plan for the current pay period."),(0,r.kt)("h2",{id:"sample-scenarios"},"Sample Scenarios"),(0,r.kt)("h3",{id:"example-1-employer-matching"},"Example 1: Employer Matching"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Scenario: John works at the ACME company, where he is paid $10K/month (annual salary of $120K).  He wishes to contribute 8% of his pay to the company\u2019s 401(k) plan.  ACME matches 100% of employee contributions up to the first 4% of their salary.  Beyond that, the employer matches 50% of employee contributions up to 6% of salary.")),(0,r.kt)("p",null,"In order to model the above example, there are 3 crucial entities that must be specified in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#plan"},"plan"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/fpe/datatypes#account"},"account")," into which the employee (and possibly employer) contributions will be deposited:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n      "name": "acme_401k",\n      "type": "401k"\n  }\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"aftertax")," ",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/fpe/datatypes#account"},"account")," into which the remaining portion of the earned income will be deposited:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n      "name": "checking",\n      "type": "aftertax"\n  },\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/fpe/datatypes#PaymentStream"},"paymentStream")," object representing the person\u2019s earned income. Pay particular attention to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/fpe/datatypes#ContributionFromIncome"},"contributions")," array:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n      "name": "acme_income",\n      "paymentAmount": 10000,\n      "paymentsPerYear": 12,\n      "target": "checking",\n      "earnedIncome": true,\n      "contributions": [\n        {\n          "employeeContribRate": 0.08,\n          "employerMatches": [\n            {"rate": 1.0, "upTo": 0.04},\n            {"rate": 0.5, "upTo": 0.06}\n          ],\n          "employeeContribTarget": "acme_401k"\n        }\n      ]\n  }\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Since this paymentStream represents work income that is potentially taxable by the IRS, the ",(0,r.kt)("inlineCode",{parentName:"p"},"earnedIncome")," flag must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("p",null,"The complete JSON request for this example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/newretirement/fpe-api/tree/master/examples/forecast/contrib_from_income/case-01.json"},"here"),"."),(0,r.kt)("h3",{id:"example-2-employer-matching-with-annual-cap"},"Example 2: Employer Matching with annual cap"),(0,r.kt)("p",null,"Optionally, an annual cap can be imposed on how much money the employer will contribute to a given plan as a match.  This annual limit is specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"employerMatchAnnualCap")," attribute.  Consider the sample PaymentStream below, where the annual employer match is constrained to $10,000:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "acme_income",\n    "paymentAmount": 15000,\n    "paymentsPerYear": 12,\n    "rate": {"mean": 0.06},\n    "contributions": [\n      {\n        "employeeContribRate": 0.1,\n        "employerMatches": [\n            {"rate": 1.0, "upTo": 0.05}\n        ],\n        "employerMatchAnnualCap": 9000,\n        "employeeContribTarget": "acme_401k"\n      }\n    ],\n    "target": "checking",\n    "earnedIncome": true\n}\n')),(0,r.kt)("p",null,"In the above example, the employer matches 100% of the employee\u2019s contributions up to 5% of their salary (currently $180,000/yr), which works out to maximum annual match of $9,000 (",(0,r.kt)("inlineCode",{parentName:"p"},"(15000 * 12) * 1.0 * 0.05"),").  That said, the employee\u2019s wage growth is set to 6% (",(0,r.kt)("inlineCode",{parentName:"p"},'"rate": {"mean": 0.06}'),"), and so their annual salary will steadily increase each year.  As a result, the employer\u2019s annual match limit would correspondingly increase, if not for the $9,000 cap imposed via the ",(0,r.kt)("inlineCode",{parentName:"p"},'employerMatchAnnualCap": 9000')," constraint."),(0,r.kt)("p",null,"The complete JSON request for this example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/newretirement/fpe-api/tree/master/examples/forecast/contrib_from_income/case-02.json"},"here"),"."),(0,r.kt)("h3",{id:"example-3-fixed-dollar-employer-contribution"},"Example 3: Fixed-Dollar Employer Contribution"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Scenario: Zoe works at the ACME company, where she is paid $10K/month (annual salary of $120K).  She wishes to contribute 10% of her paycheck to the company\u2019s Traditional 401(k) plan, and another 5% to the company\u2019s Roth 401(k) plan.  In addition, ACME contributes $400 ",(0,r.kt)("strong",{parentName:"p"},"per paycheck")," to the 401(k) plan, and $300 ",(0,r.kt)("strong",{parentName:"p"},"per paycheck")," to the Roth 401(k) plan.")),(0,r.kt)("p",null,"The plan for this example is very similar the previous one. The differences are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"contributions[]")," array contains 2 contribution objects instead of 1"),(0,r.kt)("li",{parentName:"ol"},"Instead of specifying an employer match rate and max, a fixed-dollar ",(0,r.kt)("inlineCode",{parentName:"li"},"employerContribAmount")," is provided")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n      "name": "acme_income",\n      "paymentAmount": 10000,\n      "paymentsPerYear": 12,\n      "contributions": [\n          {\n              "employeeContribRate": 0.1,\n              "employerContribAmount": 400,\n              "employeeContribTarget": "acme_401k"\n          },\n          {\n              "employeeContribRate": 0.05,\n              "employerContribAmount": 300,\n              "employeeContribTarget": "acme_roth"\n          }\n      ],\n      "target": "checking",\n      "earnedIncome": true,\n  }\n')),(0,r.kt)("p",null,"The complete JSON request for this example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/newretirement/fpe-api/tree/master/examples/forecast/contrib_from_income/case-03.json"},"here"),"."),(0,r.kt)("h3",{id:"example-4-fixed-dollar-employee-contribution"},"Example 4: Fixed-Dollar Employee Contribution"),(0,r.kt)("p",null,"In this example, the employee contributes a fixed dollar amount ($1,000) each paycheck.  And the employer will match 50% of this $1K contribution up to 5% of annual salary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "acme_income",\n    "paymentAmount": 10000,\n    "paymentsPerYear": 12,\n    "target": "checking",\n    "earnedIncome": true,\n    "contributions": [\n        {\n            "employeeContribAmount": 1000,\n            "employeeContribTarget": "acme_401k",\n            "employerMatches": [\n                {"rate": 0.5, "upTo": 0.05}\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"The complete JSON request for this example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/newretirement/fpe-api/tree/master/examples/forecast/contrib_from_income/case-04.json"},"here"),"."),(0,r.kt)("h3",{id:"example-5-separate-employee-and-employer-contribution-accounts"},"Example 5: Separate Employee and Employer Contribution Accounts"),(0,r.kt)("p",null,"This example demonstrates how the employee and employer contributions can be transferred into separate target accounts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "acme_income",\n    "paymentAmount": 10000,\n    "paymentsPerYear": 12,\n    "target": "checking",\n    "earnedIncome": true,\n    "contributions": [\n        {\n            "employeeContribRate": 0.08,\n            "employeeContribTarget": "acme_401k",\n            "employerMatches": [\n                {"rate": 0.5, "upTo": 0.05}\n            ],\n            "employerContribTarget": "acme_roth"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"The complete JSON request for this example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/newretirement/fpe-api/tree/master/examples/forecast/contrib_from_income/case-05.json"},"here"),"."),(0,r.kt)("h3",{id:"output-streams"},"Output Streams"),(0,r.kt)("p",null,"Each ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/terms#income-stream"},"income stream")," having income-linked contributions will produce a set of system-generated output streams, which detail the payments for each contribution:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@employeeContrib:{paymentStream.name}:{k}"),": This report stream will contain the employee contributions for the ",(0,r.kt)("em",{parentName:"li"},"{k}th")," contribution declaration in the ",(0,r.kt)("inlineCode",{parentName:"li"},"contributions[]")," array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@employerContrib:{paymentStream.name}:{k}"),": This report stream will contain the employer contributions for the ",(0,r.kt)("em",{parentName:"li"},"{k}th")," contribution declaration in the ",(0,r.kt)("inlineCode",{parentName:"li"},"contributions[]")," array.")))}s.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);