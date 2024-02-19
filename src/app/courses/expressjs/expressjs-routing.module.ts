import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { courceRoute, exTopics, routeConfig } from 'src/app/shared/const/const';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { ArchitectureComponent } from './lesssion/architecture/architecture.component';
import { ExpressComponent } from './lesssion/express/express.component';
import { ExpressJsonComponent } from './lesssion/express-json/express-json.component';
import { ExpressStaticComponent } from './lesssion/express-static/express-static.component';
import { ExpressRouterComponent } from './lesssion/express-router/express-router.component';
import { ExpressUrlencodedComponent } from './lesssion/express-urlencoded/express-urlencoded.component';
import { ApplicationComponent } from './lesssion/application/application.component';
import { TheAppComponent } from './lesssion/the-app/the-app.component';
import { EventsMountComponent } from './lesssion/events-mount/events-mount.component';
import { RequestComponent } from './lesssion/request/request.component';
import { TheRequestComponent } from './lesssion/the-request/the-request.component';
import { ResponseComponent } from './lesssion/response/response.component';
import { TheResponseComponent } from './lesssion/the-response/the-response.component';
import { RouterComponent } from './lesssion/router/router.component';
import { TheRouterComponent } from './lesssion/the-router/the-router.component';
import { MiscellaneousComponent } from './lesssion/miscellaneous/miscellaneous.component';
import { CookiesComponent } from './lesssion/cookies/cookies.component';
import { FileUploadComponent } from './lesssion/file-upload/file-upload.component';
import { MiddlewareComponent } from './lesssion/middleware/middleware.component';
import { ScaffoldingComponent } from './lesssion/scaffolding/scaffolding.component';
import { TemplateEngineComponent } from './lesssion/template-engine/template-engine.component';

const routes: Routes = [
    { path: routeConfig?.empty, component: DashboardComponent },
    {
        path: exTopics?.intro, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: IntroComponent },
            { path: exTopics?.architecture, component: ArchitectureComponent },
        ],
        data: { courceData: courceRoute?.expressjs }
    },
    {
        path: exTopics?.express, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: ExpressComponent },
            { path: exTopics?.architecture, component: ArchitectureComponent },
            { path: exTopics?.express_json, component: ExpressJsonComponent },
            { path: exTopics?.express_static, component: ExpressStaticComponent },
            { path: exTopics?.express_router, component: ExpressRouterComponent },
            { path: exTopics?.express_urlencoded, component: ExpressUrlencodedComponent },
        ],
        data: { courceData: courceRoute?.expressjs }
    },
    {
        path: exTopics?.application, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: ApplicationComponent },
            { path: exTopics?.the_app, component: TheAppComponent },
            { path: exTopics?.events_mount, component: EventsMountComponent },
        ],
        data: { courceData: courceRoute?.expressjs }
    },
    {
        path: exTopics?.request, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: RequestComponent },
            { path: exTopics?.the_request, component: TheRequestComponent },
        ],
        data: { courceData: courceRoute?.expressjs }
    },
    {
        path: exTopics?.response, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: ResponseComponent },
            { path: exTopics?.the_response, component: TheResponseComponent },
        ],
        data: { courceData: courceRoute?.expressjs }
    },
    {
        path: exTopics?.router, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: RouterComponent },
            { path: exTopics?.the_router, component: TheRouterComponent },
        ],
        data: { courceData: courceRoute?.expressjs }
    },
    {
        path: exTopics?.miscellaneous, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: MiscellaneousComponent },
            { path: exTopics?.cookies, component: CookiesComponent },
            { path: exTopics?.file_upload, component: FileUploadComponent },
            { path: exTopics?.middleware, component: MiddlewareComponent },
            { path: exTopics?.scaffolding, component: ScaffoldingComponent },
            { path: exTopics?.template_engine, component: TemplateEngineComponent },
        ],
        data: { courceData: courceRoute?.expressjs }
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpressRoutingModule { }
