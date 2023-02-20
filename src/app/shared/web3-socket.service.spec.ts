import { TestBed } from '@angular/core/testing';

import { Web3SocketService } from './web3-socket.service';

describe('Web3SocketService', () => {
  let service: Web3SocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Web3SocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
