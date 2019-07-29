import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  private chart: any;
  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    am4core.useTheme(am4themes_animated);

    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.PieChart);  
      let pieSeries = chart.series.push(new am4charts.PieSeries());

      //chart.dataSource.url = "core/mocks/total_by_gender.json";

      chart.data = [{"total": 22978,"gender":"male"},{"total":2423,"gender":"female"}];
      pieSeries.dataFields.value = "total";
      pieSeries.dataFields.category = "gender";
      // Put a thick white border around each Slice
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      chart.legend = new am4charts.Legend();
      chart.legend.valueLabels.template.text = "{value.value}";
      this.chart = chart;
    });

    
  }
}
