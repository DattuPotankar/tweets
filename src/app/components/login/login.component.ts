import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:any
  upass:any

  userData: any
  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
  }
getData(){
  // console.log(this.uname + ", " + this.upass)
  this.service.getUsers().subscribe((res)=>{
    console.log(res)
    this.userData = res
    const data = this.userData.filter((item:any)=>{
     return ((item.username == this.uname) && (item.password == this.upass))
    })
    if(data.length > 0){
      console.log("valid user")
      this.service.signIn(this.uname)
      this.router.navigate(['/home-page'])
      // this.router.navigate([])
    } else {
      // console.log("Invalid user")
      alert("Invalid credentials")
      this.uname = ""
      this.upass = ""
    }
  })
}
}
