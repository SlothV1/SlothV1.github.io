// Copyright 2026 Grant Kimball. All rights reserved.

document.getElementById('tutorial').style.opacity = "0";
let started = false;
let wondaily = false;
let inputfield = document.getElementById("answer");
inputfield.maxLength = 10;
inputfield.chara

function dogame(gamemode1){

document.getElementById("uniquebutton").onclick = function(){
    tutorial1();
}


document.getElementById("answer").focus();

//EASY

function arithmatic(start, slope){
    let seq = [];
    for(let i =0; i<16; i++){
        seq.push(start+i*slope);
        console.log(seq[i]);
    }
    return seq;
}

function geometric(start, mult){
    let seq =[];
    for(let i =0; i<16; i++){
        seq.push(start*mult**i);
        console.log(seq[i]);
        
    }
    return seq;
}
//--------------------------------

//MEDIUM

function arithmatic2(start){
    let seq = [];
    let add = Math.floor(Math.random()*10)+1;
    let sub = -1*Math.ceil(Math.random()*10);
    for(let i =0; i<16; i++){
        if (i === 0) {
            seq.push(start);
        }
        else if (i % 2 === 0) {
            seq.push(seq[i-1]+add);
            console.log(seq[i]);
        }
        else if (i % 2 != 0) {
            seq.push(seq[i-1]+sub);
            console.log(seq[i]);
        }

    }
    return seq;
}

function recursive(start2){
    let seq = [start2, start2];
    for(let i = 2; i<16; i++){
        seq.push(seq[i-1] + seq[i-2]);
        console.log(seq[i]);
    }
    return seq;
}
//--------------------------------


//HARD

function recursiveran(start2){
    let rand = Math.floor(Math.random()*21)-10;
    let seq = [start2, start2+rand];
    for(let i = 2; i<16; i++){
        seq.push(seq[i-1] + seq[i-2]+rand);
        console.log(seq[i]);
    }
    return seq;
}

function DA3(start){
    let seq = [start];

    var slope = Math.floor(Math.random()*10)+1;;
    let randommult = Math.floor(Math.random()*3)+1;

    var functions = ["add", "sub"];

    var arithmatic = functions[Math.floor(Math.random()*2)];
    var randomadd = Math.floor(Math.random()*13)+1;;


    if (slope % 2 === 0){
        slope++;
    }
    if (randomadd % 2 == 0){
        randomadd++;
    }
    if (randommult === 1){
        randommult++;
    }
    if (randommult % 2 === 0){
        randommult++;
    }


    console.log(slope, randommult, arithmatic, randomadd)

    for (let i=0; i<16; i++){

        let prev = seq[seq.length - 1] ?? start;

        if (prev % 2 === 0){
            seq.push(prev+slope);
        }    
        else {
            if (arithmatic == "add"){
                seq.push(randommult*prev + randomadd);
            }
            else {
                seq.push(randommult*prev - randomadd);
            }

        }
        console.log(seq[i]);
        
    }
    return seq;
}


function RATS(start){
    let seq = [start];
    for (let i = 0; i<16; i++){
        let prev = seq[seq.length - 1];
        let reversed = Number(String(prev).split("").reverse().join(""));
        seq.push(prev + reversed)
        console.log(seq[i])
    }
    return seq;
}

//--------------------------------

//DISPLAYING NUMBERS

function writenumbers(seq){
    let x1 = Math.floor(Math.random()*7)+1;;
    let x2 = Math.floor(Math.random()*7)+9;;

    blank1 = seq[x1];
    blank2 = seq[x2];
    seq[x1] = "";
    seq[x2] = "";



    for(let i =0; i<16; i++){



        let h = "myH"+ String(i+1);

        document.getElementById(h).style.backgroundColor = "white" ;

        if (seq[i] === seq[x2] || seq[i] === seq[x1]) {
            document.getElementById(h).style.backgroundColor = "blanchedalmond";
        }

        document.getElementById(h).textContent = seq[i];

        let el = document.getElementById(h);
        let length = 30;
        el.style.fontSize = length +"px";

        while (el.scrollWidth > el.clientWidth && length > 10){
            length-=1;
            el.style.fontSize = length + "px";
        }

    }
}

//--------------------------------

// VARIABLES FOR VARIOUS SEQUENCES

let start = Math.floor(Math.random()*5)+1;
let slope = Math.floor(Math.random()*10)+1;
let multlist = [-2, 2];
let mult = multlist[Math.floor(Math.random()*multlist.length)]
let start2 = Math.floor(Math.random()*20)+1;



if (start2 === 5 || start2 === 10 || start2 === 20){
    start2--;
}

//--------------------------------

//SEQUENCE CHOOSING

let sequence;
if (gamemode1 == "easy"){
    let operations = ["arithmatic", "geometric"];
    let randomoperation = Math.floor(Math.random()*operations.length);
    let operation = operations[randomoperation];
    console.log(operation);

    if (operation === "arithmatic"){
        sequence = arithmatic(start, slope);
    }
    if (operation === "geometric"){
        sequence = geometric(start, mult);
    }
}
if (gamemode1 == "hard"){
    let operations = ["recursive+ran", "RATS", "DA3"];
    let randomoperation = Math.floor(Math.random()*operations.length);
    let operation = operations[randomoperation];
    console.log(operation)

    if (operation === "recursive+ran"){
        sequence = recursiveran(start2);
    }
    if (operation === "RATS"){
        sequence = RATS(start);
    }
   if (operation === "DA3"){
        sequence = DA3(start)
    }
    
    
}
if (gamemode1 == "medium"){
    let operations = ["arithmatic2", "recursive"];
    let randomoperation = Math.floor(Math.random()*operations.length);
    let operation = operations[randomoperation];
    console.log(operation)

    if (operation === "arithmatic2"){
        sequence = arithmatic2(start, slope);
    }
    if (operation === "recursive"){
        sequence = recursive(start2);
    }
    
    
}

//--------------------------------




let blank1;
let blank2;

writenumbers(sequence);


//WIN CONDITION

console.log(blank1, blank2);
document.getElementById("button").onclick = function(){

    response = document.getElementById("answer").value;
    if (response == String(blank1) + String(blank2) || response == String(blank1)+", "+String(blank2) || response == String(blank1)+","+String(blank2) || response == String(blank1)+" "+String(blank2)) {
        console.log("CONGRATS!!!!");
        document.getElementById("Message").textContent = "You won!";

        setTimeout(() => {
            document.getElementById("Message").textContent = "";
            document.getElementById("answer").value = ``;
            dogame(gamemode1);
        }, 2000);}

        else {

        console.log("Incorrect");
        document.getElementById("Message").textContent = "Incorrect";
        setTimeout(() => {
            document.getElementById("Message").textContent = "";
        }, 2000);}

    }
}

//-------------------------------- END OF FUNCTION

document.getElementById("answer").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("button").click();
    }
});

document.getElementById("answer").addEventListener("blur", function(){
    document.getElementById("answer").focus();
})



//GAMEMODE SELECTION

function gamemode(){
    document.getElementById("uniquebutton").onclick = function(){
        tutorial1();
    }

    let square2 = document.getElementById("square2");
    square2.hidden = true;
    
    let gamemode1;
    let square = document.getElementById("square");
    square.hidden = false;

    document.getElementById("Easy").onclick = function(){
        started = true;
        gamemode1 = "easy";
        square.hidden=true;
        console.log(gamemode1);
        dogame(gamemode1);
    }
    document.getElementById("Hard").onclick = function(){
        started = true;
        gamemode1 = "hard";
        square.hidden=true;
        console.log(gamemode1);
        dogame(gamemode1);

    }
    document.getElementById("Mid").onclick = function(){
        started = true;
        gamemode1 = "medium";
        square.hidden=true;
        console.log(gamemode1);
        dogame(gamemode1);
    }
}

gamemode();

//--------------------------------

//TUTORIAL

function tutorial1(){

    const square2 = document.getElementById("square2");
    const square = document.getElementById("square");

    let tutorial = document.getElementById("tutorial");
    if (tutorial.style.opacity == "1"){
        square2.hidden = true;
        if (started == true){
            square.hidden = true;
            }
    
        else if (started == false){
            square.hidden = false;
        }
        tutorial.style.opacity = "0";
    }
    else if (tutorial.style.opacity == "0"){
        if (started == true){
        square2.hidden = false;
        square.hidden = false;
        }

        else if (started == false){
            square2.hidden = false;
            square.hidden = false;
        }

        tutorial.style.opacity = "1";
    }
}
//--------------------------------

//DAILY

function daily(){
    started = true
    const square = document.getElementById("square");
    console.log("Daily")
    square.hidden = true

    let dailylist = ["5", "", "8", "", "15", "20", "26", "33", "41", "50", "60", "71", "83", "96", "100", "115"];
    let dailyblank1 = "6"
    let dailyblank2 = "11"

    for (let i = 0; i<16; i++){


        let h = "myH"+ String(i+1);
        let table = document.getElementById(h);
        table.style.backgroundColor = "white";
        table.textContent = dailylist[i];

        if (wondaily == true){
            table.textContent = "🏆"
        }

        if (table.textContent == ""){
            table.style.backgroundColor = "blanchedalmond"
        }

        let length = 50;
        table.style.fontSize = length +"px";

        while (table.scrollWidth > table.clientWidth && length > 10){
            length-=1;
            table.style.fontSize = length + "px";

        }
        
        document.getElementById("button").onclick = function(){

        response = document.getElementById("answer").value;
        if (response == String(dailyblank1) + String(dailyblank2) || response == String(dailyblank1)+", "+String(dailyblank2) || response == String(dailyblank1)+","+String(dailyblank2) || response == String(dailyblank1)+" "+String(dailyblank2)) {
            console.log("CONGRATS!!!!");
            document.getElementById("Message").textContent = "Happy Mother's Day!";

            setTimeout(() => {
                document.getElementById("Message").textContent = "";
                wondaily = true;
                gamemode();
            }, 2000);
        } 
        else {
        console.log("Incorrect");
        document.getElementById("Message").textContent = "Incorrect";
        setTimeout(() => {
            document.getElementById("Message").textContent = "";
        }, 2000);}
        }
        
    }
}



//--------------------------------
document.getElementById("daily").onclick = function(){
    daily();
}

