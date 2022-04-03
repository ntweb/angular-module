import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class LoginEffect {
    constructor(private actions$: Actions) {
        this.actions$.subscribe((action: any) => {
            if (action.type == "[Login Page] User Login") {
                localStorage.setItem('user', JSON.stringify(action['user']));
            }
        })
    }
}
