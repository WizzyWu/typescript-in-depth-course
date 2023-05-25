// ========= Types
// T. 02.01
type Book = {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
};

// T. 02.03
enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}


// ========= Functions
// T. 02.01
function getAllBooks(): Book[] {
    const books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

// T. 02.02
function logFirstAvailable(books: Book[]): void {
    console.log(`Number of Books: ${books.length}`);

    const title = books.find(({ available }) => available)?.title;

    console.log(`First available book: ${title}`);
}

// T. 02.04
function getBookTitlesByCategory(category: Category): string[] {
    const books = getAllBooks();

    return books.filter(({ category: cat }) => cat === category).map(({ title }) => title);
}

// T. 02.05
function logBookTitles(titles: string[]): void {
    console.log(titles);
}

// T. 02.06
function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const {title, author} = books[index] ?? {};
    return [title, author];
}

// T. 02.07
function calcTotalPages() {
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

// ------------------------------------
export function lab2 (): void {
    console.log('getAllBooks', getAllBooks());

    console.log('logFirstAvailable');
    logFirstAvailable(getAllBooks());

    console.log('logBookTitles');
    logBookTitles(getBookTitlesByCategory(Category.JavaScript));

    console.log(getBookAuthorByIndex(0));

    console.log(calcTotalPages());
}
