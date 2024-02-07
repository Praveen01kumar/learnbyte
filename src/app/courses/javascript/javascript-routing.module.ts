import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { jsTopics, routeConfig } from 'src/app/shared/const/const';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
const route = routeConfig;
const jsroute = jsTopics;

const routes: Routes = [
    { path: route?.empty, component: DashboardComponent },
    {
        path: route?.ver, component: LayoutComponent,
        children: [
            { path: jsroute?.intro, component: IntroComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JavascriptRoutingModule { }
