import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from 'src/app/context/language.service';

@Component({
  selector: 'app-spare-nav-second',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './spare-nav-second.component.html',
  styleUrls: ['./spare-nav-second.component.scss'],
})
export class SpareNavSecondComponent {
  constructor(public languageService: LanguageService) {}

  toggleLang(): void {
    this.languageService.toggleLanguage();
  }
}
