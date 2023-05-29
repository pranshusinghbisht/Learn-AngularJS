
class Employee {
    private id!: number;
    protected name!: string;
    address !: string;

    // in other programming language, we have paramaterised constructor as well as default constructor

    // in typeScript we have not both.. either default constructor or parametrised constructor
    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }


    //static method
    static getEmployeeCount(): number {
        return 50;
    }
    //Static Members something in which can we access with the class name.


    //method
    getNamewithAddress(): string {
        return this.name + " " + this.address;
    }


    //getter
    get empId(): number {
        return this.id;
    }

    // setter
    set empId(id: number) {
        this.id = id;
    }

}

// let emp = new Employee();

// emp.id = 1;
// emp.name= "Pranshu";
// emp.address = "Moharibagh Kharika";

// console.log(emp);


let emp = new Employee(1, "Pranshu", "moharibagh");
console.log(emp);

let address = emp.getNamewithAddress();
console.log("address", address);


class Manager extends Employee {

    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
}

let mike = new Manager(2, "Mike", "Dubai");

console.log(mike.getNamewithAddress());




//static member call
//Static Members something in which can we access with the class name.
let res = Employee.getEmployeeCount();
console.log(res);


//getter and setter

emp.empId = 100;
console.log(emp.empId);

