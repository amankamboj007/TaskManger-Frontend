import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { list } from 'src/app/model/list.model';
import { TaskService } from '../../task.service'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }
  createNewList(title: string) {
    this.taskService.createList(title).subscribe((List: any) => {
      console.log(List)
      //navigating to router
      this.router.navigate(['/list', List._id])
    })
  }
}
