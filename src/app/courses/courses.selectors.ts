import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksState, selectAll } from './reducers';
// import * as fromBooks from './reducers';

export const selectBooksState = createFeatureSelector<booksState>("books");

export const selectAllBooks = createSelector(
    selectBooksState,
    selectAll
)

export const selectBeginnerBooks = createSelector(
    selectAllBooks,
    books => books.filter(book => book.title.includes('Rus'))
)

export const selectAdvancedBooks = createSelector(
    selectAllBooks,
    books => books.filter(book => book.title.includes('Sleek'))
)
