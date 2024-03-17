console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio("assets/song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("myprogressbar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let song = [
  {
    songName: "Stay - Justin Bieber",
    filePath: "assets/song/1.mp3",
    coverPath: "assets/cover/1.jpg",
    timeStamp: "2:21",
  },
  {
    songName: "Pressure - Martin Garix",
    filePath: "assets/song/2.mp3",
    coverPath: "assets/cover/2.jpg",
    timeStamp: "2:24",
  },
  {
    songName: "Never gonna give you up - Rick Ashley",
    filePath: "assets/song/3.mp3",
    coverPath: "assets/cover/3.jpg",
    timeStamp: "3:32",
  },
  {
    songName: "Muskurahat - Mitraz",
    filePath: "assets/song/4.mp3",
    coverPath: "assets/cover/4.jpg",
    timeStamp: "4:12",
  },
  {
    songName: "Spaceship - Shinda Kehlon",
    filePath: "assets/song/5.mp3",
    coverPath: "assets/cover/5.jpg",
    timeStamp: "2:04",
  },
];

//Setting design
songItems.forEach((element, i) => {
  //Cover imaeg is set through this
  element.getElementsByTagName("img")[0].src = song[i].coverPath;
  //Songname is set on the Song  blocks
  element.getElementsByClassName("songName")[0].innerText = song[i].songName;
  //timestamp is set on the Song  blocks
  element.getElementsByClassName("timestamp")[0].innerText = song[i].timeStamp;
});

//Song control - Play Pause
masterPlay.addEventListener("click", () => {
  //On click it plays
  if (audioElement.paused || audioElement.currentTime <= 0) {
    //if song is playing the GIF and button icon is changed
    audioElement.play();
    masterPlay.className = "fa-solid fa-circle-pause";
    gif.style.opacity = 1;
  } else {
    //if song is paused the GIF and button icon is changed
    audioElement.pause();
    masterPlay.className = "fa-solid fa-circle-play";
    gif.style.opacity = 0;
  }
});

//listen time update
audioElement.addEventListener("timeupdate", () => {
  //update seekbar based on calculations
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressBar.value = progress;
});

//Interativeness of progress bar
progressBar.addEventListener("change", () => {
  //seek
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

//turn all the buttons to play
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

// Click listener on play button of the song
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `assets/song/${songIndex + 1}.mp3`;
      masterSongName.innerText = song[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

//click on next icon
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 4) songIndex = 0;
  else {
    songIndex += 1;
  }
  audioElement.src = `assets/song/${songIndex + 1}.mp3`;
  masterSongName.innerText = song[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

//click on previous icon
document.getElementById("prev").addEventListener("click", () => {
  if (songIndex <= 0) songIndex = 4;
  else {
    songIndex -= 1;
  }
  audioElement.src = `assets/song/${songIndex + 1}.mp3`;
  masterSongName.innerText = song[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
