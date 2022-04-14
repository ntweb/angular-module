import { createAction, props } from '@ngrx/store';
import {Book} from "./models/Book";
import { Update } from '@ngrx/entity';

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
);

export const allCoursesLoaded = createAction(
    '[Load Courses Effect] All Courses Loaded',
    props<{ books: Book[]}>()
);

export const courseUpdated = createAction(
    '[Edit Course] Course updated',
    props<{update: Update<Book>}>()
)

export const courseUpdatedWithError = createAction(
    '[Edit Course] Course updated with error',
    props<{update: Update<Book>}>()
)
