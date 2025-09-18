import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TableData {
  username: string;
  email: string;
  accountId: number;
  expense: number;
  earnings: number;
  icon: string;
  checked: boolean;
  isEditing?: boolean; // tracks if row is in edit mode
  original?: Partial<TableData>; // backup for cancel
}

@Component({
  selector: 'app-royalties',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './royalties.component.html',
  styleUrls: ['./royalties.component.css']
})
export class RoyaltiesComponent {
  allSelected = false;

  // Main tabs (Royalties, Withdrawals, Funding)
  activeSection: string = 'royalties'; // default section

  // Sub tabs (inside royalties management)
  activeTab: string = 'statement';

  // Royalties data
  tableData: TableData[] = [
    { username: 'Chezaa Africa Limited', email: "chezaa.africalimited@gmail.com", accountId: 78544567, expense: 15, earnings: 31.26, icon: "fas fa-edit", checked: false },
    { username: 'Evoo Records', email: "evoorecords@gmail.com", accountId: 89424566, expense: 8, earnings: 15, icon: "fas fa-edit", checked: false },
    { username: 'Wave Studios', email: "wavestudios@gmail.com", accountId: 12457896, expense: 8, earnings: 15, icon: "fas fa-edit", checked: false },
    { username: 'Wave Studios', email: "wavestudios@gmail.com", accountId: 12457896, expense: 8, earnings: 15, icon: "fas fa-edit", checked: false },
    { username: 'Wave Studios', email: "wavestudios@gmail.com", accountId: 12457896, expense: 8, earnings: 15, icon: "fas fa-edit", checked: false },
    { username: 'Wave Studios', email: "wavestudios@gmail.com", accountId: 12457896, expense: 8, earnings: 15, icon: "fas fa-edit", checked: false },
    { username: 'Wave Studios', email: "wavestudios@gmail.com", accountId: 12457896, expense: 8, earnings: 15, icon: "fas fa-edit", checked: false },
  ];

  // Withdrawals data
  withdrawalsData = [
    { requestId: 'WR-1021', user: 'John Doe', amount: 450, status: 'Pending', date: '2025-09-10' },
    { requestId: 'WR-1022', user: 'Jane Smith', amount: 780, status: 'Completed', date: '2025-09-11' },
  ];

  // Funding data
  fundingData = [
    { fundingId: 'FD-3011', source: 'ABC Records', amount: 5000, type: 'Sponsorship', date: '2025-09-05' },
    { fundingId: 'FD-3012', source: 'XYZ Investors', amount: 10000, type: 'Equity', date: '2025-09-07' },
  ];

  // Switch sub-tabs (inside royalties section)
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Switch main section (Royalties, Withdrawals, Funding)
  setActiveSection(section: string) {
    this.activeSection = section;
  }

  // Toggle select-all checkbox
  toggleAllRows() {
    this.tableData.forEach(item => item.checked = this.allSelected);
  }

  // Update header checkbox when individual row is clicked
  updateSelectAllState() {
    this.allSelected = this.tableData.every(item => item.checked);
  }

  // Enter edit mode for a row
  toggleEdit(item: TableData) {
    item.isEditing = true;
    item.original = { ...item }; // store backup for cancel
  }

  // Save changes and exit edit mode
  saveRow(item: TableData) {
    item.isEditing = false;
    delete item.original;
  }

  // Cancel editing and revert changes
  cancelEdit(item: TableData) {
    item.isEditing = false;
    if (item.original) {
      Object.assign(item, item.original);
      delete item.original;
    }
  }
}
