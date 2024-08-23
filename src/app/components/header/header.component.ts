import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task, TodoService } from '../../todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  newTask: Task = {
    title: '',
    description: '',
    completed: false,
  };

  constructor(private todoService: TodoService) {}

  addTask(): void {
    if (this.newTask.title && this.newTask.description) {
      this.todoService.addTask(this.newTask).subscribe(() => {});
      this.newTask = { title: '', description: '', completed: false };
    }
  }
}
