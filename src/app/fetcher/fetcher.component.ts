import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetcher',
  templateUrl: './fetcher.component.html',
  styleUrls: ['./fetcher.component.css']
})
export class FetcherComponent implements OnInit {

  // data can be any type
  data: any = {};

  // url to retrieve api data
  private url: string = "https://jsonplaceholder.typicode.com/posts";


  // HttpClient is the same as the XMLHttpRequest
  constructor(http: HttpClient) {

    console.log("The HttpService has started");

    //http.get returns an observable, which is accessed by subscribe
    http.get(this.url)
      .subscribe(response => {

        // Setting reponse to an array to hold the values
        this.data = response;
        console.log(this.data);

      },
      
      // Runs when there is an error that happens.
      (error) => {
        console.log( error );
              
    },

    // Runs once the HttpRequest has finished.
    () => {
        console.log("The service has completed");
      });
 
    }

  ngOnInit() {
  }

}
