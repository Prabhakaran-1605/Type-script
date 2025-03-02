
let age = 20;
let myName = "prabhakar";
let isPublished = true;
 

//  In typescript without annotation also we can declare a variable

let a;

//  if i didn't initialize typescript will assume it as any

//  we should avoid using any type in typescript


function render(document:any){
    console.log(document)
}


//  if we didn't annotate parameter in the function it will throw implictly has an "any" type error

//  to remove we need to annotate as any (document: any) or else in tsconfig.json file you uncomment noImplicitAny key and change the value as false to remove implict has an "any error".

