import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlEditComponent } from './pages/control/control-edit/control-edit.component';
import { ControlIndexComponent } from './pages/control/control-index/control-index.component';
import { ControlReviewComponent } from './pages/control/control-review/control-review.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'departamento', component: DepartamentoComponent},
  {path: 'control', component: ControlIndexComponent},
  {path: 'control/review/:id', component: ControlReviewComponent},
  {path: 'control/edit/:id', component: ControlEditComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
