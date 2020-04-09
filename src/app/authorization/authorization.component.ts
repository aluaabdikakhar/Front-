import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  authorized = true;
  present = false;
  user: User = {
    mail: '',
    password1: '',
    password2: '',
    booksISBN: []
  };
  constructor(
    private userService: UserService,
  ) { }
  ngOnInit(): void {
  }
  loginPage(): void {
    this.authorized = true;
  }
  registrationPage(): void {
    this.authorized = false;
  }
  login(): void {
    this.present = (this.user.mail !== '' && this.user.password1 !== '');
  }
  register(): void {
    if (this.user.mail !== '' && this.user.password1 !== '' && this.user.password1 === this.user.password2) {
      this.userService.addUser(this.user)
        .subscribe();
      this.login();
    } else {
      this.present = false;
    }
  }
  submit() {
    this.userService.addUser(this.user)
      .subscribe();
  }
}
