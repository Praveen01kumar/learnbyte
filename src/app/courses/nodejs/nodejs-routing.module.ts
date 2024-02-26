import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { courceRoute, nodeTopics, routeConfig } from 'src/app/shared/const/const';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { ArchitectureComponent } from './lesssion/architecture/architecture.component';
import { CoreModulesComponent } from './lesssion/core-modules/core-modules.component';
import { FsComponent } from './lesssion/fs/fs.component';
import { HttpComponent } from './lesssion/http/http.component';
import { HttpsComponent } from './lesssion/https/https.component';
import { PathComponent } from './lesssion/path/path.component';
import { UtilComponent } from './lesssion/util/util.component';
import { EventsComponent } from './lesssion/events/events.component';
import { CryptoComponent } from './lesssion/crypto/crypto.component';
import { OsComponent } from './lesssion/os/os.component';
import { ChildProcessesComponent } from './lesssion/child-processes/child-processes.component';
import { AssertComponent } from './lesssion/assert/assert.component';
import { DnsComponent } from './lesssion/dns/dns.component';
import { QuerystringComponent } from './lesssion/querystring/querystring.component';
import { UrlComponent } from './lesssion/url/url.component';
import { ZlibComponent } from './lesssion/zlib/zlib.component';
import { TimersComponent } from './lesssion/timers/timers.component';
import { BufferComponent } from './lesssion/buffer/buffer.component';
import { VmComponent } from './lesssion/vm/vm.component';
import { AsyncHooksComponent } from './lesssion/async-hooks/async-hooks.component';
import { NpmModulesComponent } from './lesssion/npm-modules/npm-modules.component';
import { CliCommandsComponent } from './lesssion/cli-commands/cli-commands.component';
import { CommunityModulesComponent } from './lesssion/community-modules/community-modules.component';
import { ExpressComponent } from './lesssion/express/express.component';
import { SocketIoComponent } from './lesssion/socket-io/socket-io.component';
import { RequestComponent } from './lesssion/request/request.component';
import { AsyncComponent } from './lesssion/async/async.component';
import { LodashComponent } from './lesssion/lodash/lodash.component';
import { MongooseComponent } from './lesssion/mongoose/mongoose.component';
import { MysqlComponent } from './lesssion/mysql/mysql.component';
import { EventEmitterComponent } from './lesssion/event-emitter/event-emitter.component';
import { EventDrivenComponent } from './lesssion/event-driven/event-driven.component';
import { EventemitterClassComponent } from './lesssion/eventemitter-class/eventemitter-class.component';
import { StreamsComponent } from './lesssion/streams/streams.component';
import { ToStreamsComponent } from './lesssion/to-streams/to-streams.component';
import { FromStreamsComponent } from './lesssion/from-streams/from-streams.component';
import { WritingToStreamsComponent } from './lesssion/writing-to-streams/writing-to-streams.component';
import { PipingStreamsComponent } from './lesssion/piping-streams/piping-streams.component';
import { AuthenticationComponent } from './lesssion/authentication/authentication.component';
import { CrossSiteComponent } from './lesssion/cross-site/cross-site.component';
import { EncryptionComponent } from './lesssion/encryption/encryption.component';
import { BestPracticesComponent } from './lesssion/best-practices/best-practices.component';
import { SecurityComponent } from './lesssion/security/security.component';
import { AuthorizationComponent } from './lesssion/authorization/authorization.component';
import { InputValidationComponent } from './lesssion/input-validation/input-validation.component';
import { SecureCommunicationComponent } from './lesssion/secure-communication/secure-communication.component';
import { HelmetJsComponent } from './lesssion/helmet-js/helmet-js.component';
import { ApisComponent } from './lesssion/apis/apis.component';
import { RestfulApisComponent } from './lesssion/restful-apis/restful-apis.component';
import { CreatingApisComponent } from './lesssion/creating-apis/creating-apis.component';
import { HandlingHttpMethodsComponent } from './lesssion/handling-http-methods/handling-http-methods.component';
import { RestApiDesignComponent } from './lesssion/rest-api-design/rest-api-design.component';
import { EmailComponent } from './lesssion/email/email.component';
import { HandlingEmailComponent } from './lesssion/handling-email/handling-email.component';
import { AsynchronousComponent } from './lesssion/asynchronous/asynchronous.component';
import { AsynchronousProgrammingComponent } from './lesssion/asynchronous-programming/asynchronous-programming.component';
import { CallbacksComponent } from './lesssion/callbacks/callbacks.component';
import { PromisesComponent } from './lesssion/promises/promises.component';
import { AsyncAwaitComponent } from './lesssion/async-await/async-await.component';
import { ExperimentalComponent } from './lesssion/experimental/experimental.component';
import { WorkerThreadsComponent } from './lesssion/worker-threads/worker-threads.component';
import { WebDevelopmentComponent } from './lesssion/web-development/web-development.component';
import { RoutingComponent } from './lesssion/routing/routing.component';
import { MiddlewareComponent } from './lesssion/middleware/middleware.component';
import { TemplateEnginesComponent } from './lesssion/template-engines/template-engines.component';
import { AuthenticationAndAuthorizationComponent } from './lesssion/authentication-and-authorization/authentication-and-authorization.component';
import { PerformanceOptimizationComponent } from './lesssion/performance-optimization/performance-optimization.component';
import { ProfilingComponent } from './lesssion/profiling/profiling.component';
import { CachingComponent } from './lesssion/caching/caching.component';
import { LoadBalancingComponent } from './lesssion/load-balancing/load-balancing.component';
import { ScalingComponent } from './lesssion/scaling/scaling.component';
import { AdvancedComponent } from './lesssion/advanced/advanced.component';
import { ClusterModuleComponent } from './lesssion/cluster-module/cluster-module.component';
import { AddonsComponent } from './lesssion/addons/addons.component';
import { ErrorHandlingComponent } from './lesssion/error-handling/error-handling.component';
import { AdditionalComponent } from './lesssion/additional/additional.component';
import { GlobalsComponent } from './lesssion/globals/globals.component';
import { JsEnvComponent } from './lesssion/js-env/js-env.component';
import { StabilityIndexComponent } from './lesssion/stability-index/stability-index.component';
import { DeprecatedApisComponent } from './lesssion/deprecated-apis/deprecated-apis.component';

const routes: Routes = [
    { path: routeConfig?.empty, component: DashboardComponent },
    {
        path: routeConfig?.version, component: LayoutComponent,
        children: [
            {
                path: nodeTopics?.intro,
                children: [
                    { path: routeConfig?.empty, component: IntroComponent },
                    { path: nodeTopics?.architecture, component: ArchitectureComponent },
                ],
            },
            {
                path: nodeTopics?.core_modules,
                children: [
                    { path: routeConfig?.empty, component: CoreModulesComponent },
                    { path: nodeTopics?.fs, component: FsComponent },
                    { path: nodeTopics?.http, component: HttpComponent },
                    { path: nodeTopics?.https, component: HttpsComponent },
                    { path: nodeTopics?.path, component: PathComponent },
                    { path: nodeTopics?.util, component: UtilComponent },
                    { path: nodeTopics?.events, component: EventsComponent },
                    { path: nodeTopics?.crypto, component: CryptoComponent },
                    { path: nodeTopics?.os, component: OsComponent },
                    { path: nodeTopics?.child_processes, component: ChildProcessesComponent },
                    { path: nodeTopics?.assert, component: AssertComponent },
                    { path: nodeTopics?.dns, component: DnsComponent },
                    { path: nodeTopics?.querystring, component: QuerystringComponent },
                    { path: nodeTopics?.url, component: UrlComponent },
                    { path: nodeTopics?.zlib, component: ZlibComponent },
                    { path: nodeTopics?.timers, component: TimersComponent },
                    { path: nodeTopics?.buffer, component: BufferComponent },
                    { path: nodeTopics?.vm, component: VmComponent },
                    { path: nodeTopics?.async_hooks, component: AsyncHooksComponent },
                ],
            },
            {
                path: nodeTopics?.npm_modules,
                children: [
                    { path: routeConfig?.empty, component: NpmModulesComponent },
                    { path: nodeTopics?.cli_commands, component: CliCommandsComponent },
                ],
            },
            {
                path: nodeTopics?.community_modules,
                children: [
                    { path: routeConfig?.empty, component: CommunityModulesComponent },
                    { path: nodeTopics?.express, component: ExpressComponent },
                    { path: nodeTopics?.socket_io, component: SocketIoComponent },
                    { path: nodeTopics?.request, component: RequestComponent },
                    { path: nodeTopics?.async, component: AsyncComponent },
                    { path: nodeTopics?.lodash, component: LodashComponent },
                    { path: nodeTopics?.mongoose, component: MongooseComponent },
                    { path: nodeTopics?.mysql, component: MysqlComponent },
                ],
            },
            {
                path: nodeTopics?.event_emitter,
                children: [
                    { path: routeConfig?.empty, component: EventEmitterComponent },
                    { path: nodeTopics?.event_driven, component: EventDrivenComponent },
                    { path: nodeTopics?.eventemitter_class, component: EventemitterClassComponent },
                ],
            },
            {
                path: nodeTopics?.streams,
                children: [
                    { path: routeConfig?.empty, component: StreamsComponent },
                    { path: nodeTopics?.to_streams, component: ToStreamsComponent },
                    { path: nodeTopics?.from_streams, component: FromStreamsComponent },
                    { path: nodeTopics?.writing_to_streams, component: WritingToStreamsComponent },
                    { path: nodeTopics?.piping_streams, component: PipingStreamsComponent },
                ],
            },
            {
                path: nodeTopics?.security,
                children: [
                    { path: routeConfig?.empty, component: SecurityComponent },
                    { path: nodeTopics?.best_practices, component: BestPracticesComponent },
                    { path: nodeTopics?.encryption, component: EncryptionComponent },
                    { path: nodeTopics?.cross_site, component: CrossSiteComponent },
                    { path: nodeTopics?.authentication, component: AuthenticationComponent },
                    { path: nodeTopics?.authorization, component: AuthorizationComponent },
                    { path: nodeTopics?.input_validation, component: InputValidationComponent },
                    { path: nodeTopics?.secure_communication, component: SecureCommunicationComponent },
                    { path: nodeTopics?.helmet_js, component: HelmetJsComponent },
                ],
            },
            {
                path: nodeTopics?.apis,
                children: [
                    { path: routeConfig?.empty, component: ApisComponent },
                    { path: nodeTopics?.restful_apis, component: RestfulApisComponent },
                    { path: nodeTopics?.creating_apis, component: CreatingApisComponent },
                    { path: nodeTopics?.handling_http_methods, component: HandlingHttpMethodsComponent },
                    { path: nodeTopics?.rest_api_design, component: RestApiDesignComponent },
                ],
            },
            {
                path: nodeTopics?.email,
                children: [
                    { path: routeConfig?.empty, component: EmailComponent },
                    { path: nodeTopics?.handling_email, component: HandlingEmailComponent },
                ],
            },
            {
                path: nodeTopics?.asynchronous_programming,
                children: [
                    { path: routeConfig?.empty, component: AsynchronousProgrammingComponent },
                    { path: nodeTopics?.asynchronous, component: AsynchronousComponent },
                    { path: nodeTopics?.callbacks, component: CallbacksComponent },
                    { path: nodeTopics?.promises, component: PromisesComponent },
                    { path: nodeTopics?.async_await, component: AsyncAwaitComponent },
                ],
            },
            {
                path: nodeTopics?.experimental,
                children: [
                    { path: routeConfig?.empty, component: ExperimentalComponent },
                    { path: nodeTopics?.worker_threads, component: WorkerThreadsComponent },
                ],
            },
            {
                path: nodeTopics?.web_development,
                children: [
                    { path: routeConfig?.empty, component: WebDevelopmentComponent },
                    { path: nodeTopics?.routing, component: RoutingComponent },
                    { path: nodeTopics?.middleware, component: MiddlewareComponent },
                    { path: nodeTopics?.template_engines, component: TemplateEnginesComponent },
                    { path: nodeTopics?.authentication_and_authorization, component: AuthenticationAndAuthorizationComponent },
                ],
            },
            {
                path: nodeTopics?.performance_optimization,
                children: [
                    { path: routeConfig?.empty, component: PerformanceOptimizationComponent },
                    { path: nodeTopics?.profiling, component: ProfilingComponent },
                    { path: nodeTopics?.caching, component: CachingComponent },
                    { path: nodeTopics?.load_balancing, component: LoadBalancingComponent },
                    { path: nodeTopics?.scaling, component: ScalingComponent },
                ],
            },
            {
                path: nodeTopics?.advanced,
                children: [
                    { path: routeConfig?.empty, component: AdvancedComponent },
                    { path: nodeTopics?.cluster_module, component: ClusterModuleComponent },
                    { path: nodeTopics?.addons, component: AddonsComponent },
                    { path: nodeTopics?.error_handling, component: ErrorHandlingComponent },
                ],
            },
            {
                path: nodeTopics?.additional,
                children: [
                    { path: routeConfig?.empty, component: AdditionalComponent },
                    { path: nodeTopics?.globals, component: GlobalsComponent },
                    { path: nodeTopics?.js_env, component: JsEnvComponent },
                    { path: nodeTopics?.stability_index, component: StabilityIndexComponent },
                    { path: nodeTopics?.deprecated_apis, component: DeprecatedApisComponent },
                ],
            },
        ],
        data: { courceData: courceRoute?.nodejs }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NodeJsRoutingModule { }
