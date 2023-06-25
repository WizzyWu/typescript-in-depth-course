// T 06.02.4
import { createCustomer, createCustomerID, getBooksByCategoryPromise } from './functions';
import { Author, Book, Person } from './interfaces';

type Fn1 = Parameters<typeof createCustomerID>;
type Fn2 = ReturnType<typeof createCustomerID>;
type BookProperties = keyof Book;
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;

export {Fn1, Fn2, BookProperties, PersonBook, BookOrUndefined};

// T 07.04.1
export type BookRequiredFields = Required<Book>;

// T 07.04.3
export type UpdatedBook = Partial<Book>;

// T 07.04.5
export type AuthorWoEmail = Omit<Author, 'email'>;

// T 07.04.6
export type CreateCustomerFunctionType = typeof createCustomer;

// T 07.05.1
export type fn = (a: string, b: number, c: boolean) => symbol;

// T 07.05.2
export type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
export type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
export type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;

// T 07.05.3
export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

// T 07.05.4
export type RequiredProps<T extends object> = {
    [Prop in keyof T]: {} extends Pick<T, Prop> ? never : Prop;
}[keyof T];

export type OptionalProps<T extends object> = {
    [Prop in keyof T]: {} extends Pick<T, Prop> ? Prop : never;
}[keyof T];

// T 07.05.5
type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

// T 07.05.6
export type RemoveProps<T extends object, TProps extends keyof T> = {
    [Prop in keyof T as Exclude<Prop, TProps>]: T[Prop];
};

// T 07.05.7
export type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
export type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

// T 07.05.8
type Result<T> = T extends true ? string : number;

export function update<T extends boolean> (isStringOutput: T): Result<T> {
    if (isStringOutput) {
        return '123' as Result<T>;
    } else {
        return 123 as Result<T>;
    }
}

// T 09.02.5
export type Unpromisify<T> = T extends Promise<infer R> ? R : never;

// T 09.02.6, 09.02.7
export type A = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;