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
    Convert(tow-way binding 3): <input type="number" bindon-ngModel="baseAmount" [class.error]="isInvalid(baseAmount)"> 
    <p>
    <strong>{{baseAmount}}</strong> USD =
    <strong>{{targetAmount}}</strong> GBP
    </p>
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
    exchangeRate = 0.70;
    baseAmount = 2;
    
    // button click
    // update(baseAmount){
    //     console.info("should update", baseAmount);
    //     this.targetAmount = parseFloat(baseAmount) * this.exchangeRate;
    // }

    // text changed
    update1Way(baseAmount) {
        console.info("should update", baseAmount);
        this.baseAmount = parseFloat(baseAmount)
    }
    update(baseAmount) {
        this.baseAmount = baseAmount;
    }
    get targetAmount(){
      console.info('baseAmount valid: ', Number.isFinite(this.baseAmount));
      return this.baseAmount * this.exchangeRate;
    }
    isInvalid(value)
    {
      return !Number.isFinite(this.baseAmount);
    }
}
