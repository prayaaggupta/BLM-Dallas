import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlmMapComponent } from './blm-map/blm-map.component';
import { BlmEmailComponent } from './blm-email/blm-email.component';
import { BlmHomeComponent } from './blm-home/blm-home.component';


const routes: Routes = [
  { path: 'googleMap', component: BlmMapComponent },
  { path: 'blmEmail', component: BlmEmailComponent },
  { path: 'blmHome', component: BlmHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
