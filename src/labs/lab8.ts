import { RefBook, UL } from '../classes';

export function lab8 () {
    // T 08.01.4
    // console.log('\n======= T 08.01');
    // const ul = new UL.UniversityLibrarian();
    // // UL.UniversityLibrarian['a'] = 1;
    // // const proto = Object.getPrototypeOf(ul);
    // // proto['b'] = function() {};

    // T 08.02.6
    console.log('\n======= T 08.02');
    const ul = new UL.UniversityLibrarian();
    console.log(ul);

    // T 08.02.7
    ul.name = 'Anna';
    console.log(ul);
    // (ul as unknown as { printLibrarian: () => void}).printLibrarian();
    // (ul as any).printLibrarian();
    (ul as UL.UniversityLibrarian & { printLibrarian: () => void}).printLibrarian();

    // T 08.03.4
    console.log('\n======= T 08.03');

    ul.assistFaculty = function() {
        console.log('changed');
    };
    ul.assistFaculty();

    // ul.teachCommunity = function() {
    //     console.log('changed');
    // };
    // Object.getPrototypeOf(ul).teachCommunity = function() {
    //     console.log('changed');
    // };
    ul.teachCommunity();

    // T 08.04.4
    const refBook = new RefBook(1, 'Learn TypeScript', 2023 , 2);
    refBook.printItem();

    // T 08.05.5
    console.log('\n======= T 08.05');
    ul.assistCustomer('Boris', 'Learn TypeScript');
    console.log(ul);

    // T 08.06.4
    console.log('\n======= T 08.06');
    ul.name = 'Vadim';
    console.log('ul.name = ', ul.name);

    // T 08.07.4
    console.log('\n======= T 08.07');
    refBook.copies = 10;
}