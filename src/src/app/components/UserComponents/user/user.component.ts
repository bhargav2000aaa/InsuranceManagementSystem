import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/classes/users';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : Users
  constructor(private activedRoute : ActivatedRoute,
              private service : InsuranceManagementService,
              private route : Router) { }

  ngOnInit(): void {
    this.getUserDetailsById();
    // console.log(this.user.id)
    sessionStorage.setItem("healthid","this.user.healthid")
    sessionStorage.setItem('homeid',"this.user.homeid")
  }

  getUserDetailsById(){
    const id = +this.activedRoute.snapshot.paramMap.get("id");
      this.service.getUserById(id).subscribe(data =>{this.user = data});
  }

  moveToHealthPolicies(id : number){
    this.route.navigateByUrl("/moveToListHealthPolicies/"+id)
  }
  moveToHomePolicies(id : number){
    this.route.navigateByUrl("/moveToListOfHomePolicies/"+id)
  }
  userPolicies(id : number){
    this.route.navigateByUrl("/moveToUserpolicy/"+id)
  }



}
