import { Injectable } from '@angular/core';
import { abi, contractAddress, infruaWebSocketUrl } from 'src/environments/environment';
import Web3 from 'web3';
import { Web3AbstractService } from './web3-abstract.service';
@Injectable({
  providedIn: 'root'
})
export class Web3SocketService extends Web3AbstractService {
  constructor() {
    const web3 = new Web3(new Web3.providers.WebsocketProvider(infruaWebSocketUrl));
    super(web3 , new web3.eth.Contract(abi, contractAddress));
  }
}
