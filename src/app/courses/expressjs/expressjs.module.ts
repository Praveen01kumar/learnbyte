import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpressRoutingModule } from './expressjs-routing.module';
import { IntroComponent } from './lesssion/intro/intro.component';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
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
@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent,
    ArchitectureComponent,
    ExpressComponent,
    ExpressJsonComponent,
    ExpressStaticComponent,
    ExpressRouterComponent,
    ExpressUrlencodedComponent,
    ApplicationComponent,
    TheAppComponent,
    EventsMountComponent,
    RequestComponent,
    TheRequestComponent,
    ResponseComponent,
    TheResponseComponent,
    RouterComponent,
    TheRouterComponent,
    MiscellaneousComponent,
    CookiesComponent,
    FileUploadComponent,
    MiddlewareComponent,
    ScaffoldingComponent,
    TemplateEngineComponent,
  ],
  imports: [
    CommonModule,
    ExpressRoutingModule,
    ContentboxComponent
  ]
})
export class ExpressModule { }
