import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme =
  | 'bg-slate-500'
  | 'bg-gray-500'
  | 'bg-zinc-500'
  | 'bg-neutral-500'
  | 'bg-stone-500'
  | 'bg-orange-500'
  | 'bg-amber-500'
  | 'bg-yellow-500'
  | 'bg-lime-500'
  | 'bg-green-500'
  | 'bg-emerald-500'
  | 'bg-teal-500'
  | 'bg-cyan-500'
  | 'bg-sky-500'
  | 'bg-blue-500'
  | 'bg-indigo-500'
  | 'bg-violet-500';
export type Themes = Theme[];
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _themes: Themes = [
    'bg-slate-500',
    'bg-gray-500',
    'bg-zinc-500',
    'bg-neutral-500',
    'bg-stone-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-yellow-500',
    'bg-lime-500',
    'bg-green-500',
    'bg-emerald-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-sky-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
  ];

  private _currentTheme$ = new BehaviorSubject<Theme>('bg-slate-500');

  get currentTheme$() {
    return this._currentTheme$.asObservable();
  }

  setCurrentTheme(theme: Theme) {
    this._currentTheme$.next(theme);
  }

  getThemes () {
    return this._themes;
  }
}
