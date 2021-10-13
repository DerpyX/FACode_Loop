function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6); //selected random number between 0 and 1, multiplied by 6, rounded up and stored in die1
    var die2 = Math.ceil(Math.random() * 6);//selected random number between 0 and 1, multiplied by 6, rounded up and stored in die2
    var sum = die1 + die2 //adds die1 and die2 
    document.getElementById("die1Res").innerHTML = die1; //show die1 number
    document.getElementById("die2Res").innerHTML = die2;//show die2 number
    document.getElementById("sumRes").innerHTML = sum;  //show the total number

    if (sum == 7 || sum == 11) {// Reads the sum and If .... will write ....
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {// Reads the sum and if it's not the line before this then write ... if it is this
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";

    } else {// Reads the sum and If the other condistions are not meet then write this.
        document.getElementById("finalRes").innerHTML = "DRAW - please try again.";
    }
}




function blastOff() {
    var currTime = 50;
    document.getElementById("countdowntimer").innerHTML = currTime

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = "Blastoff"
    }, 50000);

}

function btrblastOff() {
    console.log("btrBlastOff() started");
    var currTime = 50;
    for (var i = 0; i < 10; i = i + 1) {
        setTimeout(function () {
            document.getElementById("countdowntimer").innerHTML = currTime;
            currTime = currTime - 1;
        }, 1000 * i);

    }

    setTimeout(function () {
        document.getElementById("countdowntimer").innerHTML = "blastoff!"

    }, 50000);

}