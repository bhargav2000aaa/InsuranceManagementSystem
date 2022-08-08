import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Healthinsurance } from 'src/app/classes/healthinsurance';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-health-insurance',
  templateUrl: './health-insurance.component.html',
  styleUrls: ['./health-insurance.component.css']
})
export class HealthInsuranceComponent implements OnInit {
  healthPoliciesList : Healthinsurance[]
  searchByName : string;
  constructor(private service : InsuranceManagementService,
    private route : Router) { }

  ngOnInit(): void {
    this. getHealthPoliciesList();
  }


  getHealthPoliciesList(){
    this.service.getHealthInsurancePolicies().subscribe(data=>{
      console.log(data)
      this.healthPoliciesList =data;
    })
  }
}
