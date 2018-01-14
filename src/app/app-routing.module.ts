import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ArticleComponent} from './article/article.component';
import {CardComponent} from "./card/card.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  // { path: '',  redirectTo: 'xxxxxx', pathMatch: 'full' },
  { path: '',  component:AppComponent },
  { path: 'index', component: ArticleComponent },
  { path: 'article', component: ArticleComponent, outlet: 'admin' },
  { path: 'card', component: CardComponent, outlet: 'content' },
  { path: '**', component: PagenotfoundComponent, outlet: 'content'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
