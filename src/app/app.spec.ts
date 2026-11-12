import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        App
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should toggle the theme and persist the selection', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const button = fixture.nativeElement.querySelector('button.theme-toggle') as HTMLButtonElement;

    expect(button).toBeTruthy();
    expect(app.theme()).toBe('light');

    button.click();
    fixture.detectChanges();

    expect(app.theme()).toBe('dark');
    expect(localStorage.getItem('mycv-theme')).toBe('dark');
  });
});
