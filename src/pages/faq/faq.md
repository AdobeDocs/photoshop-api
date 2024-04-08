## General

<Accordion>

<AccordionItem header="How do I purchase and what’s the cost?" isChevronIcon >

The Photoshop API is currently availabe for Enterprise use. Please reach out to your Adobe Account Manager for more information. 

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


## Account Management

<Accordion>

<AccordionItem header="How do I see how many API transactions or calls I've used?" isChevronIcon >

For Adobe Enterprise Terms Licensing Agreement (ETLA) customers, you will receive monthly emails on your usage.
For AWS Customers, you can log into your marketplace dashboard to view your bill.

</AccordionItem>

<AccordionItem header="My company has an existing Enterprise Agreement with Adobe. Can I use the same Adobe credentials to sign up for the Photoshop API free trial?" isChevronIcon >

Your Adobe Admin Console admin may have not provisioned your Enterprise ID to have access to the Photoshop API. If your organization is a current subscriber and receiving an error, contact your administrator to have the grant you a developer role.

If you are interested in using Adobe Photoshop API on a trial basis, consider using an Adobe ID (Personal) that is not tied to your enterprise ID.

</AccordionItem>

<AccordionItem header="Why do I have to use a personal account when setting up a trial or account? Why can't I use my company's existing enterprise email/account?" isChevronIcon >

Access to Adobe Photoshop APIs or SDK is only available when it is attached to an Enterprise Term License Agreement (ETLA) and the organization's IT administrator has provisioned that user to have access to the API. For this reason, if you are working on a trial basis, it may be easier and faster to use a personal email than your existing Adobe ID.

</AccordionItem>

<AccordionItem header="Where do I find my Client ID or API key?" isChevronIcon >

Your Client ID (also known as API key) is unique to your account and provided on the successful trial creation confirmation page. This is the "client_id" key used in the back-end code to make free trial calls against. You can also log into the developer console by clicking here (insert link).

</AccordionItem>

<AccordionItem header="If I already have credentials and need new ones, how do I get them?" isChevronIcon >

Both paid and trial customers can create new credentials, as well as edit existing credentials, by going to the Adobe Developer Console: <a href="https://developer.adobe.com/console">https://developer.adobe.com/console</a>.

</AccordionItem>

<AccordionItem header="Can I continue using my same trial credentials after I sign up for paid access to the Adobe Photoshop API?" isChevronIcon >

You should not use your free trial credentials (Credential Key aka API Key) beyond your trial.

When you start your Enterprise Term Licensing Agreement (ETLA), you will receive & create new credentials under your ETLA ORG–you will want to exchange your free trial credentials with those new ETLA credentials.

</AccordionItem>

</Accordion>

## Billing

<Accordion>

<AccordionItem header="How does billing work and what counts as an API call?" isChevronIcon >

Users are billed based on API Transactions, where one billable transaction is equal to one successful API call.

</AccordionItem>

<AccordionItem header="Do I still get charged if an api call returns any errors?" isChevronIcon >

No. You are not charged for Failures and Errors (4XX or 5XX response from the service). Polling calls to check status of an async call are also not billed.

</AccordionItem>

<AccordionItem header="Are there any usage limits?" isChevronIcon >

  As of June 1st all free trial customers will get 500 calls to use over the course of a year. Users subscribed via the AWS Marketplace are billed on a monthly usage-based model and there are no limits to the amount of calls you can make in a billing cycle. Enterprise subscription usage limits are defined contractually on a case-by-case basis.

</AccordionItem>

<AccordionItem header="Are there any throttle limits?" isChevronIcon >

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
