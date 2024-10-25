const iconDisplay = document.querySelector(".share-container");
const shareIcon = document.querySelector(".share-icon");

shareIcon.addEventListener("click", toggleDiv);

function toggleDiv() {
  iconDisplay.classList.toggle("active");
  shareIcon.classList.toggle("active");
}
