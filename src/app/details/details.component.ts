import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="details-container">
      <!-- Back Button -->
      <div class="back-button-container">
        <a routerLink="/" class="back-button">
          <span class="back-arrow">←</span>
          <span>Volver al inicio</span>
        </a>
      </div>
      
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <div class="listing-info">
            <h1 class="listing-heading">{{housingLocation?.name}}</h1>
            <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
          </div>
          <div class="listing-photo-container">
            <img class="listing-photo" [src]="housingLocation?.photo" alt="Foto de {{housingLocation?.name}}">
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="listing-features">
        <div class="features-container">
          <h2 class="section-heading">Property Features</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🏘️</div>
              <h3>Available Units</h3>
              <p>{{housingLocation?.availableUnits}} units</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📶</div>
              <h3>WiFi</h3>
              <p>{{housingLocation?.wifi ? 'Available' : 'Not available'}}</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🧺</div>
              <h3>Laundry</h3>
              <p>{{housingLocation?.laundry ? 'Available' : 'Not available'}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Form Section -->
      <section class="listing-apply">
        <div class="apply-container">
          <div class="apply-header">
            <h2 class="section-heading">Apply now to live here!</h2>
          </div>
          
          <form class="apply-form" [formGroup]="applyForm" (submit)="submitApplication()">
            <div class="form-group">
              <label for="first-name">First name</label>
              <input id="first-name" type="text" formControlName="firstName" placeholder="First name...">
            </div>

            <div class="form-group">
              <label for="last-name">Last name</label>
              <input id="last-name" type="text" formControlName="lastName" placeholder="Last name...">
            </div>

            <div class="form-group">
              <label for="email">E-mail</label>
              <input id="email" type="email" formControlName="email" placeholder="e-mail">
            </div>

            <button type="submit" class="submit-btn">
              <span>Send application</span>
              <span class="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </section>
    </div>

  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => this.housingLocation = housingLocation);}

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}
