import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article, SharedService } from '@shared-lib';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.scss'
})
export class ListArticlesComponent implements OnInit{

  articleList$!: BehaviorSubject<Article[]>;

  constructor(private service:SharedService){}

  ngOnInit(): void {
    this.articleList$ = this.service.getData();
  }

}
