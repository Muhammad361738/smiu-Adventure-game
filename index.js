import inquirer from "inquirer";
// create player class 
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    // function when player fuel is decrease
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    // create function when user select fuel portion then player fuel will 100 for this
    fuelIncrease() {
        this.fuel = 100;
    }
}
// create opponent  class
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    // function when opponent fuel is decrease
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// create variable for user input to select his name
let playerName = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please Enter your Name : "
    }
]);
//create variable for user input to select his opponent 
let selectOpponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent : ",
        choices: ["Hulk", "Thor", "SuperMan"]
    }
]);
// add player name and opponent in new variable
let p1 = new player(playerName.name);
let o1 = new opponent(selectOpponent.select);
// using do while loop for player information 
do {
    // using if else for opponent selection 
    // select opponent
    // when user select hulk
    if (selectOpponent.select == "Hulk") {
        let ask = await inquirer.prompt([
            // choices what you will like to your opponent 
            {
                name: "opt",
                type: "list",
                message: "wHAT YOU LIKE TO DO",
                choices: ["Attack", "Drink Portion", "Run for Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            // when user select Attack then what will be do
            // then we give condition one person fuel  will be decrease
            let num = Math.floor(Math.random() * 2);
            if (num > 0) { // to see which person fuel is decrease 
                p1.fuelDecrease(); // function call when player fuel is decrease
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose ,'Better Luck For Next Time'");
                    process.exit();
                }
            }
            // to see which person fuel is decrease
            if (num <= 0) {
                // function call when opponent fuel is decrease
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win ");
                    process.exit();
                }
            }
        }
        // when user select drink portion
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink Health Portion Your fuel is ${p1.fuel}`);
        }
        // when user select for Run 
        if (ask.opt == "Run for Life") {
            console.log("You Loose ,'Better Luck For Next Time'");
            process.exit();
        }
    }
    // when user select thor
    if (selectOpponent.select == "Thor") {
        let ask = await inquirer.prompt([
            // choices what you will like to your opponent 
            {
                name: "opt",
                type: "list",
                message: "wHAT YOU LIKE TO DO",
                choices: ["Attack", "Drink Portion", "Run for Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            // when user select Attack then what will be do
            // then we give condition one person fuel  will be decrease
            let num = Math.floor(Math.random() * 2);
            if (num > 0) { // to see which person fuel is decrease 
                p1.fuelDecrease(); // function call when player fuel is decrease
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose ,'Better Luck For Next Time'");
                    process.exit();
                }
            }
            // to see which person fuel is decrease
            if (num <= 0) {
                // function call when opponent fuel is decrease
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win ");
                    process.exit();
                }
            }
        }
        // when user select drink portion
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink Health Portion Your fuel is ${p1.fuel}`);
        }
        // when user select for Run 
        if (ask.opt == "Run for Life") {
            console.log("You Loose ,'Better Luck For Next Time'");
            process.exit();
        }
    }
    // when user select SuperMan
    if (selectOpponent.select == "SuperMan") {
        let ask = await inquirer.prompt([
            // choices what you will like to your opponent 
            {
                name: "opt",
                type: "list",
                message: "wHAT YOU LIKE TO DO",
                choices: ["Attack", "Drink Portion", "Run for Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            // when user select Attack then what will be do
            // then we give condition one person fuel  will be decrease
            let num = Math.floor(Math.random() * 2);
            if (num > 0) { // to see which person fuel is decrease 
                p1.fuelDecrease(); // function call when player fuel is decrease
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose ,'Better Luck For Next Time'");
                    process.exit();
                }
            }
            // to see which person fuel is decrease
            if (num <= 0) {
                // function call when opponent fuel is decrease
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win ");
                    process.exit();
                }
            }
        }
        // when user select drink portion
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink Health Portion Your fuel is ${p1.fuel}`);
        }
        // when user select for Run 
        if (ask.opt == "Run for Life") {
            console.log("You Loose ,'Better Luck For Next Time'");
            process.exit();
        }
    }
} while (true);
