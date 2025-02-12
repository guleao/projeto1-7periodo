import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modaladicionaritem',
  imports: [CommonModule, FormsModule ],
  templateUrl: './modaladicionaritem.component.html',
  styleUrl: './modaladicionaritem.component.css'
})
export class ModaladicionaritemComponent {
  @Output() itemAdicionado = new EventEmitter<{ nome: string, quantidade: string }>();
  nome = '';
  quantidade = '';

  adicionarItem() {
    this.itemAdicionado.emit({ nome: this.nome, quantidade: this.quantidade });
    this.nome = '';
    this.quantidade = '';
  }
}
