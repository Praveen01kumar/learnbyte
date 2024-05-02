import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-inter-views',
  templateUrl: './inter-views.component.html',
  styleUrls: ['./inter-views.component.scss']
})
export class InterViewsComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }
  block: string = '{}';
  ngOnInit(): void { this.callOninIt(); }
  contentList: RsideBar[] = [];

  callOninIt() {
    const data: RsideBar[] = [
      { name: 'What is Angular Framework?', id: "What_is_Angular_Framework" },
      { name: 'What is the difference between AngularJS and Angular?', id: "What_is_the_difference_between_AngularJS_and_Angular" },
      { name: 'What are directives?', id: "What_are_directives" },
      { name: 'What are components?', id: "What_are_components" },
      { name: 'What are the differences between Component and Directive?', id: "What_are_the_differences_between_Component_and_Directive" },
      { name: 'What is a module?', id: "What_is_a_module" },
      { name: 'What are lifecycle hooks available?', id: "What_are_lifecycle_hooks_available" },
      { name: 'What is a data binding?', id: "What_is_a_data_binding" },
      { name: 'What is metadata?', id: "What_is_metadata" },
      { name: 'What is a service?', id: "What_is_a_service" },
      { name: 'What is the pipe?', id: "What_is_the_pipe" },
      { name: 'What happens if you use script tag inside template?', id: "What_happens_if_you_use_script_tag_inside_template" },
      { name: 'What is a bootstrapping module?', id: "What_is_a_bootstrapping_module" },
      { name: 'What are observables?', id: "What_are_observables" },
      { name: 'What is HttpClient and its benefits?', id: "What_is_HttpClient_and_its_benefits" },
      { name: 'What is the difference between promise and observable?', id: "What_is_the_difference_between_promise_and_observable" },
      { name: 'What is multicasting?', id: "What_is_multicasting" },
      { name: 'What are observable creation functions?', id: "What_are_observable_creation_functions" },
      { name: 'What are dynamic components?', id: "What_are_dynamic_components" },
      { name: 'What is router outlet?', id: "What_is_router_outlet" },
      { name: 'What are router links?', id: "What_are_router_links" },
      { name: 'What are active router links?', id: "What_are_active_router_links" },
      { name: 'What is router state?', id: "What_is_router_state" },
      { name: 'What are router events?', id: "What_are_router_events" },
      { name: 'What is activated route?', id: "What_is_activated_route" },
      { name: 'How do you define routes?', id: "How_do_you_define_routes" },
      { name: 'What is the purpose of Wildcard route?', id: "What_is_the_purpose_of_Wildcard_route" },
      { name: 'Do I need a Routing Module always?', id: "Do_I_need_a_Routing_Module_always" },
      { name: 'What is Angular Universal?', id: "What_is_Angular_Universal" },
      { name: 'What are different types of compilation in Angular?', id: "What_are_different_types_of_compilation_in_Angular" },
      { name: 'What is JIT?', id: "What_is_JIT" },
      { name: 'What is AOT?', id: "What_is_AOT" },
      { name: 'What are difference between JIT and AOT?', id: "What_are_difference_between_JIT_and_AOT" },
      { name: 'What are the advantages with AOT?', id: "What_are_the_advantages_with_AOT" },
      { name: 'What are the three phases of AOT?', id: "What_are_the_three_phases_of_AOT" },
      { name: 'Can I use arrow functions in AOT?', id: "Can_I_use_arrow_functions_in_AOT" },
      { name: 'What is the purpose of metadata json files?', id: "What_is_the_purpose_of_metadata_json_files" },
      { name: 'Can I use any javascript feature for expression syntax in AOT?', id: "Can_I_use_any_javascript_feature_for_expression_syntax_in_AOT" },
      { name: 'What is folding?', id: "What_is_folding" },
      { name: 'What are macros?', id: "What_are_macros" },
      { name: 'Give an example of few metadata errors?', id: "Give_an_example_of_few_metadata_errors" },
      { name: 'What is metadata rewriting?', id: "What_is_metadata_rewriting" },
      { name: 'How do you provide configuration inheritance?', id: "How_do_you_provide_configuration_inheritance" },
      { name: 'How do you specify angular template compiler options?', id: "How_do_you_specify_angular_template_compiler_options" },
      { name: 'How do you enable binding expression validation?', id: "How_do_you_enable_binding_expression_validation" },
      { name: 'What is the purpose of any type cast function?', id: "What_is_the_purpose_of_any_type_cast_function" },
      { name: 'What is Non null type assertion operator?', id: "What_is_Non_null_type_assertion_operator" },
      { name: 'What is type narrowing?', id: "What_is_type_narrowing" },
      { name: 'How do you describe various dependencies in angular application?', id: "How_do_you_describe_various_dependencies_in_angular_application" },
      { name: 'What is zone?', id: "What_is_zone" },
      { name: 'What is the purpose of common module?', id: "What_is_the_purpose_of_common_module" },
      { name: 'What is codelyzer?', id: "What_is_codelyzer" },
      { name: 'What is angular animation?', id: "What_is_angular_animation" },
      { name: 'What are the steps to use animation module?', id: "What_are_the_steps_to_use_animation_module" },
      { name: 'What is State function?', id: "What_is_State_function" },
      { name: 'What is Style function?', id: "What_is_Style_function" },
      { name: 'What is the purpose of animate function?', id: "What_is_the_purpose_of_animate_function" },
      { name: 'What is transition function?', id: "What_is_transition_function" },
      { name: 'How to inject the dynamic script in angular?', id: "How_to_inject_the_dynamic_script_in_angular" },
      { name: 'What is a service worker and its role in Angular?', id: "What_is_a_service_worker_and_its_role_in_Angular" },
      { name: 'What are the design goals of service workers?', id: "What_are_the_design_goals_of_service_workers" },
      { name: 'What is Angular Ivy?', id: "What_is_Angular_Ivy" },
      { name: 'What is View Engine in Angular?', id: "What_is_View_Engine_in_Angular" },
      { name: 'What was improved in Ivy?', id: "What_was_improved_in_Ivy" },
      { name: 'what was ways of make build of app Before and After of Ivy?', id: "what_was_ways_of_make_build_of_app_Before_and_After_of_Ivy" },
      { name: 'What is Angular Language Service?', id: "What_is_Angular_Language_Service" },
      { name: 'How do you install angular language service in the project?', id: "How_do_you_install_angular_language_service_in_the_project" },
      { name: 'Is there any editor support for Angular Language Service?', id: "Is_there_any_editor_support_for_Angular_Language_Service" },
      { name: 'How do you add web workers in your application?', id: "How_do_you_add_web_workers_in_your_application" },
      { name: 'What are the limitations with web workers?', id: "What_are_the_limitations_with_web_workers" },
      { name: 'What is Angular CLI Builder?', id: "What_is_Angular_CLI_Builder" },
      { name: 'What is a builder?', id: "What_is_a_builder" },
      { name: 'How do you invoke a builder?', id: "How_do_you_invoke_a_builder" },
      { name: 'How do you create app shell in Angular?', id: "How_do_you_create_app_shell_in_Angular" },
      { name: 'What is declarable in Angular?', id: "What_is_declarable_in_Angular" },
      { name: 'What are the restrictions on declarable classes?', id: "What_are_the_restrictions_on_declarable_classes" },
      { name: 'What is a DI token?', id: "What_is_a_DI_token" },
      { name: 'What is Angular DSL?', id: "What_is_Angular_DSL" },
      { name: 'What is Bazel tool?', id: "What_is_Bazel_tool" },
      { name: 'What are the advantages of Bazel tool?', id: "What_are_the_advantages_of_Bazel_tool" },
      { name: 'How do you use Bazel with Angular CLI?', id: "How_do_you_use_Bazel_with_Angular_CLI" },
      { name: 'How do you run Bazel directly?', id: "How_do_you_run_Bazel_directly" },
      { name: 'What is platform in Angular?', id: "What_is_platform_in_Angular" },
      { name: 'What happens if I import the same module twice?', id: "What_happens_if_I_import_the_same_module_twice" },
      { name: 'what is tree shaking?', id: "what_is_tree_shaking" },
      { name: 'How do you select an element with in a component template?', id: "How_do_you_select_an_element_with_in_a_component_template" },
      { name: 'How do you detect route change in Angular?', id: "How_do_you_detect_route_change_in_Angular" },
      { name: 'How do you pass headers for HTTP client?', id: "How_do_you_pass_headers_for_HTTP_client" },
      { name: 'Is Angular supports dynamic imports?', id: "Is_Angular_supports_dynamic_imports" },
      { name: 'What is lazy loading?', id: "What_is_lazy_loading" },
      { name: 'What are workspace APIs?', id: "What_are_workspace_APIs" },
      { name: 'How do you test Angular application using CLI?', id: "How_do_you_test_Angular_application_using_CLI" },
      { name: 'How to use polyfills in Angular application?', id: "How_to_use_polyfills_in_Angular_application" },
      { name: 'What are the ways to trigger change detection in Angular?', id: "What_are_the_ways_to_trigger_change_detection_in_Angular" },
      { name: 'What are the differences of various versions of Angular?', id: "What_are_the_differences_of_various_versions_of_Angular" },
      { name: 'What are the security principles in angular?', id: "What_are_the_security_principles_in_angular" },
      { name: 'What is the reason to deprecate Web Tracing Framework?', id: "What_is_the_reason_to_deprecate_Web_Tracing_Framework" },
      { name: 'What is the reason to deprecate web worker packages?', id: "What_is_the_reason_to_deprecate_web_worker_packages" },
      { name: 'What is schematic?', id: "What_is_schematic" },
      { name: 'What is rule in Schematics?', id: "What_is_rule_in_Schematics" },
      { name: 'What is Schematics CLI?', id: "What_is_Schematics_CLI" },
      { name: 'What are the best practices for security in angular?', id: "What_are_the_best_practices_for_security_in_angular" },
      { name: 'What is Angular security model for preventing XSS attacks?', id: "What_is_Angular_security_model_for_preventing_XSS_attacks" },
      { name: 'What is the role of template compiler for prevention of XSS attacks?', id: "What_is_the_role_of_template_compiler_for_prevention_of_XSS_attacks" },
      { name: 'What are the various security contexts in Angular?', id: "What_are_the_various_security_contexts_in_Angular" },
      { name: 'What is Sanitization? Is angular supports it?', id: "What_is_Sanitization_Is_angular_supports_it" },
      { name: 'What is the purpose of innerHTML?', id: "What_is_the_purpose_of_innerHTML" },
      { name: 'What is the difference between interpolated content and innerHTML?', id: "What_is_the_difference_between_interpolated_content_and_innerHTML" },
      { name: 'What is DOM sanitizer?', id: "What_is_DOM_sanitizer" },
      { name: 'How do you support server side XSS protection in Angular application?', id: "How_do_you_support_server_side_XSS_protection_in_Angular_application" },
      { name: 'Is angular prevents http level vulnerabilities?', id: "Is_angular_prevents_http_level_vulnerabilities" },
      { name: 'What are Http Interceptors?', id: "What_are_Http_Interceptors" },
      { name: 'What are the applications of HTTP interceptors?', id: "What_are_the_applications_of_HTTP_interceptors" },
      { name: 'Is multiple interceptors supported in Angular?', id: "Is_multiple_interceptors_supported_in_Angular" },
      { name: 'How can I use interceptor for an entire application?', id: "How_can_I_use_interceptor_for_an_entire_application" },
      { name: 'What are the four phases of template translation?', id: "What_are_the_four_phases_of_template_translation" },
      { name: 'What is the purpose of i18n attribute?', id: "What_is_the_purpose_of_i18n_attribute" },
      { name: 'How can I translate attribute?', id: "How_can_I_translate_attribute" },
      { name: 'List down the pluralization categories?', id: "List_down_the_pluralization_categories" },
      { name: 'What is select ICU expression?', id: "What_is_select_ICU_expression" },
      { name: 'How do you report missing translations?', id: "How_do_you_report_missing_translations" },
      { name: 'How do you provide build configuration for multiple locales?', id: "How_do_you_provide_build_configuration_for_multiple_locales" },
      { name: 'How do you select an element in component template?', id: "How_do_you_select_an_element_in_component_template" },
      { name: 'What is TestBed?', id: "What_is_TestBed" },
      { name: 'What is protractor?', id: "What_is_protractor" },
      { name: 'What is collection?', id: "What_is_collection" },
      { name: 'How do you create schematics for libraries?', id: "How_do_you_create_schematics_for_libraries" },
      { name: 'What is the difference between ngIf and hidden property?', id: "What_is_the_difference_between_ngIf_and_hidden_property" },
      { name: 'What is the purpose of ngFor trackBy?', id: "What_is_the_purpose_of_ngFor_trackBy" },
      { name: 'What is safe navigation operator?', id: "What_is_safe_navigation_operator" },
      { name: 'Is any special configuration required for Angular9?', id: "Is_any_special_configuration_required_for_Angular9" },
      { name: 'What are type safe TestBed API changes in Angular9?', id: "What_are_type_safe_TestBed_API_changes_in_Angular9" },
      { name: 'Is mandatory to pass static flag for ViewChild?', id: "Is_mandatory_to_pass_static_flag_for_ViewChild" },
      { name: 'What are the list of template expression operators?', id: "What_are_the_list_of_template_expression_operators" },
      { name: 'What is the precedence between pipe and ternary operators?', id: "What_is_the_precedence_between_pipe_and_ternary_operators" },
      { name: 'How do you manually bootstrap an application?', id: "How_do_you_manually_bootstrap_an_application" },
      { name: 'Why is not necessary to use entryComponents array every time?', id: "Why_is_not_necessary_to_use_entryComponents_array_every_time" },
      { name: 'Do I still need to use entryComponents array in Angular9?', id: "Do_I_still_need_to_use_entryComponents_array_in_Angular9" },
      { name: 'Is it all components generated in production build?', id: "Is_it_all_components_generated_in_production_build" },
      { name: 'What is Angular compiler?', id: "What_is_Angular_compiler" },
      { name: 'What is the role of ngModule metadata in compilation process?', id: "What_is_the_role_of_ngModule_metadata_in_compilation_process" },
      { name: 'How does angular finds components, directives and pipes?', id: "How_does_angular_finds_components_directives_and_pipes" },
      { name: 'Give few examples for NgModules?', id: "Give_few_examples_for_NgModules" },
      { name: 'What are feature modules?', id: "What_are_feature_modules" },
      { name: 'What are the types of feature modules?', id: "What_are_the_types_of_feature_modules" },
      { name: 'What is a provider?', id: "What_is_a_provider" },
      { name: 'What is the recommendation for provider scope?', id: "What_is_the_recommendation_for_provider_scope" },
      { name: 'How do you restrict provider scope to a module?', id: "How_do_you_restrict_provider_scope_to_a_module" },
      { name: 'How do you provide a singleton service?', id: "How_do_you_provide_a_singleton_service" },
      { name: 'What is a shared module?', id: "What_is_a_shared_module" },
      { name: 'What is ngcc?', id: "What_is_ngcc" },
      { name: 'What is NgZone?', id: "What_is_NgZone" },
      { name: 'What is NoopZone?', id: "What_is_NoopZone" },
      { name: 'How do you create displayBlock components?', id: "How_do_you_create_displayBlock_components" },
      { name: 'What are the possible data update scenarios for change detection?', id: "What_are_the_possible_data_update_scenarios_for_change_detection" },
      { name: 'What is a zone context?', id: "What_is_a_zone_context" },
      { name: 'What are the lifecycle hooks of a zone?', id: "What_are_the_lifecycle_hooks_of_a_zone" },
      { name: 'What are the methods of NgZone used to control change detection?', id: "What_are_the_methods_of_NgZone_used_to_control_change_detection" },
      { name: 'How do you change the settings of zonejs?', id: "How_do_you_change_the_settings_of_zonejs" },
      { name: 'How do you trigger an animation?', id: "How_do_you_trigger_an_animation" },
      { name: 'What is an optional dependency?', id: "What_is_an_optional_dependency" },
      { name: 'What are the types of injector hierarchies?', id: "What_are_the_types_of_injector_hierarchies" },
      { name: 'What are reactive forms?', id: "What_are_reactive_forms" },
      { name: 'What are template driven forms?', id: "What_are_template_driven_forms" },
      { name: 'What are dynamic forms?', id: "What_are_dynamic_forms" },
      { name: 'What are the different ways to group form controls?', id: "What_are_the_different_ways_to_group_form_controls" },
      { name: 'what is formbuilder?', id: "what_is_formbuilder" },
      { name: 'How can reactive form group in reactive form without form buider?', id: "How_can_reactive_form_group_in_reactive_form_without_form_buider" },
      { name: 'What are the state CSS classes provided by ngModel?', id: "What_are_the_state_CSS_classes_provided_by_ngModel" },
      { name: 'What are the types of validator functions?', id: "What_are_the_types_of_validator_functions" },
      { name: 'How do you optimize the performance of async validators?', id: "How_do_you_optimize_the_performance_of_async_validators" },
      { name: 'What is host property in css?', id: "What_is_host_property_in_css" },
      { name: 'What is ng-deep property in angular?', id: "What_is_ng_deep_property_in_angular" },
      { name: 'What is hydration?', id: "What_is_hydration" },
      { name: 'What are the differences between reactive forms and template driven forms?', id: "What_are_the_differences_between_reactive_forms_and_template_driven_forms" },
      { name: 'What are the differences between setValue() and patchValue()?', id: "What_are_the_differences_between_setValue_and_patchValue" },
      { name: 'What are the differences between reset() and clear()?', id: "What_are_the_differences_between_reset_and_clear" },
      { name: 'What is guards in angular?', id: "What_is_guards_in_angular" },
      { name: 'Authentication Guards with NavigationCancel Handling?', id: "Authentication_Guards_with_NavigationCancel_Handling" },
      { name: 'Content projection in angular?', id: "Content_projection_in_angular" },
      { name: 'What is view encapsulation?', id: "What_is_view_encapsulation" },
      { name: 'How to increase the performance of angular application?', id: "How_to_increase_the_performance_of_angular_application" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
    this.contentList = data;
  }

  code: string = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: '<p>This is an example component directive.</p>',
    styleUrls: ['./example.component.css']
  })
  export class ExampleComponent {}
  `;
  code1: string = `<app-example></app-example>`;
  code2: string = `
<div *ngIf="isVisible">
  This content is only displayed if isVisible is true.
</div>
`;
  code3: string = `
<ul>
  <li *ngFor="let item of items">
    {{ item }}
  </li>
</ul>
`;
  code4: string = `
<div [ngSwitch]="value">
  <p *ngSwitchCase="'A'">Value is A</p>
  <p *ngSwitchCase="'B'">Value is B</p>
  <p *ngSwitchDefault>Value is neither A nor B</p>
</div>
`;
  code5: string = `
<ng-container *ngTemplateOutlet="templateRef"></ng-container>
  <ng-template #templateRef>
    <p>This content is dynamically inserted using ngTemplateOutlet</p>
</ng-template>
  `;
  code6: string = `
<ng-container *ngIf="condition">
  <p>Content inside ng-container</p>
</ng-container>
`;
  code7: string = `
  import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
 
  @Directive({
      selector: '[CustomIf]'
  })
   
  export class CustomDirective {
   
      constructor(
          private templateRef: TemplateRef<any>,
          private viewContainer: ViewContainerRef) { }
   
      @Input() set CustomIf(condition: boolean) {
          if (condition) {
              this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
              this.viewContainer.clear();
          }
      }
  }`;
  code8: string = `
  import { NgModule }      from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { MyCustomDirective } from './app.mycustomdirective';
   
  import { AppComponent }  from './app.component';
   
  @NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, MyCustomDirective ],
    bootstrap:    [ AppComponent ]
  })
  export class AppModule { }`;
  code9: string = `
  import { Component } from '@angular/core';
  @Component({
  selector: 'my-app',
  template: '<h1 my-error="">Welcome {{name}}</h1>
  <h2 *customif="condition">Welcome {{name}}</h2>
  <button (click)="condition = !condition">Click</button>',
  })
  export class AppComponent {
  name = 'Angular';
  condition = false;`;
  code10: string = `<div [ngClass]="{ 'highlight': isHighlighted, 'error': hasError }">...</div>`;
  code11: string = `<div [ngStyle]="{ 'color': isRed ? 'red' : 'blue', 'font-size.px': fontSize }">...</div>`;
  code12: string = `<input type="text" [(ngModel)]="name">`;
  code13: string = `import { Directive, ElementRef, HostListener } from '@angular/core';

  @Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {
    constructor(private el: ElementRef) {}
  
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }
  `;
  code14: string = `
  import { NgModule }      from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { HighlightDirective } from './app.mycustomdirective';
   
  import { AppComponent }  from './app.component';
   
  @NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, HighlightDirective ],
    bootstrap:    [ AppComponent ]
  })
  export class AppModule { }`;
  code15: string = `<p appHighlight>Hover over me to highlight</p>`;
  code16: string = `import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
  })
  export class ExampleComponent {
    // Properties
    title: string = 'Hello, Angular!';
  
    // Methods
    greet() {
      alert('Hello!');
    }
  }
  `;
  code17: string = `
  import { NgModule }      from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent }  from './app.component';
  
  @NgModule ({
     imports:      [ BrowserModule ],
     declarations: [ AppComponent ],
     bootstrap:    [ AppComponent ],
     providers: []
  })
  export class AppModule { }`;
  code18: string = `<!-- Template -->
  <p>{{ greeting }}</p>
  
  // Component
  export class MyComponent {
    greeting: string = 'Hello, World!';
  }
  `;
  code19: string = `<!-- Template -->
  <img [src]="imageUrl">
  
  // Component
  export class MyComponent {
    imageUrl: string = 'path/to/image.jpg';
  }
  `;
  code20: string = `<!-- Template -->
  <button (click)="onClick()">Click me!</button>
  
  // Component
  export class MyComponent {
    onClick(): void {
      console.log('Button clicked!');
    }
  }
  `;
  code21: string = `<!-- Template -->
  <input [(ngModel)]="username">
  
  // Component
  export class MyComponent {
    username: string = '';
  }
  `;
  code22: string = `<!-- Template -->
  <div [attr.data-custom]="customData"></div>
  
  // Component
  export class MyComponent {
    customData: string = 'example';
  }
  `;
  code23: string = `<!-- Template -->
  <div [class.error]="isError">Error Message</div>
  
  // Component
  export class MyComponent {
    isError: boolean = true;
  }
  `;
  code24: string = `<!-- Template -->
  <div [style.color]="isError ? 'red' : 'black'">Error Message</div>
  
  // Component
  export class MyComponent {
    isError: boolean = true;
  }
  `;
  code25: string = `<!-- Template -->
  <input #myInput type="text">
  <button (click)="logInputValue(myInput.value)">Log Value</button>
  
  // Component
  export class MyComponent {
    logInputValue(value: string): void {
      console.log('Input value:', value);
    }
  }
  `;
  code26: string = `import { NgModule, Component } from '@angular/core';

  @Component({
    selector: 'my-component',
    template: '<div>Class decorator</div>',
  })
  export class MyComponent {
    constructor() {
      console.log('Hey I am a component!');
    }
  }
  
  @NgModule({
    imports: [],
    declarations: [],
  })
  export class MyModule {
    constructor() {
      console.log('Hey I am a module!');
    }
  }`;
  code27: string = `import { Component, Input } from '@angular/core';

  @Component({
      selector: 'my-component',
      template: '<div>Property decorator</div>'
  })
  
  export class MyComponent {
      @Input()
      title: string;
  }`;
  code28: string = `import { Component, HostListener } from '@angular/core';

  @Component({
      selector: 'my-component',
      template: '<div>Method decorator</div>'
  })
  export class MyComponent {
      @HostListener('click', ['$event'])
      onHostClick(event: Event) {
          // clicked, event available
      }
  }`;
  code29: string = `import { Component, Inject } from '@angular/core';
  import { MyService } from './my-service';
  
  @Component({
      selector: 'my-component',
      template: '<div>Parameter decorator</div>'
  })
  export class MyComponent {
      constructor(@Inject(MyService) myService) {
          console.log(myService); // MyService
      }
  }`;
  code30: string = `import { Injectable } from '@angular/core';
  import { Http } from '@angular/http';
  
  @Injectable({ // The Injectable decorator is required for dependency injection to work
    // providedIn option registers the service with a specific NgModule
    providedIn: 'root',  // This declares the service with the root app (AppModule)
  })
  export class RepoService{
    constructor(private http: Http){
    }
  
    fetchAll(){
      return this.http.get('https://api.github.com/repositories');
    }
  }`;
  code31: string = `<!-- Template -->
  <p>Today is {{ today | date }}</p>
  <p>{{ 'Hello World' | uppercase }}</p>
  <p>{{ 'Hello World' | lowercase }}</p>
  <p>Price: {{ price | currency }}</p>
  <p>Number: {{ number | number:'3.2-2' }}</p>
  
  // Component
  export class MyComponent {
    today: Date = new Date();
    price: number = 50.25;
    number: number = 3.14159;
  }
  `;
  code32: string = `import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'multiply'
  })
  export class MultiplyPipe implements PipeTransform {
    transform(value: number, factor: number): number {
      return value * factor;
    }
  }
  `;
  code33: string = `import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'random',
    pure: false // Setting pure to false makes the pipe impure
  })
  export class RandomPipe implements PipeTransform {
    transform(value: number): number {
      return Math.random() * value;
    }
  }
  `;
  code34: string = `<!-- Template -->
  <p>{{ myString | uppercase | slice:0:5 }}</p>
  `;
  code35: string = `<!-- Template -->
  <p>{{ myDate | date:'medium' }}</p>
  `;
  code36: string = `import { Component } from '@angular/core';
  import { Observable, of } from 'rxjs';
  
  @Component({
    selector: 'app-example',
    template: '<p>{{ data$ | async }}</p>'
  })
  export class ExampleComponent {
    data$: Observable<string> = of('Hello, World!');
  }
  `;
  code37: string = `import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: '<p>{{ data$ | async }}</p>'
  })
  export class ExampleComponent {
    data$: Promise<string> = new Promise(resolve => {
      setTimeout(() => resolve('Hello, World!'), 2000);
    });
  }
  `;
  code38: string = `export class InnerHtmlBindingComponent {
    // For example, a user/attacker-controlled value from a URL.
    htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  }`;
  code39: string = `    import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';

  import { AppComponent } from './app.component';

  /* the AppModule class with the @NgModule decorator */
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }`;
  code40: string = `// Promise Example
  function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      // Simulate fetching data asynchronously
      setTimeout(() => {
        const data = 'Data fetched successfully';
        resolve(data); // Resolve the Promise with the fetched data
      }, 2000);
    });
  }
  
  // Consuming the Promise
  fetchDataWithPromise()
    .then(data => {
      console.log('Promise Data:', data);
    })
    .catch(error => {
      console.error('Promise Error:', error);
    });
  `;
  code41: string = `import { Observable, of } from 'rxjs';

  // Observable Example
  function fetchDataWithObservable() {
    return new Observable(observer => {
      // Simulate fetching data asynchronously
      setTimeout(() => {
        const data = 'Data fetched successfully';
        observer.next(data); // Emit the fetched data
        observer.complete(); // Signal that the Observable has completed
      }, 2000);
    });
  }
  
  // Consuming the Observable
  fetchDataWithObservable().subscribe({
    next: data => {
      console.log('Observable Data:', data);
    },
    error: error => {
      console.error('Observable Error:', error);
    },
    complete: () => {
      console.log('Observable Completed');
    }
  });
  `;
  code42: string = `var source = Rx.Observable.from([1, 2, 3]);
  var subject = new Rx.Subject();
  var multicasted = source.multicast(subject);
  
  // These are, under the hood, 'subject.subscribe({...})':
  multicasted.subscribe({
    next: (v) => console.log('observerA: ' + v)
  });
  multicasted.subscribe({
    next: (v) => console.log('observerB: ' + v)
  });
  
  // This is, under the hood, 's'}`;
  code43: string = `import { from } from 'rxjs'; // from function
  const data = from(fetch('/api/endpoint')); //Created from Promise
  data.subscribe({
   next(response) { console.log(response); },
   error(err) { console.error('Error: ' + err); },
   complete() { console.log('Completed'); }
  });`;
  code44: string = `import { ajax } from 'rxjs/ajax'; // ajax function
  const apiData = ajax('/api/data'); // Created from AJAX request
  // Subscribe to create the request
  apiData.subscribe(res => console.log(res.status, res.response));`;
  code45: string = `import { interval } from 'rxjs'; // interval function
  const secondsCounter = interval(1000); // Created from Counter value
  secondsCounter.subscribe(n =>
    console.log('Counter value: ${"n"}'));`;
  code46: string = `import { fromEvent } from 'rxjs';
  const el = document.getElementById('custom-element');
  const mouseMoves = fromEvent(el, 'mousemove');
  const subscription = mouseMoves.subscribe((e: MouseEvent) => {
    console.log('Coordnitaes of mouse pointer: ${"e.clientX"} * ${"e.clientY"}');
    });`;
  code47: string = `ng generate component dynamic-component`;
  code48: string = `<!-- parent-component.component.html -->
  <ng-container *ngComponentOutlet="dynamicComponent"></ng-container>
  `;
  code49: string = `import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
  import { DynamicComponent } from '../dynamic-component/dynamic-component.component';
  
  @Component({
    selector: 'app-parent-component',
    templateUrl: './parent-component.component.html',
    styleUrls: ['./parent-component.component.css']
  })
  export class ParentComponent {
    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
  
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
    createDynamicComponent() {
      // Resolve the factory for the DynamicComponent
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
      // Clear any existing components from the container
      this.dynamicComponentContainer.clear();
      // Create the component instance
      const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
      // Optionally, you can pass input data to the component
      componentRef.instance.someInputProperty = 'Value';
    }
  }
  `;
  code50: string = `<!-- parent-component.component.html -->
  <button (click)="createDynamicComponent()">Create Dynamic Component</button>
  <div #dynamicComponentContainer></div>
  `;
  code51: string = `<!-- app.component.html -->
  <router-outlet></router-outlet>
  `;
  code52: string = `<h1>Angular Router</h1>
  <nav>
    <a routerLink="/todosList" >List of todos</a>
    <a routerLink="/completed" >Completed todos</a>
  </nav>
  <router-outlet></router-outlet>`;
  code53: string = `<h1>Angular Router</h1>
  <nav>
    <a routerLink="/todosList" routerLinkActive="active">List of todos</a>
    <a routerLink="/completed" routerLinkActive="active">Completed todos</a>
  </nav>
  <router-outlet></router-outlet>`;
  code54: string = `@Component({templateUrl:'template.html'})
  class MyComponent {
    constructor(router: Router) {
      const state: RouterState = router.routerState;
      const root: ActivatedRoute = state.root;
      const child = root.firstChild;
      const id: Observable<string> = child.params.map(p => p.id);
      //...
    }
  }`;
  code55: string = `@Component({...})
  class MyComponent {
    constructor(route: ActivatedRoute) {
      const id: Observable<string> = route.params.pipe(map(p => p.id));
      const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
      // route.data includes both 'data' and 'resolve'
      const user = route.data.pipe(map(d => d.user));
    }
  }`;
  code56: string = ` const appRoutes: Routes = [
    { path: 'todo/:id',      component: TodoDetailComponent },
    {
      path: 'todos',
      component: TodosListComponent,
      data: { title: 'Todos List' }
    },
    { path: '',
      redirectTo: '/todos',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
    ...
  })
  export class AppModule { }`;
  code57: string = `{ path: '**', component: PageNotFoundComponent }`;
  code58: string = `@Component({
    providers: [{
      provide: MyService, useFactory: () => getService()
    }]
  })`;
  code59: string = `function getService(){
    return new MyService();
  }
  
  @Component({
    providers: [{
      provide: MyService, useFactory: getService
    }]
  })`;
  code60: string = `let selector = 'app-root';
  @Component({
    selector: selector
  })`;
  code61: string = `@Component({
    selector: 'app-root'
  })`;
  code62: string = `export function wrapInArray<T>(value: T): T[] {
    return [value];
  }`;
  code63: string = `@NgModule({
    declarations: wrapInArray(TypicalComponent)
  })
  export class TypicalModule {}`;
  code64: string = `@NgModule({
    declarations: [TypicalComponent]
  })
  export class TypicalModule {}`;
  code65: string = `1. export class User { ... }
  const prop = typeof User; // typeof is not valid in metadata
2. { provide: 'token', useValue: { [prop]: 'value' } }; // bracket notation is not valid in metadata`;
  code66: string = `// ERROR
  let username: string; // neither exported nor initialized
  
  @Component({
    selector: 'my-component',
    template: ... ,
    providers: [
      { provide: User, useValue: username }
    ]
  })
  export class MyComponent {}`;
  code67: string = `export let username: string; // exported
  (or)
  let username = 'John'; // initialized`;
  code68: string = ` providers: [
    { provide: MyStrategy, useFactory: function() { ... } },
    { provide: OtherStrategy, useFactory: () => { ... } }
  ]`;
  code69: string = `export function myStrategy() { ... }
  export function otherStrategy() { ... }
  ... // metadata
  providers: [
      { provide: MyStrategy, useFactory: myStrategy },
      { provide: OtherStrategy, useFactory: otherStrategy },`;
  code70: string = `import { user } from './user';

  // destructured assignment to name and age
  const {name, age} = user;
  ... //metadata
  providers: [
      {provide: Name, useValue: name},
      {provide: Age, useValue: age},
    ]`;
  code71: string = `import { user } from './user';
  ... //metadata
  providers: [
      {provide: Name, useValue: user.name},
      {provide: Age, useValue: user.age},
    ]`;
  code72: string = `{
    "extends": "../tsconfig.base.json",
    "compilerOptions": {
      "experimentalDecorators": true,
      ...
    },
    "angularCompilerOptions": {
      "fullTemplateTypeCheck": true,
      "preserveWhitespaces": true,
      ...
    }
  }`;
  code73: string = `{
    "compilerOptions": {
      "experimentalDecorators": true,
                ...
    },
    "angularCompilerOptions": {
      "fullTemplateTypeCheck": true,
      "preserveWhitespaces": true,
                ...
    }
  }`;
  code74: string = `@Component({
    selector: 'my-component',
    template: '{{user.contacts.email}}'
  })
  class MyComponent {
    user?: User;
  }`;
  code75: string = `my.component.ts.MyComponent.html(1,1): : Property 'contacts' does not exist on type 'User'. Did you mean 'contact'?`;
  code76: string = `  template:
  '{{ $any(user).contacts.email }}'`;
  code77: string = `   template:
  '{{ $any(this).contacts.email }}'`;
  code78: string = `@Component({
    selector: 'my-component',
    template: '<span *ngIf="user"> {{user.name}} contacted through {{contact!.email}} </span>'
  })
  class MyComponent {
    user?: User;
    contact?: Contact;
  
    setData(user: User, contact: Contact) {
      this.user = user;
      this.contact = contact;
    }
  }`;
  code79: string = `@Component({
    selector: 'my-component',
    template: '<span *ngIf="user"> {{user.contact.email}} </span>'
  })
  class MyComponent {
    user?: User;
  }`;
  code80: string =
    `ng new codelyzer
  ng lint`;
  code81: string = `import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
  @NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule
    ],
    declarations: [ ],
    bootstrap: [ ]
  })
  export class AppModule { }`;
  code82: string = `import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from '@angular/animations';`;
  code83: string = `@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    animations: [
      // animation triggers go here
    ]
  })`;
  code84: string = `state('open', style({
    height: '300px',
    opacity: 0.5,
    backgroundColor: 'blue'
  })),`;
  code85: string = `state('close', style({
    height: '100px',
    opacity: 0.8,
    backgroundColor: 'green'
  })),`;
  code86: string = `import { Component, OnInit, Input } from '@angular/core';
  import { trigger, state, style, animate, transition } from '@angular/animations';
  
  @Component({
  selector: 'app-animate',
  templateUrl: '<div [@changeState]="currentState" class="myblock mx-auto"></div>',
  styleUrls: '.myblock {
      background-color: green;
      width: 300px;
      height: 250px;
      border-radius: 5px;
      margin: 5rem;
      }',
  animations: [
      trigger('changeState', [
      state('state1', style({
          backgroundColor: 'green',
          transform: 'scale(1)'
      })),
      state('state2', style({
          backgroundColor: 'red',
          transform: 'scale(1.5)'
      })),
      transition('*=>state1', animate('300ms')),
      transition('*=>state2', animate('2000ms'))
      ])
  ]
  })
  export class AnimateComponent implements OnInit {
  
      @Input() currentState;
  
      constructor() { }
  
      ngOnInit() {
      }
  }`;
  code87: string = `transition('open => closed', [
    animate('500ms')
  ]),`;
  code88: string = `import { Component, OnInit } from '@angular/core';
  import { DomSanitizer } from '@angular/platform-browser';
  @Component({
     selector: 'my-app',
     template: '
         <div [innerHtml]="htmlSnippet"></div>
     ',
  })
  export class App {
         constructor(protected sanitizer: DomSanitizer) {}
         htmlSnippet: string = this.sanitizer.bypassSecurityTrustScript("<script>safeCode()</script>");
     }`;
  code89: string = `ng new ivy-demo-app --enable-ivy`;
  code90: string = `{
    "compilerOptions": { ... },
    "angularCompilerOptions": {
      "enableIvy": true
    }
  }`;
  code91: string = `npm install --save-dev @angular/language-service`;
  code92: string = `"plugins": [
    {"name": "@angular/language-service"}
]`;
  code93: string = `addEventListener('message', ({ data }) => {
    const response = 'worker response to $\{data\}';
    postMessage(response);
  });`;
  code94: string = `if (typeof Worker !== 'undefined') {
    // Create a new
    const worker = new Worker('./app.worker', { type: 'module' });
    worker.onmessage = ({ data }) => {
      console.log('page got message: $\{data\}');
    };
    worker.postMessage('hello');
  } else {
    // Web Workers are not supported in this environment.
  }`;
  code95: string = `ng generate appShell [options] (or)
  ng g appShell [options]`;
  code96: string = `declarations: [
    YourComponent,
    YourPipe,
    YourDirective
  ],`;
  code97: string = `const BASE_URL = new InjectionToken<string>('BaseUrl');
  const injector =
     Injector.create({providers: [{provide: BASE_URL, useValue: 'http://some-domain.com'}]});
  const url = injector.get(BASE_URL);`;
  code98: string = `ng add @angular/bazel`;
  code99: string = `npm install -g @angular/bazel
  ng new --collection=@angular/bazel`;
  code100: string = `bazel build [targets] // Compile the default output artifacts of the given targets.
  bazel test [targets] // Run the tests with *_test targets found in the pattern.
  bazel run [target]: Compile the program represented by target and then run it.`;
  code101: string = `<input #uname>`;
  code102: string = `@ViewChild('uname') input;

  ngAfterViewInit() {
    console.log(this.input.nativeElement.value);
  }`;
  code103: string = `this.router.events.subscribe((event: Event) => {})`;
  code104: string = `import { Component } from '@angular/core';
  import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
  
  @Component({
      selector: 'app-root',
      template: '<router-outlet></router-outlet>'
  })
  export class AppComponent {
  
      constructor(private router: Router) {
  
          this.router.events.subscribe((event: Event) => {
              if (event instanceof NavigationStart) {
                  // Show loading indicator and perform an action
              }
  
              if (event instanceof NavigationEnd) {
                  // Hide loading indicator and perform an action
              }
  
              if (event instanceof NavigationError) {
                  // Hide loading indicator and perform an action
                  console.log(event.error); // It logs an error for debugging
              }
          });
     }
  }`;
  code105: string = `constructor(private _http: HttpClient) {}
  this._http.get('someUrl',{
     headers: {'header1':'value1','header2':'value2'}
  });
  
  (or)
  let headers = new HttpHeaders().set('header1', headerValue1); // create header object
  headers = headers.append('header2', headerValue2); // add a new header, creating a new object
  headers = headers.append('header3', headerValue3); // add another header
  
  let params = new HttpParams().set('param1', value1); // create params object
  params = params.append('param2', value2); // add a new param, creating a new object
  params = params.append('param3', value3); // add another param
  
  return this._http.get<any[]>('someUrl', { headers: headers, params: params })`;
  code106: string = `{path: ‘user’, loadChildren: ‘./users/user.module#UserModulee’},`;
  code107: string = `{path: ‘user’, loadChildren: () => import(‘./users/user.module’).then(m => m.UserModule)};`;
  code108: string = `const routes: Routes = [
    {
      path: 'customers',
      loadChildren: () => import('./customers/customers.module').then(module => module.CustomersModule)
    },
    {
      path: 'orders',
      loadChildren: () => import('./orders/orders.module').then(module => module.OrdersModule)
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ];`;
  code109: string = `import { NodeJsSyncHost } from '@angular-devkit/core/node';
  import { workspaces } from '@angular-devkit/core';
  
  async function addBuildTargetOption() {
      const host = workspaces.createWorkspaceHost(new NodeJsSyncHost());
      const workspace = await workspaces.readWorkspace('path/to/workspace/directory/', host);
  
      const project = workspace.projects.get('my-app');
      if (!project) {
        throw new Error('my-app does not exist');
      }
  
      const buildTarget = project.targets.get('build');
      if (!buildTarget) {
        throw new Error('build target does not exist');
      }
  
      buildTarget.options.optimization = true;
  
      await workspaces.writeWorkspace(workspace, host);
  }
  
  addBuildTargetOption();`;
  code110: string = `10% building modules 1/1 modules 0 active
  ...INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
  ...INFO [launcher]: Launching browser Chrome ...
  ...INFO [launcher]: Starting browser Chrome
  ...INFO [Chrome ...]: Connected on socket ...
  Chrome ...: Executed 3 of 3 SUCCESS (0.135 secs / 0.205 secs)`;
  code111: string = `npm install -g @angular-devkit/schematics-cli`;
  code112: string = `<div [innerHTML]="htmlSnippet"></div>`;
  code113: string = `export class myComponent {
    htmlSnippet: string = '<b>Hello World</b>, Angular';
  }`;
  code114: string = `<p>Interpolated value:</p>
  <div >{{htmlSnippet}}</div>
  <p>Binding of innerHTML:</p>
  <div [innerHTML]="htmlSnippet"></div>`;
  code115: string = `export class InnerHtmlBindingComponent {
    htmlSnippet = 'Template <script>alert("XSS Attack")</script> <b>Code attached</b>';
  }`;
  code116: string = `import { Injectable } from '@angular/core';
  import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class MyInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Intercept the request here
      // Modify the request or handle it before sending
      return next.handle(request);
    }
  }
  `;
  code117: string = `import { NgModule } from '@angular/core';
  import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
  import { MyInterceptor } from './my-interceptor';
  
  @NgModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
    ]
  })
  export class AppModule { }
  `;
  code118: string = `// Example with multiple interceptors
  @NgModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor1, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor2, multi: true }
    ]
  })
  export class AppModule { }
  `;
  code119: string = `providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyFirstInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MySecondInterceptor, multi: true }
  ],`;
  code120: string = `@Injectable()
  export class MyInterceptor implements HttpInterceptor {
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
  
      return next.handle(req).do(event => {
        if (event instanceof HttpResponse) {
             // Code goes here
        }
      });
  
    }
  }`;
  code121: string = `@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}`;
  code122: string = `<h1 i18n>Hello i18n!</h1>`;
  code123: string = `ng xi18n`;
  code124: string = `<trans-unit id="greetingHeader" datatype="html">
  <source>Hello i18n!</source>
  <target>Hallo i18n !</target>
  <note priority="1" from="description">A welcome header for this sample</note>
  <note priority="1" from="meaning">welcome message</note>
</trans-unit>`;
  code125: string = `<img [src]="example" i18n-title title="Internationlization" />`;
  code126: string = `<span i18n>The person is {residenceStatus, select, citizen {citizen} permanent resident {permanentResident} foreigner {foreigner}}</span>`;
  code127: string = `"configurations": {
    ...
    "de": {
      ...
      "i18nMissingTranslation": "error"
    }
  }`;
  code128: string = `import { MissingTranslationStrategy } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { AppModule } from './app/app.module';
  
  platformBrowserDynamic().bootstrapModule(AppModule, {
    missingTranslation: MissingTranslationStrategy.Error,
    providers: [
      // ...
    ]
  });`;
  code129: string = `"configurations": {
    "de": {
      "aot": true,
      "outputPath": "dist/my-project-de/",
      "baseHref": "/fr/",
      "i18nFile": "src/locale/messages.de.xlf",
      "i18nFormat": "xlf",
      "i18nLocale": "de",
      "i18nMissingTranslation": "error",
    }`;
  code130: string = `constructor(myElement: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }`;
  code131: string = `npm install -g protractor`;
  code132: string = `<div *ngFor="let todo of todos; trackBy: trackByTodos">
  ({{todo.id}}) {{todo.name}}
</div>`;
  code133: string = `trackByTodos(index: number, item: Todo): number { return todo.id; }`;
  code134: string = `<p>The user firstName is: {{user?.fullName.firstName}}</p>`;
  code135: string = `"angularCompilerOptions": {    "enableIvy": true  }`;
  code136: string = `TestBed.get(ChangeDetectorRef) // returns any. It is deprecated now.

  TestBed.inject(ChangeDetectorRef) // returns ChangeDetectorRef`;
  code137: string = `@ViewChild(ChildDirective) child: ChildDirective; // Angular9 usage
  @ViewChild(ChildDirective, { static: false }) child: ChildDirective; //Angular8 usage`;
  code138: string = `<!-- convert title to uppercase, then to lowercase -->
  <p>Title through a pipe chain: {{title | uppercase | lowercase}}</p>`;
  code139: string = `<p>The item name is: {{item?.name}}</p>`;
  code140: string = `<!-- Assert color is defined, even if according to the 'Item' type it could be undefined. -->
  <p>The item's color is: {{item.color!.toUpperCase()}}</p>`;
  code141: string = `<p>The item's undeclared best by date is: {{$any(item).bestByDate}}</p>`;
  code142: string = `interface DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef): void
  }`;
  code143: string = `class AppModule implements DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef) {
      appRef.bootstrap(AppComponent); // bootstrapped entry component need to be passed
    }
  }`;
  code144: string = `ng generate module MyCustomFeature //`;
  code145: string = `import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  
  @NgModule({
    imports: [
      CommonModule
    ],
    declarations: []
  })
  export class MyCustomFeature { }`;
  code146: string = `ng generate service my-service`;
  code147: string = `import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root', //Angular provide the service in root injector
  })
  export class MyService {
  }`;
  code148: string = `import { Injectable } from '@angular/core';
  import { SomeModule } from './some.module';
  
  @Injectable({
    providedIn: SomeModule,
  })
  export class SomeService {
  }`;
  code149: string = `import { NgModule } from '@angular/core';

  import { SomeService } from './some.service';
  
  @NgModule({
    providers: [SomeService],
  })
  export class SomeModule {
  }`;
  code150: string = `import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })
  export class MyService {
  }`;
  code151: string = `@NgModule({
    ...
    providers: [MyService],
    ...
  })`;
  code152: string = `import { CommonModule } from '@angular/common';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { UserComponent } from './user.component';
  import { NewUserDirective } from './new-user.directive';
  import { OrdersPipe } from './orders.pipe';
  
  @NgModule({
   imports:      [ CommonModule ],
   declarations: [ UserComponent, NewUserDirective, OrdersPipe ],
   exports:      [ UserComponent, NewUserDirective, OrdersPipe,
                   CommonModule, FormsModule ]
  })
  export class SharedModule { }`;
  code153: string = `"scripts": {
    "postinstall": "ngcc"
 }`;
  code154: string = `/***************************************************************************************************
  * Zone JS is required by default for Angular itself.
  */
 // import 'zone.js/dist/zone';  // Included with Angular CLI.`;
  code155: string = `platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'})
  .catch(err => console.error(err));`;
  code156: string = `ng generate component my-component --displayBlock`;
  code157: string = `@Component({
    selector: 'app-event-listener',
    template: '
      <button (click)="onClick()">Click</button>
      {{message}}'
  })
  export class EventListenerComponent {
    message = '';
  
    onClick() {
      this.message = 'data updated';
    }
  }`;
  code158: string = `data = 'default value';
  constructor(private httpClient: HttpClient) {}
  
    ngOnInit() {
      this.httpClient.get(this.serverUrl).subscribe(response => {
        this.data = response.data; // change detection will happen automatically
      });
    }`;
  code159: string = `data = 'default value';

  ngOnInit() {
    setTimeout(() => {
      this.data = 'data updated'; // Change detection will happen automatically
    });
  }`;
  code160: string = `data = 'initial value';

  ngOnInit() {
    Promise.resolve(1).then(v => {
      this.data = v; // Change detection will happen automatically
    });
  }`;
  code161: string = `zone.run(() => {
    // outside zone
    expect(zoneThis).toBe(zone);
    setTimeout(function() {
      // the same outside zone exist here
      expect(zoneThis).toBe(zone);
    });
  });`;
  code162: string = `onScheduleTask: function(delegate, curr, target, task) {
    console.log('new task is scheduled:', task.type, task.source);
    return delegate.scheduleTask(target, task);
  }`;
  code163: string = `onInvokeTask: function(delegate, curr, target, task, applyThis, applyArgs) {
    console.log('task will be invoked:', task.type, task.source);
    return delegate.invokeTask(target, task, applyThis, applyArgs);
  }`;
  code164: string = `  onHasTask: function(delegate, curr, target, hasTaskState) {
    console.log('task state changed in the zone:', hasTaskState);
    return delegate.hasTask(target, hasTaskState);
  }`;
  code165: string = `onInvoke: function(delegate, curr, target, callback, applyThis, applyArgs) {
    console.log('the callback will be invoked:', callback);
    return delegate.invoke(target, callback, applyThis, applyArgs);
  }`;
  code166: string = `export class AppComponent implements OnInit {
    constructor(private ngZone: NgZone) {}
    ngOnInit() {
      // use ngZone.run() to make the asynchronous operation in the angular zone
      this.ngZone.run(() => {
        someNewAsyncAPI(() => {
          // update the data of the component
        });
      });
    }
  }`;
  code167: string = `export class AppComponent implements OnInit {
    constructor(private ngZone: NgZone) {}
    ngOnInit() {
      // Use this method when you know no data will be updated
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          // update component data and don't trigger change detection
        });
      });
    }
  }`;
  code168: string = `// disable patching requestAnimationFrame
  (window as any).__Zone_disable_requestAnimationFrame = true;
  
  // disable patching specified eventNames
  (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove'];`;
  code169: string = `/***************************************************************************************************
  * Zone JS is required by default for Angular.
  */
 import './zone-flags';
 import 'zone.js/dist/zone';  // Included with Angular CLI.`;
  code170: string = `content_copy
  @Component({
    selector: 'app-up-down',
    animations: [
      trigger('upDown', [
        state('up', style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        })),
        state('down', style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'green'
        })),
        transition('up => down', [
          animate('1s')
        ]),
        transition('down => up', [
          animate('0.5s')
        ]),
      ]),
    ],
    templateUrl: 'up-down.component.html',
    styleUrls: ['up-down.component.css']
  })
  export class UpDownComponent {
    isUp = true;
  
    toggle() {
      this.isUp = !this.isUp;
    }
  `;
  code171: string = `import { Optional } from '@angular/core';

  constructor(@Optional() private logger?: Logger) {
    if (this.logger) {
      this.logger.log('This is an optional dependency message');
    } else {
      console.log('The logger is not registered');
    }
  }`;
  code172: string = `import { ReactiveFormsModule } from '@angular/forms';

  @NgModule({
    imports: [
      // other imports ...
      ReactiveFormsModule
    ],
  })
  export class AppModule { }`;
  code173: string = `import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'user-profile',
    styleUrls: ['./user-profile.component.css']
  })
  export class UserProfileComponent {
    userName = new FormControl('');
  }`;
  code174: string = `<label>
  User name:
  <input type="text" [formControl]="userName">
</label>`;
  code175: string = `import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'user-profile',
    styleUrls: ['./user-profile.component.css'],
    template: '
      <label>
        User name:
        <input type="text" [formControl]="userName">
      </label>
    '
  })
  export class UserProfileComponent {
    userName = new FormControl('');
  }`;
  code176: string = `   import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import {FormsModule} from '@angular/forms'
  import { RegisterComponent } from './app.component';
  @NgModule({
    declarations: [
      RegisterComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [RegisterComponent]
  })
  export class AppModule { }`;
  code177: string = `<input type="text" class="form-control" id="name"
  required
  [(ngModel)]="model.name" name="name">`;
  code178: string = `<form #registerForm="ngForm">`;
  code179: string = `<label for="name">Name</label>
  <input type="text" class="form-control" id="name"
         required
         [(ngModel)]="model.name" name="name"
         #name="ngModel">
  <div [hidden]="name.valid || name.pristine"
       class="alert alert-danger">
    Please enter your name
  </div>`;
  code180: string = `<form (ngSubmit)="onSubmit()" #heroForm="ngForm">
  // Form goes here
  <button type="submit" class="btn btn-success" [disabled]="!registerForm.form.valid">Submit</button>`;
  code181: string = `<div class="container">
  <h1>Registration Form</h1>
  <form (ngSubmit)="onSubmit()" #registerForm="ngForm">
    <div class="form-group">
      <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
               required
               [(ngModel)]="model.name" name="name"
               #name="ngModel">
        <div [hidden]="name.valid || name.pristine"
             class="alert alert-danger">
          Please enter your name
        </div>
    </div>
    <button type="submit" class="btn btn-success" [disabled]="!registerForm.form.valid">Submit</button>
    </form>
</div>`;
  code182: string = `import { FormGroup, FormControl } from '@angular/forms';

  // Create a FormGroup with multiple form controls
  const myFormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  `;
  code183: string = `import { FormArray, FormControl } from '@angular/forms';

  // Create a FormArray with multiple form controls
  const myFormArray = new FormArray([
    new FormControl(''),
    new FormControl(''),
  ]);
  `;
  code184: string = `import { FormGroup, FormControl, FormArray } from '@angular/forms';

  // Create a FormGroup with nested FormArray
  const myNestedFormGroup = new FormGroup({
    personalInfo: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    }),
    addresses: new FormArray([
      new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
      }),
      new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
      }),
    ]),
  });
  `;
  code185: string = `import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-my-form',
    templateUrl: './my-form.component.html',
    styleUrls: ['./my-form.component.css']
  })
  export class MyFormComponent {
    myForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.myForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: this.fb.group({
          street: [''],
          city: [''],
          zip: ['']
        })
      });
    }
  
    onSubmit() {
      // Handle form submission
      console.log(this.myForm.value);
    }
  }
  `;
  code186: string = `import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-my-form',
    templateUrl: './my-form.component.html',
    styleUrls: ['./my-form.component.css']
  })
  export class MyFormComponent implements OnInit {
    myForm: FormGroup;
  
    ngOnInit() {
      this.myForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        address: new FormGroup({
          street: new FormControl(''),
          city: new FormControl(''),
          zip: new FormControl('')
        })
      });
    }
  
    onSubmit() {
      // Handle form submission
      console.log(this.myForm.value);
    }
  }
  `;
  code187: string = `this.myForm = formBuilder.group({
    firstName: ['value'],
    lastName: ['value', *Some Sync validation function*],
    email: ['value', *Some validation function*, *Some asynchronous validation function*]
});`;
  code188: string = `<input [(ngModel)]="name" [ngModelOptions]="{updateOn: 'blur'}">`;
  code189: string = `name = new FormControl('', {updateOn: 'blur'});`;
  code190: string = `//Other styles for app.component.css
  //...
  :host {
    display: block;
    border: 1px solid black;
    padding: 20px;
  }`;
  code191: string = `/* parent-component.component.css */
  ::ng-deep child-component {
    /* CSS styles to be applied to child component */
  }
  `;
  code192: string = `import {
    bootstrapApplication,
    provideClientHydration,
  } from '@angular/platform-browser';
  
  bootstrapApplication(RootCmp, {
    providers: [provideClientHydration()]
  });`;
  code193: string = `import {provideClientHydration} from '@angular/platform-browser';
  import {NgModule} from '@angular/core';
  ​
  @NgModule({
    declarations: [RootCmp],
    exports: [RootCmp],
    bootstrap: [RootCmp],
    providers: [provideClientHydration()],
  })
  export class AppModule {}`;
  code194: string = `import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
  })
  export class ReactiveFormComponent implements OnInit {
    myForm: FormGroup;
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit() {
      this.myForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      });
    }
  
    onSubmit() {
      console.log(this.myForm.value);
    }
  }
  `;
  code195: string = `import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
  })
  export class ReactiveFormComponent implements OnInit {
    myForm: FormGroup;
  
    constructor() {}
  
    ngOnInit() {
      this.myForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
      });
    }
  
    onSubmit() {
      console.log(this.myForm.value);
    }
  }
  `;
  code196: string = `<!-- template-driven-form.component.html -->
  <form #myForm="ngForm" (ngSubmit)="onSubmit()">
    <input type="text" name="firstName" [(ngModel)]="firstName" required>
    <input type="text" name="lastName" [(ngModel)]="lastName" required>
    <input type="email" name="email" [(ngModel)]="email" required>
    <button type="submit">Submit</button>
  </form>
  `;
  code197: string = `// template-driven-form.component.ts
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-template-driven-form',
    templateUrl: './template-driven-form.component.html',
    styleUrls: ['./template-driven-form.component.css']
  })
  export class TemplateDrivenFormComponent {
    firstName: string;
    lastName: string;
    email: string;
  
    onSubmit() {
      console.log({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      });
    }
  }
  `;
  code198: string = `<!-- template-driven-form.component.html -->
  <form #myForm="ngForm" (ngSubmit)="onSubmit()">
    <input type="text" name="firstName" ngModel required>
    <input type="text" name="lastName" ngModel required>
    <input type="email" name="email" ngModel required>
    <button type="submit">Submit</button>
  </form>
  `;
  code199: string = `// template-driven-form.component.ts
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-template-driven-form',
    templateUrl: './template-driven-form.component.html',
    styleUrls: ['./template-driven-form.component.css']
  })
  export class TemplateDrivenFormComponent {
    onSubmit(formData: any) {
      console.log(formData);
    }
  }
  `;
  code200: string = `// Assuming myForm is a FormGroup with 'firstName' and 'lastName' form controls
  myForm.setValue({ firstName: 'John', lastName: 'Doe' });
  `;
  code201: string = `// Assuming myForm is a FormGroup with 'firstName' and 'lastName' form controls
  myForm.patchValue({ firstName: 'John' });
  `;
  code202: string = `// Example FormGroup initialization
  const userProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.email)
  });
  
  // Using setValue()
  userProfileForm.setValue({
    firstName: 'John',
    lastName: 'Doe', // Required to provide value for all controls
    email: 'john.doe@example.com' // Required to provide value for all controls
  });
  // Error: Cannot set value for 'lastName' because it's missing in the provided object
  
  // Using patchValue()
  userProfileForm.patchValue({
    firstName: 'John',
    email: 'john.doe@example.com'
  });
  // Successfully updates 'firstName' and 'email' without affecting 'lastName'
  `;
  code203: string = `// Assuming myForm is a FormGroup
  myForm.reset(); // Resets the form to its initial state
  `;
  code204: string = `// Custom implementation to clear specific form controls
  clearFormControls() {
    this.myForm.get('firstName').setValue('');
    this.myForm.get('lastName').setValue('');
  }
  `;
  code205: string = `import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
  import { Observable } from 'rxjs';
  import { AuthService } from './auth.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        // Redirect to login page
        return this.router.createUrlTree(['/login']);
      }
    }
  }
  `;
  code206: string = `import { Injectable } from '@angular/core';
  import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
  import { Observable } from 'rxjs';
  import { AuthService } from './auth.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivateChild {
    constructor(private authService: AuthService) {}
  
    canActivateChild(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isLoggedIn();
    }
  }
  `;
  code207: string = `import { Injectable } from '@angular/core';
  import { CanDeactivate } from '@angular/router';
  import { Observable } from 'rxjs';
  import { ComponentWithChanges } from './component-with-changes';
  
  @Injectable({
    providedIn: 'root'
  })
  export class ConfirmDeactivateGuard implements CanDeactivate<ComponentWithChanges> {
    canDeactivate(
      component: ComponentWithChanges): Observable<boolean> | Promise<boolean> | boolean {
      if (component.hasChanges()) {
        return confirm('Are you sure you want to leave?');
      }
      return true;
    }
  }
  `;
  code208: string = `import { Injectable } from '@angular/core';
  import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
  import { Observable } from 'rxjs';
  import { DataService } from './data.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class DataResolver implements Resolve<any> {
    constructor(private dataService: DataService) {}
  
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.dataService.getData();
    }
  }
  `;
  code209: string = `import { Injectable } from '@angular/core';
  import { CanLoad, Route, UrlSegment } from '@angular/router';
  import { Observable } from 'rxjs';
  import { AuthService } from './auth.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class CanLoadModuleGuard implements CanLoad {
    constructor(private authService: AuthService) {}
  
    canLoad(
      route: Route,
      segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isLoggedIn();
    }
  }
  `;
  code210: string = `import { Injectable } from '@angular/core';
  import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
  import { AuthService } from './auth.service';
  import { Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
  `;
  code211: string = `import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './home/home.component';
  import { LoginComponent } from './login/login.component';
  import { AuthGuard } from './auth.guard';
  
  const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    // Other routes...
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  `;
  code212: string = `import { Component, OnInit } from '@angular/core';
  import { Router, NavigationCancel, ActivatedRoute } from '@angular/router';
  
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
    returnUrl: string;
  
    constructor(private route: ActivatedRoute, private router: Router) {}
  
    ngOnInit(): void {
      // Get the return URL from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
  
    login() {
      // Perform login logic...
  
      // If login successful, navigate to returnUrl
      this.router.navigateByUrl(this.returnUrl);
    }
  }
  `;
  code213: string = `<p *ngIf="returnUrl !== '/'">
  <a [routerLink]="['/']">Continue as guest</a>
</p>
`;
  code214: string = `// alert.component.ts
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-alert',
    template: '
      <div class="alert">
        <ng-content></ng-content>
      </div>
    ',
    styleUrls: ['./alert.component.css']
  })
  export class AlertComponent {}
  `;
  code215: string = `/* alert.component.css */
  .alert {
    background-color: #f8d7da;
    color: #721c24;
    padding: 15px;
    border: 1px solid #f5c6cb;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  `;
  code216: string = `// app.component.ts
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '
      <app-alert>
        <strong>Error!</strong> Something went wrong.
      </app-alert>
      <app-alert>
        <strong>Warning!</strong> This action is irreversible.
      </app-alert>
    ',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {}
  `;
  code217: string = 
  `<!-- Rendered HTML -->
  <div class="alert">
    <strong>Error!</strong> Something went wrong.
  </div>
  <div class="alert">
    <strong>Warning!</strong> This action is irreversible.
  </div>
  `;
  code218: string = 
  `@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css'],
    encapsulation: ViewEncapsulation.Emulated
  })
  export class ExampleComponent {}
  `;
  code219: string =
  `@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css'],
    encapsulation: ViewEncapsulation.ShadowDom
  })
  export class ExampleComponent {}
  `;
  code220: string =
  `@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css'],
    encapsulation: ViewEncapsulation.None
  })
  export class ExampleComponent {}
  `;
  code221: string = ``;
  code222: string = ``;
  code223: string = ``;
  code224: string = ``;
  code225: string = ``;
  code226: string = ``;
  code227: string = ``;
  code228: string = ``;
  code229: string = ``;
  code230: string = ``;
  code231: string = ``;
  code232: string = ``;
  code233: string = ``;
  code234: string = ``;
  code235: string = ``;
  code236: string = ``;
  code237: string = ``;
  code238: string = ``;
  code239: string = ``;
  code240: string = ``;

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }
  scroll(id: string, duration: number = 200) {
    const element = document.querySelector(id);
    if (element) {
      const startTime = performance.now();
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = element.getBoundingClientRect().top + startPosition - 50;
      const scrollStep = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);
        if (progress < 1) { window.requestAnimationFrame(scrollStep); }
      };
      window.requestAnimationFrame(scrollStep);
    }
  }


}
