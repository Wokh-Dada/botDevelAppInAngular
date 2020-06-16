import { TestBed } from '@angular/core/testing';

import { Bot.StoreService } from './bot.store.service';

describe('Bot.StoreService', () => {
  let service: Bot.StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bot.StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
