import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-modaladicionaritem',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './modaladicionaritem.component.html',
  styleUrls: ['./modaladicionaritem.component.css']
})
export class ModaladicionaritemComponent {

  productName = '';
  productObservation = '';

  constructor(private router: Router, private produtosService: ProdutosService) { }

  adicionarItem() {
    const newItem = { productName: this.productName, productObservation: this.productObservation };
    this.produtosService.criarItem(newItem).subscribe(
      () => {
        this.router.navigate(['/listagem']);
      },
      (error) => {
        console.error('Erro ao adicionar item', error);
      }
    );
  }
  
  voltar() {
    this.router.navigate(['/listagem']);
  }
}