<TextBlock slots="heading, buttons, text" theme="dark" hasCodeBlock className="bgBlue showMobileView"/>

##### Remove background

- [Try demo](demo.md)

Removing backgrounds at scale is a valuable tool for businesses that need to create numerous images, such as e-commerce businesses or marketing agencies.

<CodeBlock slots="heading, code" repeat="2" languages="curl, js" />

#### cURL

```bash
// Please refer to our API Reference guide here:
// https://developer.adobe.com/photoshop/photoshop-api-docs/api/#tag/Photoshop/operation/cutout

curl --location --request POST 'https://pdf-services.adobe.io/operation/createpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

#### Node js

```js
// Download our SDK at https://github.com/adobe/adobe-photoshop-api-sdk
// node src/sample/psapi/01_createCutout.js

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
      href: await awsLib.getSignedUrl('putObject', 'output/test01.png'),
      storage: sdk.psApiLib.Storage.EXTERNAL,
      type: sdk.psApiLib.MimeType.PNG
    }

    const job = await client.createCutout(input, output)
    console.log(`Response: ${JSON.stringify(job,null,2)}\n`)
    console.log(`Output File: ${await awsLib.getSignedUrl('getObject', 'output/test01.png')}\n`)
  } catch (e) {
    console.error(e)
  }
}

```
