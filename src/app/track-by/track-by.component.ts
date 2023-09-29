import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss'],
})
export class TrackByComponent implements OnInit {
  ngOnInit(): void {}

  users = [
    { name: 'Tony Stark', domain: 'Iron Man' },
    { name: 'Clint Barton', domain: 'Hawkeye' },
    { name: 'Bruce Banner', domain: 'Hulk' },
    { name: 'Scott Lang', domain: 'Ant Man' },
    { name: 'Natasha Romanoff', domain: 'Black Widow' },
  ];

  refreshList() {
    this.users = [
      { name: 'Tony Stark', domain: 'Iron Man' },
      { name: 'Steve Rogers', domain: 'Captain America' },
      { name: 'Bruce Banner', domain: 'Hulk' },
      { name: 'Bucky Barnes', domain: 'Winter Soldier' },
      { name: 'Natasha Romanoff', domain: 'Black Widow' },
      { name: 'Peter Parker', domain: 'SpiderMan' },
    ];
  }

  trackUser(index: number, item: any) {
    return item.name;
  }
}
