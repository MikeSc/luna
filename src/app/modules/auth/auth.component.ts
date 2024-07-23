import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'luna-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LunaAuthComponent {}
