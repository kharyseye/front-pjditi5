import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
article: any;
  constructor(private http:HttpClient){
  }

  ngOnInit() {
    this.http.get<any>("https://localhost:44341/api/Articles")
    .subscribe({
      next : data => this.article = data
    })
  }

}
