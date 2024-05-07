import { Component } from '@angular/core';
import { PacientesService } from '../shared/pacientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pasadas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pasadas.component.html',
  styleUrl: './pasadas.component.css'
})
export class PasadasComponent {
  citasPasadas: any[] = [];

  constructor(private pacientesService: PacientesService) {
    this.obtenerCitasPasadas();
  }

  obtenerCitasPasadas(): void {
    const citas = this.pacientesService.obtenerCitas();
    const fechaActual = new Date(); // Obtener la fecha actual como objeto Date

    // Filtrar las citas pasadas
    this.citasPasadas = citas.filter(cita => new Date(cita.fechaCita) < fechaActual);
  }

}
