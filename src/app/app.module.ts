import { UserService } from './user.service';
import { AuthGuard as AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    HomeComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    NgbModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },

      { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },

      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard] },
    ])
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
