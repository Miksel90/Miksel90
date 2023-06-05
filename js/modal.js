const modalImg = document.querySelector('.modal-image');
const modal = document.querySelector('.modal');

function modalFunc() {
  const images = document.querySelectorAll(".card-image");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal-image");

  images.forEach(function(image) {
    image.addEventListener("click", function() {
      modal.showModal();
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });

  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.close();
    }
  });
}
