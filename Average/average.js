/**
 * Write a JavaScript program which compute, 
 * the average marks of the following students Then, 
 * this average is used to determine the corresponding grade.
        Student Name	Marks

        David	80
        Vinoth	77
        Divya	88
        Ishitha	95
        Thomas	68

The grades are computed as follows :

        Range	Grade
        
        <60 F
        <70 D
        <80 C
        <90 B
        <100 A
 */


//JSON object for reference
const obj = {
    "David" : 80,
    "Vinoth" : 77,
    "Divya" : 88,
    "Ishitha" : 95,
    "Thomas" : 68,   
}

let sumOfMarks = 0;

for (const [key, value] of Object.entries(obj)) {
    sumOfMarks += value;
}  

//applying formullae for average markes of all students
let Average = sumOfMarks/Object.keys(obj).length;

console.log("Average marks of all the students is :"+Average);

let Grade;

//condition to check grade of class
if(Average<100) Grade='A'
if(Average<90) Grade='B'
if(Average<80) Grade='C'
if(Average<70) Grade='D'
if(Average<60) Grade='F'

console.log("Corrosponding Grade is :"+Grade);


