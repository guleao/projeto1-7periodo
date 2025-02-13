import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user/user';
import { ProdutosService } from '../../services/produtos.service';

interface Item {
  id?: string;
  productName: string;
  productObservation: string;
}

@Component({
  selector: 'app-listadecompras',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './listadecompras.component.html',
  styleUrls: ['./listadecompras.component.css']
})
export class ListadecomprasComponent {
  user = new User(0, "", "", null, null);

  items: Item[] = [];

  constructor(private router: Router, private meuService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarItens();
  }

  carregarItens(): void {
    this.meuService.getItens().subscribe(
      (data: Item[]) => {
        this.items = data;
      },
      (error) => {
        console.error('Erro ao carregar itens', error);
      }
    );
  }

  resetarLista() {
    this.items = [];
  }
}