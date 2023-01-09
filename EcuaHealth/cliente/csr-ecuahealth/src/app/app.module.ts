import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { ControlEditComponent } from './pages/control/control-edit/control-edit.component';
import { ControlIndexComponent } from './pages/control/control-index/control-index.component';
import { ControlReviewComponent } from './pages/control/control-review/control-review.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './partials/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    ControlEditComponent,
    ControlIndexComponent,
    ControlReviewComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
