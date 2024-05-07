import { Component, Input } from '@angular/core';
import { MostrarCorreoComponent } from '../mostrar-correo/mostrar-correo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MostrarCorreoComponent, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
  correoEnviado: string = '';

  recibirCorreo(correo: string) {
    this.correoEnviado = correo;
  }

  @Input()
  MostrarCorreo = this.correoEnviado;
}
