/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellerServiceService } from './sellerService.service';

describe('Service: SellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerServiceService]
    });
  });

  it('should ...', inject([SellerServiceService], (service: SellerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
