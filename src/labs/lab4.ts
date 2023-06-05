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
}