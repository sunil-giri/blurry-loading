const bg = document.querySelector(".bg-image");
const loadingText = document.querySelector(".loading-text");

let val = 0;

const int = window.setInterval(loadingImage, 30);

function loadingImage() {
  val++;
  if (val > 99) {
    clearInterval(int);
  }
  loadingText.innerText = `${val}%`;
  bg.style.filter = `blur(${scale(val, 0, 100, 30, 0)}px)`;
  loadingText.style.opacity = `${scale(val, 0, 100, 1, 0)}`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
