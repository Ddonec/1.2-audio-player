let audio = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let play = document.getElementById("div-play");
let pause = document.getElementById("div-pause");
let next = document.getElementById("div-next");
let prev = document.getElementById("div-prev");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let logo = document.getElementById("logo");
let progressBar = document.querySelector(".progress-bar");
let bg = document.getElementById("bg-img");
let playlist = [
  {
    title: "Красота и уродство",
    artist: "Oxxxymiron",
    img: "logo1",
    src: "krasota-i-urodstvo",
  },
  {
    title: "КТО УБИЛ МАРКА",
    artist: "Oxxxymiron",
    img: "logo2",
    src: "kto-ubil-Marka",
  },
  {
    title: "Неваляшка",
    artist: "Oxxxymiron",
    img: "logo3",
    src: "nevalyashka",
  },
  {
    title: "Нон-фикшн",
    artist: "Oxxxymiron",
    img: "logo4",
    src: "non-fikshn",
  },
  {
    title: "ОРГАНИЗАЦИЯ",
    artist: "Oxxxymiron",
    img: "logo5",
    src: "organization",
  },
  {
    title: "Полигон",
    artist: "Oxxxymiron",
    img: "logo6",
    src: "poligon",
  },
];

let indexOfSong = 1;
isMusicPaused = true;

window.addEventListener("load", function () {
  audioLoad(indexOfSong);
  // playingSong();
});

function audioLoad(count) {
  title.innerText = playlist[count - 1].title;
  artist.innerText = playlist[count - 1].artist;
  logo.src = `assets/images/${playlist[count - 1].img + ".jpg"}`;
  audio.src = `assets/audio/${playlist[count - 1].src + ".mp3"}`;
  bg.src = `assets/images/${playlist[count - 1].img + ".jpg"}`
}

// document.querySelector(".btn-play").addEventListener("click", function () {
//   audio.play();
//   console.log("ok");
// });

// document.querySelector(".btn-pause").addEventListener("click", function () {
//   audio.pause();
//   audio2.pause();
//   console.log("ok");
// });

// document.querySelector(".btn-next").addEventListener("click", function () {
//   audio.pause();
//   audio2.play();
//   console.log("ok");
// });

// document.querySelector(".btn-prev").addEventListener("click", function () {
//   audio.play();
//   audio2.pause();
//   console.log("ok");
// });
//кнопка старт
play.addEventListener("click", function () {
  play.classList.add("none");
  pause.classList.remove("none");
  audio.play();
});
//кнопка паузы (дефолтно скрыта)
pause.addEventListener("click", function () {
  play.classList.remove("none");
  pause.classList.add("none");
  audio.pause();
});
//кнопка следующего трека
next.addEventListener("click", function () {
  if (indexOfSong == playlist.length) {
    indexOfSong = 1;
    audio.play();
  } else indexOfSong++;
  console.log("ok");
  audioLoad(indexOfSong);
  audio.play();
});
// кнопка прошлого трека
prev.addEventListener("click", function () {
  if (indexOfSong == 1) {
    indexOfSong = playlist.length;
    audio.play();
  } else indexOfSong--;
  console.log("ok");
  audioLoad(indexOfSong);
  audio.play();
});
// прогрессбар
audio.addEventListener("timeupdate", function (e) {
  const time = e.target.currentTime;
  const duration = e.target.duration;
  let width = (time / duration) * 100;
  console.log(width);
  document.getElementById("progress-line").style.width = `${width + "%"}`;
});
// клик по прогрессбару
progressBar.addEventListener("click", function (value) {
  let songDuration = audio.duration;
  let progressWidth = progressBar.clientWidth;
  let clickedOffsetX = value.offsetX;
  audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
});
