import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    // console.log(todo);
    console.log("onclidk has been triggered");
    
    
  }

  onCheckboxClick(todo:Todo){
    
  }

}
