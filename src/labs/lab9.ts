import { Category } from '../modules/enums';
import { getBooksByCategory, getBooksByCategoryPromise, logCategorySearch, logSearchResults } from '../modules/functions';

export function lab9 () {
    // T 09.01.5
    console.log('\n======= T 09.01');
    console.log('Begin');
    getBooksByCategory(Category.JavaScript, logCategorySearch);
    getBooksByCategory(Category.Software, logCategorySearch);
    console.log('End');

    // T 09.02.3
    console.log('\n======= T 09.02');
    console.log('Begin');
    getBooksByCategoryPromise(Category.JavaScript)
        .then(data => {
            console.log(data);
            // T 09.02.4
            return Promise.resolve(data.length);
        })
        .then(Len => console.log('length:', Len))
        .catch(reason => console.log(reason));
    getBooksByCategoryPromise(Category.Software)
        .then(data => console.log(data))
        .catch(reason => console.log(reason));
    console.log('End');

    // T 09.03.2
    console.log('\n======= T 09.03');
    console.log('Begin');
    logSearchResults(Category.JavaScript);
    logSearchResults(Category.Software)
        .catch(console.log);
    console.log('End');
}