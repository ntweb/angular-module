import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksState } from './reducers';
import * as fromBooks from './reducers';

export const selectBooksState = createFeatureSelector<booksState>("books");

export const selectAllBooks = createSelector(
    selectBooksState,
    fromBooks.selectAll
)

export const selectBeginnerBooks = createSelector(
    selectAllBooks,
    books => books.filter(book => book.title === 'Rustic Fresh Cheese')
)

export const selectAdvancedBooks = createSelector(
    selectAllBooks,
    books => books.filter(book => book.title === 'Sleek Soft Cheese')
)
