let score="10abc"
console.log(typeof score);
let convert=Number(score)
console.log(typeof convert)
console.log(convert)

//interview datatype
//primitive--call by value=string,number,bool,null,undefined,symbol,bigint
//non-primitive==referance type--array,object,funtion

//JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
//and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)
console.log(typeof id)
const fun=function(){
    console.log("hello")
}
let obj={
    name:"ruchit",
    age:20,
}

//memory  reference
//stack(primitive-copy) and heap(non-primitive-referance)



