import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServicePageComponent } from './service-page/service-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: '/'} },
  { path: 'contacts', component: ContactsComponent, data: { state: 'contacts'} },
  { path: 'digital-marketingovoe-agentstvo', component: AboutComponent, data: { state: 'about'} },
  { path: 'marketingovie-uslugi', component: ServicesComponent, data: { state: 'services'} },

  { path: 'autsorsing-marketinga', component: ServicePageComponent, data: { state: 'service-page'} },
  { path: 'digital-strategiya', component: ServicePageComponent, data: { state: 'service-page'} },
  { path: 'branding', component: ServicePageComponent, data: { state: 'service-page'} },
  { path: 'raskrutka-sajtov', component: ServicePageComponent, data: { state: 'service-page'} },
  { path: 'kontekstnaya-reklama', component: ServicePageComponent, data: { state: 'service-page'} },
  { path: 'vnedrenie-crm-bitrix24', component: ServicePageComponent, data: { state: 'service-page'} },
  { path: 'sozdanie-sajtov', component: ServicePageComponent, data: { state: 'service-page'} },
  { path: 'sozdanie-videorolikov', component: ServicePageComponent, data: { state: 'service-page'} },

  { path: 'portfolio', component: PortfolioComponent, data: { state: 'portfolio'} },
  { path: 'portfolio/project/:id', component: ProjectComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
