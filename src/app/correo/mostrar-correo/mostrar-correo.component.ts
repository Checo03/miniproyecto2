import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mostrar-correo',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-correo.component.html',
  styleUrl: './mostrar-correo.component.css'
})
export class MostrarCorreoComponent {

  @Output()
  eventoEnviarCorreo = new EventEmitter<string>()

  enviarCorreo(valor:string){
    this.eventoEnviarCorreo.emit(valor)
  }
}
