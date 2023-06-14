import { UL, RefBook } from '../classes';
import { printRefBook } from '../modules/functions';

export async function lab6 (): Promise<void> {
    // T 06.03.6
    console.log('====== Task 06.03.6');
    const refBook = new RefBook(1, 'Learn TypeScript', 2023 , 2);
    printRefBook(refBook);

    // T 06.03.7
    console.log('====== Task 06.03.7');
    const ul = new UL.UniversityLibrarian();
    // printRefBook(ul);

    // T 06.05.3
    console.log('====== Task 06.05.3');
    const isBoolean = true;
    if (isBoolean) {
        // import('../classes')
        //     .then(m => {
        //         const reader = new m.Reader();
        //         reader.name = 'Anna';
        //         console.log(reader);
        //     })
        //     .catch(err => console.log(err));

        // T 06.05.4
        const m = await import('../classes');
        const reader = new m.Reader();
        reader.name = 'Boris';
        console.log(reader);
    }
}
