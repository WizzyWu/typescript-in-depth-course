import { Book } from '../modules/interfaces';

// T 06.05.1
export class Reader {
    name: string;
    books: Book[] = [];

    take(book: Book): void {
        this.books.push(book);
    }
}