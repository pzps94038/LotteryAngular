import { Web3Service } from './../shared/services/web3.service';
import { HeaderComponent } from './../shared/component/header/header.component';
import { catchError, filter, map, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
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
export class HomeComponent implements OnDestroy {
  manager$: Observable<string>;
  blance$: Observable<string>;
  accounts$: Observable<string[]>
  currentTheme$: Observable<Theme>;
  form = new FormGroup({
    account: new FormControl('', [Validators.required]),
    money: new FormControl(0, [Validators.required, Validators.min(0.1)])
  });

  get money() {
    return this.form.get('money') as FormControl;
  }

  get account() {
    return this.form.get('account') as FormControl;
  }

  private _destroy$ = new Subject<any>();

  constructor(
    private web3: Web3Service,
    private themeService: ThemeService,
  ) {
    this.currentTheme$ = this.themeService.currentTheme$;
    this.manager$ = this.web3.getManager();
    this.blance$ = this.web3.getBalance();
    this.accounts$ = this.web3.getAccounts();
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  submit() {
    this.form.markAllAsTouched();
    if(this.form.valid) {
      this.web3.enter(this.account.value, this.money.value.toString()).pipe(
        takeUntil(this._destroy$)
      ).subscribe(res=> window.location.reload());
    }
  }

  pickWinner() {
    this.web3.pickWinner(this.account.value).pipe(
      takeUntil(this._destroy$)
    ).subscribe(res=> window.location.reload());
  }
}
