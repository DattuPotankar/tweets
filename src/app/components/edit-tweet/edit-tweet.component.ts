import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css']
})
export class EditTweetComponent implements OnInit {
  tweet: any

  @Input()
  id: any
  
  @Output()
  editEvent = new EventEmitter()

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getTweet(this.id);
  }

  getTweet(id:any) {
    this.tweet =  this.service.getTweet(id).subscribe((res) => {
      // console.log(res)
      this.tweet = res
    })
  }

  editTweet(tweet: any) {
    this.editEvent.emit({...tweet, id: this.id})
  }
}
