import {CanActivate, Router} from "@angular/router";

import {Observable} from "rxjs/Observable";
import {FirebaseAuth, FirebaseAuthState} from 'angularfire2';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: FirebaseAuth, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.auth
      .take(1)
      .map((authState: FirebaseAuthState) => !!authState)
      .do(authenticated => {
        if (!authenticated) {this.router.navigate(['']);}
      });
  }
}
