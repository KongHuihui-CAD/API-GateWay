import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRuleRoutingModule } from './route-rule-routing.module';
import {RouteRuleComponent} from './route-rule.component'

@NgModule({
  imports: [
    CommonModule,
    RouteRuleRoutingModule
  ],
  declarations: [
    RouteRuleComponent
  ]
})
export class RouteRuleModule { }
