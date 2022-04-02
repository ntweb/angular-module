import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { login } from '../login.actions';
import { LoginActions } from '../action-types';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private store: Store<AppState>) {

        this.form = fb.group({
            email: ['mimmo@mimmo.it', [Validators.required]],
            password: ['something', [Validators.required]],
        })
    }

    ngOnInit(): void {
    }

    login() {
        console.log(this.form.value);
        this.auth.login().pipe(
            tap(user => {
                console.log('user logged:', user);

                /**
                 * è preferibile introdurre un LoginActions
                 * perchè riporta dentro tutto ciò che definiamo nel file action
                 * **/
                // this.store.dispatch(login({user}));
                this.store.dispatch(LoginActions.login({user}));

                this.router.navigateByUrl('/courses');
            })
        ).subscribe()
    }
}
