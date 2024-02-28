import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { courceRoute, routeConfig } from './shared/const/const';
import { LoginComponent } from './shared/components/login/login.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostdetailComponent } from './shared/components/postdetail/postdetail.component';

const routes: Routes = [
  { path: routeConfig?.empty, component: HomeComponent },
  { path: routeConfig?.courses, component: CoursesComponent },
  { path: routeConfig?.posts, component: PostsComponent },
  { path: routeConfig?.posts + '/:id', component: PostdetailComponent },
  { path: routeConfig?.contact, component: ContactComponent },
  { path: courceRoute?.angular, loadChildren: () => import('./courses/angular/angular.module').then(m => m.AngularModule) },
  { path: courceRoute?.javascript, loadChildren: () => import('./courses/javascript/javascript.module').then(m => m.JavascriptModule) },
  { path: courceRoute?.typescript, loadChildren: () => import('./courses/typescript/typescript.module').then(m => m.TypescriptModule) },
  { path: courceRoute?.nodejs, loadChildren: () => import('./courses/nodejs/nodejs.module').then(m => m.NodeJsModule) },
  { path: courceRoute?.nestjs, loadChildren: () => import('./courses/nestjs/nestjs.module').then(m => m.NestJsModule) },
  { path: courceRoute?.sequelize, loadChildren: () => import('./courses/sequelize/sequelize.module').then(m => m.SequelizeModule) },
  { path: courceRoute?.expressjs, loadChildren: () => import('./courses/expressjs/expressjs.module').then(m => m.ExpressModule) },
  { path: routeConfig?.auth, component: LoginComponent },
  { path: routeConfig?.veiled, component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
