let balloon = document.getElementById("balloon");

document.addEventListener("mousemove", function (e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  let rect = balloon.getBoundingClientRect();
  let padding = 100;

  let left = rect.left - padding;
  let right = rect.right + padding;
  let top = rect.top - padding;
  let bottom = rect.bottom + padding;

  if(mouseX < right && mouseX > left && mouseY > top && mouseY < bottom) {
    console.log("near");
  }

  
});
