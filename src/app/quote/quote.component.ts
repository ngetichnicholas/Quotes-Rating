import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Nicholas','Networking','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2021,4,15),65,5),
    new Quote (2,'Mutie','Technology','The great myth of our times is that technology is communication.','James Cameron',new Date(2021,4,13),12,3),
    new Quote (3,'Johnstone','Religion','If you set your goals ridiculously high and it is a failure, you will fail above everyone else success.','Libby Larsen',new Date(2021,4,8),17,5),
    new Quote (4,'Odero','Literature','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2021,4,11),42,6),
    new Quote (5,'Kenedy','Computer Programming','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2021,4,12),5,12),
    new Quote (6,'Aspin','Social Life','The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.','Helen Keller',new Date(2021,4,12),40,16)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
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
 
  // displayInfo(index){
  //   this.quotes[index].showInfo = !this.quotes[index].showInfo;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
