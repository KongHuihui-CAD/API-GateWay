import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AtomApiComponent }   from './atom-api.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

const atomAPIRoutes: Routes = [
  {
    path: '',
    component: AtomApiComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(atomAPIRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AtomApiRoutingModule { }


