const ABSENT = 0;
const PART_TIME = 1;
const WAGE_PER_HR  = 20;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
let empHrs = 0;
//genrate random value either 0 or 1
let randomValue = Math.floor(Math.random() *3); 
console.log('Random value = '+randomValue);
function getWorkHours()
{
    if (ABSENT==randomValue){
        console.log("Employee is Absent");
    }else if(PART_TIME==randomValue){
    empHrs= 4
    console.log(empHrs+' hr')
    console.log("Employee is PartTime");
    } else{
    empHrs = 8
    console.log(empHrs+' hr')
    console.log("Employee is FullTime")
    }
}
let empHrs1 =getWorkHours();
let totalWage = empHrs*WAGE_PER_HR;
console.log('\nTotal Wage = '+totalWage);
