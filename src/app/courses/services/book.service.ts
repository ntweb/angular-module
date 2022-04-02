import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private http: HttpClient) {}

    getBooks(search: string = ''): Observable< Book[]> {
        let url = `https://6214c62e89fad53b1f1e81ed.mockapi.io/api/books`;
        if (search !== '') url += `?title=${search}`;

        return this.http.get<Book[]>(url);
    }
}
