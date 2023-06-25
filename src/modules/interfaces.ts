// T 06.02.2
import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface A {
    a: number;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

// T 07.02.1
export interface Magazine {
    title: string;
    publisher: string;
}

// T 07.03.2
export interface ShelfItem {
    title: string;
}

// T 09.01.1
export interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

// T 09.01.2
export interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export { A, Author, Book, Librarian, Person, TOptions, DamageLogger as Logger };