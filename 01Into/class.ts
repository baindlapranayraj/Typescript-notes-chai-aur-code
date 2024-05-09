// class Student {

//     constructor(
//         public hight :number,
//        public weight :number,
//         private age :number,
//         protected name :string
//     ){}
//     private=()=>this.age
// }

// let classinfo = new Student(6,80,19,"Pranay Raj") 
// // console.log(`Name of person is ${classinfo.name}`);
// console.log(`The weight is ${classinfo.weight}`)
// console.log(classinfo.private())

// Classes

class User {
    name :string
    email :string
    constructor(name :string,email :string){
        this.name=name
        this.email=email
    }
}

let pranay = new User("Pranay","pranay@dev.com");

//---------------Classes and Interface---------------

interface Photo {
    cameraMode:string,
    filter:string,
    burst:string
    createStory():number
}

class Instagram implements Photo {
    constructor(
       public cameraMode:string,
       public filter:string,
       public burst:string
    ){}
    createStory(): number {
        return 10
    }
}


//--------------- Abstract Classes---------------

abstract class TakePhoto {
    constructor(
        public snap:string,
        public filter:string
        
    ){}
}

class Facebook extends TakePhoto {
    constructor(
        public snap :string,
        public filter :string
    ){
        super(snap,filter)
    }
}

const Bpr = new Facebook("Clicked","Moonlight")
