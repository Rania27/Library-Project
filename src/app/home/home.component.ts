import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  greeting: string;

  constructor(private userService: UserService, private authenticationService: AuthentificationService, private router: Router) { }

  ngOnInit() {
       this.userService.getGreeting()
      .subscribe(result => {
        this.greeting = result;
      });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

}