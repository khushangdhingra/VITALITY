import { AlertsComponent } from './pages/alerts/alerts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "alerts",
    pathMatch: "full"
  },
  {
    path: "alerts",
    component: AlertsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
