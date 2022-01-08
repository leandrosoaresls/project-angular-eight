import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { ToDosComponent } from "./pages/to-dos/to-dos.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "posts",
    pathMatch: "full",
  },
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "albums",
    component: AlbumsComponent,
  },
  {
    path: "to-dos",
    component: ToDosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
