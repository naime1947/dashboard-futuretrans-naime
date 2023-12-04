import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   public isLogin = false;
   public userAs: any;

   constructor() { }

   login(value: string) {
      this.isLogin = true;
      this.userAs = value;
      localStorage.setItem('STATE', 'true');
      localStorage.setItem('USER', this.userAs);
      return of({ success: this.isLogin, user: this.userAs });
   }

   logout() {
      this.isLogin = false;
      this.userAs = '';
      localStorage.setItem('STATE', 'false');
      localStorage.setItem('USER', this.userAs);
      return of({ success: this.isLogin, user: '' });
   }

   isLoggedIn() {
      const loggedIn = localStorage.getItem('STATE');
      if (loggedIn == 'true')
         this.isLogin = true;
      else
         this.isLogin = false;
      return this.isLogin;
   }

   getUser() {
      this.userAs = localStorage.getItem('USER');
      return this.userAs;
   }
}
