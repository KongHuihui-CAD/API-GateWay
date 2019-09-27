import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FlowControlComponent }   from './flow-control.component';

const flowControlRoutes: Routes = [
  {
    path: '',
    component: FlowControlComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(flowControlRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FlowControlRoutingModule { }


