import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './loginPage/login-page/login-page.component';
import { MainPageComponent } from './mainPage/main-page/main-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
