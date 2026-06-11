import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-link-patient-account',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './link-patient-account.component.html',
  styleUrls: ['./link-patient-account.component.scss'],
})
export class LinkPatientAccountComponent {}
