import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Healthinsurance } from 'src/app/classes/healthinsurance';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-list-of-health-policies',
  templateUrl: './list-of-health-policies.component.html',
  styleUrls: ['./list-of-health-policies.component.css']
})
export class ListOfHealthPoliciesComponent implements OnInit {
  user : Users
  appliedUser : Users 
  healthPoliciesList : Healthinsurance[]
  status = false
  searchByName : string;
  constructor(private service : InsuranceManagementService,
    private route : Router,
    private activateRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this. getHealthPoliciesList();
    this.getUserById();
    // this.sendForAdminApprovel();
    this.activateRoute.paramMap.subscribe(()=>{
      this.user
      this.healthPoliciesList;
      this.appliedUser
    })
  }


  getHealthPoliciesList(){
    this.service.getHealthInsurancePolicies().subscribe(data=>{
      console.log(data)
      this.healthPoliciesList =data;
    })
  }

  getUserById(){
    const id = +this.activateRoute.snapshot.paramMap.get("id");
      this.service.getUserById(id).subscribe(data =>{this.user = data});
  }

  sendForAdminApprovel(healthPolicy : Healthinsurance){
    if(this.user.healthid >0){
      alert("Already You Have A policy")
    }else{
      this.appliedUser = new Users(this.user.id,this.user.name,this.user.email,this.user.mobilenumber
        ,this.user.password,this.user.address,healthPolicy.id,this.user.homeid,healthPolicy.sumassurance,
        this.user.homepremiumleft,0,this.user.homestatus)
      this.service.updateUserDetails(this.appliedUser).subscribe(()=>{
        // this.route.navigateByUrl("/moveToListOfPolicyHolders")
        alert("You Have Applied For The Policy")
      })
    }
    
  }

}
