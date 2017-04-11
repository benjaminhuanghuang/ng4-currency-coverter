import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
    selector: 'currency-select',
    outputs: [],
    template: `
    <select [ngModel] = "selected" (ngModelChange)="onSelectedChange($event)">
      <option *ngFor="let currency of supportedCurrencies" [value]="currency">{{currency}}</option>
    </select>
  `
})
export class CurrencySelectComponent {
    // can set this property from outside
    @Input() selected: string;
    @Output() selectedChange = new EventEmitter<string>();

    private supportedCurrencies: string[];

    constructor(private exchangeService: ExchangeService) {
        this.supportedCurrencies = exchangeService.supportedCurrencies;
    }

    onSelectedChange(selected: string) {
        this.selected = selected;
        this.selectedChange.emit(selected);
    }

}
