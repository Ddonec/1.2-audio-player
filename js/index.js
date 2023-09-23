let audio = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let play = document.getElementById("div-play");
let pause = document.getElementById("div-pause");
let next = document.getElementById("div-next");
let prev = document.getElementById("div-prev");

document.querySelector(".btn-play").addEventListener("click", function () {
  audio.play();
  console.log("ok");
});

document.querySelector(".btn-pause").addEventListener("click", function () {
  audio.pause();
  audio2.pause();
  console.log("ok");
});

document.querySelector(".btn-next").addEventListener("click", function () {
  audio.pause();
  audio2.play();
  console.log("ok");
});

document.querySelector(".btn-prev").addEventListener("click", function () {
  audio.play();
  audio2.pause();
  console.log("ok");
});

play.addEventListener("click", function () {
  audio.play();
  play.classList.add("none");
  pause.classList.remove("none");
});

pause.addEventListener("click", function () {
  audio.pause();
  play.classList.remove("none");
  pause.classList.add("none");
});
