import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article, SharedService } from '@shared-lib';

@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.scss'
})
export class ListArticlesComponent implements OnInit{

  articleList!:Article[] ;
  loading:boolean= false;

  constructor(private service:SharedService){}

  ngOnInit(): void {
    this.loading = true;
    this.service.getData().subscribe({
      next:(res:any) => {
        this.articleList = res; 
      },
      error: () => this.loading = false,
      complete: () => this.loading = false
    });
  }

}
