import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { NavbarComponent } from './navbar/navbar.component';
import { TarefaService } from '../tarefas/tarefa.service';
import { ItemService } from './../tarefas/item.service';
import { ErrorHandlerService } from './error-handler.service';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    ToastModule
  ],
  exports: [
    NavbarComponent,

    ToastModule
  ],
  providers: [
    MessageService,

    TarefaService,
    ItemService,
    ErrorHandlerService
  ]
})
export class CoreModule { }
