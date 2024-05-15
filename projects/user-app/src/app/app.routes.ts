import { Routes } from '@angular/router';
import { ListArticlesComponent } from '@shared-lib';
import { ViewArticleComponent } from './view-article/view-article.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'article',
    pathMatch: 'full'
},
{
    path: 'article',
    component: ListArticlesComponent
}, {
    path: 'article/view/:id',
    component: ViewArticleComponent
}
];
