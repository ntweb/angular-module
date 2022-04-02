import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.loginReducer, { metaReducers: fromLogin.metaReducers })
    ]
})
export class LoginModule { }
