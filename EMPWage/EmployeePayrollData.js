class EmployeePayroll
{
    //properties of class
    id;
    name;
    salary;
    gender;
    startDate;
    //defining constructor of class using constructor keeyword
    constructor(...parameters)
    {
        this.id = parameters[0];
        this.name = parameters[1];
        this.salary = parameters[2];
        this.gender = parameters[3];
        this.startDate = parameters[4];
    }
    //getter and setter methods for properties of class
    get id() {return this._id};
    set id(id)
    {
        //pattern for id for positive numbers
        let idPattern = new RegExp('^[1-9]\d*$');
        if(idPattern.test(id))
            this._id = id;
        else
            throw "Error! id format is incorrect";
    };
    get name() { return this._name};
    set name(name)
    {
        //validating name while setting using regex
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        
        if(namePattern.test(name))
            this._name = name;
            
        else
            throw "Error! Name format is incorrect";

         
    };

    get salary() {return this._salary};
    set salary(salary) 
    {
          //pattern for salary for positive numbers
        let salaryPattern = new RegExp('^[1-9][0-9]*$');
        if(salaryPattern.test(salary))
            this._salary = salary;
        else
            throw "Error! salary format is incorrect";
         
    };
    get gender() { return this._gender};
    set gender(gender)
    {
        //pattern for gender either M or F
        let genderPattern = new RegExp('M|F');
        if(genderPattern.test(gender))
            this._gender=gender;
        else
            throw "Error! gender format is incorrect";
    }
    get startDate(){return this._startDate};
    set startDate(date)
    {
        //Givendate should not exceed todays date
        let givenDate = new Date(date); //mm-dd-YYYY
        let today = new Date();
        if(givenDate<=today)
            this._startDate=date;
        else
            throw "Error! Date is greater than current date";
    }
    //methid to return everything in string
    toString()
    {
        return 'Id: '+this.id+' Name: '+this.name+' Salary: '+this.salary+' Gender: '+this.gender+' StartDate: '+this.startDate
    }

}
//obj for class using parameterized conbstructor
let empPayroll = new EmployeePayroll(1,"Reddy",10000);
console.log(empPayroll.toString());
//setting values to the properties of class
//setting values to the properties of class using try catch
try
{
    empPayroll.id=2;
    empPayroll.name = "Balu";
    empPayroll.salary = 10000;
    empPayroll.gender = 'M';
    empPayroll.startDate = '07-12-2021';//MM-DD-YYYY
    console.log(empPayroll.toString());
}
catch(e)
{
    console.error(e);
}
//extend gender and start date
let emp = new EmployeePayroll(3,"Bhanu",11000,'M',new Date());
console.log(emp.toString());