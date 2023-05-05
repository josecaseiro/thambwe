import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './view/menu/menu.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { BannerComponent } from './view/homepage/banner/banner.component';
import { ThambweComponent } from './view/homepage/thambwe/thambwe.component';
import { FonteComponent } from './view/homepage/fonte/fonte.component';
import { RegionalComponent } from './view/homepage/regional/regional.component';
import { MusicasComponent } from './view/homepage/musicas/musicas.component';
import { VideosComponent } from './view/homepage/videos/videos.component';
import { GaleriaComponent } from './view/homepage/galeria/galeria.component';
import { MusicosComponent } from './view/homepage/musicos/musicos.component';
import { RodapeComponent } from './view/rodape/rodape.component';
import { FolcloreComponent } from './view/folclore/folclore.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    BannerComponent,
    ThambweComponent,
    FonteComponent,
    RegionalComponent,
    MusicasComponent,
    VideosComponent,
    GaleriaComponent,
    MusicosComponent,
    RodapeComponent,
    FolcloreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
