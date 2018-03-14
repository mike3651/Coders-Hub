import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Http, HttpModule } from '@angular/http';
import { StringsComponent } from './strings/strings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StringsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
