import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Homeinsurance } from 'src/app/classes/homeinsurance';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-list-of-home-policies',
  templateUrl: './list-of-home-policies.component.html',
  styleUrls: ['./list-of-home-policies.component.css']
})
export class ListOfHomePoliciesComponent implements OnInit {
  user : Users
  appliedUser : Users 
  homePoliciesList : Homeinsurance[]
  status = false
  searchByName : string;
  constructor(private service : InsuranceManagementService,
    private route : Router,
    private activateRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this. getHomePoliciesList();
    this.getUserById();
    this.activateRoute.paramMap.subscribe(()=>{
      this.user
      this.homePoliciesList;
      this.appliedUser
    })
  }


  getHomePoliciesList(){
    this.service.getHomeInsurancePloicies().subscribe(data=>{
      console.log(data)
      this.homePoliciesList =data;
    })
  }

  getUserById(){
    const id = +this.activateRoute.snapshot.paramMap.get("id");
      this.service.getUserById(id).subscribe(data =>{this.user = data});
  }

  sendForAdminApprovel(homePolicy : Homeinsurance){
    if(this.user.homeid >0){
      alert("Already You Have A policy")
    }else{
      this.appliedUser = new Users(this.user.id,this.user.name,this.user.email,this.user.mobilenumber
        ,this.user.password,this.user.address,this.user.healthid,homePolicy.id,this.user.healthpremiumleft,
        homePolicy.sumassurance,this.user.healthstatus,0)
      this.service.updateUserDetails(this.appliedUser).subscribe(()=>{
        // this.route.navigateByUrl("/moveToListOfPolicyHolders")
        alert("You Have Applied For The Policy")
      })
    }
    
  }
}
