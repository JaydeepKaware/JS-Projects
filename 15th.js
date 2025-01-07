let form = document.querySelector("#form");
let inputs = document.querySelectorAll("input");
let h2 = document.querySelector("h2");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let error = false;
  inputs.forEach(function (input) {
    if (input.value.length === 0 && input.type !== "submit") {
      error = true;
    }
  });

  if (error) {
    h2.style.display = "initial";
  } else {
    h2.style.display = "none";
  }
});
