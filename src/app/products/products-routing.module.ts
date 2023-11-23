import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basicsPage/basicsPage.component';
import { NumbersPageComponent } from './pages/numbersPage/numbersPage.component';
import { UncommonPageComponent } from './pages/uncommonPage/uncommonPage.component';

const routes: Routes = [

  {
    path:'',
    component:BasicsPageComponent,
  },
  {
    path:'numbers',
    component:NumbersPageComponent,
  },
  {
    path:'uncommon',
    component:UncommonPageComponent,
  },
  {
    path:'**',
    redirectTo:'',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
