function hideCourseInfo(event) {
  const card = event.target.closest(".card");
  const courseInfo = card.querySelector(".courseInfo");
  courseInfo.style.display = "none";
}

function showCourseInfo(event) {
  const card = event.target.closest(".card");
  const courseInfo = card.querySelector(".courseInfo");
  courseInfo.style.display = "block";
}

let hideButtons = document.querySelectorAll(".hideCourseBtn");
let showButtons = document.querySelectorAll(".showCourseBtn");

hideButtons.forEach(addHideFunction);

showButtons.forEach(addShowFunction);

function addHideFunction(btn) {
  btn.addEventListener("click", hideCourseInfo);
}

function addShowFunction(btn) {
  btn.addEventListener("click", showCourseInfo);
}
