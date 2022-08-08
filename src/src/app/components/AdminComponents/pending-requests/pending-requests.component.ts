import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Healthinsurance } from 'src/app/classes/healthinsurance';
import { Homeinsurance } from 'src/app/classes/homeinsurance';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  usersList : Users[]
  healthPoliciesList : Healthinsurance[]
  homePoliciesList : Homeinsurance[]
  approveHealthUser : Users
  approveHomeUser : Users

  constructor(private service :  InsuranceManagementService,
    private route : Router,
    private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsersList()
    this.getHealthPoliciesList()
    this.getHomePoliciesList()
    this.activeRoute.paramMap.subscribe(()=>{
      this.usersList
      this.healthPoliciesList;
      this.homePoliciesList;
    })
  }

  
  getUsersList(){
    this.service.getUsersList().subscribe(data=>{
      console.log(data)
      this.usersList =data;
    })
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
  
  moveToListOfPolicyHolders(){
    this.route.navigateByUrl("moveToListOfPolicyHolders")
  }

  approveHealthPolicy(user : Users){
    if(confirm("You Want To Approve This User")){
      this.approveHealthUser = new Users(user.id,user.name,user.email,user.mobilenumber
        ,user.password,user.address,user.healthid,user.homeid,user.healthpremiumleft,
        user.homepremiumleft,1,user.homestatus)
      this.service.updateUserDetails(this.approveHealthUser).subscribe(()=>{
        // this.route.navigateByUrl("/moveToListOfPolicyHolders")
        alert("Approvel Successfull")
        this.route.navigateByUrl("moveToPendingRequests")
      })
    }   
  }

  deleteHealthPolicy(user : Users){
    if(confirm("Are You Sure , You Want To Reject The Request")){
      this.approveHealthUser = new Users(user.id,user.name,user.email,user.mobilenumber
        ,user.password,user.address,null,user.homeid,user.healthpremiumleft,
        user.homepremiumleft,null,user.homestatus)
      this.service.updateUserDetails(this.approveHealthUser).subscribe(()=>{
        // this.route.navigateByUrl("/moveToListOfPolicyHolders")
        alert("Rejected")
        this.route.navigateByUrl("moveToPendingRequests")
      })
    }   
  }

  approveHomePolicy(user : Users){
    if(confirm("You Want To Approve This User"+user.name)){
      this.approveHomeUser = new Users(user.id,user.name,user.email,user.mobilenumber
        ,user.password,user.address,user.healthid,user.homeid,user.healthpremiumleft,
        user.homepremiumleft,user.healthstatus,1)
      this.service.updateUserDetails(this.approveHomeUser).subscribe(()=>{
        // this.route.navigateByUrl("/moveToListOfPolicyHolders")
        alert("Approvel Successfull")
        this.route.navigateByUrl("moveToPendingRequests")
      })
    }   
  }


  deleteHomePolicy(user : Users){
    if(confirm("Are You Sure , You Want To Reject The Request")){
      this.approveHealthUser = new Users(user.id,user.name,user.email,user.mobilenumber
        ,user.password,user.address,user.healthid,null,user.healthpremiumleft,
        user.homepremiumleft,user.healthstatus,null)
      this.service.updateUserDetails(this.approveHealthUser).subscribe(()=>{
        // this.route.navigateByUrl("/moveToListOfPolicyHolders")
        alert("Rejected")
        this.route.navigateByUrl("moveToPendingRequests")
      })
    }   
  }

}
