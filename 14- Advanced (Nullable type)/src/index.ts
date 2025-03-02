//  By default type script is very strict about using nullable and undefined values.

//  Because it will leads to error in application.

// for null Example

// function greet (name : string | null) : string {
//     if (name) 
//         return name
//     else 
//         return "Hola!"
// }
// greet (null)

// for undefined example

function greet (name : string | null | undefined) : string {
    if (name) 
        return name
    else 
        return "Hola!"
}
greet (undefined)



//  Bydefault null checking is true in type, we can ommit that by changing the "strictNullChecks": false in the config file but it is not advising to override typescript default behaviour. Instead of we can use union type in the parameter.