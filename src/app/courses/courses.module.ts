import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';
import {EffectsModule} from "@ngrx/effects";
import {CoursesEffects} from "./courses.effects";
import {StoreModule} from "@ngrx/store";
import * as fromCourses from './reducers';
import { ReactiveFormsModule } from '@angular/forms';
import {
    DefaultDataService,
    EntityDataModule,
    EntityDataService,
    EntityDefinitionService,
    EntityMetadataMap
} from '@ngrx/data';
import { BookDataService } from './services/book-data.service';

const entityMetadata: EntityMetadataMap = {
    Book: {
    }
};

@NgModule({
    declarations: [
        CourseListComponent,
        CourseComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        StoreModule.forFeature(fromCourses.bookReducerFeatureKey, fromCourses.reducer),
        EffectsModule.forFeature([CoursesEffects]),
        ReactiveFormsModule
    ]
})
export class CoursesModule {

    constructor(
        private eds: EntityDefinitionService,
        private entityDataService: EntityDataService,
        private bds: BookDataService) {
        this.eds.registerMetadataMap(entityMetadata);

        entityDataService.registerService('Book', bds);
    }
}
