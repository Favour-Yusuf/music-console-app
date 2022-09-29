const prompt = require("prompt-sync")();
console.log("Welcome to my Song challenge!");
let name = prompt("Please Enter your Name: ");

// console.log("");
console.log(`Welcome ${name},`);

while (true) {
  let song = prompt("Do you want to sing?:").toUpperCase();

  if (song === "YES") {
    console.log(prompt("Name of song?: "));
  } else if (song === "NO") {
    console.log(prompt("Oh....it saddens me to see you leave."));
  }

  while (true) {
    let goal = parseInt(prompt(`${name}, how long do you want to sing?: `));

    let entry = prompt(
      "Please Press Y to Continue or R to Reset your GOAL, otherwise Press Q to QUIT: "
    ).toUpperCase();

    if (entry === "Q") {
      console.log(`${name}, You goal has been terminated!`);
    } else if (entry === "R") {
      console.log("Want to reset your goal?....Let's do this.");
    } else if (entry === "Y") {
      while (true) {
        console.log("");
        console.log(`Your set GOAL to sing is ${goal}mins!`);

        let start = parseInt(prompt("How long do you want to sing?: "));

        if (start >= goal) {
          console.log("Your start point is possible");
          continue;
        } else if (goal <= 0) {
          console.log("Congratulations.....You have achieved your goal!");
          break;
        }
      }
      goal = goal - start;
      console.log(
        `Awesome ${name}, you have ${goal} mins left to go \n let's do this..!`
      );
    }
  }
}
