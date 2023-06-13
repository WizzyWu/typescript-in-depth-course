import { ReferenceItem } from '../modules/classes';
// T 6.03.1
export default class Encyclopedia extends ReferenceItem {

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