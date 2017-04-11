import { Component } from '@angular/core';

import { ExchangeService } from './exchange.service';

//<button (click)="update(baseAmountValue.value)" >Update</button>
//<strong >{{targetAmount}}</strong> GBP
@Component({
  selector: 'currency-converter',
  template: `
    Convert: <input type="number" [(ngModel)]="baseAmount" [class.error]="isInvalid(baseAmount)">
    <currency-select [(selected)]="baseCurrency"></currency-select>
    <strong>{{targetAmount | fixed:1}}</strong> 
    <currency-select [(selected)]="targetCurrency"></currency-select>
    <p *ngIf="isInvalid(baseAmount)">Please enter a valid amount </p>
    <p>({{baseCurrency}} to {{targetCurrency}})</p>
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
    .error {
      background-color:#ff6666;
    }
  `]
})
export class AppComponent {
  baseCurrency = 'USD';
  targetCurrency = 'GBP';
  baseAmount = 1;

  // button click
  // update(baseAmount){
  //     console.info("should update", baseAmount);
  //     this.targetAmount = parseFloat(baseAmount) * this.exchangeRate;
  // }

  // Need add provider in app.module
  constructor(private exchangeService: ExchangeService) {
  }

  update(baseAmount) {
    this.baseAmount = baseAmount;
  }

  get targetAmount() {
    const exchangeRate = this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
    //return (this.baseAmount * exchangeRate).toFixed(2);  we don't want to return a string here.
    return this.baseAmount * exchangeRate;
  }

  isInvalid(value) {
    return !Number.isFinite(this.baseAmount);
  }
}
