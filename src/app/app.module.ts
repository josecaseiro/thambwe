import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './view/menu/menu.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { BannerComponent } from './view/homepage/banner/banner.component';
import { ThambweComponent } from './view/homepage/thambwe/thambwe.component';
import { FonteComponent } from './view/homepage/fonte/fonte.component';
import { RegionalComponent } from './view/homepage/regional/regional.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    BannerComponent,
    ThambweComponent,
    FonteComponent,
    RegionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
