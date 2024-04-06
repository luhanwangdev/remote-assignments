//Request 1
let welcomeText = document.querySelector("#welcome-message");
const welcomeArea = document.querySelector("#welcome-message-area");

welcomeArea.addEventListener("click", () => {
  welcomeText.textContent = "Have a GoodTime!";
});

//Request 2
let btnShow = document.querySelector(".show-btn");
let hiddenArea = document.querySelector("#hidden");

btnShow.addEventListener("click", () => {
  hiddenArea.removeAttribute("id");
});
