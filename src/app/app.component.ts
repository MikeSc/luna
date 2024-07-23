import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'luna-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
