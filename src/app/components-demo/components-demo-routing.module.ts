import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsDemoPage } from './components-demo.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentsDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsDemoPageRoutingModule {}
