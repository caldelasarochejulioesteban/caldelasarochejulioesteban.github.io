import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { InterestModel } from '../../models/interests/interests.model';

@Injectable({ providedIn: 'root' })
export class InterestsService {
  accesoInterests = 'interests service running...';

  constructor(private firestore: Firestore) {}

  getInterests(): Observable<InterestModel[]> {
    const interestsCollection = collection(this.firestore, 'interests');
    return collectionData(interestsCollection, { idField: 'id' }).pipe(
      catchError((error: unknown) => {
        console.error('No se pudo leer la colección "interests" de Firestore.', error);
        return throwError(() => error);
      }),
    );
  }
}
