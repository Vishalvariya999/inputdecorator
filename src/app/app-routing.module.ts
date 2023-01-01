import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'feture',
    loadChildren:()=>import('../app/feture/feture.module').then(module=>module.FetureModule)
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
