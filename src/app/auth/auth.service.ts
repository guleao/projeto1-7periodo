import { Injectable } from '@angular/core';
import { Router } from 'express';
import { User } from '../models/user/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  login(user: User): Observable<User | null> {
    let foundUser: User | null = null;
  
    if (user.email === 'admin@email.com' && user.password === '123') {
      foundUser = new User(1, "User", "admin@email.com", null, null);
    }
  
    return of(foundUser);
  }

  register(obj: User): Observable<string> {
    //return this.http.post<string>(this.API+"/save", obj, {responseType: 'text' as 'json'} );
    return of("Cadastro realizado com sucesso!");
  }
}
