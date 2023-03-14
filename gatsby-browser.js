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

        document
            .querySelector(".hero")
            .setAttribute("daa-lh", "hero");

        document
            .querySelectorAll(".hero a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
             });

        document
             .querySelector(".decision")
             .setAttribute("daa-lh", "decision");
 
        document
            .querySelectorAll(".decision a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".creative")
            .setAttribute("daa-lh", "creative");
  
        document
            .querySelectorAll(".creative a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".developer")
            .setAttribute("daa-lh", "developer");
  
        document
            .querySelectorAll(".developer a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".remove-background")
            .setAttribute("daa-lh", "remove-background");
  
        document
            .querySelectorAll(".remove-background a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".presets")
            .setAttribute("daa-lh", "presets");
  
        document
            .querySelectorAll(".presets a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".auto-tone")
            .setAttribute("daa-lh", "auto-tone");
  
        document
            .querySelectorAll(".auto-tone a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".smart-object")
            .setAttribute("daa-lh", "smart-object");
  
        document
            .querySelectorAll(".smart-object a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".text-layer")
            .setAttribute("daa-lh", "text-layer");
  
        document
            .querySelectorAll(".text-layer a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".photoshop-actions")
            .setAttribute("daa-lh", "photoshop-actions");
  
        document
            .querySelectorAll(".photoshop-actions a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".demo")
            .setAttribute("daa-lh", "demo");
  
        document
            .querySelectorAll(".demo a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });

        document
            .querySelector(".summary")
            .setAttribute("daa-lh", "summary");
  
        document
            .querySelectorAll(".summary a")
            .forEach(link => {
                link.setAttribute("daa-ll", link.textContent);
            });
    }
};