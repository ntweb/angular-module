import { Action, createReducer, on } from '@ngrx/store';
import {Book} from "../models/Book";
import {CourseActions} from "../action-types";


export const bookReducerFeatureKey = 'books';

export interface booksState {
    books: Book[]
}

export const initialState: booksState = {
    books: []
};

export const reducer = createReducer(
    initialState,

    on(CourseActions.allCoursesLoaded,
        (state, action) => {
            return { ...state, books: action.books }
        }
    )
);

