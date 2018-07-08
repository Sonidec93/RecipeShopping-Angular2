import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.action';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap, map, tap,mergeMap } from "rxjs/operators";
@Injectable()
export class AuthEffects {
    //in the end we have dispatched an action as it is important while using effects in case you don't want to 
    //then use @Effect({dispatch:false})
    @Effect()
    authSignUp = this.actions$.ofType(AuthActions.TRY_SIGNUP).pipe(map((action: AuthActions.TrySignUp) => {
        return action.payload;
    }),switchMap((auth: { username: string, password: string }) => {
        return from(firebase.auth().createUserWithEmailAndPassword(auth.username, auth.password))
    }),switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
    }),mergeMap((token: string) => {
        return [
            {
                type: AuthActions.SIGN_UP
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ]
    }));

    @Effect()
    authSignIn = this.actions$.ofType(AuthActions.TRY_SIGNIN).pipe(map((action: AuthActions.TrySignIn) => {
        return action.payload;
    }),switchMap((auth: { username: string, password: string }) => {
        return from(firebase.auth().signInWithEmailAndPassword(auth.username, auth.password));
    }),switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
    }),mergeMap((token: string) => {
        this.router.navigate(['/recipes']);
        return [
            {
                type: AuthActions.SIGN_IN
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ]
    }));
    @Effect({ dispatch: false })
    authLogout = this.actions$.ofType(AuthActions.LOGOUT).pipe(tap(() => {//take helps us to execute code without hindering the observable
        this.router.navigate(['/signIn']);
    }));
    // authLogout=this.actions$.ofType(AuthActions.TRY_LOGOUT).switchMap(()=>{
    //     return fromPromise(firebase.auth().signOut());
    // }).switchMap(()=>{
    //     this.router.navigate(['/signIn']);
    //     return [
    //         {
    //             type:AuthActions.LOGOUT
    //         }
    //     ]
    // })
    constructor(private actions$: Actions, private router: Router) {

    }
}