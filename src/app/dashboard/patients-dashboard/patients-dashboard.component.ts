import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartConfiguration } from 'chart.js';
import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// If using any chart library, import its module here (example below)
// import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-patients-dashboard',
  standalone: true,
  imports: [
    CommonModule, MatCard,
    MatCardTitle,
    MatCardContent,
    CommonModule,MatTableModule,MatCardModule,MatListModule,MatIconModule,
    NgChartsModule,
    HttpClientModule,
    // NgChartsModule, // uncomment if using chart components
  ],
  templateUrl: './patients-dashboard.component.html',
  styleUrls: ['./patients-dashboard.component.css']
})
export class PatientsDashboardComponent implements OnInit {
  patients: any[] = [];
  dataSummary = [];
  cities = [];
  states = [];
  logs = [];
  recentUpdates = [];

  pieChartOptions: any;
  barChartOptions: any;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatientsDashboard().subscribe({ next: (response) => {
        console.log(response)
      console.log(response.data)
      this.patients = response.data;
      this.states = response.stateCounts
      this.cities = response.cityCounts
  .sort((a, b) => b.count - a.count)
  .slice(0, 20);
      this.dataSummary = [
        {
          type:"total",
          name: 'Total Patients',
          count: response.totalCount
        },
        ...response.genderCounts.map(g => ({
          name: `${g.id.charAt(0).toUpperCase() + g.id.slice(1)} Patients`,
          count: g.count
        }))

      ];

      // this.prepareSummary();
      this.prepareCharts();
      this.prepareLogs();
    }});
  }

  // prepareSummary() {
  //   const total = this.patients.length;
  //   const male = this.patients.filter(p => p.gender === 'male').length;
  //   const female = this.patients.filter(p => p.gender === 'female').length;

  //   this.dataSummary = [
  //     { name: 'Total Patients', count: total },
  //     { name: 'Male Patients', count: male },
  //     { name: 'Female Patients', count: female },
  //   ];
  // }

  prepareCharts() {
    const genderCounts = this.patients.reduce((acc, p) => {
      acc[p.gender] = (acc[p.gender] || 0) + 1;
      return acc;
    }, {});

    this.pieChartOptions = {
       type: 'pie',
  data: {
    labels: this.cities.map(s => s.id),
    datasets: [{
      data: this.cities.map(s => s.count),
      backgroundColor: [
        '#42A5F5', '#66BB6A', '#FFA726', '#EF5350',
        '#AB47BC', '#26C6DA', '#FF7043', '#D4E157',
        '#5C6BC0', '#26A69A', '#FFCA28', '#8D6E63'
      ]
    }]
  },
  options: {
    responsive: true,
     plugins: {
      legend: {
        position: 'right', // 👈 Change to 'left' if needed
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 20
        }
      }
    },
    layout: {
      padding: 10
    }
  }
    };

    // const cities = this.patients.reduce((acc, p) => {
    //   const city = p.address?.[0]?.city || 'Unknown';
    //   acc[city] = (acc[city] || 0) + 1;
    //   return acc;
    // }, {});
    console.log(this.cities)
  //   this.barChartOptions = {
  //      type: 'bar',
  // data: {
  //   labels: this.states.map(s => s.id),
  //   datasets: [{
  //     label: 'Top States',
  //     data: this.states.map(s => s.count),
  //     backgroundColor: '#3f51b5'
  //   }]
  // },
  // options: {
  //   responsive: true,
  //   scales: {
  //     y: {
  //       beginAtZero: true
  //     }
  //   }
  // }
  //   }
  this.barChartOptions = {
  type: 'line',
  data: {
    labels: this.states.map(city => city.id),
    datasets: [{
      label: 'Patient Count by State',
      data: this.states.map(city => city.count),
      borderColor: '#3f51b5',
      backgroundColor: 'rgba(63, 81, 181, 0.5)',
      tension: 0.3,
      pointRadius: 1,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // Important to allow fixed height
    plugins: {
      legend: { display: true },
      tooltip: { mode: 'index', intersect: false },
      zoom: {
        pan: { enabled: true, mode: 'x' },
        zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'x' }
      }
    },
    scales: {
      x: {
        display: true,
        ticks: { autoSkip: true, maxRotation: 90, minRotation: 45 },
        title: { display: true, text: 'State' }
      },
      y: {
        beginAtZero: false,
        title: { display: true, text: 'Patient Count' }
      }
    }
  }
};


  }
  prepareLogs() {
    this.logs = this.patients.slice(0, 10).map(p => ({
      timestamp: p.lastUpdated,
      message: `Patient ${p.name?.[0]?.text || 'Unknown'} updated`
    }));

    this.recentUpdates = this.patients.slice(0, 10).map(p => ({
      type: 'Patient Update',
      timestamp: p.lastUpdated,
      description: `Changes made to patient: ${p.name?.[0]?.text || 'Unknown'}`
    }));
  }
}
