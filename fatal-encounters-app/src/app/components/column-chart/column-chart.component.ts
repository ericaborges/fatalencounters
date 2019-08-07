import { Component, OnInit } from '@angular/core';
import * as jsonData from "src/app/core/moks/deaths_by_year.json";

declare var google: any;

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {
    var result = [];
    debugger;
    result.push(['Year', 'Deaths']);
    var jsonArr = jsonData['default'];
    for (var i in jsonArr) {
      result.push([jsonArr[i]['year'], jsonArr[i]['deaths']]);
    }

    var data = google.visualization.arrayToDataTable(result);

    var options = {
      title: '',
      height: 400,
      hAxis: {
        title: 'Year' 
      },
      vAxis: {
        title: '# of deaths'
      }
    };

    var yearFormatter = new google.visualization.DateFormat({
      pattern: "yyyy"
    });
    yearFormatter.format(data, 0);

    var chart = new google.visualization.ColumnChart(
      document.getElementById('chart_div'));

    chart.draw(data, options);
  }

}
