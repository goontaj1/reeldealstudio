let currentReel = 0;

function scrollReels(direction) {
  const track = document.querySelector(".reels-track");
  const reels = document.querySelectorAll(".reel-card");

  if (!track || reels.length === 0) return;

  currentReel += direction;

  if (currentReel < 0) currentReel = 0;
  if (currentReel >= reels.length) currentReel = reels.length - 1;

  const reelWidth = reels[0].offsetWidth;
  const gap = 60; // must match CSS gap
  const offset = currentReel * (reelWidth + gap);

  track.style.transform = `translateX(-${offset}px)`;
}
