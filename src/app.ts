import { lab2 } from './labs/lab2';
import { lab3 } from './labs/lab3';
import { lab4 } from './labs/lab4';
import { lab5 } from './labs/lab5';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// lab2();
// lab3();
// lab4();
lab5();