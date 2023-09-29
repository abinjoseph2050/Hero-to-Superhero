import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  serverName = '';
  servers: any = ['server 1', 'Test Server 2'];

  constructor() {}

  ngOnInit(): void {}

  addServer() {
    this.servers.push(this.serverName);
  }
}
