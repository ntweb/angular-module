import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
