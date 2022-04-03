import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loginFeatureKey, LoginState } from './reducers';

/**
 * Questa è la versione del Selector non tipizzato
 */
/*
export const isLoggedIn  = createSelector(
    (state: any) => state[loginFeatureKey],
(login) => login?.user !== undefined
)
*/

/**
 * Se vogliamo tipizzarlo dobbiamo accedere al tipo si stato
 * definito nel reducer
 */

export const selectLoginState = createFeatureSelector<LoginState>(loginFeatureKey);
export const isLoggedIn  = createSelector(
     selectLoginState,
     (login) => !!login?.user
)

export const isLoggedOut  = createSelector(
    isLoggedIn,
    isLoggedIn => !isLoggedIn
)
