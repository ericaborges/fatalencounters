import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cardTitle: string;

  private cards = [
    { id: 1, title: 'Geo Statistics' },
    { id: 2, title: 'Fatality Numbers' },
    { id: 3, title: 'Gender Stats' },
    { id: 4, title: 'Timeline' }
  ]
  constructor() { }

  ngOnInit() {
    //load geo stats default
    this.cardTitle = this.cards[2].title
  }

  selectVisualization(cardNumber: number) {
    this.cardTitle = this.cards.find(c => c.id == cardNumber).title
  }
  
}

