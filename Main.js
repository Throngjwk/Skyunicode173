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
  pointGain(getInv);
  let point = Game.point;
  let pointUpdate = document.getElementById("point");
  
  pointUpdate.innerHTML = "You have $" + Game.point;
  SaveGame();
}
function WIPE() {
  Game = null;
  Game = new variable();
}

function SaveGame() {
  localStorage.removeItem("point");
  localStorage.removeItem("autoAdd");
  localStorage.setItem("point", Game.point);
  localStorage.setItem("autoAdd", Game.autoAdd);
}
function LoadGame() {
  Game.point = localStorage.getItem("point");
  Game.autoAdd = localStorage.getItem("autoAdd");
  if (Game.point == NaN) Game.point = 0;
  if (Game.autoAdd == null) Game.autoAdd = 0;
}

// update event
var UpdateInterval = null;
function setWindowEvent() {
  if (UpdateInterval != null) window.clearInterval(UpdateInterval);
  UpdateInterval = window.setInterval(tick, updateINV); // call tick() every updateINV(40) ms
}
LoadGame();
setWindowEvent();
