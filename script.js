const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const question = document.getElementById("question");
const photos = document.getElementById("photos");

/* Move No button to a random spot */
function moveNoButton() {
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 240 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Yes button */
yesBtn.addEventListener("click", () => {
  title.textContent = "Te Dua Jet💕";
  question.textContent = "I appreciate everything about you and I will never stop loving you Tringushi jem💖";

  photos.classList.remove("hidden");

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

/* Desktop behavior */
noBtn.addEventListener("mouseover", moveNoButton);

/* Mobile behavior — move on every tap anywhere */
document.addEventListener("touchstart", () => {
  moveNoButton();
});
