import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunaAuthComponent } from './auth.component';

describe('LunaAuthComponent', () => {
  let component: LunaAuthComponent;
  let fixture: ComponentFixture<LunaAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LunaAuthComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases here
});
