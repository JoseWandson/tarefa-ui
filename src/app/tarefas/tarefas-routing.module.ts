import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefasComponent } from './tarefas.component';

const routes: Routes = [
  {
    path: '',
    component: TarefasComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
