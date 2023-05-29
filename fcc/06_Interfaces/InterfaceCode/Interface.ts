// if i want to make any field optional by putting ? in key 
export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

// var Users = {
//     name: '',
//     age: 1,
//     id: 1,
//     email: ''  
// }

// using interface instead of var Users, we can have [typesafety]

//***************Object Destruring********************************** */

let user: User = {
    name: "Pranshu",
    id: 1,
    email: ""
};
user.name;
user.email;

//if i want to access the name and email then i can use objecct destrutuiring by like this

let { name: userName, email }: User = {
    name: "Pranshu",
    id: 1,
    email: ""
}

userName;  // if i want to access name property.. but i want to rename as userName like line number 30
email;


//************************************************* */


interface Employees extends User {
    salary: number;
}

let empoyee: Employees = {
    name: "pranshu",
    id: 1,
    email: "",
    salary: 1000
};

export interface Login {

    login(): User;

}

// whenever we use export keyword: at the time of compile, code knows that this particular interface can be used outside of the class;



//*************Array strutruing************** */

let users: User[] = [
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
]

let [user1,user2,user3, ...restUsers]: User[] = [
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
]

console.log(user2);
console.log(restUsers);

let result = restUsers.map(user => user.name);
console.log(result);

