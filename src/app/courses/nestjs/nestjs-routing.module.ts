import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestjsDashboardComponent } from './dashboard/dashboard.component';
import { NestjsIntroComponent } from './lesssion/intro/intro.component';
import { courceRoute, nestTopics, routeConfig } from 'src/app/shared/const/const';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { NestjsArchitectureComponent } from './lesssion/architecture/architecture.component';
import { CliComponent } from './lesssion/cli/cli.component';
import { InstallationComponent } from './lesssion/installation/installation.component';
import { UsageComponent } from './lesssion/usage/usage.component';
import { SchematicsComponent } from './lesssion/schematics/schematics.component';
import { CliRecipesComponent } from './lesssion/cli-recipes/cli-recipes.component';
import { GeneratingApplicationsComponent } from './lesssion/generating-applications/generating-applications.component';
import { GeneratingLibrariesComponent } from './lesssion/generating-libraries/generating-libraries.component';
import { GeneratingResourcesComponent } from './lesssion/generating-resources/generating-resources.component';
import { NestjsFundamentalsComponent } from './lesssion/fundamentals/fundamentals.component';
import { ControllersComponent } from './lesssion/controllers/controllers.component';
import { NestjsProvidersComponent } from './lesssion/providers/providers.component';
import { NestjsMiddlewareComponent } from './lesssion/middleware/middleware.component';
import { NestjsModulesComponent } from './lesssion/modules/modules.component';
import { CustomDecoratorsComponent } from './lesssion/custom-decorators/custom-decorators.component';
import { AsyncProvidersComponent } from './lesssion/async-providers/async-providers.component';
import { TechniquesComponent } from './lesssion/techniques/techniques.component';
import { NestjsAsyncAwaitComponent } from './lesssion/async-await/async-await.component';
import { SerializationComponent } from './lesssion/serialization/serialization.component';
import { NestjsTestingComponent } from './lesssion/testing/testing.component';
import { NestjsErrorHandlingComponent } from './lesssion/error-handling/error-handling.component';
import { SecurityComponent } from './lesssion/security/security.component';
import { LoggingComponent } from './lesssion/logging/logging.component';
import { NestjsConfigurationComponent } from './lesssion/configuration/configuration.component';
import { HttpModuleComponent } from './lesssion/http-module/http-module.component';
import { GraphqlComponent } from './lesssion/graphql/graphql.component';
import { MicroservicesComponent } from './lesssion/microservices/microservices.component';
import { MongodbComponent } from './lesssion/mongodb/mongodb.component';
import { TypeormComponent } from './lesssion/typeorm/typeorm.component';
import { MongooseComponent } from './lesssion/mongoose/mongoose.component';
import { SequelizeComponent } from './lesssion/sequelize/sequelize.component';
import { RecipesComponent } from './lesssion/recipes/recipes.component';
import { NestjsAuthenticationComponent } from './lesssion/authentication/authentication.component';
import { AuthorizationComponent } from './lesssion/authorization/authorization.component';
import { DatabaseComponent } from './lesssion/database/database.component';
import { NestjsFileUploadComponent } from './lesssion/file-upload/file-upload.component';
import { SendingEmailsComponent } from './lesssion/sending-emails/sending-emails.component';
import { SchedulingTasksComponent } from './lesssion/scheduling-tasks/scheduling-tasks.component';
import { CachingComponent } from './lesssion/caching/caching.component';
import { DockerComponent } from './lesssion/docker/docker.component';
import { NestjsContinuousIntegrationComponent } from './lesssion/continuous-integration/continuous-integration.component';
import { BestPracticesComponent } from './lesssion/best-practices/best-practices.component';
import { CodeStyleComponent } from './lesssion/code-style/code-style.component';
import { PerformanceComponent } from './lesssion/performance/performance.component';
import { ScalabilityComponent } from './lesssion/scalability/scalability.component';
import { NestjsDependencyInjectionComponent } from './lesssion/dependency-injection/dependency-injection.component';
import { ExceptionFiltersComponent } from './lesssion/exception-filters/exception-filters.component';
import { PipesComponent } from './lesssion/pipes/pipes.component';
import { GuardsComponent } from './lesssion/guards/guards.component';
import { NestjsInterceptorsComponent } from './lesssion/interceptors/interceptors.component';
import { VersioningComponent } from './lesssion/versioning/versioning.component';
import { HybridApplicationsComponent } from './lesssion/hybrid-applications/hybrid-applications.component';
import { BpHttpModuleComponent } from './lesssion/bp-http-module/bp-http-module.component';
import { WebsocketsComponent } from './lesssion/websockets/websockets.component';

const routes: Routes = [
    { path: routeConfig?.empty, component: NestjsDashboardComponent },
    {
        path: routeConfig?.version, component: LayoutComponent,
        children: [
            {
                path: nestTopics?.intro,
                children: [
                    { path: routeConfig?.empty, component: NestjsIntroComponent },
                    { path: nestTopics?.architecture, component: NestjsArchitectureComponent },
                ],
            },
            {
                path: nestTopics?.cli,
                children: [
                    { path: routeConfig?.empty, component: CliComponent },
                    { path: nestTopics?.installation, component: InstallationComponent },
                    { path: nestTopics?.usage, component: UsageComponent },
                    { path: nestTopics?.schematics, component: SchematicsComponent },
                    { path: nestTopics?.cli_recipes, component: CliRecipesComponent },
                    { path: nestTopics?.generating_applications, component: GeneratingApplicationsComponent },
                    { path: nestTopics?.generating_libraries, component: GeneratingLibrariesComponent },
                    { path: nestTopics?.generating_resources, component: GeneratingResourcesComponent },
                ],
            },
            {
                path: nestTopics?.fundamentals,
                children: [
                    { path: routeConfig?.empty, component: NestjsFundamentalsComponent },
                    { path: nestTopics?.controllers, component: ControllersComponent },
                    { path: nestTopics?.providers, component: NestjsProvidersComponent },
                    { path: nestTopics?.modules, component: NestjsModulesComponent },
                    { path: nestTopics?.middleware, component: NestjsMiddlewareComponent },
                    { path: nestTopics?.custom_decorators, component: CustomDecoratorsComponent },
                    { path: nestTopics?.async_providers, component: AsyncProvidersComponent },
                ],
            },
            {
                path: nestTopics?.techniques,
                children: [
                    { path: routeConfig?.empty, component: TechniquesComponent },
                    { path: nestTopics?.async_await, component: NestjsAsyncAwaitComponent },
                    { path: nestTopics?.serialization, component: SerializationComponent },
                    { path: nestTopics?.error_handling, component: NestjsErrorHandlingComponent },
                    { path: nestTopics?.testing, component: NestjsTestingComponent },
                    { path: nestTopics?.security, component: SecurityComponent },
                    { path: nestTopics?.logging, component: LoggingComponent },
                    { path: nestTopics?.configuration, component: NestjsConfigurationComponent },
                    { path: nestTopics?.http_module, component: HttpModuleComponent },
                    { path: nestTopics?.graphql, component: GraphqlComponent },
                    { path: nestTopics?.microservices, component: MicroservicesComponent },
                    { path: nestTopics?.mongodb, component: MongodbComponent },
                    { path: nestTopics?.typeorm, component: TypeormComponent },
                    { path: nestTopics?.mongoose, component: MongooseComponent },
                    { path: nestTopics?.sequelize, component: SequelizeComponent },
                ],
            },
            {
                path: nestTopics?.recipes,
                children: [
                    { path: routeConfig?.empty, component: RecipesComponent },
                    { path: nestTopics?.authentication, component: NestjsAuthenticationComponent },
                    { path: nestTopics?.authorization, component: AuthorizationComponent },
                    { path: nestTopics?.database, component: DatabaseComponent },
                    { path: nestTopics?.file_upload, component: NestjsFileUploadComponent },
                    { path: nestTopics?.sending_emails, component: SendingEmailsComponent },
                    { path: nestTopics?.scheduling_tasks, component: SchedulingTasksComponent },
                    { path: nestTopics?.caching, component: CachingComponent },
                    { path: nestTopics?.docker, component: DockerComponent },
                    { path: nestTopics?.continuous_integration, component: NestjsContinuousIntegrationComponent },
                ],
            },
            {
                path: nestTopics?.best_practices,
                children: [
                    { path: routeConfig?.empty, component: BestPracticesComponent },
                    { path: nestTopics?.code_style, component: CodeStyleComponent },
                    { path: nestTopics?.performance, component: PerformanceComponent },
                    { path: nestTopics?.scalability, component: ScalabilityComponent },
                    { path: nestTopics?.dependency_injection, component: NestjsDependencyInjectionComponent },
                    { path: nestTopics?.exception_filters, component: ExceptionFiltersComponent },
                    { path: nestTopics?.pipes, component: PipesComponent },
                    { path: nestTopics?.guards, component: GuardsComponent },
                    { path: nestTopics?.interceptors, component: NestjsInterceptorsComponent },
                    { path: nestTopics?.versioning, component: VersioningComponent },
                    { path: nestTopics?.hybrid_applications, component: HybridApplicationsComponent },
                    { path: nestTopics?.bp_http_module, component: BpHttpModuleComponent },
                    { path: nestTopics?.websockets, component: WebsocketsComponent },
                ],
            },
        ],
        data: { courceData: courceRoute?.nestjs }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NestJsRoutingModule { }
