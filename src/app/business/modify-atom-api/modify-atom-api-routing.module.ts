import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyAtomApiComponent } from './modify-atom-api.component';


const createAtomApiRoutes: Routes = [
  {
    path: '',
    component: ModifyAtomApiComponent
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
export class ModifyAtomApiRoutingModule { }


