import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: ModelDrivenFormComponent, pathMatch:'full'},
  {path:'admin', component:AdminDashboardComponent},
  {path:'guest', component: UserDashboardComponent},
  {path:'**', redirectTo:'guest'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
