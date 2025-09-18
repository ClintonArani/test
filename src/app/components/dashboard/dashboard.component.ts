import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

interface TableData {
  name: string;
  value: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showAll: boolean = false; 
  services = [
    {title: 'users', icon: 'fas fa-users icon-sign icons'},
    {title: 'catalog', icon: 'fas fa-file-alt icon-sign icons'},
    {title: 'revenue', icon: 'fas fa-dollar-sign circled-icon'},
  ]

  tableData: TableData[] = [
    {name: '07/09/2025', value: "All pending submissions must be fully reviewed and cleared by the end of today. Please ensure that no approvals are granted to applicants who have not yet reached at least 100,000 cumulative streams on Spotifyy and who have generated less than USD 2,000 in revenue." },
    {name: '07/09/2025', value: "All pending submissions must be fully reviewed and cleared by the end of today. Please ensure that no approvals are granted to applicants who have not yet reached at least 100,000 cumulative streams on Spotifyy and who have generated less than USD 2,000 in revenue." },
    {name: '07/09/2025', value: "All pending submissions must be fully reviewed and cleared by the end of today. Please ensure that no approvals are granted to applicants who have not yet reached at least 100,000 cumulative streams on Spotifyy and who have generated less than USD 2,000 in revenue." },
    {name: '07/09/2025', value: "All pending submissions must be fully reviewed and cleared by the end of today. Please ensure that no approvals are granted to applicants who have not yet reached at least 100,000 cumulative streams on Spotifyy and who have generated less than USD 2,000 in revenue." },
    {name: '07/09/2025', value: "All pending submissions must be fully reviewed and cleared by the end of today. Please ensure that no approvals are granted to applicants who have not yet reached at least 100,000 cumulative streams on Spotifyy and who have generated less than USD 2,000 in revenue." },
    {name: '07/09/2025', value: "All pending submissions must be fully reviewed and cleared by the end of today. Please ensure that no approvals are granted to applicants who have not yet reached at least 100,000 cumulative streams on Spotifyy and who have generated less than USD 2,000 in revenue." },
    {name: '07/09/2025', value: "All pending submissions must be fully reviewed and cleared by the end of today. Please ensure that no approvals are granted to applicants who have not yet reached at least 100,000 cumulative streams on Spotifyy and who have generated less than USD 2,000 in revenue." },
  ];

  releases = [
    {status: 'Pending', value: '(489)'},
    {status: 'Submitted', value: '(600)'},
    {status: 'Approved', value: '(2870)'}
  ]

  toggleViewAll() {
    this.showAll = !this.showAll;
  }
}
