import { makeProperty } from "./functions";

// T 08.01.2
export function freeze(p: string) {
    return function(constructor: Function): void {
        console.log(`Freezing the constructor ${p}`);

        console.log('constructor', constructor);
        console.log('constructor.prototype', constructor.prototype);

        Object.freeze(constructor);
        Object.freeze(constructor.prototype);
    };
}

// T 08.02.1
export function logger<TFunction extends Function>(constructor: TFunction): TFunction {
    // T 08.02.2
    const newConstructor: Function = function() {
        console.log('Creating new instance');
        console.log(constructor.name);

        this.age = 30;
    };

    // T 08.02.3
    newConstructor.prototype = Object.create(constructor.prototype);
    // Object.setPrototypeOf(newConstructor.prototype, constructor.prototype);

    // T 08.02.4
    newConstructor.prototype.printLibrarian = function(): void {
        console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`)
    };

    // T 08.02.5
    return newConstructor as TFunction;
}

// T 08.03.1
export function writable(isWritable: boolean) {
    return function(target: Function | object, methodName: string, descriptor: PropertyDescriptor): void {
        console.log(`Method decorator writable is called with param: ${isWritable}`);
        console.log(target);
        console.log(methodName);
        console.log(descriptor);

        descriptor.writable = isWritable;
    };
}

// T 08.04.1, 08.04.2
export function timeout(ms: number) {
    return function(target: Function | object, methodName: string, descriptor: PropertyDescriptor): void {
        console.log(`MEthod decorator timeout for ${methodName}`);

        const originalMethod = descriptor.value;
        descriptor.value = function(...args: unknown[]) {
            if (window.confirm('Are you sure?')) {
                setTimeout(() => {
                    originalMethod.apply(this, args);
                }, ms);
            }
        };
    };
}

// T 08.05.1
export function logParameter(target: Function | object, methodName: string, index: number) {
    const key = `${methodName}_decor_params_indexes`;
    const proto = typeof target === 'function' ? target.prototype : target;

    (proto[key] ??= []).push(index);
}

// T 08.05.2
export function logMethod(target: Function | object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: unknown[]) {
        // T 08.05.3
        const key = `${methodName}_decor_params_indexes`;
        const proto = typeof target === 'function' ? target.prototype : target;
        const indexes = proto[key];
        if (Array.isArray(indexes)) {
            args.forEach((arg, index) => {
                if(indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
                }
            });
        }

        const result = originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}

// T 08.06.1
export function format(pref: string = 'Mr./Mrs.') {
    return function(target: Function | object, propertyName: string) {
        makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
    };
}

// T 08.07.1
export function positiveInteger(target: Function | object, propertyName: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set;

    descriptor.set = function(value: number) {
        if (value < 1 || !Number.isInteger(value)) {
            throw new Error('Invalid value');
        }

        if (originalSet) {
            originalSet.call(this.value);
        }
    };
}