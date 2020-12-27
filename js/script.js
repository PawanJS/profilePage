"use strict";
const modals = document.querySelectorAll(".modal");
const overlay = document.getElementById("overlay");
const btnOpenModal = document.querySelectorAll(".open-button");
const btnCloseModal = document.querySelectorAll(".close-button");

const openModal = function (element) {
  element.classList.add("followers__active");
  overlay.classList.add("active");
};

const closeModal = function (element) {
  element.classList.remove("followers__active");
  overlay.classList.remove("active");
};

const closeModalOnOutside = function () {
  for (let i = 0; i < modals.length; i++) {
    closeModal(modals[i]);
  }
};

for (let i = 0; i < modals.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    openModal(modals[i]);
  });
  btnCloseModal[i].addEventListener("click", function () {
    closeModal(modals[i]);
  });
}

overlay.addEventListener("click", function () {
  closeModalOnOutside();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModalOnOutside();
  }
});
