import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLang = 'en';

  constructor(private translate: TranslateService) {}

  init(): void {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    const saved = localStorage.getItem('lang') || 'en';
    this.setLanguage(saved);
  }

  setLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLang === 'en' ? 'ar' : 'en');
  }

  getCurrentLang(): string {
    return this.currentLang;
  }
}
