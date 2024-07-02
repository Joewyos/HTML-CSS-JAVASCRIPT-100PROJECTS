const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 1, 0);
  background.style.filter = `blur(${scale(load, 30, 0)}px)`;
}

const scale = (num, out_min, out_max) => {
  return (num * (out_max - out_min)) / 100 + out_min;
};
