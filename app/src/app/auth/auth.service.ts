import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
public user = null;
  constructor(public auth: AngularFireAuth) {}

  login(): void {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout(): void {
    this.auth.signOut();
  }

  getUser(): Observable<User | null>{
    return from(this.auth.currentUser) ;
  }
}
