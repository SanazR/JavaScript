console.log("hi");
//alert("stop!");

var b="abcd";
var num=1;
console.log(b,num);

//Change HTML with JS:
/*var age= prompt('What is your age?');
document.getElementById('text').innerHTML=age; */

//Functions
function fun(){
    console.log("hey");
}

fun();

//How arguments work in funct
function sumNum(n1, n2){
    var result=(n1+n2);
    console.log(result);
}

sumNum(10,5);
sumNum("Hey ","you");



//While loops
/* var n=0;

while(n<5){
    n+=1;
    console.log(n);
} 

*/

//For loop
var n=0;
/*for (let n=0;n<=5;n++){
    console.log(n);
}
*/

//Conditionals

var age=40;

if((age>=18) && (age<=35)){
    stat='target demo';
    console.log(stat);
}
else{
   stat='not in my clients age range';
   console.log(stat);
}



//Differentiate between weekday vs. weekend
/* Sunday--> 0
   Monday--> 1
   Tuesday--> 2
   ... */

switch(2){
    case 0:
        text="Weekend";
        break;
    case 5:
        text="Weekend";
        break;
    case 6:
        text="Weekend";
        break;
    default:
        text="Weekday";
}

console.log(text);









