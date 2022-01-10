import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BreadcrumbModule } from "./../../../components/breadcrumb/breadcrumb.module";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddPostComponent } from "./add-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("AddPostComponent", () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPostComponent],
      imports: [
        BreadcrumbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
