import { Component, OnInit, NgZone } from '@angular/core';
import * as jsonData from "src/app/core/moks/deaths_2019.json";

declare var google: any;

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})
export class MapChartComponent implements OnInit {
  constructor(private zone: NgZone) { }

  ngOnInit() {
    google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(this.drawMap);
  }


  drawMap() {
    var result = [];
    result.push(['State', 'Deaths']);
    var jsonArr = jsonData['default'];
    for (var i in jsonArr){
      result.push([jsonArr[i]['State'], jsonArr[i]['number']]);
    }
      
    var data = google.visualization.arrayToDataTable(result);

    var options = {
      region: 'US',
      displayMode: 'regions',
      resolution: 'provinces',
      colorAxis: {colors: ['#282a59', '#a2cbde', '#8db8fc']},
      backgroundColor: '#ddd',
      datalessRegionColor: '#fff',
      defaultColor: '#f5f5f5',
      legend:  {textStyle: {color: 'black', fontSize: 11}}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));

    chart.draw(data, options);
  }

}
