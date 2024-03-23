for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", onClick);
}
function onClick() {
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  animation(buttonInnerHtml);
}

document.addEventListener("keydown",Onkey);
function Onkey(){
  makeSound(event.key);
  animation(event.key);
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("touchstart", onClick);
}
function onClick() {
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  animation(buttonInnerHtml);
}


function makeSound(key){
  
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}

function animation(key){
  var activeButton =  document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100);
}