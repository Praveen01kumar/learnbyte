import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { courceRoute, routeConfig } from './shared/const/const';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  { path: routeConfig?.empty, component: HomeComponent },
  { path: courceRoute?.angular, loadChildren: () => import('./courses/angular/angular.module').then(m => m.AngularModule) },
  { path: courceRoute?.javascript, loadChildren: () => import('./courses/javascript/javascript.module').then(m => m.JavascriptModule) },
  { path: courceRoute?.typescript, loadChildren: () => import('./courses/typescript/typescript.module').then(m => m.TypescriptModule) },
  { path: routeConfig?.login, component: LoginComponent },
  { path: routeConfig?.veiled, component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
