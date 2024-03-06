import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as planet from 'planet.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'github-action-test';
}
