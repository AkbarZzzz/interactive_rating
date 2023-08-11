const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

function showThankYou() {
  email = document.getElementById("email").value;
  thankYouMessage = document.getElementById("thankYouMessage");

  thankYouMessage.innerHTML = "Thank you, " + email + "!";
}

submitButton.addEventListener("click", () => {
  showThankYou();
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

const close = document.querySelector(".close");
const container = document.querySelector(".container");
container,
  addEventListener("click", function (e) {
    if (e.target.className == "close") {
      e.target.parentElement.style.display = "none";
    }
  });
