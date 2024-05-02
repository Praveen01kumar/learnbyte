import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"
import { Content } from "../interfaces/interfaces"

export const routeConfig = {
    empty: '',
    courses: 'courses',
    posts: 'posts',
    contact: 'contact',
    auth: 'auth',
    version: 'v1',
    veiled: '**'
}

export const courceRoute = {
    angular: 'angular',
    javascript: 'javascript',
    typescript: 'typescript',
    nodejs: 'nodejs',
    nestjs: 'nestjs',
    sequelize: 'sequelize',
    expressjs: 'expressjs',
}

export const exTopics = {
    intro: 'intro',
    architecture: "architecture",

    express: "express",
    express_json: "express-json",
    express_static: "express-static",
    express_router: "express-router",
    express_urlencoded: "express-urlencoded",

    application: "application",
    the_app: "the-app",
    events_mount: "events-mount",

    request: "request",
    the_request: "the-request",

    response: "response",
    the_response: "the-response",

    router: "router",
    the_router: "the-router",

    miscellaneous: "miscellaneous",
    cookies: "cookies",
    file_upload: "file-upload",
    middleware: "middleware",
    scaffolding: "scaffolding",
    template_engine: "template-engine",
}

export const ExpressJsContent: Content = {
    heading: "The Express.js, Node.js web application framework.",
    description: "Express.js is a lightweight Node.js web application framework known for its simplicity and flexibility. It simplifies server-side development in JavaScript, offering a robust set of features for building web and mobile applications. With its minimalistic design, Express provides powerful routing, request handling, and response generation capabilities. It follows a middleware architecture, enabling easy integration of additional functionality. Express is ideal for creating APIs and web applications, supporting single-page, multi-page, and hybrid architectures. Its seamless integration with other Node.js modules and frameworks allows for rapid development of scalable and feature-rich applications.",
    route: courceRoute?.expressjs,
    list: [{
        list_title: "An Introduction",
        href: exTopics?.intro,
        sub_list: [
            { sub_title: "architecture", href: exTopics?.architecture },
        ]
    },
    {
        list_title: "express()",
        href: exTopics?.express,
        sub_list: [
            { sub_title: "express.json()", href: exTopics?.express_json },
            { sub_title: "express.static()", href: exTopics?.express_static },
            { sub_title: "express.Router()", href: exTopics?.express_router },
            { sub_title: "express.urlencoded()", href: exTopics?.express_urlencoded },
        ]
    },
    {
        list_title: "Application",
        href: exTopics?.application,
        sub_list: [
            { sub_title: "the app", href: exTopics?.the_app },
            { sub_title: "Events(mount)", href: exTopics?.events_mount },
        ]
    },
    {
        list_title: "Request",
        href: exTopics?.request,
        sub_list: [
            { sub_title: "the Request", href: exTopics?.the_request },
        ]
    },
    {
        list_title: "Response",
        href: exTopics?.response,
        sub_list: [
            { sub_title: "the Response", href: exTopics?.the_response },
        ]
    },
    {
        list_title: "Router",
        href: exTopics?.router,
        sub_list: [
            { sub_title: "the Router", href: exTopics?.the_router },
        ]
    },
    {
        list_title: "miscellaneous",
        href: exTopics?.miscellaneous,
        sub_list: [
            { sub_title: "cookies", href: exTopics?.cookies },
            { sub_title: "File Upload", href: exTopics?.file_upload },
            { sub_title: "Middleware", href: exTopics?.middleware },
            { sub_title: "Scaffolding", href: exTopics?.scaffolding },
            { sub_title: "Template Engine", href: exTopics?.template_engine },
        ]
    },
    ]
}

export const nodeTopics = {
    intro: 'intro',
    architecture: "architecture",

    core_modules: "core-modules",
    fs: "fs",
    http: "http",
    https: "https",
    path: "path",
    util: "util",
    events: "events",
    crypto: "crypto",
    os: "os",
    child_processes: "child-processes",
    assert: "assert",
    dns: "dns",
    querystring: "querystring",
    url: "url",
    zlib: "zlib",
    timers: "timers",
    buffer: "buffer",
    vm: "vm",
    async_hooks: "async-hooks",

    npm_modules: "npm-modules",
    cli_commands: "cli-commands",

    community_modules: "community-modules",
    express: "express",
    socket_io: "socket-io",
    request: "request",
    async: "async",
    lodash: "lodash",
    mongoose: "mongoose",
    mysql: "mysql",

    event_emitter: "event-emitter",
    event_driven: "event-driven",
    eventemitter_class: "eventemitter-class",

    streams: "streams",
    to_streams: "to-streams",
    from_streams: "from-streams",
    writing_to_streams: "writing-to-streams",
    piping_streams: "piping-streams",

    security: "security",
    best_practices: "best-practices",
    encryption: "encryption",
    cross_site: "cross-site",
    authentication: "authentication",
    authorization: "authorization",
    input_validation: "input-validation",
    secure_communication: "secure-communication",
    helmet_js: "helmet-js",

    apis: "apis",
    restful_apis: "restful-apis",
    creating_apis: "creating-apis",
    handling_http_methods: "handling-http-methods",
    rest_api_design: "rest-api-design",

    email: "email",
    handling_email: "handling-email",

    asynchronous_programming: "asynchronous-programming",
    asynchronous: "asynchronous",
    callbacks: "callbacks",
    promises: "promises",
    async_await: "async-await",

    experimental: "experimental",
    worker_threads: "worker-threads",

    web_development: "web-development",
    routing: "routing",
    middleware: "middleware",
    template_engines: "template-engines",
    authentication_and_authorization: "authentication-and-authorization",

    performance_optimization: "performance-optimization",
    profiling: "profiling",
    caching: "caching",
    load_balancing: "load-balancing",
    scaling: "scaling",

    advanced: "advanced",
    cluster_module: "cluster-module",
    addons: "addons",
    error_handling: "error-handling",

    additional: "additional",
    globals: "globals",
    js_env: "js-env",
    stability_index: "stability-index",
    deprecated_apis: "deprecated-apis",
}

export const NodeJsContent: Content = {
    heading: "The NodeJs (server-side JavaScript).",
    description: "Node.js is an open-source, server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code outside of a web browser, enabling server-side scripting and enabling the development of scalable and high-performance network applications. Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient, particularly for building real-time applications like chat servers and streaming applications. It has a vast ecosystem of libraries and frameworks, such as Express.js, for simplifying web development tasks. Node.js is widely used for building web servers, APIs, microservices, and various other types of server-side applications.",
    route: courceRoute?.nodejs,
    list: [{
        list_title: "An Introduction",
        href: nodeTopics?.intro,
        sub_list: [
            { sub_title: "architecture", href: nodeTopics?.architecture },
        ]
    },
    {
        list_title: "Core Modules",
        href: nodeTopics?.core_modules,
        sub_list: [
            { sub_title: "fs (File System)", href: nodeTopics?.fs },
            { sub_title: "http (HTTP)", href: nodeTopics?.http },
            { sub_title: "https (HTTPS)", href: nodeTopics?.https },
            { sub_title: "path (Path)", href: nodeTopics?.path },
            { sub_title: "util (Utilities)", href: nodeTopics?.util },
            { sub_title: "events (Events, Event Loop)", href: nodeTopics?.events },
            { sub_title: "crypto (Cryptography)", href: nodeTopics?.crypto },
            { sub_title: "os (Operating System)", href: nodeTopics?.os },
            { sub_title: "Child Processes", href: nodeTopics?.child_processes },
            { sub_title: "assert (Assertion Testing)", href: nodeTopics?.assert },
            { sub_title: "dns (Domain Name System)", href: nodeTopics?.dns },
            { sub_title: "querystring (Query String)", href: nodeTopics?.querystring },
            { sub_title: "url (URL)", href: nodeTopics?.url },
            { sub_title: "zlib (Compression)", href: nodeTopics?.zlib },
            { sub_title: "timers (Timers)", href: nodeTopics?.timers },
            { sub_title: "buffer (Buffer)", href: nodeTopics?.buffer },
            { sub_title: "vm (Virtual Machine)", href: nodeTopics?.vm },
            { sub_title: "Async Hooks", href: nodeTopics?.async_hooks },
        ]
    },
    {
        list_title: "NPM Modules",
        href: nodeTopics?.npm_modules,
        sub_list: [
            { sub_title: "NPM CLI commands", href: nodeTopics?.cli_commands },
        ]
    },
    {
        list_title: "Community Modules",
        href: nodeTopics?.community_modules,
        sub_list: [
            { sub_title: "express (Express.js web framework)", href: nodeTopics?.express },
            { sub_title: "socket.io (Real-time communication library)", href: nodeTopics?.socket_io },
            { sub_title: "request (HTTP client)", href: nodeTopics?.request },
            { sub_title: "async (Asynchronous utilities)", href: nodeTopics?.async },
            { sub_title: "lodash (Utility library)", href: nodeTopics?.lodash },
            { sub_title: "mongoose (MongoDB object modeling for Node.js)", href: nodeTopics?.mongoose },
            { sub_title: "mysql (MySQL client)", href: nodeTopics?.mysql },
        ]
    },
    {
        list_title: "Events and Event Emitter",
        href: nodeTopics?.event_emitter,
        sub_list: [
            { sub_title: "Event-driven Architecture", href: nodeTopics?.event_driven },
            { sub_title: "EventEmitter Class", href: nodeTopics?.eventemitter_class },
        ]
    },
    {
        list_title: "Streams",
        href: nodeTopics?.streams,
        sub_list: [
            { sub_title: "Introduction to Streams", href: nodeTopics?.to_streams },
            { sub_title: "Reading from Streams", href: nodeTopics?.from_streams },
            { sub_title: "Writing to Streams", href: nodeTopics?.writing_to_streams },
            { sub_title: "Piping Streams", href: nodeTopics?.piping_streams },
        ]
    },
    {
        list_title: "Security",
        href: nodeTopics?.security,
        sub_list: [
            { sub_title: "Security Best Practices", href: nodeTopics?.best_practices },
            { sub_title: "SSL/TLS Encryption", href: nodeTopics?.encryption },
            { sub_title: "Cross-site Scripting (XSS) Prevention", href: nodeTopics?.cross_site },
            { sub_title: "Authentication (JWT, OAuth)", href: nodeTopics?.authentication },
            { sub_title: "Authorization", href: nodeTopics?.authorization },
            { sub_title: "Input Validation", href: nodeTopics?.input_validation },
            { sub_title: "Secure Communication (HTTPS)", href: nodeTopics?.secure_communication },
            { sub_title: "Helmet.js", href: nodeTopics?.helmet_js },
        ]
    },
    {
        list_title: "RESTful APIs",
        href: nodeTopics?.apis,
        sub_list: [
            { sub_title: "Introduction to RESTful APIs", href: nodeTopics?.restful_apis },
            { sub_title: "Creating RESTful APIs", href: nodeTopics?.creating_apis },
            { sub_title: "Handling HTTP Methods (GET, POST, PUT, DELETE)", href: nodeTopics?.handling_http_methods },
            { sub_title: "REST API Design Best Practices", href: nodeTopics?.rest_api_design },
        ]
    },
    {
        list_title: "Handling Email",
        href: nodeTopics?.email,
        sub_list: [
            { sub_title: "Introduction to Email Sending with Node.js", href: nodeTopics?.handling_email },
        ]
    },
    {
        list_title: "Asynchronous Programming",
        href: nodeTopics?.asynchronous_programming,
        sub_list: [
            { sub_title: "Understanding Asynchronous Programming", href: nodeTopics?.asynchronous },
            { sub_title: "Callbacks", href: nodeTopics?.callbacks },
            { sub_title: "Promises", href: nodeTopics?.promises },
            { sub_title: "Async/Await", href: nodeTopics?.async_await },
        ]
    },
    {
        list_title: "Experimental Modules",
        href: nodeTopics?.experimental,
        sub_list: [
            { sub_title: "Worker Threads", href: nodeTopics?.worker_threads },
        ]
    },
    {
        list_title: "Web Development",
        href: nodeTopics?.web_development,
        sub_list: [
            { sub_title: "Routing", href: nodeTopics?.routing },
            { sub_title: "Middleware", href: nodeTopics?.middleware },
            { sub_title: "Template Engines", href: nodeTopics?.template_engines },
            { sub_title: "Authentication and Authorization", href: nodeTopics?.authentication_and_authorization },
        ]
    },
    {
        list_title: "Performance Optimization",
        href: nodeTopics?.performance_optimization,
        sub_list: [
            { sub_title: "Profiling", href: nodeTopics?.profiling },
            { sub_title: "Caching", href: nodeTopics?.caching },
            { sub_title: "Load Balancing", href: nodeTopics?.load_balancing },
            { sub_title: "Scaling", href: nodeTopics?.scaling },
        ]
    },
    {
        list_title: "Advanced Concepts",
        href: nodeTopics?.advanced,
        sub_list: [
            { sub_title: "Cluster Module", href: nodeTopics?.cluster_module },
            { sub_title: "C++ Addons", href: nodeTopics?.addons },
            { sub_title: "Error Handling", href: nodeTopics?.error_handling },
        ]
    },
    {
        list_title: "Additional Topics",
        href: nodeTopics?.additional,
        sub_list: [
            { sub_title: "Globals", href: nodeTopics?.globals },
            { sub_title: "JavaScript Environment", href: nodeTopics?.js_env },
            { sub_title: "Stability Index", href: nodeTopics?.stability_index },
            { sub_title: "Deprecated APIs", href: nodeTopics?.deprecated_apis },
        ]
    },
    ]
}

export const nestTopics = {
    intro: 'intro',
    architecture: "architecture",

    cli: "cli",
    installation: "installation",
    usage: "usage",
    schematics: "schematics",
    cli_recipes: "cli-recipes",
    generating_applications: "generating-applications",
    generating_libraries: "generating-libraries",
    generating_resources: "generating-resources",

    fundamentals: "fundamentals",
    controllers: "controllers",
    providers: "providers",
    modules: "modules",
    middleware: "middleware",
    custom_decorators: "custom-decorators",
    async_providers: "async-providers",

    techniques: "techniques",
    async_await: "async-await",
    serialization: "serialization",
    error_handling: "error-handling",
    testing: "testing",
    security: "security",
    logging: "logging",
    configuration: "configuration",
    http_module: "http-module",
    graphql: "graphql",
    microservices: "microservices",
    mongodb: "mongodb",
    typeorm: "typeorm",
    mongoose: "mongoose",
    sequelize: "sequelize",

    recipes: "recipes",
    authentication: "authentication",
    authorization: "authorization",
    database: "database",
    file_upload: "file-upload",
    sending_emails: "sending-emails",
    scheduling_tasks: "scheduling-tasks",
    caching: "caching",
    docker: "docker",
    continuous_integration: "continuous-integration",

    best_practices: "best-practices",
    code_style: "code-style",
    performance: "performance",
    scalability: "scalability",
    dependency_injection: "dependency-injection",
    exception_filters: "exception-filters",
    pipes: "pipes",
    guards: "guards",
    interceptors: "interceptors",
    versioning: "versioning",
    hybrid_applications: "hybrid-applications",
    bp_http_module: "bp-http-module",
    websockets: "websockets",
}

export const NestJsContent: Content = {
    heading: "The NestJs (object-oriented programming).",
    description: "NestJS is a progressive Node.js framework that combines the best elements of object-oriented programming, functional programming, and functional reactive programming. It is designed to help developers build efficient, reliable, and scalable server-side applications. NestJS utilizes TypeScript, a superset of JavaScript, to provide strong typing and enhanced tooling support. It follows the modular architecture, which promotes code organization and reusability through modules, controllers, and services. NestJS also offers powerful features such as dependency injection, middleware support, and built-in support for WebSockets, GraphQL, and more. Overall, NestJS simplifies the development of complex server-side applications while maintaining high performance and flexibility.",
    route: courceRoute?.nestjs,
    list: [{
        list_title: "Introduction to NestJS",
        href: nestTopics?.intro,
        sub_list: [
            { sub_title: "architecture", href: nestTopics?.architecture },
        ]
    },
    {
        list_title: "CLI",
        href: nestTopics?.cli,
        sub_list: [
            { sub_title: "Installation", href: nestTopics?.installation },
            { sub_title: "Usage", href: nestTopics?.usage },
            { sub_title: "Schematics", href: nestTopics?.schematics },
            { sub_title: "Recipes", href: nestTopics?.cli_recipes },
            { sub_title: "Generating Applications", href: nestTopics?.generating_applications },
            { sub_title: "Generating Libraries", href: nestTopics?.generating_libraries },
            { sub_title: "Generating Resources", href: nestTopics?.generating_resources },
        ]
    },
    {
        list_title: "Fundamentals",
        href: nestTopics?.fundamentals,
        sub_list: [
            { sub_title: "Controllers", href: nestTopics?.controllers },
            { sub_title: "Providers", href: nestTopics?.providers },
            { sub_title: "Modules", href: nestTopics?.modules },
            { sub_title: "Middleware", href: nestTopics?.middleware },
            { sub_title: "Custom Decorators", href: nestTopics?.custom_decorators },
            { sub_title: "Async Providers", href: nestTopics?.async_providers },
        ]
    },
    {
        list_title: "Techniques",
        href: nestTopics?.techniques,
        sub_list: [
            { sub_title: "Async/Await", href: nestTopics?.async_await },
            { sub_title: "Serialization", href: nestTopics?.serialization },
            { sub_title: "Error Handling", href: nestTopics?.error_handling },
            { sub_title: "Testing", href: nestTopics?.testing },
            { sub_title: "Security", href: nestTopics?.security },
            { sub_title: "Logging", href: nestTopics?.logging },
            { sub_title: "Configuration", href: nestTopics?.configuration },
            { sub_title: "HTTP module", href: nestTopics?.http_module },
            { sub_title: "GraphQL", href: nestTopics?.graphql },
            { sub_title: "Microservices", href: nestTopics?.microservices },
            { sub_title: "MongoDB", href: nestTopics?.mongodb },
            { sub_title: "TypeORM", href: nestTopics?.typeorm },
            { sub_title: "Mongoose", href: nestTopics?.mongoose },
            { sub_title: "Sequelize", href: nestTopics?.sequelize },
        ]
    },
    {
        list_title: "Recipes",
        href: nestTopics?.recipes,
        sub_list: [
            { sub_title: "Authentication", href: nestTopics?.authentication },
            { sub_title: "Authorization", href: nestTopics?.authorization },
            { sub_title: "Database", href: nestTopics?.database },
            { sub_title: "File Upload", href: nestTopics?.file_upload },
            { sub_title: "Sending Emails", href: nestTopics?.sending_emails },
            { sub_title: "Scheduling Tasks", href: nestTopics?.scheduling_tasks },
            { sub_title: "Caching", href: nestTopics?.caching },
            { sub_title: "Docker", href: nestTopics?.docker },
            { sub_title: "Continuous Integration", href: nestTopics?.continuous_integration },
        ]
    },
    {
        list_title: "Best Practices",
        href: nestTopics?.best_practices,
        sub_list: [
            { sub_title: "Code Style", href: nestTopics?.code_style },
            { sub_title: "Performance", href: nestTopics?.performance },
            { sub_title: "Scalability", href: nestTopics?.scalability },
            { sub_title: "Dependency Injection", href: nestTopics?.dependency_injection },
            { sub_title: "Exception Filters", href: nestTopics?.exception_filters },
            { sub_title: "Pipes", href: nestTopics?.pipes },
            { sub_title: "Guards", href: nestTopics?.guards },
            { sub_title: "Interceptors", href: nestTopics?.interceptors },
            { sub_title: "Versioning", href: nestTopics?.versioning },
            { sub_title: "Hybrid Applications", href: nestTopics?.hybrid_applications },
            { sub_title: "HTTP Module", href: nestTopics?.bp_http_module },
            { sub_title: "Websockets", href: nestTopics?.websockets },
        ]
    },
    ]
}

export const seqTopics = {

    intro: 'intro',
    usage: "usage",

    basics: "basics",
    models: "models",
    instances: "instances",
    working_with_promises: "working-with-promises",

    querying: "querying",
    q_basics: "q-basics",
    finders: "finders",
    scope: "scope",
    aggregating: "aggregating",
    pagination: "pagination",
    query_types: "query-types",
    raw_queries: "raw-queries",
    plugins: "plugins",

    model_definition: "model-definition",
    data_types: "data-types",
    validation: "validation",
    md_hooks: "md-hooks",
    default_scope: "default-scope",
    scopes: "scopes",
    indexes: "indexes",
    creating_indexes: "creating-indexes",
    removing_indexes: "removing-indexes",
    model_options: "model-options",
    md_associations: "md-associations",

    migrations: "migrations",
    sli_usage: "sli-usage",
    api: "api",

    instance_methods: "instance-methods",
    save: "save",
    reload: "reload",
    validate: "validate",
    update: "update",
    destroy: "destroy",
    increment: "increment",
    decrement: "decrement",

    hooks: "hooks",
    lifecycle_hooks: "lifecycle-hooks",
    instance_hooks: "instance-hooks",
    model_hooks: "model-hooks",

    associations: "associations",
    o_o_associations: "o-o-associations",
    o_m_associations: "o-m-associations",
    m_n_associations: "m-n-associations",
    through_models: "through-models",
    self_associations: "self-associations",

    transactions: "transactions",
    implicit_transactions: "implicit-transactions",
    explicit_transactions: "explicit-transactions",

    validations: "validations",
    v_basics: "v-basics",
    validators: "validators",
    custom_validators: "custom-validators",

    configuration: "configuration",
    options: "options",
    logging: "logging",

    error_handling: "error-handling",
    handling_errors: "handling-errors",
    errors: "errors",

    utils: "utils",
    helpers: "helpers",

}

export const SequelizeContent: Content = {
    heading: "The Sequelize (promise-based Node.js ORM).",
    description: "Sequelize is a promise-based Node.js ORM (Object-Relational Mapping) library for relational databases. It provides an abstraction layer that allows developers to interact with databases using JavaScript objects, eliminating the need to write raw SQL queries. Sequelize supports various database dialects such as MySQL, PostgreSQL, SQLite, and MSSQL, making it highly versatile. It offers features like schema definition, data validation, query building, and transaction support, simplifying database operations. Sequelize also supports advanced features like eager loading, associations, and migrations, making it suitable for building complex applications. Overall, Sequelize enhances productivity by providing a consistent interface for working with databases in Node.js applications.",
    route: courceRoute?.sequelize,
    list: [{
        list_title: "Getting Started",
        href: seqTopics?.intro,
        sub_list: [
            { sub_title: "Usage", href: seqTopics?.usage },
        ]
    },
    {
        list_title: "Basics",
        href: seqTopics?.basics,
        sub_list: [
            { sub_title: "Models", href: seqTopics?.models },
            { sub_title: "Instances", href: seqTopics?.instances },
            { sub_title: "Working with Promises", href: seqTopics?.working_with_promises },
        ]
    },
    {
        list_title: "Querying",
        href: seqTopics?.querying,
        sub_list: [
            { sub_title: "Basics", href: seqTopics?.q_basics },
            { sub_title: "Finders", href: seqTopics?.finders },
            { sub_title: "Scopes", href: seqTopics?.scope },
            { sub_title: "Aggregating", href: seqTopics?.aggregating },
            { sub_title: "Pagination", href: seqTopics?.pagination },
            { sub_title: "Query Types", href: seqTopics?.query_types },
            { sub_title: "Raw Queries", href: seqTopics?.raw_queries },
            { sub_title: "Plugins", href: seqTopics?.plugins },
        ]
    },
    {
        list_title: "Model Definition",
        href: seqTopics?.model_definition,
        sub_list: [
            { sub_title: "Data Types", href: seqTopics?.data_types },
            { sub_title: "Validation", href: seqTopics?.validation },
            { sub_title: "Hooks", href: seqTopics?.md_hooks },
            { sub_title: "Default Scope", href: seqTopics?.default_scope },
            { sub_title: "Scopes", href: seqTopics?.scopes },
            { sub_title: "Indexes", href: seqTopics?.indexes },
            { sub_title: "Creating Indexes", href: seqTopics?.creating_indexes },
            { sub_title: "Removing Indexes", href: seqTopics?.removing_indexes },
            { sub_title: "Model Options", href: seqTopics?.model_options },
            { sub_title: "Associations", href: seqTopics?.md_associations },
        ]
    },
    {
        list_title: "Migrations",
        href: seqTopics?.migrations,
        sub_list: [
            { sub_title: "CLI Usage", href: seqTopics?.sli_usage },
            { sub_title: "API", href: seqTopics?.api },
        ]
    },
    {
        list_title: "Instance Methods",
        href: seqTopics?.instance_methods,
        sub_list: [
            { sub_title: "Save", href: seqTopics?.save },
            { sub_title: "Reload", href: seqTopics?.reload },
            { sub_title: "Validate", href: seqTopics?.validate },
            { sub_title: "Update", href: seqTopics?.update },
            { sub_title: "Destroy", href: seqTopics?.destroy },
            { sub_title: "Increment", href: seqTopics?.increment },
            { sub_title: "Decrement", href: seqTopics?.decrement },
        ]
    },
    {
        list_title: "Hooks",
        href: seqTopics?.hooks,
        sub_list: [
            { sub_title: "Lifecycle Hooks", href: seqTopics?.lifecycle_hooks },
            { sub_title: "Instance Hooks", href: seqTopics?.instance_hooks },
            { sub_title: "Model Hooks", href: seqTopics?.model_hooks },
        ]
    },
    {
        list_title: "Associations",
        href: seqTopics?.associations,
        sub_list: [
            { sub_title: "1:1 Associations", href: seqTopics?.o_o_associations },
            { sub_title: "1:M Associations", href: seqTopics?.o_m_associations },
            { sub_title: "M:N Associations", href: seqTopics?.m_n_associations },
            { sub_title: "Through Models", href: seqTopics?.through_models },
            { sub_title: "Self-Associations", href: seqTopics?.self_associations },
        ]
    },
    {
        list_title: "Transactions",
        href: seqTopics?.transactions,
        sub_list: [
            { sub_title: "Implicit Transactions", href: seqTopics?.implicit_transactions },
            { sub_title: "Explicit Transactions", href: seqTopics?.explicit_transactions },
        ]
    },
    {
        list_title: "Validations",
        href: seqTopics?.validations,
        sub_list: [
            { sub_title: "Basics", href: seqTopics?.v_basics },
            { sub_title: "Validators", href: seqTopics?.validators },
            { sub_title: "Custom Validators", href: seqTopics?.custom_validators },
        ]
    },
    {
        list_title: "Configuration",
        href: seqTopics?.configuration,
        sub_list: [
            { sub_title: "Options", href: seqTopics?.options },
            { sub_title: "Logging", href: seqTopics?.logging },
        ]
    },
    {
        list_title: "Error Handling",
        href: seqTopics?.error_handling,
        sub_list: [
            { sub_title: "Handling Errors", href: seqTopics?.handling_errors },
            { sub_title: "Errors", href: seqTopics?.errors },
        ]
    },
    {
        list_title: "Utils",
        href: seqTopics?.utils,
        sub_list: [
            { sub_title: "Helpers", href: seqTopics?.helpers },
        ]
    },
    ]
}

export const jsTopics = {

    intro: 'intro',
    manuals: 'manuals',
    code_editors: 'code-editors',
    developer_console: 'developer-console',

    fundamentals: 'fundamentals',
    hello_world: 'hello-world',
    code_structure: 'code-structure',
    modern_mode: 'modern-mode',
    variables: 'variables',
    data_types: 'data-types',
    interaction_alert: 'interaction-alert',
    type_conversions: 'type-conversions',
    basic_operators: 'basic-operators',
    comparisons: 'comparisons',
    conditional_branching: 'conditional-branching',
    logical_operators: 'logical-operators',
    nullish: 'nullish',
    loops: 'loops',
    switch: 'switch',
    functions: 'functions',
    expressions: 'expressions',
    arrow_functions: 'arrow-functions',
    javaScript_specials: 'javaScript-specials',

    code_quality: "code-quality",
    debugging: "debugging",
    comments: "comments",
    automated: "automated",
    coding_style: "coding-style",
    ninja_code: "ninja-code",
    polyfills: "polyfills",

    objects: "objects",
    basics_objects: "basics-objects",
    object_methods: "object-methods",
    symbol_type: "symbol-type",
    object_references: "object-references",
    garbage_collection: "garbage-collection",
    constructor: "constructor",
    optional_chaining: "optional-chaining",
    primitive_conversion: "primitive-conversion",

    primitives_data_types: "primitives-data-types",
    primitives: "primitives",
    numbers: "numbers",
    strings: "strings",
    arrays: "arrays",
    array_methods: "array-methods",
    iterables: "iterables",
    map_and_set: "map-and-set",
    weakmap: "weakmap",
    values_entries: "values-entries",
    destructuring: "destructuring",
    date_and_time: "date-and-time",
    json_methods: "json-methods",

    advanced_working: "advanced-working",
    recursion_and_stack: "recursion-and-stack",
    spread_syntax: "spread-syntax",
    variable_scope: "variable-scope",
    the_old: "the-old",
    global_object: "global-object",
    function_object: "function-object",
    new_function: "new-function",
    scheduling: "scheduling",
    decorators: "decorators",
    function_binding: "function-binding",
    arrow_revisited: "arrow-revisited",

    configuration: "configuration",
    flags_and_descriptors: "flags-and-descriptors",
    getters_and_setters: "getters-and-setters",

    prototypes: "prototypes",
    prototypal: "prototypal",
    prototype: "prototype",
    native_prototypes: "native-prototypes",
    prototype_methods: "prototype-methods",

    classes: "classes",
    basic_syntax: "basic-syntax",
    class_inheritance: "class-inheritance",
    static_properties: "static-properties",
    private_and_protected: "private-and-protected",
    extending_built: "extending-built",
    class_checking: "class-checking",
    mixins: "mixins",

    error_handling: "error-handling",
    try_catch: "try-catch",
    extending_error: "extending-error",

    promises: "promises",
    callbacks: "callbacks",
    promise: "promise",
    promises_chaining: "promises-chaining",
    error_handling_with: "error-handling-with",
    promise_API: "promise-API",
    promisification: "promisification",
    microtasks: "microtasks",
    async_await: "async-await",

    advanced_iteration: "advanced-iteration",
    generators: "generators",
    async_iteration: "async-iteration",

    modules: "modules",
    modules_duction: "modules-duction",
    export_and_import: "export-and-import",
    dynamic_imports: "dynamic-imports",

    inter_views: "inter-views",
}

export const JavaScriptContent: Content = {
    heading: "The JavaScript (high-level, interpreted programming language).",
    description: "JavaScript is a high-level, interpreted programming language primarily used for front-end web development, but also increasingly prevalent for back-end and server-side development. Developed by Netscape, it's now standardized under ECMAScript. JavaScript enables interactive and dynamic functionality within web pages, enhancing user experience by allowing manipulation of HTML and CSS, handling events, and communicating asynchronously with servers. It's characterized by its versatility, as it supports both procedural and object-oriented programming paradigms. JavaScript runs on the client side in web browsers and on the server side using platforms like Node.js. It's widely used for building web applications, mobile applications, server-side applications, and even desktop applications.",
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
    {
        list_title: "InterView",
        href: jsTopics?.inter_views,
        sub_list: []
    },
    ]
}

export const ngTopics = {
    ngintro: 'ngintro',
    features_of_angular: "features-of-angular",

    angular_cli: "angular-cli",
    new_angular_project: "new-angular-project",
    generating_components: "generating-components",
    development_server: "development-server",
    production_builds: "production-builds",

    module: "module",
    ngmodule: "ngmodule",
    imports: "imports",
    declarations: "declarations",
    exports: "exports",
    providers: "providers",
    bootstrap: "bootstrap",
    lazy_loading: "lazy-loading",

    components: "components",
    component_class: "component-class",
    template: "template",
    component_metadata: "component-metadata",
    lifecycle_hooks: "lifecycle-hooks",
    component_communication: "component-communication",
    component_styling: "component-styling",
    component_interaction: "component-interaction",
    component_routing: "component-routing",

    directives: "directives",
    component_directives: "component-directives",
    attribute_directives: "attribute-directives",
    structural_directives: "structural-directives",

    data_binding: "data-binding",
    interpolation: "interpolation",
    property_binding: "property-binding",
    event_binding: "event-binding",
    two_way_binding: "two-way-binding",

    forms: "forms",
    td_forms: "td-forms",
    reactive_forms: "reactive-forms",
    formcontrol: "formcontrol",
    formgroup: "formgroup",
    formarray: "formarray",
    form_submission: "form-submission",
    dynamic_fc_manipulation: "dynamic-fc-manipulation",
    f_validation: "f-validation",
    f_builder: "f-builder",

    dependency_injection: "dependency-injection",
    service_registration: "service-registration",
    injector: "injector",
    di_in_components: "di-in-components",
    di_into_services: "di-into-services",
    provider_configuration: "provider-configuration",
    injection_tokens: "injection-tokens",

    services: "services",
    creating_a_service: "creating-a-service",
    injecting_a_service: "injecting-a-service",
    singleton_scope: "singleton-scope",
    providing_services: "providing-services",
    service_dependencies: "service-dependencies",

    routing: "routing",
    router_module: "router-module",
    router_outlet: "router-outlet",
    route_config: "route-config",
    traditional_routing: "traditional-routing",
    path_based_routing: "path-based-routing",
    lazy_loaded: "lazy-loaded",
    navigation: "navigation",
    route_parameters: "route-parameters",
    nested_routes: "nested-routes",
    route_guards: "route-guards",

    state_management: "state-management",
    input_output: "input-output",
    stm_services: "stm-services",
    rxJS_and_observables: "rxJS-and-observables",
    ngrx: "ngrx",
    other_s_management_libraries: "other-s-management-libraries",

    rxJs_basic: "rxJs-basic",
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
    error_handling: "error-handling",
    hot_vs_cold: "hot-vs-cold",
    higher_order: "higher-order",
    async_pipe: "async-pipe",
    multiple_streams: "multiple-streams",
    caching_and_memoization: "caching-and-memoization",
    testing: "testing",
    backpressure: "backpressure",
    custom_operators: "custom-operators",
    time_based_operators: "time-based-operators",
    multicasting_and_connectable: "multicasting-and-connectable",
    customizing_observable_creation: "customizing-observable-creation",
    immutable_data_handling: "immutable-data-handling",
    advanced_techniques: "advanced-techniques",

    http_and_apis: "http-and-apis",
    httpclient: "httpclient",
    http_methods: "http-methods",
    http_requests: "http-requests",
    handling_responses: "handling-responses",
    response_types: "response-types",
    headers_and_query_parameters: "headers-and-query-parameters",
    http_error_handling: "http-error-handling",
    authentication: "authentication",
    interceptors: "interceptors",
    mocking_http_requests: "mocking-http-requests",

    localization: "localization",
    internationalization: "internationalization",
    translation_files: "translation-files",
    markup_translation: "markup-translation",
    translation_process: "translation-process",
    localization_config: "localization-config",
    dynamic_localization: "dynamic-localization",
    translate_service: "translate-service",
    language_switching: "language-switching",
    pluralization_selectors: "pluralization-selectors",

    angular_ssr: "angular-ssr",
    ssr: "ssr",
    angular_universal: "angular-universal",
    prerequisites: "prerequisites",
    setup_and_config: "setup-and-config",
    rendering_process: "rendering-process",
    data_transfer: "data-transfer",
    ssr_lifecycle_hooks: "ssr-lifecycle-hooks",
    deployment: "deployment",
    universal_with_cli: "universal-with-cli",

    testing_module: "testing-module",
    testing_frameworks: "testing-frameworks",
    test_bed: "test-bed",
    unit_testing: "unit-testing",
    component_testing: "component-testing",
    mocking_dependencies: "mocking-dependencies",
    integration_testing: "integration-testing",
    test_mocking_http_requests: "test-mocking-http-requests",
    e2e_testing: "e2e-testing",
    test_coverage: "test-coverage",
    continuous_integration: "continuous-integration",

    performance_optimization: "performance-optimization",
    change_detection: "change-detection",
    performance_lazy_loading: "performance-lazy-loading",
    aot_compilation: "aot-compilation",
    code_minification: "code-minification",
    optimizing_images: "optimizing-images",
    caching_and_http_optimization: "caching-and-http-optimization",
    performance_profiling: "performance-profiling",
    optimizing_router: "optimizing-router",
    memory_management: "memory-management",
    third_party_libraries: "third-party-libraries",

    deployment_module: "deployment-module",
    buildling_the_application: "buildling-the-application",
    choose_a_hosting: "choose-a-hosting",
    server_config: "server-config",
    static_file_deployment: "static-file-deployment",
    domain_and_dns_config: "domain-and-dns-config",
    ssl_sertificates: "ssl-sertificates",
    continuous_integration_dp: "continuous-integration-dp",
    testing_and_verification: "testing-and-verification",
    monitoring_and_maintenance: "monitoring-and-maintenance",

    angular_animation: "angular-animation",
    animation_module: "animation-module",
    animation_trigger: "animation-trigger",
    states_and_transitions: "states-and-transitions",
    keyframes_and_styles: "keyframes-and-styles",
    animation_functions: "animation-functions",
    triggering_animations: "triggering-animations",
    animation_metadata: "animation-metadata",
    grouping_and_sequencing: "grouping-and-sequencing",
    dynamic_animations: "dynamic-animations",
    integration_with_angular_directives: "integration-with-angular-directives",
    inter_views: "inter-views",
}

export const AngularContent: Content = {
    heading: "The Comprehensive framework of JavaScript (Angular).",
    description: "Angular is an open-source web application framework developed by Google for building dynamic and interactive single-page applications (SPAs). It follows the Model-View-Controller (MVC) architecture and is known for its robustness, scalability, and performance. Angular utilizes HTML as its template language and extends its syntax with directives to express application components clearly. It provides features such as data binding, dependency injection, routing, and forms handling, facilitating the development of complex web applications. Angular's modular design allows developers to organize their code efficiently and encourages the use of reusable components. With its comprehensive documentation and active community support, Angular is widely adopted for building modern, feature-rich web applications.",
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
    {
        list_title: "InterView",
        href: ngTopics?.inter_views,
        sub_list: []
    },
    ]
}

export const tsTopics = {

    tsintro: 'tsintro',
    installing_typeScript: "installingTypeScript",
    variables: "variables",

    data_types: "dataTypes",

    functions: "functions",
    declarations: "declarations",
    arrow_functions: "arrowFunctions",
    parameters: "parameters",
    rest_parameters: "restParameters",
    tofixed_function: "tofixedFunction",
    tolocalestring_function: "tolocalestringFunction",
    toprecision_function: "toprecisionFunction",

    interfaces: "interfaces",
    object_shape: "objectShape",
    optional_properties: "optionalProperties",
    readonly_properties: "readonlyProperties",
    extending_interfaces: "extendingInterfaces",
    interface_vs_type_alias: "interfaceVsTypeAlias",

    classes: "classes",
    constructors: "constructors",
    properties: "properties",
    methods: "methods",
    inheritance: "inheritance",
    access_modifiers: "accessModifiers",

    generics: "generics",
    generic_functions: "genericFunctions",
    generic_classes: "genericClasses",
    generic_constraints: "genericConstraints",
    type_inference_with_generics: "typeInferenceWithGenerics",
    generic_utilities: "genericUtilities",

    enums: "enums",
    numeric_enums: "numericEnums",
    string_enums: "stringEnums",
    computed_and_constant_members: "computedAndConstantMembers",
    reverse_mapping: "reverseMapping",

    modules: "modules",
    module_basics: "moduleBasics",
    export_and_import: "exportAndImport",
    default_exports: "defaultExports",
    namespace_imports: "namespaceImports",
    re_exporting: "reExporting",

    namespaces: "namespaces",
    namespaces_in_typeScript: "namespacesInTypeScript",
    nested_namespaces: "nestedNamespaces",
    declaring_ambient_modules: "declaringAmbientModules",
    merging_namespaces: "mergingNamespaces",

    decorators: "decorators",
    introduction_to_decorators: "introductionToDecorators",
    class_decorators: "classDecorators",
    method_decorators: "methodDecorators",
    property_decorators: "propertyDecorators",
    parameter_decorators: "parameterDecorators",
    decorator_factories: "decoratorFactories",

    mixins: "mixins",
    mixins_in_typeScript: "mixinsInTypeScript",
    composition_over_inheritance: "compositionOverInheritance",

    type_inference: "typeInference",
    contextual_typing: "contextualTyping",
    best_common_type: "bestCommonType",
    type_widening_and_narrowing: "typeWideningAndNarrowing",
    definite_assignment_assertions: "definiteAssignmentAssertions",

    type_guards: "typeGuards",
    typeof_type_guards: "typeofTypeGuards",
    instanceof_type_guards: "instanceofTypeGuards",
    user_defined_type_guards: "userDefinedTypeGuards",

    union_and_intersection_types: "unionAndIntersectionTypes",
    union_types: "unionTypes",
    intersection_types: "intersectionTypes",
    discriminated_unions: "discriminatedUnions",

    advanced_types: "advancedTypes",
    conditional_types: "conditionalTypes",
    mapped_types: "mappedTypes",
    index_types: "indexTypes",
    tuple_types: "tupleTypes",
    keyof: "keyof",
    typeof: "typeof",
    infer_type: "inferType",
    partial_type: "partialType",
    required_type: "requiredType",
    extract_type: "extractType",
    exclude_type: "excludeType",
    duck_typing: "duckTyping",

    utility_type: "utilityType",
    ut_partial_type: "utPartialType",
    record_type: "recordType",
    awaited_type: "awaitedType",
    ut_required_type: "utRequiredType",
    omit_type: "omitType",
    pick_type: "pickType",
    ut_extract_type: "utExtractType",
    capitalize_type: "capitalizeType",
    lowercase_type: "lowercaseType",
    constructorParameters_type: "constructorParametersType",
    returntype: "returntype",
    creating_types: "creatingTypes",
    ut_exclude_type: "utExcludeType",
    uncapitalize_type: "uncapitalizeType",

    oo_programming: "ooProgramming",
    classes_objects: "classesObjects",
    standalone_objects: "standaloneObjects",
    oo_constructors: "ooConstructors",
    property_modifiers: "propertyModifiers",
    oo_access_modifiers: "ooAccessModifiers",
    parameter_properties: "parameterProperties",
    getters_setters: "gettersSetters",
    static_methods: "staticMethods",
    index_signatures: "indexSignatures",
    oo_inheritance: "ooInheritance",
    composition: "composition",
    oo_interfaces: "ooInterfaces",

    methods_m: "methodsM",
    valueOf_method: "valueOfMethod",
    tostring_method: "tostringMethod",
    toexponential_method: "toexponentialMethod",
    method_overriding: "methodOverriding",
    array_methods: "arrayMethods",
    string_methods: "stringMethods",
    object_methods: "objectMethods",

    advance: "advance",
    generic_object_types: "genericObjectTypes",
    call_signatures: "callSignatures",
    declaring_this_in_function: "declaringThisInFunction",
    constraints: "constraints",
    construct_signatures: "constructSignatures",
    generic_parameter_defaults: "genericParameterDefaults",
    unknown_function: "unknownFunction",
    non_null_assertion: "nonNullAssertion",
    object_type_optional: "objectTypeOptional",
    strictnullchecks_on_type: "strictnullchecksOnType",
    strictnullchecks_off_type: "strictnullchecksOffType",
    accessor: "accessor",
    ambients_declaration: "ambientsDeclaration",
    exhaustiveness_checking: "exhaustivenessChecking",
    writing_good_overloads: "writingGoodOverloads",
    aliases_type: "aliasesType",
    specifying_type_arguments: "specifyingTypeArguments",
    literal_inference_type: "literalInferenceType",
    interfaces_type: "interfacesType",
    return_type_void: "returnTypeVoid",
}

export const TypescriptContent: Content = {
    heading: "The strongly-typed superset of JavaScript (Typescript).",
    description: "TypeScript is a strongly-typed superset of JavaScript that adds static typing capabilities to the language. Developed and maintained by Microsoft, TypeScript compiles down to plain JavaScript, enabling developers to write and maintain large-scale JavaScript applications more effectively. TypeScript enhances JavaScript by introducing features such as type annotations, interfaces, enums, generics, and advanced object-oriented programming concepts like classes and inheritance. It provides benefits like improved code maintainability, enhanced code navigation and refactoring tools, and early error detection during development. TypeScript is widely used in both frontend and backend development, especially in projects built with Angular, React, Node.js, and other modern web frameworks.",
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