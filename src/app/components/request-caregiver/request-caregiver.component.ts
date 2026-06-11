import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-request-caregiver',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './request-caregiver.component.html',
  styleUrls: ['./request-caregiver.component.scss'],
})
export class RequestCaregiverComponent {}
