import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddpostComponent } from './addpost/addpost.component';
import { BrowsecourseComponent } from './browsecourse/browsecourse.component';
import { DiscussiondetailsComponent } from './discussiondetails/discussiondetails.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeFooterComponent,
    LoginComponent,
    DashboardComponent,
    DiscussionsComponent,
    AddcourseComponent,
    AddpostComponent,
    BrowsecourseComponent,
    DiscussiondetailsComponent,
    ComingsoonComponent,
    SignupComponent,
    ResetpasswordComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
