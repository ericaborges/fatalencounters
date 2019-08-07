import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public selectedChart: { id: number, title: string };

  private charts = [
    { id: 1, title: 'Geo Statistics' },
    { id: 2, title: 'Fatality Numbers' },
    { id: 3, title: 'Gender Stats' },
    { id: 4, title: 'Timeline' }
  ]
  constructor() { }

  ngOnInit() {
    //load gender stats default
    this.selectedChart = this.charts[2];
  }

  selectVisualization(chartId: number) {
    this.selectedChart = this.charts.find(c => c.id == chartId);
  }

}

