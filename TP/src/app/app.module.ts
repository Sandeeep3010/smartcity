import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MarinaBeachComponent } from './marina-beach/marina-beach.component';
import { FortStGeorgeComponent } from './fort-st-george/fort-st-george.component';
import { GovernmentMuseumComponent } from './government-museum/government-museum.component';
import { GuindyNationalParkComponent } from './guindy-national-park/guindy-national-park.component';
import { MahabalipuramComponent } from './mahabalipuram/mahabalipuram.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutChennaiComponent } from './about-chennai/about-chennai.component'; 
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MarinaBeachComponent,
    FortStGeorgeComponent,
    GovernmentMuseumComponent,
    GuindyNationalParkComponent,
    MahabalipuramComponent,
    AboutChennaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
