import { Component } from '@angular/core';
import { MostrarCorreoComponent } from '../correo/mostrar-correo/mostrar-correo.component';
import { FormularioComponent } from '../correo/formulario/formulario.component';
import { HttpClient } from '@angular/common/http';
import { VideoComponent } from '../video/video.component';
import { EnfermedadComponent } from '../enfermedad/enfermedad.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MostrarCorreoComponent, FormularioComponent, VideoComponent,EnfermedadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
