const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const question = document.getElementById("question");
const photos = document.getElementById("photos");

yesBtn.addEventListener("click", () => {
  title.textContent = "Te Dua Jet💕";
  question.textContent = "I appreciate everything about you and I will never stop loving you Tringushi jem💖";

  photos.classList.remove("hidden");

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
