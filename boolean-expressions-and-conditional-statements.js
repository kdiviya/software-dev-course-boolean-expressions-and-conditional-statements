/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasTent = true;
const hasCompass = true;
const hasSleepingBag = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains")
{
  const torchChoice = readline.question("Do you have torch?");
    if (torchChoice === "yes" && hasTorch){
      console.log("You safely navigate through the dark mountains.");
    }
    else if (torchChoice === "no" || (!hasTorch)) {
      console.log("It's too dark to proceed. Better stay and start tomorrow");
      const tentChoice = readline.question("Do you have lightweight tent?");
      if (tentChoice === "yes" && hasTent){
        console.log("Set up the tent and then spend the night");
      }
      else if (tentChoice === "no" || !hasTent){
        const sleepingBagChoice = readline.question("Do you have sleeping Bag?");
        if (sleepingBagChoice === "yes" && hasSleepingBag){
          console.log("Sleep and start tomorrow");
        }
        else if (sleepingBagChoice === "no" || !hasSleepingBag) {
          console.log("Go to safe place and stay calm");

        }
      }
} 
}

else if (choice === "village") 
  {
  const mapChoice = readline.question("Do you have Map?");
  if (mapChoice === "yes"  && (!hasMap))
  {
    console.log("You find your way to the village.");
  }
  else if (mapChoice === "no") {
    const compassChoice = readline.question("Do you have compass?");
    if (compassChoice === "yes" && hasCompass)
    {
    console.log("You find the direction using compass to proeceed the further path.");
    }
    else if (compassChoice === "no" || (!hasCompass))
    {
    console.log("Dont proceed, Wait for help");
  }
}
}
 else {
  console.log("You get lost and wander aimlessly.");
}
