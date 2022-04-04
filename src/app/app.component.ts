import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from './reducers';
import { map, Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from './login/login.selectors';
import {login, logout} from './login/login.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    title = 'angular-module';

    isLoggedIn$!: Observable<boolean>;
    isLoggedOut$!: Observable<boolean>;

    constructor(private router: Router, private store: Store<AppState>) {
    }

    ngOnInit(): void {

        const userProfile = localStorage.getItem("user");
        if (userProfile) {
            this.store.dispatch(login({user: JSON.parse(userProfile)}))
        }

        /**
         *  questo è il modo classico di interrogare lo store
         *  ma non è ottimizzato perchè ad ogni cambiamento dello store
         *  verrebbe emesso un nuovo valore, seppur identico, e tutta
         *  l'interfaccia si aggiornerebbe
         */
        /*
        this.isLoggedIn$ = this.store.pipe(
            map((state: any) => {
                return state['login'] && !!state['login'].user;
            })
        )

        this.isLoggedOut$ = this.store.pipe(
            map((state: any) => {
                return state['login'] && !state['login'].user;
            })
        )
        */


        /**
         * si potrebbe usare il "select" di NGRX
         * ma nel modo seguente non va bene.. perchè sarebbe preso solo
         * il valore quando cambia, ma il calcolo dentro la funzione select
         * verrebbe comunque effettuato (e per calcoli complessi questo non è un bene)
         */
        /*
        this.isLoggedIn$ = this.store.pipe(
            select ((state: any) => state['login'] && !!state['login'].user)

        )

        this.isLoggedOut$ = this.store.pipe(
            select((state: any) => state['login'] && !state['login'].user)
        )
        */

        /**
         * il metodo migliore è quello di usare i selector
         * che abbiamo definito in login.selectors.ts
         * che definiscono funzioni che vengono cachate
         */

        this.isLoggedIn$ = this.store.pipe(
            select(isLoggedIn)
        );

        this.isLoggedOut$ = this.store.pipe(
           select(isLoggedOut)
        );

    }

    logout() {
        this.store.dispatch(logout());
    }
}
