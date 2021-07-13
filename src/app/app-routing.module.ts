import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsumerComponent } from './add-consumer/add-consumer.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { LoginComponent } from './login/login.component';
import { CreatePolicyComponent } from './property/create-policy/create-policy.component';
import { CreatePropertyComponent } from './property/create-property/create-property.component';
import { IssuePolicyComponent } from './property/issue-policy/issue-policy.component';
import { UpdatePropertyComponent } from './property/update-property/update-property.component';
import { ViewPolicyComponent } from './property/view-policy/view-policy.component';
import { ViewPropertyComponent } from './property/view-property/view-property.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { ViewComponentComponent } from './view-component/view-component.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'consumer', component: ConsumerComponent },
  { path: 'addconsumer', component: AddConsumerComponent },
  { path: 'view/:id', component: ViewComponentComponent },
  { path: 'update/:id', component: UpdateComponentComponent },
  { path: 'property/:id', component: ViewPropertyComponent },
  { path: 'createProperty', component: CreatePropertyComponent },
  { path: 'createProperty/:id', component: CreatePropertyComponent },
  { path: 'updateProperty/:id', component: UpdatePropertyComponent },
  {
    path: 'createPolicy/:id/:bvalue/:pvalue/:ptype',
    component: CreatePolicyComponent,
  },
  { path: 'viewPolicy/:id/:bid', component: ViewPolicyComponent },
  { path: 'issue-policy/:id/:bid', component: IssuePolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
