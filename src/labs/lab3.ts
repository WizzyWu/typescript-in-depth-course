import { bookTitleTransform, checkoutBooks, createCustomer, createCustomerID, getBookByID, getBookTitlesByCategory, getTitles, logFirstAvailable } from '../modules/functions';

export function lab3 (): void {
    // T 03.01.2
    const myID: string = createCustomerID('Ann', 10);
    console.log('myID', myID);

    // T 03.01.3
    // let idGenerator: (name: string, id: number) => string;
    let idGenerator: typeof createCustomerID;
    idGenerator = (name: string, id: number) => `${id}/${name}`;

    // T 03.01.4
    idGenerator = createCustomerID;
    console.log(idGenerator('Boris', 20));

    // T 03.02.1
    console.log('===\ncreateCustomer');
    createCustomer('Anna', 30, 'Kyiv');

    // T 03.02.2
    console.log('===\ngetBookTitlesByCategory', getBookTitlesByCategory());

    // T 03.02.3
    console.log('===\nlogFirstAvailable');
    logFirstAvailable();

    // T 03.02.4
    console.log('===\ngetBookByID', getBookByID(1));

    // T 03.02.6
    console.log('===\ncheckoutBooks');
    const myBooks = checkoutBooks('Anna', 1, 2, 4);
    console.log('myBooks', myBooks);

    // T 03.03.3
    console.log('===\ngetTitles', getTitles(1, true));
    console.log('getTitles', getTitles(true));
    console.log('getTitles', getTitles('Evan Burchard'));

    // T 03.04.2
    console.log('===\nbookTitleTransform', bookTitleTransform('TypeScript'));
    console.log('bookTitleTransform', bookTitleTransform(123));
}