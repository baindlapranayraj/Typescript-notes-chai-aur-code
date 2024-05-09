// TypeScript in functions 

function addTwo (num:number):number {
    return num + 2;
}
let loginUser = (name:string,email:string,isPaid:boolean=false) => {}
addTwo(5)
loginUser("p","p@.com");

let heros = ["thor","spiderman","she-hulk"];
heros.map((name:string):string => {
    return `hero name is ${name}`
})

