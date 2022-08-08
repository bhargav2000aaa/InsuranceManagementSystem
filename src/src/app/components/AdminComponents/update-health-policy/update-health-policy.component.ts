import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Healthinsurance } from 'src/app/classes/healthinsurance';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-update-health-policy',
  templateUrl: './update-health-policy.component.html',
  styleUrls: ['./update-health-policy.component.css']
})
export class UpdateHealthPolicyComponent implements OnInit {

  healthPolicy : Healthinsurance = new Healthinsurance(0,"",0,0,0,"","");
  constructor(private service : InsuranceManagementService,
    private route : Router,
    private activeRoute : ActivatedRoute) { }

    isEditable : boolean = false
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getHealthPolicyById()
    })
  }

  getHealthPolicyById(){
    const id = +this.activeRoute.snapshot.paramMap.get("id")
    if(id>0){
      this.isEditable = true
      this.service.getHealthPolicyById(id).subscribe(data =>{this.healthPolicy =data})
    }
  }

  onSubmit(){
    if(this.isEditable){
      this.service.updateHealthPolicy(this.healthPolicy).subscribe(()=>{
        this.route.navigateByUrl("/moveToAllPolicies")
      })
    }else{
      this.service.saveHealthPolicy(this.healthPolicy).subscribe(()=>{
        this.route.navigateByUrl("/moveToAllPolicies")
      })
    }
  }

}
