var cards = document.querySelectorAll(".flipCard-card");

cards.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const aa = e.target.parentElement;
    aa.classList.toggle("flipped");
  });
});
