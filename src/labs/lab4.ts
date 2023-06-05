import { Book } from './lab2';
import { Category } from './lab2';

// T 04.01.4
function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

// T 04.02.1
export interface DamageLogger {
    (reason: string): void;
}

// T 04.03.1
interface Person {
    name: string;
    email: string;
}

// T 04.03.2
interface Author extends Person {
    numBooksPublished: number;
}

// T 04.03.3
interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

// T 04.05.1
type BookProperties = keyof Book;

// Task 04.05.2
function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

// =======================
export function lab4 (): void {
    // T 04.01.5
    // T 04.01.8
    const myBook: Book = {
        id: 5,
        title: 'Colors, Backgrounds, and Gradients',
        author: 'Eric A. Meyer',
        available: true,
        category: Category.CSS,
        // year: 2015,
        // copies: 3,
        pages: 100,
        // T 04.01.9
        markDamaged(reason: string) {
            console.log(`Damaged: ${reason}`);
        }
    };

    // T 04.01.6
    printBook(myBook);
    // T 04.01.9
    myBook.markDamaged('missing back cover');

    // T 04.02.3
    const logDamage = (reason: string) => {
        console.log(`Damaged: ${reason}`);
    };
    logDamage('missing front cover');

    // Task 04.03.4
    const favoriteAuthor: Author = {
        name: 'Anna',
        email: 'anna@example.com',
        numBooksPublished: 2
    };

    // Task 04.03.5
    const favoriteLibrarian: Librarian = {
        name: 'Boris',
        email: 'boris@example.com',
        department: 'Classical Literature',
        assistCustomer(custName, bookTitle): void {
            console.log(`${custName} ${bookTitle}`);
        },
    };

    // Task 04.04.1
    const offer: any = {
        book: {
            title: 'Essential TypeScript',
        },
    };
    // Task 04.04.2
    console.log(offer.magazine);
    console.log(offer.magazine?.getTitle());
    console.log(offer.book.getTitle?.());
    console.log(offer.book.authors?.[0]);
    console.log(offer.book.authors?.[10]?.name);

    // Task 04.05.3
    console.log(getProperty(myBook, 'title'));
    console.log(getProperty(myBook, 'markDamaged'));
    // console.log(getProperty(myBook, 'isbn'));
}