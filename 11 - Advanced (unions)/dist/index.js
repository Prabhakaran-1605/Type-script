"use strict";
// union types
// with union types we can give a variable and function parameters more than one time
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.3;
    }
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
//# sourceMappingURL=index.js.map