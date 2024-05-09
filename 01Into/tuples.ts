/*Tuple are known for fixed length of elements may having diffrent,
Example [string,number] hear 0th element should have string and 1st should have number*/

let tUser: (number | string)[] = ["PR",10];

let rgb :[number,number,number] = [223,233,564];


type tupleUser = [string,number];
let Tuser :tupleUser = ["red",345];

Tuser.push(10) /*By using Array methods its defying the principles of tuples where at 
                tupleUser we wrote only a string and number can be add but we are able to push 2 position 
                element to which should not be allowed*/


// More tuples examples 

function simpleString(initial:string) :[()=>string,(v:string)=>void]{
    let str=initial;
    return[
        ()=>str,
        (str)=>{
            console.log(str)
        }
    ]
}

simpleString("Pranay Raj");