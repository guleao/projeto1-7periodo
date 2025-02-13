import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modaladicionaritem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modaladicionaritem.component.html',
  styleUrl: './modaladicionaritem.component.css'
})
export class ModaladicionaritemComponent {

  constructor(private Router: Router) { }

  nome = '';
  quantidade = '';

  adicionarItem() {
    const newItem = { nome: this.nome, quantidade: this.quantidade };
    this.Router.navigate(['/listagem'], { state: { itemAdicionado: newItem } });
  }
}
