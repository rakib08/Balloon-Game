let min = document.getElementById("min");
let mid = document.getElementById("mid");
let max = document.getElementById("max");

// image change variables
let isNear = false;
let revertTimer = null;

// audio variables
let sfx = new Audio("asset/monkey.wav");
sfx.preload = "auto";

// sound button logic
let soundEnabled = false;
let soundBtn = document.getElementById("soundBtn");

soundBtn.addEventListener("click", function () {
  soundEnabled = !soundEnabled;

  if (soundEnabled) {
    soundBtn.textContent = "Sound ON ";
  } else {
    soundBtn.textContent = "Sound OFF";
  }
});

// speed controller logic
let speed = 160;

min.addEventListener("click", function () {
  speed = 300;
  console.log(300);
});

mid.addEventListener("click", function () {
  speed = 140;
  console.log(140);
});

max.addEventListener("click", function () {
  speed = 40;
  console.log(40);
});

let balloon = document.getElementById("balloon");

document.addEventListener("mousemove", function (e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  let rect = balloon.getBoundingClientRect();
  let padding = 50;

  let left = rect.left - padding;
  let right = rect.right + padding;
  let top = rect.top - padding;
  let bottom = rect.bottom + padding;

  if (mouseX < right && mouseX > left && mouseY > top && mouseY < bottom) {

    
    if (revertTimer) {
      clearTimeout(revertTimer);
      revertTimer = null;
    }

    
    if (!isNear) {
      balloon.classList.add("near");
      isNear = true;

      if (soundEnabled) {
        sfx.currentTime = 0;
        sfx.play();
      }
    }

    let maxX = window.innerWidth - rect.width;
    let maxY = window.innerHeight - rect.height;

    let newX = Math.floor(Math.random() * (maxX + 1));
    let newY = Math.floor(Math.random() * (maxY + 1));

    
    balloon.style.transitionDuration = speed + "ms";
    balloon.style.left = newX + "px";
    balloon.style.top = newY + "px";

  } else {

      if (isNear && !revertTimer) {
        revertTimer = setTimeout(function () {
          balloon.classList.remove("near");
          isNear = false;
          revertTimer = null;
        }, 300); // 0.3sec
      }
    }
});
