import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { courceRoute, seqTopics, routeConfig } from 'src/app/shared/const/const';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { UsageComponent } from './lesssion/usage/usage.component';
import { BasicsComponent } from './lesssion/basics/basics.component';
import { ModelsComponent } from './lesssion/models/models.component';
import { InstancesComponent } from './lesssion/instances/instances.component';
import { WorkingWithPromisesComponent } from './lesssion/working-with-promises/working-with-promises.component';
import { QueryingComponent } from './lesssion/querying/querying.component';
import { QBasicsComponent } from './lesssion/q-basics/q-basics.component';
import { FindersComponent } from './lesssion/finders/finders.component';
import { ScopeComponent } from './lesssion/scope/scope.component';
import { PaginationComponent } from './lesssion/pagination/pagination.component';
import { QueryTypesComponent } from './lesssion/query-types/query-types.component';
import { RawQueriesComponent } from './lesssion/raw-queries/raw-queries.component';
import { AggregatingComponent } from './lesssion/aggregating/aggregating.component';
import { PluginsComponent } from './lesssion/plugins/plugins.component';
import { ModelDefinitionComponent } from './lesssion/model-definition/model-definition.component';
import { DataTypesComponent } from './lesssion/data-types/data-types.component';
import { ValidationComponent } from './lesssion/validation/validation.component';
import { MdHooksComponent } from './lesssion/md-hooks/md-hooks.component';
import { DefaultScopeComponent } from './lesssion/default-scope/default-scope.component';
import { ScopesComponent } from './lesssion/scopes/scopes.component';
import { CreatingIndexesComponent } from './lesssion/creating-indexes/creating-indexes.component';
import { IndexesComponent } from './lesssion/indexes/indexes.component';
import { RemovingIndexesComponent } from './lesssion/removing-indexes/removing-indexes.component';
import { ModelOptionsComponent } from './lesssion/model-options/model-options.component';
import { MdAssociationsComponent } from './lesssion/md-associations/md-associations.component';
import { MigrationsComponent } from './lesssion/migrations/migrations.component';
import { SliUsageComponent } from './lesssion/sli-usage/sli-usage.component';
import { ApiComponent } from './lesssion/api/api.component';
import { InstanceMethodsComponent } from './lesssion/instance-methods/instance-methods.component';
import { SaveComponent } from './lesssion/save/save.component';
import { ReloadComponent } from './lesssion/reload/reload.component';
import { ValidateComponent } from './lesssion/validate/validate.component';
import { DestroyComponent } from './lesssion/destroy/destroy.component';
import { IncrementComponent } from './lesssion/increment/increment.component';
import { UpdateComponent } from './lesssion/update/update.component';
import { DecrementComponent } from './lesssion/decrement/decrement.component';
import { HooksComponent } from './lesssion/hooks/hooks.component';
import { LifecycleHooksComponent } from './lesssion/lifecycle-hooks/lifecycle-hooks.component';
import { ModelHooksComponent } from './lesssion/model-hooks/model-hooks.component';
import { InstanceHooksComponent } from './lesssion/instance-hooks/instance-hooks.component';
import { AssociationsComponent } from './lesssion/associations/associations.component';
import { OOAssociationsComponent } from './lesssion/o-o-associations/o-o-associations.component';
import { OMAssociationsComponent } from './lesssion/o-m-associations/o-m-associations.component';
import { MNAssociationsComponent } from './lesssion/m-n-associations/m-n-associations.component';
import { ThroughModelsComponent } from './lesssion/through-models/through-models.component';
import { SelfAssociationsComponent } from './lesssion/self-associations/self-associations.component';
import { TransactionsComponent } from './lesssion/transactions/transactions.component';
import { ExplicitTransactionsComponent } from './lesssion/explicit-transactions/explicit-transactions.component';
import { ImplicitTransactionsComponent } from './lesssion/implicit-transactions/implicit-transactions.component';
import { ValidationsComponent } from './lesssion/validations/validations.component';
import { ValidatorsComponent } from './lesssion/validators/validators.component';
import { CustomValidatorsComponent } from './lesssion/custom-validators/custom-validators.component';
import { VBasicsComponent } from './lesssion/v-basics/v-basics.component';
import { ConfigurationComponent } from './lesssion/configuration/configuration.component';
import { OptionsComponent } from './lesssion/options/options.component';
import { LoggingComponent } from './lesssion/logging/logging.component';
import { ErrorHandlingComponent } from './lesssion/error-handling/error-handling.component';
import { HandlingErrorsComponent } from './lesssion/handling-errors/handling-errors.component';
import { ErrorsComponent } from './lesssion/errors/errors.component';
import { UtilsComponent } from './lesssion/utils/utils.component';
import { HelpersComponent } from './lesssion/helpers/helpers.component';

const routes: Routes = [
    { path: routeConfig?.empty, component: DashboardComponent },
    {
        path: routeConfig?.version, component: LayoutComponent,
        children: [
            {
                path: seqTopics?.intro,
                children: [
                    { path: routeConfig?.empty, component: IntroComponent },
                    { path: seqTopics?.usage, component: UsageComponent },
                ],
            },
            {
                path: seqTopics?.basics,
                children: [
                    { path: routeConfig?.empty, component: BasicsComponent },
                    { path: seqTopics?.models, component: ModelsComponent },
                    { path: seqTopics?.instances, component: InstancesComponent },
                    { path: seqTopics?.working_with_promises, component: WorkingWithPromisesComponent },
                ],
            },
            {
                path: seqTopics?.querying,
                children: [
                    { path: routeConfig?.empty, component: QueryingComponent },
                    { path: seqTopics?.q_basics, component: QBasicsComponent },
                    { path: seqTopics?.finders, component: FindersComponent },
                    { path: seqTopics?.scope, component: ScopeComponent },
                    { path: seqTopics?.aggregating, component: AggregatingComponent },
                    { path: seqTopics?.pagination, component: PaginationComponent },
                    { path: seqTopics?.query_types, component: QueryTypesComponent },
                    { path: seqTopics?.raw_queries, component: RawQueriesComponent },
                    { path: seqTopics?.plugins, component: PluginsComponent },
                ],
            },
            {
                path: seqTopics?.model_definition,
                children: [
                    { path: routeConfig?.empty, component: ModelDefinitionComponent },
                    { path: seqTopics?.data_types, component: DataTypesComponent },
                    { path: seqTopics?.validation, component: ValidationComponent },
                    { path: seqTopics?.md_hooks, component: MdHooksComponent },
                    { path: seqTopics?.default_scope, component: DefaultScopeComponent },
                    { path: seqTopics?.scopes, component: ScopesComponent },
                    { path: seqTopics?.indexes, component: IndexesComponent },
                    { path: seqTopics?.creating_indexes, component: CreatingIndexesComponent },
                    { path: seqTopics?.removing_indexes, component: RemovingIndexesComponent },
                    { path: seqTopics?.model_options, component: ModelOptionsComponent },
                    { path: seqTopics?.md_associations, component: MdAssociationsComponent },
                ],
            },
            {
                path: seqTopics?.migrations,
                children: [
                    { path: routeConfig?.empty, component: MigrationsComponent },
                    { path: seqTopics?.sli_usage, component: SliUsageComponent },
                    { path: seqTopics?.api, component: ApiComponent },
                ],
            },
            {
                path: seqTopics?.instance_methods,
                children: [
                    { path: routeConfig?.empty, component: InstanceMethodsComponent },
                    { path: seqTopics?.save, component: SaveComponent },
                    { path: seqTopics?.reload, component: ReloadComponent },
                    { path: seqTopics?.validate, component: ValidateComponent },
                    { path: seqTopics?.update, component: UpdateComponent },
                    { path: seqTopics?.destroy, component: DestroyComponent },
                    { path: seqTopics?.increment, component: IncrementComponent },
                    { path: seqTopics?.decrement, component: DecrementComponent },
                ],
            },
            {
                path: seqTopics?.hooks,
                children: [
                    { path: routeConfig?.empty, component: HooksComponent },
                    { path: seqTopics?.lifecycle_hooks, component: LifecycleHooksComponent },
                    { path: seqTopics?.instance_hooks, component: InstanceHooksComponent },
                    { path: seqTopics?.model_hooks, component: ModelHooksComponent },
                ],
            },
            {
                path: seqTopics?.associations,
                children: [
                    { path: routeConfig?.empty, component: AssociationsComponent },
                    { path: seqTopics?.o_o_associations, component: OOAssociationsComponent },
                    { path: seqTopics?.o_m_associations, component: OMAssociationsComponent },
                    { path: seqTopics?.m_n_associations, component: MNAssociationsComponent },
                    { path: seqTopics?.through_models, component: ThroughModelsComponent },
                    { path: seqTopics?.self_associations, component: SelfAssociationsComponent },
                ],
            },
            {
                path: seqTopics?.transactions,
                children: [
                    { path: routeConfig?.empty, component: TransactionsComponent },
                    { path: seqTopics?.implicit_transactions, component: ImplicitTransactionsComponent },
                    { path: seqTopics?.explicit_transactions, component: ExplicitTransactionsComponent },
                ],
            },
            {
                path: seqTopics?.validations,
                children: [
                    { path: routeConfig?.empty, component: ValidationsComponent },
                    { path: seqTopics?.v_basics, component: VBasicsComponent },
                    { path: seqTopics?.validators, component: ValidatorsComponent },
                    { path: seqTopics?.custom_validators, component: CustomValidatorsComponent },
                ],
            },
            {
                path: seqTopics?.configuration,
                children: [
                    { path: routeConfig?.empty, component: ConfigurationComponent },
                    { path: seqTopics?.options, component: OptionsComponent },
                    { path: seqTopics?.logging, component: LoggingComponent },
                ],
            },
            {
                path: seqTopics?.error_handling,
                children: [
                    { path: routeConfig?.empty, component: ErrorHandlingComponent },
                    { path: seqTopics?.handling_errors, component: HandlingErrorsComponent },
                    { path: seqTopics?.errors, component: ErrorsComponent },
                ],
            },
            {
                path: seqTopics?.utils,
                children: [
                    { path: routeConfig?.empty, component: UtilsComponent },
                    { path: seqTopics?.helpers, component: HelpersComponent },
                ],
            },
        ],
        data: { courceData: courceRoute?.sequelize }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SequelizeRoutingModule { }
