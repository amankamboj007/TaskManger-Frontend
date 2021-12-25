import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from '../../task.service'

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {
  lists: any = [];
  tasks: any = [];

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.taskService.getTask(params.listId).subscribe((tasks: any) => {
        this.tasks = tasks
      })
    })
    this.taskService.getList().subscribe((lists: any) => {
      console.log(lists)
      this.lists = lists;
    })
  }
  taskClick(task: any) {
    this.taskService.complete(task).subscribe(() => {
      console.log('completed Sucessfully')
      task.completed = !task.completed;
    })
  }

}
