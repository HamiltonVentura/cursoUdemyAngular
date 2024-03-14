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


 public isDisable =  true;

 public title = signal("Bem vindo a suas tarefas");
 public subtitulo = signal("subtitulos");
 public nome = signal ("hamilton");

 public tudo = computed( ()=> {
    return this.title() + this.subtitulo();
 })

 updateTitulo(){
    return this.title.set("João");
 }

 updateSubTitulo(){
  return this.subtitulo.set("Analista de Sistemas");
 }

 calculoExemlo(numero1:number,numero2:number){
  return numero1+numero2;
 }
}
