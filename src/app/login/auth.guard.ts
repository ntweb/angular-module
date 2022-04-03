import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { isLoggedIn } from './login.selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private state: Store<AppState>, private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.state.pipe(
            select(isLoggedIn),
            tap(isLoggedIn => {
                if (!isLoggedIn)
                    this.router.navigateByUrl('/login');
            })
        );
    }

}
