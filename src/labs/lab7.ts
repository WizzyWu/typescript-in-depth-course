// T 07.01.2
import { Category } from '../modules/enums';
import { createCustomer, getObjectProperty, purge } from '../modules/functions';
import { Book, Magazine } from '../modules/interfaces';
import { Shelf } from '../classes';
import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook, update } from '../modules/types';

export function lab7 () {
    // T 07.01.4
    const inventory: Book[]= [
        { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
        { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
        { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
        { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
    ];

    // T 07.01.5
    console.log('\n====== Task 07.01');
    console.log('5: purge()', purge<Book>(inventory));

    // T 07.01.6
    const r2 = purge([1,2,3,4]);
    console.log('6: ', r2);

    // T 07.01.7
    const purgeNumbers = purge<number>;
    console.log('7: purgeNumbers', purgeNumbers([1, 2, 3, 4, 5]));
    // console.log(purgeNumbers(['1', '2', '3']));

    // T 07.02.6
    console.log('\n====== Task 07.02');
    const bookShelf = new Shelf<Book>();
    inventory.forEach(book => bookShelf.add(book));
    console.log('6:', bookShelf.getFirst().title);

    // T 07.02.7
    const magazines: Magazine[] = [
        { title: 'Programming Language Monthly', publisher: 'Code Mags' },
        { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
        { title: 'Five Points', publisher: 'GSU' }
    ];

    // T 07.02.8
    const magazineShelf = new Shelf<Magazine>();
    magazines.forEach(mag => magazineShelf.add(mag));
    console.log('8:', magazineShelf.getFirst().title);

    // T 07.03.4
    console.log('\n====== Task 07.03');
    console.log('4: printTitles');
    magazineShelf.printTitles();

    // T 07.03.5
    console.log('5:', magazineShelf.find('Five Points'));

    // T 07.03.6
    console.log('6: getObjectProperty - ', getObjectProperty(magazines[0], 'title'));
    console.log('6: getObjectProperty - ', getObjectProperty(magazines[0], 'publisher'));

    // T 07.04.2
    console.log('\n====== Task 07.04');
    const bookRequiredFields: BookRequiredFields = {
        id: 1,
        author: 'Anna',
        available: false,
        category: Category.Angular,
        markDamaged: (a: string) => {},
        pages: 200,
        title: 'Unknown',
    };

    // T 07.04.4
    const updatedBook: UpdatedBook = {
        author: 'Oleg',
    };

    // T 07.04.7
    const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
    createCustomer(...params);

    // T 07.05.8
    console.log('\n====== Task 07.05');
    console.log('8: update(true) - ', update(true));
    console.log('8: update(false) - ', update(false));
}
