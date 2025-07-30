let contactInfo = document.getElementById("contactInfo");
let showEmailBtn = document.getElementById("showEmailBtn");
let showPhoneBtn = document.getElementById("showPhoneBtn");
let hideContact = document.getElementById("hideContactBtn");
let studentEmail = document.getElementById("studentEmail");
let studentPhone = document.getElementById("studentPhone");
let studentStatus = document.getElementById("studentStatus");
let studentInput = document.getElementById("statusInput");
let updateStatusBtn = document.getElementById("updateStatusBtn");

function displyEmail() {
  contactInfo.style.display = "block";
  studentEmail.innerHTML = "fosoonryan601@gmail.com";
}

function displyPhone() {
  contactInfo.style.display = "block";
  studentPhone.innerHTML = "0789-444-960";
}

function hideContactButton() {
  contactInfo.style.display = "none";
}

function changeStatus() {
  let newStatus = studentInput.value.trim();
  if (newStatus !== "") {
    studentStatus.innerHTML = newStatus;
    studentInput.value = "";
  }
}

updateStatusBtn.addEventListener("click", changeStatus);
hideContact.addEventListener("click", hideContactButton);
showEmailBtn.addEventListener("click", displyEmail);
showPhoneBtn.addEventListener("click", displyPhone);
