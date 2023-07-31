import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/
/*import { CarouselModule } from 'ngx-owl-carousel-o';*/
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

import { CEComponent } from './ce/ce.component';
import { TPComponent } from './tp/tp.component';
import { CampSelComponent } from './camp-sel/camp-sel.component';
import { TopRecComponent } from './top-rec/top-rec.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';

import { FacultySignUpComponent } from './faculty-sign-up/faculty-sign-up.component';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { FacultypanelComponent } from './facultypanel/facultypanel.component';
import { StudentpanelComponent } from './studentpanel/studentpanel.component';
import { UserComponent } from './user/user.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AfacultiesComponent } from './afaculties/afaculties.component';
import { AstaffComponent } from './astaff/astaff.component';

import { AattendenceComponent } from './aattendence/aattendence.component';

import { AnotificationComponent } from './anotification/anotification.component';
import { CestudentsComponent } from './cestudents/cestudents.component';

import { CefacultiesComponent } from './cefaculties/cefaculties.component';
import { CemarksheetComponent } from './cemarksheet/cemarksheet.component';

import { BackButtonDisableModule } from 'angular-disable-browser-back-button';


import { CefacultypanelComponent } from './cefacultypanel/cefacultypanel.component';
import { CefdashboardComponent } from './cefdashboard/cefdashboard.component';
import { CefstudentsComponent } from './cefstudents/cefstudents.component';
import { CestudentpanelComponent } from './cestudentpanel/cestudentpanel.component';
import { CesdashboardComponent } from './cesdashboard/cesdashboard.component';
import { CesnoticeComponent } from './cesnotice/cesnotice.component';
import { C7Component } from './c7/c7.component';
import { C8Component } from './c8/c8.component';
import { C9Component } from './c9/c9.component';
import { C10Component } from './c10/c10.component';
import { C11Component } from './c11/c11.component';
import { C12Component } from './c12/c12.component';
import { C13Component } from './c13/c13.component';
import { C14Component } from './c14/c14.component';
import { C15Component } from './c15/c15.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    HeaderComponent,
    FooterComponent,  
    MiddleComponent,
    NavigationComponent,
    AboutComponent,  
    CoursesComponent,
    TeamComponent,
    TestimonialComponent,
     CEComponent,
    TPComponent,
    CampSelComponent,
    TopRecComponent,
    AdminComponent,
    FacultyComponent,
    StudentComponent,
    SignUpComponent,
    ContactComponent,
    FacultySignUpComponent,
    StudentSignUpComponent,
    AdminpanelComponent,
    FacultypanelComponent,
    StudentpanelComponent,
    UserComponent,
    AdashboardComponent,
    AfacultiesComponent,
    AstaffComponent,
    AattendenceComponent,
    AnotificationComponent,
    CestudentsComponent,
    CefacultiesComponent,
    CemarksheetComponent,
    CefacultypanelComponent,
    CefdashboardComponent,
    CefstudentsComponent,
    CestudentpanelComponent,
    CesdashboardComponent,
    CesnoticeComponent,
    C7Component,
    C8Component,
    C9Component,
    C10Component,
    C11Component,
    C12Component,
    C13Component,
    C14Component,
    C15Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*BrowserAnimationsModule,*/
    /*CarouselModule,*/
    FormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({preserveScrollPosition:false})
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
