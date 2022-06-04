import { Component,  OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

//import { UsuarioService } from '../../servicios/usuarioservises';

@Component({
    selector: 'app-universidad',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent  {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;



    /// pastel usuarios 
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ] },
        { data: [ 50, 150, 120 ] },
        { data: [ 250, 130, 70 ] }
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';
  
    // events
    public chartClicked1({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered1({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
 

    // transporte publico 
    public radarChartOptions: ChartConfiguration['options'] = {
        responsive: true,
      };
      public radarChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];
    
      public radarChartData: ChartData<'radar'> = {
        labels: this.radarChartLabels,
        datasets: [
          { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
          { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
        ]
      };
      public radarChartType: ChartType = 'radar';
    
      // events
      public chartClicked2({ event, active }: { event: ChartEvent, active: {}[] }): void {
        console.log(event, active);
      }
    
      public chartHovered2({ event, active }: { event: ChartEvent, active: {}[] }): void {
        console.log(event, active);
      }


    
      public barChartOptions: ChartConfiguration['options'] = {
        elements: {
          line: {
            tension: 0.4
          }
        },
        // We use these empty structures as placeholders for dynamic theming.
        scales: {
          x: {},
          y: {
            min: 10
          }
        },
        plugins: {
          legend: { display: true },
        }
      };
      public barChartLabels: string[] = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
      public barChartType: ChartType = 'bar';
    
      public barChartData: ChartData<'bar'> = {
        labels: this.barChartLabels,
        datasets: [
          { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
          { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
        ]
      };
    
      // events
      public chartClicked3({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
        console.log(event, active);
      }
    
      public chartHovered3({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
        console.log(event, active);
      }
    
      public randomize(): void {
        this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
      }
}