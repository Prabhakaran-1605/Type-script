// Enums - builtin types which represents a list of related constants.

// const small = 1;
// const medium = 2;
// const large = 3;


// need to use Pascal while introducing enum

// enum Size {small , medium ,large}

// If we didn't initialize it will take value as  O for small , 1 for medium & 2 for large 

//  if we initialize first value as 10 then 10 for small, 11 for medium and 12 for large

//  if we initialize with string then we need to initialize for other key else it will throw error.

// enum Size {small= "a" , medium= "b", large="c"}


// if we use const infront of enum keyword, it will concise the code in js file after compilation

enum Size {small=15 , medium, large}


let mySizeSmall: Size = Size.small;
let mySizeMedium: Size = Size.medium;
let mySizeLarge: Size = Size.large;


console.log(mySizeSmall)
console.log(mySizeMedium)
console.log(mySizeLarge)