import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basicsPage/basicsPage.component';
import { NumbersPageComponent } from './pages/numbersPage/numbersPage.component';
import { UncommonPageComponent } from './pages/uncommonPage/uncommonPage.component';
import { OrderComponent } from './pages/order/order.component';

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
    path:'custom',
    component:OrderComponent,
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
