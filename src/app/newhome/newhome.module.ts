import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NewhomeComponent }   from './newhome.component';

import { NewhomeRoutingModule } from './newhome-routing.module';

import { UserBusinessService} from '../business-service/user/user-business.service';



@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     ReactiveFormsModule,
     NgbModule,
     NewhomeRoutingModule
  ],
  declarations: [
    NewhomeComponent
  ],
  exports:      [],
  providers:    [
    UserBusinessService
  ]
})
export class NewhomeModule { }
