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
    new Quotes("Five card stud, nothing wild. And the sky's the limit" ,'Captain Jean Luc Picard', 'Dave',new Date(2021,3,29),0,0),
    new Quotes("If I'm not back in five minutes, just wait longer.",'Ace Ventura', 'Brenda',new Date(2021,3,30),0,0),
    new Quotes("Bill, strange things are afoot at the Circle K.",'Bill & Ted', 'Ethan',new Date(2020,3,29),0,0),
    new Quotes("Never argue with the data." ,'Sheen', 'Joel',new Date(2021,3,28),0,0),
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
