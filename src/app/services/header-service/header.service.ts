import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HeaderModel } from '../../models/header/header.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  accesoHeader = 'header service running...';

  constructor(private firestore: Firestore) {}

  getHeader(): Observable<HeaderModel[]> {
    const headerCollection = collection(this.firestore, 'header');
    return collectionData(headerCollection, { idField: 'id' }).pipe(
      catchError((error: unknown) => {
        console.error('No se pudo leer la colección "header" de Firestore.', error);
        return throwError(() => error);
      }),
    );
  }
}