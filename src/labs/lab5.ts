import { UniversityLibrarian } from '../modules/classes';
import { Category } from '../modules/enums';
import { setDefaultConfig } from '../modules/functions';
import { A, Librarian, TOptions } from '../modules/interfaces';
import { PersonBook } from '../modules/types';
// T 06.03.2
import RefBook from '../classes/encyclopedia';

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
    // T 06.02.3
    const refBook: RefBook = new RefBook(2, 'Learn TypeScript', 2023, 2);
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