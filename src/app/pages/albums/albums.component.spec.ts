import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BreadcrumbModule } from "./../../components/breadcrumb/breadcrumb.module";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AlbumsComponent } from "./albums.component";

describe("AlbumsComponent", () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsComponent],
      imports: [BreadcrumbModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
