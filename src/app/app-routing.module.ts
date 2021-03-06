import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Lazy1Component } from './lazy1/lazy1.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  // {path: 'lazy1', component:Lazy1Component}
  {path: 'lazy1', loadChildren:'app/lazy1/lazy1.module#Lazy1Module'}
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Lazy1RoutingModule { }
