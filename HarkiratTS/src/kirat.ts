
function greet(firstName:string){
    return (`Hello ${firstName}`)
}
greet("Harkirat");


interface User {
    name:string,
    age:number
}
function isLeagal(user:User){
    if(user.age>=18){
        return true;
    }
    else{
        return false;
    }
}

isLeagal({name:"Pranay",age:19});

//+++++++++++++++++++++++ Intersection in Types +++++++++++++++++++++++

type Employ = {
    name:string,
    startDate:Date,
}

type Manager = {
    name:string,
    branch?:string,
}

type TeamLead = Employ&Manager;

const Team:TeamLead = {
    name:"Rakesh",
    startDate: new Date(),
    branch:"Kompally"
}

//+++++++++++++++ Problems in generic ++++++++++++++++++++


type Sending = [
    {
    name:string,
    age:number,
    aim:string
    }
]

function send<T>(arr:T[]):T{
    let val = arr[0];
    return val;
};

let data:Sending = [
    {
    name:"Pranay Raj",
    age:10,
    aim:"Blockchain developer"
    }
]

console.log(data);
