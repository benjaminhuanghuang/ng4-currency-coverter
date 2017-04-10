import { Component } from '@angular/core';

//<button (click)="update(baseAmountValue.value)" >Update</button>
@Component({
    selector: 'currency-converter',
    template: `
    <input id="baseAmountField" type="number" [value]="baseAmount" (input)="update($event.target.value)"> USD =
    <strong id="targetAmountText">{{targetAmount}}</strong> GBP
  `,
    styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
  `]
})
export class AppComponent {
    exchangeRate = 0.70;
    baseAmount = 2;
    targetAmount = this.exchangeRate;

    // button click
    // update(baseAmount){
    //     console.info("should update", baseAmount);
    //     this.targetAmount = parseFloat(baseAmount) * this.exchangeRate;
    // }

    // text changed
    update(baseAmount) {
        console.info("should update", baseAmount);
        this.targetAmount = parseFloat(baseAmount) * this.exchangeRate;
    }

}
