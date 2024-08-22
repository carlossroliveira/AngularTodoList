import { Component } from '@angular/core';
import { TaskModalComponent } from '../task-modal/task-modal.component'

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskModalComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

}
