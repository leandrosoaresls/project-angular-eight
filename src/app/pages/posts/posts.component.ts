import { Post } from "./../../models/post.model";
import { PostsService } from "./../../services/posts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  public posts: Post[];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      console.table(posts);
    });
  }
}
