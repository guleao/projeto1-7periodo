import { Component } from '@angular/core';
import { ModaladicionaritemComponent } from '../modaladicionaritem/modaladicionaritem.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listadecompras',
  standalone: true,
  imports: [CommonModule, ModaladicionaritemComponent],
  templateUrl: './listadecompras.component.html',
  styleUrl: './listadecompras.component.css'
})
export class ListadecomprasComponent {

}
