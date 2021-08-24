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
    get id() {return this.id};
    set id(id){this.id=id};
    get name() { return this._name};
    set name(name)
    {
        //validating name while setting using regex
        let regex = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        
        if(regex.test(name))
            this._name = name;
            
        else
            throw "Error! Name format is incorrect";

         
    };

    get salary() {return this.salary};
    set salary(salary) { this.salary = salary};
    
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
    console.log(empPayroll.toString());
}
catch(e)
{
    console.error(e);
}
//extend gender and start date
let emp = new EmployeePayroll(3,"Bhanu",11000,'M',new Date());
console.log(emp.toString());