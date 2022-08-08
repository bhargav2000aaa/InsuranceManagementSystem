import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-update-list-of-policy-holder',
  templateUrl: './update-list-of-policy-holder.component.html',
  styleUrls: ['./update-list-of-policy-holder.component.css']
})
export class UpdateListOfPolicyHolderComponent implements OnInit {
  policyHolder : Users = new Users(0,"","",0,"","",null,null,0,0,null,null)
  constructor(private service : InsuranceManagementService,
    private route : Router,
    private activeRoute : ActivatedRoute) { }


    isEditable : boolean = false
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getUserDetailsbyId()
    })
  }

  getUserDetailsbyId(){
    const id = +this.activeRoute.snapshot.paramMap.get("id")
    if(id>0){
      this.isEditable = true
      this.service.getUserById(id).subscribe(data => {
        this.policyHolder = data
      })
    }
  }

  onSubmit(){
    if(this.isEditable){
      this.service.updateUserDetails(this.policyHolder).subscribe(()=>{
        this.route.navigateByUrl("/moveToListOfPolicyHolders")
      })
    }else{
      this.service.saveUserDetails(this.policyHolder).subscribe(()=>{
        this.route.navigateByUrl("/moveToListOfPolicyHolders")
      })
    }
  }

}
