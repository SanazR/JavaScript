//Create a funct which gets a name says "Hello (name)!"-V1

function greeting(){
    var n= prompt("What is your name?");
    var result="Hello "+n;
    console.log(result);
}

//greeting();


//Create a funct which gets a name says "Hello (name)!"-V2
function greeting(yourName){
    var result="Hello "+yourName;
    console.log(result);
}

var Name= prompt("What is your name?");
greeting(Name);