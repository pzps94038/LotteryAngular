import { Web3SocketService } from './shared/web3-socket.service';
import { Web3Service } from './shared/web3.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
}
