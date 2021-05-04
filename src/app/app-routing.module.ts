import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductComponent} from './product/product.component';
import {AuthGuard} from './shared/clases/auth.guard';

const routes: Routes = [
  { path: '', component: AuthLayoutComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'password-recovery', canActivate: [AuthGuard], component: LoginComponent },
      { path: 'set-new-password', canActivate: [AuthGuard], component: LoginComponent },
    ]
  },
  { path: '', component: MainLayoutComponent, children: [
      { path: '', component: AppComponent },
      { path: 'product', component: ProductComponent },
    ]
  },
  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
