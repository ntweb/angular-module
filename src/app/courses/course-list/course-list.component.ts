import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concat, concatMap, debounceTime, distinctUntilChanged, fromEvent, map, Observable, shareReplay } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from '../models/Book';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectBeginnerBooks } from '../courses.selectors';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, AfterViewInit {

    @ViewChild('filter') filter!: ElementRef;

    books$!: Observable<any>;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        const initialBooks$ = this.doFilter();

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

    doFilter(search: string = ''): Observable<Book[]> {
        return this.store.pipe(select(selectBeginnerBooks));
    }

}
