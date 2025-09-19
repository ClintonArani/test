import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoyaltiesComponent } from './components/royalties/royalties.component';
import { ReleaseComponent } from './components/release/release.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'royalties', component: RoyaltiesComponent},
    {path: 'release', component: ReleaseComponent}
];
