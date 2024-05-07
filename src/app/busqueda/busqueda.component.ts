import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../shared/doctor.service';
import { AgendarComponent } from '../agendar/agendar.component';




@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [AgendarComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  @Input() doctor!: Doctor;
 

  nombreDoctor:string = "";
  indice:number=0;

  miDoctor:Doctor={

    nombre:"",
    cedula:"",
    especialidad:"",
    estudios:"",
    costo:"",
    img:"",

  };

  constructor(private doctorService: DoctorService, private activeRoute: ActivatedRoute){
    this.activeRoute.params.subscribe(params => {
      this.doctor = doctorService.getUnDoctor(params['id']);
    })



    this.activeRoute.params.subscribe(params =>{
      this.nombreDoctor=params['doctorh'];
      this.indice=this.doctorService.searchDoctor(this.nombreDoctor);
      console.log(this.indice);

      if(this.indice != 1){
        this.miDoctor=this.doctorService.getUnDoctor(this.indice);
      }1
    });
  }
}
