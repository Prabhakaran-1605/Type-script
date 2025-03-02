// union types

// with union types, we can give a variable and function parameters can be one or many types

function kgToLbs (weight : number | string ) : number   {
    // narrowing technique 
if (typeof weight === "number")
   return  weight * 2.2
else {
    return parseInt(weight) * 2.3
}
}

console.log(kgToLbs(10))
console.log(kgToLbs("10kg"))

//  After typescript compilation the union types will not be part in the js file it is only for compiler to do type checking 
