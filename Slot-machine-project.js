/*steps to consider: 
1.Deposit some money ----done 
2.Get number of lines bet is on ----done
3.collect a bet amount ----done
4.spin the slot machine
5.check if the user has won
6.give the user winnings 
7.chek if they want to play again
*/ 

const prompt = require("prompt-sync")(); 

const ROWS = 3;
const COLS = 3;
const SYMBOL_COUNT ={
    A : 2,
    B : 3,
    C : 4,
    D : 5,
}

const SYMBOL_VALUES ={
    A : 5,
    B : 4,
    C : 3,
    D : 2,
}


const deposit  = () =>  {
    while (true){
    const depositamount = prompt("Enter a deposit amount: ");
    // we have to change it to an integer
    const numberdepositeamount = parseFloat(depositamount);
    //check if the number inputed is valid or not
    if(isNaN(numberdepositeamount) || numberdepositeamount <= 0){
        console.log("Invlaid deposit amount, try again");
    } else {return numberdepositeamount;}
    }
};

const getnumberoflines = () => {
    while(true){
    const depositlines = prompt("Enter The number of lines you want to bet on : ");
    const linesint = parseInt(depositlines);
    if(isNaN(linesint) || linesint <= 0 || linesint > 3){
        console.log("Invlaid lines bet amount, Please try again");
    } else {return linesint;}
    }
};

const getBet = (Balance,depositlines) => {
    while(true){
    const gotbet = prompt("PLease enter the amount you want to bet: ");
    const betgotten = parseFloat(gotbet);

    if(isNaN(betgotten) || betgotten <=0 || betgotten > Balance /depositlines){
        console.log("Invalid number or inscufficient balance! ")
    }else{return betgotten;}
}
};


const spin = () =>{
    const symbols = [];
    for (const [symbol,count] of Object.entries(SYMBOL_COUNT)){
        for (let i= 0; i < count; i ++){
            symbols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++){
        const reelsymbols = [...symbols];
        for (let j = 0; j<ROWS; j++){
            const randomIndex = Math.floor(Math.random()* reelsymbols.length)
            const selectedsymbol = reelsymbols[randomIndex];
            reels[i].push(selectedsymbol);
            reelsymbols.splice(randomIndex,1);
        }
    }

    return reels;
};

const reels = spin();
console.log(reels);
let Balance = deposit();
const linesint = getnumberoflines();
const gotbetten = getBet(Balance);
console.log("your amount is:  " + Balance);
console.log("Lines betted on is:  " + linesint);
console.log("the amount you betted is: " + gotbetten);