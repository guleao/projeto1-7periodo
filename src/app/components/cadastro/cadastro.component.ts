import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import Swal from 'sweetalert2';
import { User } from '../../models/user/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  user = new User(0, '', '', null, null);
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  register() {
    this.authService.register(this.user).subscribe({
      next: (msg) => {
        Swal.fire({
          title: msg,
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => {
          this.router.navigate(['/listagem'], { state: { user: this.user } });
        });
      },
      error: (erro) => {
        Swal.fire({
          title: erro.error ? erro.error.toString() : erro.message.toString(),
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      },
    });
  }
}
