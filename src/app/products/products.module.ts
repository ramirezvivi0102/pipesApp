import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basicsPage/basicsPage.component';
import { NumbersPageComponent } from './pages/numbersPage/numbersPage.component';
import { UncommonPageComponent } from './pages/uncommonPage/uncommonPage.component';



@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
  
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
    
  ],
 
})
export class ProductsModule { }
