import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ProjectComponent } from './project/project.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ServicePageComponent } from './service-page/service-page.component';
import {ServiceAutsorsingComponent} from './service-page/templates/autsorsing.component';
import {ServiceBitrix24Component} from './service-page/templates/bitrix24.component';
import {ServiceBrandingComponent} from './service-page/templates/branding.component';
import {ServiceKontekstComponent} from './service-page/templates/kontekst.component';
import {ServiceRaskrutkaComponent} from './service-page/templates/raskrutka.component';
import {ServiceSitecreationComponent} from './service-page/templates/sitecreation.component';
import {ServiceStrategiyaComponent} from './service-page/templates/strategiya.component';
import {ServiceVideocreationComponent} from './service-page/templates/videocreation.component';
import { ServiceSliderComponent } from './service-slider/service-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent,
    PortfolioComponent,
    ProjectComponent,
    NotfoundComponent,
    FooterComponent,
    ServicePageComponent,
    ServiceAutsorsingComponent,
    ServiceBitrix24Component,
    ServiceBrandingComponent,
    ServiceKontekstComponent,
    ServiceRaskrutkaComponent,
    ServiceSitecreationComponent,
    ServiceStrategiyaComponent,
    ServiceVideocreationComponent,
    ServiceSliderComponent
    // FilterModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InViewportModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
