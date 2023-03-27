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

const isBrowser = typeof window !== "undefined";
export const onRouteUpdate = ({ location, prevLocation }) => {
    if (isBrowser) {
        document.querySelector("header").setAttribute("daa-lh", "header");
        document.querySelectorAll("header a").forEach((headerLink)=>{
            if(headerLink.innerText !== ''){
                headerLink.setAttribute("daa-ll", headerLink.innerText);
            }
        });

        // check if on localhost or deployed somewhere
        if (window.location.pathname === "/"|| window.location.pathname === "/photoshop/api/" ){
            document
                .querySelector(".index-hero")
                ?.setAttribute("daa-lh", "index-hero");

            document
                .querySelectorAll(".index-hero a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-value-prop-a")
                ?.setAttribute("daa-lh", "index-value-prop-a");

            document
                .querySelectorAll(".index-value-prop-a a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-value-prop-b")
                ?.setAttribute("daa-lh", "index-value-prop-b");

            document
                .querySelectorAll(".index-value-prop-b a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-value-prop-c")
                ?.setAttribute("daa-lh", "index-value-prop-c");

            document
                .querySelectorAll(".index-value-prop-c a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-remove-background")
                ?.setAttribute("daa-lh", "index-remove-background");

            document
                .querySelectorAll(".index-remove-background a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-presets")
                ?.setAttribute("daa-lh", "index-presets");

            document
                .querySelectorAll(".index-presets a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-auto-tone")
                ?.setAttribute("daa-lh", "index-auto-tone");

            document
                .querySelectorAll(".index-auto-tone a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-smart-object")
                ?.setAttribute("daa-lh", "index-smart-object");

            document
                .querySelectorAll(".index-smart-object a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-text-layer")
                ?.setAttribute("daa-lh", "index-text-layer");

            document
                .querySelectorAll(".index-text-layer a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-photoshop-actions")
                ?.setAttribute("daa-lh", "index-photoshop-actions");

            document
                .querySelectorAll(".index-photoshop-actions a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-contact-us")
                ?.setAttribute("daa-lh", "index-contact-us");

            document
                .querySelectorAll(".index-contact-us a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".index-summary")
                ?.setAttribute("daa-lh", "index-summary");

            document
                .querySelectorAll(".index-summary a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".remove-background-hero")
                ?.setAttribute("daa-lh", "remove-background-hero")

            document
                .querySelectorAll(".remove-background-hero a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".remove-background-sdk-sign-up")
                ?.setAttribute("daa-lh", "remove-background-sdk-sign-up")

            document
                .querySelectorAll(".remove-background-sdk-sign-up a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".remove-background-value-prop-a")
                ?.setAttribute("daa-lh", "remove-background-value-prop-a")

            document
                .querySelectorAll(".remove-background-value-prop-a a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".remove-background-value-prop-b")
                ?.setAttribute("daa-lh", "remove-background-value-prop-b")

            document
                .querySelectorAll(".remove-background-value-prop-b a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".remove-background-value-prop-c")
                ?.setAttribute("daa-lh", "remove-background-value-prop-c")

            document
                .querySelectorAll(".remove-background-value-prop-c a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".remove-background-contact-us")
                ?.setAttribute("daa-lh", "remove-background-contact-us")

            document
                .querySelectorAll(".remove-background-contact-us a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

            document
                .querySelector(".remove-background-summary")
                ?.setAttribute("daa-lh", "remove-background-summary")

            document
                .querySelectorAll(".remove-background-summary a")
                .forEach(link => {
                    link.setAttribute("daa-ll", link.textContent);
                });

        } else if(window.location.pathname.indexOf("demo") >= 0) {

        } else if(window.location.pathname.indexOf("faq") >= 0) {

        } else if(window.location.pathname.indexOf("pricing") >= 0) {

        } else if(window.location.pathname.indexOf("signup") >= 0) {

        } else if(window.location.pathname.indexOf("remove-background") >= 0) {

        }
    }
};
