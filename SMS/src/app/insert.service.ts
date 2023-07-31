import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http:HttpClient) { }

  
  url5="http://localhost:8060/insertadmin"
  url6="http://localhost:8060/loginadmin"
  url7="http://localhost:8060/viewadmin"

  url1="http://localhost:8060/addstudent"
  url2="http://localhost:8060/loginstudent"
  url3="http://localhost:8060/viewstudent"
  url11="http://localhost:8060/updatestudent"
  url12="http://localhost:8060/deletestudent"


  url20="http://localhost:8060/addcestudent"
  url21="http://localhost:8060/logincestudent"
  url22="http://localhost:8060/viewcestudent"
  url23="http://localhost:8060/updatecestudent"
  url24="http://localhost:8060/deletecestudent"

 

  url30="http://localhost:8060/addcefaculty"
  url31="http://localhost:8060/logincefaculty"
  url32="http://localhost:8060/viewcefaculty"
  url33="http://localhost:8060/updatecefaculty"
  url34="http://localhost:8060/deletecefaculty"

  url35="http://localhost:8060/addstaff"
  url36="http://localhost:8060/loginstaff"
  url37="http://localhost:8060/viewstaff"
  url38="http://localhost:8060/updatestaff"
  url39="http://localhost:8060/deletestaff"




  url43="http://localhost:8060/addnotify"
  url44="http://localhost:8060/viewnotify"
  url45="http://localhost:8060/deletenotify"



  url50="http://localhost:8060/addfees"
  url51="http://localhost:8060/viewfees"

  loginservice2(data3:any){
    return this.http.post(this.url6, data3);
  }

  public loginAdminFromRemote(admin:UserComponent):Observable<object>{
    console.log(admin);
    return this.http.post(this.url6,admin);
    
  }



  addStudent(data:any){
    return this.http.post(this.url1, data);
  }
  viewStudent(){
    return this.http.get(this.url3);
  }
  updateStudent(value:any){
    return this.http.post(this.url11, value);
  }
  deleteStudent(data:any){
    return this.http.post(this.url12, data);
  }

  loginservice1(data2:any){
    return this.http.post(this.url2, data2);
  }

  public loginUserFromRemote(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url2,user);
    
  }


  

  addCEStudent(data:any){
    return this.http.post(this.url20, data);
  }
  viewCEStudent(){
    return this.http.get(this.url22);
  }
  updateCEStudent(value:any){
    return this.http.post(this.url23, value);
  }
  deleteCEStudent(data:any){
    return this.http.post(this.url24, data);
  }

  loginservice1CE(data2:any){
    return this.http.post(this.url21, data2);
  }

  public loginUserFromRemoteCE(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url21,user);
    
  }





  addCEFaculties(data:any){
    return this.http.post(this.url30, data);
  }
  viewCEFaculties(){
    return this.http.get(this.url32);
  }
  updateCEFaculties(value:any){
    return this.http.post(this.url33, value);
  }
  deleteCEFaculties(data:any){
    return this.http.post(this.url34, data);
  }

  loginservice3CE(data4:any){
    return this.http.post(this.url31, data4);
  }

  public loginFacultyFromRemoteCE(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url31,faculty);
    
  }

  addStaff(data:any){
    return this.http.post(this.url35, data);
  }
  viewStaff(){
    return this.http.get(this.url37);
  }
  updateStaff(value:any){
    return this.http.post(this.url38, value);
  }
  deleteStaff(data:any){
    return this.http.post(this.url39, data);
  }

  loginservice3Staff(data4:any){
    return this.http.post(this.url36, data4);
  }

  public loginFacultyFromRemoteStaff(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url36,faculty);
    
  }



  addFees(data:any){
    return this.http.post(this.url50, data);
  }
  viewFees(){
    return this.http.get(this.url51);
  }
}
