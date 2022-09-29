const prompt = require("prompt-sync")();
console.log("Welcome to joggerman app,");
let name = prompt( "Please Enter your name:");

// console.log("");
console.log(`Good day ${name}, good to have you back!`);

// console.log("");
while(true){
    let goal = parseInt( prompt("Please enter your set GOAL:"))

    let entry = prompt("Please press Y to CONTINUE or R to RESET your GOAL, Otherwise press Q to QUIT:");

    if (entry === "Q"){
        console.log(`Wow.... it really saddens my heart to see you go ${name}!`);
        break;
    }else if(entry === "R"){
        console.log(`Want to reset your GOAL...let's do this!`);
        continue;
    }
    else if(entry === "Y"){
    while(true){
        console.log("");
        console.log(`Your first jogging goal is ${goal}mins`);
        let start = parseInt(prompt("How long do you want to jog for?:"));

        if(start >= goal){
            console.log("Your start bpoint is impossible...!");
            continue;
        }else if(goal <= 0){
            console.log(`Congratulations...you've acheived your set GOAL`);
            break;
        }
        goal = goal - start
        console.log(`Awesome Ninja... you have ${goal} mins left to go \nLets do this!`);
    }
    }
}