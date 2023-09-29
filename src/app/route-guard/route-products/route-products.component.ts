import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-products',
  templateUrl: './route-products.component.html',
  styleUrls: ['./route-products.component.scss'],
})
export class RouteProductsComponent implements OnInit {
  channelName = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      this.channelName = res['data'];
    });
  }
}
