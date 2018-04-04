import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  constructor(todosService: TodosService) {
    this.todos = todosService.getTodosApi();
   }

  ngOnInit() {
  }

}
