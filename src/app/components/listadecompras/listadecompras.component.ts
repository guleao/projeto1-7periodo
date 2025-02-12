import { Component } from '@angular/core';
import { ModaladicionaritemComponent } from '../modaladicionaritem/modaladicionaritem.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadecompras',
  standalone: true,
  imports: [CommonModule, ModaladicionaritemComponent],
  templateUrl: './listadecompras.component.html',
  styleUrl: './listadecompras.component.css'
})
export class ListadecomprasComponent {
  user = new User(0, "", "", null, null);

  constructor(private router: Router) {
    this.user = this.router.getCurrentNavigation()?.extras.state?.['user'];
    console.log(this.user);
  }
}
