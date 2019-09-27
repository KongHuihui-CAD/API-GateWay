import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CombineApiComponent }   from './combine-api.component';

const combineAPIRoutes: Routes = [
  {
    path: '',
    component: CombineApiComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(combineAPIRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CombineApiRoutingModule { }


