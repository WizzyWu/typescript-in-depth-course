import { UL, RefBook, Library } from '../classes';
import { printRefBook } from '../modules/functions';
export type { Library } from '../classes/library';

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

    // T 06.06.3, 06.06.4
    // const lib: Library = new Library();

    // T 06.06.5
    console.log('Task 06.06.5');
    let lib: Library = {
        id: 1,
        name: 'Anna',
        address: 'Kyiv...',
    };
    console.log(lib);
}
