"use strict";(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[245],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(a),u=r,k=c["".concat(o,".").concat(u)]||c[u]||s[u]||i;return a?n.createElement(k,l(l({ref:e},m),{},{components:a})):n.createElement(k,l({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8491:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));a(8209);const i={description:"Understanding output from FPE projections"},l="Output Streams",p={unversionedId:"apis/fpe/output_streams",id:"apis/fpe/output_streams",title:"Output Streams",description:"Understanding output from FPE projections",source:"@site/docs/apis/fpe/output_streams.md",sourceDirName:"apis/fpe",slug:"/apis/fpe/output_streams",permalink:"/docs/apis/fpe/output_streams",draft:!1,tags:[],version:"current",frontMatter:{description:"Understanding output from FPE projections"},sidebar:"tutorialSidebar",previous:{title:"Optimal Withdrawal Strategy",permalink:"/docs/apis/fpe/optimal_withdraw"},next:{title:"Terminology",permalink:"/docs/apis/fpe/terms"}},o={},d=[{value:"Account Projections",id:"account-projections",level:2},{value:"PaymentStream Projections",id:"paymentstream-projections",level:2}],m={toc:d};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"output-streams"},"Output Streams"),(0,r.kt)("p",null,"When a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#plan"},"plan")," is submitted to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/overview#post-v5forecast"},"POST /forecast")," endpoint, a financial ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#forecast"},"Forecast")," object is returned.  This forecast contains (among other things) a set of account projections (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#forecast"},"Forecast.accounts"),"), and a set of payment projections (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#forecast"},"Forecast.paymentStreams"),").  Each of these sets contain future projections of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#account"},"accounts")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#paymentstream"},"payment streams")," defined in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/fpe/datatypes#plan"},"plan"),".  Also included are FPE-calculated projections, which can be identified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"'@'")," prefix character in their names (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"@income_tax"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@total_savings"),")."),(0,r.kt)("h2",{id:"account-projections"},"Account Projections"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stream name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@total_savings")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of account balances for all ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/terms#liquid-asset"},"liquid asset")," accounts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@projected_savings")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of account balances for all ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/terms#liquid-asset"},"liquid asset")," accounts PLUS any accounts whose type is ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/datatypes#accounttype"},"revolvingCredit"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@total_debt")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all accounts with a negative balance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@interest:<account>")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The interest accrued on the account whose name is ",(0,r.kt)("inlineCode",{parentName:"td"},"<account>"),".")))),(0,r.kt)("h2",{id:"paymentstream-projections"},"PaymentStream Projections"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stream name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@capital_gains")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://www.investopedia.com/articles/personal-finance/101515/comparing-longterm-vs-shortterm-capital-gain-tax-rates.asp"},"capital gains")," for the given tax year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@capital_gains_tax")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://www.investopedia.com/terms/c/capital_gains_tax.asp"},"tax due on all capital gains")," for the given tax year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@capital_gains_tax_payment")),(0,r.kt)("td",{parentName:"tr",align:null},"expense"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents a ",(0,r.kt)("a",{parentName:"td",href:"https://www.investopedia.com/terms/c/capital_gains_tax.asp"},"capital gains tax")," payment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@combined_irmaa")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@irmaa + @irmaa_spouse"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@employeeContrib:${work_stream}:${index}")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The employee contribution amount for a given earned income stream.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@employerContrib:${work_stream}:${index}")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The employer contribution amount for a given earned income stream. This amount combines both non-elective and employer-match contributions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@employerMatch:${work_stream}:${index}")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"Reports the employer match amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@employerNEC:${work_stream}:${index}")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"Reports the non-elective employer contributions (NEC\u2019s).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@federal_agi")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://www.investopedia.com/terms/a/agi.asp"},"AGI")," used for calculating federal income taxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@federal_income_tax")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The federal income tax due for the given tax year.  DEPRECATED: this stream is now in ",(0,r.kt)("inlineCode",{parentName:"td"},"annualReports.fedIncomeTaxDue"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@federal_taxable_income")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"DEPRECATED. This stream is now in ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/datatypes#annualreports"},"annualReports.fedTaxableIncome"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@fica")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://www.investopedia.com/terms/f/fica.asp"},"FICA")," amount due for the given tax year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@gap")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@total_income - @total_expenses"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@income_tax")),(0,r.kt)("td",{parentName:"tr",align:null},"expense"),(0,r.kt)("td",{parentName:"tr",align:null},"The actual income tax payments made to the IRS.  Income tax includes federal, state, FICA, and other taxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@income_tax_true_up")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"Reports the annual true-up for each tax year in the simulation.  A positive true-up amount indicates a refund, whereas a negative amount indicates the actual tax owed.  DEPRECATED: this stream is now in ",(0,r.kt)("inlineCode",{parentName:"td"},"annualReports.incomeTaxTrueUp"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@irmaa")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://www.medicareresources.org/medicare-eligibility-and-enrollment/what-is-the-income-related-monthly-adjusted-amount-irmaa/"},"IRMAA")," portion of the total ",(0,r.kt)("inlineCode",{parentName:"td"},"@medicare_oopc")," expense.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@irmaa_spouse")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as the ",(0,r.kt)("inlineCode",{parentName:"td"},"@irmaa")," payment stream, but applies exclusively to the spouse (if one is defined for this plan).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@medicare_oopc")),(0,r.kt)("td",{parentName:"tr",align:null},"expense"),(0,r.kt)("td",{parentName:"tr",align:null},"The Medicare Out-Of-Pocket-Cost within a given period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@repay:${x}")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"Reports ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/terms#lifetimedebt"},"lifetime debt")," repayment within a given period. ",(0,r.kt)("inlineCode",{parentName:"td"},"${x}")," is the name of the first account in the plan whose type is ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/datatypes#accounttype"},"revolvingCredit"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@rmd_unsatisfied")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"Each December, FPE determines the total amount of money that has been withdrawn across all tax-deferred accounts that are subject to RMDs.  If this amount is less than the total ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/terms#rmd-liability"},"RMD liability")," for a given year, FPE will explicitly withdraw the unsatisfied portion of the RMD from the plan\u2019s ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/datatypes#cashflow"},"designated checkingAccount"),".  This stream reports this ",(0,r.kt)("i",null,"unsatisfied portion"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@saved_surplus")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The portion of ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/terms#excessincome"},"excess income")," that is saved each month.  The saved portion is determined by ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/datatypes#cashflow"},"plan.cashFlow.savingRate"),". For example, if in a given month the plan has $1,000 of excess income, and savingRate = 0.75, then $250 will be transferred plan\u2019s ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/datatypes#cashflow"},"checkingAccount")," into the plan\u2019s ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/datatypes#cashflow"},"savingsAccount"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ss_income")),(0,r.kt)("td",{parentName:"tr",align:null},"income"),(0,r.kt)("td",{parentName:"tr",align:null},"Social security income stream for the primary member of the plan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ss_income_spouse")),(0,r.kt)("td",{parentName:"tr",align:null},"income"),(0,r.kt)("td",{parentName:"tr",align:null},"Social security income stream for the spouse (if one is defined for the plan).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@state_income_tax")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The calculated state income tax due for the given tax year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@state_taxable_income")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The portion of the plan\u2019s income that is subject to state income tax for the given tax year. DEPRECATED: this stream is now in ",(0,r.kt)("inlineCode",{parentName:"td"},"annualReports.stateTaxableIncome"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@tax_liability")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The total tax liability for the given tax year.  Includes federal+state income tax, FICA, capital gains tax, and possibly other state-specific taxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@total_expenses")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all PaymentStream projections of type ",(0,r.kt)("inlineCode",{parentName:"td"},"expense"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@total_income")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all PaymentStream projections of type ",(0,r.kt)("inlineCode",{parentName:"td"},"income"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@unfunded_gap")),(0,r.kt)("td",{parentName:"tr",align:null},"report"),(0,r.kt)("td",{parentName:"tr",align:null},"The difference between the lifetime debt in the current period and the previous period.  More specifically, given the lifetime debt stream named ",(0,r.kt)("inlineCode",{parentName:"td"},"lifetimeDebt"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"@unfunded_gap[k] = min(0, lifetimeDebt[k] - lifetimeDebt[k-1])"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@unsaved_surplus")),(0,r.kt)("td",{parentName:"tr",align:null},"expense"),(0,r.kt)("td",{parentName:"tr",align:null},"The portion of ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/terms#excessincome"},"excess income")," that is \u201cspent\u201d each month.  The unsaved portion is determined by ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/datatypes#cashflow"},"plan.cashFlow.savingRate"),". For example, if in a given month the plan has $1,000 of excess income, and savingRate = 0.75, then $750 will be withdrawn from the plan\u2019s ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/datatypes#cashflow"},"checkingAccount"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@withdrawal:${account}:rmd")),(0,r.kt)("td",{parentName:"tr",align:null},"income"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the amount of money withdrawn from ",(0,r.kt)("inlineCode",{parentName:"td"},"${account}")," that was used for the purpose of satisfying RMDs for the year in which the payment occurred.  ",(0,r.kt)("br",null),(0,r.kt)("b",null,"NOTE:")," The sum of the values across all ",(0,r.kt)("inlineCode",{parentName:"td"},"@withdrawal:.*:rmd")," streams within a given calendar year is equivalent to the total ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/fpe/terms#rmd-liability"},"RMD liability")," for that year.")))))}s.isMDXComponent=!0},8209:(t,e,a)=>{a(7294)}}]);