import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header-padawan-test.component';
import { HomeComponent } from './home/home-padawan-test.component';
import { ContactPageComponent } from './contact-page/contact-padawan-test.component';
import { FormPageComponent } from './form-page/form-padawan-test.component';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactPageComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
