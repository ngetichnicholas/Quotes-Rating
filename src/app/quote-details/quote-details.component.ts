
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() voting: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.voting.upvote+=1;
  }
  downvote(){
    this.voting.downvote+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}