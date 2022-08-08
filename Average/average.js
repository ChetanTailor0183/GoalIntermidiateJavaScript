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

let Average = sumOfMarks/Object.keys(obj).length;

console.log("Average marks of all the students is :"+Average);

let Grade;

if(Average<100) Grade='A'
if(Average<90) Grade='B'
if(Average<80) Grade='C'
if(Average<70) Grade='D'
if(Average<60) Grade='F'

console.log("Corrosponding Grade is :"+Grade);


