import { BreadcrumbModule } from "./../../components/breadcrumb/breadcrumb.module";
import { BreadcrumbComponent } from "./../../components/breadcrumb/breadcrumb.component";
import { CardComponent } from "./../../components/card/card.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "./posts.component";
import { MatCardModule } from "@angular/material";
import { AddPostComponent } from "./add-post/add-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PostsComponent, CardComponent, AddPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
  ],
})
export class PostsModule {}
