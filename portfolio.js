document.querySelectorAll(".masonry-item").forEach(item => {
  
  const video = item.querySelector("video");
  const img = item.querySelector("img");
  const playBtn = item.querySelector(".play-btn");
  const soundBtn = item.querySelector(".sound-btn");

  /* ---------- 1. AUTO DETECT MEDIA ORIENTATION ---------- */

  // For videos
  if (video) {
    video.addEventListener("loadedmetadata", () => {
      const { videoWidth, videoHeight } = video;

      if (videoHeight > videoWidth) {
        item.classList.add("vertical");
      } else {
        item.classList.add("horizontal");
      }
    });
  }

  // For images
  if (img) {
    img.onload = () => {
      const { naturalWidth, naturalHeight } = img;

      if (naturalHeight > naturalWidth) {
        item.classList.add("vertical");
      } else {
        item.classList.add("horizontal");
      }
    };
  }

  /* ---------- 2. PLAY / PAUSE BUTTON ---------- */

  if (playBtn && video) {
    playBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playBtn.textContent = "⏸️";
      } else {
        video.pause();
        playBtn.textContent = "▶️";
      }
    });
  }

  /* ---------- 3. MUTE / UNMUTE BUTTON ---------- */

  if (soundBtn && video) {
    video.muted = true; // start muted

    soundBtn.addEventListener("click", () => {
      video.muted = !video.muted;

      soundBtn.textContent = video.muted ? "🔇" : "🔊";

      if (!video.paused && !video.muted) {
        video.play();
      }
    });
  }

});
