var Game;
var updateINV = 40;

Game = new variable();

function variable () {
  this.point = 0;
  this.prestigePoint = 0;
  this.infinityPoint = 0;
  this.clickAdd = 1;
  this.autoAdd = 0;
}

function TapIncrease () {
  Game.point += 1;
}

function pointGain(a) {
  Game.point += Game.autoAdd * a;
}

function tick() {
  let getInv = () => updateINV / 1000;
  pointGain(getInv());
  let point = Game.point;
  let pointUpdate = document.getElementById("point");
  
  pointUpdate.innerHTML = "You have $" + Game.point;
  SaveGame();
}
function WIPE() {
  Game = null;
  Game = new variable();
  SaveGame();
}

function SaveGame() {
  localStorage.removeItem("Main");
  let save = `${Game.point} ${Game.autoAdd}`;
  localStorage.setItem("Main", save);
}
function LoadGame() {
  let String = localStorage.getItem("Main").split(" ");
  if (String.length > 0) Game.point = String[0];
  if (String.length > 1) Game.autoAdd = String[1];
  SaveGame();
}

// update event
var UpdateInterval = null;
function setWindowEvent() {
  if (UpdateInterval != null) window.clearInterval(UpdateInterval);
  UpdateInterval = window.setInterval(tick, updateINV); // call tick() every updateINV(40) ms
}
LoadGame();
setWindowEvent();
