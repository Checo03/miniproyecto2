import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../shared/doctor.service';
import { PacientesService } from '../shared/pacientes.service';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-agendar',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterModule, FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, NgxMaterialTimepickerModule],
  templateUrl: './agendar.component.html',
  styleUrl: './agendar.component.css'
})


export class AgendarComponent {
  @Input() doctor!: Doctor;
  paciente!: any;
  nombrePaciente: string = '';
  telefonoPaciente: string = '';
  fechaCita: string = '';
  horaCita: string = '';
  minDate: Date;
  maxDate: Date;

  constructor(public doctorService: DoctorService, public activatedRoute: ActivatedRoute, private pacientesService: PacientesService) {
    this.activatedRoute.params.subscribe(params => {
      this.doctor = doctorService.getUnDoctor(params['id']);
    })

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); 
    tomorrow.setHours(0, 0, 0, 0);
    const nextYear = new Date(today.getFullYear() + 1, 11, 31); 

    this.minDate = tomorrow; 
    this.maxDate = nextYear; 
  }

  guardarCita(): void {
    if (!this.nombrePaciente || !this.telefonoPaciente || !this.fechaCita || !this.horaCita) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor completa todos los campos antes de reservar la cita.",
      });
      return; 
    }


    // Obtener la fecha de hoy
    const fechaActual = new Date();
    //convertir la fecha seleccionada a objeto Date para manejar la comparacionm
    const fechaCitaSeleccionada = new Date(this.fechaCita);
    // Comparar si la fecha seleccionada noi es pasada
    if (fechaCitaSeleccionada >= fechaActual) {
      console.log("La fecha seleccionada es valida.");
      //aqui poner lo de los feedback o mensajes de retroalinentacion

      
      const nuevaCita = {
        nombrePaciente: this.nombrePaciente,
        telefonoPaciente: this.telefonoPaciente,
        fechaCita: this.fechaCita,
        horaCita: this.horaCita,
        doctor: this.doctor
      };

      const citas = this.pacientesService.obtenerCitas();
      if (this.pacientesService.citaExistente(nuevaCita, citas)) { //comprobar que la cita no exista, tanto en fecha como en hora
        console.log("Ya existe una cita para esta fecha y hora.");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ya existe una cita para esta fecha y hora!",
        });
        //aqui poner lo de los feedback o mensajes de retroalinentacion
        return;
      }

      // Si la cita no existe y la fecha es valida, se registra
      console.log("Cita guardada exitosamente.");
      Swal.fire({
        title: "Cita Confirmada!",
        text: "Esperemos Verlo Pronto!",
        icon: "success"
      });
      this.pacientesService.agregarCita(nuevaCita);
    } else {
      console.log("No se puede agendar una cita en fechas pasadas.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se puede agendar una cita en fechas pasadas!",
      });
      //aqui poner lo de los feedback o mensajes de retroalinentacion
      
    }
  }
 
}