import { Web3SocketService } from './../shared/web3-socket.service';
import { Observable } from 'rxjs';
import { Web3Service } from './../shared/web3.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  manager$: Observable<string>;
  blance$: Observable<string>;
  constructor(
    private web3: Web3SocketService,
  ) {
    this.manager$ = this.web3.getManager();
    this.blance$ = this.web3.getBalance();
  }
}
