import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AuthGuard } from '../login/auth.guard';
import {CoursesResolver} from "./courses.resolver";

const routes: Routes = [
    {
        path: '', component: CourseListComponent,
        canActivate: [AuthGuard],
        resolve: {
            courses: CoursesResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [CoursesResolver]
})
export class CoursesRoutingModule { }
