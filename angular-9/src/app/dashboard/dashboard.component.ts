import { Component, AfterViewInit } from '@angular/core';
declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }
  // lineChart
  public lineChartData: Array<any> = [
    { data: [0, 5, 6, 8, 25, 9, 8, 24], label: 'Iphone'},
    { data: [0, 3, 1, 2, 8, 1, 5, 1], label: 'Ipad' }
  ];
  public lineChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(41, 98, 255,0.1)',
      borderColor: '#2962FF',
      pointBackgroundColor: '#2962FF',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2962FF'
    },
    {
      // dark grey
      backgroundColor: 'rgba(116, 96, 238,0.1)',
      borderColor: '#7460ee',
      pointBackgroundColor: '#7460ee',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#7460ee'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  ngAfterViewInit() {}
}
