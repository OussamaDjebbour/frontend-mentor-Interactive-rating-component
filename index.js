"use strict";
const app = function () {
  const btnSubmit = document.querySelector("#submit");
  const btnRateAgain = document.querySelector("#rate-again");
  const btnsRate = document.querySelectorAll(".btn");
  const divThank = document.querySelector(".thank");
  const containerHidden = document.querySelector(".container1");
  let rate = "";

  const initialBtnColors = function () {
    // btnsRate.forEach((el) => (el.checked = false));
    btnsRate[btnsRate.length - 1].checked = true;
    rate = "5";
  };

  btnsRate.forEach((el) => {
    el.addEventListener("change", function (e) {
      rate = e.target.value;
      console.log(rate);
    });
  });

  const changeVisibilityContainer = function () {
    btnSubmit.closest(".container").classList.toggle("hidden");
    containerHidden.classList.toggle("hidden");
  };

  btnSubmit.addEventListener("click", function () {
    divThank.textContent = `You selected out ${rate}  of  5 Thank you!`;
    changeVisibilityContainer();
  });

  btnRateAgain.addEventListener("click", function () {
    initialBtnColors();
    changeVisibilityContainer();
  });
};

app();
