import { Action, createReducer, on } from '@ngrx/store';
import {Book} from "../models/Book";
import {CourseActions} from "../action-types";
import { createEntityAdapter, EntityState } from '@ngrx/entity';


export const bookReducerFeatureKey = 'books';

export interface booksState extends EntityState<Book>{
    books: Book[]
}

export const adapter = createEntityAdapter<Book>();

export const {
    selectAll
} = adapter.getSelectors();

export const initialState = adapter.getInitialState();

export const reducer = createReducer(
    initialState,

    on(CourseActions.allCoursesLoaded,
        (state, action) => {
            return adapter.setAll(action.books, state);
            /* return { ...state, books: action.books } */
        }
    )
);

