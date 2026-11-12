import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LanguageModel } from '../../models/languages/languages.model';

@Injectable({ providedIn: 'root' })
export class LanguagesService {
  accesoLanguages = 'languages service running...';

  constructor(private firestore: Firestore) {}

  getLanguages(): Observable<LanguageModel[]> {
    const languagesCollection = collection(this.firestore, 'languages');
    return collectionData(languagesCollection, { idField: 'id' }).pipe(
      catchError((error: unknown) => {
        console.error('No se pudo leer la colección "languages" de Firestore.', error);
        return throwError(() => error);
      }),
    );
  }
}
