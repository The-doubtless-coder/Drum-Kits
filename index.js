// const snareButtonEl = document.querySelector(".btnS");
// const kickButtonEl = document.querySelector(".btnK");
// const crashButtonEl = document.querySelector(".btnC");
// const tomButtonEl = document.querySelector(".btnT");

// const snareAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/6767");
// const crashAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/6664");
// const kickAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/1156");
// const tomAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/6724");

// snareButtonEl.addEventListener("click", () => {
//   snareAudio.play();
// });
// kickButtonEl.addEventListener("click", () => {
//   kickAudio.play();
// });
// crashButtonEl.addEventListener("click", () => {
//   crashAudio.play();
// });
// tomButtonEl.addEventListener("click", () => {
//   tomAudio.play();
// });

// document.addEventListener(
//   "keypress",
//   (event) => {
//     var name = event.key;
//     console.log(name);
//     console.log(typeof name);
//     if (name === "s") {
//       snareAudio.play();
//     } else if (name === "k") {
//       kickAudio.play();
//     } else if (name === "c") {
//       crashAudio.play();
//     } else if (name === "t") {
//       tomAudio.play();
//     }
//   },
//   false
// );

const kits = ["kick", "crash", "snare", "tom"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = kit;
  btn.style.backgroundImage = "url(img/" + kit + ".png)";
  containerEl.appendChild(btn);
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);
  btn.addEventListener("click", () => {
    audioEl.play();
  });
  window.addEventListener("keydown", (event) => {
    // console.log(event.key);
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btn.style.transform = "scale(.8)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 100);
    }
  });
});
