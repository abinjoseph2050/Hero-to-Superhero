import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  username = '';
  isClick = false;

  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit(): void {}

  reset() {
    // this.username = '';
    this.isClick = true;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'palegreen' : 'mistyrose';
  }
}
