import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  showNavs: boolean = false;
  constructor() { }

  ngOnInit(): void {
      if(sessionStorage.getItem("user_key")){
        this.showNavs = true;
      } else {
        this.showNavs = false;
      }
  }

}
