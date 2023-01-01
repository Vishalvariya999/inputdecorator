import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {
    path:'child',
    component:ChildComponent
  },
  {
    path:'child2/:id',
    component:Child2Component
  },  
  {
    path:'**',
    redirectTo:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FetureRoutingModule { }
