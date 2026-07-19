// primitive datatype
// number, boolean string, null, undefined, symbol,
const score=33
const isLoggedIn=true
let name="shivam"
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId) 
// refrences datatype(non primitive)
// array, object, function
const username=["raj", "zaan", "maan"];
let myobj={
    name:"shivam",
    roll:1,
}
const myfunction = function(){
    console.log(hlo)
}
//non primitive datatype ka type hame ubject hi milta h
console.log(typeof username)
console.log(typeof myfunction)
console.log(typeof id)
console.log(typeof myobj)