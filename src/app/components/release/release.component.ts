import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-release',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './release.component.html',
  styleUrl: './release.component.css'
})
export class ReleaseComponent {
  isEditOn: boolean = false;
  previewUrl: string | ArrayBuffer | null = null;

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

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
