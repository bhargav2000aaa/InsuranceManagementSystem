import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Healthinsurance } from 'src/app/classes/healthinsurance';
import { Homeinsurance } from 'src/app/classes/homeinsurance';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.component.html',
  styleUrls: ['./all-policies.component.css']
})
export class AllPoliciesComponent implements OnInit {
  homePoliciesList : Homeinsurance[]
  healthPoliciesList : Healthinsurance[]
  searchByName : string;
  constructor(private service : InsuranceManagementService,
    private route : Router) { }

  ngOnInit(): void {
    this.getHomePoliciesList();
    this.getHealthPoliciesList();
  }
  getHomePoliciesList(){
    this.service.getHomeInsurancePloicies().subscribe(data=>{
      console.log(data)
      this.homePoliciesList =data;
    })
  }
  getHealthPoliciesList(){
    this.service.getHealthInsurancePolicies().subscribe(data=>{
      console.log(data)
      this.healthPoliciesList =data;
    })
  }

  addNewHomePolicy(){
    this.route.navigateByUrl("addNewHomePolicy")
  }

  addNewHealthPolicy(){
    this.route.navigateByUrl("addNewHealthPolicy")
  }
  
  editHomePolicy(id : number){
    this.route.navigateByUrl("/updateHomePolicy/"+id)
  }
  deleteHomePolicy(id : number){
    if(confirm("Are You Sure , You Want To Delete")){
      this.service.deleteHomePolicyById(id).subscribe(data =>{
        this.getHomePoliciesList();
      })
    }
    
  }

  editHealthPolicy(id : number){
    this.route.navigateByUrl("/updateHealthPolicy/"+id)
  }
  deleteHealthPolicy(id : number){
    if(confirm("Are You,Sure You Want To Delete")){
      this.service.deleteHealthPolicyById(id).subscribe(data =>{
        this.getHealthPoliciesList();
      })
    }
  }
}
