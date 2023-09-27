const open = document.getElementById("open");
const aside = document.getElementById("aside");
const openMain = document.getElementById("open-main");
const openIcon = document.querySelector(".open i");

open.onclick = function () {
  aside.classList.toggle("open-aside");
  openMain.classList.toggle("open-main");

  const isOpen = openMain.classList.contains("open-main");

  openIcon.classList = isOpen ? "bi bi-x" : "bi bi-list";
};
