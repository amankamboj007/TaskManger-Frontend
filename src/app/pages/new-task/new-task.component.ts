import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  listId: any;
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.listId = param['listId']
      console.log(this.listId)
    })
  }
  createNewTask(title: string) {
    this.taskService.createTask(title, this.listId).subscribe((response) => {
      console.log(response)
      // this.router.navigate(['/list',this.listId])
      this.router.navigate(['../',], { relativeTo: this.route });
    })

  }
}
