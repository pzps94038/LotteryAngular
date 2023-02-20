import { Observable } from 'rxjs';
import { Theme, Themes } from './../../services/theme.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroWrenchScrewdriver } from '@ng-icons/heroicons/outline';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ heroWrenchScrewdriver })],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  show = false;
  currentTheme$: Observable<Theme>;
  themes: Themes;
  constructor(
    private themeService: ThemeService
  ) {
    this.currentTheme$ = this.themeService.currentTheme$;
    this.themes = this.themeService.getThemes();
  }

  toggle() {
    this.show = !this.show;
  }

  changeTheme(theme: Theme) {
    this.themeService.setCurrentTheme(theme);
  }
}
