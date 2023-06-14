// T 06.02.4
import { createCustomerID } from './functions';
import { Book, Person } from './interfaces';

type Fn1 = Parameters<typeof createCustomerID>;
type Fn2 = ReturnType<typeof createCustomerID>;
type BookProperties = keyof Book;
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;

export {Fn1, Fn2, BookProperties, PersonBook, BookOrUndefined};