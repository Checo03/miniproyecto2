import { Component } from '@angular/core';
import { EnfermedadService } from '../shared/enfermedad.service';
import { Enfermedad } from '../enfermedad';

@Component({
  selector: 'app-enfermedad',
  standalone: true,
  imports: [],
  templateUrl: './enfermedad.component.html',
  styleUrl: './enfermedad.component.css'
})
export class EnfermedadComponent {

  array:Enfermedad []=[];

  constructor(public enfermedadService:EnfermedadService) {

  }

  ngOnInit() {
    console.log("Componente del API cargado");
    this.recuperarDatos();
  }

  recuperarDatos():void {
    console.log("recupera datos");
    this.enfermedadService.retornar().subscribe({
      next:this.successRequest.bind(this),

      error: (err) =>{console.log(err)}
    });
  }

  successRequest(data:any):void {
    console.log("data",data);
    this.array=data.enfermedades;
    console.log("array",this.array);
  }

}
