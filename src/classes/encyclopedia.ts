import { positiveInteger } from '../modules/decorators';
import { ReferenceItem } from './reference-item';
// T 6.03.1
export default class Encyclopedia extends ReferenceItem {
    // T 08.07.2
    private _copies: number;

    get copies() {
        return this.copies;
    }

    // T 08.07.3
    @positiveInteger
    set copies(value: number) {
        this.copies = value;
    }

    constructor (id: number, title: string, year: number, public edition: number ) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    override printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}