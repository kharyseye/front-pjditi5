import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
  {path : "articles", component: ArticlesComponent},
  {path : "newArticle", component: NewArticleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
