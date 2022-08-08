import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Admin } from '../classes/admin';
import { Healthinsurance } from '../classes/healthinsurance';
import { Homeinsurance } from '../classes/homeinsurance';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root'
})
export class InsuranceManagementService {
  private usersURL = "http://localhost:8080/api/userses"
  private healthInsuranceURL = "http://localhost:8080/api/healthinsurances"
  private homeInsuranceURL = "http://localhost:8080/api/homeinsurances"
  private adminsURL = "http://localhost:8080/api/admins"
 
   constructor(private httpClient : HttpClient) { }
 
   getUsersList() : Observable<Users[]>{
     return this.httpClient.get<getUsersList>(this.usersURL).pipe(map(response => response._embedded.userses));
   }

   getAdminsList() : Observable<Admin[]>{
    return this.httpClient.get<getAdminsList>(this.adminsURL).pipe(map(response => response._embedded.admins))
   }

   getHealthInsurancePolicies() : Observable<Healthinsurance[]>{
    return this.httpClient.get<getHealthInsuranceList>(this.healthInsuranceURL).pipe(map(response => response._embedded.healthinsurances))
   }

   getHomeInsurancePloicies() : Observable<Homeinsurance []>{
    return this.httpClient.get<getHomeInsuranceList>(this.homeInsuranceURL).pipe(map(response => response._embedded.homeinsurances))
   }

   
  saveUserDetails(user : Users) : Observable<Users>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpClient.post<Users>(this.usersURL,user,httpOptions);
  }

  
  updateUserDetails(user : Users) : Observable<Users>{
  
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
  }
  return this.httpClient.put<Users>(this.usersURL+`/${user.id}`,user,httpOptions)
  }
  getUserById(id : number) : Observable<Users>{
    const userIdURL = "http://localhost:8080/api/userses/" +id
    return this.httpClient.get<Users>(userIdURL);
  }
 
  getHealthPolicyById(id : number) : Observable<Healthinsurance>{
    const healthIdURL = "http://localhost:8080/api/healthinsurances/" +id
    return this.httpClient.get<Healthinsurance>(healthIdURL);
  }

  getHomePolicyById(id : number) : Observable<Homeinsurance>{
    const homeIdURL = "http://localhost:8080/api/homeinsurances/" +id
    return this.httpClient.get<Homeinsurance>(homeIdURL);
  }

  
  deleteHealthPolicyById(healthid :number) : Observable<Healthinsurance>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
  }
  return this.httpClient.delete<Healthinsurance>(this.healthInsuranceURL+`/${healthid}`,httpOptions)
  }

  deletePolicyHolderById(id : number) : Observable<Users>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
  }
  return this.httpClient.delete<Users>(this.usersURL+`/${id}`,httpOptions)
 
  }

  deleteHomePolicyById(homeid :number) : Observable<Homeinsurance>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
  }
  return this.httpClient.delete<Homeinsurance>(this.homeInsuranceURL+`/${homeid}`,httpOptions)
  }

  updateHealthPolicy(healthPolicy : Healthinsurance) : Observable<Healthinsurance>{
  
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
  }
  return this.httpClient.put<Healthinsurance>(this.healthInsuranceURL+`/${healthPolicy.id}`,healthPolicy,httpOptions)
  }

  updateHomePolicy(homePolicy : Homeinsurance) : Observable<Homeinsurance>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
  }
  return this.httpClient.put<Homeinsurance>(this.homeInsuranceURL+`/${homePolicy.id}`,homePolicy,httpOptions)
  }



  saveHealthPolicy(healthPolicy : Healthinsurance) : Observable<Healthinsurance>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpClient.post<Healthinsurance>(this.healthInsuranceURL,healthPolicy,httpOptions)
  }

  saveHomePolicy(homePolicy : Homeinsurance) : Observable<Homeinsurance>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpClient.post<Homeinsurance>(this.homeInsuranceURL,homePolicy,httpOptions)
  }

}

interface getUsersList{
  _embedded : {
    userses : Users[]
}
}
interface getAdminsList{
  _embedded : {
    admins : Admin[]
}
}

interface getHomeInsuranceList{
  _embedded : {
    homeinsurances : Homeinsurance[]
}
}


interface getHealthInsuranceList{
  _embedded : {
    healthinsurances : Healthinsurance[]
}
}
