import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { DepositComponent } from './component/deposit/deposit.component';
import { WithdrawComponent } from './component/withdraw/withdraw.component';
import { TransferComponent } from './component/transfer/transfer.component';
import { CheckbalanceComponent } from './component/checkbalance/checkbalance.component';
import { UserregisterComponent } from './component/userregister/userregister.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'home', component: HomeComponent},
  { path: 'user', component: UserComponent},
  { path: 'forgot', component: ForgotComponent},
  { path: 'deposit',component: DepositComponent},
  { path: 'withdraw', component: WithdrawComponent},
  { path: 'transfer', component: TransferComponent},
  { path: 'checkbalance', component: CheckbalanceComponent},
  { path: 'userregister',component:UserregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
