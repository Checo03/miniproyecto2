import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AgendarComponent } from './agendar/agendar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PasadasComponent } from './pasadas/pasadas.component';
import { FuturasComponent } from './futuras/futuras.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'citas', component:CitasComponent},
    {path: 'nosotros',component:NosotrosComponent},
    {path: 'agendar/:id', component:AgendarComponent},
    {path: 'reportes',component:ReportesComponent},
    {path: 'pasadas',component:PasadasComponent},
    {path: 'futuras', component:FuturasComponent},
    {path: 'busqueda/:doctorh', component: BusquedaComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}

];
