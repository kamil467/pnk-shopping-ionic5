import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneLoginPage } from './phone-login.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneLoginPageRoutingModule {}
