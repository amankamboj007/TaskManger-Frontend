import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createList(title: string) {
    //To create a list
    return this.webReqService.post('task/list', { title })

  }
  getList() {
    return this.webReqService.get('task/list')
  }
  getTask(listId: string) {
    return this.webReqService.get(`task/list/${listId}/tasks`)
  }
  createTask(title: string, listId: string) {
    return this.webReqService.post(`task/list/${listId}/tasks`, { title })
  }
  complete(task: any) {
    return this.webReqService.patch(`task/list/${task.listId}/tasks/${task._id}`, { completed: !task.completed })
  }
}
