import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector, createReducer,
    createSelector,
    MetaReducer, on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { User } from '../models/User';
import { LoginActions } from '../action-types';

export const loginFeatureKey = 'login';

export interface LoginState {
    user: User | undefined
}

export const initialLoginState: LoginState = {
    user: undefined
}

export const metaReducers: MetaReducer<LoginState>[] = !environment.production ? [] : [];

export const loginReducer = createReducer(
    initialLoginState,

    on(LoginActions.login, (state, action) => {
        return {
            user: action.user
        }
    }),

    on(LoginActions.logout, (state, action) => {
        return {
            user: undefined
        }
    })
)
