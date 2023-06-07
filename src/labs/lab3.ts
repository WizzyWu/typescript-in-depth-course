/* eslint-disable no-redeclare */
import { Book, getBookTitlesByCategory, logFirstAvailable, getAllBooks } from './lab2';
import { BookOrUndefined } from './lab5';

// T 03.01.1
function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

// T 03.02.1
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

// T 03.02.4
// T 04.01.3
// T 05.05.4
function getBookByID(id: Book['id']): BookOrUndefined {
    const books = getAllBooks();

    return books.find(book => book.id === id);
}

// T 03.02.5
function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`${customer}`);

    return bookIDs.map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

// T 03.03.2
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }

    return [];
}

// T 03.04.1
function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

// T 03.04.2
function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

// ------------------------------------
export function lab3 (): void {
    // T 03.01.2
    const myID: string = createCustomerID('Ann', 10);
    console.log('myID', myID);

    // T 03.01.3
    // let idGenerator: (name: string, id: number) => string;
    let idGenerator: typeof createCustomerID;
    idGenerator = (name: string, id: number) => `${id}/${name}`;

    // T 03.01.4
    idGenerator = createCustomerID;
    console.log(idGenerator('Boris', 20));

    type Fn1 = Parameters<typeof createCustomerID>;
    type Fn2 = ReturnType<typeof createCustomerID>;

    // T 03.02.1
    console.log('===\ncreateCustomer');
    createCustomer('Anna', 30, 'Kyiv');

    // T 03.02.2
    console.log('===\ngetBookTitlesByCategory', getBookTitlesByCategory());

    // T 03.02.3
    console.log('===\nlogFirstAvailable');
    logFirstAvailable();

    // T 03.02.4
    console.log('===\ngetBookByID', getBookByID(1));

    // T 03.02.6
    console.log('===\ncheckoutBooks');
    const myBooks = checkoutBooks('Anna', 1, 2, 4);
    console.log('myBooks', myBooks);

    // T 03.03.3
    console.log('===\ngetTitles', getTitles(1, true));
    console.log('getTitles', getTitles(true));
    console.log('getTitles', getTitles('Evan Burchard'));

    // T 03.04.2
    console.log('===\nbookTitleTransform', bookTitleTransform('TypeScript'));
    console.log('bookTitleTransform', bookTitleTransform(123));
}