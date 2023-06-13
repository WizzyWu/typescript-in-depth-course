// T 06.02.3
/* eslint-disable no-underscore-dangle */
import * as Interfaces from './interfaces';

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    constructor (id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${Object.getPrototypeOf(this).constructor.department}`);
    }

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    };

    #id: number;

    getID(): number {
        return this.#id;
    }

    static department: string = 'Research Dep.';

    abstract printCitation(): void;
}

class UniversityLibrarian implements Interfaces.Librarian, Interfaces.A {
    name: string;
    email: string;
    department: string;

    a: number = 1;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }
}

export { ReferenceItem, UniversityLibrarian };