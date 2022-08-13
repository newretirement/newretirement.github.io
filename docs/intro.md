---
sidebar_position: 1
---

# Introduction

The NewRetirement Platform is a suite of web components, SDKs, and APIs that enable you to create unique financial planning
applications leveraging the same components that have been used to build the [NewRetirement.com Planner](https://www.newretirement.com/planner).

- Widgets - Web components that can be embedded in any web page
- SDKs - Build your own widgets or applications using components and libraries from the SDKs
- APIs - Integrate NewRetirement’s Financial Planning Engine into any application
- White Label - The NewRetirement Planner is also available as a hosted, white label application which can be customized to fit your needs

## Getting Started

If you haven't used the [NewRetirement.com Planner](https://www.newretirement.com/planner) yet you should certainly
start by creating a free account and creating a Financial Plan to get an understanding of the platform capabilities.

If you are interested in adding a web component to your application, you can find embed code information in the [Widget Catalog](/docs/category/widget-catalog)

In either case, you will need to create an API key in order to make API requests to the Financial Planning Engine (FPE).
Contact [customer_service@newretirement.com](mailto:customer_service@newretirement.com) to request an API key. 

## Conceptual Model

The NewRetirement Platform is based around a conceptual model of a Financial Plan that consists primarily
of Accounts, Payment Streams, and Events.
These three concepts allow most financial planning to be modeled and then forecast (or simulated).

- Accounts 
  - Accounts typically represent accounts held at a financial institution, such as a checking account, a savings account, or a retirement account.
  - Accounts can also represent assets (like houses), debts (like mortgages), cash, or businesses.
  - Accounts have a balance and an expected rate of return.
- Payment Streams
  - Payment Streams are any flows of data into or out of an account or between accounts.
  - Payment Streams can be recurring over a time period or can be one-time events.
  - Payment Streams have a frequency, and time range, and an expected growth rate.
  - Some examples of Payment Streams would be work income, monthly expenses, windfall income (like inheritance), or contributions to savings.
- Events
  - Events are one-time events that will occur at some point in the future and may generate new Accounts and Payment Streams
  - For example, a Relocation event might generate a new Account for the new home and an Account for a new Mortgage as well as new Payment Streams for the proceeds of the sale and new mortgage payments.
