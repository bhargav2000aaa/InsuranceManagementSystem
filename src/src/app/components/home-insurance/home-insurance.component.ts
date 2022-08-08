import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Homeinsurance } from 'src/app/classes/homeinsurance';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-home-insurance',
  templateUrl: './home-insurance.component.html',
  styleUrls: ['./home-insurance.component.css']
})
export class HomeInsuranceComponent implements OnInit {
  homePoliciesList : Homeinsurance[]
  searchByName : string;
  constructor(private service : InsuranceManagementService,
    private route : Router) { }

  ngOnInit(): void {
    this.getHomePoliciesList();
  }


  getHomePoliciesList(){
    this.service.getHomeInsurancePloicies().subscribe(data=>{
      console.log(data)
      this.homePoliciesList =data;
    })
  }
}
