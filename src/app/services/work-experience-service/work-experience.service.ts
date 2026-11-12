import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WorkExperienceModel } from '../../models/work-experience/work-experience.model';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {
  accesoWorkExperience = 'work experience service running...';

  constructor(private firestore: Firestore) {}

  getWorkExperience(): Observable<WorkExperienceModel[]> {
    const workCollection = collection(this.firestore, 'work-experience');
    return collectionData(workCollection, { idField: 'id' }).pipe(
      catchError((error: unknown) => {
        console.error('No se pudo leer la colección "work-experience" de Firestore.', error);
        return throwError(() => error);
      }),
    );
  }
}