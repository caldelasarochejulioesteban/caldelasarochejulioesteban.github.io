import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { TestBed } from '@angular/core/testing';

import { InterestsService } from './interests.service';

describe('InterestsService', () => {
  let service: InterestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideFirebaseApp(() => initializeApp({ projectId: 'test' })),
        provideFirestore(() => getFirestore())
      ]
    });
    service = TestBed.inject(InterestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
