import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsumerComponent } from './consumer/consumer.component';
import { AddConsumerComponent } from './add-consumer/add-consumer.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { ViewPropertyComponent } from './property/view-property/view-property.component';
import { CreatePropertyComponent } from './property/create-property/create-property.component';
import { UpdatePropertyComponent } from './property/update-property/update-property.component';
import { CreatePolicyComponent } from './property/create-policy/create-policy.component';
import { ViewPolicyComponent } from './property/view-policy/view-policy.component';
import { IssuePolicyComponent } from './property/issue-policy/issue-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsumerComponent,
    AddConsumerComponent,
    ViewComponentComponent,
    UpdateComponentComponent,
    ViewPropertyComponent,
    CreatePropertyComponent,
    UpdatePropertyComponent,
    CreatePolicyComponent,
    ViewPolicyComponent,
    IssuePolicyComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
