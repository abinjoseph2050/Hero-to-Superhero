import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-header',
  templateUrl: './route-header.component.html',
  styleUrls: ['./route-header.component.scss'],
})
export class RouteHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['home']);
  }

  goToProducts() {
    this.router.navigate(['products']);
  }

  goToAbout() {
    this.router.navigate(['about']);
  }

  goToContact() {
    this.router.navigate(['contact']);
  }

  goToOffers() {
    this.router.navigate(['offers']);
  }

  goToAdmin() {
    this.router.navigate(['admin']);
  }
}
