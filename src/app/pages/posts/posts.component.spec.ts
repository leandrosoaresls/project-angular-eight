import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CardComponent } from "./../../components/card/card.component";
import { BreadcrumbModule } from "./../../components/breadcrumb/breadcrumb.module";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostsComponent } from "./posts.component";
import { MatCardModule } from "@angular/material";

describe("PostsComponent", () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent, CardComponent],
      imports: [
        BreadcrumbModule,
        MatCardModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
