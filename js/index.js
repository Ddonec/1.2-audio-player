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

var transformValue = window.getComputedStyle(logo).getPropertyValue("transform");

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
  {
    title: "Где нас нет",
    artist: "Oxxxymiron",
    img: "logo7",
    src: "oxxxymiron_-_gde-nas-net",
  },
  {
    title: "Город под подошвой",
    artist: "Oxxxymiron",
    img: "logo8",
    src: "oxxxymiron_-_gorod-pod-podoshvoy",
  },
  {
    title: "Башня из слоновой кости",
    artist: "Oxxxymiron",
    img: "logo9",
    src: "oxxxymiron_-_bashnya-iz-slonovoy-kosti",
  },
];



let indexOfSong = 7;
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
  bg.src = `assets/images/${playlist[count - 1].img + ".jpg"}`;
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

function start() {
  play.classList.add("none");
  pause.classList.remove("none");
  logo.classList.add("active");
  logo.style.animationPlayState = "running"
  audio.play();
}

//кнопка старт

play.addEventListener("click", function () {
  start();

});
//кнопка паузы (дефолтно скрыта)
pause.addEventListener("click", function () {
  play.classList.remove("none");
  pause.classList.add("none");
  // logo.classList.remove("active");
  logo.style.animationPlayState = "paused"
  audio.pause();

});
//кнопка следующего трека
function nextTrack() {
  if (indexOfSong == playlist.length) {
    indexOfSong = 1;
    start();
  } else indexOfSong++;
  console.log("ok");
  audioLoad(indexOfSong);
  start();
}

next.addEventListener("click", nextTrack);
// кнопка прошлого трека
prev.addEventListener("click", function () {
  if (indexOfSong == 1) {
    indexOfSong = playlist.length;
    start();
  } else indexOfSong--;
  console.log("ok");
  audioLoad(indexOfSong);
  start();
});
// прогрессбар
audio.addEventListener("timeupdate", function (e) {
  const time = e.target.currentTime;
  const duration = e.target.duration;
  let width = (time / duration) * 100;
  document.getElementById("progress-line").style.width = `${width + "%"}`;
});
// клик по прогрессбару
progressBar.addEventListener("click", function (value) {
  let songDuration = audio.duration;
  let progressWidth = progressBar.clientWidth;
  let clickedOffsetX = value.offsetX;
  audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
});
// таймер под прогрессбаром
audio.addEventListener("timeupdate", function (e) {
  const time = e.target.currentTime;
  // let m1 = String((time / 60).toFixed(2))
  // let s1 = m1.split('.')[1]
  // let value1 = Number(Math.trunc((m1) + (s1 / 60)).toFixed(2)
  let m1 = Math.floor(time / 60);
  let s1 = Math.floor(time % 60);
  const duration = e.target.duration;
  let s2 = Math.floor(duration % 60);
  let m2 = Math.floor(duration / 60);
  if (s1 < 10) {
    s1 = "0" + s1;
  }
  if (m1 < 10) {
    m1 = "0" + m1;
  }
  if (s2 < 10) {
    s2 = "0" + s2;
  }
  if (m2 < 10) {
    m2 = "0" + m2;
  }
  if (isNaN(duration)) {
    value1 = ''
  }


  let value1 = m2 + ":" + s2;
  document.getElementById("start").textContent = m1 + ":" + s1;
  document.getElementById("end").textContent = value1;
});
// переключить на следующий когда закончился трек

audio.addEventListener("ended", nextTrack);


;
