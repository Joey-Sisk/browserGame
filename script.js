const primary = document.getElementById("primary");
const enemyHealth = document.getElementById("enemyHealth");
const enemyName = document.getElementById("enemyName");
const attack = document.getElementById("btnAtk");
const defend = document.getElementById("btnDef");
const spell = document.getElementById("btnSpl");
const item = document.getElementById("btnItm");
const characterLevel = document.getElementById("characterLevel");
const CharacterWeapon = document.getElemtById("charcterWeapon");
const startGame = document.getElementById("startButton");


function monsterLoad() {
  whatEnemy();
  switch(true) {
    case (playerStats.level < 5): currentMonster = monsterStats.giantRat;
      console.log(currentMonster);
      break;
    default: currentMonster = monsterStats.screamingMound;
      console.log(currentMonster);
  }
  enemyName.textContent = currentMonster.name;
  enemyHealth.textContent = currentMonster.health;
}

function whatEnemy() {
  if (playerStats.level < 5) {
    currentMonster = monsterStats.giantRat;
  }
}

function attackEvent() {
  console.log("attack");
}

function defendEvent() {
  console.log("defend");
}

function spellEvent() {
  console.log("spell");
}

function itemEvent() {
  console.log("item");
}

function startGame() {
  startButtonContainer.setAttribute("style", "display: none;");
  
  primary.append(combatScreen);
  
  monsterLoad();
}

attack.addEventListener("click", attackEvent);
defend.addEventListener("click", defendEvent);
spell.addEventListener("click", spellEvent);
item.addEventListener("click", itemEvent);

startGame.addEventListener("click", startGame)
