<CodeBlock slots="heading, code" repeat="2" languages="curl, js" />

#### cURL

```bash
// Please refer to our API Reference guide here:
// https://developer.adobe.com/photoshop/photoshop-api-docs/api/#tag/Photoshop/operation/cutout

curl -X POST 'https://image.adobe.io/sensei/mask' \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Authorization: Bearer $token" \
  -d '{
   "input":{
      "storage":"<storage>",
      "href":"<href>"
   },
   "output":{
      "storage":"<storage>",
      "href":"<href>"
      "mask":{
         "format":"<soft|binary>"
      }
   }
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
