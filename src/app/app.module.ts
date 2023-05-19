import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddTweetComponent } from './components/add-tweet/add-tweet.component';
import { EditTweetComponent } from './components/edit-tweet/edit-tweet.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HomePageComponent,
    AddTweetComponent,
    EditTweetComponent,
    TweetComponent,
    RightSideBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
