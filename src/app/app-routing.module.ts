import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.\component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddTweetComponent } from './components/add-tweet/add-tweet.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:"", component: LoginComponent}, //default routing
  {path:"login", component: LoginComponent}, 
  {path:"header", component: HeaderComponent,canActivate:[AuthGuard]},
  {path:"side-bar", component: SideBarComponent,canActivate:[AuthGuard]},
  {path:"home-page", component: HomePageComponent,canActivate:[AuthGuard]},
  {path:"add-tweet", component: AddTweetComponent,canActivate:[AuthGuard]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
