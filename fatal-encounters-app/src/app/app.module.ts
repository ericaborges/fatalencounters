import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapChartComponent } from './components/map-chart/map-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { GenderStatisticsService } from './core/services/gender-statistics.service';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapChartComponent,
    PieChartComponent,
    ColumnChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GenderStatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
