---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
title: Photoshop API FAQ
---

import '../customizations/index.css'


<Hero className="custom-height" slots="image, heading" variant="fullwidth" background="rgb(12, 50, 63)" />

![](images/Adobe_io_illustration_banner_3x.png)

# Frequently Asked Questions


## General

<Accordion>

<AccordionItem header="How do I purchase and what’s the cost?" isChevronIcon >

We offer a variety of pricing options to fit your needs. You can learn more about our offers by visting our [pricing page.](pricing.md)

</AccordionItem>

<AccordionItem header="What kind of storage can I work with?" isChevronIcon >

You can retrieve and store files from any storage that provides pre-signed urls. We recommend S3 from Amazon Web Services, Dropbox, and Azure but any pre-signed url should work.

</AccordionItem>

<AccordionItem header="Is all of Photoshop available?" isChevronIcon >

While all features are not available, with the release of the Photoshop Actions endpoint you now have access to any operation that does not require user input.

</AccordionItem>

<AccordionItem header="How can I provide feedback or ask questions?" isChevronIcon >

Please reach out to [psdservices@adobe.com](mailto:psdservices@adobe.com) or leave a post in our [community forum](https://community.adobe.com/t5/photoshop-developers/ct-p/ct-photoshop-developers?page=1&sort=latest_replies&lang=all&tabid=all).
We’re happy to hear from you!


</AccordionItem>

</Accordion>

## Billing

<Accordion>

<AccordionItem header="How does billing work and what counts as an API call?" isChevronIcon >

Users are billed based on API Transactions, where one billable transaction is equal to one successful API call.

Definitions:

  An API transaction is defined as a successful API call to the Photoshop API service.

  A successful API call is defined as a 2XX response from the service where the requested output has been successfully generated.

Examples:

  Example #1: A user makes a single request to the Remove Background API endpoint in order generate an output image and/or mask = 1 transaction.

  Example #2: A user makes a call to Remove Background, takes the output image and sends it to the Lightroom API for AutoTone = 2 transactions

  Example #3: A user makes a call to the Generate Renditions API to create five outputs of different sizes and types = 1 transaction

  Example #4: A user makes a call to Photoshop Actions in which multiple PS features are requested in a single action = 1 transaction.

</AccordionItem>

<AccordionItem header="Do I still get charged if an api call returns any errors?" isChevronIcon >

No. You are not charged for Failures and Errors (4XX or 5XX response from the service). Polling calls to check status of an async call are also not billed.

</AccordionItem>

<AccordionItem header="Are there any usage limits?" isChevronIcon >

Quota limits:

  Trial users are limited to the number of calls enumerated on the pricing page
  Users subscribed via the AWS Marketplace are billed on a monthly usage-based model
  Enterprise subscription usage limits are defined contractually on a case-by-case basis

Size, Resolution and Throttling Limits:

  Each API endpoint has its own unique limitations to be aware of. Please see the API documentation for additional details.

</AccordionItem>

<AccordionItem header="Can I use the API if I am not in the United States?" isChevronIcon >

Our international(non U.S) subscription is available for purchase from billing addresses within the following list of allowed countries only:

India, Indonesia, Malaysia, South Africa, Japan, Austria, Belgium, Bulgaria, Canada, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Isle of Man, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, and UK.

We may have other options to purchase Adobe Photoshop API for customers in countries that are not included on this list. Please see our pricing page for available purchase options or feel free to contact us for more information.

</AccordionItem>

</Accordion>
<br/>
<br/>
