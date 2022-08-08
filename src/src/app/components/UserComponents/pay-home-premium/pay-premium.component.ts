import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-pay-premium',
  templateUrl: './pay-premium.component.html',
  styleUrls: ['./pay-premium.component.css']
})
export class PayPremiumComponent implements OnInit {
  user : Users
  payingAmount : number
  premiumPaidUser : Users
  id : number
  constructor(private activedRoute : ActivatedRoute,
    private service : InsuranceManagementService,
    private route : Router) { }

  ngOnInit(): void {
    this.getUserById();
    this.payingAmount
    this.id
    this.activedRoute.paramMap.subscribe(()=>{
      this.user
      this.id
      this.payingAmount
    })
  }

  getUserById(){
    const id = +this.activedRoute.snapshot.paramMap.get("id");
      this.service.getUserById(id).subscribe(data =>{this.user = data});
  }

  payPremium(payingAmount : number){
    if(payingAmount <=0 || payingAmount == null){
      alert("Enter Valid Payment")
    }else if(payingAmount>this.user.homepremiumleft){
      alert("You Are Paying Extra Please Make Sure")
    }
    else{
      this.premiumPaidUser = new Users(this.user.id,this.user.name,this.user.email,this.user.mobilenumber
        ,this.user.password,this.user.address,this.user.healthid,this.user.homeid,this.user.healthpremiumleft,
        (this.user.homepremiumleft-payingAmount),this.user.healthstatus,this.user.homestatus)
      this.service.updateUserDetails(this.premiumPaidUser).subscribe(()=>{})
        if(confirm("Payment Is Successfull")){
          console.log(this.user.id)
          this.route.navigateByUrl("/moveToUserPolicy/"+this.user.id)
        }
    }
    
  }

  moveToUserPolicy(id : number){
    this.route.navigateByUrl("/moveToUserPolicy/"+id)
  }

}
