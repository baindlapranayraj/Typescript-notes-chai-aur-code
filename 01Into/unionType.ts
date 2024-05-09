/*Union types are used when we want denote more then one type check we do it by denoting "|" these types
form each other and make a union

> TypeScript will only allow an operation if it is valid for every member of the union. 
For example, if you have the union string | number, you can’t use methods that are only
 available on string
*/

type User = {
    name :string,
    id? :number
}

type Adimn = {
    userName :string,
    id :number
}

let pranay :User|Adimn = {name:"Pranay"}

let data :(number|string)[] = [1,2,3,4,5]  //>> Union Type

let passengerSeat : "aisel"|"middle"|"window"

passengerSeat = "aisel"

