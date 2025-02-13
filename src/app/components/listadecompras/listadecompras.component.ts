import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user/user';


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

  items: { nome: string; quantidade: string }[] = [];

  constructor(private router: Router) {
    // Se vier algo pelo state, adiciona na lista
    const navExtras = this.router.getCurrentNavigation()?.extras.state as {
      itemAdicionado?: { nome: string; quantidade: string };
      user?: User;
    };

    if (navExtras?.itemAdicionado) {
      this.items.push(navExtras.itemAdicionado);

      this.router.navigate([], { state: {}})
    }
    // Caso você ainda use user
    if (navExtras?.user) {
      this.user = navExtras.user;
    }
  }

  resetarLista() {
    this.items = [];
  }
}