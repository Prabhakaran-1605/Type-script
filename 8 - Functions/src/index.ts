// Example 1: 

// function calculateTax (income: number, taxYear: number): number{
//     // let x;   
//     if(taxYear < 2022)
//         return income * 1.3;

//     return income * 1.2;
// //  
// }

// calculateTax(15_000, 2021)

// Example 2:

// function calculateTax (income: number, taxYear=2022): number{
//     // let x;   
//     if(taxYear < 2022)
//         return income * 1.3;

//     return income * 1.2;
// //  
// }

// calculateTax(15_000)


// Example 3: 


function calculateTax (income: number, taxYear=2022): number{
    // let x;   
    if(taxYear < 2022)
        return income * 1.3;

    return income * 1.2;
//  
}

let tax = calculateTax(15_000, 2023)

console.log(tax,"tax value")



// "noUnusedParameters": true,  
// "noImplicitReturns": true,    -----javascript by default return undefined and undefined is not a number 
// "noUnusedLocals": true,     for unused local variable inside functions   
