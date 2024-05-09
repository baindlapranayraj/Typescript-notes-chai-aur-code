//++++++++++ Generics ++++++++++

function simpleFunction<T>(val:T[]){
    return [0,0];
}

let ex1 = [1,2,3];
let fun1=simpleFunction(ex1);

let ex2=["jhnd","saqa"];
let fun2=simpleFunction(ex2)

//!!!!!!!!!!!!!!!!!! Generics are scary!!!!!!!!!!!!!!!!!!

function findIndex<T>(array:T[],value:T){
    return array.findIndex((iteam)=>iteam===value)   
}
const indexs = [11,2,4];
findIndex(indexs,4);

//----------------------------

function bot<T>(val :T) :T{
    return val;
}

interface Bottle {
    brand:string,
    type:number
}

bot(<Bottle>({
    brand:"Kinley",
    type:10
}))



