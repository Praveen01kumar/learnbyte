import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeConfig } from './shared/const/const';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
const route = routeConfig;

const routes: Routes = [
  {
    path: route?.empty, component: HomeComponent,
    children: [
      { path: route?.angular, loadChildren: () => import('./courses/angular/angular.module').then(m => m.AngularModule) },
      { path: route?.javascript, loadChildren: () => import('./courses/javascript/javascript.module').then(m => m.JavascriptModule) },
      { path: route?.typescript, loadChildren: () => import('./courses/typescript/typescript.module').then(m => m.TypescriptModule) },
    ]
  },
  { path: route?.login, component: LoginComponent },
  { path: route?.register, component: RegisterComponent },
  { path: route?.veiled, component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
