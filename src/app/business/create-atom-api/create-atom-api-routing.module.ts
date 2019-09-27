import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CreateAtomApiComponent } from './create-atom-api.component';

const createAtomApiRoutes: Routes = [
  {
    path: '',
    component: CreateAtomApiComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(createAtomApiRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CreateAtomApiRoutingModule { }


