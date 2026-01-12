import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArquivamentoPage } from './arquivamento.page';

const routes: Routes = [
  {
    path: '',
    component: ArquivamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArquivamentoPageRoutingModule {}