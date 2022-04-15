import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
    catchError,
    concat,
    concatMap,
    debounceTime,
    distinctUntilChanged, finalize,
    fromEvent,
    map, noop,
    Observable, of,
    shareReplay
} from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from '../models/Book';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectAdvancedBooks, selectBeginnerBooks } from '../courses.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { courseUpdated, courseUpdatedWithError } from '../course.actions';
import { BookEntityService } from '../services/book-entity.service';

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

    constructor(
        private store: Store<AppState>,
        private fb: FormBuilder,
        private bes: BookEntityService) {

        this.form = fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            price: [0, [Validators.required]],
        });

    }

    ngOnInit(): void {
        this.bes.getAll().subscribe();

        this.books$ = this.bes.entities$.pipe(
            map(books => books.filter(book => book.title.includes('Rus')))
        );

        this.booksAdvanced$ = this.bes.entities$.pipe(
            map(books => books.filter(book => book.title.includes('Sleek')))
        );

    }

    ngAfterViewInit(): void {
    }

    onBookSelected(book: Book) {
        this.selectedBook = book;
        this.form.patchValue({
            ...this.selectedBook
        })
    }

    save() {
        if (this.selectedBook) {0
            const changes = {...this.selectedBook, ...this.form.value};

            this.bes.update(changes)

            this.selectedBook = undefined;
        }
    }

    saveWithError() {
        if (this.selectedBook) {
            const changes = {...this.selectedBook, ...this.form.value, id: 99999999999999};

            this.bes.update(changes).pipe(
                catchError(error => { alert('error'); return of([])}),
                finalize(() => alert('finished'))
            );

            this.selectedBook = undefined;
        }
    }
}
