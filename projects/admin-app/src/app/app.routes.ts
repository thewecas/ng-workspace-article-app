import { Routes } from '@angular/router';
import { ListArticlesComponent } from '@shared-lib';
import { ArticleFormComponent } from './article-form/article-form.component';

export const routes: Routes = [
    
    {
        path: '',
        redirectTo: 'article',
        pathMatch: 'full'
    },
    {
        path: 'article',
        component: ListArticlesComponent
    }, {
        path: 'article/view/:id',
        component: ArticleFormComponent
    },
    {
        path: 'article/new',
        component: ArticleFormComponent
    }
];
