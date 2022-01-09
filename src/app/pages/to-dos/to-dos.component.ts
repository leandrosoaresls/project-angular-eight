import { ToDosService } from "./../../services/to-dos.service";
import { Component, OnInit } from "@angular/core";
import { ToDo } from "src/app/models/to-do.model";
import { _MatSlideToggleRequiredValidatorModule } from "@angular/material";
import { MenuItem } from "src/app/components/breadcrumb/breadcrumb.component";

@Component({
  selector: "app-to-dos",
  templateUrl: "./to-dos.component.html",
  styleUrls: ["./to-dos.component.scss"],
})
export class ToDosComponent implements OnInit {
  public toDos: ToDo[];
  public newTask: string;
  public breadcrumb: MenuItem[] = [
    {
      label: "To Do List",
    },
  ];

  constructor(private todosService: ToDosService) {}

  ngOnInit(): void {
    this.todosService.getToDos(1).subscribe(
      (toDos: ToDo[]) => {
        this.toDos = toDos;
        console.table(toDos);
      },
      (error) => {}
    );
  }

  public addNewTask(): void {
    const toDo: ToDo = {
      userId: 1,
      completed: false,
      title: this.newTask,
    };

    this.todosService.postToDo(toDo).subscribe(
      (response: ToDo) => {
        this.toDos.unshift(response);

        this.newTask = "";
      },
      (err) => console.error(err)
    );
  }
}
