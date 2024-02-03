import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { routeConfig, tsTopics } from 'src/app/shared/const/const';
const route = routeConfig;
const tsroute = tsTopics;

const routes: Routes = [
    {
        path: route?.empty, component: DashboardComponent,
        children: [
            { path: tsroute?.intro, component: IntroComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypescriptRoutingModule { }
