const overlay = document.getElementById("overlay");
const img = document.getElementById("overlayImg");
const text = document.getElementById("overlayText");
const video = document.getElementById("overlayVideo");

function openItem(num) {
  overlay.style.display = "flex";
  img.style.display = "block";
  video.style.display = "none";

  img.src = `media/photo${num}.jpg`;

  const messages = {
    1: "The first time I realized you were special.",
    2: "Some moments don’t need words.",
    3: "This smile is my favorite place."
  };

  text.innerText = messages[num];
}

function openVideo() {
  overlay.style.display = "flex";
  img.style.display = "none";
  video.style.display = "block";
  text.innerText = "This one is my heart, not just a memory.";
}

function closeOverlay() {
  overlay.style.display = "none";
  video.pause();
}
