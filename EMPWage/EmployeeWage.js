const ABSENT = 0;
const PART_TIME = 1;
const WAGE_PER_HR  = 20;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const MAX_WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;

let empHrs = 0;
//genrate random value either 0 or 1
let randomValue = Math.floor(Math.random() *3); 
console.log('Random value = '+randomValue);
function getWorkHours()
{
    if (ABSENT==randomValue){
        console.log("Employee is Absent");
        return 0
    }else if(PART_TIME==randomValue){
        console.log("Employee is PartTime");
        return 4
    } else{
        console.log("Employee is FullTime")
        return 8
    }
}
for(let i=0;i<MAX_WORKING_DAYS_IN_MONTH;i++)
{
    empHrs += getWorkHours();
}
let totalWage = empHrs*WAGE_PER_HR;
console.log('\nTotal Wage = '+totalWage);

let day=0;
empHrs =0;
while(day++ <MAX_WORKING_DAYS_IN_MONTH && empHrs<=MAX_WORKING_HRS_IN_MONTH)
{
    empHrs += getWorkHours();
}
console.log('\ntotal days = '+(day-1));
console.log('total emp hours = '+empHrs);
let totalWage1 = empHrs*WAGE_PER_HR;
console.log('Total Wage1 = '+totalWage1);