import { AddPostComponent } from "./add-post/add-post.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./posts.component";

const routes: Routes = [
  {
    path: "",
    component: PostsComponent,
  },
  {
    path: "add-post",
    component: AddPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
