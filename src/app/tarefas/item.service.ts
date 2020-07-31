import { Item } from './../core/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/itens`;
  }

  adicionar(item: Item): Promise<void> {
    return this.http.post<void>(this.url, item)
      .toPromise()
      .then(() => null);
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizarPropriedadeConcluido(id: number, concluido: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put(`${this.url}/${id}/concluido`, concluido, { headers })
      .toPromise()
      .then(() => null);
  }
}
