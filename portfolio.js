let currentReel = 0;

function scrollReels(direction) {
  const reels = document.querySelectorAll(".reel-card");
  currentReel += direction;

  if (currentReel < 0) currentReel = 0;
  if (currentReel >= reels.length) currentReel = reels.length - 1;

  reels[currentReel].scrollIntoView({
    behavior: "smooth",
    inline: "center"
  });
}
