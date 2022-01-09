import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlbumsComponent } from "./pages/albums/albums.component";
import { ToDosComponent } from "./pages/to-dos/to-dos.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "albums",
    pathMatch: "full",
  },
  {
    // lazy loading
    path: "posts",
    loadChildren: "./pages/posts/posts.module#PostsModule",
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
