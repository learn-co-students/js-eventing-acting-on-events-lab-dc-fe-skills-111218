var dodger = document.getElementById("dodger");

function moveDodgerRight() {
  var leftNumber = dodger.style.left.replace("px", ""); 
  var left = parseInt(leftNumber, 10);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", e => {if (e.which === 39) {
  moveDodgerRight()
}
})

