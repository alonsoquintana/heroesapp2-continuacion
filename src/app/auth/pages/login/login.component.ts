import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( private router: Router,
               private authservice:AuthService ) { }

  login() {

    // Ir al backend
    // un usuario
    this.authservice.login()
      .subscribe( resp => {
        console.log(resp);

        if( resp.id ) {
          this.router.navigate(['./heroes'])
        }
      })
  }

  ingresarSinLogin() {
    this.authservice.logout();
    this.router.navigate(['./heroes'])
  }

}
