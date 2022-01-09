import { Post } from "./../../models/post.model";
import { PostsService } from "./../../services/posts.service";
import { Component, OnInit } from "@angular/core";
import { MenuItem } from "src/app/components/breadcrumb/breadcrumb.component";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  public posts: Post[];

  public breadcrumb: MenuItem[] = [
    {
      label: "Posts",
    },
  ];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts(1).subscribe((posts: Post[]) => {
      this.posts = posts;
      console.table(posts);
    });
  }
}
