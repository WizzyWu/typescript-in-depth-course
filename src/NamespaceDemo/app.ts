
/// <reference path="utility-functions.ts" />

// T 06.01.8
const r1 = Utility.maxBooksAllowed(10);
console.log('r1', r1);

import util = Utility.Fees;
const r2 = util.calculateLateFee(5);
console.log('r2', r2);