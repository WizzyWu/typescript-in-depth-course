import { Category } from '../modules/enums';
import { calcTotalPages, getAllBooks, getBookAuthorByIndex, getBookTitlesByCategory, logBookTitles, logFirstAvailable } from '../modules/functions';

export function lab2 (): void {
    console.log('getAllBooks', getAllBooks());

    console.log('logFirstAvailable');
    logFirstAvailable(getAllBooks());

    console.log('logBookTitles');
    logBookTitles(getBookTitlesByCategory(Category.JavaScript));

    console.log(getBookAuthorByIndex(0));

    console.log(calcTotalPages());
}
