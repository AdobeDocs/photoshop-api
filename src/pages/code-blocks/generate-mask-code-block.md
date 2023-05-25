<TextBlock slots="heading, buttons, text" theme="dark" hasCodeBlock className="bgBlue showMobileView"/>

##### Remove background

- [See documentation](/document-services/docs/overview/pdf-services-api/)

The API can also be used to remove backgrounds from images in bulk. This can be a valuable tool for businesses that need to create numerous images, such as e-commerce businesses or marketing agencies.

<CodeBlock slots="heading, code" repeat="2" languages="curl, js" />

#### cURL

```bash
curl -X POST \
  https://image.adobe.io/lrService/autoTone \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": {
        "href": "<SIGNED_GET_URL>",
        "storage": "<storage>"
    },
    "outputs": [
        {
            "href": "<SIGNED_POST_URL>",
            "type": "<type>",
            "storage": "<storage>"
        }
    ]
}'
```

#### Node js

```js
// Download our SDK at https://github.com/adobe/adobe-photoshop-api-sdk
// node src/sample/psapi/02_createMask.js

const awsLib = require('../../lib/awsLib')
const sdk = require('../../../config/config')

main()

async function main() {
  try {
    const client = await sdk.initSDK()

    const input = {
      // href: await awsLib.getSignedUrl('getObject', 'input/input01.jpg'), //ex: AWS S3 (s3://<awsConfig.bucketName>/input/input01.jpg)
      href: 'https://raw.githubusercontent.com/adobe/adobe-photoshop-api-sdk/main/testfiles/input/input01.jpg',
      storage: sdk.psApiLib.Storage.EXTERNAL,
    }

    const output = {
      href: await awsLib.getSignedUrl('putObject', 'output/test02.png'),
      storage: sdk.psApiLib.Storage.EXTERNAL,
      type: sdk.psApiLib.MimeType.PNG
    }

    const job = await client.createMask(input, output)
    console.log(`Response: ${JSON.stringify(job,null,2)}\n`)
    console.log(`Output File: ${await awsLib.getSignedUrl('getObject', 'output/test02.png')}\n`)

  } catch (e) {
    console.error(e)
  }
}

```
