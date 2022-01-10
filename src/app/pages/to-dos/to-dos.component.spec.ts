import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BreadcrumbModule } from "./../../components/breadcrumb/breadcrumb.module";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ToDosComponent } from "./to-dos.component";
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material";

describe("ToDosComponent", () => {
  let component: ToDosComponent;
  let fixture: ComponentFixture<ToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToDosComponent],
      imports: [
        BreadcrumbModule,
        FormsModule,
        MatCheckboxModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
