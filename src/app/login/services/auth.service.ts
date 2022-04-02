import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    /** fake login **/
    login() : Observable<User> {
        const user : User = { name: 'Mimmo' };
        return of(user);
    }

}
