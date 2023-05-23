---
keywords:
  - Photo editor API
  - Photoshop workflow automation
  - Image editor API
  - Photoshop API
  - Image editing API for developers
  - Photoshop in the Cloud
  - Remove background API
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
title: Photoshop API
---
[//]: # (-----------------------------------Hero Section--------------------------------------------------------)
<Hero slots="image, heading, text, buttons" variant="fullwidth" background="rgb(12, 50, 63)" className="remove-background-hero" />

![](images/Adobe_io_illustration_banner_3x.png)

# Remove background API

Make creativity happen across thousands of images, all at once.

* [Start free trial](signup.md?ref=signup)
* [Try demo](demo.md)


[//]: # (-----------------------------------River Flow Section --------------------------------------------------------)
<TextBlock slots="image, heading, text" theme="lightest" />

![](images/AutomateContentCreation.png)

### E-commerce made easy

Build your business with our remove background tools that let you cut out images, place them on merchandise, and get them into your customers’ hands.


<TextBlock slots="heading, text, image" theme="lightest" />

### Elevate your marketing

Removing the background easily allows you to change the look of your products within seconds, giving you multiple ways to market what you have to sell.

![](images/IncreaseSales.png)

[//]: # (-----------------------------------Three Up Section --------------------------------------------------------)
<TextBlock slots="heading, text" width="33%" theme="lightest" isCentered />

### High-quality cutouts

Leverage our API models to automatically remove backgrounds from your images and make them stand out from the rest.




<TextBlock slots="heading, text" width="33%" theme="lightest" isCentered />

### Easy integration

Scale the number of product listings you have and easily create multiple variations, all while seamlessly integrating them into your existing internal tools and workflows.




<TextBlock slots="heading, text" width="33%" theme="lightest" isCentered />

### Go to market faster

Generate thousands of assets and renditions to get your marketing campaigns launched sooner.



<CodeBlock slots="heading, code" repeat="2" languages="JSON, CURL, JSON" />


### Request

```bash
curl -X POST \
  https://image.adobe.io/sensei/cutout \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
   "input":{
      "storage":"<storage>",
      "href":"<SIGNED_GET_URL>"
   },
   "output":{
      "storage":"<storage>",
      "href":"<SIGNED_POST_URL>",
      "mask":{
         "format":"soft"
      }
   }
}'
```

### Response

```json
{
  "_links": {
    "self": {
      "href": "https://image.adobe.io/sensei/status/<:jobId>"
    }
  }
}  
```


[//]: # (-----------------------------------Summary Section --------------------------------------------------------)
<SummaryBlock slots="image, heading, text, buttons" background="rgb(12, 50, 63)" className="remove-background-summary"/>

![](images/Adobe_io_illustration_banner_3x.png)

## Unlock the power of Photoshop APIs, now in the cloud

Sign up now to get access to the world’s standard in game-changing imaging technology.

* [Start free trial](signup.md?ref=signup)
* [Try demo](demo.md)
