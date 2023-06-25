/* eslint-disable no-underscore-dangle */

import { timeout } from "../modules/decorators";

// T 06.04.2
export abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    constructor (id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    // T 08.04.3
    // @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${Object.getPrototypeOf(this).constructor.department}`);
    }

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    };

    #id: number;

    getID(): number {
        return this.#id;
    }

    static department: string = 'Research Dep.';

    abstract printCitation(): void;
}