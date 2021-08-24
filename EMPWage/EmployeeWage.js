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
let dailyEmpWageMap = new Map();
while(day++ <MAX_WORKING_DAYS_IN_MONTH && totalEmpHrs<=MAX_WORKING_HRS_IN_MONTH)
{
    let empHrs = getWorkHours();
    totalEmpHrs += empHrs;
    dailyEmpWageArr.push(calculateWage(empHrs));
    //setting the map
    dailyEmpWageMap.set(day,calculateWage(empHrs));

}
console.log("Daily Emp wages");
console.log(dailyEmpWageArr.toString());
console.log('Total days = '+(day-1));
console.log('Total emp hours = '+totalEmpHrs);
let totalWage = calculateWage(totalEmpHrs);
console.log("Total wage without for each and reduce");
console.log('Total Wage = '+totalWage);

//Uc7-a Using for each and reduce
let totalWageUsingForEach=0;
//function to sum up total wage and daily wage using foreach
let sumWages = (dailyWages) =>totalWageUsingForEach += dailyWages;
//function to calculate total wage with current wage using reduce
let totalWageUsingReduce = (totalWage,currentWage) => totalWage + currentWage;

//Uc 7-A
console.log("Total wage using Foreach");
//use foreach in array
dailyEmpWageArr.forEach(sumWages);
console.log('Total Wage using Foreach = '+totalWageUsingForEach);
console.log("Total wage using Reduce");
console.log('Total Wage using Reduce = '+dailyEmpWageArr.reduce(totalWageUsingReduce,0));

//Uc 7-b
console.log("Map day with daily wage");
let dayCounter = 0;
//function to map day with daily wage
let mapDaywithDailyWage = (dailyWage) => 'Day = '+(++dayCounter)+ ' => wage = '+dailyWage;
//map function used to map each element with day in array
let dayWithDailyWageMapArr = dailyEmpWageArr.map(mapDaywithDailyWage);
console.log(dayWithDailyWageMapArr);

//Uc 7-C
console.log("Show full working day Wages Alone - Filter");
//functiong to get full working days wages
let getFullWorkingDayWages = (dailyWage) => dailyWage.includes("160");//returns if values matches with given value
//array using filter function used to filter the array based on given condition
let FullWorkingDayWagesArr = dayWithDailyWageMapArr.filter(getFullWorkingDayWages);
console.log(FullWorkingDayWagesArr);

//Uc7D
console.log("Find first occurence of full time wage - Find");
console.log('First occurance of full working day : '+dayWithDailyWageMapArr.find(getFullWorkingDayWages));

//Uc7E
console.log("Check every element truly holding full time wages of employees - every");
console.log(FullWorkingDayWagesArr.every(getFullWorkingDayWages)?`Every element is holding correct value`:`Not every element holding correct value`);

//Uc7F
console.log("Check whether it holds some part time wages - some");
//function to check wages matches parttime wages
let getPartTimeWorkingDayWages = (dailyWage) => dailyWage.includes("80");//returns if values matches with given value
//check wheter it has using some
console.log(dayWithDailyWageMapArr.some(getPartTimeWorkingDayWages)?"It Has some part time wages":"It doesn't Has some part time wages");

//Uc7G

console.log("Get the number of days emp worked - reduce");
let getNumberOfDaysEmpWorked = (numOfDays,dailyWage) =>
{   
    if(dailyWage>0)
        return numOfDays+1;
    return numOfDays;
} 
console.log('Total number of days emp worked = '+dailyEmpWageArr.reduce(getNumberOfDaysEmpWorked,0));
//UC8 - Using Map
console.log("\nStore day with daily wage using map");
console.log("Total Wage using map : "+Array.from(dailyEmpWageMap.values()).reduce(totalWageUsingReduce,0));
//UC9-get all type of workingdays
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let FullWorkingDays = new Array();
console.log("UC9 get all type of workingdays");
dailyEmpWageMap.forEach((value,key,map) =>
{
    if(value==160)
        FullWorkingDays.push(key);
    else if(value==80)
        partWorkingDays.push(key);
    else
        nonWorkingDays.push(key);

});
console.log(dailyEmpWageMap);
console.log('part time working days: '+partWorkingDays.toString());
console.log('full time working days: '+FullWorkingDays.toString());
console.log('non working days: '+nonWorkingDays.toString());