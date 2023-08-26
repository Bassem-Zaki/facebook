"use strict";

const seeMoreBtn = document.querySelector(".facebook .see-more");
const userSections = document.querySelector(".facebook .user-sections");
const listHeight = document.querySelector(
  ".facebook .user-sections ul"
).offsetHeight;


seeMoreBtn.addEventListener("click", () => {
  userSections.classList.toggle("hide-height");
  if (!userSections.classList.contains("hide-height")) {
    userSections.style.height = `${listHeight}px`;
  }
});
