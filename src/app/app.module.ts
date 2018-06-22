import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ComponentAdderService } from './component-adder.service';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { AboutRoutingModule } from 'src/app/about/about-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AboutRoutingModule
  ],
  providers: [ComponentAdderService],
  bootstrap: [AppComponent],
  entryComponents: [UserDashboardComponent, AdminDashboardComponent]
})
export class AppModule { }
