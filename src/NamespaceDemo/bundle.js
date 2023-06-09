// T 06.01.1
// T 06.01.2
// T 06.01.3
var Utility;
(function (Utility) {
    // T 06.01.4
    var Fees;
    (function (Fees) {
        // T 06.01.5
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    // T 06.01.6
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    // T 06.01.7
    function privateFunc() {
        console.log('This is a private function');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
// T 06.01.8
var r1 = Utility.maxBooksAllowed(10);
console.log('r1', r1);
var util = Utility.Fees;
var r2 = util.calculateLateFee(5);
console.log('r2', r2);
