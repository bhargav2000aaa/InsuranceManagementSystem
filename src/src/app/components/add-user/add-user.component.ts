import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 user : Users = new Users(null,null,null,null,null,null,null,null,null,null,null,null)
 
  constructor(private service : InsuranceManagementService,
              private route : Router) { }

  ngOnInit(): void {
    this.user
    console.log(this.user)
  }

  onSubmit(){
    if(this.user.email != null && this.user.password != null){
      this.service.saveUserDetails(this.user).subscribe(()=>{
        this.route.navigateByUrl("/moveToLoginPage")
    })
    }else{
      alert("Enter Email and Password")
    }
    
}
  
}
