import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usersList : Users[]
  searchByName : string;
  constructor(private service : InsuranceManagementService,
    private route : Router) { }

  ngOnInit(): void {
    this.getUsersList();
  }


  getUsersList(){
    this.service.getUsersList().subscribe(data=>{
      console.log(data)
      this.usersList =data;
    })
  }

  editUser(id : number){
    this.route.navigateByUrl("/moveToAddUser/"+id)
  }

  moveToAllPolicies(){
    this.route.navigateByUrl("/moveToAllPolicies")
  }

  moveToListOfPolicyHolders(){
    this.route.navigateByUrl("/moveToListOfPolicyHolders")
  }

  moveToPendingRequests(){
    this.route.navigateByUrl("/moveToPendingRequests")
  }
}
