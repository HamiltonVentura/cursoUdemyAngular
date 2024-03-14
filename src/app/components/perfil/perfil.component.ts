import { Component, signal } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  nome = "joao das Neves";


}
