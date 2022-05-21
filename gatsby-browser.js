/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

export const onRouteUpdate = ({ location, prevLocation }) => {
  setTimeout(() => { 
    let childUrl = 'https://easybake.adobedice.com'
    if (window.location.href.indexOf("-stage") > -1) {
      childUrl = 'https://easybake-stage.adobedice.com'
    }
    if (window.location.href.indexOf("localhost") > -1) {
      childUrl = 'https://localhost.adobedice.com:8888'
    }
    document.querySelectorAll(`iframe[src*="${childUrl}"]`).forEach((iframe) =>{
      // console.log(`document.location.href: ${document.location.href}`)
      const act = getUrlParameter('act')
      const ref = getUrlParameter('ref')
      const d = getUrlParameter('d')
      iframe.src = `${childUrl}?cn=eb`
      if (act) {
        iframe.src += `&act=${act}`
      }
      if (ref) {
        iframe.src += `&ref=${ref}`
      }
      if (d) {
        iframe.src += `&ref=${d}`
      }
    });
  }, 1000)
}

export const getUrlParameter = (name) => {
  const curUrl = new URL(document.location.href)
  const val = curUrl.searchParams.get(name)
  console.log(val)
  return val
}