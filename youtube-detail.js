// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...


    window.addEventListener('load', function() {

         const eleMents = document.querySelectorAll("#items");
    console.log("eleMents:"+eleMents.length);
    console.log(eleMents);
        document.querySelectorAll("#items").forEach(ele => {
           ele.remove();
        });

        document.querySelectorAll("#secondary").forEach(ele => {
           ele.remove();
        });


}, false);

})();
