"use strict";
const app = function () {
  const btnSubmit = document.querySelector("#submit");
  const btnRateAgain = document.querySelector("#rate-again");
  const btnsRate = document.querySelectorAll(".btn");
  const divThank = document.querySelector(".thank");
  const containerHidden = document.querySelector(".container1");

  let ratenbr = "5";

  const initialBtnColors = function () {
    btnsRate[btnsRate.length - 1].checked = true;
    ratenbr = "5";
  };

  const changeVisibilityContainer = function () {
    btnSubmit.closest(".container").classList.toggle("hidden");
    containerHidden.classList.toggle("hidden");
  };

  btnSubmit.addEventListener("click", function (e) {
    btnsRate.forEach((el) => {
      if (!el.checked) return;
      ratenbr = el.value;
    });
    divThank.textContent = `You selected out ${ratenbr}  of  5 Thank you!`;
    changeVisibilityContainer();
  });

  btnRateAgain.addEventListener("click", function () {
    initialBtnColors();
    changeVisibilityContainer();
  });
};

app();
