//Data types

let n=5; 
let name="joe"; //String
let fullName={fname:"joe",lname:" barton"}; //Obj -- It's called dictionary (like py)
let truth= false; //boolean
let geroceries= ['apple','oranges','banana']; //array -- list 
let random; //undefined
let nothing=null; //value null

//Strings

let fruit='banana';
let f1='banana,apple,orange';

/*console.log(fruit.length);
console.log(fruit.indexOf('q'));
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ba','na'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.split('')); //split by char or index

console.log(f1.split(',')); //split by the comma */

//These are give the same result
console.log(fruit.charAt(2));
console.log(fruit[2]);

//Arrays
let fruits=['banana','apple','orange','melon'];
fruits=new Array('banana','apple','orange','melon');

console.log(fruits[2]);

fruits[0]='pear';
console.log(fruits);

/*for (let i=0;i<fruit.length;i++){
    console.log(fruits[i]);
}
*/


console.log('to string',fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(),fruits); //removes last item
console.log(fruits.push('blueberry'),fruits); //appends the last item


console.log(fruits[4]);
fruits[4]='pineapple';
//or fruits[fruits.length]='new fruit'; -- the result is as same as push
console.log(fruits);

fruits.shift(); //remove the first element from the array
console.log(fruits);
fruits.unshift('kiwi'); //add the first element to the array
console.log(fruits);

let vegtables=['tomato','parsley','broccoli'];
let allGroceries= fruits.concat(vegtables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
//console.log(allGroceries.reverse());
//console.log(allGroceries.sort());

let num=[1,5,41,20,56,4,9,11,10,21,2];
console.log(num.sort(function(a,b){return a-b})); //Sorts number in ascending order
console.log(num.sort(function(a,b){return b-a})); //Sorts number in descending order

let emptyArr=new Array();
for (let number=0;number<=10;number++){
    emptyArr.push(number);
}

console.log(emptyArr);













