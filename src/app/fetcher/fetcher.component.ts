import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetcher',
  templateUrl: './fetcher.component.html',
  styleUrls: ['./fetcher.component.css']
})
export class FetcherComponent implements OnInit {

  // data can be any type
  data: any;

  // getting api data
  private url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(http: HttpClient) {

    //http.get returns an observable, which is accessed by subscribe
    http.get(this.url)
      .subscribe(response => {

        // Setting reponse to an array to hold the values
        this.data = response;
        console.log(this.data);

      });
  }

  ngOnInit() {
  }

}