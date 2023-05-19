import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent implements OnInit {

  showAddDialog: boolean = false;
  @Output()
  addEvent = new EventEmitter()
  constructor(private service: DataService, private router:Router) { }

  ngOnInit(): void {
  }
  addData(data:any){
    const tweetObj = {
      text:data.text,
      description:data.description
    }
    this.service.addTweet(tweetObj).subscribe(()=>{
      alert('Record added !')
      this.addEvent.emit()
      this.showAddDialog = false;
      this.router.navigate(['/home-page'])
    })
  }
  updateAddStatus() {
    this.showAddDialog = true;
  }
}
