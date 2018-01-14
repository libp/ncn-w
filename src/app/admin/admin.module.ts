import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {ArticleComponent} from "../article/article.component";
import {AdminComponent} from "./admin.component";
import {CommentsComponent} from "../comments/comments.component";

const ROUTES: Routes = [
  { path: '',component: AdminComponent, outlet: 'admin'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    AdminComponent,
    ArticleComponent,
    CommentsComponent
  ],
  exports: [RouterModule]
})
export class AdminModule { }
