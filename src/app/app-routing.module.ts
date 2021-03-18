import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PortalComponent } from './shared/components/portal/portal.component';
import { appRoutingURL } from './shared/configs/app-routing-url.config';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: appRoutingURL.USER_PAGE,
    canActivate: [AuthGuardService],
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: appRoutingURL.PORTAL_PAGE,
    component: PortalComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: appRoutingURL.NOT_FOUND
      },
      {
        path: appRoutingURL.NOT_FOUND,
        component: PageNotFoundComponent
      },
      {
        path: appRoutingURL.DASHBOARD_PAGE,
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: appRoutingURL.CUSTOMER_PAGE,
        loadChildren: './customer/customer.module#CustomerModule'
      },
      {
        path: appRoutingURL.PROFILE_PAGE,
        component: ProfileComponent
      },
      {
        path: '**', component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
