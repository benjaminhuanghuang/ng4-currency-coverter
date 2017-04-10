import { Component } from '@angular/core';

//<button (click)="update(baseAmountValue.value)" >Update</button>
//<strong >{{targetAmount}}</strong> GBP
@Component({
    selector: 'currency-converter',
    template: `
    Convert(one-way binding, component->view): <input id="baseAmountField" type="number" [value]="baseAmount" 
      (input)="update1Way($event.target.value)"> 
    <br>
    Convert(tow-way binding): <input type="number" [ngModel]="baseAmount" 
      (ngModelChange)="baseAmount= $event"> 
    <br>
    Convert(tow-way binding 2): <input type="number" [(ngModel)]="baseAmount"> 
     <br>
    Convert(tow-way binding 3): <input type="number" bindon-ngModel="baseAmount"> 
    <p>
    <strong>{{baseAmount}}</strong> USD =
    <strong>{{getTargetAmount()}}</strong> GBP
    </p>
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
    update1Way(baseAmount) {
        console.info("should update", baseAmount);
        this.baseAmount = parseFloat(baseAmount)
        this.targetAmount = baseAmount * this.exchangeRate;
    }
    update(baseAmount) {
        this.baseAmount = baseAmount;
    }
    getTargetAmount(){
      return this.baseAmount * this.exchangeRate;
    }
}
