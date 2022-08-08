import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Router,RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HealthInsuranceComponent } from './components/health-insurance/health-insurance.component';
import { HomeInsuranceComponent } from './components/home-insurance/home-insurance.component';
import { AdminComponent } from './components/AdminComponents/admin/admin.component';
import { Insurancecategory } from './classes/insurancecategory';
import { InsuranceCategoryComponent } from './components/insurance-category/insurance-category.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserComponent } from './components/UserComponents/user/user.component';
import { UserListOfPoliciesComponent } from './components/UserComponents/user-list-of-policies/user-list-of-policies.component';
import { AllPoliciesComponent } from './components/AdminComponents/all-policies/all-policies.component';
import { UpdateHomePolicyComponent } from './components/AdminComponents/update-home-policy/update-home-policy.component';
import { UpdateHealthPolicyComponent } from './components/AdminComponents/update-health-policy/update-health-policy.component';
import { ListOfPolicyHoldersComponent } from './components/AdminComponents/list-of-policy-holders/list-of-policy-holders.component';
import { UpdateListOfPolicyHolderComponent } from './components/AdminComponents/update-list-of-policy-holder/update-list-of-policy-holder.component';
import { ListOfHealthPoliciesComponent } from './components/UserComponents/list-of-health-policies/list-of-health-policies.component';
import { ListOfHomePoliciesComponent } from './components/UserComponents/list-of-home-policies/list-of-home-policies.component';
import { PendingRequestsComponent } from './components/AdminComponents/pending-requests/pending-requests.component';
import { PayPremiumComponent } from './components/UserComponents/pay-home-premium/pay-premium.component';
import { PayHealthPremiumComponent } from './components/UserComponents/pay-health-premium/pay-health-premium.component';
const route : Routes = [
  {path : '',component : HomepageComponent}, 
  {path :'moveToHealthInsurance',component : HealthInsuranceComponent},
  {path : 'moveToHomeInsurance',component : HomeInsuranceComponent},
  {path : 'moveToAdmin',component : AdminComponent},
  {path : 'moveToCategory',component : InsuranceCategoryComponent},
  {path : 'moveToAddUser/:id',component : AddUserComponent},
  {path : 'moveToAddUser',component : AddUserComponent},
  {path : 'moveToLoginPage',component : LoginpageComponent},
  {path : 'moveToUser/:id',component : UserComponent},
  {path : 'moveToUserpolicy/:id',component : UserListOfPoliciesComponent},
  {path : 'moveToAllPolicies',component : AllPoliciesComponent},
  {path : 'updateHealthPolicy/:id',component : UpdateHealthPolicyComponent},
  {path : 'updateHomePolicy/:id',component : UpdateHomePolicyComponent},
  {path : 'addNewHomePolicy',component : UpdateHomePolicyComponent},
  {path : 'addNewHealthPolicy',component : UpdateHealthPolicyComponent},
  {path : 'moveToListOfPolicyHolders',component : ListOfPolicyHoldersComponent},
  {path : 'moveToUpdateListOfPolicyHolders/:id',component : UpdateListOfPolicyHolderComponent},
  {path : 'moveToListOfHomePolicies/:id',component : ListOfHomePoliciesComponent},
  {path : 'moveToListHealthPolicies/:id',component : ListOfHealthPoliciesComponent},
  {path : 'moveToPendingRequests',component : PendingRequestsComponent},
  {path : 'moveToPayPremium/:id',component : PayPremiumComponent},
  {path : 'moveToPayHealthPremium/:id',component : PayHealthPremiumComponent},


  ]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    HealthInsuranceComponent,
    HomeInsuranceComponent,
    AdminComponent,
    InsuranceCategoryComponent,
    AddUserComponent,
    UserComponent,
    UserListOfPoliciesComponent,
    AllPoliciesComponent,
    UpdateHomePolicyComponent,
    UpdateHealthPolicyComponent,
    ListOfPolicyHoldersComponent,
    UpdateListOfPolicyHolderComponent,
    ListOfHealthPoliciesComponent,
    ListOfHomePoliciesComponent,
    PendingRequestsComponent,
    PayPremiumComponent,
    PayHealthPremiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
