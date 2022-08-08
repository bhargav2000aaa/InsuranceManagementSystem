import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Homeinsurance } from 'src/app/classes/homeinsurance';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-update-home-policy',
  templateUrl: './update-home-policy.component.html',
  styleUrls: ['./update-home-policy.component.css']
})
export class UpdateHomePolicyComponent implements OnInit {
homePolicy : Homeinsurance = new Homeinsurance(null,null,null,null,null,null,null,null)
  constructor(
    private service : InsuranceManagementService,
    private route : Router,
    private activeRoute : ActivatedRoute
  ) { }

  isEditable : boolean = false
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getHomePolicyById()
    })
  }
   
  getHomePolicyById(){
    const id = +this.activeRoute.snapshot.paramMap.get("id")
    if(id>0){
      this.isEditable = true
      this.service.getHomePolicyById(id).subscribe(data =>{this.homePolicy =data})
    }
  }

  
  onSubmit(){
    if(this.isEditable){
      this.service.updateHomePolicy(this.homePolicy).subscribe(()=>{
        this.route.navigateByUrl("/moveToAllPolicies")
      })
    }else{
      this.service.saveHomePolicy(this.homePolicy).subscribe(()=>{
        this.route.navigateByUrl("/moveToAllPolicies")
      })
    }
  }
}
