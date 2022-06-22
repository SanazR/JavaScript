//Obj (objects in Js are called dictionary in Python)

let student={
    first:"Sara", 
    last:"Johnson",
    age:20,
    height:162,

    studentInfo: function(){
       return this.first + ' ' + this.last + "\n" + this.age; 
       //print first name, last name and age together
    }
};

console.log(student.first);
console.log(student.last);

student.first="Mari"; //change value of an attribute of the obj
console.log(student.first);

student.age++;
console.log(student.age);

console.log(student.studentInfo());


