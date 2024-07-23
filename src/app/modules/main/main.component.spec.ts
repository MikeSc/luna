import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunaMainComponent } from './main.component';

describe('LunaMainComponent', () => {
  let component: LunaMainComponent;
  let fixture: ComponentFixture<LunaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LunaMainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests here

  afterEach(() => {
    fixture.destroy();
  });
});
