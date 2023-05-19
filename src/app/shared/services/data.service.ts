import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL = "http://localhost:3000/tweets"
  userURL =  "http://localhost:3000/users"
  
  constructor(private http:HttpClient) { }

  // To get all tweets
  getTweets(){
    return this.http.get(this.baseURL);
   }
   getUsers(){
    return this.http.get(this.userURL);
   }
 
  // To get one tweet by id
  getTweet(id: any){
   return this.http.get(`${this.baseURL}/${id}`)
   }
 
   // To delete a tweet by id
  deleteTweet(id:any){
    return this.http.delete(`${this.baseURL}/${id}`)
  }
  
  // To add new tweet
  addTweet(Tweet: any){
    return this.http.post(this.baseURL,Tweet)
  }

  // To update a tweet
  updateTweet(tweet: any){
    return this.http.put(`${this.baseURL}/${tweet.id}`, tweet)
  }
   // store the user in the sessionStorage
   signIn(user:string){
    sessionStorage.setItem("user_key", user)
   }

   //Remove the user from the sessionStorage
   signOut(){
    sessionStorage.removeItem("user_key")
   }
}
