import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
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
import { ExpressionsComponent } from './lesssion/expressions/expressions.component';
import { ArrowFunctionsComponent } from './lesssion/arrow-functions/arrow-functions.component';
import { JavaScriptSpecialsComponent } from './lesssion/java-script-specials/java-script-specials.component';
import { CodeQualityComponent } from './lesssion/code-quality/code-quality.component';
import { DebuggingComponent } from './lesssion/debugging/debugging.component';
import { CommentsComponent } from './lesssion/comments/comments.component';
import { AutomatedComponent } from './lesssion/automated/automated.component';
import { CodingStyleComponent } from './lesssion/coding-style/coding-style.component';
import { NinjaCodeComponent } from './lesssion/ninja-code/ninja-code.component';
import { PolyfillsComponent } from './lesssion/polyfills/polyfills.component';
import { ObjectsComponent } from './lesssion/objects/objects.component';
import { BasicsObjectsComponent } from './lesssion/basics-objects/basics-objects.component';
import { ObjectMethodsComponent } from './lesssion/object-methods/object-methods.component';
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
import { SpreadSyntaxComponent } from './lesssion/spread-syntax/spread-syntax.component';
import { VariableScopeComponent } from './lesssion/variable-scope/variable-scope.component';
import { TheOldComponent } from './lesssion/the-old/the-old.component';
import { GlobalObjectComponent } from './lesssion/global-object/global-object.component';
import { FunctionObjectComponent } from './lesssion/function-object/function-object.component';
import { NewFunctionComponent } from './lesssion/new-function/new-function.component';
import { SchedulingComponent } from './lesssion/scheduling/scheduling.component';
import { DecoratorsComponent } from './lesssion/decorators/decorators.component';
import { FunctionBindingComponent } from './lesssion/function-binding/function-binding.component';
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
import { BasicSyntaxComponent } from './lesssion/basic-syntax/basic-syntax.component';
import { ClassInheritanceComponent } from './lesssion/class-inheritance/class-inheritance.component';
import { StaticPropertiesComponent } from './lesssion/static-properties/static-properties.component';
import { PrivateAndProtectedComponent } from './lesssion/private-and-protected/private-and-protected.component';
import { ExtendingBuiltComponent } from './lesssion/extending-built/extending-built.component';
import { ClassCheckingComponent } from './lesssion/class-checking/class-checking.component';
import { MixinsComponent } from './lesssion/mixins/mixins.component';
import { ErrorHandlingComponent } from './lesssion/error-handling/error-handling.component';
import { TryCatchComponent } from './lesssion/try-catch/try-catch.component';
import { ExtendingErrorComponent } from './lesssion/extending-error/extending-error.component';
import { PromisesComponent } from './lesssion/promises/promises.component';
import { CallbacksComponent } from './lesssion/callbacks/callbacks.component';
import { PromiseComponent } from './lesssion/promise/promise.component';
import { PromisesChainingComponent } from './lesssion/promises-chaining/promises-chaining.component';
import { ErrorHandlingWithComponent } from './lesssion/error-handling-with/error-handling-with.component';
import { PromiseAPIComponent } from './lesssion/promise-api/promise-api.component';
import { PromisificationComponent } from './lesssion/promisification/promisification.component';
import { MicrotasksComponent } from './lesssion/microtasks/microtasks.component';
import { AsyncAwaitComponent } from './lesssion/async-await/async-await.component';
import { AdvancedIterationComponent } from './lesssion/advanced-iteration/advanced-iteration.component';
import { GeneratorsComponent } from './lesssion/generators/generators.component';
import { AsyncIterationComponent } from './lesssion/async-iteration/async-iteration.component';
import { ModulesComponent } from './lesssion/modules/modules.component';
import { ModulesDuctionComponent } from './lesssion/modules-duction/modules-duction.component';
import { ExportAndImportComponent } from './lesssion/export-and-import/export-and-import.component';
import { DynamicImportsComponent } from './lesssion/dynamic-imports/dynamic-imports.component';
import { PrismcodeComponent } from 'src/app/shared/components/prismcode/prismcode.component';

@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent,
    ManualsComponent,
    CodeEditorsComponent,
    DeveloperConsoleComponent,
    FundamentalsComponent,
    HelloWorldComponent,
    CodeStructureComponent,
    ModernModeComponent,
    VariablesComponent,
    DataTypesComponent,
    InteractionAlertComponent,
    TypeConversionsComponent,
    BasicOperatorsComponent,
    ComparisonsComponent,
    ConditionalBranchingComponent,
    LogicalOperatorsComponent,
    NullishComponent,
    LoopsComponent,
    SwitchComponent,
    FunctionsComponent,
    ExpressionsComponent,
    ArrowFunctionsComponent,
    JavaScriptSpecialsComponent,
    CodeQualityComponent,
    DebuggingComponent,
    CommentsComponent,
    AutomatedComponent,
    CodingStyleComponent,
    NinjaCodeComponent,
    PolyfillsComponent,
    ObjectsComponent,
    BasicsObjectsComponent,
    ObjectMethodsComponent,
    SymbolTypeComponent,
    ObjectReferencesComponent,
    GarbageCollectionComponent,
    ConstructorComponent,
    OptionalChainingComponent,
    PrimitiveConversionComponent,
    PrimitivesDataTypesComponent,
    PrimitivesComponent,
    NumbersComponent,
    StringsComponent,
    ArraysComponent,
    ArrayMethodsComponent,
    IterablesComponent,
    MapAndSetComponent,
    WeakmapComponent,
    ValuesEntriesComponent,
    DestructuringComponent,
    DateAndTimeComponent,
    JsonMethodsComponent,
    AdvancedWorkingComponent,
    RecursionAndStackComponent,
    SpreadSyntaxComponent,
    VariableScopeComponent,
    TheOldComponent,
    GlobalObjectComponent,
    FunctionObjectComponent,
    NewFunctionComponent,
    SchedulingComponent,
    DecoratorsComponent,
    FunctionBindingComponent,
    ArrowRevisitedComponent,
    ConfigurationComponent,
    FlagsAndDescriptorsComponent,
    GettersAndSettersComponent,
    PrototypesComponent,
    PrototypalComponent,
    PrototypeComponent,
    NativePrototypesComponent,
    PrototypeMethodsComponent,
    ClassesComponent,
    BasicSyntaxComponent,
    ClassInheritanceComponent,
    StaticPropertiesComponent,
    PrivateAndProtectedComponent,
    ExtendingBuiltComponent,
    ClassCheckingComponent,
    MixinsComponent,
    ErrorHandlingComponent,
    TryCatchComponent,
    ExtendingErrorComponent,
    PromisesComponent,
    CallbacksComponent,
    PromiseComponent,
    PromisesChainingComponent,
    ErrorHandlingWithComponent,
    PromiseAPIComponent,
    PromisificationComponent,
    MicrotasksComponent,
    AsyncAwaitComponent,
    AdvancedIterationComponent,
    GeneratorsComponent,
    AsyncIterationComponent,
    ModulesComponent,
    ModulesDuctionComponent,
    ExportAndImportComponent,
    DynamicImportsComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    ContentboxComponent,
    PrismcodeComponent
  ]
})
export class JavascriptModule { }
