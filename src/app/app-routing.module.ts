import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { ContactPageComponent } from './contact-page/contact-padawan-test.component';
import { FormPageComponent } from './form-page/form-padawan-test.component';
import { HomeComponent } from './home/home-padawan-test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'form', component: FormPageComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
