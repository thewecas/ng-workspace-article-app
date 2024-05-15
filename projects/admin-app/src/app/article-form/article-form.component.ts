import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Article, AutoResizeDirective, SharedService } from '@shared-lib';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink, AutoResizeDirective],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss'
})
export class ArticleFormComponent implements OnInit, OnDestroy {
  article!: Article | null;
  articleForm!: FormGroup;
  title: string | null = 'New Article';
  isNew!: boolean ;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private service: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      if (param.id) {
        this.article = this.service.getDataById(param.id);
        this.initializeForm(this.article); this.title = null;
        this.isNew = false;
      }
      else {
        this.initializeForm();
        this.isNew = true;
      }

    });
    document.querySelector('#new_article_btn')?.classList.add('hidden')
  }

  initializeForm(data: Article | null = null) {
    this.articleForm = this.fb.group({
      title: [data?.title ?? null, Validators.required],
      content: [data?.content ?? null, Validators.required],
      author: [data?.author ?? null, Validators.required],
    });
  }

  saveArticle() {
    
    const preparedData: Article = {
      id: this.article?.id ?? crypto.randomUUID(),
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      author: this.articleForm.value.author,
      publishDate: new Date().toString(),
      likes:this.article?.likes ?? 0
    }
    this.service.updateArticle(preparedData);
    this.isNew = false;
  }

  deleteArticle() {
    if (this.article)
      this.service.removeArticle(this.article?.id);
    this.router.navigate(['../../'])
  }

  ngOnDestroy(): void {
    document.querySelector('#new_article_btn')?.classList.remove('hidden')

  }
}
