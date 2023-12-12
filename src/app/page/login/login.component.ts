import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginObj: any = {
      "OrganizationId": 1,
      "UserName": "",
      "Password": ""
    }

  constructor(private http: HttpClient, private router: Router){}

  onLogin() {
    this.http.post('http://pg13sql.anykeeps.com/healthnextapi2/Account/Login', this.loginObj).subscribe((res:any)=>{
      console.log(res);
      if(res.Success) {
        alert('login Success');
        localStorage.setItem('loginTOken', res.ReturnObject.AccessToken);
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res.message);
      }
    })
  }

}
