import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsShowcasePage } from './components-showcase.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentsShowcasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsShowcasePageRoutingModule {}
