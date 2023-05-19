import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  tweets:any;
  term:any
  // empData:any
  // tableName = "tweets"
  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    
    this.getTweets();
  }
  getTweets() {
    console.log('hello')
     this.service.getTweets().subscribe((res) => {
      // console.log(res)
      this.tweets = res
    })
  }
  deleteTweet(id: any) {
    this.service.deleteTweet(id).subscribe(()=>{
      alert('Record deleted successfully');
      this.getTweets();
    })
  }
  signOut(){
    if(confirm('Are you sure you want to sign out?')){
      this.service.signOut()
      this.router.navigate(['/'])
    }

  }
}
