import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAtomApiRoutingModule } from './create-atom-api-routing.module';
import { CreateAtomApiComponent } from './create-atom-api.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CreateAtomApiRoutingModule
  ],
  declarations: [
    CreateAtomApiComponent
  ]
})
export class CreateAtomApiModule { }
