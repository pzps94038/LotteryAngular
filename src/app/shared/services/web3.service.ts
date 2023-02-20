import { Injectable, OnDestroy } from '@angular/core';
import { abi, contractAddress } from 'src/environments/environment';
import Web3 from 'web3';
import { Web3AbstractService } from './web3-abstract.service';
declare const window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service extends Web3AbstractService {
  constructor() {
    const web3 = new Web3(window.ethereum);
    super(web3 , new web3.eth.Contract(abi, contractAddress));
  }
}
