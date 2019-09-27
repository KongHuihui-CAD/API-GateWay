import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RouteRuleComponent }   from './route-rule.component';

const routeRuleRoutes: Routes = [
  {
    path: '',
    component: RouteRuleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routeRuleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteRuleRoutingModule { }


