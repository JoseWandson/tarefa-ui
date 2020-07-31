import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

import { Tarefa, Item } from '../core/model';
import { TarefaService } from './tarefa.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ItemService } from './item.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  tarefas: Tarefa[];
  tarefa: Tarefa;
  item: Item;
  displayDialogLista: boolean;
  displayDialogItem: boolean;

  rowGroupMetadata: any;

  constructor(
    private tarefaService: TarefaService,
    private itemService: ItemService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  showDialogToAddLista(): void {
    this.tarefa = new Tarefa();
    this.displayDialogLista = true;
  }

  showDialogToAddItem(id: number): void {
    this.item = new Item();
    this.item.tarefaId = id;
    this.displayDialogItem = true;
  }

  salvarLista(): void {
    this.tarefaService.adicionar(this.tarefa)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Tarefa adicionada com sucesso!' });
        this.tarefa = null;
        this.displayDialogLista = false;
        this.listar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvarItem(): void {
    this.itemService.adicionar(this.item)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Item adicionado com sucesso!' });
        this.item = null;
        this.displayDialogItem = false;
        this.listar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  excluirItem(id: number): void {
    this.itemService.excluir(id)
      .then(() => {
        this.listar();
        this.messageService.add({ severity: 'success', detail: 'Item excluído com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarPropriedadeConcluido(id: number, concluido: boolean): void {
    this.itemService.atualizarPropriedadeConcluido(id, concluido)
      .then(() => {
        const acao = concluido ? '' : 'não ';
        this.messageService.add({ severity: 'success', detail: `Item marcado como ${acao}concluído com sucesso!` });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private listar(): void {
    this.tarefaService.listar()
      .then(tarefas => {
        this.tarefas = tarefas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
