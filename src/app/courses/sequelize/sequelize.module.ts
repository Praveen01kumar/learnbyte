import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SequelizeRoutingModule } from './sequelize-routing.module';
import { IntroComponent } from './lesssion/intro/intro.component';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
import { UsageComponent } from './lesssion/usage/usage.component';
import { BasicsComponent } from './lesssion/basics/basics.component';
import { ModelsComponent } from './lesssion/models/models.component';
import { InstancesComponent } from './lesssion/instances/instances.component';
import { WorkingWithPromisesComponent } from './lesssion/working-with-promises/working-with-promises.component';
import { QueryingComponent } from './lesssion/querying/querying.component';
import { QBasicsComponent } from './lesssion/q-basics/q-basics.component';
import { FindersComponent } from './lesssion/finders/finders.component';
import { ScopeComponent } from './lesssion/scope/scope.component';
import { AggregatingComponent } from './lesssion/aggregating/aggregating.component';
import { PaginationComponent } from './lesssion/pagination/pagination.component';
import { QueryTypesComponent } from './lesssion/query-types/query-types.component';
import { RawQueriesComponent } from './lesssion/raw-queries/raw-queries.component';
import { PluginsComponent } from './lesssion/plugins/plugins.component';
import { ModelDefinitionComponent } from './lesssion/model-definition/model-definition.component';
import { DataTypesComponent } from './lesssion/data-types/data-types.component';
import { ValidationComponent } from './lesssion/validation/validation.component';
import { MdHooksComponent } from './lesssion/md-hooks/md-hooks.component';
import { DefaultScopeComponent } from './lesssion/default-scope/default-scope.component';
import { ScopesComponent } from './lesssion/scopes/scopes.component';
import { IndexesComponent } from './lesssion/indexes/indexes.component';
import { CreatingIndexesComponent } from './lesssion/creating-indexes/creating-indexes.component';
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
import { UpdateComponent } from './lesssion/update/update.component';
import { DestroyComponent } from './lesssion/destroy/destroy.component';
import { IncrementComponent } from './lesssion/increment/increment.component';
import { DecrementComponent } from './lesssion/decrement/decrement.component';
import { HooksComponent } from './lesssion/hooks/hooks.component';
import { LifecycleHooksComponent } from './lesssion/lifecycle-hooks/lifecycle-hooks.component';
import { InstanceHooksComponent } from './lesssion/instance-hooks/instance-hooks.component';
import { ModelHooksComponent } from './lesssion/model-hooks/model-hooks.component';
import { AssociationsComponent } from './lesssion/associations/associations.component';
import { OOAssociationsComponent } from './lesssion/o-o-associations/o-o-associations.component';
import { OMAssociationsComponent } from './lesssion/o-m-associations/o-m-associations.component';
import { MNAssociationsComponent } from './lesssion/m-n-associations/m-n-associations.component';
import { ThroughModelsComponent } from './lesssion/through-models/through-models.component';
import { SelfAssociationsComponent } from './lesssion/self-associations/self-associations.component';
import { TransactionsComponent } from './lesssion/transactions/transactions.component';
import { ImplicitTransactionsComponent } from './lesssion/implicit-transactions/implicit-transactions.component';
import { ExplicitTransactionsComponent } from './lesssion/explicit-transactions/explicit-transactions.component';
import { ValidationsComponent } from './lesssion/validations/validations.component';
import { VBasicsComponent } from './lesssion/v-basics/v-basics.component';
import { ValidatorsComponent } from './lesssion/validators/validators.component';
import { CustomValidatorsComponent } from './lesssion/custom-validators/custom-validators.component';
import { ConfigurationComponent } from './lesssion/configuration/configuration.component';
import { OptionsComponent } from './lesssion/options/options.component';
import { LoggingComponent } from './lesssion/logging/logging.component';
import { ErrorHandlingComponent } from './lesssion/error-handling/error-handling.component';
import { HandlingErrorsComponent } from './lesssion/handling-errors/handling-errors.component';
import { ErrorsComponent } from './lesssion/errors/errors.component';
import { UtilsComponent } from './lesssion/utils/utils.component';
import { HelpersComponent } from './lesssion/helpers/helpers.component';

@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent,
    UsageComponent,
    BasicsComponent,
    ModelsComponent,
    InstancesComponent,
    WorkingWithPromisesComponent,
    QueryingComponent,
    QBasicsComponent,
    FindersComponent,
    ScopeComponent,
    AggregatingComponent,
    PaginationComponent,
    QueryTypesComponent,
    RawQueriesComponent,
    PluginsComponent,
    ModelDefinitionComponent,
    DataTypesComponent,
    ValidationComponent,
    MdHooksComponent,
    DefaultScopeComponent,
    ScopesComponent,
    IndexesComponent,
    CreatingIndexesComponent,
    RemovingIndexesComponent,
    ModelOptionsComponent,
    MdAssociationsComponent,
    MigrationsComponent,
    SliUsageComponent,
    ApiComponent,
    InstanceMethodsComponent,
    SaveComponent,
    ReloadComponent,
    ValidateComponent,
    UpdateComponent,
    DestroyComponent,
    IncrementComponent,
    DecrementComponent,
    HooksComponent,
    LifecycleHooksComponent,
    InstanceHooksComponent,
    ModelHooksComponent,
    AssociationsComponent,
    OOAssociationsComponent,
    OMAssociationsComponent,
    MNAssociationsComponent,
    ThroughModelsComponent,
    SelfAssociationsComponent,
    TransactionsComponent,
    ImplicitTransactionsComponent,
    ExplicitTransactionsComponent,
    ValidationsComponent,
    VBasicsComponent,
    ValidatorsComponent,
    CustomValidatorsComponent,
    ConfigurationComponent,
    OptionsComponent,
    LoggingComponent,
    ErrorHandlingComponent,
    HandlingErrorsComponent,
    ErrorsComponent,
    UtilsComponent,
    HelpersComponent,
  ],
  imports: [
    CommonModule,
    SequelizeRoutingModule,
    ContentboxComponent
  ]
})
export class SequelizeModule { }
