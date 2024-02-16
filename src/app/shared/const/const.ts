import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export const routeConfig = {
    empty: '',
    login: 'login',
    veiled: '**'
}

export const courceRoute = {
    angular: 'angular',
    javascript: 'javascript',
    typescript: 'typescript',
}

export const jsTopics = {

    intro: 'intro',
    manuals: 'manuals',
    code_editors: 'code_editors',
    developer_console: 'developer_console',

    fundamentals: 'fundamentals',
    hello_world: 'hello_world',
    code_structure: 'code_structure',
    modern_mode: 'modern_mode',
    variables: 'variables',
    data_types: 'data_types',
    interaction_alert: 'interaction_alert',
    type_conversions: 'type_conversions',
    basic_operators: 'basic_operators',
    comparisons: 'comparisons',
    conditional_branching: 'conditional_branching',
    logical_operators: 'logical_operators',
    nullish: 'nullish',
    loops: 'loops',
    switch: 'switch',
    functions: 'functions',
    expressions: 'expressions',
    arrow_functions: 'arrow_functions',
    javaScript_specials: 'javaScript_specials',

    code_quality: "code_quality",
    debugging: "debugging",
    comments: "comments",
    automated: "automated",
    coding_style: "coding_style",
    ninja_code: "ninja_code",
    polyfills: "polyfills",

    objects: "objects",
    basics_objects: "basics_objects",
    object_methods: "object_methods",
    symbol_type: "symbol_type",
    object_references: "object_references",
    garbage_collection: "garbage_collection",
    constructor: "constructor",
    optional_chaining: "optional_chaining",
    primitive_conversion: "primitive_conversion",

    primitives_data_types: "primitives_data_types",
    primitives: "primitives",
    numbers: "numbers",
    strings: "strings",
    arrays: "arrays",
    array_methods: "array_methods",
    iterables: "iterables",
    map_and_set: "map_and_set",
    weakmap: "weakmap",
    values_entries: "values_entries",
    destructuring: "destructuring",
    date_and_time: "date_and_time",
    json_methods: "json_methods",

    advanced_working: "advanced_working",
    recursion_and_stack: "recursion_and_stack",
    spread_syntax: "spread_syntax",
    variable_scope: "variable_scope",
    the_old: "the_old",
    global_object: "global_object",
    function_object: "function_object",
    new_function: "new_function",
    scheduling: "scheduling",
    decorators: "decorators",
    function_binding: "function_binding",
    arrow_revisited: "arrow_revisited",

    configuration: "configuration",
    flags_and_descriptors: "flags_and_descriptors",
    getters_and_setters: "getters_and_setters",

    prototypes: "prototypes",
    prototypal: "prototypal",
    prototype: "prototype",
    native_prototypes: "native_prototypes",
    prototype_methods: "prototype_methods",

    classes: "classes",
    basic_syntax: "basic_syntax",
    class_inheritance: "class_inheritance",
    static_properties: "static_properties",
    private_and_protected: "private_and_protected",
    extending_built: "extending_built",
    class_checking: "class_checking",
    mixins: "mixins",

    error_handling: "error_handling",
    try_catch: "try_catch",
    extending_error: "extending_error",

    promises: "promises",
    callbacks: "callbacks",
    promise: "promise",
    promises_chaining: "promises_chaining",
    error_handling_with: "error_handling_with",
    promise_API: "promise_API",
    promisification: "promisification",
    microtasks: "microtasks",
    async_await: "async_await",

    advanced_iteration: "advanced_iteration",
    generators: "generators",
    async_iteration: "async_iteration",

    modules: "modules",
    modules_duction: "modules_duction",
    export_and_import: "export_and_import",
    dynamic_imports: "dynamic_imports",

}

export const JavaScriptContent = {
    heading: "The JavaScript language.",
    description: "avaScript is a high-level, dynamic, interpreted programming language primarily used for front-end web development. It allows developers to add interactivity and dynamic behavior to web pages. JavaScript is commonly used alongside HTML and CSS to create dynamic and interactive user interfaces for websites and web applications. JavaScript code can be embedded directly into HTML documents or referenced externally, and it can manipulate the content and structure of web pages, respond to user actions, and communicate with servers to fetch or send data asynchronously, allowing for the creation of responsive and interactive web applications. Originally created by Brendan Eich at Netscape Communications Corporation in 1995, JavaScript has evolved significantly over the years and is now supported by all major web browsers. It has also expanded beyond front-end development and is now used in server-side development (Node.js), mobile app development (React Native), desktop application development (Electron), and more.",
    route: courceRoute?.javascript,
    list: [{
        list_title: "An Introduction",
        href: jsTopics?.intro,
        sub_list: [
            { sub_title: "Manuals and specifications", href: jsTopics?.manuals },
            { sub_title: "Code editors", href: jsTopics?.code_editors },
            { sub_title: "Developer console", href: jsTopics?.developer_console }
        ]
    },
    {
        list_title: "JavaScript fundamentals",
        href: jsTopics?.fundamentals,
        sub_list: [
            { sub_title: "Hello, world!", href: jsTopics?.hello_world },
            { sub_title: "Code structure", href: jsTopics?.code_structure },
            { sub_title: 'The modern mode, "use strict"', href: jsTopics?.modern_mode },
            { sub_title: "Variables", href: jsTopics?.variables },
            { sub_title: "Data types", href: jsTopics?.data_types },
            { sub_title: "Interaction: alert, prompt, confirm", href: jsTopics?.interaction_alert },
            { sub_title: "Type Conversions", href: jsTopics?.type_conversions },
            { sub_title: "Basic operators, maths", href: jsTopics?.basic_operators },
            { sub_title: "Comparisons", href: jsTopics?.comparisons },
            { sub_title: "Conditional branching: if,'?'", href: jsTopics?.conditional_branching },
            { sub_title: "Logical operators", href: jsTopics?.logical_operators },
            { sub_title: "Nullish coalescing operator '??'", href: jsTopics?.nullish },
            { sub_title: "Loops: while and for", href: jsTopics?.loops },
            { sub_title: 'The "switch" statement', href: jsTopics?.switch },
            { sub_title: "Functions", href: jsTopics?.functions },
            { sub_title: "Function expressions", href: jsTopics?.expressions },
            { sub_title: "Arrow functions, the basics", href: jsTopics?.arrow_functions },
            { sub_title: "JavaScript specials", href: jsTopics?.javaScript_specials },
        ]
    },
    {
        list_title: "Code quality",
        href: jsTopics?.code_quality,
        sub_list: [
            { sub_title: "Debugging in the browser", href: jsTopics?.debugging },
            { sub_title: "Comments", href: jsTopics?.comments },
            { sub_title: 'Automated testing with Mocha', href: jsTopics?.automated },
            { sub_title: "Coding Style", href: jsTopics?.coding_style },
            { sub_title: "Ninja code", href: jsTopics?.ninja_code },
            { sub_title: "Polyfills and transpilers", href: jsTopics?.polyfills }
        ]
    },
    {
        list_title: "Objects: the basics",
        href: jsTopics?.objects,
        sub_list: [
            { sub_title: "Objects", href: jsTopics?.basics_objects },
            { sub_title: 'Object methods, "this"', href: jsTopics?.object_methods },
            { sub_title: 'Symbol type', href: jsTopics?.symbol_type },
            { sub_title: "Object references and copying", href: jsTopics?.object_references },
            { sub_title: "Garbage collection", href: jsTopics?.garbage_collection },
            { sub_title: 'Constructor, operator "new"', href: jsTopics?.constructor },
            { sub_title: "Optional chaining '?.'", href: jsTopics?.optional_chaining },
            { sub_title: "Object to primitive conversion", href: jsTopics?.primitive_conversion }
        ]
    },
    {
        list_title: "Data types",
        href: jsTopics?.primitives_data_types,
        sub_list: [
            { sub_title: "Methods of primitives", href: jsTopics?.primitives },
            { sub_title: 'Numbers', href: jsTopics?.numbers },
            { sub_title: 'Strings', href: jsTopics?.strings },
            { sub_title: "Arrays", href: jsTopics?.arrays },
            { sub_title: "Array methods", href: jsTopics?.array_methods },
            { sub_title: 'Iterables', href: jsTopics?.iterables },
            { sub_title: "Map and Set", href: jsTopics?.map_and_set },
            { sub_title: "WeakMap and WeakSet", href: jsTopics?.weakmap },
            { sub_title: "Object.keys, values, entries", href: jsTopics?.values_entries },
            { sub_title: "Destructuring assignment", href: jsTopics?.destructuring },
            { sub_title: "Date and time", href: jsTopics?.date_and_time },
            { sub_title: "JSON methods, toJSON", href: jsTopics?.json_methods },
        ]
    },
    {
        list_title: "Advanced working with functions",
        href: jsTopics?.advanced_working,
        sub_list: [
            { sub_title: "Recursion and stack", href: jsTopics?.recursion_and_stack },
            { sub_title: 'Rest parameters and spread syntax', href: jsTopics?.spread_syntax },
            { sub_title: 'Variable scope, closure', href: jsTopics?.variable_scope },
            { sub_title: 'The old "var"', href: jsTopics?.the_old },
            { sub_title: "Global object", href: jsTopics?.global_object },
            { sub_title: 'Function object, NFE', href: jsTopics?.function_object },
            { sub_title: "The 'new Function' syntax", href: jsTopics?.new_function },
            { sub_title: "Scheduling: setTimeout and setInterval", href: jsTopics?.scheduling },
            { sub_title: "Decorators and forwarding, call/apply", href: jsTopics?.decorators },
            { sub_title: "Function binding", href: jsTopics?.function_binding },
            { sub_title: "Arrow functions revisited", href: jsTopics?.arrow_revisited }
        ]
    },
    {
        list_title: "Object properties configuration",
        href: jsTopics?.configuration,
        sub_list: [
            { sub_title: "Property flags and descriptors", href: jsTopics?.flags_and_descriptors },
            { sub_title: 'Property getters and setters', href: jsTopics?.getters_and_setters }
        ]
    },
    {
        list_title: "Prototypes, inheritance",
        href: jsTopics?.prototypes,
        sub_list: [
            { sub_title: "Prototypal inheritance", href: jsTopics?.prototypal },
            { sub_title: 'Native prototypes', href: jsTopics?.native_prototypes },
            { sub_title: 'Prototype methods, objects without __proto__', href: jsTopics?.prototype_methods },
        ]
    },
    {
        list_title: "Classes",
        href: jsTopics?.classes,
        sub_list: [
            { sub_title: "Class basic syntax", href: jsTopics?.basic_syntax },
            { sub_title: 'Class inheritance', href: jsTopics?.class_inheritance },
            { sub_title: 'Static properties and methods', href: jsTopics?.static_properties },
            { sub_title: 'Private and protected properties and methods', href: jsTopics?.private_and_protected },
            { sub_title: 'Extending built-in ', href: jsTopics?.extending_built },
            { sub_title: 'Class checking: "instanceof"', href: jsTopics?.class_checking },
            { sub_title: 'Mixins"', href: jsTopics?.mixins },
        ]
    },
    {
        list_title: "Error handling",
        href: jsTopics?.error_handling,
        sub_list: [
            { sub_title: 'Error handling, "try...catch"', href: jsTopics?.try_catch },
            { sub_title: "Custom errors, extending Error", href: jsTopics?.extending_error }
        ]
    },
    {
        list_title: "Promises, async/await",
        href: jsTopics?.promises,
        sub_list: [
            { sub_title: "duction: callbacks", href: jsTopics?.callbacks },
            { sub_title: "Promise", href: jsTopics?.promise },
            { sub_title: "Promises chaining", href: jsTopics?.promises_chaining },
            { sub_title: "Error handling with ", href: jsTopics?.error_handling_with },
            { sub_title: "Promise API", href: jsTopics?.promise_API },
            { sub_title: "Promisification", href: jsTopics?.promisification },
            { sub_title: "Microtasks", href: jsTopics?.microtasks },
            { sub_title: "Async/await", href: jsTopics?.async_await }
        ]
    },
    {
        list_title: "Generators, advanced iteration",
        href: jsTopics?.advanced_iteration,
        sub_list: [
            { sub_title: "Generators", href: jsTopics?.generators },
            { sub_title: "Async iteration and generators", href: jsTopics?.async_iteration }
        ]
    },
    {
        list_title: "Modules",
        href: jsTopics?.modules,
        sub_list: [
            { sub_title: "Modules, duction", href: jsTopics?.modules_duction },
            { sub_title: "Export and Import", href: jsTopics?.export_and_import },
            { sub_title: "Dynamic imports", href: jsTopics?.dynamic_imports }
        ]
    },
    ]
}

export const ngTopics = {
    ngintro: 'ngintro',
    features_of_angular: "features_of_angular",

    angular_cli: "angular_cli",
    new_angular_project: "new_angular_project",
    generating_components: "generating_components",
    development_server: "development_server",
    production_builds: "production_builds",

    module: "module",
    ngmodule: "ngmodule",
    imports: "imports",
    declarations: "declarations",
    exports: "exports",
    providers: "providers",
    bootstrap: "bootstrap",
    lazy_loading: "lazy_loading",

    components: "components",
    component_class: "component_class",
    template: "template",
    component_metadata: "component_metadata",
    lifecycle_hooks: "lifecycle_hooks",
    component_communication: "component_communication",
    component_styling: "component_styling",
    component_interaction: "component_interaction",
    component_routing: "component_routing",

    directives: "directives",
    component_directives: "component_directives",
    attribute_directives: "attribute_directives",
    structural_directives: "structural_directives",

    data_binding: "data_binding",
    interpolation: "interpolation",
    property_binding: "property_binding",
    event_binding: "event_binding",
    two_way_binding: "two_way_binding",

    forms: "forms",
    td_forms: "td_forms",
    reactive_forms: "reactive_forms",
    formcontrol: "formcontrol",
    formgroup: "formgroup",
    formarray: "formarray",
    form_submission: "form_submission",
    dynamic_fc_manipulation: "dynamic_fc_manipulation",
    f_validation: "f_validation",
    f_builder: "f_builder",

    dependency_injection: "dependency_injection",
    service_registration: "service_registration",
    injector: "injector",
    di_in_components: "di_in_components",
    di_into_services: "di_into_services",
    provider_configuration: "provider_configuration",
    injection_tokens: "injection_tokens",

    services: "services",
    creating_a_service: "creating_a_service",
    injecting_a_service: "injecting_a_service",
    singleton_scope: "singleton_scope",
    providing_services: "providing_services",
    service_dependencies: "service_dependencies",

    routing: "routing",
    router_module: "router_module",
    router_outlet: "router_outlet",
    route_config: "route_config",
    traditional_routing: "traditional_routing",
    path_based_routing: "path_based_routing",
    lazy_loaded: "lazy_loaded",
    navigation: "navigation",
    route_parameters: "route_parameters",
    nested_routes: "nested_routes",
    route_guards: "route_guards",

    state_management: "state_management",
    input_output: "input_output",
    stm_services: "stm_services",
    rxJS_and_observables: "rxJS_and_observables",
    ngrx: "ngrx",
    other_s_management_libraries: "other_s_management_libraries",

    rxJs_basic: "rxJs_basic",
    observables: "observables",
    interval: "interval",
    timer: "timer",
    from: "from",
    of: "of",
    fromevent: "fromevent",
    ajax: "ajax",
    empty: "empty",
    never: "never",
    throw: "throw",
    operators: "operators",
    subscription: "subscription",
    subjects: "subjects",
    behaviorsubject: "behaviorsubject",
    replaysubject: "replaysubject",
    asyncsubject: "asyncsubject",
    schedulers: "schedulers",
    error_handling: "error_handling",
    hot_vs_cold: "hot_vs_cold",
    higher_order: "higher_order",
    async_pipe: "async_pipe",
    multiple_streams: "multiple_streams",
    caching_and_memoization: "caching_and_memoization",
    testing: "testing",
    backpressure: "backpressure",
    custom_operators: "custom_operators",
    time_based_operators: "time_based_operators",
    multicasting_and_connectable: "multicasting_and_connectable",
    customizing_observable_creation: "customizing_observable_creation",
    immutable_data_handling: "immutable_data_handling",
    advanced_techniques: "advanced_techniques",

    http_and_apis: "http_and_apis",
    httpclient: "httpclient",
    http_methods: "http_methods",
    http_requests: "http_requests",
    handling_responses: "handling_responses",
    response_types: "response_types",
    headers_and_query_parameters: "headers_and_query_parameters",
    http_error_handling: "http_error_handling",
    authentication: "authentication",
    interceptors: "interceptors",
    mocking_http_requests: "mocking_http_requests",

    localization: "localization",
    internationalization: "internationalization",
    translation_files: "translation_files",
    markup_translation: "markup_translation",
    translation_process: "translation_process",
    localization_config: "localization_config",
    dynamic_localization: "dynamic_localization",
    translate_service: "translate_service",
    language_switching: "language_switching",
    pluralization_selectors: "pluralization_selectors",

    angular_ssr: "angular_ssr",
    ssr: "ssr",
    angular_universal: "angular_universal",
    prerequisites: "prerequisites",
    setup_and_config: "setup_and_config",
    rendering_process: "rendering_process",
    data_transfer: "data_transfer",
    ssr_lifecycle_hooks: "ssr_lifecycle_hooks",
    deployment: "deployment",
    universal_with_cli: "universal_with_cli",

    testing_module: "testing_module",
    testing_frameworks: "testing_frameworks",
    test_bed: "test_bed",
    unit_testing: "unit_testing",
    component_testing: "component_testing",
    mocking_dependencies: "mocking_dependencies",
    integration_testing: "integration_testing",
    test_mocking_http_requests: "test_mocking_http_requests",
    e2e_testing: "e2e_testing",
    test_coverage: "test_coverage",
    continuous_integration: "continuous_integration",

    performance_optimization: "performance_optimization",
    change_detection: "change_detection",
    performance_lazy_loading: "performance_lazy_loading",
    aot_compilation: "aot_compilation",
    code_minification: "code_minification",
    optimizing_images: "optimizing_images",
    caching_and_http_optimization: "caching_and_http_optimization",
    performance_profiling: "performance_profiling",
    optimizing_router: "optimizing_router",
    memory_management: "memory_management",
    third_party_libraries: "third_party_libraries",

    deployment_module: "deployment_module",
    buildling_the_application: "buildling_the_application",
    choose_a_hosting: "choose_a_hosting",
    server_config: "server_config",
    static_file_deployment: "static_file_deployment",
    domain_and_dns_config: "domain_and_dns_config",
    ssl_sertificates: "ssl_sertificates",
    continuous_integration_dp: "continuous_integration_dp",
    testing_and_verification: "testing_and_verification",
    monitoring_and_maintenance: "monitoring_and_maintenance",

    angular_animation: "angular_animation",
    animation_module: "animation_module",
    animation_trigger: "animation_trigger",
    states_and_transitions: "states_and_transitions",
    keyframes_and_styles: "keyframes_and_styles",
    animation_functions: "animation_functions",
    triggering_animations: "triggering_animations",
    animation_metadata: "animation_metadata",
    grouping_and_sequencing: "grouping_and_sequencing",
    dynamic_animations: "dynamic_animations",
    integration_with_angular_directives: "integration_with_angular_directives",
}

export const AngularContent = {
    heading: "The comprehensive framework of JavaScript (Angular).",
    description: "Angular is a comprehensive front-end web application framework developed and maintained by Google. It enables developers to build dynamic, single-page applications (SPAs) using a component-based architecture. Angular offers features such as two-way data binding, dependency injection, routing, and form handling. It promotes code organization and reusability, making it suitable for projects of all sizes. With built-in tools for managing state, handling HTTP requests, and implementing reactive programming using RxJS, Angular provides a powerful toolkit for creating modern and maintainable web applications.",
    route: courceRoute?.angular,
    list: [{
        list_title: "Introduction to Angular",
        href: ngTopics?.ngintro,
        sub_list: [
            { sub_title: "Advantages and key features of Angular", href: ngTopics?.features_of_angular },
        ]
    },
    {
        list_title: "Angular CLI",
        href: ngTopics?.angular_cli,
        sub_list: [
            { sub_title: "Creating a new Angular project", href: ngTopics?.new_angular_project },
            { sub_title: "Generating Components, services, modules, pipes, etc.", href: ngTopics?.generating_components },
            { sub_title: 'Development server and live reloading', href: ngTopics?.development_server },
            { sub_title: "Production builds and optimizations", href: ngTopics?.production_builds },
        ]
    },
    {
        list_title: "Module",
        href: ngTopics?.module,
        sub_list: [
            { sub_title: "NgModule Decorator", href: ngTopics?.ngmodule },
            { sub_title: "Imports", href: ngTopics?.imports },
            { sub_title: 'Declarations', href: ngTopics?.declarations },
            { sub_title: "Exports", href: ngTopics?.exports },
            { sub_title: "Providers", href: ngTopics?.providers },
            { sub_title: "Bootstrap", href: ngTopics?.bootstrap },
            { sub_title: "Lazy Loading", href: ngTopics?.lazy_loading }
        ]
    },
    {
        list_title: "Components",
        href: ngTopics?.components,
        sub_list: [
            { sub_title: "Component Class", href: ngTopics?.component_class },
            { sub_title: 'Template', href: ngTopics?.template },
            { sub_title: 'Component Metadata', href: ngTopics?.component_metadata },
            { sub_title: "Lifecycle Hooks", href: ngTopics?.lifecycle_hooks },
            { sub_title: "Component Communication", href: ngTopics?.component_communication },
            { sub_title: 'Component Styling', href: ngTopics?.component_styling },
            { sub_title: "Component Interaction", href: ngTopics?.component_interaction },
            { sub_title: "Component Routing", href: ngTopics?.component_routing }
        ]
    },
    {
        list_title: "Directives",
        href: ngTopics?.directives,
        sub_list: [
            { sub_title: "Component Directives", href: ngTopics?.component_directives },
            { sub_title: 'Attribute Directives', href: ngTopics?.attribute_directives },
            { sub_title: 'Structural Directives', href: ngTopics?.structural_directives }
        ]
    },
    {
        list_title: "Data Binding",
        href: ngTopics?.data_binding,
        sub_list: [
            { sub_title: "Interpolation", href: ngTopics?.interpolation },
            { sub_title: 'Property Binding', href: ngTopics?.property_binding },
            { sub_title: 'Event Binding', href: ngTopics?.event_binding },
            { sub_title: 'Two-Way Binding', href: ngTopics?.two_way_binding }
        ]
    },
    {
        list_title: "Forms",
        href: ngTopics?.forms,
        sub_list: [
            { sub_title: "Template-driven Forms", href: ngTopics?.td_forms },
            { sub_title: 'Reactive Forms', href: ngTopics?.reactive_forms },
            { sub_title: 'FormControl', href: ngTopics?.formcontrol },
            { sub_title: 'FormGroup', href: ngTopics?.formgroup },
            { sub_title: 'FormArray', href: ngTopics?.formarray },
            { sub_title: 'Form Submission', href: ngTopics?.form_submission },
            { sub_title: 'Dynamic Form Control Manipulation', href: ngTopics?.dynamic_fc_manipulation },
            { sub_title: 'Form Validation', href: ngTopics?.f_validation },
            { sub_title: 'Form Builder', href: ngTopics?.f_builder }
        ]
    },
    {
        list_title: "Dependency Injection",
        href: ngTopics?.dependency_injection,
        sub_list: [
            { sub_title: "Service Registration", href: ngTopics?.service_registration },
            { sub_title: 'Injector', href: ngTopics?.injector },
            { sub_title: 'Dependency Injection in Components', href: ngTopics?.di_in_components },
            { sub_title: 'Injecting Dependencies into Services', href: ngTopics?.di_into_services },
            { sub_title: 'Provider Configuration', href: ngTopics?.provider_configuration },
            { sub_title: 'Injection Tokens', href: ngTopics?.injection_tokens }
        ]
    },
    {
        list_title: "Services",
        href: ngTopics?.services,
        sub_list: [
            { sub_title: "Creating a Service", href: ngTopics?.creating_a_service },
            { sub_title: 'Injecting a Service', href: ngTopics?.injecting_a_service },
            { sub_title: 'Singleton Scope', href: ngTopics?.singleton_scope },
            { sub_title: 'Providing Services', href: ngTopics?.providing_services },
            { sub_title: 'Service Dependencies', href: ngTopics?.service_dependencies }
        ]
    },
    {
        list_title: "Routing",
        href: ngTopics?.routing,
        sub_list: [
            { sub_title: 'Router Module Setup', href: ngTopics?.router_module },
            { sub_title: "Router Outlet", href: ngTopics?.router_outlet },
            { sub_title: "Route Configuration", href: ngTopics?.route_config },
            { sub_title: "Traditional Routing", href: ngTopics?.traditional_routing },
            { sub_title: "Path-based Routing", href: ngTopics?.path_based_routing },
            { sub_title: "Lazy Loading", href: ngTopics?.lazy_loaded },
            { sub_title: "Navigation", href: ngTopics?.navigation },
            { sub_title: "Route Parameters", href: ngTopics?.route_parameters },
            { sub_title: "Nested Routes", href: ngTopics?.nested_routes },
            { sub_title: "Route Guards", href: ngTopics?.route_guards }
        ]
    },
    {
        list_title: "State Management",
        href: ngTopics?.state_management,
        sub_list: [
            { sub_title: "Component Input/Output", href: ngTopics?.input_output },
            { sub_title: "Services", href: ngTopics?.stm_services },
            { sub_title: "RxJS and Observables", href: ngTopics?.rxJS_and_observables },
            { sub_title: "NgRx", href: ngTopics?.ngrx },
            { sub_title: "Other State Management Libraries", href: ngTopics?.other_s_management_libraries }
        ]
    },
    {
        list_title: "RxJs  Basic",
        href: ngTopics?.rxJs_basic,
        sub_list: [
            { sub_title: "Observables", href: ngTopics?.observables },
            { sub_title: "Interval", href: ngTopics?.interval },
            { sub_title: "Timer", href: ngTopics?.timer },
            { sub_title: "From", href: ngTopics?.from },
            { sub_title: "Of", href: ngTopics?.of },
            { sub_title: "FromEvent", href: ngTopics?.fromevent },
            { sub_title: "Ajax", href: ngTopics?.ajax },
            { sub_title: "Empty", href: ngTopics?.empty },
            { sub_title: "Never", href: ngTopics?.never },
            { sub_title: "Throw", href: ngTopics?.throw },
            { sub_title: "Operators", href: ngTopics?.operators },
            { sub_title: "Subscription Management", href: ngTopics?.subscription },
            { sub_title: "Subjects", href: ngTopics?.subjects },
            { sub_title: "BehaviorSubject", href: ngTopics?.behaviorsubject },
            { sub_title: "ReplaySubject", href: ngTopics?.replaysubject },
            { sub_title: "AsyncSubject", href: ngTopics?.asyncsubject },
            { sub_title: "Schedulers", href: ngTopics?.schedulers },
            { sub_title: "Error Handling", href: ngTopics?.error_handling },
            { sub_title: "Hot vs Cold Observables", href: ngTopics?.hot_vs_cold },
            { sub_title: "Higher-Order Observables", href: ngTopics?.higher_order },
            { sub_title: "Async Pipe", href: ngTopics?.async_pipe },
            { sub_title: "Handling Multiple Streams", href: ngTopics?.multiple_streams },
            { sub_title: "Caching and Memoization", href: ngTopics?.caching_and_memoization },
            { sub_title: "Testing", href: ngTopics?.testing },
            { sub_title: "Backpressure", href: ngTopics?.backpressure },
            { sub_title: "Custom Operators", href: ngTopics?.custom_operators },
            { sub_title: "Time-based Operators", href: ngTopics?.time_based_operators },
            { sub_title: "Multicasting and Connectable Observables", href: ngTopics?.multicasting_and_connectable },
            { sub_title: "Customizing Observable Creation", href: ngTopics?.customizing_observable_creation },
            { sub_title: "Immutable Data Handling", href: ngTopics?.immutable_data_handling },
            { sub_title: "Advanced Error Handling Techniques", href: ngTopics?.advanced_techniques }

        ]
    },
    {
        list_title: "HTTP and APIs",
        href: ngTopics?.http_and_apis,
        sub_list: [
            { sub_title: "Importing HttpClient", href: ngTopics?.httpclient },
            { sub_title: "HTTP Methods", href: ngTopics?.http_methods },
            { sub_title: "Making HTTP Requests", href: ngTopics?.http_requests },
            { sub_title: "Handling Responses", href: ngTopics?.handling_responses },
            { sub_title: "Response Types", href: ngTopics?.response_types },
            { sub_title: "Headers and Query Parameters", href: ngTopics?.headers_and_query_parameters },
            { sub_title: "Error Handling", href: ngTopics?.http_error_handling },
            { sub_title: "Authentication", href: ngTopics?.authentication },
            { sub_title: "Interceptors", href: ngTopics?.interceptors },
            { sub_title: "Mocking HTTP Requests", href: ngTopics?.mocking_http_requests },
        ]
    },
    {
        list_title: "(i18n) and Localization",
        href: ngTopics?.localization,
        sub_list: [
            { sub_title: "Internationalization (i18n)", href: ngTopics?.internationalization },
            { sub_title: "Translation Files", href: ngTopics?.translation_files },
            { sub_title: "Markup Translation", href: ngTopics?.markup_translation },
            { sub_title: "Translation Process", href: ngTopics?.translation_process },
            { sub_title: "Localization Configuration", href: ngTopics?.localization_config },
            { sub_title: "Dynamic Localization", href: ngTopics?.dynamic_localization },
            { sub_title: "TranslateService", href: ngTopics?.translate_service },
            { sub_title: "Language Switching", href: ngTopics?.language_switching },
            { sub_title: "Pluralization and Selectors", href: ngTopics?.pluralization_selectors }
        ]
    },
    {
        list_title: "SSR (Angular Universal)",
        href: ngTopics?.angular_ssr,
        sub_list: [
            { sub_title: "Server-Side Rendering (SSR)", href: ngTopics?.ssr },
            { sub_title: "Angular Universal", href: ngTopics?.angular_universal },
            { sub_title: "Prerequisites", href: ngTopics?.prerequisites },
            { sub_title: "Setup and Configuration", href: ngTopics?.setup_and_config },
            { sub_title: "Rendering Process", href: ngTopics?.rendering_process },
            { sub_title: "Data Transfer", href: ngTopics?.data_transfer },
            { sub_title: "Lifecycle Hooks", href: ngTopics?.ssr_lifecycle_hooks },
            { sub_title: "Deployment", href: ngTopics?.deployment },
            { sub_title: "Angular Universal with Angular CLI", href: ngTopics?.universal_with_cli }
        ]
    },
    {
        list_title: "Testing",
        href: ngTopics?.testing_module,
        sub_list: [
            { sub_title: "Testing Frameworks", href: ngTopics?.testing_frameworks },
            { sub_title: "Test Bed", href: ngTopics?.test_bed },
            { sub_title: "Unit Testing", href: ngTopics?.unit_testing },
            { sub_title: "Component Testing", href: ngTopics?.component_testing },
            { sub_title: "Mocking Dependencies", href: ngTopics?.mocking_dependencies },
            { sub_title: "Integration Testing", href: ngTopics?.integration_testing },
            { sub_title: "Mocking HTTP Requests", href: ngTopics?.test_mocking_http_requests },
            { sub_title: "E2E Testing", href: ngTopics?.e2e_testing },
            { sub_title: "Test Coverage", href: ngTopics?.test_coverage },
            { sub_title: "Continuous Integration", href: ngTopics?.continuous_integration }
        ]
    },
    {
        list_title: "Performance Optimization",
        href: ngTopics?.performance_optimization,
        sub_list: [
            { sub_title: "Change Detection Optimization", href: ngTopics?.change_detection },
            { sub_title: "Lazy Loading", href: ngTopics?.performance_lazy_loading },
            { sub_title: "AOT Compilation", href: ngTopics?.aot_compilation },
            { sub_title: "Code Minification and Bundling", href: ngTopics?.code_minification },
            { sub_title: "Optimizing Images", href: ngTopics?.optimizing_images },
            { sub_title: "Caching and HTTP Optimization", href: ngTopics?.caching_and_http_optimization },
            { sub_title: "Performance Profiling", href: ngTopics?.performance_profiling },
            { sub_title: "Optimizing Angular Router", href: ngTopics?.optimizing_router },
            { sub_title: "Memory Management", href: ngTopics?.memory_management },
            { sub_title: "Third-Party Libraries", href: ngTopics?.third_party_libraries }
        ]
    },
    {
        list_title: "Deployment",
        href: ngTopics?.deployment_module,
        sub_list: [
            { sub_title: "Build the Application", href: ngTopics?.buildling_the_application },
            { sub_title: "Choose a Hosting Environment", href: ngTopics?.choose_a_hosting },
            { sub_title: "Server Configuration", href: ngTopics?.server_config },
            { sub_title: "Static File Deployment", href: ngTopics?.static_file_deployment },
            { sub_title: "Domain and DNS Configuration", href: ngTopics?.domain_and_dns_config },
            { sub_title: "HTTPS and SSL Certificates", href: ngTopics?.ssl_sertificates },
            { sub_title: "Continuous Integration and Deployment (CI/CD)", href: ngTopics?.continuous_integration_dp },
            { sub_title: "Testing and Verification", href: ngTopics?.testing_and_verification },
            { sub_title: "Monitoring and Maintenance", href: ngTopics?.monitoring_and_maintenance }
        ]
    },
    {
        list_title: "Angular Animation",
        href: ngTopics?.angular_animation,
        sub_list: [
            { sub_title: "Animation Module", href: ngTopics?.animation_module },
            { sub_title: "Animation Trigger", href: ngTopics?.animation_trigger },
            { sub_title: "States and Transitions", href: ngTopics?.states_and_transitions },
            { sub_title: "Keyframes and Styles", href: ngTopics?.keyframes_and_styles },
            { sub_title: "Animation Functions", href: ngTopics?.animation_functions },
            { sub_title: "Triggering Animations", href: ngTopics?.triggering_animations },
            { sub_title: "Animation Metadata", href: ngTopics?.animation_metadata },
            { sub_title: "Grouping and Sequencing", href: ngTopics?.grouping_and_sequencing },
            { sub_title: "Dynamic Animations", href: ngTopics?.dynamic_animations },
            { sub_title: "Integration with Angular Directives", href: ngTopics?.integration_with_angular_directives }
        ]
    },
    ]
}

export const tsTopics = {

    tsintro: 'tsintro',
    installing_typeScript: "installing_typeScript",
    variables: "variables",

    data_types: "data_types",

    functions: "functions",
    declarations: "declarations",
    arrow_functions: "arrow_functions",
    parameters: "parameters",
    rest_parameters: "rest_parameters",
    tofixed_function: "tofixed_function",
    tolocalestring_function: "tolocalestring_function",
    toprecision_function: "toprecision_function",

    interfaces: "interfaces",
    object_shape: "object_shape",
    optional_properties: "optional_properties",
    readonly_properties: "readonly_properties",
    extending_interfaces: "extending_interfaces",
    interface_vs_type_alias: "interface_vs_type_alias",

    classes: "classes",
    constructors: "constructors",
    properties: "properties",
    methods: "methods",
    inheritance: "inheritance",
    access_modifiers: "access_modifiers",

    generics: "generics",
    generic_functions: "generic_functions",
    generic_classes: "generic_classes",
    generic_constraints: "generic_constraints",
    type_inference_with_generics: "type_inference_with_generics",
    generic_utilities: "generic_utilities",

    enums: "enums",
    numeric_enums: "numeric_enums",
    string_enums: "string_enums",
    computed_and_constant_members: "computed_and_constant_members",
    reverse_mapping: "reverse_mapping",

    modules: "modules",
    module_basics: "module_basics",
    export_and_import: "export_and_import",
    default_exports: "default_exports",
    namespace_imports: "namespace_imports",
    re_exporting: "re_exporting",

    namespaces: "namespaces",
    namespaces_in_typeScript: "namespaces_in_typeScript",
    nested_namespaces: "nested_namespaces",
    declaring_ambient_modules: "declaring_ambient_modules",
    merging_namespaces: "merging_namespaces",

    decorators: "decorators",
    introduction_to_decorators: "introduction_to_decorators",
    class_decorators: "class_decorators",
    method_decorators: "method_decorators",
    property_decorators: "property_decorators",
    parameter_decorators: "parameter_decorators",
    decorator_factories: "decorator_factories",

    mixins: "mixins",
    mixins_in_typeScript: "mixins_in_typeScript",
    composition_over_inheritance: "composition_over_inheritance",

    type_inference: "type_inference",
    contextual_typing: "contextual_typing",
    best_common_type: "best_common_type",
    type_widening_and_narrowing: "type_widening_and_narrowing",
    definite_assignment_assertions: "definite_assignment_assertions",

    type_guards: "type_guards",
    typeof_type_guards: "typeof_type_guards",
    instanceof_type_guards: "instanceof_type_guards",
    user_defined_type_guards: "user_defined_type_guards",

    union_and_intersection_types: "union_and_intersection_types",
    union_types: "union_types",
    intersection_types: "intersection_types",
    discriminated_unions: "discriminated_unions",

    advanced_types: "advanced_types",
    conditional_types: "conditional_types",
    mapped_types: "mapped_types",
    index_types: "index_types",
    tuple_types: "tuple_types",
    keyof: "keyof",
    typeof: "typeof",
    infer_type: "infer_type",
    partial_type: "partial_type",
    required_type: "required_type",
    extract_type: "extract_type",
    exclude_type: "exclude_type",
    duck_typing: "duck_typing",

    utility_type: "utility_type",
    ut_partial_type: "ut_partial_type",
    record_type: "record_type",
    awaited_type: "awaited_type",
    ut_required_type: "ut_required_type",
    omit_type: "omit_type",
    pick_type: "pick_type",
    ut_extract_type: "ut_extract_type",
    capitalize_type: "capitalize_type",
    lowercase_type: "lowercase_type",
    constructorParameters_type: "constructorParameters_type",
    returntype: "returntype",
    creating_types: "creating_types",
    ut_exclude_type: "ut_exclude_type",
    uncapitalize_type: "uncapitalize_type",

    oo_programming: "oo_programming",
    classes_objects: "classes_objects",
    standalone_objects: "standalone_objects",
    oo_constructors: "oo_constructors",
    property_modifiers: "property_modifiers",
    oo_access_modifiers: "oo_access_modifiers",
    parameter_properties: "parameter_properties",
    getters_setters: "getters_setters",
    static_methods: "static_methods",
    index_signatures: "index_signatures",
    oo_inheritance: "oo_inheritance",
    composition: "composition",
    oo_interfaces: "oo_interfaces",

    methods_m: "methods_m",
    valueOf_method: "valueOf_method",
    tostring_method: "tostring_method",
    toexponential_method: "toexponential_method",
    method_overriding: "method_overriding",
    array_methods: "array_methods",
    string_methods: "string_methods",
    object_methods: "object_methods",

    advance: "advance",
    generic_object_types: "generic_object_types",
    call_signatures: "call_signatures",
    declaring_this_in_function: "declaring_this_in_function",
    constraints: "constraints",
    construct_signatures: "construct_signatures",
    generic_parameter_defaults: "generic_parameter_defaults",
    unknown_function: "unknown_function",
    non_null_assertion: "non_null_assertion",
    object_type_optional: "object_type_optional",
    strictnullchecks_on_type: "strictnullchecks_on_type",
    strictnullchecks_off_type: "strictnullchecks_off_type",
    accessor: "accessor",
    ambients_declaration: "ambients_declaration",
    exhaustiveness_checking: "exhaustiveness_checking",
    writing_good_overloads: "writing_good_overloads",
    aliases_type: "aliases_type",
    specifying_type_arguments: "specifying_type_arguments",
    literal_inference_type: "literal_inference_type",
    interfaces_type: "interfaces_type",
    return_type_void: "return_type_void",
}

export const TypescriptContent = {
    heading: "The superset of JavaScript (Typescript).",
    description: "TypeScript is a superset of JavaScript that adds optional static typing and other features to the language. Developed and maintained by Microsoft, TypeScript aims to enhance the development experience by providing developers with tools for building large-scale applications more effectively.",
    route: courceRoute?.typescript,
    list: [{
        list_title: "Basics of TypeScript",
        href: tsTopics?.tsintro,
        sub_list: [
            { sub_title: "Installing TypeScript", href: tsTopics?.installing_typeScript },
            { sub_title: "Variables", href: tsTopics?.variables },
        ]
    },
    {
        list_title: "Data types",
        href: tsTopics?.data_types,
        sub_list: []
    },
    {
        list_title: "Functions",
        href: tsTopics?.functions,
        sub_list: [
            { sub_title: "Function declarations", href: tsTopics?.declarations },
            { sub_title: "Arrow functions", href: tsTopics?.arrow_functions },
            { sub_title: 'Optional and default parameters', href: tsTopics?.parameters },
            { sub_title: "Rest parameters", href: tsTopics?.rest_parameters },
            { sub_title: "toFixed() Function", href: tsTopics?.tofixed_function },
            { sub_title: "toLocaleString() Function", href: tsTopics?.tolocalestring_function },
            { sub_title: "toPrecision() Function", href: tsTopics?.toprecision_function },
        ]
    },
    {
        list_title: "Interfaces",
        href: tsTopics?.interfaces,
        sub_list: [
            { sub_title: "Object shape", href: tsTopics?.object_shape },
            { sub_title: "Optional properties", href: tsTopics?.optional_properties },
            { sub_title: 'Readonly properties', href: tsTopics?.readonly_properties },
            { sub_title: "Extending interfaces", href: tsTopics?.extending_interfaces },
            { sub_title: "Interface vs. type alias", href: tsTopics?.interface_vs_type_alias },
        ]
    },
    {
        list_title: "Classes",
        href: tsTopics?.classes,
        sub_list: [
            { sub_title: "Constructors", href: tsTopics?.constructors },
            { sub_title: 'Properties', href: tsTopics?.properties },
            { sub_title: 'Methods', href: tsTopics?.methods },
            { sub_title: "Inheritance", href: tsTopics?.inheritance },
            { sub_title: "Access modifiers", href: tsTopics?.access_modifiers },
        ]
    },
    {
        list_title: "Generics",
        href: tsTopics?.generics,
        sub_list: [
            { sub_title: "Generic functions", href: tsTopics?.generic_functions },
            { sub_title: 'Generic classes', href: tsTopics?.generic_classes },
            { sub_title: 'Generic constraints', href: tsTopics?.generic_constraints },
            { sub_title: "Type inference with generics", href: tsTopics?.type_inference_with_generics },
            { sub_title: "Generic utilities", href: tsTopics?.generic_utilities },
        ]
    },
    {
        list_title: "Enums",
        href: tsTopics?.enums,
        sub_list: [
            { sub_title: "Numeric enums", href: tsTopics?.numeric_enums },
            { sub_title: 'String enums', href: tsTopics?.string_enums },
            { sub_title: 'Computed and constant members', href: tsTopics?.computed_and_constant_members },
            { sub_title: 'Reverse mapping', href: tsTopics?.reverse_mapping },
        ]
    },
    {
        list_title: "Modules",
        href: tsTopics?.modules,
        sub_list: [
            { sub_title: "Module Basics", href: tsTopics?.module_basics },
            { sub_title: "Exporting/Importing", href: tsTopics?.export_and_import },
            { sub_title: "Default Exports", href: tsTopics?.default_exports },
            { sub_title: "Namespace Imports", href: tsTopics?.namespace_imports },
            { sub_title: "Re-Exporting", href: tsTopics?.re_exporting },
        ]
    },
    {
        list_title: "Namespaces",
        href: tsTopics?.namespaces,
        sub_list: [
            { sub_title: "Namespaces in TypeScript", href: tsTopics?.namespaces_in_typeScript },
            { sub_title: "Nested Namespaces", href: tsTopics?.nested_namespaces },
            { sub_title: "Declaring Ambient Modules", href: tsTopics?.declaring_ambient_modules },
            { sub_title: "Merging Namespaces", href: tsTopics?.merging_namespaces },
        ]
    },
    {
        list_title: "Decorators",
        href: tsTopics?.decorators,
        sub_list: [
            { sub_title: "Introduction to Decorators", href: tsTopics?.introduction_to_decorators },
            { sub_title: "Class Decorators", href: tsTopics?.class_decorators },
            { sub_title: "Method Decorators", href: tsTopics?.method_decorators },
            { sub_title: "Property Decorators", href: tsTopics?.property_decorators },
            { sub_title: "Parameter Decorators", href: tsTopics?.parameter_decorators },
            { sub_title: "Decorator Factories", href: tsTopics?.decorator_factories },
        ]
    },
    {
        list_title: "Mixins",
        href: tsTopics?.mixins,
        sub_list: [
            { sub_title: "Implementing Mixins in TypeScript", href: tsTopics?.mixins_in_typeScript },
            { sub_title: "Composition over Inheritance", href: tsTopics?.composition_over_inheritance },
        ]
    },
    {
        list_title: "Type Inference",
        href: tsTopics?.type_inference,
        sub_list: [
            { sub_title: "Contextual typing", href: tsTopics?.contextual_typing },
            { sub_title: 'Best common type', href: tsTopics?.best_common_type },
            { sub_title: 'Type widening and narrowing', href: tsTopics?.type_widening_and_narrowing },
            { sub_title: 'Definite assignment assertions', href: tsTopics?.definite_assignment_assertions },
        ]
    },
    {
        list_title: "Type Guards",
        href: tsTopics?.type_guards,
        sub_list: [
            { sub_title: "typeof type guards", href: tsTopics?.typeof_type_guards },
            { sub_title: 'instanceof type guards', href: tsTopics?.instanceof_type_guards },
            { sub_title: 'User-defined type guards', href: tsTopics?.user_defined_type_guards },
        ]
    },
    {
        list_title: "Union and Intersection Types",
        href: tsTopics?.union_and_intersection_types,
        sub_list: [
            { sub_title: "Union types", href: tsTopics?.union_types },
            { sub_title: 'Intersection types', href: tsTopics?.intersection_types },
            { sub_title: 'Discriminated unions', href: tsTopics?.discriminated_unions },
        ]
    },
    {
        list_title: "Advanced Types",
        href: tsTopics?.advanced_types,
        sub_list: [
            { sub_title: 'Conditional types', href: tsTopics?.conditional_types },
            { sub_title: "Mapped types", href: tsTopics?.mapped_types },
            { sub_title: "Index types", href: tsTopics?.index_types },
            { sub_title: "Tuple types", href: tsTopics?.tuple_types },
            { sub_title: "Keyof", href: tsTopics?.keyof },
            { sub_title: "Typeof", href: tsTopics?.typeof },
            { sub_title: "Infer type", href: tsTopics?.infer_type },
            { sub_title: "Partial type", href: tsTopics?.partial_type },
            { sub_title: "Required type", href: tsTopics?.required_type },
            { sub_title: "Extract type", href: tsTopics?.extract_type },
            { sub_title: "Exclude type", href: tsTopics?.exclude_type },
            { sub_title: "Duck-Typing", href: tsTopics?.duck_typing },
        ]
    },
    {
        list_title: "Utility Type",
        href: tsTopics?.utility_type,
        sub_list: [
            { sub_title: "Partial<Type>", href: tsTopics?.ut_partial_type },
            { sub_title: "Record<Keys, Type>", href: tsTopics?.record_type },
            { sub_title: "Awaited<Type>", href: tsTopics?.awaited_type },
            { sub_title: "Required<Type>", href: tsTopics?.ut_required_type },
            { sub_title: "Omit<Type, Keys>", href: tsTopics?.omit_type },
            { sub_title: "Pick<Type, Keys>", href: tsTopics?.pick_type },
            { sub_title: "Extract<Type, Union>", href: tsTopics?.ut_extract_type },
            { sub_title: "Capitalize <StringType>", href: tsTopics?.capitalize_type },
            { sub_title: "Lowercase <StringType>", href: tsTopics?.lowercase_type },
            { sub_title: "ConstructorParameters<Type>", href: tsTopics?.constructorParameters_type },
            { sub_title: "ReturnType <Type>", href: tsTopics?.returntype },
            { sub_title: "Creating Types from Utility Type", href: tsTopics?.creating_types },
            { sub_title: "Exclude<UnionType, ExcludedMembers>", href: tsTopics?.ut_exclude_type },
            { sub_title: "Uncapitalize<StringType> Template Literal Type", href: tsTopics?.uncapitalize_type },
        ]
    },
    {
        list_title: "Object Oriented Programming",
        href: tsTopics?.oo_programming,
        sub_list: [
            { sub_title: "Classes & Objects", href: tsTopics?.classes_objects },
            { sub_title: "Standalone Objects", href: tsTopics?.standalone_objects },
            { sub_title: "Constructors", href: tsTopics?.oo_constructors },
            { sub_title: "Property Modifiers", href: tsTopics?.property_modifiers },
            { sub_title: "Access Modifiers", href: tsTopics?.oo_access_modifiers },
            { sub_title: "Parameter Properties", href: tsTopics?.parameter_properties },
            { sub_title: "Getters & Setters", href: tsTopics?.getters_setters },
            { sub_title: "Static Methods", href: tsTopics?.static_methods },
            { sub_title: "Index Signatures", href: tsTopics?.index_signatures },
            { sub_title: "Inheritance", href: tsTopics?.oo_inheritance },
            { sub_title: "Composition", href: tsTopics?.composition },
            { sub_title: "Interfaces", href: tsTopics?.oo_interfaces },
        ]
    },
    {
        list_title: "Methods",
        href: tsTopics?.methods_m,
        sub_list: [
            { sub_title: "Number valueOf() Method", href: tsTopics?.valueOf_method },
            { sub_title: "Array toString() Method", href: tsTopics?.tostring_method },
            { sub_title: "toExponential() Method", href: tsTopics?.toexponential_method },
            { sub_title: "Method Overriding", href: tsTopics?.method_overriding },
            { sub_title: "Array Methods", href: tsTopics?.array_methods },
            { sub_title: "String Methods", href: tsTopics?.string_methods },
            { sub_title: "Object Methods", href: tsTopics?.object_methods },
        ]
    },
    {
        list_title: "Advance",
        href: tsTopics?.advance,
        sub_list: [
            { sub_title: "Generic Object Types", href: tsTopics?.generic_object_types },
            { sub_title: "Call Signatures", href: tsTopics?.call_signatures },
            { sub_title: "Declaring this in a Function", href: tsTopics?.declaring_this_in_function },
            { sub_title: "Constraints", href: tsTopics?.constraints },
            { sub_title: "Construct Signatures", href: tsTopics?.construct_signatures },
            { sub_title: "Generic Parameter Defaults", href: tsTopics?.generic_parameter_defaults },
            { sub_title: "Unknown Function", href: tsTopics?.unknown_function },
            { sub_title: "Non-null Assertion Operator (Postfix !) Type", href: tsTopics?.non_null_assertion },
            { sub_title: "Object Type Optional Properties", href: tsTopics?.object_type_optional },
            { sub_title: "strictNullChecks on Type", href: tsTopics?.strictnullchecks_on_type },
            { sub_title: "strictNullChecks off Type", href: tsTopics?.strictnullchecks_off_type },
            { sub_title: "Accessor", href: tsTopics?.accessor },
            { sub_title: "Ambients Declaration", href: tsTopics?.ambients_declaration },
            { sub_title: "Exhaustiveness checking", href: tsTopics?.exhaustiveness_checking },
            { sub_title: "Writing Good Overloads", href: tsTopics?.writing_good_overloads },
            { sub_title: "Aliases Type", href: tsTopics?.aliases_type },
            { sub_title: "Specifying Type Arguments", href: tsTopics?.specifying_type_arguments },
            { sub_title: "Literal Inference Type", href: tsTopics?.literal_inference_type },
            { sub_title: "Interfaces Type", href: tsTopics?.interfaces_type },
            { sub_title: "Return type void", href: tsTopics?.return_type_void },
        ]
    },
    ]
}

export const EMAIL_REGEX: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const VALID_URL: RegExp = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
export const SPECHAR: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
export const UPLOW: RegExp = /[a-zA-Z][a-zA-Z ]+/
export const UP: RegExp = /[A-Z]/
export const LOW: RegExp = /[a-z]/
export const NUM: RegExp = /[0-9]/

export const emailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const regularExp: RegExp = EMAIL_REGEX;
    let cValue = control.value;
    cValue = (cValue || '').toString().trim();
    if (!cValue)
        return { required: true };
    return regularExp.test(cValue) ? null : {
        invalidEmail: true
    };
};

export const spaceNotAllowed: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if ((control.value as string)?.indexOf(' ') >= 0) {
        return { space: true }
    }
    return null;
}

export const passStrenValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || '', upp: RegExp = UP, lowe: RegExp = LOW, numb: RegExp = NUM, speci: RegExp = SPECHAR;
    if (!value) { return null; }
    if (upp.test(value) === false) { return { upp: true }; }
    if (lowe.test(value) === false) { return { lowe: true }; }
    if (numb.test(value) === false) { return { numb: true }; }
    if (speci.test(value) === false) { return { speci: true }; }
    return null;
}