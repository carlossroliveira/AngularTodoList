import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task, TodoService } from '../../todo.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.todoService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(id: number | undefined): void {
    if (id !== undefined) {
      this.todoService.deleteTask(id).subscribe(() => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      });
    }
  }

  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
    this.todoService.updateTask(task).subscribe();
  }
}
