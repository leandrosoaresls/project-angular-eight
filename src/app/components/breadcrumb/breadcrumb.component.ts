import { Component, Input, OnInit } from "@angular/core";

export interface MenuItem {
  label?: string;
  url?: string;
  routerLink?: any;
  items?: MenuItem[] | MenuItem[][];
  disabled?: boolean;
  id?: string;
  backRouterLink?: any;
}

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
  @Input() model: MenuItem[];

  @Input() style: any;

  @Input() styleClass: string;

  constructor() {}

  ngOnInit() {}
}
