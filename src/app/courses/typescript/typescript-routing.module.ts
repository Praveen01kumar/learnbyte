import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptDashboardComponent } from './dashboard/dashboard.component';
import { TypescriptIntroComponent } from './lesssion/intro/intro.component';
import { courceRoute, routeConfig, tsTopics } from 'src/app/shared/const/const';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { InstallingTypeScriptComponent } from './lesssion/installing-type-script/installing-type-script.component';
import { TypescriptVariablesComponent } from './lesssion/variables/variables.component';
import { TypescriptDataTypesComponent } from './lesssion/data-types/data-types.component';
import { TypescriptFunctionsComponent } from './lesssion/functions/functions.component';
import { TypescriptDeclarationsComponent } from './lesssion/declarations/declarations.component';
import { TypescriptArrowFunctionsComponent } from './lesssion/arrow-functions/arrow-functions.component';
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
import { TypescriptClassesComponent } from './lesssion/classes/classes.component';
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
import { TypescriptModulesComponent } from './lesssion/modules/modules.component';
import { ModuleBasicsComponent } from './lesssion/module-basics/module-basics.component';
import { TypescriptExportAndImportComponent } from './lesssion/export-and-import/export-and-import.component';
import { DefaultExportsComponent } from './lesssion/default-exports/default-exports.component';
import { NamespaceImportsComponent } from './lesssion/namespace-imports/namespace-imports.component';
import { ReExportingComponent } from './lesssion/re-exporting/re-exporting.component';
import { NamespacesComponent } from './lesssion/namespaces/namespaces.component';
import { NamespacesInTypeScriptComponent } from './lesssion/namespaces-in-type-script/namespaces-in-type-script.component';
import { NestedNamespacesComponent } from './lesssion/nested-namespaces/nested-namespaces.component';
import { DeclaringAmbientModulesComponent } from './lesssion/declaring-ambient-modules/declaring-ambient-modules.component';
import { MergingNamespacesComponent } from './lesssion/merging-namespaces/merging-namespaces.component';
import { TypescriptDecoratorsComponent } from './lesssion/decorators/decorators.component';
import { IntroductionToDecoratorsComponent } from './lesssion/introduction-to-decorators/introduction-to-decorators.component';
import { ClassDecoratorsComponent } from './lesssion/class-decorators/class-decorators.component';
import { MethodDecoratorsComponent } from './lesssion/method-decorators/method-decorators.component';
import { PropertyDecoratorsComponent } from './lesssion/property-decorators/property-decorators.component';
import { ParameterDecoratorsComponent } from './lesssion/parameter-decorators/parameter-decorators.component';
import { DecoratorFactoriesComponent } from './lesssion/decorator-factories/decorator-factories.component';
import { TypescriptMixinsComponent } from './lesssion/mixins/mixins.component';
import { CompositionOverInheritanceComponent } from './lesssion/composition-over-inheritance/composition-over-inheritance.component';
import { MixinsInTypeScriptComponent } from './lesssion/mixins-in-type-script/mixins-in-type-script.component';
import { TypeInferenceComponent } from './lesssion/type-inference/type-inference.component';
import { ContextualTypingComponent } from './lesssion/contextual-typing/contextual-typing.component';
import { BestCommonTypeComponent } from './lesssion/best-common-type/best-common-type.component';
import { TypeWideningAndNarrowingComponent } from './lesssion/type-widening-and-narrowing/type-widening-and-narrowing.component';
import { DefiniteAssignmentAssertionsComponent } from './lesssion/definite-assignment-assertions/definite-assignment-assertions.component';
import { TypeGuardsComponent } from './lesssion/type-guards/type-guards.component';
import { TypeofTypeGuardsComponent } from './lesssion/typeof-type-guards/typeof-type-guards.component';
import { UserDefinedTypeGuardsComponent } from './lesssion/user-defined-type-guards/user-defined-type-guards.component';
import { InstanceofTypeGuardsComponent } from './lesssion/instanceof-type-guards/instanceof-type-guards.component';
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
import { ExtractTypeComponent } from './lesssion/extract-type/extract-type.component';
import { RequiredTypeComponent } from './lesssion/required-type/required-type.component';
import { DuckTypingComponent } from './lesssion/duck-typing/duck-typing.component';
import { ExcludeTypeComponent } from './lesssion/exclude-type/exclude-type.component';
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
import { PropertyModifiersComponent } from './lesssion/property-modifiers/property-modifiers.component';
import { OoConstructorsComponent } from './lesssion/oo-constructors/oo-constructors.component';
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
import { TypescriptArrayMethodsComponent } from './lesssion/array-methods/array-methods.component';
import { StringMethodsComponent } from './lesssion/string-methods/string-methods.component';
import { TypescriptObjectMethodsComponent } from './lesssion/object-methods/object-methods.component';
import { AdvanceComponent } from './lesssion/advance/advance.component';
import { GenericObjectTypesComponent } from './lesssion/generic-object-types/generic-object-types.component';
import { CallSignaturesComponent } from './lesssion/call-signatures/call-signatures.component';
import { DeclaringThisInFunctionComponent } from './lesssion/declaring-this-in-function/declaring-this-in-function.component';
import { ConstraintsComponent } from './lesssion/constraints/constraints.component';
import { ConstructSignaturesComponent } from './lesssion/construct-signatures/construct-signatures.component';
import { UnknownFunctionComponent } from './lesssion/unknown-function/unknown-function.component';
import { GenericParameterDefaultsComponent } from './lesssion/generic-parameter-defaults/generic-parameter-defaults.component';
import { ObjectTypeOptionalComponent } from './lesssion/object-type-optional/object-type-optional.component';
import { StrictnullchecksOnTypeComponent } from './lesssion/strictnullchecks-on-type/strictnullchecks-on-type.component';
import { NonNullAssertionComponent } from './lesssion/non-null-assertion/non-null-assertion.component';
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

const routes: Routes = [
    { path: routeConfig?.empty, component: TypescriptDashboardComponent },
    {
        path: routeConfig?.version, component: LayoutComponent,
        children: [
            {
                path: tsTopics?.tsintro,
                children: [
                    { path: routeConfig?.empty, component: TypescriptIntroComponent },
                    { path: tsTopics?.installing_typeScript, component: InstallingTypeScriptComponent },
                    { path: tsTopics?.variables, component: TypescriptVariablesComponent },
                ],
            },
            {
                path: tsTopics?.data_types,
                children: [
                    { path: routeConfig?.empty, component: TypescriptDataTypesComponent },
                ],
            },
            {
                path: tsTopics?.functions,
                children: [
                    { path: routeConfig?.empty, component: TypescriptFunctionsComponent },
                    { path: tsTopics?.declarations, component: TypescriptDeclarationsComponent },
                    { path: tsTopics?.arrow_functions, component: TypescriptArrowFunctionsComponent },
                    { path: tsTopics?.parameters, component: ParametersComponent },
                    { path: tsTopics?.rest_parameters, component: RestParametersComponent },
                    { path: tsTopics?.tofixed_function, component: TofixedFunctionComponent },
                    { path: tsTopics?.tolocalestring_function, component: TolocalestringFunctionComponent },
                    { path: tsTopics?.toprecision_function, component: ToprecisionFunctionComponent },
                ],
            },
            {
                path: tsTopics?.interfaces,
                children: [
                    { path: routeConfig?.empty, component: InterfacesComponent },
                    { path: tsTopics?.object_shape, component: ObjectShapeComponent },
                    { path: tsTopics?.optional_properties, component: OptionalPropertiesComponent },
                    { path: tsTopics?.readonly_properties, component: ReadonlyPropertiesComponent },
                    { path: tsTopics?.extending_interfaces, component: ExtendingInterfacesComponent },
                    { path: tsTopics?.interface_vs_type_alias, component: InterfaceVsTypeAliasComponent },
                ],
            },
            {
                path: tsTopics?.classes,
                children: [
                    { path: routeConfig?.empty, component: TypescriptClassesComponent },
                    { path: tsTopics?.constructors, component: ConstructorsComponent },
                    { path: tsTopics?.properties, component: PropertiesComponent },
                    { path: tsTopics?.methods, component: MethodsComponent },
                    { path: tsTopics?.inheritance, component: InheritanceComponent },
                    { path: tsTopics?.access_modifiers, component: AccessModifiersComponent },
                ],
            },
            {
                path: tsTopics?.generics,
                children: [
                    { path: routeConfig?.empty, component: GenericsComponent },
                    { path: tsTopics?.generic_functions, component: GenericFunctionsComponent },
                    { path: tsTopics?.generic_classes, component: GenericClassesComponent },
                    { path: tsTopics?.generic_constraints, component: GenericConstraintsComponent },
                    { path: tsTopics?.type_inference_with_generics, component: TypeInferenceWithGenericsComponent },
                    { path: tsTopics?.generic_utilities, component: GenericUtilitiesComponent },
                ],
            }, {
                path: tsTopics?.enums,
                children: [
                    { path: routeConfig?.empty, component: EnumsComponent },
                    { path: tsTopics?.numeric_enums, component: NumericEnumsComponent },
                    { path: tsTopics?.string_enums, component: StringEnumsComponent },
                    { path: tsTopics?.computed_and_constant_members, component: ComputedAndConstantMembersComponent },
                    { path: tsTopics?.reverse_mapping, component: ReverseMappingComponent },
                ],
            },
            {
                path: tsTopics?.modules,
                children: [
                    { path: routeConfig?.empty, component: TypescriptModulesComponent },
                    { path: tsTopics?.module_basics, component: ModuleBasicsComponent },
                    { path: tsTopics?.export_and_import, component: TypescriptExportAndImportComponent },
                    { path: tsTopics?.default_exports, component: DefaultExportsComponent },
                    { path: tsTopics?.namespace_imports, component: NamespaceImportsComponent },
                    { path: tsTopics?.re_exporting, component: ReExportingComponent },
                ],
            },
            {
                path: tsTopics?.namespaces,
                children: [
                    { path: routeConfig?.empty, component: NamespacesComponent },
                    { path: tsTopics?.namespaces_in_typeScript, component: NamespacesInTypeScriptComponent },
                    { path: tsTopics?.nested_namespaces, component: NestedNamespacesComponent },
                    { path: tsTopics?.declaring_ambient_modules, component: DeclaringAmbientModulesComponent },
                    { path: tsTopics?.merging_namespaces, component: MergingNamespacesComponent },
                ],
            },
            {
                path: tsTopics?.decorators,
                children: [
                    { path: routeConfig?.empty, component: TypescriptDecoratorsComponent },
                    { path: tsTopics?.introduction_to_decorators, component: IntroductionToDecoratorsComponent },
                    { path: tsTopics?.class_decorators, component: ClassDecoratorsComponent },
                    { path: tsTopics?.method_decorators, component: MethodDecoratorsComponent },
                    { path: tsTopics?.property_decorators, component: PropertyDecoratorsComponent },
                    { path: tsTopics?.parameter_decorators, component: ParameterDecoratorsComponent },
                    { path: tsTopics?.decorator_factories, component: DecoratorFactoriesComponent },
                ],
            },
            {
                path: tsTopics?.mixins,
                children: [
                    { path: routeConfig?.empty, component: TypescriptMixinsComponent },
                    { path: tsTopics?.mixins_in_typeScript, component: MixinsInTypeScriptComponent },
                    { path: tsTopics?.composition_over_inheritance, component: CompositionOverInheritanceComponent },
                ],
            },
            {
                path: tsTopics?.type_inference,
                children: [
                    { path: routeConfig?.empty, component: TypeInferenceComponent },
                    { path: tsTopics?.contextual_typing, component: ContextualTypingComponent },
                    { path: tsTopics?.best_common_type, component: BestCommonTypeComponent },
                    { path: tsTopics?.type_widening_and_narrowing, component: TypeWideningAndNarrowingComponent },
                    { path: tsTopics?.definite_assignment_assertions, component: DefiniteAssignmentAssertionsComponent },
                ],
            },
            {
                path: tsTopics?.type_guards,
                children: [
                    { path: routeConfig?.empty, component: TypeGuardsComponent },
                    { path: tsTopics?.typeof_type_guards, component: TypeofTypeGuardsComponent },
                    { path: tsTopics?.instanceof_type_guards, component: InstanceofTypeGuardsComponent },
                    { path: tsTopics?.user_defined_type_guards, component: UserDefinedTypeGuardsComponent },
                ],
            },
            {
                path: tsTopics?.union_and_intersection_types,
                children: [
                    { path: routeConfig?.empty, component: UnionAndIntersectionTypesComponent },
                    { path: tsTopics?.union_types, component: UnionTypesComponent },
                    { path: tsTopics?.intersection_types, component: IntersectionTypesComponent },
                    { path: tsTopics?.discriminated_unions, component: DiscriminatedUnionsComponent },
                ],
            },
            {
                path: tsTopics?.advanced_types,
                children: [
                    { path: routeConfig?.empty, component: AdvancedTypesComponent },
                    { path: tsTopics?.conditional_types, component: ConditionalTypesComponent },
                    { path: tsTopics?.mapped_types, component: MappedTypesComponent },
                    { path: tsTopics?.index_types, component: IndexTypesComponent },
                    { path: tsTopics?.tuple_types, component: TupleTypesComponent },
                    { path: tsTopics?.keyof, component: KeyofComponent },
                    { path: tsTopics?.typeof, component: TypeofComponent },
                    { path: tsTopics?.infer_type, component: InferTypeComponent },
                    { path: tsTopics?.partial_type, component: PartialTypeComponent },
                    { path: tsTopics?.required_type, component: RequiredTypeComponent },
                    { path: tsTopics?.extract_type, component: ExtractTypeComponent },
                    { path: tsTopics?.exclude_type, component: ExcludeTypeComponent },
                    { path: tsTopics?.duck_typing, component: DuckTypingComponent },
                ],
            },
            {
                path: tsTopics?.utility_type,
                children: [
                    { path: routeConfig?.empty, component: UtilityTypeComponent },
                    { path: tsTopics?.ut_partial_type, component: UtPartialTypeComponent },
                    { path: tsTopics?.record_type, component: RecordTypeComponent },
                    { path: tsTopics?.awaited_type, component: AwaitedTypeComponent },
                    { path: tsTopics?.ut_required_type, component: UtRequiredTypeComponent },
                    { path: tsTopics?.omit_type, component: OmitTypeComponent },
                    { path: tsTopics?.pick_type, component: PickTypeComponent },
                    { path: tsTopics?.ut_extract_type, component: UtExtractTypeComponent },
                    { path: tsTopics?.capitalize_type, component: CapitalizeTypeComponent },
                    { path: tsTopics?.lowercase_type, component: LowercaseTypeComponent },
                    { path: tsTopics?.constructorParameters_type, component: ConstructorParametersTypeComponent },
                    { path: tsTopics?.returntype, component: ReturntypeComponent },
                    { path: tsTopics?.creating_types, component: CreatingTypesComponent },
                    { path: tsTopics?.ut_exclude_type, component: UtExcludeTypeComponent },
                    { path: tsTopics?.uncapitalize_type, component: UncapitalizeTypeComponent },
                ],
            },
            {
                path: tsTopics?.oo_programming,
                children: [
                    { path: routeConfig?.empty, component: OoProgrammingComponent },
                    { path: tsTopics?.classes_objects, component: ClassesObjectsComponent },
                    { path: tsTopics?.standalone_objects, component: StandaloneObjectsComponent },
                    { path: tsTopics?.oo_constructors, component: OoConstructorsComponent },
                    { path: tsTopics?.property_modifiers, component: PropertyModifiersComponent },
                    { path: tsTopics?.oo_access_modifiers, component: OoAccessModifiersComponent },
                    { path: tsTopics?.parameter_properties, component: ParameterPropertiesComponent },
                    { path: tsTopics?.getters_setters, component: GettersSettersComponent },
                    { path: tsTopics?.static_methods, component: StaticMethodsComponent },
                    { path: tsTopics?.index_signatures, component: IndexSignaturesComponent },
                    { path: tsTopics?.oo_inheritance, component: OoInheritanceComponent },
                    { path: tsTopics?.composition, component: CompositionComponent },
                    { path: tsTopics?.oo_interfaces, component: OoInterfacesComponent },
                ],
            },
            {
                path: tsTopics?.methods_m,
                children: [
                    { path: routeConfig?.empty, component: MethodsMComponent },
                    { path: tsTopics?.valueOf_method, component: ValueOfMethodComponent },
                    { path: tsTopics?.tostring_method, component: TostringMethodComponent },
                    { path: tsTopics?.toexponential_method, component: ToexponentialMethodComponent },
                    { path: tsTopics?.method_overriding, component: MethodOverridingComponent },
                    { path: tsTopics?.array_methods, component: TypescriptArrayMethodsComponent },
                    { path: tsTopics?.string_methods, component: StringMethodsComponent },
                    { path: tsTopics?.object_methods, component: TypescriptObjectMethodsComponent },
                ],
            },
            {
                path: tsTopics?.advance,
                children: [
                    { path: routeConfig?.empty, component: AdvanceComponent },
                    { path: tsTopics?.generic_object_types, component: GenericObjectTypesComponent },
                    { path: tsTopics?.call_signatures, component: CallSignaturesComponent },
                    { path: tsTopics?.declaring_this_in_function, component: DeclaringThisInFunctionComponent },
                    { path: tsTopics?.constraints, component: ConstraintsComponent },
                    { path: tsTopics?.construct_signatures, component: ConstructSignaturesComponent },
                    { path: tsTopics?.generic_parameter_defaults, component: GenericParameterDefaultsComponent },
                    { path: tsTopics?.unknown_function, component: UnknownFunctionComponent },
                    { path: tsTopics?.non_null_assertion, component: NonNullAssertionComponent },
                    { path: tsTopics?.object_type_optional, component: ObjectTypeOptionalComponent },
                    { path: tsTopics?.strictnullchecks_on_type, component: StrictnullchecksOnTypeComponent },
                    { path: tsTopics?.strictnullchecks_off_type, component: StrictnullchecksOffTypeComponent },
                    { path: tsTopics?.accessor, component: AccessorComponent },
                    { path: tsTopics?.ambients_declaration, component: AmbientsDeclarationComponent },
                    { path: tsTopics?.exhaustiveness_checking, component: ExhaustivenessCheckingComponent },
                    { path: tsTopics?.writing_good_overloads, component: WritingGoodOverloadsComponent },
                    { path: tsTopics?.aliases_type, component: AliasesTypeComponent },
                    { path: tsTopics?.specifying_type_arguments, component: SpecifyingTypeArgumentsComponent },
                    { path: tsTopics?.literal_inference_type, component: LiteralInferenceTypeComponent },
                    { path: tsTopics?.interfaces_type, component: InterfacesTypeComponent },
                    { path: tsTopics?.return_type_void, component: ReturnTypeVoidComponent },
                ],
            },
        ],
        data: { courceData: courceRoute?.typescript }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypescriptRoutingModule { }
