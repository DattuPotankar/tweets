import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  showEditDialog: Boolean = false;

  @Input()
  tweet: any
  
  @Output()
  deleteEvent = new EventEmitter()

  @Output()
  editEvent = new EventEmitter()

  constructor(private service:DataService) { }

  ngOnInit(): void {
  }
  updateEditStatus() {
    this.showEditDialog = !this.showEditDialog
  }
  editTweet(tweet: any) {
    this.service.updateTweet(tweet).subscribe(() => {
      this.updateEditStatus();
      this.editEvent.emit();
    });
  }
  deleteTweet(id: any){
    this.deleteEvent.emit(id);
  }
}
