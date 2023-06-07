/* eslint-disable no-underscore-dangle */
import { Librarian } from './lab4';
import { Person } from './lab4';
import { Book } from './lab2';
import { Category } from './lab2';

// Task 05.01.1
// T 05.03.1
abstract class ReferenceItem {
    // title: string;
    // year: number;

    // T 05.01.2
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    // T 05.01.5
    // T 05.01.7
    // T 05.02.3
    constructor (id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    // T 05.01.3
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        // T 05.01.8
        console.log(`Department: ${Object.getPrototypeOf(this).constructor.department}`);
    }

    // T 05.01.6
    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    };

    // T 05.01.7
    #id: number;

    getID(): number {
        return this.#id;
    }

    // T 05.01.8
    static department: string = 'Research Dep.';

    // T 05.03.2
    abstract printCitation(): void;
}

// T 05.02.1
class Encyclopedia extends ReferenceItem {

    constructor (id: number, title: string, year: number, public edition: number ) {
        super(id, title, year);
    }

    // T 05.02.3
    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    // T 05.03.3
    override printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

// T 05.04.1
class UniversityLibrarian implements Librarian, A {
    name: string;
    email: string;
    department: string;

    a: number = 1;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }
}

interface A {
    a: number;
}

// T 05.05.1
type PersonBook = Person & Book;

// T 05.05.3
export type BookOrUndefined = Book | undefined;

// T 05.05.5
interface TOptions {
    duration?: number;
    speed?: number;
}

function setDefaultConfig (options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 60;
    return options;
}

// ---------------------
export function lab5 (): void {
    // T 05.01.4
    // T 05.01.7
    // T 05.03.1
    // const ref = new ReferenceItem(1, 'Learn TypeScript', 2023);
    // console.log(ref);
    // ref.printItem();

    // T 05.01.6
    // T 05.03.1
    // ref.publisher = 'abc';
    // console.log(ref.publisher);

    // T 05.01.7
    // T 05.03.1
    // console.log(ref.getID());

    // T 05.02.2
    console.log('=== T 05.02.2');
    const refBook: Encyclopedia = new Encyclopedia(2, 'Learn TypeScript', 2023, 2);
    refBook.printItem();
    console.log('refBook:', refBook);

    // T 05.03.4
    console.log('=== T 05.03.4');
    refBook.printCitation();

    // Task 05.04.2
    console.log('=== T 05.04.2');
    const favoriteLibrarian: Librarian & A = new UniversityLibrarian();
    favoriteLibrarian.name = 'Anna';
    favoriteLibrarian.assistCustomer('Boris', 'All about TypeScript');
    favoriteLibrarian.a = 2;
    console.log(favoriteLibrarian);

    // T 05.05.2
    console.log('=== T 05.05.2');
    const personBook: PersonBook = {
        author: 'Anna',
        name: 'Anna',
        available: true,
        category: Category.TypeScript,
        email: 'anna@example.com',
        id: 1,
        title: 'All about TypeScript',
    };
    console.log(personBook);

    // T 05.05.5
    console.log('=== T 05.05.5');
    const options: TOptions = { duration:200 };
    setDefaultConfig(options);
    console.log('options:', options);
}