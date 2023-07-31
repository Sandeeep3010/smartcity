import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-anotification',
  templateUrl: './anotification.component.html',
  styleUrls: ['./anotification.component.css']
})
export class AnotificationComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage1();

    this.viewLoginpage3();

    this.viewLoginpage5();

   }

   loginpages1:any;
  viewLoginpage1(){
    this.is.viewStudent().subscribe((resp1:any)=>{this.loginpages1=resp1;});
  }
  
 
  
  loginpages3:any;
  viewLoginpage3(){
    this.is.viewCEStudent().subscribe((resp1:any)=>{this.loginpages3=resp1;});
  }

  

  loginpages5:any;
  viewLoginpage5(){
    this.is.viewFees().subscribe((resp1:any)=>{this.loginpages5=resp1;});
  }
  

    div3:boolean=false;
    div4:boolean=false;
    div5:boolean=false;

    

    div3Function(){
        this.div3=true;
  
        this.div4=false;
        this.div5=false;
    }
  
    div4Function(){
   
      this.div3=false;
      this.div4=true;
      this.div5=false;
    }

  div5Function(){

    this.div3=false;
    this.div4=false;
    this.div5=true;
  }


}
