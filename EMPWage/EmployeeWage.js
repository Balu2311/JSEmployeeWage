const ABSENT = 0;

//genrate random value either 0 or 1
let randomValue = Math.floor(Math.random() *2); 
console.log('Random value = '+randomValue);
console.log((ABSENT==randomValue)?"Employee is Absent":"Employee is present");
