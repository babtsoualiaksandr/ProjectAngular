import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';

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

  getUser(): Observable<User| null>{
    return this.auth.user;
  }
}
