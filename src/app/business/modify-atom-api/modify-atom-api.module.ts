import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyAtomApiRoutingModule } from './modify-atom-api-routing.module';
import { ModifyAtomApiComponent } from './modify-atom-api.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ModifyAtomApiRoutingModule,
  ],
  declarations: [
    ModifyAtomApiComponent
  ]
})
export class ModifyAtomApiModule { }
