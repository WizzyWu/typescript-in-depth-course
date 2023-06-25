import { format, freeze, logMethod, logParameter, logger, writable } from '../modules/decorators';
import * as Interfaces from '../modules/interfaces';

// T 08.01.3
// @freeze(UniversityLibrarian.name)
// T 08.02.6
@logger
// T 06.04.2
export class UniversityLibrarian implements Interfaces.Librarian, Interfaces.A {
    // T 08.06.4
    @format() name: string;
    email: string;
    department: string;

    a: number = 1;

    // T 08.05.4
    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

    // T 08.03.2, 08.03.3
    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}