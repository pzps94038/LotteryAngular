import { HeaderComponent } from './../shared/component/header/header.component';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Web3SocketService } from '../shared/services/web3-socket.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Theme, ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  manager$: Observable<string>;
  blance$: Observable<string>;
  currentTheme$: Observable<Theme>;
  form = new FormGroup({
    money: new FormControl(0, [Validators.required, Validators.min(1)])
  })

  constructor(
    private web3: Web3SocketService,
    private themeService: ThemeService
  ) {
    this.currentTheme$ = this.themeService.currentTheme$;
    this.manager$ = this.web3.getManager();
    this.blance$ = this.web3.getBalance();
  }

  submit() {
    this.form.markAllAsTouched();
    if(this.form.valid) {
      console.warn('可投注');
    }
  }
}
