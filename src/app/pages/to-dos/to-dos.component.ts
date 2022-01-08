import { ToDosService } from "./../../services/to-dos.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-to-dos",
  templateUrl: "./to-dos.component.html",
  styleUrls: ["./to-dos.component.scss"],
})
export class ToDosComponent implements OnInit {
  constructor(private todosService: ToDosService) {}

  ngOnInit() {
    this.todosService.getToDos().subscribe(
      (todos) => {
        console.table(todos);
      },
      (error) => {}
    );
  }
}
