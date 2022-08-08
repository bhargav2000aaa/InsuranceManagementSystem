import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Healthinsurance } from 'src/app/classes/healthinsurance';
import { Homeinsurance } from 'src/app/classes/homeinsurance';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-user-list-of-policies',
  templateUrl: './user-list-of-policies.component.html',
  styleUrls: ['./user-list-of-policies.component.css']
})
export class UserListOfPoliciesComponent implements OnInit {
  user : Users
  cancelPolicy : Users
  healthPoliciesList : Healthinsurance[]
  homePoliciesList : Homeinsurance[]
  // healthPolicy : Healthinsurance[]
  // homePolicy : Homeinsurance[]
  // sizeOfList : number;
  constructor(private activedRoute : ActivatedRoute,
              private service : InsuranceManagementService,
              private route : Router) { }

  ngOnInit(): void {
    this.getUserById();
    this.getHealthPoliciesList();
    this.getHomePoliciesList()
    // this.getUserPolicy();
    this.activedRoute.paramMap.subscribe(()=>{
      this.user
      this.healthPoliciesList;
      // this.healthPolicy
      // this.healthPolicy
    
    })
  }
  getUserById(){
    const id = +this.activedRoute.snapshot.paramMap.get("id");
      this.service.getUserById(id).subscribe(data =>{this.user = data});
  }
  
  
  getHealthPoliciesList(){
    this.service.getHealthInsurancePolicies().subscribe(data=>{
      console.log(data)
      this.healthPoliciesList =data;
    })
  }

  getHomePoliciesList(){
    this.service.getHomeInsurancePloicies().subscribe(data=>{
      this.homePoliciesList =data;
    })
  }
  

  moveToPayPremium(id : number){
    this.route.navigateByUrl("/moveToPayPremium/"+id)
  }

  moveToPayHealthPremium(id : number){
    this.route.navigateByUrl("/moveToPayHealthPremium/"+id)
  }

  cancelHealthPolicy(user : Users){
    if(confirm("Are You Sure , You Want To Cancel The Policy")){
      this.cancelPolicy = new Users(user.id,user.name,user.email,user.mobilenumber
        ,user.password,user.address,null,user.homeid,user.healthpremiumleft,
        user.homepremiumleft,null,user.homestatus)
      this.service.updateUserDetails(this.cancelPolicy).subscribe(()=>{
        // this.route.navigateByUrl("/moveToListOfPolicyHolders")
        alert("Cancelled")
        this.route.navigateByUrl("moveToPendingRequests")
      })
    }  
  }

  cancelHomePolicy(user : Users){
    if(confirm("Are You Sure , You Want To Cancel The Policy")){
      this.cancelPolicy = new Users(user.id,user.name,user.email,user.mobilenumber
        ,user.password,user.address,user.healthid,null,user.healthpremiumleft,
        user.homepremiumleft,user.healthstatus,null)
      this.service.updateUserDetails(this.cancelPolicy).subscribe(()=>{
        // this.route.navigateByUrl("/moveToListOfPolicyHolders")
        alert("Cancelled")
        this.route.navigateByUrl("moveToPendingRequests")
      })
    }  
  }

}
