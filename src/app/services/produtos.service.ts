import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Item {
  id?: string;
  productName: string;
  productObservation: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private apiUrl = 'http://localhost:8080/api/product'

  http = inject(HttpClient);

  getItens(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  criarItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }

  atualizarItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${id}`, item);
  }

  deletarItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
