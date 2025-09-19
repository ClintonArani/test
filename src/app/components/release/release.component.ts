import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-release',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './release.component.html',
  styleUrl: './release.component.css'
})
export class ReleaseComponent {
  isEditOn: boolean = false;

  formData = {
    artist: '',
    releaseName: '',
    metadata: '',
    releaseVersion: '',
    genre: '',
    subGenre: ''
  };


  statuses: string[] = ['Pending', 'Approved', 'Rejected'];
  selectedStatus: string = 'Pending';

  toggleEdit() {
    this.isEditOn = !this.isEditOn;
  }
}
