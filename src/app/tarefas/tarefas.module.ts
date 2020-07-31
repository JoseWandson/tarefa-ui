import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';

import { TarefasComponent } from './tarefas.component';
import { TarefasRoutingModule } from './tarefas-routing.module';

@NgModule({
  declarations: [
    TarefasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    MessageModule,
    TooltipModule,
    CheckboxModule,

    TarefasRoutingModule
  ]
})
export class TarefasModule { }
