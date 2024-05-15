import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Article, SharedService } from '@shared-lib';

@Component({
  selector: 'app-view-article',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.scss'
})
export class ViewArticleComponent implements OnInit {

  article!: Article | null;
  constructor(private route: ActivatedRoute, private router: Router, private service: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      this.article = this.service.getDataById(param.id);
      if (!this.article) {
        this.router.navigate(['../../']);
      }
    });
  }

}
