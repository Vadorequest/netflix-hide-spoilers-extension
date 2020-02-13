// ==UserScript==
// @name         Hide Netflix spoilers
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Hide spoilers when pausing a video
// @author       Vadorequest <https://github.com/Vadorequest>
// @match        https://www.netflix.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var css = '.evidence-overlay > p { display: none; } .overview .synopsis { display: none; }', // Hide spoilers
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
})();
