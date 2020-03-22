let cheesePerSec = 0;

let cheese = 10000;
let clickUpgrades = {
  pickaxes: {
    price: 100,
    quantity: 0,
    multiplier: 10
  },
  shovel: {
    price: 150,
    quantity: 0,
    multiplier: 30
  }
}
let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  scout: {
    price: 1000,
    quantity: 0,
    multiplier: 35
  }
}

function mine() {
  cheese++
  cheese += modNum()
  update()
}


function buyPickaxe() {
  if (cheese >= clickUpgrades.pickaxes.price) {
    clickUpgrades.pickaxes.quantity++;
    cheese -= clickUpgrades.pickaxes.price;
    update()
    clickUpgrades.pickaxes.price += 50;
  }
}
function buyShovel() {
  if (cheese >= clickUpgrades.shovel.price) {
    clickUpgrades.shovel.quantity++;
    cheese -= clickUpgrades.shovel.price;
    update()
    clickUpgrades.shovel.price += 75
  }
}
function buyRover() {
  if (cheese >= automaticUpgrades.rovers.price) {
    automaticUpgrades.rovers.quantity++;
    cheese -= automaticUpgrades.rovers.price;
    update()
    automaticUpgrades.rovers.price += 200
  }
}
function buyScout() {
  if (cheese >= automaticUpgrades.scout.price) {
    automaticUpgrades.scout.quantity++;
    cheese -= automaticUpgrades.scout.price;
    update()
    automaticUpgrades.scout.price += 300
  }
}


//function creates interval on pageload, added 0, 

function collectAutoUpgrades() {
  let autoUpgrades = (automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier) + (automaticUpgrades.scout.quantity * automaticUpgrades.scout.multiplier)
  cheesePerSec = (automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier) + (automaticUpgrades.scout.quantity * automaticUpgrades.scout.multiplier)
  cheese += autoUpgrades
  update()
} 


// setInterval(  
//   , 3000);

function modNum() {
  let modNumber = (clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier) + (clickUpgrades.shovel.quantity * clickUpgrades.shovel.multiplier)
  let modNum = modNumber;
  return modNum;
}

function update() {
  let cheeseCount = document.getElementById("cheese-counter")
  cheeseCount.innerText = "Cheese: " + cheese;
  let pickaxeCount = document.getElementById("pickaxe-counter")
  pickaxeCount.innerText = "Pickaxes: " + clickUpgrades.pickaxes.quantity;
  let shovelCount = document.getElementById("shovel-counter")
  shovelCount.innerText = "Shovels: " + clickUpgrades.shovel.quantity;
  let roverCount = document.getElementById("rover-counter")
  roverCount.innerText = "Rovers: " + automaticUpgrades.rovers.quantity;
  let scoutCount = document.getElementById("scout-counter")
  scoutCount.innerText = "Scouts: " + automaticUpgrades.scout.quantity;
  let cheeseAdded = document.getElementById("cheese-added")
  cheeseAdded.innerText = "+" + cheesePerSec + " 3/sec";
  let shovelAdd = document.getElementById("shovel-add")
  shovelAdd.innerText = "+" + (clickUpgrades.shovel.quantity * clickUpgrades.shovel.multiplier)
  let pickaxeAdd = document.getElementById("pickaxe-add")
  pickaxeAdd.innerText = "+" + (clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier)

  let roverAdd = document.getElementById("rover-add")
  roverAdd.innerText = "+" + (automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier)
  let scoutAdd = document.getElementById("scout-add")
  scoutAdd.innerText = "+" + (automaticUpgrades.scout.quantity * automaticUpgrades.scout.multiplier)
}