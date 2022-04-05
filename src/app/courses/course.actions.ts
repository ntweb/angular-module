import { createAction, props } from '@ngrx/store';

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
);

export const loadAllLoaded = createAction(
    '[Load Courses Effect] All Courses Loaded'
);
