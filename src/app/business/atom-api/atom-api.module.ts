import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomApiRoutingModule } from './atom-api-routing.module';
import {AtomApiComponent} from './atom-api.component'
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { PageComponent } from '../pagination';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AtomApiRoutingModule
  ],
  declarations: [
    AtomApiComponent,
    PageComponent
  ]
})
export class AtomApiModule { }
