import { Tarefa } from './../core/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Item } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/tarefas`;
  }

  listar(): Promise<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.url)
      .toPromise()
      .then(response => response);
  }

  adicionar(tarefa: Tarefa): Promise<void> {
    return this.http.post<void>(this.url, tarefa)
      .toPromise()
      .then(() => null);
  }
}
