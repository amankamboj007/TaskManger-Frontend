import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './pages/new-list/new-list.component';
import { TaskviewComponent } from './pages/taskview/taskview.component';

const routes: Routes = [
  { path: '', component: TaskviewComponent },
  { path: 'new-list', component: NewListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
