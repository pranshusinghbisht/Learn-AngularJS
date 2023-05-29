"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    // address: {
    //     street: string;
    //     city: string;
    //     state: string;
    //     pin: string
    // }
    function Employee(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Employee.prototype.login = function () {
        return {
            name: "Pranshu",
            id: 1,
            email: ""
        };
    };
    return Employee;
}());
var emp = new Employee(1, "Pranshu", { street: "aas", city: "alucknow", state: "UP", pin: "3423134" });
console.log(emp);
