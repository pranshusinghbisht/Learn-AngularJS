"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var Users = {
//     name: '',
//     age: 1,
//     id: 1,
//     email: ''  
// }
// using interface instead of var Users, we can have [typesafety]
//***************Object Destruring********************************** */
var user = {
    name: "Pranshu",
    id: 1,
    email: ""
};
user.name;
user.email;
//if i want to access the name and email then i can use objecct destrutuiring by like this
var _a = {
    name: "Pranshu",
    id: 1,
    email: ""
}, userName = _a.name, email = _a.email;
userName; // if i want to access name property.. but i want to rename as userName like line number 30
email;
var empoyee = {
    name: "pranshu",
    id: 1,
    email: "",
    salary: 1000
};
// whenever we use export keyword: at the time of compile, code knows that this particular interface can be used outside of the class;
//*************Array strutruing************** */
var users = [
    {
        name: "Pranshu",
        id: 1,
        email: ""
    },
    {
        name: "Hrithik",
        id: 2,
        email: ""
    },
    {
        name: "Rohit",
        id: 3,
        email: ""
    }
];
var _b = [
    {
        name: "Pranshu",
        id: 1,
        email: ""
    },
    {
        name: "Hrithik",
        id: 2,
        email: ""
    },
    {
        name: "Rohit",
        id: 3,
        email: ""
    },
    {
        name: "Aman",
        id: 4,
        email: ""
    },
    {
        name: "Suman",
        id: 5,
        email: ""
    }
], user1 = _b[0], user2 = _b[1], user3 = _b[2], restUsers = _b.slice(3);
console.log(user2);
console.log(restUsers);
var result = restUsers.map(function (user) { return user.name; });
console.log(result);
