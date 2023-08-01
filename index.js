"use strict";
const btnSubmit = document.querySelector("#submit");
const btnRateAgain = document.querySelector("#rate-again");
const btnsRate = document.querySelectorAll(".btn");
const parentbtns = document.querySelector(".parent-number");
const divThank = document.querySelector(".thank");
const containerHidden = document.querySelector(".container1");

const initialBtnColors = function () {
  btnsRate.forEach((btn) => {
    btn.style.backgroundColor = "hsl(216, 12%, 54%, 0.5)";
  });
};

const changeVisibilityContainer = function () {
  btnSubmit.closest(".container").classList.toggle("hidden");
  containerHidden.classList.toggle("hidden");
};

parentbtns.addEventListener("click", function (e) {
  const btnRateTarget = e.target.closest(".btn");
  initialBtnColors();
  if (!btnRateTarget) return;
  btnRateTarget.style.backgroundColor = "hsl(25, 97%, 53%)";
  btnSubmit.dataset.id = btnRateTarget.textContent;
});

btnSubmit.addEventListener("click", function (e) {
  const rateNumber = e.target.dataset.id;
  divThank.textContent = `You selected out ${rateNumber}  of  5 Thank you!`;
  changeVisibilityContainer();
});

btnRateAgain.addEventListener("click", function () {
  initialBtnColors();
  changeVisibilityContainer();
});
