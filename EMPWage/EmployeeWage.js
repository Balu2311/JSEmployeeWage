const ABSENT = 0;
const PART_TIME = 1;
//genrate random value either 0 or 1
let randomValue = Math.floor(Math.random() *3); 
console.log('Random value = '+randomValue);
if ((ABSENT==randomValue)){
console.log("Employee is Absent");
} else if(PART_TIME==randomValue){
console.log("Employee is PartTime");
} else{
console.log("Employee is FullTime")
}
