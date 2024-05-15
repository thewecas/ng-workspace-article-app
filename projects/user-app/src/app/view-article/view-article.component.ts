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
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private service: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      this.loading = true;
      this.service.getDataById(param.id).subscribe({
        next: (res: any) => {
          this.article = res;

        },
        error: _ => {
          this.loading = false;
          this.router.navigate(['../../']);
        },
        complete: () => {
          this.loading = false;
        }
      });

    });
  }

}
