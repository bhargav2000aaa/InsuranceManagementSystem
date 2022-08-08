import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-pay-health-premium',
  templateUrl: './pay-health-premium.component.html',
  styleUrls: ['./pay-health-premium.component.css']
})
export class PayHealthPremiumComponent implements OnInit {
  user : Users
  payingAmount : number
  premiumPaidUser : Users
  id : number
  constructor(private activedRoute : ActivatedRoute,
    private service : InsuranceManagementService,
    private route : Router) { }

  ngOnInit(): void {
    this.getUserById();
    this.moveToUserPolicy()
    this.payingAmount
    this.id
    this.activedRoute.paramMap.subscribe(()=>{
      this.user
      this.id
      this.payingAmount
      this.moveToUserPolicy();
    })
  }

  getUserById(){
    const id = +this.activedRoute.snapshot.paramMap.get("id");
      this.service.getUserById(id).subscribe(data =>{this.user = data});
  }

  payPremium(payingAmount : number){
    if(payingAmount <=0 || payingAmount == null){
      alert("Enter Valid Payment")
    }else if(payingAmount>this.user.healthpremiumleft){
      alert("You Are Paying Extra Please Make Sure")
    }
    else{
      this.premiumPaidUser = new Users(this.user.id,this.user.name,this.user.email,this.user.mobilenumber
        ,this.user.password,this.user.address,this.user.healthid,this.user.homeid,(this.user.healthpremiumleft-payingAmount),
        this.user.homepremiumleft,this.user.healthstatus,this.user.homestatus)
      this.service.updateUserDetails(this.premiumPaidUser).subscribe(()=>{
        // this.route.navigateByUrl("/moveToListOfPolicyHolders")
        if(confirm("Payment Is Successfull")){
          this.moveToUserPolicy();
        }
      })
    }
    
  }

  moveToUserPolicy(){
    this.route.navigateByUrl("/moveToUserPolicy/"+this.id)
  }

}
