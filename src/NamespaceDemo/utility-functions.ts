// T 06.01.1
// T 06.01.2
// T 06.01.3
namespace Utility {
    // T 06.01.4
    export namespace Fees {
        // T 06.01.5
        export function calculateLateFee(daysLate: number): number {
            return daysLate * 0.25;
        }
    }

    // T 06.01.6
    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 :10;
    }

    // T 06.01.7
    function privateFunc(): void {
        console.log('This is a private function');
    }
}