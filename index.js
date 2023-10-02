const open = document.getElementById("open");
const aside = document.getElementById("aside");
const openMain = document.getElementById("open-main");
const openIcon = document.querySelector(".open i");

const readMores = document.querySelectorAll(".read-more");
const hTexts = document.querySelectorAll(".hidden-txt");

open.onclick = function () {
  aside.classList.toggle("open-aside");
  openMain.classList.toggle("open-main");

  const isOpen = openMain.classList.contains("open-main");

  openIcon.classList = isOpen ? "bi bi-x" : "bi bi-list";
};

// Add a click event listener to each "read-more" element
readMores.forEach(function (readMore, text) {
  // Add an event listener to each "read-more" element
  readMore.addEventListener("click", function () {
    // Get the corresponding "hidden-txt" element for the clicked "read-more"
    const hText = hTexts[text];

    // Toggle the visibility of the corresponding "hidden-txt" element
    hText.classList.toggle("hidden-txt");

    // Update the text content of the clicked "read-more" element
    this.textContent = hText.classList.contains("hidden-txt")
      ? "READ MORE"
      : "SHOW LESS";
  });
});
