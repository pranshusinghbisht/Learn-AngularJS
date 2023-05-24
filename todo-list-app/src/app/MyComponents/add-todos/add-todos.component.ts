import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements 
OnInit {


title: String;
desc: any;
@Output() todoAdd = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

    console.log(this.title);
    
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }

    this.todoAdd.emit(todo);
  }

}
