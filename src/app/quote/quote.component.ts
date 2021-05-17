import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Sylvia','Networking','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2021,4,15),0,0),
    new Quote (2,'Mutie','Technology','The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.','Winston Churchill',new Date(2021,4,13),0,0),
    new Quote (3,'Johnstone','Motivation','We May Encounter Many Defeats But We Must Not Be Defeated.','Maya Angelou',new Date(2021,4,8),0,0),
    new Quote (4,'Odero','Literature','The Best Way To Get Started Is To Quit Talking And Begin Doing.','Walt Disney',new Date(2021,4,11),0,0),
    new Quote (5,'Kenedy','Computer Programming','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2021,4,12),0,0),
    new Quote (6,'Aspin','Social Life','The Man Who Has Confidence In Himself Gains The Confidence Of Others.','Hasidic Proverb',new Date(2021,4,12),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  preNum:number;
  lastNum:number;
  counter:number;
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvote;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
