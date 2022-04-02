import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    title = 'angular-module';

    isLoggedIn$: Observable<boolean> | undefined;
    isLoggedOut$: Observable<boolean> | undefined;

    constructor(private router: Router, private store: Store<AppState>) {

    }

    ngOnInit(): void {
    }


}
