import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/Book';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    @Input() book: Book | undefined;

    @Output() onBookSelected: EventEmitter<Book> = new EventEmitter<Book>();

    constructor() { }

    ngOnInit(): void {
    }

    onBookSelectedHandler() {
        this.onBookSelected.emit(this.book);
    }

}
