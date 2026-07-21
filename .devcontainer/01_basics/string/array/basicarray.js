const myAaray=[0,1,2,3,4]
//console.log(myAaray[2])
//myAaray.push(6)
//console.log(myAaray)
//myAaray.unshift(8)
//console.log(myAaray)
//myAaray.shift()
//console.log(myAaray)
//console.log(myAaray.includes(19))
//console.log(myAaray.indexOf(9))
//const newArr=myAaray.join()
//console.log(newArr)
const myN1=myAaray.slice(1,3)
console.log(myN1)
console.log(myAaray)
const a=myAaray.splice(2,4)
console.log(a)
console.log(myAaray)
// in alice our original array does'nt change but in aplice our original array change
const marvel_heros=["ram","shyam"]
const dc_heros=["charan","laxman"]
const new_heros=[...marvel_heros,...dc_heros]
// known as spread operator we regularly use
console.log(new_heros)
const another_array=[1,3,2,[4,5],[6,7,[8,9]]]
const other_array=another_array.flat(Infinity)
// flat use for the combining array in one array
console.log(other_array)
console.log(Array.isArray("shivam"))
console.log(Array.from("shivam"))
console.log(Array.from({name:"shivam"}))
//hme dena padega kya convert krna chahte h
const crr=Array.of("fal","tru","none")
console.log(crr)