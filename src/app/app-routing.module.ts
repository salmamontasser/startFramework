import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full',title:'home'},
  {path:'home',title:'home',component:HomeComponent},
  {path:'about',title:'about',component:AboutComponent},
  {path:'portfolio',title:'portfolio',component:PortfolioComponent},
  {path:'contact',title:'contact',component:ContactComponent},
  {path:"**",title:'Not found',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
