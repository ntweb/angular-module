import { Injectable } from '@angular/core';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';

@Injectable({
    providedIn: 'root'
})
export class BookDataService extends DefaultDataService<Book>{

    url = `https://6214c62e89fad53b1f1e81ed.mockapi.io/api/books`;

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Book', http, httpUrlGenerator);
    }

    override getAll(): Observable<Book[]> {
        return this.http.get<Book[]>(this.url)
    }

    override update(update: Update<Book>): Observable<Book> {
        /*
        console.log(`${this.url}/${update.id}`);
        console.log(update.changes);
        */
        return this.http.put<Book>(`${this.url}/${update.id}`, update.changes);
    }
}
