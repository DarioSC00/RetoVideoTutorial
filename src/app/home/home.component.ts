import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
     <form>
       <input type="text" placeholder="Search by city"/>
       <button class="primary" type="button">Search</button>
     </form>
    </section>
    <section class="results">
    </section>
    <app-housing-location></app-housing-location>

  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
