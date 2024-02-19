import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NestJsRoutingModule } from './nestjs-routing.module';
import { IntroComponent } from './lesssion/intro/intro.component';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
import { ArchitectureComponent } from './lesssion/architecture/architecture.component';
import { CliComponent } from './lesssion/cli/cli.component';
import { InstallationComponent } from './lesssion/installation/installation.component';
import { UsageComponent } from './lesssion/usage/usage.component';
import { SchematicsComponent } from './lesssion/schematics/schematics.component';
import { CliRecipesComponent } from './lesssion/cli-recipes/cli-recipes.component';
import { GeneratingApplicationsComponent } from './lesssion/generating-applications/generating-applications.component';
import { GeneratingLibrariesComponent } from './lesssion/generating-libraries/generating-libraries.component';
import { GeneratingResourcesComponent } from './lesssion/generating-resources/generating-resources.component';
import { FundamentalsComponent } from './lesssion/fundamentals/fundamentals.component';
import { ControllersComponent } from './lesssion/controllers/controllers.component';
import { ProvidersComponent } from './lesssion/providers/providers.component';
import { ModulesComponent } from './lesssion/modules/modules.component';
import { MiddlewareComponent } from './lesssion/middleware/middleware.component';
import { CustomDecoratorsComponent } from './lesssion/custom-decorators/custom-decorators.component';
import { AsyncProvidersComponent } from './lesssion/async-providers/async-providers.component';
import { TechniquesComponent } from './lesssion/techniques/techniques.component';
import { AsyncAwaitComponent } from './lesssion/async-await/async-await.component';
import { SerializationComponent } from './lesssion/serialization/serialization.component';
import { ErrorHandlingComponent } from './lesssion/error-handling/error-handling.component';
import { TestingComponent } from './lesssion/testing/testing.component';
import { SecurityComponent } from './lesssion/security/security.component';
import { LoggingComponent } from './lesssion/logging/logging.component';
import { ConfigurationComponent } from './lesssion/configuration/configuration.component';
import { HttpModuleComponent } from './lesssion/http-module/http-module.component';
import { GraphqlComponent } from './lesssion/graphql/graphql.component';
import { MicroservicesComponent } from './lesssion/microservices/microservices.component';
import { MongodbComponent } from './lesssion/mongodb/mongodb.component';
import { TypeormComponent } from './lesssion/typeorm/typeorm.component';
import { MongooseComponent } from './lesssion/mongoose/mongoose.component';
import { SequelizeComponent } from './lesssion/sequelize/sequelize.component';
import { RecipesComponent } from './lesssion/recipes/recipes.component';
import { AuthenticationComponent } from './lesssion/authentication/authentication.component';
import { AuthorizationComponent } from './lesssion/authorization/authorization.component';
import { DatabaseComponent } from './lesssion/database/database.component';
import { FileUploadComponent } from './lesssion/file-upload/file-upload.component';
import { SendingEmailsComponent } from './lesssion/sending-emails/sending-emails.component';
import { SchedulingTasksComponent } from './lesssion/scheduling-tasks/scheduling-tasks.component';
import { CachingComponent } from './lesssion/caching/caching.component';
import { DockerComponent } from './lesssion/docker/docker.component';
import { ContinuousIntegrationComponent } from './lesssion/continuous-integration/continuous-integration.component';
import { BestPracticesComponent } from './lesssion/best-practices/best-practices.component';
import { CodeStyleComponent } from './lesssion/code-style/code-style.component';
import { PerformanceComponent } from './lesssion/performance/performance.component';
import { ScalabilityComponent } from './lesssion/scalability/scalability.component';
import { DependencyInjectionComponent } from './lesssion/dependency-injection/dependency-injection.component';
import { ExceptionFiltersComponent } from './lesssion/exception-filters/exception-filters.component';
import { PipesComponent } from './lesssion/pipes/pipes.component';
import { GuardsComponent } from './lesssion/guards/guards.component';
import { InterceptorsComponent } from './lesssion/interceptors/interceptors.component';
import { VersioningComponent } from './lesssion/versioning/versioning.component';
import { HybridApplicationsComponent } from './lesssion/hybrid-applications/hybrid-applications.component';
import { BpHttpModuleComponent } from './lesssion/bp-http-module/bp-http-module.component';
import { WebsocketsComponent } from './lesssion/websockets/websockets.component';

@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent,
    ArchitectureComponent,
    CliComponent,
    InstallationComponent,
    UsageComponent,
    SchematicsComponent,
    CliRecipesComponent,
    GeneratingApplicationsComponent,
    GeneratingLibrariesComponent,
    GeneratingResourcesComponent,
    FundamentalsComponent,
    ControllersComponent,
    ProvidersComponent,
    ModulesComponent,
    MiddlewareComponent,
    CustomDecoratorsComponent,
    AsyncProvidersComponent,
    TechniquesComponent,
    AsyncAwaitComponent,
    SerializationComponent,
    ErrorHandlingComponent,
    TestingComponent,
    SecurityComponent,
    LoggingComponent,
    ConfigurationComponent,
    HttpModuleComponent,
    GraphqlComponent,
    MicroservicesComponent,
    MongodbComponent,
    TypeormComponent,
    MongooseComponent,
    SequelizeComponent,
    RecipesComponent,
    AuthenticationComponent,
    AuthorizationComponent,
    DatabaseComponent,
    FileUploadComponent,
    SendingEmailsComponent,
    SchedulingTasksComponent,
    CachingComponent,
    DockerComponent,
    ContinuousIntegrationComponent,
    BestPracticesComponent,
    CodeStyleComponent,
    PerformanceComponent,
    ScalabilityComponent,
    DependencyInjectionComponent,
    ExceptionFiltersComponent,
    PipesComponent,
    GuardsComponent,
    InterceptorsComponent,
    VersioningComponent,
    HybridApplicationsComponent,
    BpHttpModuleComponent,
    WebsocketsComponent,
  ],
  imports: [
    CommonModule,
    NestJsRoutingModule,
    ContentboxComponent
  ]
})
export class NestJsModule { }
