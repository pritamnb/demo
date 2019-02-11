import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  title = 'dashboard';
  chart = [];
  chart2 = [];
  @ViewChild('lineChart') private chartRef;
  chart3: any;
  constructor() {}

  ngOnInit() {
    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Combo Bar and line Chart'
        }
      },
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            type: 'bar',
            label: 'My First dataset',
            data: [443, 256, 165, 10, 156, 265, 356, 543],
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false
          },
          {
            type: 'line',
            label: 'Dataset 2',
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            data: [443, 256, 165, 100, 56, 65, 35, 543],
            fill: true
          },
          {
            type: 'bar',
            label: 'My Second dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false
          }
        ]
      }
    });

    const options = {
      // aspectRatio: 1,
      // legend: false,
      tooltips: false,

      elements: {
        point: {
          borderWidth: function(context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function(context) {
            return 'red';
          },
          hoverBorderWidth: function(context) {
            const value = context.dataset.data[context.dataIndex];
            return Math.round((8 * value.v) / 1000);
          },
          radius: function(context) {
            const value = context.dataset.data[context.dataIndex];
            const size = context.chart.width;
            const base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }
        }
      }
    };

    // tslint:disable-next-line:no-unused-expression
    // new Chart('bubble', {
    //   type: 'bubble',
    //   options: options,
    //   data: {
    //     datasets: [
    //       {
    //         backgroundColor: 'rgba(255,0,0,0.4)',
    //         label: 'Name 1',
    //         data: [
    //           {
    //             x: 50,
    //             y: 60,
    //             v: 200
    //           },
    //           {
    //             x: 50,
    //             y: 80,
    //             v: 700
    //           },
    //           {
    //             x: 80,
    //             y: 60,
    //             v: 100
    //           },
    //           {
    //             x: 60,
    //             y: 60,
    //             v: 500
    //           },
    //           {
    //             x: 90,
    //             y: 80,
    //             v: 800
    //           }
    //         ]
    //       },
    //       {
    //         backgroundColor: 'rgba(0,255,0,0.4)',
    //         label: 'Name 2',
    //         data: [
    //           {
    //             x: 60,
    //             y: 20,
    //             v: 200
    //           },
    //           {
    //             x: 55,
    //             y: 70,
    //             v: 800
    //           },
    //           {
    //             x: 80,
    //             y: 30,
    //             v: 500
    //           },
    //           {
    //             x: 70,
    //             y: 40,
    //             v: 800
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // });

    // tslint:disable-next-line:no-unused-expression
    // new Chart('doughnut', {
    //   type: 'doughnut',
    //   options: {
    //     responsive: true,
    //     title: {
    //       display: true,
    //       text: 'Doughnut Chart'
    //     },
    //     legend: {
    //       position: 'top'
    //     },
    //     animation: {
    //       animateScale: true,
    //       animateRotate: true
    //     }
    //   },
    //   data: {
    //     datasets: [
    //       {
    //         data: [45, 10, 5, 25, 15],
    //         backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
    //         label: 'Dataset 1'
    //       }
    //     ],
    //     labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
    //   }
    // });

    // tslint:disable-next-line:no-unused-expression
    new Chart('pie', {
      type: 'pie',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Pie Chart'
        },
        legend: {
          position: 'top'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [
          {
            data: [45, 10, 5, 25, 15].reverse(),
            backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
            label: 'Dataset 1'
          }
        ],
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
      }
    });

    // tslint:disable-next-line:no-unused-expression
    // new Chart('line', {
    //   type: 'line',
    //   data: {
    //     labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], // your labels array
    //     datasets: [
    //       {
    //         data: [443, 256, 165, 10, 156, 265, 356, 543], // your data array
    //         borderColor: '#00AEFF',
    //         fill: false
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });

    // this.chart3 = new Chart(this.chartRef.nativeElement,
    // tslint:disable-next-line:no-unused-expression
    new Chart('line', {
      type: 'line',
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], // your labels array
        datasets: [
          {
            data: [0, 0, 0, 450, 0 , 0 , ], // your data array
            borderColor: '#00AEFF',
            lineTension: 0,
            fill: 'origin'
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        // plugins: {
        //   filler: {
        //     propagate: true
        //   }
        // },
        line: {
            bezierCurve : false,
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
           }},
            {
              display: true
            }
          ],
          yAxes: [{
            gridLines: {
              display: false
           }},
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
