import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../share/material/material.module';

import { StorageRoutingModule } from './storage-routing.module';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    StorageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StorageModule { }
