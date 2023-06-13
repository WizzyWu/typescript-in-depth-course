import { UL, RefBook } from '../classes';
import { printRefBook } from '../modules/functions';

export function lab6 (): void {
    // T 06.03.6
    console.log('====== Task 06.03.6');
    const refBook = new RefBook(1, 'Learn TypeScript', 2023 , 2);
    printRefBook(refBook);

    // T 06.03.7
    console.log('====== Task 06.03.7');
    const ul = new UL.UniversityLibrarian();
    // printRefBook(ul);
}
