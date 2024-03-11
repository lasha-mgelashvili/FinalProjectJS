("use strict");
// -------------> Imported js functions <-----------
import {
  dropLogin,
  burger,
  headerBG,
  mainSwiper,
  controlSwiper,
} from "./form.js";

// Drop Login
dropLogin();
// ----------> Burger Bar <---------------
burger();
// --------------> Header BG <-----------------
headerBG();
//--------------> Main Swiper <--------------
mainSwiper();
//------------> Control Swiper <----------------
controlSwiper();

// --------------> Accordion <--------------

const AccordionItems = document.querySelectorAll(".accordion-item");

AccordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

//-------------> Cookies <--------------

function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000); // Fixed the calculation for days
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
}

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });
  return value;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cookie-btn").addEventListener("click", () => {
    document.getElementById("cookies").style.display = "none";
    setCookie("cookie", true, 30);
  });
});

function cookieMessage() {
  if (!getCookie("cookie")) {
    document.querySelector("#cookies").style.display = "block";
  }
}

window.addEventListener("load", cookieMessage);

// ----------> scroll Top <------------

import { scrollTop } from "./form.js";
scrollTop();
