// ==UserScript==
// @name        BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Bing
// @author        Sergey Mazurov
// @match        https://www.bing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// ==/UserScript==

let links = document.links;
let search_icon = document.getElementById("search_icon");
let keywords = ["отправить посылку", "получить посылку", "отправить письмо"];
let keyword = keywords[getRandom(0, keywords.length)];

if (search_icon !== null) {
  document.getElementsByName("q")[0].value = keyword;
  search_icon.click();
} else {

  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("pochta.ru") !== -1) {
      console.log("Нашел строку" + links[i]);
      let link = links[i];
      link.click();
      break;
    }
  }
}
function getRandom(min, max) {
return Math.floor(Math.random()*(max - min) + min);
}

