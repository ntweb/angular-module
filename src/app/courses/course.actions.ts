import { createAction, props } from '@ngrx/store';
import {Book} from "./models/Book";

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
);

export const allCoursesLoaded = createAction(
    '[Load Courses Effect] All Courses Loaded',
    props<{ books: Book[]}>()
);
