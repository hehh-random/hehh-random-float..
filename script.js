function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 200);