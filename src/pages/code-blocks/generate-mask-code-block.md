<CodeBlock slots="heading, code" repeat="2" languages="curl, js" />

#### cURL

```bash
curl -X POST \
  https://image.adobe.io/sensei/mask \
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
