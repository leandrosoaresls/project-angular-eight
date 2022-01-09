import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuItem } from "src/app/components/breadcrumb/breadcrumb.component";
import { Post } from "src/app/models/post.model";

import { PostsService } from "./../../../services/posts.service";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  public form: FormGroup;

  public breadcrumb: MenuItem[] = [
    {
      label: "Posts",
      routerLink: "/posts",
    },
    {
      label: "Novo Post"
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: "",
      content: "",
    });
  }

  public onSubmit(form): void {
    const post: Post = {
      title: form.value["title"],
      userId: 1,
      body: form.value["content"],
    };

    this.postsService.addPost(post).subscribe(
      (response: Post) => {
        // voltando pra pagina de posts não será possivel ver a postagem pois não tem como persistir os dados usando JSONPlaceholder
        this.router.navigateByUrl("posts");
      },
      (error) => console.error(error)
    );
  }
}
