var playerName = window. prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log (playerName,playerAttack,playerHealth);

var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    
    //skip fight option
    var promptFight = window.prompt( "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose")
    //fight means fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log (playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining.");

     // check enemys health
     if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert (enemyName + " still has " + enemyHealth + " health left. " );
    }

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack
  // Log a resulting message to the console so we know that it worked.
  console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining " );
    // check enemys health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
    }
    else (playerHealth > 0) 
    {window.alert (playerName + " still has " + playerHealth + " health left. " );}
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm skip
    var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight. Goodbye!");
    playerMoney = playerMoney -2; }
    else {
        fight ()
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
  };

  // game states
  //"WIN" player robot has defeated all enemy robots
  //fight all enemy robots
  //defeat each enemy robot
  //"LOSE" player robots health is zero or less
} ;

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  while (enemyHealth > 0) {
  fight (pickedEnemyName); 
  }
}