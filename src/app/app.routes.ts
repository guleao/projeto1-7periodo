import { Routes } from '@angular/router';
import { ListadecomprasComponent } from './components/listadecompras/listadecompras.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'listagem', component: ListadecomprasComponent },
];
