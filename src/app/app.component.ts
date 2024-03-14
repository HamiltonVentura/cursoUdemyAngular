import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 public title = signal("Bem vindo a suas tarefas");
 public subtitulo = signal("subtitulos");
 public nome = signal ("hamilton");

 //ele vai computar e ficar observando se ouver alguma mudança ele irá atualizar os dados
 // ele computa as alterações

 public tudo = computed( ()=>{
    return this.title() + this.subtitulo();
 })

 updateTitulo(){
    return this.title.set("João");
 }

 updateSubTitulo(){
  return this.subtitulo.set("Analista de Sistemas");
 }

}
