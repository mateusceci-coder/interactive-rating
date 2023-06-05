const notes = document.querySelectorAll("[data-value]");
const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");
const button = document.querySelector("button");
const finalRate = document.querySelector("#finalRate");

let rating;

notes.forEach((note) => {
  note.addEventListener("click", removeClass);
});

function removeClass() {
  notes.forEach((note) => {
    note.classList.remove("selected-ball");
  });
}

notes.forEach((note) => {
  note.addEventListener("click", (ev) => {
    ev.target.classList.add("selected-ball");
    rating = note.getAttribute("data-value");
  });
});

button.addEventListener("click", () => {
  board1.style.display = "none";
  board2.style.display = "flex";
  finalRate.textContent = `${rating}`;
});
