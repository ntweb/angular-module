import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    url = `https://6214c62e89fad53b1f1e81ed.mockapi.io/api/books`;

    constructor(private http: HttpClient) {}

    getBooks(search: string = ''): Observable< Book[]> {
        if (search !== '') this.url += `?title=${search}`;

        return this.http.get<Book[]>(this.url);
    }

    updateBook(id: number, book: Partial<Book>): Observable<Book> {
        return this.http.put<Book>(`${this.url}/${id}`, book);
    }
}
