import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AattendenceComponent } from './aattendence/aattendence.component';
import { AboutComponent } from './about/about.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AfacultiesComponent } from './afaculties/afaculties.component';
import { AnotificationComponent } from './anotification/anotification.component';
import { AstaffComponent } from './astaff/astaff.component';
import { CampSelComponent } from './camp-sel/camp-sel.component';
import { CEComponent } from './ce/ce.component';
import { CefacultiesComponent } from './cefaculties/cefaculties.component';
import { CefacultypanelComponent } from './cefacultypanel/cefacultypanel.component';
import { CefdashboardComponent } from './cefdashboard/cefdashboard.component';
import { CefstudentsComponent } from './cefstudents/cefstudents.component';
import { CesdashboardComponent } from './cesdashboard/cesdashboard.component';
import { CesnoticeComponent } from './cesnotice/cesnotice.component';
import { CestudentpanelComponent } from './cestudentpanel/cestudentpanel.component';
import { CestudentsComponent } from './cestudents/cestudents.component';
import { ContactComponent } from './contact/contact.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultypanelComponent } from './facultypanel/facultypanel.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';
import { StudentComponent } from './student/student.component';
import { StudentpanelComponent } from './studentpanel/studentpanel.component';
import { TopRecComponent } from './top-rec/top-rec.component';
import { TPComponent } from './tp/tp.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';
import { C7Component } from './c7/c7.component';
import { C8Component } from './c8/c8.component';
import { C9Component } from './c9/c9.component';
import { C10Component } from './c10/c10.component';
import { C11Component } from './c11/c11.component';
import { C12Component } from './c12/c12.component';
import { C13Component } from './c13/c13.component';
import { C14Component } from './c14/c14.component';
import { C15Component } from './c15/c15.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home', component : HomeComponent},
  {path:'about', component : AboutComponent},
  {path:'sign-up', component : SignUpComponent},
  {path:'contact', component : ContactComponent},
  {path:'college1', component : C1Component},
  {path:'college2', component : C2Component},
  {path:'college3', component : C3Component},
  {path:'college4', component : C4Component},
  {path:'college5', component : C5Component},
  {path:'college6', component : C6Component},
  {path:'college7', component: C7Component},
  {path:'college8',component:C8Component},
  {path:'college9',component:C9Component},
  {path:'college10',component:C10Component},
  {path:'college11',component:C11Component},
  {path:'college12',component:C12Component},
  {path:'college13',component:C13Component},
  {path:'college14',component:C14Component},
  {path:'college15',component:C15Component},
  {path:'ce', component : CEComponent},
  {path:'tp', component : TPComponent},
  {path:'camp-sel', component : CampSelComponent},
  {path:'top-rec', component : TopRecComponent},
  {path:'admin', component : AdminComponent,data: { title:'', navigation: true,footer: true}},
  {path:'faculty', component : FacultyComponent,data: { title:'', navigation: true,footer: true}},
  {path:'student', component : StudentComponent,data: { title:'', navigation: true,footer: true}},
  {path:'student-sign-up', component : StudentSignUpComponent},
  {path:'adminpanel', component : AdminpanelComponent,data: { title:'adminpanel', navigation: false,footer: false}},
  {path:'facultypanel', component : FacultypanelComponent,data: { title:'facultypanel', navigation: false,footer: false}},
  {path:'studentpanel', component : StudentpanelComponent,data: { title:'studentpanel', navigation: false,footer: false}},
  {path:'aattendence', component : AattendenceComponent,data: { title:'aattendence', navigation: false,footer: false}},
  {path:'adashboard', component : AdashboardComponent,data: { title:'adashboard', navigation: false,footer: false}},
  {path:'afaculties', component : AfacultiesComponent,data: { title:'afaculties', navigation: false,footer: false}},
  {path:'anotification', component : AnotificationComponent,data: { title:'anotification', navigation: false,footer: false}},
  {path:'astaff', component : AstaffComponent,data: { title:'astaff', navigation: false,footer: false}},
  {path:'cestudents', component : CestudentsComponent,data: { title:'cestudents', navigation: false,footer: false}},
  {path:'cefaculties', component : CefacultiesComponent,data: { title:'cefaculties', navigation: false,footer: false}},

  {path:'cefacultypanel', component : CefacultypanelComponent,data: { title:'cefacultypanel', navigation: false,footer: false}},
  {path:'cefdashboard', component : CefdashboardComponent,data: { title:'cefdashboard', navigation: false,footer: false}},
  {path:'cefstudents', component : CefstudentsComponent,data: { title:'cefstudents', navigation: false,footer: false}},

  {path:'cestudentpanel', component : CestudentpanelComponent,data: { title:'cestudentpanel', navigation: false,footer: false}},
  {path:'cesdashboard', component : CesdashboardComponent,data: { title:'cesdashboard', navigation: false,footer: false}}, 
  {path:'cesnotice', component : CesnoticeComponent,data: { title:'cesnotice', navigation: false,footer: false}},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
