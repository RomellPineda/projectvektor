import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ReviewComponent } from './review/review.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path: 'vektor', component: MainComponent},
  {path: 'vektor/new', component: AddComponent},
  {path: 'vektor/courses/:id/signup', component: ReviewComponent},
  {path: 'vektor/about', component: AboutComponent},
  {path: 'vektor/courses', component: CoursesComponent},
  {path: 'vektor/courses/:id', component: CourseComponent},
  {path: 'vektor/courses/:id/edit', component: EditComponent},
  {path: 'vektor/support', component: SupportComponent},
  
  {path: '', pathMatch: 'full', redirectTo: '/vektor'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
