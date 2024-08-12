const buyBtns = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

function showmodal() {
  modal.classList.add("open");
}
function hidemodal() {
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showmodal);
}

modalClose.addEventListener("click", hidemodal);

modal.addEventListener("click", hidemodal);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
