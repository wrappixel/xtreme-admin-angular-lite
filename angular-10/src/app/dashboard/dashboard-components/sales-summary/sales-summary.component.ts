import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.css']
})
export class SalesSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // lineChart
    public lineChartData: Array<any> = [
      { data: [0, 5, 6, 8, 25, 9, 8, 24], label: 'Iphone'},
      { data: [0, 3, 1, 2, 8, 1, 5, 1], label: 'Ipad' }
    ];
    public lineChartLabels: Array<string> = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
    ];
    public lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
    public lineChartColors: Array<Object> = [
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

}
