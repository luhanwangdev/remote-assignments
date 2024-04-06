//Request 1
$("#welcome-message-area").on("click", () => {
  $("#welcome-message").text("Have a GoodTime!");
});

//Request 2
$(".show-btn").on("click", () => {
  $("#hidden").show().css("display", "flex");
});
