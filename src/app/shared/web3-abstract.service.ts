import { Injectable, OnDestroy } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
export abstract class Web3AbstractService {
  private _web3: Web3;
  private _contract: Contract;
  constructor(
    protected web3: Web3,
    protected contract: Contract
  ) {
    this._web3 = web3;
    this._contract = contract;
  }

  /**
   * 取得帳戶
   * @returns
   */
  getAccounts() {
    return from(this._web3.eth.getAccounts());
  }

  /**
   * 加入大樂透遊戲
   * @param player 玩家
   * @param value 買入多少
   * @returns
   */
  enter(player: string, value: number) {
    return this._contract.methods
      .enter()
      .send({ from: player, value }) as Observable<void>;
  }

  /**
   * 選擇贏家
   * @param manager 只能由管理者
   * @returns
   */
  pickWinner(manager: string) {
    return from(
      this._contract.methods.pickWinner().send({ from: manager })
    ) as Observable<void>;
  }

  /**
   * 取得獎池數
   * @returns
   */
  getBalance() {
    return from(this._web3.eth.getBalance(this._contract.options.address));
  }

  /**
   * 取得參與玩家
   * @returns
   */
  getPlayers() {
    return from(this._contract.methods.getPlayers().call()) as Observable<
      string[]
    >;
  }

  /**
   * 取得管理者
   * @returns
   */
  getManager() {
    return from(this._contract.methods.manager().call()) as Observable<
      string
    >;
  }
}
