import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-assignment',
  templateUrl: './dir-assignment.component.html',
  styleUrls: ['./dir-assignment.component.scss'],
})
export class DirAssignmentComponent implements OnInit {
  isshowDetail = false;
  logs: any = [];

  constructor() {}

  ngOnInit(): void {}

  showDetail() {
    this.isshowDetail = !this.isshowDetail;
    this.logs.push(new Date());
  }
}
