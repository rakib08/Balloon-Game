let min = document.getElementById("min");
    let mid = document.getElementById("mid");
    let max = document.getElementById("max");

    let speed = 160;

    min.addEventListener("click", function(){
      speed = 300;
      console.log(300)
    } )

    mid.addEventListener("click", function(){
      speed = 140;
      console.log(160)
    } )

    max.addEventListener("click", function(){
      speed = 40;
      console.log(50)
    } )

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

  if(mouseX < right && mouseX > left && mouseY > top && mouseY < bottom) {
    let maxX = window.innerWidth - rect.width;
    let maxY = window.innerHeight - rect.height;

    let ranX = Math.random() * (maxX + 1);
    let ranY = Math.random() * (maxY + 1);

    let newX = Math.floor(ranX);
    let newY = Math.floor(ranY);

    balloon.style.left = newX + "px"
    balloon.style.top = newY + "px"



    balloon.style.transitionDuration = speed + "ms"

  }



  
});
