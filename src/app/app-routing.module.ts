import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddpostComponent } from './addpost/addpost.component';
import { BrowsecourseComponent } from './browsecourse/browsecourse.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'login', component: LoginComponent, data: { animation: 'LoginPage' } },
  { path: 'dashboard', component: DashboardComponent, data: { animation: 'DashboardPage' } },
  { path: 'discussions', component: DiscussionsComponent, data: { animation: 'DiscussionsPage' } },
  { path: 'course/add', component: AddcourseComponent, data: { animation: 'DiscussionsPage' } },
  { path: 'course/browse', component: BrowsecourseComponent, data: { animation: 'LoginPage' } },
  { path: 'discussions/add', component: AddpostComponent, data: { animation: 'DashboardPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
