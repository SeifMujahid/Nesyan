import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpareNavComponent } from '../spare-nav/spare-nav.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, SpareNavComponent,RouterLink,TranslateModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {}
