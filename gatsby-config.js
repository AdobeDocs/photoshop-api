/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

 module.exports = {
   siteMetadata: {
     pages: [
       {
         title: 'Photoshop API',
         path: 'index.md'
       },
       {
        title: 'Demo',
        path: 'demo.md'
      },
      {
        title: 'Pricing',
        path: 'pricing.md'
      },
      {
        title: 'View Docs',
        path: 'https://www.adobe.com/go/photoshop-api-docs-home'
      },
      {
        title: 'Support',
        menu:[{
          title: 'FAQ',
          path:'faq.md'
        }, {
          title: 'Submit a ticket',
          path: 'https://psd-services.zendesk.com/hc/en-us/requests/new'
        }, {
          title: 'Community Forums',
          path: 'https://community.adobe.com/t5/photoshop-developers/ct-p/ct-photoshop-developers?page=1&sort=latest_replies&lang=all&tabid=all&topics=label-psautomationapi'
        }]
      },
    ],
    docs: {
      title: 'Get Started',
      path: 'signup.md?ref=signup'
    }
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/photoshoptest/api/'
};
