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
}
