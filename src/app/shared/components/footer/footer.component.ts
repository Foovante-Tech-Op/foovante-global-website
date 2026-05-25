import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fv-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
