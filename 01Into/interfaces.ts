interface IntUser {
    name:string,
    email:string,
    userId:number,
    googleId ?:number,
    sartTrail():number
}

let pranayRaj :IntUser = {
    name:"Pranay",
    email:"Pr@.com",
    userId:453,
    sartTrail:() => 1
}


// ---------- Diffrence between Interface and typeUnion For adding two type alias or Interface ---------

//  +++++ type alias ++++++++++

type TuserDet = {
    name:string,
    age:number,
}
type TAdminDet = TuserDet & {
    role:string
}

// ++++++++++Interface+++++++++

interface IntuserDet {
    name :string,
    age :number
}
interface IntAdminDet extends IntuserDet {
    role :string
}


// --------- Interface VS Type alias ---------

/** 
 * Unlike Type alias Interface can only described by obj where as Type can be declared by object and
 * all primitive datatypes (Strings,numbers and booleans)
 */

type example = string;
// interface Intexmaple = string >> We always describe inteface as object 

const addres :example = "Nizamabad,Telangana"

// ---------------------------

/**
 * Type alias can also describe union types - interface cannot
 */



// ---------------------------