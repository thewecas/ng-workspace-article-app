import { Routes } from '@angular/router';
import { ListArticlesComponent } from '@shared-lib';
import { ArticleFormComponent } from './article-form/article-form.component';

export const routes: Routes = [
    {
        path: '',
        component: ListArticlesComponent
    }, {
        path: 'view/:id',
        component: ArticleFormComponent
    },
    {
        path: 'new',
        component: ArticleFormComponent
    }
    ,
    {
        path: '**',
        redirectTo: '',
    }
];
