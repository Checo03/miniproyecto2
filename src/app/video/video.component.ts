import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomPipe } from '../dom.pipe';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [RouterOutlet, DomPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  video:string="RgeJ06Piy1A?si=8vEzzWf5sWWLkU03";
}
