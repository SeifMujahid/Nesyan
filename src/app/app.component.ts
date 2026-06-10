import { Component, OnInit } from '@angular/core';
import { inject } from '@vercel/analytics';
import { LanguageService } from './context/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Nesyan';
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.init();
  }
}

inject();
