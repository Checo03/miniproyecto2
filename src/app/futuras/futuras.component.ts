import { Component } from '@angular/core';
import { PacientesService } from '../shared/pacientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-futuras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './futuras.component.html',
  styleUrl: './futuras.component.css'
})
export class FuturasComponent {
  citasFuturas: any[] = [];

  constructor(private pacientesService: PacientesService) {
    this.obtenerCitasFuturas();
  }

  obtenerCitasFuturas(): void {
    const citas = this.pacientesService.obtenerCitas();
    const fechaActual = new Date(); // Obtener la fecha actual como objeto Date

    // Filtrar las citas futuras
    this.citasFuturas = citas.filter(cita => new Date(cita.fechaCita) >= fechaActual);
  }

}
