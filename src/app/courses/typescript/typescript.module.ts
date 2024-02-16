import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { TypescriptRoutingModule } from './typescript-routing.module';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
import { InstallingTypeScriptComponent } from './lesssion/installing-type-script/installing-type-script.component';
import { VariablesComponent } from './lesssion/variables/variables.component';
import { DataTypesComponent } from './lesssion/data-types/data-types.component';
import { FunctionsComponent } from './lesssion/functions/functions.component';
import { DeclarationsComponent } from './lesssion/declarations/declarations.component';
import { ArrowFunctionsComponent } from './lesssion/arrow-functions/arrow-functions.component';
import { ParametersComponent } from './lesssion/parameters/parameters.component';
import { RestParametersComponent } from './lesssion/rest-parameters/rest-parameters.component';
import { TofixedFunctionComponent } from './lesssion/tofixed-function/tofixed-function.component';
import { TolocalestringFunctionComponent } from './lesssion/tolocalestring-function/tolocalestring-function.component';
import { ToprecisionFunctionComponent } from './lesssion/toprecision-function/toprecision-function.component';
import { InterfacesComponent } from './lesssion/interfaces/interfaces.component';
import { ObjectShapeComponent } from './lesssion/object-shape/object-shape.component';
import { OptionalPropertiesComponent } from './lesssion/optional-properties/optional-properties.component';
import { ReadonlyPropertiesComponent } from './lesssion/readonly-properties/readonly-properties.component';
import { ExtendingInterfacesComponent } from './lesssion/extending-interfaces/extending-interfaces.component';
import { InterfaceVsTypeAliasComponent } from './lesssion/interface-vs-type-alias/interface-vs-type-alias.component';
import { ClassesComponent } from './lesssion/classes/classes.component';
import { ConstructorsComponent } from './lesssion/constructors/constructors.component';
import { PropertiesComponent } from './lesssion/properties/properties.component';
import { MethodsComponent } from './lesssion/methods/methods.component';
import { InheritanceComponent } from './lesssion/inheritance/inheritance.component';
import { AccessModifiersComponent } from './lesssion/access-modifiers/access-modifiers.component';
import { GenericsComponent } from './lesssion/generics/generics.component';
import { GenericFunctionsComponent } from './lesssion/generic-functions/generic-functions.component';
import { GenericClassesComponent } from './lesssion/generic-classes/generic-classes.component';
import { GenericConstraintsComponent } from './lesssion/generic-constraints/generic-constraints.component';
import { TypeInferenceWithGenericsComponent } from './lesssion/type-inference-with-generics/type-inference-with-generics.component';
import { GenericUtilitiesComponent } from './lesssion/generic-utilities/generic-utilities.component';
import { EnumsComponent } from './lesssion/enums/enums.component';
import { NumericEnumsComponent } from './lesssion/numeric-enums/numeric-enums.component';
import { StringEnumsComponent } from './lesssion/string-enums/string-enums.component';
import { ComputedAndConstantMembersComponent } from './lesssion/computed-and-constant-members/computed-and-constant-members.component';
import { ReverseMappingComponent } from './lesssion/reverse-mapping/reverse-mapping.component';
import { ModulesComponent } from './lesssion/modules/modules.component';
import { ModuleBasicsComponent } from './lesssion/module-basics/module-basics.component';
import { ExportAndImportComponent } from './lesssion/export-and-import/export-and-import.component';
import { DefaultExportsComponent } from './lesssion/default-exports/default-exports.component';
import { NamespaceImportsComponent } from './lesssion/namespace-imports/namespace-imports.component';
import { ReExportingComponent } from './lesssion/re-exporting/re-exporting.component';
import { NamespacesComponent } from './lesssion/namespaces/namespaces.component';
import { NamespacesInTypeScriptComponent } from './lesssion/namespaces-in-type-script/namespaces-in-type-script.component';
import { NestedNamespacesComponent } from './lesssion/nested-namespaces/nested-namespaces.component';
import { DeclaringAmbientModulesComponent } from './lesssion/declaring-ambient-modules/declaring-ambient-modules.component';
import { MergingNamespacesComponent } from './lesssion/merging-namespaces/merging-namespaces.component';
import { DecoratorsComponent } from './lesssion/decorators/decorators.component';
import { IntroductionToDecoratorsComponent } from './lesssion/introduction-to-decorators/introduction-to-decorators.component';
import { ClassDecoratorsComponent } from './lesssion/class-decorators/class-decorators.component';
import { MethodDecoratorsComponent } from './lesssion/method-decorators/method-decorators.component';
import { PropertyDecoratorsComponent } from './lesssion/property-decorators/property-decorators.component';
import { ParameterDecoratorsComponent } from './lesssion/parameter-decorators/parameter-decorators.component';
import { DecoratorFactoriesComponent } from './lesssion/decorator-factories/decorator-factories.component';
import { MixinsComponent } from './lesssion/mixins/mixins.component';
import { MixinsInTypeScriptComponent } from './lesssion/mixins-in-type-script/mixins-in-type-script.component';
import { CompositionOverInheritanceComponent } from './lesssion/composition-over-inheritance/composition-over-inheritance.component';
import { TypeInferenceComponent } from './lesssion/type-inference/type-inference.component';
import { ContextualTypingComponent } from './lesssion/contextual-typing/contextual-typing.component';
import { BestCommonTypeComponent } from './lesssion/best-common-type/best-common-type.component';
import { TypeWideningAndNarrowingComponent } from './lesssion/type-widening-and-narrowing/type-widening-and-narrowing.component';
import { DefiniteAssignmentAssertionsComponent } from './lesssion/definite-assignment-assertions/definite-assignment-assertions.component';
import { TypeGuardsComponent } from './lesssion/type-guards/type-guards.component';
import { TypeofTypeGuardsComponent } from './lesssion/typeof-type-guards/typeof-type-guards.component';
import { InstanceofTypeGuardsComponent } from './lesssion/instanceof-type-guards/instanceof-type-guards.component';
import { UserDefinedTypeGuardsComponent } from './lesssion/user-defined-type-guards/user-defined-type-guards.component';
import { UnionAndIntersectionTypesComponent } from './lesssion/union-and-intersection-types/union-and-intersection-types.component';
import { UnionTypesComponent } from './lesssion/union-types/union-types.component';
import { IntersectionTypesComponent } from './lesssion/intersection-types/intersection-types.component';
import { DiscriminatedUnionsComponent } from './lesssion/discriminated-unions/discriminated-unions.component';
import { AdvancedTypesComponent } from './lesssion/advanced-types/advanced-types.component';
import { ConditionalTypesComponent } from './lesssion/conditional-types/conditional-types.component';
import { MappedTypesComponent } from './lesssion/mapped-types/mapped-types.component';
import { IndexTypesComponent } from './lesssion/index-types/index-types.component';
import { TupleTypesComponent } from './lesssion/tuple-types/tuple-types.component';
import { KeyofComponent } from './lesssion/keyof/keyof.component';
import { TypeofComponent } from './lesssion/typeof/typeof.component';
import { InferTypeComponent } from './lesssion/infer-type/infer-type.component';
import { PartialTypeComponent } from './lesssion/partial-type/partial-type.component';
import { RequiredTypeComponent } from './lesssion/required-type/required-type.component';
import { ExtractTypeComponent } from './lesssion/extract-type/extract-type.component';
import { ExcludeTypeComponent } from './lesssion/exclude-type/exclude-type.component';
import { DuckTypingComponent } from './lesssion/duck-typing/duck-typing.component';
import { UtilityTypeComponent } from './lesssion/utility-type/utility-type.component';
import { UtPartialTypeComponent } from './lesssion/ut-partial-type/ut-partial-type.component';
import { RecordTypeComponent } from './lesssion/record-type/record-type.component';
import { AwaitedTypeComponent } from './lesssion/awaited-type/awaited-type.component';
import { UtRequiredTypeComponent } from './lesssion/ut-required-type/ut-required-type.component';
import { OmitTypeComponent } from './lesssion/omit-type/omit-type.component';
import { PickTypeComponent } from './lesssion/pick-type/pick-type.component';
import { UtExtractTypeComponent } from './lesssion/ut-extract-type/ut-extract-type.component';
import { CapitalizeTypeComponent } from './lesssion/capitalize-type/capitalize-type.component';
import { LowercaseTypeComponent } from './lesssion/lowercase-type/lowercase-type.component';
import { ConstructorParametersTypeComponent } from './lesssion/constructor-parameters-type/constructor-parameters-type.component';
import { ReturntypeComponent } from './lesssion/returntype/returntype.component';
import { CreatingTypesComponent } from './lesssion/creating-types/creating-types.component';
import { UtExcludeTypeComponent } from './lesssion/ut-exclude-type/ut-exclude-type.component';
import { UncapitalizeTypeComponent } from './lesssion/uncapitalize-type/uncapitalize-type.component';
import { OoProgrammingComponent } from './lesssion/oo-programming/oo-programming.component';
import { ClassesObjectsComponent } from './lesssion/classes-objects/classes-objects.component';
import { StandaloneObjectsComponent } from './lesssion/standalone-objects/standalone-objects.component';
import { OoConstructorsComponent } from './lesssion/oo-constructors/oo-constructors.component';
import { PropertyModifiersComponent } from './lesssion/property-modifiers/property-modifiers.component';
import { OoAccessModifiersComponent } from './lesssion/oo-access-modifiers/oo-access-modifiers.component';
import { ParameterPropertiesComponent } from './lesssion/parameter-properties/parameter-properties.component';
import { GettersSettersComponent } from './lesssion/getters-setters/getters-setters.component';
import { StaticMethodsComponent } from './lesssion/static-methods/static-methods.component';
import { IndexSignaturesComponent } from './lesssion/index-signatures/index-signatures.component';
import { OoInheritanceComponent } from './lesssion/oo-inheritance/oo-inheritance.component';
import { CompositionComponent } from './lesssion/composition/composition.component';
import { OoInterfacesComponent } from './lesssion/oo-interfaces/oo-interfaces.component';
import { MethodsMComponent } from './lesssion/methods-m/methods-m.component';
import { ValueOfMethodComponent } from './lesssion/value-of-method/value-of-method.component';
import { TostringMethodComponent } from './lesssion/tostring-method/tostring-method.component';
import { ToexponentialMethodComponent } from './lesssion/toexponential-method/toexponential-method.component';
import { MethodOverridingComponent } from './lesssion/method-overriding/method-overriding.component';
import { ArrayMethodsComponent } from './lesssion/array-methods/array-methods.component';
import { StringMethodsComponent } from './lesssion/string-methods/string-methods.component';
import { ObjectMethodsComponent } from './lesssion/object-methods/object-methods.component';
import { AdvanceComponent } from './lesssion/advance/advance.component';
import { GenericObjectTypesComponent } from './lesssion/generic-object-types/generic-object-types.component';
import { CallSignaturesComponent } from './lesssion/call-signatures/call-signatures.component';
import { DeclaringThisInFunctionComponent } from './lesssion/declaring-this-in-function/declaring-this-in-function.component';
import { ConstraintsComponent } from './lesssion/constraints/constraints.component';
import { ConstructSignaturesComponent } from './lesssion/construct-signatures/construct-signatures.component';
import { GenericParameterDefaultsComponent } from './lesssion/generic-parameter-defaults/generic-parameter-defaults.component';
import { UnknownFunctionComponent } from './lesssion/unknown-function/unknown-function.component';
import { NonNullAssertionComponent } from './lesssion/non-null-assertion/non-null-assertion.component';
import { ObjectTypeOptionalComponent } from './lesssion/object-type-optional/object-type-optional.component';
import { StrictnullchecksOnTypeComponent } from './lesssion/strictnullchecks-on-type/strictnullchecks-on-type.component';
import { StrictnullchecksOffTypeComponent } from './lesssion/strictnullchecks-off-type/strictnullchecks-off-type.component';
import { AccessorComponent } from './lesssion/accessor/accessor.component';
import { AmbientsDeclarationComponent } from './lesssion/ambients-declaration/ambients-declaration.component';
import { ExhaustivenessCheckingComponent } from './lesssion/exhaustiveness-checking/exhaustiveness-checking.component';
import { WritingGoodOverloadsComponent } from './lesssion/writing-good-overloads/writing-good-overloads.component';
import { AliasesTypeComponent } from './lesssion/aliases-type/aliases-type.component';
import { SpecifyingTypeArgumentsComponent } from './lesssion/specifying-type-arguments/specifying-type-arguments.component';
import { LiteralInferenceTypeComponent } from './lesssion/literal-inference-type/literal-inference-type.component';
import { InterfacesTypeComponent } from './lesssion/interfaces-type/interfaces-type.component';
import { ReturnTypeVoidComponent } from './lesssion/return-type-void/return-type-void.component';


@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent,
    InstallingTypeScriptComponent,
    VariablesComponent,
    DataTypesComponent,
    FunctionsComponent,
    DeclarationsComponent,
    ArrowFunctionsComponent,
    ParametersComponent,
    RestParametersComponent,
    TofixedFunctionComponent,
    TolocalestringFunctionComponent,
    ToprecisionFunctionComponent,
    InterfacesComponent,
    ObjectShapeComponent,
    OptionalPropertiesComponent,
    ReadonlyPropertiesComponent,
    ExtendingInterfacesComponent,
    InterfaceVsTypeAliasComponent,
    ClassesComponent,
    ConstructorsComponent,
    PropertiesComponent,
    MethodsComponent,
    InheritanceComponent,
    AccessModifiersComponent,
    GenericsComponent,
    GenericFunctionsComponent,
    GenericClassesComponent,
    GenericConstraintsComponent,
    TypeInferenceWithGenericsComponent,
    GenericUtilitiesComponent,
    EnumsComponent,
    NumericEnumsComponent,
    StringEnumsComponent,
    ComputedAndConstantMembersComponent,
    ReverseMappingComponent,
    ModulesComponent,
    ModuleBasicsComponent,
    ExportAndImportComponent,
    DefaultExportsComponent,
    NamespaceImportsComponent,
    ReExportingComponent,
    NamespacesComponent,
    NamespacesInTypeScriptComponent,
    NestedNamespacesComponent,
    DeclaringAmbientModulesComponent,
    MergingNamespacesComponent,
    DecoratorsComponent,
    IntroductionToDecoratorsComponent,
    ClassDecoratorsComponent,
    MethodDecoratorsComponent,
    PropertyDecoratorsComponent,
    ParameterDecoratorsComponent,
    DecoratorFactoriesComponent,
    MixinsComponent,
    MixinsInTypeScriptComponent,
    CompositionOverInheritanceComponent,
    TypeInferenceComponent,
    ContextualTypingComponent,
    BestCommonTypeComponent,
    TypeWideningAndNarrowingComponent,
    DefiniteAssignmentAssertionsComponent,
    TypeGuardsComponent,
    TypeofTypeGuardsComponent,
    InstanceofTypeGuardsComponent,
    UserDefinedTypeGuardsComponent,
    UnionAndIntersectionTypesComponent,
    UnionTypesComponent,
    IntersectionTypesComponent,
    DiscriminatedUnionsComponent,
    AdvancedTypesComponent,
    ConditionalTypesComponent,
    MappedTypesComponent,
    IndexTypesComponent,
    TupleTypesComponent,
    KeyofComponent,
    TypeofComponent,
    InferTypeComponent,
    PartialTypeComponent,
    RequiredTypeComponent,
    ExtractTypeComponent,
    ExcludeTypeComponent,
    DuckTypingComponent,
    UtilityTypeComponent,
    UtPartialTypeComponent,
    RecordTypeComponent,
    AwaitedTypeComponent,
    UtRequiredTypeComponent,
    OmitTypeComponent,
    PickTypeComponent,
    UtExtractTypeComponent,
    CapitalizeTypeComponent,
    LowercaseTypeComponent,
    ConstructorParametersTypeComponent,
    ReturntypeComponent,
    CreatingTypesComponent,
    UtExcludeTypeComponent,
    UncapitalizeTypeComponent,
    OoProgrammingComponent,
    ClassesObjectsComponent,
    StandaloneObjectsComponent,
    OoConstructorsComponent,
    PropertyModifiersComponent,
    OoAccessModifiersComponent,
    ParameterPropertiesComponent,
    GettersSettersComponent,
    StaticMethodsComponent,
    IndexSignaturesComponent,
    OoInheritanceComponent,
    CompositionComponent,
    OoInterfacesComponent,
    MethodsMComponent,
    ValueOfMethodComponent,
    TostringMethodComponent,
    ToexponentialMethodComponent,
    MethodOverridingComponent,
    ArrayMethodsComponent,
    StringMethodsComponent,
    ObjectMethodsComponent,
    AdvanceComponent,
    GenericObjectTypesComponent,
    CallSignaturesComponent,
    DeclaringThisInFunctionComponent,
    ConstraintsComponent,
    ConstructSignaturesComponent,
    GenericParameterDefaultsComponent,
    UnknownFunctionComponent,
    NonNullAssertionComponent,
    ObjectTypeOptionalComponent,
    StrictnullchecksOnTypeComponent,
    StrictnullchecksOffTypeComponent,
    AccessorComponent,
    AmbientsDeclarationComponent,
    ExhaustivenessCheckingComponent,
    WritingGoodOverloadsComponent,
    AliasesTypeComponent,
    SpecifyingTypeArgumentsComponent,
    LiteralInferenceTypeComponent,
    InterfacesTypeComponent,
    ReturnTypeVoidComponent
  ],
  imports: [
    CommonModule,
    TypescriptRoutingModule,
    ContentboxComponent
  ]
})
export class TypescriptModule { }
