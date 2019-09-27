import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { NewhomeComponent }   from './newhome.component';


/**
 * 主体路由
 */
const newhomeRoutes: Routes = [
  {
    path: '',
    component: NewhomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(newhomeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewhomeRoutingModule { }
