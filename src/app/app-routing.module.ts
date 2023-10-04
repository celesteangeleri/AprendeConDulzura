import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesLandingComponent } from './components/courses-landing/courses-landing.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'landinCourses', component: CoursesLandingComponent},
  {path: 'aboutUs', component: AboutUsComponent },
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
