import { Category } from '../modules/enums';
import { getProperty, printBook } from '../modules/functions';
import { Author, Book, Librarian } from '../modules/interfaces';

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