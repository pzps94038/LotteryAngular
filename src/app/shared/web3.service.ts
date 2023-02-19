import { Injectable, OnDestroy } from '@angular/core';
import { from, Observable, Subject, takeUntil } from 'rxjs';
import { abi, contractAddress } from 'src/environments/environment';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
declare const window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service implements OnDestroy {
  private _web3: Web3;
  private _contract: Contract;
  private _destroy$ = new Subject<any>();

  constructor() {
    this._web3 = new Web3(window.ethereum);
    console.warn(abi, contractAddress)
    this._contract = new this._web3.eth.Contract(abi, contractAddress);
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  getAccounts() {
    return from(this._web3.eth.getAccounts());
  }

  enter(player: string, value: number) {
    return this._contract.methods
      .enter()
      .send({ from: player, value }) as Observable<void>;
  }

  pickWinner(manager: string) {
    return from(
      this._contract.methods.pickWinner().send({ from: manager })
    ) as Observable<void>;
  }

  getBalance() {
    return from(this._web3.eth.getBalance(this._contract.options.address));
  }

  getPlayers() {
    return from(this._contract.methods.getPlayers().call()) as Observable<
      string[]
    >;
  }

  getManager() {
    return from(this._contract.methods.manager().call()) as Observable<
      string
    >;
  }
}
