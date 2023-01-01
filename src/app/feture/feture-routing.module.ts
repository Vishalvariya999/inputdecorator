import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {
    path:'child1',
    component:ChildComponent
  },
  // {
  //   path:'child2',
  //   component:Child2Component
  // },
  // {
  //   path:'**',
  //   redirectTo:'child1'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FetureRoutingModule { }
