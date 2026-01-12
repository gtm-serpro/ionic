import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ArquivamentoPageRoutingModule } from './arquivamento-routing.module';
import { ArquivamentoPage } from './arquivamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArquivamentoPageRoutingModule
  ],
  declarations: [ArquivamentoPage]
})
export class ArquivamentoPageModule {}