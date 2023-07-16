import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:string = 'Dating app';
  users: any;

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:5240/api/users').subscribe({
      next: (resp) => this.users = resp,
      error: err => console.log(err),
      complete: () => console.log('Request has completed')
    });
  }

}
