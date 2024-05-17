import { Routes } from '@angular/router';
import { ListArticlesComponent } from '@shared-lib';
import { ViewArticleComponent } from './view-article/view-article.component';

export const routes: Routes = [
{
    path: '',
    component: ListArticlesComponent
}, {
    path: 'view/:id',
    component: ViewArticleComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
