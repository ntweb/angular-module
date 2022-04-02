import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/Book';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    @Input() book: Book | undefined;

    constructor() { }

    ngOnInit(): void {
    }

}
