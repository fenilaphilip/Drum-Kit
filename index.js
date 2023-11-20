var totalDrumKeys = document.querySelectorAll(".drum").length;
console.log(totalDrumKeys);

var audioSource = {
  j: "./sounds/crash.mp3",
  k: "./sounds/snare.mp3",
  l: "./sounds/kick-bass.mp3",
  w: "./sounds/tom-1.mp3",
  a: "./sounds/tom-2.mp3",
  s: "./sounds/tom-3.mp3",
  d: "./sounds/tom-4.mp3",
};

document.querySelectorAll(".drum").forEach(function (button) {
  button.addEventListener("click", function (event) {
    var clickedButton = event.target.innerText;
    console.log(clickedButton);
    makeSound(clickedButton);
  });
});

document.addEventListener("keypress", function (event) {
  var clickedKey = event.key;
  console.log(clickedKey);
  makeSound(clickedKey);
});

function makeSound(Key) {
  var audio = new Audio(audioSource[Key]);
  audio.play();
}
