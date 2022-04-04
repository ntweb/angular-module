import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LoginActions} from "./action-types";
import {tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class LoginEffect {

    /**
     * Version: 3
     * Un miglioramento potrebbe essere che
     * nel caso in cui abbiamo sbagliato a fare il login non vogliamo salvare
     * alcun dato dao dell'utente nel localstorage
     *
     * NB: createEffect prende in input una fnzione e resistituice
     * un observable che viene immediatamente sottoscritto
     *
     * NB: è importante metter alla fine {dispatch: false}
     * perchè altrimenti si rilancerebbe l'action provocando in infinite loop
     */
    login$ = createEffect(() => this.actions$.pipe(
        ofType(LoginActions.login),
        tap(action => {
            localStorage.setItem('user', JSON.stringify(action.user));
        })
    ), {dispatch: false});

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(LoginActions.logout),
        tap(action => {
            localStorage.removeItem('user');
            this.route.navigateByUrl('/login');
        })
    ), {dispatch: false});

    constructor(private actions$: Actions, private route: Router) {

        /**
         * Version: 1
         * Questo è un modo di scrivere un effect,
         * di seguito facciamo in un altro modo typesafe
         */
        /*this.actions$.subscribe((action: any) => {
            if (action.type == "[Login Page] User Login") {
                localStorage.setItem('user', JSON.stringify(action['user']));
            }
        });*/

        /**
         * Version: 2
         * "ofType" è un operatore di NgRx che equivale al filter di RxJx
         */
        /*const login$ = this.actions$.pipe(
              ofType(LoginActions.login),
            tap(action => {
                localStorage.setItem('user', JSON.stringify(action.user));
            })
        );
        login$.subscribe();*/

    }
}
