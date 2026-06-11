import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from 'src/app/components/main-nav/main-nav.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, MainNavComponent, RouterLink, TranslateModule],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent {}
