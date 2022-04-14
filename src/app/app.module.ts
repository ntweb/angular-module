import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import * as fromAppState from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {LoginModule} from "./login/login.module";
import {RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";
import {CoursesModule} from "./courses/courses.module";
import { EntityDataModule } from '@ngrx/data';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LoginModule,
        CoursesModule,
        StoreModule.forRoot(fromAppState.reducers, { metaReducers: fromAppState.metaReducers }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
