import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, Router} from '@angular/router';



import { AboutRoutingModule } from './about-routing.module';
import { ModelDrivenFormComponent } from '../model-driven-form/model-driven-form.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: []
})
export class AboutModule { }
