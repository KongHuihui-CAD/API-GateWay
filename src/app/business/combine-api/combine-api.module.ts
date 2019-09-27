import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombineApiRoutingModule } from './combine-api-routing.module';
import {CombineApiComponent} from './combine-api.component'
import { PageComponent } from '../pagination';

@NgModule({
  imports: [
    CommonModule,
    CombineApiRoutingModule
  ],
  declarations: [
    CombineApiComponent
  ]
})
export class CombineApiModule { }
