import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReservationsPageComponent } from './components/pages/reservations/reservations-page/reservations-page.component';

const routes: Routes = [
  { path: 'reservations', component: ReservationsPageComponent },
  { path: '',   redirectTo: '/reservations', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
