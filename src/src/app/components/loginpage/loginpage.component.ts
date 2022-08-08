import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  userList : Users[]
  adminList : Admin[]
  isAdmin : boolean
  isUser : boolean
  email : string
  password : string 
  userId : number
  constructor(private service : InsuranceManagementService,
    private route : Router,private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfAdmins();
  this.listOfUsers();
  this.activateRoute.paramMap.subscribe(()=>{
    this.userList
    this.adminList
  })
  }

  onSubmit(){
  
  }
  listOfUsers(){
    this.service.getUsersList().subscribe(data =>{
      this.userList = data
    })
  }

  listOfAdmins(){
    this.service.getAdminsList().subscribe(data =>{
      this.adminList = data
    })
  }
  
  validate(){
    const users = this.userList.find((a:any) =>{
      if(a.email === this.email && a.password===this.password){
        // this.route.navigateByUrl("/moveToUser/"+a.id)
        this.userId = a.id
        this.isUser = true;
      }
    })

    const admins = this.adminList.find((a:any) =>{
      if(a.email === this.email && a.password===this.password){
        // this.route.navigateByUrl("/moveToUser/"+a.id)
        this.isAdmin = true;
      }
    })

    if(this.isUser){
      this.route.navigateByUrl("/moveToUser/"+this.userId)
    }else if(this.isAdmin){
      this.route.navigateByUrl("/moveToAdmin")
    }else{
      alert("Enter Valid Details")
    }
    
  }

}
