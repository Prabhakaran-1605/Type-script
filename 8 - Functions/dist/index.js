"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.3;
    return income * 1.2;
}
let tax = calculateTax(15000, 2023);
console.log(tax, "tax value");
//# sourceMappingURL=index.js.map