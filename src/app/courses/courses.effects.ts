import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CourseActions} from "./action-types";
import {BookService} from "./services/book.service";
import {concatMap, map} from "rxjs";
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

    constructor(private actions$: Actions, private bs: BookService) {
    }
}
