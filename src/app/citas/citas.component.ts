import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../shared/doctor.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {
  misDoctores:Doctor[]=[];
  constructor(public miservicio:DoctorService) {
    console.log("Constructor de los doctores");
  }
  ngOnInit():void {
    console.log("ngOnInit de los doctores");
    this.misDoctores=this.miservicio.getDoctores();
    console.log(this,this.misDoctores);
  }

}
