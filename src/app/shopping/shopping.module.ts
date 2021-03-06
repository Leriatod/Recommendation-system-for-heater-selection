import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/services/auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductViewComponent },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
  declarations: [MyOrdersComponent, ProductsComponent, ProductViewComponent],
})
export class ShoppingModule {}
