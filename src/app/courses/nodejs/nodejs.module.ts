import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NodeJsRoutingModule } from './nodejs-routing.module';
import { IntroComponent } from './lesssion/intro/intro.component';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
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
import { SecurityComponent } from './lesssion/security/security.component';
import { BestPracticesComponent } from './lesssion/best-practices/best-practices.component';
import { EncryptionComponent } from './lesssion/encryption/encryption.component';
import { CrossSiteComponent } from './lesssion/cross-site/cross-site.component';
import { AuthenticationComponent } from './lesssion/authentication/authentication.component';
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
import { AsynchronousProgrammingComponent } from './lesssion/asynchronous-programming/asynchronous-programming.component';
import { AsynchronousComponent } from './lesssion/asynchronous/asynchronous.component';
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

@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent,
    ArchitectureComponent,
    CoreModulesComponent,
    FsComponent,
    HttpComponent,
    HttpsComponent,
    PathComponent,
    UtilComponent,
    EventsComponent,
    CryptoComponent,
    OsComponent,
    ChildProcessesComponent,
    AssertComponent,
    DnsComponent,
    QuerystringComponent,
    UrlComponent,
    ZlibComponent,
    TimersComponent,
    BufferComponent,
    VmComponent,
    AsyncHooksComponent,
    NpmModulesComponent,
    CliCommandsComponent,
    CommunityModulesComponent,
    ExpressComponent,
    SocketIoComponent,
    RequestComponent,
    AsyncComponent,
    LodashComponent,
    MongooseComponent,
    MysqlComponent,
    EventEmitterComponent,
    EventDrivenComponent,
    EventemitterClassComponent,
    StreamsComponent,
    ToStreamsComponent,
    FromStreamsComponent,
    WritingToStreamsComponent,
    PipingStreamsComponent,
    SecurityComponent,
    BestPracticesComponent,
    EncryptionComponent,
    CrossSiteComponent,
    AuthenticationComponent,
    AuthorizationComponent,
    InputValidationComponent,
    SecureCommunicationComponent,
    HelmetJsComponent,
    ApisComponent,
    RestfulApisComponent,
    CreatingApisComponent,
    HandlingHttpMethodsComponent,
    RestApiDesignComponent,
    EmailComponent,
    HandlingEmailComponent,
    AsynchronousProgrammingComponent,
    AsynchronousComponent,
    CallbacksComponent,
    PromisesComponent,
    AsyncAwaitComponent,
    ExperimentalComponent,
    WorkerThreadsComponent,
    WebDevelopmentComponent,
    RoutingComponent,
    MiddlewareComponent,
    TemplateEnginesComponent,
    AuthenticationAndAuthorizationComponent,
    PerformanceOptimizationComponent,
    ProfilingComponent,
    CachingComponent,
    LoadBalancingComponent,
    ScalingComponent,
    AdvancedComponent,
    ClusterModuleComponent,
    AddonsComponent,
    ErrorHandlingComponent,
    AdditionalComponent,
    GlobalsComponent,
    JsEnvComponent,
    StabilityIndexComponent,
    DeprecatedApisComponent,
  ],
  imports: [
    CommonModule,
    NodeJsRoutingModule,
    ContentboxComponent
  ]
})
export class NodeJsModule { }
