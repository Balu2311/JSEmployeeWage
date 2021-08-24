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
let totalEmpHrs = 0;
for(let i=0;i<MAX_WORKING_DAYS_IN_MONTH;i++)
{
    totalEmpHrs += getWorkHours();
}
let calculateWage = (empHrs) =>
{
    return empHrs*WAGE_PER_HR;
}

let day=0;
totalEmpHrs =0;
//Array to store daily wage of employee
let dailyEmpWageArr = new Array();
while(day++ <MAX_WORKING_DAYS_IN_MONTH && totalEmpHrs<=MAX_WORKING_HRS_IN_MONTH)
{
    let empHrs = getWorkHours();
    totalEmpHrs += empHrs;
    dailyEmpWageArr.push(calculateWage(empHrs));

}
console.log("Daily Emp wages");
console.log(dailyEmpWageArr.toString());
console.log('Total days = '+(day-1));
console.log('Total emp hours = '+totalEmpHrs);
let totalWage = calculateWage(totalEmpHrs);
console.log('Total Wage = '+totalWage);
