import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private http: HttpClient) { }

    loadUsers(){
      this.http.get('http://pg13sql.anykeeps.com/healthnextapi2/Account/Login').subscribe((res:any)=>{

      })
  }
}
