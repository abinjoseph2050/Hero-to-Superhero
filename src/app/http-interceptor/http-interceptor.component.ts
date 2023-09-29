import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.scss'],
})
export class HttpInterceptorComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  user() {
    this.http.get(`http://something.com/api/user`).subscribe((res) => {
      console.log(res);
    });
  }

  product() {
    this.http.get(`http://something.com/api/product`).subscribe((resp) => {
      console.log(resp);
    });
  }

  contact() {
    this.http.get(`http://something.com/api/contact`).subscribe((respo) => {
      console.log(respo);
    });
  }
}
