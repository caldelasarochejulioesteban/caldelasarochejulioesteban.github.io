import { Component, HostBinding, signal } from '@angular/core';

type ThemeMode = 'light' | 'dark';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  readonly title = signal('mycv');
  readonly theme = signal<ThemeMode>('light');

  @HostBinding('attr.data-theme')
  protected get dataTheme(): ThemeMode {
    return this.theme();
  }

  constructor() {
    this.theme.set(this.getStoredTheme());
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(nextTheme);
    localStorage.setItem('mycv-theme', nextTheme);
  }

  private getStoredTheme(): ThemeMode {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const storedTheme = localStorage.getItem('mycv-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
