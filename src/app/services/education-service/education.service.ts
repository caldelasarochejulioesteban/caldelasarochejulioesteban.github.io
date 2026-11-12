import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { EducationModel } from '../../models/education/education.model';

@Injectable({ providedIn: 'root' })
export class EducationService {
  accesoEducation = 'education service running...';

  constructor(private firestore: Firestore) {}

  getEducation(): Observable<EducationModel[]> {
    const educationCollection = collection(this.firestore, 'education');
    return collectionData(educationCollection, { idField: 'id' }).pipe(
      catchError((error: unknown) => {
        console.error('No se pudo leer la colección "education" de Firestore.', error);
        return throwError(() => error);
      }),
    );
  }
}
