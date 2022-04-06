import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';
import {EffectsModule} from "@ngrx/effects";
import {CoursesEffects} from "./courses.effects";
import {StoreModule} from "@ngrx/store";
import * as fromCourses from './reducers';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        StoreModule.forFeature(fromCourses.bookReducerFeatureKey, fromCourses.reducer),
        EffectsModule.forFeature([CoursesEffects])
    ]
})
export class CoursesModule { }
