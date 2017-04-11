import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CurrencySelectComponent } from './currency-select.component';
import { ExchangeService } from './exchange.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CurrencySelectComponent],
  bootstrap: [AppComponent],
  providers: [ExchangeService]
})
export class AppModule { }