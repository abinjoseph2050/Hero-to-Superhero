import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-about',
  templateUrl: './route-about.component.html',
  styleUrls: ['./route-about.component.scss'],
})
export class RouteAboutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToEdit() {
    this.router.navigate(['about', 'edit']);
  }
}
