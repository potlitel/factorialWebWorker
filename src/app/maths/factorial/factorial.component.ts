import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css'],
})
export class FactorialComponent {
  factorialResult!: number;
  factorialInput: number = 1;

  constructor() {
    this.calculateFactorial();
  }

  calculateFactorial() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('../../app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.factorialResult = data;
      };
      worker.postMessage(this.factorialInput);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
