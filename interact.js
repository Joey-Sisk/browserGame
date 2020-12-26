const primary = document.getElementById("primary");
const enemyHealth = document.getElementById("enemyHealth");
const enemyName = document.getElementById("enemyName");
const char1 = document.getElementById("char1");
const char2 = document.getElementById("char2");
const char3 = document.getElementById("char3");
const characterLevel = document.getElementById("characterLevel");
const CharacterWeapon = document.getElemtById("charStats");
const startGame = document.getElementById("startButton");


function monsterLoad() {
  whatEnemy();

  // create enemy and load it to the browser
  
  enemyName.textContent = currentMonster.name;
  enemyHealth.textContent = currentMonster.health;
}

function whatEnemy() {

  // determine what monster to load

}

function attack() {

  // when the attack button is clicked damage is calculated

  enemyTurn()

}

function enemyTurn() {

  // after the users turn the enemy gets a chance to attack
  // the enemy needs to pick a target and damage should be calculated

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
