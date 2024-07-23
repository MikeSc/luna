import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'luna-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LunaMainComponent {}
