import { Component } from '@angular/core';
import { PageComponent } from './page/page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ PageComponent ]
})
export class AppComponent {
}
