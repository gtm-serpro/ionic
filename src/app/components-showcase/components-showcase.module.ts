import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsShowcasePageRoutingModule } from './components-showcase-routing.module';
import { ComponentsShowcasePage } from './components-showcase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsShowcasePageRoutingModule
  ],
  declarations: [ComponentsShowcasePage]
})
export class ComponentsShowcasePageModule {}
