import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptDashboardComponent } from './dashboard/dashboard.component';
import { JavascriptIntroComponent } from './lesssion/intro/intro.component';
import { courceRoute, jsTopics, routeConfig } from 'src/app/shared/const/const';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { ManualsComponent } from './lesssion/manuals/manuals.component';
import { CodeEditorsComponent } from './lesssion/code-editors/code-editors.component';
import { DeveloperConsoleComponent } from './lesssion/developer-console/developer-console.component';
import { FundamentalsComponent } from './lesssion/fundamentals/fundamentals.component';
import { HelloWorldComponent } from './lesssion/hello-world/hello-world.component';
import { CodeStructureComponent } from './lesssion/code-structure/code-structure.component';
import { ModernModeComponent } from './lesssion/modern-mode/modern-mode.component';
import { VariablesComponent } from './lesssion/variables/variables.component';
import { DataTypesComponent } from './lesssion/data-types/data-types.component';
import { InteractionAlertComponent } from './lesssion/interaction-alert/interaction-alert.component';
import { TypeConversionsComponent } from './lesssion/type-conversions/type-conversions.component';
import { BasicOperatorsComponent } from './lesssion/basic-operators/basic-operators.component';
import { ComparisonsComponent } from './lesssion/comparisons/comparisons.component';
import { ConditionalBranchingComponent } from './lesssion/conditional-branching/conditional-branching.component';
import { LogicalOperatorsComponent } from './lesssion/logical-operators/logical-operators.component';
import { NullishComponent } from './lesssion/nullish/nullish.component';
import { LoopsComponent } from './lesssion/loops/loops.component';
import { SwitchComponent } from './lesssion/switch/switch.component';
import { FunctionsComponent } from './lesssion/functions/functions.component';
import { ArrowFunctionsComponent } from './lesssion/arrow-functions/arrow-functions.component';
import { ExpressionsComponent } from './lesssion/expressions/expressions.component';
import { JavaScriptSpecialsComponent } from './lesssion/java-script-specials/java-script-specials.component';
import { DebuggingComponent } from './lesssion/debugging/debugging.component';
import { CodeQualityComponent } from './lesssion/code-quality/code-quality.component';
import { NinjaCodeComponent } from './lesssion/ninja-code/ninja-code.component';
import { AutomatedComponent } from './lesssion/automated/automated.component';
import { CodingStyleComponent } from './lesssion/coding-style/coding-style.component';
import { CommentsComponent } from './lesssion/comments/comments.component';
import { PolyfillsComponent } from './lesssion/polyfills/polyfills.component';
import { ObjectsComponent } from './lesssion/objects/objects.component';
import { ObjectMethodsComponent } from './lesssion/object-methods/object-methods.component';
import { BasicsObjectsComponent } from './lesssion/basics-objects/basics-objects.component';
import { SymbolTypeComponent } from './lesssion/symbol-type/symbol-type.component';
import { ObjectReferencesComponent } from './lesssion/object-references/object-references.component';
import { GarbageCollectionComponent } from './lesssion/garbage-collection/garbage-collection.component';
import { ConstructorComponent } from './lesssion/constructor/constructor.component';
import { OptionalChainingComponent } from './lesssion/optional-chaining/optional-chaining.component';
import { PrimitiveConversionComponent } from './lesssion/primitive-conversion/primitive-conversion.component';
import { PrimitivesDataTypesComponent } from './lesssion/primitives-data-types/primitives-data-types.component';
import { PrimitivesComponent } from './lesssion/primitives/primitives.component';
import { NumbersComponent } from './lesssion/numbers/numbers.component';
import { StringsComponent } from './lesssion/strings/strings.component';
import { ArraysComponent } from './lesssion/arrays/arrays.component';
import { ArrayMethodsComponent } from './lesssion/array-methods/array-methods.component';
import { IterablesComponent } from './lesssion/iterables/iterables.component';
import { MapAndSetComponent } from './lesssion/map-and-set/map-and-set.component';
import { WeakmapComponent } from './lesssion/weakmap/weakmap.component';
import { ValuesEntriesComponent } from './lesssion/values-entries/values-entries.component';
import { DestructuringComponent } from './lesssion/destructuring/destructuring.component';
import { DateAndTimeComponent } from './lesssion/date-and-time/date-and-time.component';
import { JsonMethodsComponent } from './lesssion/json-methods/json-methods.component';
import { AdvancedWorkingComponent } from './lesssion/advanced-working/advanced-working.component';
import { RecursionAndStackComponent } from './lesssion/recursion-and-stack/recursion-and-stack.component';
import { VariableScopeComponent } from './lesssion/variable-scope/variable-scope.component';
import { SpreadSyntaxComponent } from './lesssion/spread-syntax/spread-syntax.component';
import { TheOldComponent } from './lesssion/the-old/the-old.component';
import { GlobalObjectComponent } from './lesssion/global-object/global-object.component';
import { FunctionObjectComponent } from './lesssion/function-object/function-object.component';
import { NewFunctionComponent } from './lesssion/new-function/new-function.component';
import { SchedulingComponent } from './lesssion/scheduling/scheduling.component';
import { DecoratorsComponent } from './lesssion/decorators/decorators.component';
import { FunctionBindingComponent } from './lesssion/function-binding/function-binding.component';
import { BasicSyntaxComponent } from './lesssion/basic-syntax/basic-syntax.component';
import { AdvancedIterationComponent } from './lesssion/advanced-iteration/advanced-iteration.component';
import { ArrowRevisitedComponent } from './lesssion/arrow-revisited/arrow-revisited.component';
import { ConfigurationComponent } from './lesssion/configuration/configuration.component';
import { FlagsAndDescriptorsComponent } from './lesssion/flags-and-descriptors/flags-and-descriptors.component';
import { GettersAndSettersComponent } from './lesssion/getters-and-setters/getters-and-setters.component';
import { PrototypesComponent } from './lesssion/prototypes/prototypes.component';
import { PrototypalComponent } from './lesssion/prototypal/prototypal.component';
import { PrototypeComponent } from './lesssion/prototype/prototype.component';
import { NativePrototypesComponent } from './lesssion/native-prototypes/native-prototypes.component';
import { PrototypeMethodsComponent } from './lesssion/prototype-methods/prototype-methods.component';
import { ClassesComponent } from './lesssion/classes/classes.component';
import { ClassInheritanceComponent } from './lesssion/class-inheritance/class-inheritance.component';
import { StaticPropertiesComponent } from './lesssion/static-properties/static-properties.component';
import { PrivateAndProtectedComponent } from './lesssion/private-and-protected/private-and-protected.component';
import { ExtendingBuiltComponent } from './lesssion/extending-built/extending-built.component';
import { ClassCheckingComponent } from './lesssion/class-checking/class-checking.component';
import { MixinsComponent } from './lesssion/mixins/mixins.component';
import { JavascriptErrorHandlingComponent } from './lesssion/error-handling/error-handling.component';
import { TryCatchComponent } from './lesssion/try-catch/try-catch.component';
import { ExtendingErrorComponent } from './lesssion/extending-error/extending-error.component';
import { PromisesComponent } from './lesssion/promises/promises.component';
import { PromiseComponent } from './lesssion/promise/promise.component';
import { CallbacksComponent } from './lesssion/callbacks/callbacks.component';
import { PromisesChainingComponent } from './lesssion/promises-chaining/promises-chaining.component';
import { ErrorHandlingWithComponent } from './lesssion/error-handling-with/error-handling-with.component';
import { PromiseAPIComponent } from './lesssion/promise-api/promise-api.component';
import { PromisificationComponent } from './lesssion/promisification/promisification.component';
import { MicrotasksComponent } from './lesssion/microtasks/microtasks.component';
import { AsyncAwaitComponent } from './lesssion/async-await/async-await.component';
import { AsyncIterationComponent } from './lesssion/async-iteration/async-iteration.component';
import { GeneratorsComponent } from './lesssion/generators/generators.component';
import { ModulesComponent } from './lesssion/modules/modules.component';
import { ModulesDuctionComponent } from './lesssion/modules-duction/modules-duction.component';
import { ExportAndImportComponent } from './lesssion/export-and-import/export-and-import.component';
import { DynamicImportsComponent } from './lesssion/dynamic-imports/dynamic-imports.component';
import { InterviewComponent } from './lesssion/interview/interview.component';
import { InterviewOutoutBasedComponent } from './lesssion/interview-outout-based/interview-outout-based.component';
import { InterviewPatternBasedComponent } from './lesssion/interview-pattern-based/interview-pattern-based.component';

const routes: Routes = [
    { path: routeConfig?.empty, component: JavascriptDashboardComponent },
    {
        path: routeConfig?.version, component: LayoutComponent,
        children: [
            {
                path: jsTopics?.intro,
                children: [
                    { path: routeConfig?.empty, component: JavascriptIntroComponent },
                    { path: jsTopics?.manuals, component: ManualsComponent },
                    { path: jsTopics?.code_editors, component: CodeEditorsComponent },
                    { path: jsTopics?.developer_console, component: DeveloperConsoleComponent },
                ]
            },
            {
                path: jsTopics?.fundamentals,
                children: [
                    { path: routeConfig?.empty, component: FundamentalsComponent },
                    { path: jsTopics?.hello_world, component: HelloWorldComponent },
                    { path: jsTopics?.code_structure, component: CodeStructureComponent },
                    { path: jsTopics?.modern_mode, component: ModernModeComponent },
                    { path: jsTopics?.variables, component: VariablesComponent },
                    { path: jsTopics?.data_types, component: DataTypesComponent },
                    { path: jsTopics?.interaction_alert, component: InteractionAlertComponent },
                    { path: jsTopics?.type_conversions, component: TypeConversionsComponent },
                    { path: jsTopics?.basic_operators, component: BasicOperatorsComponent },
                    { path: jsTopics?.comparisons, component: ComparisonsComponent },
                    { path: jsTopics?.conditional_branching, component: ConditionalBranchingComponent },
                    { path: jsTopics?.logical_operators, component: LogicalOperatorsComponent },
                    { path: jsTopics?.nullish, component: NullishComponent },
                    { path: jsTopics?.loops, component: LoopsComponent },
                    { path: jsTopics?.switch, component: SwitchComponent },
                    { path: jsTopics?.functions, component: FunctionsComponent },
                    { path: jsTopics?.expressions, component: ExpressionsComponent },
                    { path: jsTopics?.arrow_functions, component: ArrowFunctionsComponent },
                    { path: jsTopics?.javaScript_specials, component: JavaScriptSpecialsComponent }
                ],
            },
            {
                path: jsTopics?.code_quality,
                children: [
                    { path: routeConfig?.empty, component: CodeQualityComponent },
                    { path: jsTopics?.debugging, component: DebuggingComponent },
                    { path: jsTopics?.comments, component: CommentsComponent },
                    { path: jsTopics?.automated, component: AutomatedComponent },
                    { path: jsTopics?.coding_style, component: CodingStyleComponent },
                    { path: jsTopics?.ninja_code, component: NinjaCodeComponent },
                    { path: jsTopics?.polyfills, component: PolyfillsComponent },
                ],
            },
            {
                path: jsTopics?.objects,
                children: [
                    { path: routeConfig?.empty, component: ObjectsComponent },
                    { path: jsTopics?.basics_objects, component: BasicsObjectsComponent },
                    { path: jsTopics?.object_methods, component: ObjectMethodsComponent },
                    { path: jsTopics?.symbol_type, component: SymbolTypeComponent },
                    { path: jsTopics?.object_references, component: ObjectReferencesComponent },
                    { path: jsTopics?.garbage_collection, component: GarbageCollectionComponent },
                    { path: jsTopics?.constructor, component: ConstructorComponent },
                    { path: jsTopics?.optional_chaining, component: OptionalChainingComponent },
                    { path: jsTopics?.primitive_conversion, component: PrimitiveConversionComponent },
                ],
            },
            {
                path: jsTopics?.primitives_data_types,
                children: [
                    { path: routeConfig?.empty, component: PrimitivesDataTypesComponent },
                    { path: jsTopics?.primitives, component: PrimitivesComponent },
                    { path: jsTopics?.numbers, component: NumbersComponent },
                    { path: jsTopics?.strings, component: StringsComponent },
                    { path: jsTopics?.arrays, component: ArraysComponent },
                    { path: jsTopics?.array_methods, component: ArrayMethodsComponent },
                    { path: jsTopics?.iterables, component: IterablesComponent },
                    { path: jsTopics?.map_and_set, component: MapAndSetComponent },
                    { path: jsTopics?.weakmap, component: WeakmapComponent },
                    { path: jsTopics?.values_entries, component: ValuesEntriesComponent },
                    { path: jsTopics?.destructuring, component: DestructuringComponent },
                    { path: jsTopics?.date_and_time, component: DateAndTimeComponent },
                    { path: jsTopics?.json_methods, component: JsonMethodsComponent },
                ],
            },
            {
                path: jsTopics?.advanced_working,
                children: [
                    { path: routeConfig?.empty, component: AdvancedWorkingComponent },
                    { path: jsTopics?.recursion_and_stack, component: RecursionAndStackComponent },
                    { path: jsTopics?.spread_syntax, component: SpreadSyntaxComponent },
                    { path: jsTopics?.variable_scope, component: VariableScopeComponent },
                    { path: jsTopics?.the_old, component: TheOldComponent },
                    { path: jsTopics?.global_object, component: GlobalObjectComponent },
                    { path: jsTopics?.function_object, component: FunctionObjectComponent },
                    { path: jsTopics?.new_function, component: NewFunctionComponent },
                    { path: jsTopics?.scheduling, component: SchedulingComponent },
                    { path: jsTopics?.decorators, component: DecoratorsComponent },
                    { path: jsTopics?.function_binding, component: FunctionBindingComponent },
                    { path: jsTopics?.arrow_revisited, component: ArrowRevisitedComponent },
                ],
            },
            {
                path: jsTopics?.configuration,
                children: [
                    { path: routeConfig?.empty, component: ConfigurationComponent },
                    { path: jsTopics?.flags_and_descriptors, component: FlagsAndDescriptorsComponent },
                    { path: jsTopics?.getters_and_setters, component: GettersAndSettersComponent },
                ],
            },
            {
                path: jsTopics?.prototypes,
                children: [
                    { path: routeConfig?.empty, component: PrototypeComponent },
                    { path: jsTopics?.prototypal, component: PrototypalComponent },
                    { path: jsTopics?.prototypes, component: PrototypesComponent },
                    { path: jsTopics?.native_prototypes, component: NativePrototypesComponent },
                    { path: jsTopics?.prototype_methods, component: PrototypeMethodsComponent },
                ],
            },
            {
                path: jsTopics?.classes,
                children: [
                    { path: routeConfig?.empty, component: ClassesComponent },
                    { path: jsTopics?.basic_syntax, component: BasicSyntaxComponent },
                    { path: jsTopics?.class_inheritance, component: ClassInheritanceComponent },
                    { path: jsTopics?.static_properties, component: StaticPropertiesComponent },
                    { path: jsTopics?.private_and_protected, component: PrivateAndProtectedComponent },
                    { path: jsTopics?.extending_built, component: ExtendingBuiltComponent },
                    { path: jsTopics?.class_checking, component: ClassCheckingComponent },
                    { path: jsTopics?.mixins, component: MixinsComponent },
                ],
            },
            {
                path: jsTopics?.error_handling,
                children: [
                    { path: routeConfig?.empty, component: JavascriptErrorHandlingComponent },
                    { path: jsTopics?.try_catch, component: TryCatchComponent },
                    { path: jsTopics?.extending_error, component: ExtendingErrorComponent },
                ],
            },
            {
                path: jsTopics?.promises,
                children: [
                    { path: routeConfig?.empty, component: PromisesComponent },
                    { path: jsTopics?.callbacks, component: CallbacksComponent },
                    { path: jsTopics?.promise, component: PromiseComponent },
                    { path: jsTopics?.promises_chaining, component: PromisesChainingComponent },
                    { path: jsTopics?.error_handling_with, component: ErrorHandlingWithComponent },
                    { path: jsTopics?.promise_API, component: PromiseAPIComponent },
                    { path: jsTopics?.promisification, component: PromisificationComponent },
                    { path: jsTopics?.microtasks, component: MicrotasksComponent },
                    { path: jsTopics?.async_await, component: AsyncAwaitComponent },
                ],
            },
            {
                path: jsTopics?.advanced_iteration,
                children: [
                    { path: routeConfig?.empty, component: AdvancedIterationComponent },
                    { path: jsTopics?.generators, component: GeneratorsComponent },
                    { path: jsTopics?.async_iteration, component: AsyncIterationComponent },
                ],
            },
            {
                path: jsTopics?.modules,
                children: [
                    { path: routeConfig?.empty, component: ModulesComponent },
                    { path: jsTopics?.modules_duction, component: ModulesDuctionComponent },
                    { path: jsTopics?.export_and_import, component: ExportAndImportComponent },
                    { path: jsTopics?.dynamic_imports, component: DynamicImportsComponent }
                ],
            },
            {
                path: jsTopics?.inter_views,
                children: [
                    { path: routeConfig?.empty, component: InterviewComponent },
                    { path: jsTopics?.inter_views_concept_based, component: InterviewComponent },
                    { path: jsTopics?.inter_views_output_based, component: InterviewOutoutBasedComponent },
                    { path: jsTopics?.inter_views_pattern_based, component: InterviewPatternBasedComponent }
                ],
            }
        ],
        data: { courceData: courceRoute?.javascript }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JavascriptRoutingModule { }
