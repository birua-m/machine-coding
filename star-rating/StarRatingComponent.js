const starContainer = document.getElementById("starRating");
let currentRating = 0;

for (let i = 1; i <= 5; i++) {
  const star = document.createElement("span");
  star.classList.add("star");
  star.innerHTML = "&#9733;";
  star.dataset.value = i;

  star.addEventListener("click", () => {
    currentRating = i;
    updateStars();
  });

  star.addEventListener("mouseover", () => highlightStars(i));
  star.addEventListener("mouseout", () => highlightStars(currentRating));

  starContainer.appendChild(star);
}

function updateStars() {
  highlightStars(currentRating);
}

function highlightStars(value) {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.classList.toggle("selected", star.dataset.value <= value);
  });
}