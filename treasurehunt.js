var crown = Math.floor(Math.random()*9)
var bomb1 = Math.floor(Math.random()*9)
var bomb2 = Math.floor(Math.random()*9)
var clickCounter = 3
var bombFound = false
var crownFound = false
const treasure = (location) => {
  if (bombFound === true) {
    alert("Must restart the game. You already hit a bomb!")
  } else if (crownFound === true) {
    alert("You already found the treasure! You must restart to try again.") 
  } else if (clickCounter === 0) {
    alert("You lose! Searched too many times!")
  } else {
    clickCounter --;
    if(location === crown){
      document.getElementById(location).innerHTML = "👑"
      alert("You win! You found the 👑!")
      crownFound = true
    } else if(location === bomb1){
      document.getElementById(location).innerHTML = "💣"
      alert("You lose! You found the 💣!")
      bombFound = true
    } else if(location === bomb2){
      document.getElementById(location).innerHTML = "💣"
      alert("You lose! You found the 💣!")
      bombFound = true
    } else {
      document.getElementById(location).innerHTML = "&#x1f332"
    }
  }
  document.getElementById("clicks").textContent = "Clicks left: " + clickCounter
  if(clickCounter === 0) {
      return document.getElementById("message").textContent = "No more clicks left"
  } else {
      return document.getElementById("message").textContent = "No more clicks left"
  }
}