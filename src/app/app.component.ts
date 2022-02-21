import { Quote } from '@angular/compiler';
import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = [];
  quotation: Quotation = {author: '', sentence: '', votes: 0};
  
  constructor() {
    this.quotes = QUOTES;
  }

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation  = {author: '', sentence: '', votes: 0};
  }

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }



}
