//Request 1
const welcomeText = document.querySelector("#welcome-message");
const welcomeArea = document.querySelector("#welcome-message-area");

welcomeArea.addEventListener("click", () => {
  welcomeText.textContent = "Have a GoodTime!";
});

//Request 2
const btnShow = document.querySelector(".show-btn");
const hiddenArea = document.querySelector("#hidden");

btnShow.addEventListener("click", () => {
  hiddenArea.removeAttribute("id");
});
