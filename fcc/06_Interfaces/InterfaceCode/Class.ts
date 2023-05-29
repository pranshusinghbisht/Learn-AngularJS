import {Login} from './Interface';
import { User } from './Interface';

//import * as UserLogin from './interface';  ------------if we use this then--------->  Username.Login etc

interface Address {

    street: string;
    city: string;
    state: string;
    pin: string

}

class Employee implements Login {
    private id: number;

    protected name: string;

    address: Address;

    // address: {
    //     street: string;
    //     city: string;
    //     state: string;
    //     pin: string
    // }

    constructor(id: number, name:string, address:Address) {
        this.id = id;
        this.name = name;
        this.address = address;
        
    }
    login(): User {
        return {
            name: "Pranshu",
            id: 1,
            email: ""
        }
}
}

let emp = new Employee(1,"Pranshu",{street: "aas",city:"alucknow", state:"UP",pin:"3423134"});

console.log(emp);
