import { ShelfItem } from '../modules/interfaces';

// T 07.02.2, 07.03.3
export default class Shell <T extends ShelfItem> {
    private items: T[] = [];

    public add (item: T): void {
        this.items.push(item);
    }

    public getFirst (): T | null {
        return this.items[0] ?? null;
    }

    // T 07.03.1
    find(title: string): T {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void{
        this.items.forEach(item => console.log(item.title));
    }
}