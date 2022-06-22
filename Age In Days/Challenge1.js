//Write a program which ask user's age and prints it in days

function ageInDays(){
   var birthYear= prompt("What year were you born?");
   var currentYear= prompt("What is the current year?");

   var age=(currentYear-birthYear)*365;
   var h2=document.createElement('h2');
   var textAnswer=document.createTextNode('You are '+ age +' days old.');
   h2.setAttribute('id',"age");
   h2.appendChild(textAnswer);
   document.getElementById('flex-box-result').appendChild(h2);
}

function reset(){
    document.getElementById('age').remove();
}

