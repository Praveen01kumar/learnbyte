import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { courceRoute, ngTopics, routeConfig } from 'src/app/shared/const/const';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { FeaturesOfAngularComponent } from './lesssion/features-of-angular/features-of-angular.component';
import { AngularCliComponent } from './lesssion/angular-cli/angular-cli.component';
import { NewAngularProjectComponent } from './lesssion/new-angular-project/new-angular-project.component';
import { GeneratingComponentsComponent } from './lesssion/generating-components/generating-components.component';
import { ProductionBuildsComponent } from './lesssion/production-builds/production-builds.component';
import { DevelopmentServerComponent } from './lesssion/development-server/development-server.component';
import { ModuleComponent } from './lesssion/module/module.component';
import { NgmoduleComponent } from './lesssion/ngmodule/ngmodule.component';
import { DeclarationsComponent } from './lesssion/declarations/declarations.component';
import { ImportsComponent } from './lesssion/imports/imports.component';
import { ExportsComponent } from './lesssion/exports/exports.component';
import { ProvidersComponent } from './lesssion/providers/providers.component';
import { BootstrapComponent } from './lesssion/bootstrap/bootstrap.component';
import { LazyLoadingComponent } from './lesssion/lazy-loading/lazy-loading.component';
import { ComponentsComponent } from './lesssion/components/components.component';
import { ComponentClassComponent } from './lesssion/component-class/component-class.component';
import { TemplateComponent } from './lesssion/template/template.component';
import { ComponentMetadataComponent } from './lesssion/component-metadata/component-metadata.component';
import { ComponentCommunicationComponent } from './lesssion/component-communication/component-communication.component';
import { ComponentStylingComponent } from './lesssion/component-styling/component-styling.component';
import { LifecycleHooksComponent } from './lesssion/lifecycle-hooks/lifecycle-hooks.component';
import { ComponentInteractionComponent } from './lesssion/component-interaction/component-interaction.component';
import { ComponentRoutingComponent } from './lesssion/component-routing/component-routing.component';
import { DirectivesComponent } from './lesssion/directives/directives.component';
import { ComponentDirectivesComponent } from './lesssion/component-directives/component-directives.component';
import { AttributeDirectivesComponent } from './lesssion/attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './lesssion/structural-directives/structural-directives.component';
import { DataBindingComponent } from './lesssion/data-binding/data-binding.component';
import { InterpolationComponent } from './lesssion/interpolation/interpolation.component';
import { EventBindingComponent } from './lesssion/event-binding/event-binding.component';
import { PropertyBindingComponent } from './lesssion/property-binding/property-binding.component';
import { TwoWayBindingComponent } from './lesssion/two-way-binding/two-way-binding.component';
import { FormsComponent } from './lesssion/forms/forms.component';
import { TdFormsComponent } from './lesssion/td-forms/td-forms.component';
import { ReactiveFormsComponent } from './lesssion/reactive-forms/reactive-forms.component';
import { FormcontrolComponent } from './lesssion/formcontrol/formcontrol.component';
import { FormgroupComponent } from './lesssion/formgroup/formgroup.component';
import { FormarrayComponent } from './lesssion/formarray/formarray.component';
import { FormSubmissionComponent } from './lesssion/form-submission/form-submission.component';
import { DynamicFcManipulationComponent } from './lesssion/dynamic-fc-manipulation/dynamic-fc-manipulation.component';
import { FValidationComponent } from './lesssion/f-validation/f-validation.component';
import { FBuilderComponent } from './lesssion/f-builder/f-builder.component';
import { DependencyInjectionComponent } from './lesssion/dependency-injection/dependency-injection.component';
import { ServiceRegistrationComponent } from './lesssion/service-registration/service-registration.component';
import { InjectorComponent } from './lesssion/injector/injector.component';
import { DiInComponentsComponent } from './lesssion/di-in-components/di-in-components.component';
import { DiIntoServicesComponent } from './lesssion/di-into-services/di-into-services.component';
import { ProviderConfigurationComponent } from './lesssion/provider-configuration/provider-configuration.component';
import { InjectionTokensComponent } from './lesssion/injection-tokens/injection-tokens.component';
import { ServicesComponent } from './lesssion/services/services.component';
import { CreatingAServiceComponent } from './lesssion/creating-a-service/creating-a-service.component';
import { InjectingAServiceComponent } from './lesssion/injecting-a-service/injecting-a-service.component';
import { SingletonScopeComponent } from './lesssion/singleton-scope/singleton-scope.component';
import { ProvidingServicesComponent } from './lesssion/providing-services/providing-services.component';
import { ServiceDependenciesComponent } from './lesssion/service-dependencies/service-dependencies.component';
import { RoutingComponent } from './lesssion/routing/routing.component';
import { RouterModuleComponent } from './lesssion/router-module/router-module.component';
import { RouterOutletComponent } from './lesssion/router-outlet/router-outlet.component';
import { RouteConfigComponent } from './lesssion/route-config/route-config.component';
import { TraditionalRoutingComponent } from './lesssion/traditional-routing/traditional-routing.component';
import { PathBasedRoutingComponent } from './lesssion/path-based-routing/path-based-routing.component';
import { LazyLoadedComponent } from './lesssion/lazy-loaded/lazy-loaded.component';
import { NavigationComponent } from './lesssion/navigation/navigation.component';
import { RouteParametersComponent } from './lesssion/route-parameters/route-parameters.component';
import { NestedRoutesComponent } from './lesssion/nested-routes/nested-routes.component';
import { RouteGuardsComponent } from './lesssion/route-guards/route-guards.component';
import { StateManagementComponent } from './lesssion/state-management/state-management.component';
import { InputOutputComponent } from './lesssion/input-output/input-output.component';
import { StmServicesComponent } from './lesssion/stm-services/stm-services.component';
import { RxJSAndObservablesComponent } from './lesssion/rx-js-and-observables/rx-js-and-observables.component';
import { NgrxComponent } from './lesssion/ngrx/ngrx.component';
import { OtherSManagementLibrariesComponent } from './lesssion/other-s-management-libraries/other-s-management-libraries.component';
import { RxJsBasicComponent } from './lesssion/rx-js-basic/rx-js-basic.component';
import { ObservablesComponent } from './lesssion/observables/observables.component';
import { IntervalComponent } from './lesssion/interval/interval.component';
import { TimerComponent } from './lesssion/timer/timer.component';
import { FromComponent } from './lesssion/from/from.component';
import { OfComponent } from './lesssion/of/of.component';
import { FromeventComponent } from './lesssion/fromevent/fromevent.component';
import { AjaxComponent } from './lesssion/ajax/ajax.component';
import { EmptyComponent } from './lesssion/empty/empty.component';
import { NeverComponent } from './lesssion/never/never.component';
import { ThrowComponent } from './lesssion/throw/throw.component';
import { OperatorsComponent } from './lesssion/operators/operators.component';
import { SubscriptionComponent } from './lesssion/subscription/subscription.component';
import { SubjectsComponent } from './lesssion/subjects/subjects.component';
import { BehaviorsubjectComponent } from './lesssion/behaviorsubject/behaviorsubject.component';
import { ReplaysubjectComponent } from './lesssion/replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './lesssion/asyncsubject/asyncsubject.component';
import { SchedulersComponent } from './lesssion/schedulers/schedulers.component';
import { ErrorHandlingComponent } from './lesssion/error-handling/error-handling.component';
import { HotVsColdComponent } from './lesssion/hot-vs-cold/hot-vs-cold.component';
import { HigherOrderComponent } from './lesssion/higher-order/higher-order.component';
import { AsyncPipeComponent } from './lesssion/async-pipe/async-pipe.component';
import { MultipleStreamsComponent } from './lesssion/multiple-streams/multiple-streams.component';
import { CachingAndMemoizationComponent } from './lesssion/caching-and-memoization/caching-and-memoization.component';
import { TestingComponent } from './lesssion/testing/testing.component';
import { BackpressureComponent } from './lesssion/backpressure/backpressure.component';
import { CustomOperatorsComponent } from './lesssion/custom-operators/custom-operators.component';
import { TimeBasedOperatorsComponent } from './lesssion/time-based-operators/time-based-operators.component';
import { MulticastingAndConnectableComponent } from './lesssion/multicasting-and-connectable/multicasting-and-connectable.component';
import { CustomizingObservableCreationComponent } from './lesssion/customizing-observable-creation/customizing-observable-creation.component';
import { ImmutableDataHandlingComponent } from './lesssion/immutable-data-handling/immutable-data-handling.component';
import { AdvancedTechniquesComponent } from './lesssion/advanced-techniques/advanced-techniques.component';
import { HttpAndApisComponent } from './lesssion/http-and-apis/http-and-apis.component';
import { HttpclientComponent } from './lesssion/httpclient/httpclient.component';
import { HttpMethodsComponent } from './lesssion/http-methods/http-methods.component';
import { HttpRequestsComponent } from './lesssion/http-requests/http-requests.component';
import { HandlingResponsesComponent } from './lesssion/handling-responses/handling-responses.component';
import { ResponseTypesComponent } from './lesssion/response-types/response-types.component';
import { HeadersAndQueryParametersComponent } from './lesssion/headers-and-query-parameters/headers-and-query-parameters.component';
import { HttpErrorHandlingComponent } from './lesssion/http-error-handling/http-error-handling.component';
import { AuthenticationComponent } from './lesssion/authentication/authentication.component';
import { InterceptorsComponent } from './lesssion/interceptors/interceptors.component';
import { MockingHttpRequestsComponent } from './lesssion/mocking-http-requests/mocking-http-requests.component';
import { LocalizationComponent } from './lesssion/localization/localization.component';
import { InternationalizationComponent } from './lesssion/internationalization/internationalization.component';
import { TranslationFilesComponent } from './lesssion/translation-files/translation-files.component';
import { MarkupTranslationComponent } from './lesssion/markup-translation/markup-translation.component';
import { TranslationProcessComponent } from './lesssion/translation-process/translation-process.component';
import { LocalizationConfigComponent } from './lesssion/localization-config/localization-config.component';
import { TranslateServiceComponent } from './lesssion/translate-service/translate-service.component';
import { DynamicLocalizationComponent } from './lesssion/dynamic-localization/dynamic-localization.component';
import { PluralizationSelectorsComponent } from './lesssion/pluralization-selectors/pluralization-selectors.component';
import { LanguageSwitchingComponent } from './lesssion/language-switching/language-switching.component';
import { AngularSsrComponent } from './lesssion/angular-ssr/angular-ssr.component';
import { SsrComponent } from './lesssion/ssr/ssr.component';
import { AngularUniversalComponent } from './lesssion/angular-universal/angular-universal.component';
import { PrerequisitesComponent } from './lesssion/prerequisites/prerequisites.component';
import { SetupAndConfigComponent } from './lesssion/setup-and-config/setup-and-config.component';
import { RenderingProcessComponent } from './lesssion/rendering-process/rendering-process.component';
import { DataTransferComponent } from './lesssion/data-transfer/data-transfer.component';
import { SsrLifecycleHooksComponent } from './lesssion/ssr-lifecycle-hooks/ssr-lifecycle-hooks.component';
import { DeploymentComponent } from './lesssion/deployment/deployment.component';
import { UniversalWithCliComponent } from './lesssion/universal-with-cli/universal-with-cli.component';
import { TestingModuleComponent } from './lesssion/testing-module/testing-module.component';
import { TestingFrameworksComponent } from './lesssion/testing-frameworks/testing-frameworks.component';
import { TestBedComponent } from './lesssion/test-bed/test-bed.component';
import { UnitTestingComponent } from './lesssion/unit-testing/unit-testing.component';
import { ComponentTestingComponent } from './lesssion/component-testing/component-testing.component';
import { MockingDependenciesComponent } from './lesssion/mocking-dependencies/mocking-dependencies.component';
import { IntegrationTestingComponent } from './lesssion/integration-testing/integration-testing.component';
import { TestMockingHttpRequestsComponent } from './lesssion/test-mocking-http-requests/test-mocking-http-requests.component';
import { E2eTestingComponent } from './lesssion/e2e-testing/e2e-testing.component';
import { TestCoverageComponent } from './lesssion/test-coverage/test-coverage.component';
import { ContinuousIntegrationComponent } from './lesssion/continuous-integration/continuous-integration.component';
import { PerformanceOptimizationComponent } from './lesssion/performance-optimization/performance-optimization.component';
import { ChangeDetectionComponent } from './lesssion/change-detection/change-detection.component';
import { PerformanceLazyLoadingComponent } from './lesssion/performance-lazy-loading/performance-lazy-loading.component';
import { AotCompilationComponent } from './lesssion/aot-compilation/aot-compilation.component';
import { CodeMinificationComponent } from './lesssion/code-minification/code-minification.component';
import { OptimizingImagesComponent } from './lesssion/optimizing-images/optimizing-images.component';
import { PerformanceProfilingComponent } from './lesssion/performance-profiling/performance-profiling.component';
import { CachingAndHttpOptimizationComponent } from './lesssion/caching-and-http-optimization/caching-and-http-optimization.component';
import { OptimizingRouterComponent } from './lesssion/optimizing-router/optimizing-router.component';
import { MemoryManagementComponent } from './lesssion/memory-management/memory-management.component';
import { ThirdPartyLibrariesComponent } from './lesssion/third-party-libraries/third-party-libraries.component';
import { DeploymentModuleComponent } from './lesssion/deployment-module/deployment-module.component';
import { BuildlingTheApplicationComponent } from './lesssion/buildling-the-application/buildling-the-application.component';
import { ChooseAHostingComponent } from './lesssion/choose-a-hosting/choose-a-hosting.component';
import { ServerConfigComponent } from './lesssion/server-config/server-config.component';
import { StaticFileDeploymentComponent } from './lesssion/static-file-deployment/static-file-deployment.component';
import { DomainAndDnsConfigComponent } from './lesssion/domain-and-dns-config/domain-and-dns-config.component';
import { SslSertificatesComponent } from './lesssion/ssl-sertificates/ssl-sertificates.component';
import { ContinuousIntegrationDpComponent } from './lesssion/continuous-integration-dp/continuous-integration-dp.component';
import { TestingAndVerificationComponent } from './lesssion/testing-and-verification/testing-and-verification.component';
import { MonitoringAndMaintenanceComponent } from './lesssion/monitoring-and-maintenance/monitoring-and-maintenance.component';
import { AngularAnimationComponent } from './lesssion/angular-animation/angular-animation.component';
import { AnimationModuleComponent } from './lesssion/animation-module/animation-module.component';
import { AnimationTriggerComponent } from './lesssion/animation-trigger/animation-trigger.component';
import { StatesAndTransitionsComponent } from './lesssion/states-and-transitions/states-and-transitions.component';
import { KeyframesAndStylesComponent } from './lesssion/keyframes-and-styles/keyframes-and-styles.component';
import { AnimationFunctionsComponent } from './lesssion/animation-functions/animation-functions.component';
import { TriggeringAnimationsComponent } from './lesssion/triggering-animations/triggering-animations.component';
import { AnimationMetadataComponent } from './lesssion/animation-metadata/animation-metadata.component';
import { GroupingAndSequencingComponent } from './lesssion/grouping-and-sequencing/grouping-and-sequencing.component';
import { DynamicAnimationsComponent } from './lesssion/dynamic-animations/dynamic-animations.component';
import { IntegrationWithAngularDirectivesComponent } from './lesssion/integration-with-angular-directives/integration-with-angular-directives.component';

const routes: Routes = [
    { path: routeConfig?.empty, component: DashboardComponent },
    {
        path: ngTopics?.ngintro, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: IntroComponent },
            { path: ngTopics?.features_of_angular, component: FeaturesOfAngularComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.angular_cli, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: AngularCliComponent },
            { path: ngTopics?.new_angular_project, component: NewAngularProjectComponent },
            { path: ngTopics?.generating_components, component: GeneratingComponentsComponent },
            { path: ngTopics?.development_server, component: DevelopmentServerComponent },
            { path: ngTopics?.production_builds, component: ProductionBuildsComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.module, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: ModuleComponent },
            { path: ngTopics?.ngmodule, component: NgmoduleComponent },
            { path: ngTopics?.imports, component: ImportsComponent },
            { path: ngTopics?.declarations, component: DeclarationsComponent },
            { path: ngTopics?.exports, component: ExportsComponent },
            { path: ngTopics?.providers, component: ProvidersComponent },
            { path: ngTopics?.bootstrap, component: BootstrapComponent },
            { path: ngTopics?.lazy_loading, component: LazyLoadingComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.components, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: ComponentsComponent },
            { path: ngTopics?.component_class, component: ComponentClassComponent },
            { path: ngTopics?.template, component: TemplateComponent },
            { path: ngTopics?.component_metadata, component: ComponentMetadataComponent },
            { path: ngTopics?.lifecycle_hooks, component: LifecycleHooksComponent },
            { path: ngTopics?.component_communication, component: ComponentCommunicationComponent },
            { path: ngTopics?.component_styling, component: ComponentStylingComponent },
            { path: ngTopics?.component_interaction, component: ComponentInteractionComponent },
            { path: ngTopics?.component_routing, component: ComponentRoutingComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.directives, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: DirectivesComponent },
            { path: ngTopics?.component_directives, component: ComponentDirectivesComponent },
            { path: ngTopics?.attribute_directives, component: AttributeDirectivesComponent },
            { path: ngTopics?.structural_directives, component: StructuralDirectivesComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.data_binding, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: DataBindingComponent },
            { path: ngTopics?.interpolation, component: InterpolationComponent },
            { path: ngTopics?.property_binding, component: PropertyBindingComponent },
            { path: ngTopics?.event_binding, component: EventBindingComponent },
            { path: ngTopics?.two_way_binding, component: TwoWayBindingComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.forms, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: FormsComponent },
            { path: ngTopics?.td_forms, component: TdFormsComponent },
            { path: ngTopics?.reactive_forms, component: ReactiveFormsComponent },
            { path: ngTopics?.formcontrol, component: FormcontrolComponent },
            { path: ngTopics?.formgroup, component: FormgroupComponent },
            { path: ngTopics?.formarray, component: FormarrayComponent },
            { path: ngTopics?.form_submission, component: FormSubmissionComponent },
            { path: ngTopics?.dynamic_fc_manipulation, component: DynamicFcManipulationComponent },
            { path: ngTopics?.f_validation, component: FValidationComponent },
            { path: ngTopics?.f_builder, component: FBuilderComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.dependency_injection, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: DependencyInjectionComponent },
            { path: ngTopics?.service_registration, component: ServiceRegistrationComponent },
            { path: ngTopics?.injector, component: InjectorComponent },
            { path: ngTopics?.di_in_components, component: DiInComponentsComponent },
            { path: ngTopics?.di_into_services, component: DiIntoServicesComponent },
            { path: ngTopics?.provider_configuration, component: ProviderConfigurationComponent },
            { path: ngTopics?.injection_tokens, component: InjectionTokensComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.services, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: ServicesComponent },
            { path: ngTopics?.creating_a_service, component: CreatingAServiceComponent },
            { path: ngTopics?.injecting_a_service, component: InjectingAServiceComponent },
            { path: ngTopics?.singleton_scope, component: SingletonScopeComponent },
            { path: ngTopics?.providing_services, component: ProvidingServicesComponent },
            { path: ngTopics?.service_dependencies, component: ServiceDependenciesComponent }
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.routing, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: RoutingComponent },
            { path: ngTopics?.router_module, component: RouterModuleComponent },
            { path: ngTopics?.router_outlet, component: RouterOutletComponent },
            { path: ngTopics?.route_config, component: RouteConfigComponent },
            { path: ngTopics?.traditional_routing, component: TraditionalRoutingComponent },
            { path: ngTopics?.path_based_routing, component: PathBasedRoutingComponent },
            { path: ngTopics?.lazy_loaded, component: LazyLoadedComponent },
            { path: ngTopics?.navigation, component: NavigationComponent },
            { path: ngTopics?.route_parameters, component: RouteParametersComponent },
            { path: ngTopics?.nested_routes, component: NestedRoutesComponent },
            { path: ngTopics?.route_guards, component: RouteGuardsComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.state_management, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: StateManagementComponent },
            { path: ngTopics?.input_output, component: InputOutputComponent },
            { path: ngTopics?.stm_services, component: StmServicesComponent },
            { path: ngTopics?.rxJS_and_observables, component: RxJSAndObservablesComponent },
            { path: ngTopics?.ngrx, component: NgrxComponent },
            { path: ngTopics?.other_s_management_libraries, component: OtherSManagementLibrariesComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.rxJs_basic, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: RxJsBasicComponent },
            { path: ngTopics?.observables, component: ObservablesComponent },
            { path: ngTopics?.interval, component: IntervalComponent },
            { path: ngTopics?.timer, component: TimerComponent },
            { path: ngTopics?.from, component: FromComponent },
            { path: ngTopics?.of, component: OfComponent },
            { path: ngTopics?.fromevent, component: FromeventComponent },
            { path: ngTopics?.ajax, component: AjaxComponent },
            { path: ngTopics?.empty, component: EmptyComponent },
            { path: ngTopics?.never, component: NeverComponent },
            { path: ngTopics?.throw, component: ThrowComponent },
            { path: ngTopics?.operators, component: OperatorsComponent },
            { path: ngTopics?.subscription, component: SubscriptionComponent },
            { path: ngTopics?.subjects, component: SubjectsComponent },
            { path: ngTopics?.behaviorsubject, component: BehaviorsubjectComponent },
            { path: ngTopics?.replaysubject, component: ReplaysubjectComponent },
            { path: ngTopics?.asyncsubject, component: AsyncsubjectComponent },
            { path: ngTopics?.schedulers, component: SchedulersComponent },
            { path: ngTopics?.error_handling, component: ErrorHandlingComponent },
            { path: ngTopics?.hot_vs_cold, component: HotVsColdComponent },
            { path: ngTopics?.higher_order, component: HigherOrderComponent },
            { path: ngTopics?.async_pipe, component: AsyncPipeComponent },
            { path: ngTopics?.multiple_streams, component: MultipleStreamsComponent },
            { path: ngTopics?.caching_and_memoization, component: CachingAndMemoizationComponent },
            { path: ngTopics?.testing, component: TestingComponent },
            { path: ngTopics?.backpressure, component: BackpressureComponent },
            { path: ngTopics?.custom_operators, component: CustomOperatorsComponent },
            { path: ngTopics?.time_based_operators, component: TimeBasedOperatorsComponent },
            { path: ngTopics?.multicasting_and_connectable, component: MulticastingAndConnectableComponent },
            { path: ngTopics?.customizing_observable_creation, component: CustomizingObservableCreationComponent },
            { path: ngTopics?.immutable_data_handling, component: ImmutableDataHandlingComponent },
            { path: ngTopics?.advanced_techniques, component: AdvancedTechniquesComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.http_and_apis, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: HttpAndApisComponent },
            { path: ngTopics?.httpclient, component: HttpclientComponent },
            { path: ngTopics?.http_methods, component: HttpMethodsComponent },
            { path: ngTopics?.http_requests, component: HttpRequestsComponent },
            { path: ngTopics?.handling_responses, component: HandlingResponsesComponent },
            { path: ngTopics?.response_types, component: ResponseTypesComponent },
            { path: ngTopics?.headers_and_query_parameters, component: HeadersAndQueryParametersComponent },
            { path: ngTopics?.http_error_handling, component: HttpErrorHandlingComponent },
            { path: ngTopics?.authentication, component: AuthenticationComponent },
            { path: ngTopics?.interceptors, component: InterceptorsComponent },
            { path: ngTopics?.mocking_http_requests, component: MockingHttpRequestsComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.localization, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: LocalizationComponent },
            { path: ngTopics?.internationalization, component: InternationalizationComponent },
            { path: ngTopics?.translation_files, component: TranslationFilesComponent },
            { path: ngTopics?.markup_translation, component: MarkupTranslationComponent },
            { path: ngTopics?.translation_process, component: TranslationProcessComponent },
            { path: ngTopics?.localization_config, component: LocalizationConfigComponent },
            { path: ngTopics?.dynamic_localization, component: DynamicLocalizationComponent },
            { path: ngTopics?.translate_service, component: TranslateServiceComponent },
            { path: ngTopics?.language_switching, component: LanguageSwitchingComponent },
            { path: ngTopics?.pluralization_selectors, component: PluralizationSelectorsComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.angular_ssr, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: AngularSsrComponent },
            { path: ngTopics?.ssr, component: SsrComponent },
            { path: ngTopics?.angular_universal, component: AngularUniversalComponent },
            { path: ngTopics?.prerequisites, component: PrerequisitesComponent },
            { path: ngTopics?.setup_and_config, component: SetupAndConfigComponent },
            { path: ngTopics?.rendering_process, component: RenderingProcessComponent },
            { path: ngTopics?.data_transfer, component: DataTransferComponent },
            { path: ngTopics?.ssr_lifecycle_hooks, component: SsrLifecycleHooksComponent },
            { path: ngTopics?.deployment, component: DeploymentComponent },
            { path: ngTopics?.universal_with_cli, component: UniversalWithCliComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.testing_module, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: TestingModuleComponent },
            { path: ngTopics?.testing_frameworks, component: TestingFrameworksComponent },
            { path: ngTopics?.test_bed, component: TestBedComponent },
            { path: ngTopics?.unit_testing, component: UnitTestingComponent },
            { path: ngTopics?.component_testing, component: ComponentTestingComponent },
            { path: ngTopics?.mocking_dependencies, component: MockingDependenciesComponent },
            { path: ngTopics?.integration_testing, component: IntegrationTestingComponent },
            { path: ngTopics?.test_mocking_http_requests, component: TestMockingHttpRequestsComponent },
            { path: ngTopics?.e2e_testing, component: E2eTestingComponent },
            { path: ngTopics?.test_coverage, component: TestCoverageComponent },
            { path: ngTopics?.continuous_integration, component: ContinuousIntegrationComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.performance_optimization, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: PerformanceOptimizationComponent },
            { path: ngTopics?.change_detection, component: ChangeDetectionComponent },
            { path: ngTopics?.performance_lazy_loading, component: PerformanceLazyLoadingComponent },
            { path: ngTopics?.aot_compilation, component: AotCompilationComponent },
            { path: ngTopics?.code_minification, component: CodeMinificationComponent },
            { path: ngTopics?.optimizing_images, component: OptimizingImagesComponent },
            { path: ngTopics?.caching_and_http_optimization, component: CachingAndHttpOptimizationComponent },
            { path: ngTopics?.performance_profiling, component: PerformanceProfilingComponent },
            { path: ngTopics?.optimizing_router, component: OptimizingRouterComponent },
            { path: ngTopics?.memory_management, component: MemoryManagementComponent },
            { path: ngTopics?.third_party_libraries, component: ThirdPartyLibrariesComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.deployment_module, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: DeploymentModuleComponent },
            { path: ngTopics?.buildling_the_application, component: BuildlingTheApplicationComponent },
            { path: ngTopics?.choose_a_hosting, component: ChooseAHostingComponent },
            { path: ngTopics?.server_config, component: ServerConfigComponent },
            { path: ngTopics?.static_file_deployment, component: StaticFileDeploymentComponent },
            { path: ngTopics?.domain_and_dns_config, component: DomainAndDnsConfigComponent },
            { path: ngTopics?.ssl_sertificates, component: SslSertificatesComponent },
            { path: ngTopics?.continuous_integration_dp, component: ContinuousIntegrationDpComponent },
            { path: ngTopics?.testing_and_verification, component: TestingAndVerificationComponent },
            { path: ngTopics?.monitoring_and_maintenance, component: MonitoringAndMaintenanceComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
    {
        path: ngTopics?.angular_animation, component: LayoutComponent,
        children: [
            { path: routeConfig?.empty, component: AngularAnimationComponent },
            { path: ngTopics?.animation_module, component: AnimationModuleComponent },
            { path: ngTopics?.animation_trigger, component: AnimationTriggerComponent },
            { path: ngTopics?.states_and_transitions, component: StatesAndTransitionsComponent },
            { path: ngTopics?.keyframes_and_styles, component: KeyframesAndStylesComponent },
            { path: ngTopics?.animation_functions, component: AnimationFunctionsComponent },
            { path: ngTopics?.triggering_animations, component: TriggeringAnimationsComponent },
            { path: ngTopics?.animation_metadata, component: AnimationMetadataComponent },
            { path: ngTopics?.grouping_and_sequencing, component: GroupingAndSequencingComponent },
            { path: ngTopics?.dynamic_animations, component: DynamicAnimationsComponent },
            { path: ngTopics?.integration_with_angular_directives, component: IntegrationWithAngularDirectivesComponent },
        ],
        data: { courceData: courceRoute?.angular }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularRoutingModule { }
