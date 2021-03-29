import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    public  maxUpvote;

  quotes:Quotes[] = [
    new Quotes('The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', 'Kelvin',new Date(2021,1,3),0,0),
    new Quotes('The way to get started is to quit talking and begin doing.','Walt Disney', 'Mercy',new Date(2021,1,24),0,0),
    new Quotes('Don\'t judge each day by the harvest you reap but by the seeds that you plant.','Robert Louis Stevenson', 'Mike Mwangi',new Date(2020,11,31),0,0),
    new Quotes('Whoever is happy will make others happy too.','Anne Frank', 'Joel',new Date(2021,1,9),0,0),
  ];
  
  addNewQuote(quote)
  {
    quote.completeDate = new Date(quote.duration)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quoteName}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  upVote(index)
  {
     this.quotes[index].upvotes = this.quotes[index].upvotes+1;

     if(this.quotes[index].upvotes>2)
     {
        this.maxUpvote=Quotes[index].upvotes;
     }
  }

  downVote(index)
  {
     this.quotes[index].downvotes = this.quotes[index].downvotes-1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
