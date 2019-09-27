import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowControlRoutingModule } from './flow-control-routing.module';
import {FlowControlComponent} from './flow-control.component'
import {FlowcontrolService} from './flowcontrol.service';
//import { PageComponent } from '../pagination';

@NgModule({
  imports: [
    CommonModule,
    FlowControlRoutingModule,
  ],
  declarations: [
    FlowControlComponent,
    //PageComponent,
  ]
})
export class FlowControlModule { }
