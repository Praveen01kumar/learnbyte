import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { courceRoute, ngTopics, routeConfig } from 'src/app/shared/const/const';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';

const routes: Routes = [
    { path: routeConfig?.empty, component: DashboardComponent },
    { path: routeConfig?.ver, component: LayoutComponent, 
        children: [
            { path: ngTopics?.intro, component: IntroComponent },
        ],
        data: {courceData: courceRoute?.angular}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularRoutingModule { }
