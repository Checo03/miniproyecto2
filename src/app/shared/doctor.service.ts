import { Injectable } from '@angular/core';
import { DOCTORES } from '../doctores';
import { Doctor } from '../doctor';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private doctores:Doctor[]=DOCTORES;

  
  constructor(private router:Router) { }

  getDoctores():Doctor[] {
    return this.doctores;
  }
  getUnDoctor(posicion:number):Doctor {
    return this.doctores[posicion];
  }

  searchDoctor(nombreDoc:string):number{
    let index = this.doctores.findIndex(p => p.nombre === nombreDoc);
    if(index == -1){
      Swal.fire({
        title: "Estas Seguro Que Es Su Nombre?",
        text: "No Logramos Encontrarl@ :(",
        icon: "question"
      }).then(() => {
        this.router.navigate(['/home']);
      });;
    }
    return index;
  }

}
