var totalDrumKeys = document.querySelectorAll(".drum").length;
console.log(totalDrumKeys);

for (var i = 0; i < totalDrumKeys; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

function handleclick() {
  alert("I am clicked");
}
