function greeting(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  if (name !== "") {
    message.textContent = `Welcome, ${name}!`;
    form.style.display = "none";
  } else {
    message.textContent = "Please enter your name.";
  }
}

let form = document.getElementById("form");
let nameInput = document.getElementById("nameInput");
let message = document.getElementById("welcome");

form.addEventListener("submit", greeting);
