import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-category',
  templateUrl: './insurance-category.component.html',
  styleUrls: ['./insurance-category.component.css']
})
export class InsuranceCategoryComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  moveToHomeInsurancePolicies(){
    this.route.navigateByUrl("/moveToHomeInsurance")
  }

  
  moveToHealthInsurancePolicies(){
    this.route.navigateByUrl("/moveToHealthInsurance")
  }
}
