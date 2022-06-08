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


function tick() {
  let point = Game.point;
  let pointUpdate = document.getElementById("point");
  let getInv = () => 1000 / updateINV;
  pointUpdate.innerHTML = "You have $" + Game.point;
  
}

// update event
var UpdateInterval = null;
function setWindowEvent() {
  if (UpdateInterval != null) window.clearInterval(UpdateInterval);
  UpdateInterval = window.setInterval(tick, updateINV); // call tick() every updateINV(40) ms
}
setWindowEvent();
