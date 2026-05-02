document.getElementById('tutorial').style.opacity = "0";
let started = false

function dogame(gamemode1){

document.getElementById("uniquebutton").onclick = function(){
    tutorial1()
}

document.getElementById("answer").focus();


document.getElementById("answer").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("button").click();
    }
});

document.getElementById("answer").addEventListener("blur", function(){
    document.getElementById("answer").focus()
})

function arithmatic(start, slope){
    let seq = [];
    for(let i =0; i<16; i++){
        seq.push(start+i*slope);
        console.log(seq[i]);
    }
    return seq;
}

function arithmatic2(start){
    let seq = [];
    let add = Math.floor(Math.random()*10)+1;
    let sub = -1*Math.ceil(Math.random()*10);
    for(let i =0; i<16; i++){
        if (i === 0) {
            seq.push(start)
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

function geometric(start, mult){
    let seq =[];
    for(let i =0; i<16; i++){
        seq.push(start*mult**i);
        console.log(seq[i]);
        
    }
    return seq;
}

function recursive(start2){
    let seq = [start2, start2+7];
    for(let i = 2; i<16; i++){
        seq.push(seq[i-1] + seq[i-2]);
        console.log(seq[i]);
    }
    return seq;
}

function recursiveran(start2){
    let rand = Math.floor(Math.random()*21)-10
    let seq = [start2, start2+rand];
    for(let i = 2; i<16; i++){
        seq.push(seq[i-1] + seq[i-2]+rand);
        console.log(seq[i]);
    }
    return seq;
}



function writenumbers(seq){
    let x1 = Math.floor(Math.random()*7)+1;
    let x2 = Math.floor(Math.random()*7)+9;

    blank1 = seq[x1]
    blank2 = seq[x2]
    seq[x1] = "";
    seq[x2] = "";



    for(let i =0; i<16; i++){



        let h = "myH"+ String(i+1);

        document.documentElement.style.setProperty

        document.getElementById(h).style.backgroundColor = "white" 

        if (seq[i] === seq[x2] || seq[i] === seq[x1]) {
            document.getElementById(h).style.backgroundColor = "blanchedalmond" 
        }

        document.getElementById(h).textContent = seq[i];

        let el = document.getElementById(h)
        let length = 30
        el.style.fontSize = length +"px"

        while (el.scrollWidth > el.clientWidth && length > 10){
            length-=1
            el.style.fontSize = length + "px";
        }

    }
}




let start = Math.floor(Math.random()*5)+1;
let slope = Math.floor(Math.random()*10)+1;
let multlist = [-2, 2]
let mult = multlist[Math.floor(Math.random()*multlist.length)]
let start2 = Math.floor(Math.random()*20)+1;
if (start2 === 5 || start2 === 10 || start2 === 20){
    start2--;
}

let sequence;
if (gamemode1 == "easy"){
    let operations = ["arithmatic", "geometric"];
    let randomoperation = Math.floor(Math.random()*operations.length);
    let operation = operations[randomoperation];
    console.log(operation)


    if (operation === "arithmatic"){
        sequence = arithmatic(start, slope);
    }
    if (operation === "geometric"){
        sequence = geometric(start, mult);
    }
}
if (gamemode1 == "hard"){
    let operations = ["recursive", "recursive+ran", "arithmatic2"];
    let randomoperation = Math.floor(Math.random()*operations.length);
    let operation = operations[randomoperation];
    console.log(operation)

    if (operation === "recursive"){
        sequence = recursive(start2);
    }
    if (operation === "recursive+ran"){
        sequence = recursiveran(start2);
    }
    if (operation === "arithmatic2"){
        sequence = arithmatic2(start, slope);
    }
    
    
}


let blank1;
let blank2;

writenumbers(sequence);

console.log(blank1, blank2)
document.getElementById("button").onclick = function(){

    response = document.getElementById("answer").value;
    if (response == String(blank1) + String(blank2) || response == String(blank1)+", "+String(blank2)) {
        console.log("CONGRATS!!!!");
        document.getElementById("Message").textContent = "You won!";

        setTimeout(() => {
            document.getElementById("Message").textContent = ""
            document.getElementById("answer").value = ``;
            dogame(gamemode1);
        }, 2000);}

    else if (response !== String(blank1)+String(blank2) || response !== String(blank1)+", "+String(blank2)) {
        console.log("Incorrect")
        document.getElementById("Message").textContent = "Incorrect"
        setTimeout(() => {
            document.getElementById("Message").textContent = ""
            document.getElementById("answer").value = ``;
        }, 2000);}

    }
}


function gamemode(){
    document.getElementById("uniquebutton").onclick = function(){
        tutorial1()
    }

    let square2 = document.getElementById("square2")
    square2.hidden = true
    
    let gamemode1;
    let square = document.getElementById("square")
    square.hidden = false

    document.getElementById("Easy").onclick = function(){
        started = true
        gamemode1 = "easy";
        square.hidden=true;
        console.log(gamemode1);
        dogame(gamemode1);
    }
    document.getElementById("Hard").onclick = function(){
        started = true
        gamemode1 = "hard";
        square.hidden=true;
        console.log(gamemode1);
        dogame(gamemode1);

    }
}

gamemode();

function tutorial1(){

    const square2 = document.getElementById("square2")
    const square = document.getElementById("square")

    let tutorial = document.getElementById("tutorial")    
    if (tutorial.style.opacity == 100){
        square2.hidden = true
        if (started == true){
            square.hidden = true
            }
    
        else if (started == false){
            square.hidden = false
        }
        tutorial.style.opacity = 0
    }
    else if (tutorial.style.opacity == 0){
        if (started == true){
        square2.hidden = false
        square.hidden = false
        }

        else if (started == false){
            square2.hidden = false
            square.hidden = false
        }

        tutorial.style.opacity = 100
    }
}
