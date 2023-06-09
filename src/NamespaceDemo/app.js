/// <reference path="utility-functions.ts" />
// T 06.01.8
var r1 = Utility.maxBooksAllowed(10);
console.log('r1', r1);
var util = Utility.Fees;
var r2 = util.calculateLateFee(5);
console.log('r2', r2);
