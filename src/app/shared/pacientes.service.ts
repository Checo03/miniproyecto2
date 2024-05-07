import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  agregarCita(cita: any): void {
    let citas: any[] = this.obtenerCitas() || [];
    // Convertir la fecha a formato ISO
    const fechaISO = cita.fechaCita.toISOString();
    // Almacenar la fecha en formato ISO en la cita
    cita.fechaCita = fechaISO;
    citas.push(cita);
    localStorage.setItem('citas', JSON.stringify(citas));
  }

  obtenerCitas(): any[] {
    const citas = localStorage.getItem('citas');
    // Convertir las fechas de formato ISO a objetos Date al recuperarlas
    return citas ? JSON.parse(citas, (key, value) => {
      if (key === 'fechaCita') return new Date(value);
      return value;
    }) : [];
  }

  citaExistente(citaNueva: any, citas: any[]): boolean {
    return citas.some(cita => {
      // Comparar fecha y hora
      return cita.fechaCita.getTime() === citaNueva.fechaCita.getTime() && cita.horaCita === citaNueva.horaCita;
    });
  }
  
  limpiarCitas(): void {
    localStorage.removeItem('citas');
  }
}
