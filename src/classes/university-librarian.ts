import * as Interfaces from '../modules/interfaces';

// T 06.04.2
export class UniversityLibrarian implements Interfaces.Librarian, Interfaces.A {
    name: string;
    email: string;
    department: string;

    a: number = 1;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }
}