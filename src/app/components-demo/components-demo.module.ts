import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsDemoPageRoutingModule } from './components-demo-routing.module';

import { ComponentsDemoPage } from './components-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsDemoPageRoutingModule
  ],
  declarations: [ComponentsDemoPage]
})
export class ComponentsDemoPageModule {}
