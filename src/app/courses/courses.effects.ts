import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CourseActions} from "./action-types";
import {BookService} from "./services/book.service";
import { catchError, concatMap, map, of } from "rxjs";
import {allCoursesLoaded} from "./course.actions";
import {Book} from "./models/Book";

@Injectable()
export class CoursesEffects {

    loadCourses$ = createEffect(
        () => this.actions$.pipe(
            ofType(CourseActions.loadAllCourses),
            concatMap(action => this.bs.getBooks()),
            map(books => {
                // console.log('books', books);
                return allCoursesLoaded({books});
            })
        )
    )

    saveCourse$ = createEffect(
        () => this.actions$.pipe(
            ofType(CourseActions.courseUpdated, CourseActions.courseUpdatedWithError),
            concatMap(action => this.bs.updateBook(+action.update.id, action.update.changes)),
            catchError(err => {
                console.log(err);
                return of([])
            })
        ),
        {dispatch: false}
    )

    constructor(private actions$: Actions, private bs: BookService) {
    }
}
