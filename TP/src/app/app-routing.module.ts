import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarinaBeachComponent } from './marina-beach/marina-beach.component';
import { MahabalipuramComponent } from './mahabalipuram/mahabalipuram.component';
import { GuindyNationalParkComponent } from './guindy-national-park/guindy-national-park.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GovernmentMuseumComponent } from './government-museum/government-museum.component';
import { FortStGeorgeComponent } from './fort-st-george/fort-st-george.component';
import { AboutChennaiComponent } from './about-chennai/about-chennai.component';

const routes: Routes = [{path:'marinaBeach',component:MarinaBeachComponent},
{path:'mahabalipuram',component:MahabalipuramComponent},
{path:'GuindyNationalpark',component:GuindyNationalParkComponent},
{path:'governmentmuseum',component:GovernmentMuseumComponent},
{path:'fortStGeorge',component:FortStGeorgeComponent},
{path:'aboutUs',component:AboutUsComponent},
{path:'aboutcity',component:AboutChennaiComponent}
// {path:'**',redirectTo:'marinabeach'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
