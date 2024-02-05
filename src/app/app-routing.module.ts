import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component:StartComponent, title: 'Start framewor'},
  {path: 'about', component:AboutComponent, title: 'About'},
  {path: 'contact', component:ContactComponent, title: 'Contact'},
  {path: 'portfolio', component:PortfolioComponent, title: 'Portfolio'},
  {path: '**', component:NotFoundComponent, title: 'Not found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
