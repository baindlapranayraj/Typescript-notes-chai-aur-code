// Generic Challange :- Reproduce foreach,filter and map using reduce

// function myForEach<T>( arr :T[],myFunc:(v:T)=>void ):void{
//     let sum = arr.reduce((a,c)=> {

//     });
// }

// let array = [11,2,34,6];

// myForEach(array)


//+++++++++++++++ Generics with keyof+++++++++++++++

function pluck<Datatype,Keytype extends keyof Datatype>(
    iteams:Datatype[],
    key:Keytype,
) : Datatype[Keytype][]{
    return iteams.map((iteam)=>iteam[key])
}

const dogs = [
    {name:"Bruno",age:10},
    {name:"spoinky",age:6}
]

console.log(pluck(dogs,"name"))

