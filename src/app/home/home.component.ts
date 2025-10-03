import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
     <form>
       <input type="text" placeholder="Filter by city" #filter/>
       <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
     </form>
    </section>
    <section class="results">
    </section>
    <app-housing-location *ngFor="let housingLocation of filteredLocationsList" [housingLocation]="housingLocation"></app-housing-location>

  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationsList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationsList = this.housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) this.filteredLocationsList = this.housingLocationList;

    this.filteredLocationsList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
}
}