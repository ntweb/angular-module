import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './login.effects';



@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.loginReducer, { metaReducers: fromLogin.metaReducers }),
        EffectsModule.forFeature([LoginEffect])
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule { }
