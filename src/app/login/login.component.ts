import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../model/authentication-request';
import { AuthenticationResponse } from '../authentication-response';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  auth = new AuthenticationRequest();
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  onLogin() {
    console.log(this.auth);
    this.loginService.loginUser(this.auth).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('user', data.userName);
        localStorage.setItem('jwtToken', data.jwtAuthToken);
        this.router.navigate(['consumer']);
      },
      (error) => console.log('Error Occured')
    );
  }
}
