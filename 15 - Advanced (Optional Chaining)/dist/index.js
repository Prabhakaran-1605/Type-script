"use strict";
function customer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customerInfo = customer(0);
// Optional property access operator
console.log(customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.birthday);
//  if customerInfo is null / undefined it will give undefined value for customerInfo.birthday
//  Optional element access operator
// this we are dealing when we are having array.
// if (customer !==null && customer !==undefined ) then bekow code will excute.
// customer[0]
//  Instead of above we can use optional chaining for access the element in an array.
// customer?.[0]
// optional call
// let log: any = (name : string)=> console.log(name)
// log("prabhakar")
let log = null;
// log("a")
// if we run above code application will crash that's why we use optional chaining in function call.
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map