import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-daily-tasks',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.scss']
})
export class DailyTasksComponent {

}
