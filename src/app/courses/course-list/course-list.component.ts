import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concat, concatMap, debounceTime, distinctUntilChanged, fromEvent, map, Observable, shareReplay } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from '../models/Book';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectAdvancedBooks, selectBeginnerBooks } from '../courses.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { courseUpdated, courseUpdatedWithError } from '../course.actions';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, AfterViewInit {

    @ViewChild('filter') filter!: ElementRef;

    selectedBook: Book | undefined;

    books$!: Observable<Book[]>;
    booksAdvanced$!: Observable<Book[]>;

    form: FormGroup;

    constructor(private store: Store<AppState>, private fb: FormBuilder) {
        this.form = fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            price: [0, [Validators.required]],
        })
    }

    ngOnInit(): void {
        const initialBooks$ = this.doFilter();
        this.booksAdvanced$ = this.store.pipe(select(selectAdvancedBooks));

        /*
        const searchBooks$: Observable<Book[]> = fromEvent(
            this.filter.nativeElement,
            'keyup'
        ).pipe(
            debounceTime(500),
            map((e: any) => e.target.value),
            distinctUntilChanged(),
            concatMap((search) => this.bs.getBooks(search)),
            shareReplay() // questo evita di eseguire le chiamate 2 volte avendo 2 " | async " nel templte
        );
         */

        // this.books$ = concat(initialBooks$, searchBooks$);
        this.books$ = concat(initialBooks$);
    }

    ngAfterViewInit(): void {
    }

    doFilter(search: string = ''): Observable<Book[]> {
        return this.store.pipe(select(selectBeginnerBooks));
    }

    onBookSelected(book: Book) {
        this.selectedBook = book;
        this.form.patchValue({
            ...this.selectedBook
        })
    }

    save() {
        if (this.selectedBook) {
            const changes = {...this.form.value};
            const update: Update<Book> = {
                id: this.selectedBook.id,
                changes: changes
            }
            this.store.dispatch(courseUpdated({update}))

            this.selectedBook = undefined;
        }
    }

    saveWithError() {
        if (this.selectedBook) {
            const changes = {...this.form.value};
            const update: Update<Book> = {
                id: 9999999999999,
                changes: changes
            }
            this.store.dispatch(courseUpdatedWithError({update}))

            this.selectedBook = undefined;
        }
    }
}
