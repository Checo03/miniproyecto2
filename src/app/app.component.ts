import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { DomPipe } from './dom.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,MenuComponent, RouterModule, FooterComponent, DomPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miniProyectoC';
}
