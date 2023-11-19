var totalDrumKeys = document.querySelectorAll(".drum").length;
console.log(totalDrumKeys);

var audioSource = {
  j: "./sounds/crash.mp3",
  k: "./sounds/kick-bass.mp3",
  l: "./sounds/snare.mp3",
  w: "./sounds/tom-1.mp3",
  a: "./sounds/tom-2.mp3",
  s: "./sounds/tom-3.mp3",
  d: "./sounds/tom-4.mp3",
};

for (var i = 0; i < totalDrumKeys; i++) {
  console.log("inside for loop i =" + i);
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function (event) {
      var clickedKey = event.target.innerText;
      console.log(clickedKey);
      var audio = new Audio(audioSource[clickedKey]);
      audio.play();
    });
}
