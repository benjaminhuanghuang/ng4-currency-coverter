import { Component } from '@angular/core';

import { ExchangeService } from './exchange.service';

//<button (click)="update(baseAmountValue.value)" >Update</button>
//<strong >{{targetAmount}}</strong> GBP
@Component({
  selector: 'currency-converter',
  template: `
    Convert: <input type="number" bindon-ngModel="baseAmount" [class.error]="isInvalid(baseAmount)">{{baseCurrency}}
    <strong>{{targetAmount}}</strong> {{targetCurrency}}
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

  exchangeService;
  // button click
  // update(baseAmount){
  //     console.info("should update", baseAmount);
  //     this.targetAmount = parseFloat(baseAmount) * this.exchangeRate;
  // }

  // Need add provider in app.module
  constructor(exchangeService: ExchangeService) {
    this.exchangeService = exchangeService;
  }
  // text changed
  update1Way(baseAmount) {
    console.info("should update", baseAmount);
    this.baseAmount = parseFloat(baseAmount)
  }
  update(baseAmount) {
    this.baseAmount = baseAmount;
  }
  
  get targetAmount() {
    console.info('baseAmount valid: ', Number.isFinite(this.baseAmount));
    const exchangeRate = this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);

    return this.baseAmount * exchangeRate;
  }

  isInvalid(value) {
    return !Number.isFinite(this.baseAmount);
  }
}
