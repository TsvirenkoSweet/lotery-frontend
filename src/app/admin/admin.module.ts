import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {AdminProductComponent} from './admin-product/admin-product.component';
import {AdminReportComponent} from './admin-report/admin-report.component';
import {AdminUserComponent} from './admin-user/admin-user.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    { path: '', component: AdminPanelComponent },
    { path: 'panel', component: AdminPanelComponent },
    { path: 'product', component: AdminProductComponent },
    { path: 'report', component: AdminReportComponent },
    { path: 'user', component: AdminUserComponent },
  ];

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminProductComponent,
    AdminReportComponent,
    AdminUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
