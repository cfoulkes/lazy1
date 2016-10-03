import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Lazy1Component } from './lazy1.component';

const routes: Routes = [{
        path: '',
        component: Lazy1Component
    }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Lazy1Component]
})
export class Lazy1Module { }
