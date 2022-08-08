import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Healthinsurance } from 'src/app/classes/healthinsurance';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-list-of-policy-holders',
  templateUrl: './list-of-policy-holders.component.html',
  styleUrls: ['./list-of-policy-holders.component.css']
})
export class ListOfPolicyHoldersComponent implements OnInit {
  usersList : Users[]
  healthPoliciesList : Healthinsurance[]
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

  updatePolicyHolder(id : number){
    this.route.navigateByUrl("/moveToUpdateListOfPolicyHolders/"+id)
  }

  deletePolicyHolder(id : number){
    if(confirm("Are You Sure,You want to delete")){
      this.service.deletePolicyHolderById(id).subscribe(data =>{
        this.getUsersList() 
      })
    }
  }
}
